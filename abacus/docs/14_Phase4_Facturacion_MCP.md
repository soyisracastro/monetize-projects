# 14 - PHASE 4: FACTURACIÓN MCP SERVER

**Versión:** 1.0  
**Implementación:** Mes 10-12 (Año 1) o Mes 1-3 (Año 2)  
**Prerrequisito:** 50+ suscriptores Premium, MCP SAT funcionando

---

## 🎯 VISIÓN: FACTURACIÓN POR WHATSAPP

**Objetivo:** Permitir a usuarios generar facturas electrónicas (CFDI) directamente desde WhatsApp en 30 segundos.

### Flujo Ideal

```
Usuario (WhatsApp):
"Genera factura para PEJX850101XXX
Concepto: Asesoría fiscal
Monto: $5,000"

Abacus:
📄 Factura lista:
Cliente: Juan Pérez García
Total: $5,800 MXN (IVA incluido)
Uso CFDI: G03

¿Confirmas? (sí/no)

Usuario: "sí"

Abacus:
✅ Timbrada
UUID: 12345678-1234...
📎 [PDF]
📎 [XML]

¿Enviar al cliente por email?
```

**Tiempo total:** 30-60 segundos vs 5-10 minutos manual

---

## 🏗️ ARQUITECTURA DEL MCP SERVER

### Stack Tecnológico

```javascript
Servidor MCP:
- Node.js 20+
- @modelcontextprotocol/sdk
- SDK del PAC elegido (Finkok/SW/otro)
- PostgreSQL (registro facturas)
- Redis (caché de RFC validados)

Integración:
- OpenClaw → MCP Server → PAC
```

### Estructura del Proyecto

```
/facturacion-mcp-server
  /src
    /tools              # Herramientas MCP
      validar-rfc.js
      preview-factura.js
      timbrar.js
      cancelar.js
      enviar-email.js
    /services
      pac-client.js     # Cliente del PAC
      sat-validator.js  # Validaciones SAT
    /db
      facturas.js       # CRUD facturas
    index.js            # Servidor MCP principal
  /config
    pac-credentials.js
  package.json
  README.md
```

---

## 🔧 HERRAMIENTAS MCP (TOOLS)

### 1. validar_rfc

**Descripción:** Valida RFC y obtiene datos del contribuyente

```javascript
{
  name: 'validar_rfc',
  description: 'Valida RFC y obtiene información del SAT',
  input_schema: {
    type: 'object',
    properties: {
      rfc: { 
        type: 'string',
        pattern: '^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$'
      }
    },
    required: ['rfc']
  },
  
  async handler({ rfc }) {
    // 1. Validar formato
    if (!validarFormatoRFC(rfc)) {
      return { error: 'RFC inválido' };
    }
    
    // 2. Consultar en caché
    const cached = await redis.get(`rfc:${rfc}`);
    if (cached) return JSON.parse(cached);
    
    // 3. Consultar al SAT (web scraping o API no oficial)
    const datos = await consultarSAT(rfc);
    
    // 4. Cachear por 7 días
    await redis.setex(`rfc:${rfc}`, 604800, JSON.stringify(datos));
    
    return {
      valido: true,
      rfc: rfc,
      nombre: datos.razon_social,
      regimen_fiscal: datos.regimen,
      codigo_postal: datos.cp,
      uso_cfdi_sugerido: inferirUsoCFDI(datos.regimen)
    };
  }
}
```

**Respuesta exitosa:**
```json
{
  "valido": true,
  "rfc": "PEJX850101XXX",
  "nombre": "Juan Pérez García",
  "regimen_fiscal": "612 - Personas Físicas con Actividades Empresariales",
  "codigo_postal": "62000",
  "uso_cfdi_sugerido": "G03"
}
```

---

### 2. previsualizar_factura

**Descripción:** Genera previsualización antes de timbrar

```javascript
{
  name: 'previsualizar_factura',
  description: 'Calcula totales y genera preview de factura',
  input_schema: {
    type: 'object',
    properties: {
      receptor_rfc: { type: 'string' },
      conceptos: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            descripcion: { type: 'string' },
            cantidad: { type: 'number', minimum: 1 },
            precio_unitario: { type: 'number', minimum: 0 },
            clave_prod_serv: { type: 'string', default: '84111506' },
            clave_unidad: { type: 'string', default: 'E48' }
          },
          required: ['descripcion', 'cantidad', 'precio_unitario']
        },
        minItems: 1
      },
      uso_cfdi: { type: 'string', default: 'G03' },
      forma_pago: { type: 'string', default: '99' },
      metodo_pago: { type: 'string', default: 'PUE' }
    },
    required: ['receptor_rfc', 'conceptos']
  },
  
  async handler(datos) {
    // Calcular subtotal
    const subtotal = datos.conceptos.reduce((sum, c) => 
      sum + (c.cantidad * c.precio_unitario), 0
    );
    
    // Calcular IVA (16%)
    const iva = subtotal * 0.16;
    
    // Total
    const total = subtotal + iva;
    
    // Generar preview legible
    const preview = generarPreviewTexto({
      ...datos,
      subtotal,
      iva,
      total
    });
    
    return {
      subtotal: subtotal.toFixed(2),
      iva: iva.toFixed(2),
      total: total.toFixed(2),
      preview: preview,
      datos_validados: datos
    };
  }
}
```

**Respuesta:**
```json
{
  "subtotal": "5000.00",
  "iva": "800.00",
  "total": "5800.00",
  "preview": "📋 FACTURA\n\nCliente: Juan Pérez García\nRFC: PEJX850101XXX\n\nConcepto: Asesoría fiscal\nCantidad: 1\nPrecio: $5,000.00\n\nSubtotal: $5,000.00\nIVA (16%): $800.00\nTOTAL: $5,800.00\n\nForma de pago: Por definir\nMétodo: PUE"
}
```

---

### 3. timbrar_factura

**Descripción:** Timbra factura en el PAC

```javascript
{
  name: 'timbrar_factura',
  description: 'Genera y timbra CFDI 4.0 con el PAC',
  input_schema: {
    type: 'object',
    properties: {
      datos_factura: { 
        type: 'object'
        // (Mismo schema que previsualizar)
      }
    },
    required: ['datos_factura']
  },
  
  async handler({ datos_factura }) {
    try {
      // 1. Generar XML CFDI 4.0
      const xml = await generarXMLCFDI40({
        emisor: {
          rfc: process.env.RFC_EMISOR,
          nombre: process.env.RAZON_SOCIAL_EMISOR,
          regimen_fiscal: process.env.REGIMEN_FISCAL_EMISOR
        },
        receptor: {
          rfc: datos_factura.receptor_rfc,
          nombre: datos_factura.receptor_nombre,
          uso_cfdi: datos_factura.uso_cfdi,
          regimen_fiscal: datos_factura.receptor_regimen,
          domicilio_fiscal: datos_factura.receptor_cp
        },
        conceptos: datos_factura.conceptos,
        forma_pago: datos_factura.forma_pago,
        metodo_pago: datos_factura.metodo_pago
      });
      
      // 2. Sellar XML con CSD
      const xmlSellado = await sellarXML(xml, {
        cer: process.env.CSD_CER_BASE64,
        key: process.env.CSD_KEY_BASE64,
        password: process.env.CSD_PASSWORD
      });
      
      // 3. Timbrar en el PAC
      const resultado = await pacClient.timbrar(xmlSellado);
      
      // 4. Generar PDF
      const pdf = await generarPDF(resultado.xml_timbrado);
      
      // 5. Guardar en base de datos
      await db.facturas.create({
        uuid: resultado.uuid,
        rfc_emisor: process.env.RFC_EMISOR,
        rfc_receptor: datos_factura.receptor_rfc,
        total: datos_factura.total,
        xml_base64: resultado.xml_timbrado,
        pdf_base64: pdf,
        fecha_timbrado: new Date(),
        status: 'vigente'
      });
      
      return {
        timbrado: true,
        uuid: resultado.uuid,
        folio: resultado.folio,
        serie: resultado.serie,
        fecha_timbrado: resultado.fecha_timbrado,
        xml_base64: resultado.xml_timbrado,
        pdf_base64: pdf,
        cadena_original: resultado.cadena_original,
        sello_sat: resultado.sello_sat,
        no_certificado_sat: resultado.no_certificado_sat
      };
      
    } catch (error) {
      return {
        timbrado: false,
        error: error.message,
        detalles: error.response?.data
      };
    }
  }
}
```

---

### 4. enviar_factura_email

**Descripción:** Envía factura por email al cliente

```javascript
{
  name: 'enviar_factura_email',
  description: 'Envía PDF y XML de factura por email',
  input_schema: {
    type: 'object',
    properties: {
      uuid: { type: 'string' },
      email_destino: { type: 'string', format: 'email' }
    },
    required: ['uuid', 'email_destino']
  },
  
  async handler({ uuid, email_destino }) {
    // 1. Obtener factura de DB
    const factura = await db.facturas.findByUUID(uuid);
    if (!factura) {
      return { error: 'Factura no encontrada' };
    }
    
    // 2. Preparar email
    const emailData = {
      to: email_destino,
      from: process.env.EMAIL_EMISOR,
      subject: `Factura Electrónica - ${uuid}`,
      html: plantillaEmailFactura({
        uuid: factura.uuid,
        folio: factura.folio,
        total: factura.total,
        fecha: factura.fecha_timbrado
      }),
      attachments: [
        {
          filename: `${uuid}.pdf`,
          content: factura.pdf_base64,
          encoding: 'base64'
        },
        {
          filename: `${uuid}.xml`,
          content: factura.xml_base64,
          encoding: 'base64'
        }
      ]
    };
    
    // 3. Enviar via SendGrid/SMTP
    await emailClient.send(emailData);
    
    // 4. Registrar envío
    await db.facturas.update(uuid, {
      email_enviado: true,
      email_enviado_a: email_destino,
      email_enviado_at: new Date()
    });
    
    return {
      enviado: true,
      email: email_destino,
      fecha_envio: new Date()
    };
  }
}
```

---

### 5. cancelar_factura

**Descripción:** Cancela factura en el SAT

```javascript
{
  name: 'cancelar_factura',
  description: 'Cancela CFDI en el SAT con motivo',
  input_schema: {
    type: 'object',
    properties: {
      uuid: { type: 'string' },
      motivo: { 
        type: 'string',
        enum: ['01', '02', '03', '04']
        // 01: Con relación
        // 02: Sin relación
        // 03: No se realizó
        // 04: Nominativa global
      },
      uuid_sustitucion: { type: 'string' } // Opcional
    },
    required: ['uuid', 'motivo']
  },
  
  async handler({ uuid, motivo, uuid_sustitucion }) {
    // 1. Verificar que factura existe y está vigente
    const factura = await db.facturas.findByUUID(uuid);
    if (!factura || factura.status !== 'vigente') {
      return { error: 'Factura no válida para cancelación' };
    }
    
    // 2. Cancelar en el PAC
    const resultado = await pacClient.cancelar({
      uuid: uuid,
      rfc_emisor: process.env.RFC_EMISOR,
      motivo_cancelacion: motivo,
      uuid_sustitucion: uuid_sustitucion,
      certificado: process.env.CSD_CER_BASE64,
      llave_privada: process.env.CSD_KEY_BASE64,
      password: process.env.CSD_PASSWORD
    });
    
    // 3. Actualizar en DB
    await db.facturas.update(uuid, {
      status: 'cancelada',
      motivo_cancelacion: motivo,
      fecha_cancelacion: new Date(),
      acuse_cancelacion: resultado.acuse_base64
    });
    
    return {
      cancelado: true,
      uuid: uuid,
      fecha_cancelacion: resultado.fecha,
      acuse_base64: resultado.acuse_base64,
      estatus_sat: resultado.estatus
    };
  }
}
```

---

### 6. guardar_en_drive

**Descripción:** Guarda factura en Google Drive organizada

```javascript
{
  name: 'guardar_en_drive',
  description: 'Sube factura a Drive en carpeta organizada',
  input_schema: {
    type: 'object',
    properties: {
      uuid: { type: 'string' },
      año: { type: 'string' },
      mes: { type: 'string' }
    },
    required: ['uuid', 'año', 'mes']
  },
  
  async handler({ uuid, año, mes }) {
    // 1. Obtener factura
    const factura = await db.facturas.findByUUID(uuid);
    
    // 2. Crear estructura de carpetas si no existe
    // Drive/Facturas/2026/Marzo/
    const carpetaId = await driveClient.ensureFolder([
      'Facturas',
      año,
      mes
    ]);
    
    // 3. Subir PDF
    await driveClient.uploadFile({
      folderId: carpetaId,
      filename: `${factura.folio}_${uuid}.pdf`,
      mimeType: 'application/pdf',
      content: Buffer.from(factura.pdf_base64, 'base64')
    });
    
    // 4. Subir XML
    await driveClient.uploadFile({
      folderId: carpetaId,
      filename: `${factura.folio}_${uuid}.xml`,
      mimeType: 'application/xml',
      content: Buffer.from(factura.xml_base64, 'base64')
    });
    
    return {
      guardado: true,
      carpeta: `Facturas/${año}/${mes}`,
      url: await driveClient.getFolderUrl(carpetaId)
    };
  }
}
```

---

## 📦 INTEGRACIÓN CON PAC

### Opciones de PACs en México

#### 1. Finkok (Popular)

```javascript
// pac-clients/finkok.js

const soap = require('soap');

class FinkokClient {
  constructor({ usuario, password, wsdl }) {
    this.usuario = usuario;
    this.password = password;
    this.wsdl = wsdl || 'https://facturacion.finkok.com/servicios/soap/stamp.wsdl';
  }
  
  async timbrar(xmlSellado) {
    const client = await soap.createClientAsync(this.wsdl);
    
    const result = await client.stampAsync({
      xml: xmlSellado,
      username: this.usuario,
      password: this.password
    });
    
    return {
      uuid: result.UUID,
      xml_timbrado: result.xml,
      fecha_timbrado: result.Fecha,
      sello_sat: result.SelloSAT,
      no_certificado_sat: result.NoCertificadoSAT,
      cadena_original: result.CadenaOriginal
    };
  }
  
  async cancelar({ uuid, motivo, rfc_emisor }) {
    const client = await soap.createClientAsync(this.wsdl);
    
    const result = await client.cancelAsync({
      UUIDS: [uuid],
      username: this.usuario,
      password: this.password,
      taxpayer_id: rfc_emisor,
      cer: this.certificado,
      key: this.llavePrivada,
      motivo: motivo
    });
    
    return {
      cancelado: true,
      fecha: new Date(),
      acuse_base64: result.Acuse,
      estatus: result.EstatusCancelacion
    };
  }
}

// Costos Finkok:
// - Setup: $500-1,000 MXN one-time
// - Timbrado: ~$0.50-1.00 MXN por factura
// - Sin mensualidad (pay-per-use)
```

#### 2. SW Sapien (SmarterWeb)

```javascript
// pac-clients/sw-sapien.js

const axios = require('axios');

class SWSapienClient {
  constructor({ token, url }) {
    this.token = token;
    this.url = url || 'https://api.sw.com.mx';
  }
  
  async timbrar(xmlSellado) {
    const response = await axios.post(
      `${this.url}/cfdi33/stamp/v4/b64`,
      {
        contentXml: Buffer.from(xmlSellado).toString('base64')
      },
      {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return {
      uuid: response.data.data.uuid,
      xml_timbrado: response.data.data.cfdi,
      fecha_timbrado: response.data.data.fechaTimbrado,
      sello_sat: response.data.data.selloSAT,
      no_certificado_sat: response.data.data.noCertificadoSAT,
      cadena_original: response.data.data.cadenaOriginal
    };
  }
}

// Costos SW Sapien:
// - Setup: Gratis
// - Timbrado: ~$0.30-0.60 MXN por factura
// - Mensualidad: $0 (pay-per-use)
```

---

## 💬 FLUJOS DE CONVERSACIÓN EN WHATSAPP

### Flujo 1: Factura Simple

```
Usuario:
"Genera factura para PEJX850101XXX
Asesoría fiscal
$5,000"

Abacus (ejecuta):
1. validar_rfc("PEJX850101XXX")
2. previsualizar_factura({
     receptor_rfc: "PEJX850101XXX",
     conceptos: [{
       descripcion: "Asesoría fiscal",
       cantidad: 1,
       precio_unitario: 5000
     }]
   })

Abacus responde:
📋 Factura lista:

Cliente: Juan Pérez García
RFC: PEJX850101XXX
Régimen: 612

Concepto: Asesoría fiscal
Subtotal: $5,000.00
IVA (16%): $800.00
TOTAL: $5,800.00

Uso CFDI: G03 - Gastos en general
Forma pago: Por definir
Método: PUE

¿Confirmas? (sí/cambiar/cancelar)

Usuario: "sí"

Abacus (ejecuta):
3. timbrar_factura(datos)
4. guardar_en_drive(uuid, "2026", "Marzo")

Abacus responde:
✅ ¡Factura timbrada!

UUID: 12345678-1234-1234...
Folio: A-1234
Fecha: 11/03/2026 16:45:32

📎 [Envía PDF]
📎 [Envía XML]

¿Enviar al cliente por email?

Usuario: "juan.perez@email.com"

Abacus (ejecuta):
5. enviar_factura_email(uuid, "juan.perez@email.com")

Abacus responde:
✅ Factura enviada a juan.perez@email.com
💾 Guardada en Drive/Facturas/2026/Marzo
```

---

### Flujo 2: Factura con Imagen CSF

```
Usuario:
[Envía foto de constancia fiscal]
"Factura de $10,000 por consultoría"

Abacus (ejecuta):
1. OCR en imagen → extrae RFC, nombre, CP
2. validar_rfc(rfc_extraido)
3. previsualizar_factura(...)

Abacus responde:
📸 Datos extraídos de la constancia:

Cliente: María González López
RFC: GOLM920505XXX
CP: 62000
Régimen: 612

Concepto: Consultoría
Total: $11,600.00 (IVA incluido)

¿Todo correcto?

Usuario: "sí"

[Continúa flujo normal de timbrado]
```

---

### Flujo 3: Modificar Antes de Timbrar

```
Usuario:
"Factura PEJX850101XXX $5,000 asesoría"

Abacus:
[Preview generado]
¿Confirmas?

Usuario: "cambiar uso a D03"

Abacus (re-ejecuta):
previsualizar_factura({
  ...datos_anteriores,
  uso_cfdi: "D03"
})

Abacus responde:
✅ Actualizado a D03 - Honorarios
¿Ahora sí confirmas?

Usuario: "sí"

[Timbra con uso CFDI correcto]
```

---

## 💰 MODELO DE NEGOCIO

### Pricing con Facturación

**Opción A: Incluido en Premium**

```
Abacus Premium: $199 MXN/mes
✅ Consultas ilimitadas
✅ Hasta 50 facturas/mes incluidas
✅ Envío automático por email
✅ Guardado en Drive

Costo timbrado: ~$0.50/factura
50 facturas × $0.50 = $25 MXN costo
Margen: $174 MXN/mes
```

**Opción B: Add-on Separado**

```
Abacus Premium: $99 MXN/mes
+ Módulo Facturación: $99 MXN/mes adicional
  → 50 facturas incluidas
  → $2 MXN por factura extra

Costo total usuario: $198 MXN/mes
Costo PAC: $25 MXN (50 facturas)
Margen: $173 MXN/mes
```

**Opción C: Pay-per-use**

```
Abacus Premium: $99 MXN/mes
Facturación: $3 MXN por factura
  (Sin límite)

Costo PAC: $0.50/factura
Tu margen: $2.50/factura

Usuario factura 20/mes:
- Paga: $99 + $60 = $159 MXN
- Tu costo: $10 PAC
- Margen: $149 MXN
```

---

## 🚀 ROADMAP DE IMPLEMENTACIÓN

### Semana 1-2: Investigación PAC

```
☐ Comparar PACs (Finkok, SW, otros)
☐ Crear cuenta de pruebas
☐ Testing de timbrado sandbox
☐ Documentar API del PAC elegido
```

### Semana 3-4: MCP Server Base

```
☐ Setup estructura del proyecto
☐ Implementar validar_rfc
☐ Implementar previsualizar_factura
☐ Testing con datos ficticios
```

### Semana 5-6: Integración PAC

```
☐ Cliente del PAC funcional
☐ Generación XML CFDI 4.0
☐ Sellado con CSD
☐ Timbrado en ambiente de pruebas
```

### Semana 7-8: Features Adicionales

```
☐ Envío por email
☐ Guardado en Drive
☐ Cancelación de facturas
☐ Registro en base de datos
```

### Semana 9-10: Integración OpenClaw

```
☐ Registrar MCP en OpenClaw
☐ Conversaciones en WhatsApp
☐ Testing end-to-end
☐ Documentación de uso
```

### Semana 11-12: Producción

```
☐ Obtener CSD de producción
☐ Configurar PAC en producción
☐ Testing con facturas reales
☐ Lanzamiento a beta testers
```

---

## 📊 MÉTRICAS DE ÉXITO

### Uso

```
☐ 30%+ usuarios Premium usan facturación
☐ Promedio 15+ facturas/mes por usuario activo
☐ 90%+ facturas timbradas exitosamente
```

### Experiencia

```
☐ <60 segundos desde solicitud hasta PDF
☐ 95%+ satisfacción con feature
☐ <1% errores de timbrado
```

### Negocio

```
☐ $50+ MXN adicional por usuario/mes
☐ 20%+ aumento en retención Premium
☐ Feature citada en 50%+ testimoniales
```

---

## 🆘 TROUBLESHOOTING COMÚN

### Problema: RFC no válido

```
Error: "RFC XXXX no existe en el SAT"

Solución:
1. Verificar que RFC esté bien escrito
2. Confirmar que RFC esté activo en SAT
3. Pedir constancia de situación fiscal al cliente
```

### Problema: Error al timbrar

```
Error: "Error 307 - Sello inválido"

Causas:
1. CSD vencido → Renovar certificado
2. Password incorrecto → Verificar en .env
3. XML mal formado → Revisar generación

Solución:
- Verificar vigencia CSD
- Re-generar XML
- Revisar logs del PAC
```

### Problema: Factura duplicada

```
Error: "UUID ya existe"

Causa: Intentar timbrar 2 veces la misma factura

Solución:
- Verificar en DB si ya existe UUID
- Mostrar factura existente al usuario
- NO volver a timbrar
```

---

## 📚 RECURSOS

### PACs Recomendados

- **Finkok:** https://www.finkok.com
- **SW Sapien:** https://www.sw.com.mx
- **PAC Santander:** https://www.pacsantander.com

### Documentación Técnica

- **CFDI 4.0:** http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Anexo_20_Guia_CFDI.pdf
- **Catálogos SAT:** http://omawww.sat.gob.mx/tramitesyservicios/Paginas/catalogos_emision_cfdi.htm

### Herramientas

- **Validador SAT:** https://verificacfdi.facturaelectronica.sat.gob.mx
- **Generador XML:** https://github.com/phpcfdi

---

## ⚠️ CONSIDERACIONES LEGALES

### Certificados de Sello Digital (CSD)

```
Necesitas:
✅ e.firma vigente
✅ Solicitar CSD en el SAT
✅ Renovar cada 4 años
✅ Resguardar contraseña de forma segura

NO compartir:
❌ Archivo .key (llave privada)
❌ Password del CSD
❌ Datos del PAC
```

### Responsabilidad Fiscal

```
⚠️ Las facturas emitidas por Abacus son LEGALMENTE
   vinculantes y deben cumplir con TODOS los
   requisitos fiscales.

Asegúrate:
✅ RFC receptor válido
✅ Conceptos descritos correctamente
✅ Montos correctos
✅ Uso CFDI apropiado
```

---

**Implementar en:** Mes 10-12 (Año 1) o después

**Costo desarrollo:** $3,000-5,000 USD outsource o 4-6 semanas tu tiempo

**ROI esperado:** 30%+ usuarios Premium lo usan = $1,500+ MXN/mes adicional
