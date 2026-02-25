# Organización de Expedientes Digitales

> Crea una estructura estandarizada de carpetas y nomenclatura de archivos para organizar los expedientes digitales de tus clientes de forma profesional y eficiente.

## Cuándo usarlo

- Al dar de alta un cliente nuevo y necesitas crear su estructura de carpetas desde cero
- Cuando quieres estandarizar la organización de TODOS tus clientes (dejar de tener cada uno diferente)
- Si estás migrando de un sistema de archivos físico a digital
- Al incorporar un colaborador nuevo al despacho y necesitas que siga un estándar
- Cuando buscas un archivo y te tardas más de 30 segundos en encontrarlo (señal de que necesitas reorganizar)

## El Prompt

```
Actúa como un consultor de productividad especializado en despachos contables mexicanos.

Diseña una estructura de carpetas y sistema de nomenclatura de archivos optimizado para un despacho contable que maneja clientes mexicanos.

DATOS DEL DESPACHO:
- Nombre: [NOMBRE_DESPACHO]
- Número de clientes activos: [CANTIDAD]
- Servicios principales: [LISTAR]
  (Ejemplos: contabilidad mensual, nómina, declaraciones, auditoría, etc.)
- ¿Dónde almacena archivos? [LOCAL/NUBE/AMBOS]
  (Google Drive, OneDrive, Dropbox, servidor local, etc.)
- ¿Usa sistema contable? [SI/NO] - ¿Cuál? [NOMBRE_SISTEMA]
- Colaboradores: [CANTIDAD] personas

TIPO DE CLIENTES:
- Personas físicas: [CANTIDAD] - Regímenes: [LISTAR]
- Personas morales: [CANTIDAD] - Regímenes: [LISTAR]
- ¿Algún giro especial? [DETALLAR]
  (Restaurantes, médicos, constructoras, etc.)

PROBLEMAS ACTUALES:
[DESCRIBIR]
(Ejemplos: cada quien guarda archivos como quiere, no encuentro CFDIs rápido, los XML están revueltos, etc.)

GENERA:

1. **ESTRUCTURA MAESTRA DE CARPETAS**
   ```
   📁 [DESPACHO]
   ├── 📁 01_CLIENTES
   │   ├── 📁 [RFC] - [NOMBRE_CLIENTE]
   │   │   ├── 📁 01_DATOS_GENERALES
   │   │   │   (Constancias, poderes, actas, contratos)
   │   │   ├── 📁 02_CONTABILIDAD
   │   │   │   ├── 📁 [AÑO]
   │   │   │   │   ├── 📁 01_ENE a 12_DIC
   │   │   │   │   │   (Pólizas, auxiliares, balanzas)
   │   │   │   │   └── 📁 13_CIERRE_ANUAL
   │   │   ├── 📁 03_FISCAL
   │   │   │   ├── 📁 [AÑO]
   │   │   │   │   ├── 📁 DECLARACIONES_MENSUALES
   │   │   │   │   ├── 📁 DECLARACION_ANUAL
   │   │   │   │   ├── 📁 DIOT
   │   │   │   │   └── 📁 PAPELES_TRABAJO
   │   │   ├── 📁 04_CFDI
   │   │   │   ├── 📁 [AÑO]
   │   │   │   │   ├── 📁 EMITIDOS
   │   │   │   │   │   ├── 📁 01_ENE a 12_DIC
   │   │   │   │   │   │   (PDF + XML por mes)
   │   │   │   │   └── 📁 RECIBIDOS
   │   │   │   │       ├── 📁 01_ENE a 12_DIC
   │   │   ├── 📁 05_NOMINA
   │   │   │   ├── 📁 [AÑO]
   │   │   │   │   ├── 📁 RECIBOS
   │   │   │   │   ├── 📁 SUA
   │   │   │   │   ├── 📁 IMSS_MOVIMIENTOS
   │   │   │   │   └── 📁 ISN
   │   │   ├── 📁 06_ESTADOS_FINANCIEROS
   │   │   ├── 📁 07_CORRESPONDENCIA_SAT
   │   │   │   (Acuses, requerimientos, cartas invitación)
   │   │   └── 📁 08_CONTRATOS_Y_LEGAL
   │   │
   │   └── 📁 [RFC] - [SIGUIENTE_CLIENTE]
   │
   ├── 📁 02_DESPACHO_INTERNO
   │   ├── 📁 PLANTILLAS
   │   ├── 📁 PROCEDIMIENTOS
   │   ├── 📁 FACTURACION_DESPACHO
   │   └── 📁 CONTABILIDAD_DESPACHO
   │
   └── 📁 03_RECURSOS
       ├── 📁 NORMATIVIDAD
       ├── 📁 FORMATOS_SAT
       └── 📁 CAPACITACION
   ```

2. **SISTEMA DE NOMENCLATURA DE ARCHIVOS**
   Reglas claras para nombrar cada tipo de archivo:
   | Tipo de archivo | Formato del nombre | Ejemplo |
   |----------------|-------------------|---------|
   | CFDI emitido | RFC_YYYYMM_UUID8.pdf | ABC010101AB1_202501_a3b4c5d6.pdf |
   | Declaración mensual | DECL_IMPUESTO_YYYYMM_TIPO.pdf | DECL_ISR_202501_PROVISIONAL.pdf |
   | Balanza | BALANZA_YYYYMM.xlsx | BALANZA_202501.xlsx |
   | Nómina | NOM_QUINCENA_YYYYMM_Q#.pdf | NOM_202501_Q2.pdf |
   | Estado financiero | EF_TIPO_YYYYMM.pdf | EF_BALANCE_202512.pdf |
   | (etc.) | | |

3. **REGLAS DE NOMENCLATURA**
   - Formato de fecha: YYYYMM o YYYYMMDD
   - Sin espacios (usar guion bajo _)
   - Sin caracteres especiales (ñ, acentos)
   - Mayúsculas para prefijos, minúsculas para descripciones
   - Máximo 50 caracteres por nombre de archivo

4. **CHECKLIST DE EXPEDIENTE POR CLIENTE**
   Documentos mínimos que debe tener cada expediente:
   - [ ] Constancia de Situación Fiscal (actualizada)
   - [ ] Identificación oficial
   - [ ] Comprobante de domicilio
   - [ ] Contrato de servicios firmado
   - [ ] (continuar según tipo de cliente)

5. **PROCEDIMIENTO DE MANTENIMIENTO**
   - Frecuencia de respaldo
   - Quién es responsable de qué carpetas
   - Cuándo archivar expedientes de clientes inactivos
   - Política de retención (cuánto tiempo guardar)

IMPORTANTE: La estructura debe funcionar tanto en Google Drive/OneDrive como en un servidor local. Considera los límites de caracteres de Windows en rutas de archivos.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_DESPACHO]` | Tu despacho | García Contadores |
| `[CANTIDAD]` clientes | Cuántos manejas | 30 clientes activos |
| `[LISTAR]` servicios | Qué haces | Contabilidad, nómina, declaraciones, asesoría fiscal |
| `[LOCAL/NUBE]` | Dónde guardas archivos | Google Drive + servidor local |
| Problemas actuales | Qué te duele | Cada colaborador guarda en diferente lugar, los XML de 2023 están perdidos |

## Ejemplo de uso

```
DATOS DEL DESPACHO:
- Nombre: Soluciones Contables ISC
- Clientes activos: 25
- Servicios: Contabilidad mensual, declaraciones, nómina (10 clientes), asesoría fiscal
- Almacenamiento: Google Drive (principal) + disco duro externo (respaldo)
- Sistema contable: CONTPAQi
- Colaboradores: 3 personas (titular + 2 auxiliares)

CLIENTES:
- 15 personas físicas (612 y RESICO)
- 10 personas morales (601)
- Giros especiales: 3 restaurantes, 2 consultorios médicos

PROBLEMAS:
- Los XML los descargo del SAT pero los dejo en la carpeta de descargas
- Mi auxiliar guarda todo con nombres como "declaracion juan.pdf"
- No tengo forma de saber rápido si ya presenté la DIOT de un cliente
```

## Tips profesionales

- **Implementa la estructura GRADUALMENTE.** No intentes reorganizar 30 clientes en un día. Empieza con 3-5 clientes clave y ve migrando conforme trabajes con cada uno.
- **Usa colores o etiquetas** en Google Drive/OneDrive para marcar el estatus: rojo = pendiente, amarillo = en proceso, verde = completo. Esto te da una vista rápida del avance de cada cliente.
- **Crea una carpeta "_PLANTILLA_CLIENTE"** con la estructura vacía. Cada vez que des de alta un cliente nuevo, solo duplica la plantilla y renómbrala. Así siempre empiezas con la estructura correcta.
