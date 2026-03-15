# 01 - MVP SETUP GUIDE

**Objetivo:** Lanzar Abacus MVP en WhatsApp Business HOY (11 Marzo 2026)  
**Tiempo estimado:** 6-8 horas  
**Prerrequisitos:** Tarjeta de crédito, número telefónico dedicado (opcional)

---

## 📋 CHECKLIST PRE-LANZAMIENTO

### Cuentas Necesarias (Crear ANTES de empezar)

- [ ] Cuenta Anthropic Claude Pro ($100 USD/mes)
  - https://console.anthropic.com
  - Plan: Claude Pro (para OAuth)
  
- [ ] Cuenta OpenAI ChatGPT Plus ($20 USD/mes)
  - https://platform.openai.com
  - Plan: ChatGPT Plus (para OAuth)
  
- [ ] Número para WhatsApp Business
  - Opción A: Chip prepago nuevo ($50-100 MXN)
  - Opción B: Usar número existente (backup primero)
  - Opción C: Número virtual (Twilio ~$1 USD/mes)

---

## ⏱️ TIMELINE DEL DÍA

```
09:00 - 10:00  → Contratar Hostinger VPS
10:00 - 11:30  → Setup inicial del servidor
11:30 - 13:00  → Instalar OpenClaw
13:00 - 14:00  → Configurar modelos IA
14:00 - 15:00  → Conectar WhatsApp Business
15:00 - 16:30  → Base de conocimiento mínima
16:30 - 17:30  → Testing personal
17:30 - 18:30  → Invitar beta testers
18:30 - 20:00  → Monitoreo y ajustes
```

---

## PASO 1: CONTRATAR HOSTINGER VPS (30 min)

### 1.1 Ir al sitio de Hostinger

```
URL: https://www.hostinger.com/mx/vps-hosting
```

### 1.2 Seleccionar plan correcto

```
✅ Plan: KVM 1
   - 4GB RAM
   - 1 vCPU
   - 50GB NVMe SSD
   - 4TB Bandwidth

✅ Duración: Mensual (NO anual todavía)

✅ Sistema Operativo: Ubuntu 24.04 LTS (64-bit)

✅ Ubicación: USA East (mejor latencia para México)

❌ NO seleccionar: OpenClaw implementación automática
   (Ahorra $102.99 MXN/mes - lo instalarás manualmente)
```

### 1.3 Completar compra

```
Precio esperado: ~116-139 MXN/mes
(Si sale >150 MXN, revisa que no hayas agregado extras)

Método de pago: Tarjeta de crédito
```

### 1.4 Recibir credenciales

```
Email de Hostinger incluirá:
✅ IP del servidor: XXX.XXX.XXX.XXX
✅ Usuario: root
✅ Password: [contraseña generada]
✅ Acceso hPanel: https://hpanel.hostinger.com
```

**⏸️ CHECKPOINT:** ¿Recibiste el email con las credenciales? → Continúa

---

## PASO 2: SETUP INICIAL DEL SERVIDOR (1.5 horas)

### 2.1 Conectar por SSH

```bash
# En tu terminal local (Mac/Linux/Windows con WSL)
ssh root@[TU_IP_DEL_SERVIDOR]

# Ejemplo:
ssh root@123.45.67.89

# Te pedirá password (del email de Hostinger)
# Pégalo y presiona Enter
```

**Primera vez:** Te pedirá confirmar fingerprint, escribe `yes`

### 2.2 Cambiar password de root (Seguridad)

```bash
# Cambiar a password más seguro
passwd

# Ingresa nuevo password (2 veces)
# Guárdalo en un lugar seguro (1Password, LastPass, etc.)
```

### 2.3 Actualizar sistema

```bash
# Actualizar lista de paquetes
apt update

# Actualizar paquetes instalados
apt upgrade -y

# Esto puede tardar 5-10 minutos
```

### 2.4 Instalar dependencias básicas

```bash
# Herramientas esenciales
apt install -y curl wget git build-essential

# Verificar instalación
curl --version
git --version
```

### 2.5 Instalar Node.js 20.x (Requerido para OpenClaw)

```bash
# Agregar repositorio de NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Instalar Node.js y npm
apt install -y nodejs

# Verificar instalación
node --version  # Debe mostrar v20.x.x
npm --version   # Debe mostrar 10.x.x
```

### 2.6 Configurar firewall (Seguridad)

```bash
# Instalar UFW (Uncomplicated Firewall)
apt install -y ufw

# Permitir SSH (¡IMPORTANTE! Si no, te bloquearás)
ufw allow 22/tcp

# Permitir HTTP/HTTPS (para futuras integraciones)
ufw allow 80/tcp
ufw allow 443/tcp

# Activar firewall
ufw --force enable

# Verificar status
ufw status
```

**⏸️ CHECKPOINT:** ¿Node.js instalado y firewall activo? → Continúa

---

## PASO 3: INSTALAR OPENCLAW (1.5 horas)

### 3.1 Instalar OpenClaw globalmente

```bash
# Instalar via npm
npm install -g openclaw

# Esto puede tardar 3-5 minutos
```

### 3.2 Verificar instalación

```bash
# Ver versión instalada
openclaw --version

# Debe mostrar algo como: openclaw 2.x.x
```

### 3.3 Inicializar OpenClaw

```bash
# Crear configuración inicial
openclaw init

# Te hará preguntas:
# - Project name: abacus
# - Description: Asistente fiscal inteligente para México
# - Author: Isca Castro
```

### 3.4 Verificar estructura creada

```bash
# Ver estructura de directorios
ls -la ~/.openclaw/

# Deberías ver:
# - config.json
# - openclaw.json
# - skills/
# - memory/
```

**⏸️ CHECKPOINT:** ¿OpenClaw instalado y configurado? → Continúa

---

## PASO 4: CONFIGURAR MODELOS IA (1 hora)

### 4.1 Configurar Claude (Anthropic)

```bash
# Ejecutar configuración
openclaw configure

# Seleccionar: Anthropic
# Método: OAuth (NO API)
```

**Flujo OAuth de Claude:**
```
1. Se abrirá URL en navegador
2. Login con tu cuenta Anthropic (Claude Pro)
3. Autorizar acceso
4. Volver a terminal
5. Verificar: "✅ Claude configured successfully"
```

**IMPORTANTE:** Debes tener cuenta Claude Pro activa ($100/mes)

### 4.2 Configurar ChatGPT (OpenAI)

```bash
# Ejecutar configuración nuevamente
openclaw configure

# Seleccionar: OpenAI
# Método: OAuth (para chat) + API (para Whisper)
```

**Flujo OAuth de OpenAI:**
```
1. URL en navegador
2. Login con cuenta OpenAI (ChatGPT Plus)
3. Autorizar
4. Configurar API key para Whisper
   - Ir a: https://platform.openai.com/api-keys
   - Crear nueva key
   - Copiar y pegar en terminal
```

### 4.3 Configurar Gemini (Google) - Opcional

```bash
openclaw configure

# Seleccionar: Google
# Método: CLI credentials
# (Seguir instrucciones en pantalla)
```

### 4.4 Configurar fallbacks

```bash
# Editar configuración
nano ~/.openclaw/openclaw.json

# Buscar sección "model" y modificar:
{
  "model": {
    "default": "anthropic:claude-sonnet-4-5",
    "fallback": "openai:gpt-4o"
  }
}

# Guardar: Ctrl+O, Enter, Ctrl+X
```

### 4.5 Verificar modelos configurados

```bash
# Ver status de modelos
openclaw models status

# Deberías ver:
# ✅ anthropic:claude-sonnet-4-5 (OAuth)
# ✅ openai:gpt-4o (OAuth)
# ✅ openai:whisper-1 (API)
```

**⏸️ CHECKPOINT:** ¿Modelos configurados correctamente? → Continúa

---

## PASO 5: CONECTAR WHATSAPP BUSINESS (1 hora)

### 5.1 Preparar WhatsApp Business

**En tu teléfono (o teléfono dedicado):**

```
1. Descargar WhatsApp Business
   - Android: Google Play Store
   - iPhone: Apple App Store

2. Instalar con número dedicado
   - Usar chip nuevo o número diferente a personal

3. Configurar perfil de negocio:
   - Nombre: Abacus 🧮
   - Categoría: Servicios Financieros
   - Descripción: "Tu asistente fiscal inteligente 24/7"
   - Horario: 24 horas
```

### 5.2 Configurar OpenClaw para WhatsApp

```bash
# Agregar gateway de WhatsApp
openclaw gateway add whatsapp

# Seguir instrucciones en pantalla
```

### 5.3 Configuración sin pairing estricto (para MVP)

```bash
# Editar configuración de WhatsApp
nano ~/.openclaw/openclaw.json

# Buscar sección "channels" y modificar:
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "requireMention": false,      // En 1-a-1 no requiere mención
      "requirePairing": false,      // DESACTIVAR para beta testing
      "groupPolicy": "allow-all",   // Permite todos los grupos
      "groupSettings": {
        "requireMention": true,     // En grupos SÍ requiere mención
        "mentionKeywords": [
          "abacus",
          "Abacus",
          "ABACUS",
          "abaxux",
          "abacux"
        ]
      }
    }
  }
}

# Guardar: Ctrl+O, Enter, Ctrl+X
```

### 5.4 Escanear QR para vincular

```bash
# Iniciar gateway
openclaw gateway start whatsapp

# Se generará QR en terminal O
# URL con QR en navegador
```

**En WhatsApp Business:**
```
1. Abrir WhatsApp Business
2. Menú (⋮) → Dispositivos vinculados
3. Vincular un dispositivo
4. Escanear QR de OpenClaw
5. Esperar confirmación: "✅ Conectado"
```

### 5.5 Verificar conexión

```bash
# Ver status de gateways
openclaw gateway list

# Deberías ver:
# ✅ whatsapp (connected)
#    - Number: +52XXXXXXXXXX
#    - Status: Active
```

### 5.6 Testing básico

**Desde tu WhatsApp personal:**
```
Enviar mensaje al WhatsApp Business:
"Hola"

Abacus debería responder (aunque aún sin personalidad configurada)
```

**⏸️ CHECKPOINT:** ¿WhatsApp conectado y respondiendo? → Continúa

---

## PASO 6: BASE DE CONOCIMIENTO MÍNIMA (1.5 horas)

### 6.1 Crear estructura de skills

```bash
# Crear directorio de skills de Abacus
mkdir -p ~/.openclaw/skills/abacus

# Ir al directorio
cd ~/.openclaw/skills/abacus
```

### 6.2 Crear SOUL.md (Personalidad)

```bash
# Crear archivo
nano SOUL.md
```

**Contenido de SOUL.md:**
```markdown
# SOUL.md - Abacus

## Identidad
Nombre: Abacus 🧮
Tipo: Asistente Fiscal Inteligente
Creador: Isca Castro, C.P. (TodoConta)
Especialidad: Legislación fiscal mexicana
Versión: 1.0 MVP

## Misión
Resolver dudas fiscales básicas de personas físicas y morales
en México, 24/7, con información actualizada y confiable.

## Personalidad
- Tono: Profesional pero accesible
- Estilo: Educativo, paciente
- Lenguaje: Simple, evita jerga innecesaria
- Emojis: Moderados (🧮📊💰📅✅❌⚠️)

## Política de Privacidad entre Usuarios
NUNCA compartir información de un usuario con otro.
Cada conversación es confidencial y aislada.

## Reglas de Oro

❌ NUNCA:
- Dar consejos de evasión fiscal
- Hacer planeación fiscal sin disclaimer
- Sustituir al contador del usuario
- Compartir info de otros usuarios
- Prometer resultados garantizados

✅ SIEMPRE:
- Citar fundamento legal cuando aplique
- Incluir disclaimer en temas sensibles
- Recomendar a Isca en casos complejos
- Mantener tono educativo
- Ser honesto sobre limitaciones

## Disclaimer Estándar
⚠️ Esta es información general con fines educativos.
Para tu caso específico, consulta con un C.P. certificado.
Abacus no sustituye asesoría profesional personalizada.

## Escalamiento
Escala a Isca Castro cuando:
- Planeación fiscal personalizada
- Casos con SAT en curso
- Usuario insatisfecho con respuesta
- Pregunta fuera de base de conocimiento

Mensaje: "Este caso requiere análisis personalizado.
Te recomiendo agendar consulta con Isca Castro:
https://calendly.com/isca-castro"

## Sistema Freemium

Usuarios gratuitos: 3 consultas/mes
- Al llegar al límite: "Has usado tus 3 consultas gratuitas este mes.
  Abacus Premium: $99 MXN/mes - Consultas ilimitadas.
  ¿Te interesa? Dime 'premium' para más info."

Usuarios Premium: Ilimitado
- Identificación por número WhatsApp en base de datos
```

**Guardar:** Ctrl+O, Enter, Ctrl+X

### 6.3 Crear regimenes_fiscales.md

```bash
nano regimenes_fiscales.md
```

**Ver contenido completo en:** `26_Regimenes_Fiscales.md`

**Versión mínima para MVP:**
```markdown
# Regímenes Fiscales México 2026

## RESICO (Régimen Simplificado de Confianza)

Requisitos:
- Ingresos ≤ $3,500,000 MXN anuales
- Solo actividades empresariales, arrendamiento u honorarios

Tasas ISR:
- Hasta $583,333 bimestral: 1%
- $583,334 a $1,166,666: 1.1%
- Más de $1,166,666: 2.5%

Obligaciones:
✅ Declaración bimestral
✅ Emisión de CFDI
❌ NO contabilidad electrónica

Fundamento: LISR Art. 113-E

---

## Régimen General (Actividades Empresariales)

Para personas físicas con:
- Ingresos > $3,500,000 anuales

Obligaciones:
✅ Contabilidad electrónica
✅ Declaraciones mensuales
✅ Declaración anual

Tasa ISR: Tabla progresiva anual

Fundamento: LISR Art. 100-106

---

## Sueldos y Salarios

Para trabajadores en relación laboral.

ISR: Retención mensual según tabla
IMSS: Aportaciones obligatorias
Infonavit: 5% sobre salario base

Fundamento: LISR Art. 94-99
```

**Guardar:** Ctrl+O, Enter, Ctrl+X

### 6.4 Crear productos_todoconta.md

```bash
nano productos_todoconta.md
```

**Contenido:**
```markdown
# Productos TodoConta

## Abacus Premium

$99 MXN/mes
✅ Consultas fiscales ilimitadas
✅ Prioridad en respuestas
✅ Acceso a calculadoras avanzadas
✅ Sin anuncios

Link de pago: [Definir en Fase 2]

---

## Bundle TodoConta Premium

$199 MXN/mes
✅ Todo Abacus Premium
✅ Newsletter TodoConta semanal
✅ Plantillas fiscales mensuales
✅ Webinars exclusivos

Early bird: $149 MXN/mes (primeros 50)

---

## Consultoría Personal

$799 MXN/hora
- Análisis personalizado
- Planeación fiscal
- Resolución de casos SAT

Agenda: https://calendly.com/isca-castro

---

## Cursos Online

Próximamente en https://todoconta.com
```

**Guardar:** Ctrl+O, Enter, Ctrl+X

### 6.5 Registrar skills en OpenClaw

```bash
# Volver al home
cd ~

# Reiniciar OpenClaw para cargar skills
openclaw restart
```

**⏸️ CHECKPOINT:** ¿Base de conocimiento creada? → Continúa

---

## PASO 7: TESTING PERSONAL (1 hora)

### 7.1 Tests básicos

**Desde tu WhatsApp personal al Business:**

```
TEST 1 - Saludo:
Tú: "Hola"
Esperado: Respuesta amigable de presentación

TEST 2 - Consulta básica:
Tú: "¿Qué es RESICO?"
Esperado: Explicación del régimen con datos correctos

TEST 3 - Consulta compleja:
Tú: "¿Cuánto debo pagar de ISR si facturo $500,000 bimestrales en RESICO?"
Esperado: Cálculo correcto (1%) = $5,000

TEST 4 - Fuera de alcance:
Tú: "Ayúdame a planear mi estrategia fiscal para pagar menos impuestos"
Esperado: Disclaimer + referencia a Isca Castro

TEST 5 - Producto:
Tú: "¿Cuánto cuesta Abacus Premium?"
Esperado: Info de pricing $99 MXN/mes
```

### 7.2 Verificar logs

```bash
# Ver logs en tiempo real
openclaw logs --follow

# Buscar errores o advertencias
# Ctrl+C para salir
```

### 7.3 Ajustar según resultados

Si algo no funciona:
```bash
# Editar SOUL.md o archivos de conocimiento
nano ~/.openclaw/skills/abacus/SOUL.md

# Reiniciar después de cambios
openclaw restart
```

**⏸️ CHECKPOINT:** ¿Abacus responde correctamente en todos los tests? → Continúa

---

## PASO 8: INVITAR BETA TESTERS (1 hora)

### 8.1 Identificar beta testers

**Perfil ideal (3-5 personas):**
- Contador conocido
- Empresario que llevas contabilidad
- Colega de confianza
- Estudiante del diplomado CACC
- Familiar que entiende de impuestos

### 8.2 Mensaje de invitación

```
Hola [Nombre],

Estoy lanzando Abacus 🧮, mi asistente
fiscal inteligente en WhatsApp.

Responde dudas fiscales 24/7.

¿Me ayudas a probarlo?
Solo envíale un mensaje:
wa.me/52[TU_NUMERO_BUSINESS]

Hazle preguntas fiscales reales.
Dame feedback honesto por aquí.

¡Gracias! 🙏
```

### 8.3 Preparar formulario de feedback

**Google Forms rápido:**
```
Preguntas:
1. ¿Qué tan útiles fueron las respuestas? (1-5)
2. ¿Qué tan rápido respondió? (1-5)
3. ¿Pagarías $99/mes por consultas ilimitadas? (Sí/No/Tal vez)
4. ¿Qué mejorarías?
5. Comentarios adicionales
```

### 8.4 Monitorear interacciones

```bash
# En el servidor, ver logs en vivo
openclaw logs --follow

# Estar atento a:
- Errores de respuesta
- Preguntas que no puede contestar
- Latencia alta
```

**⏸️ CHECKPOINT:** ¿Beta testers invitados y probando? → Continúa

---

## PASO 9: MONITOREO Y AJUSTES (2 horas)

### 9.1 Crear dashboard de métricas

**Métricas a trackear manualmente (Día 1):**
```
- # de mensajes recibidos
- # de respuestas enviadas
- # de errores
- Tiempo promedio de respuesta
- Temas más consultados
- Satisfacción (feedback directo)
```

### 9.2 Revisar conversaciones

```bash
# Ver historial de conversaciones
openclaw conversations list

# Ver conversación específica
openclaw conversations view [conversation_id]
```

### 9.3 Identificar gaps en conocimiento

**Si Abacus no puede responder algo:**
```
1. Anotar el tema
2. Agregar info a base de conocimiento
3. Reiniciar OpenClaw
4. Probar nuevamente
```

### 9.4 Optimizar respuestas

**Patrones comunes a ajustar:**
- Respuestas muy largas → Acortar
- Respuestas muy técnicas → Simplificar
- Falta de ejemplos → Agregar casos prácticos
- Sin disclaimer cuando necesario → Agregarlo

**⏸️ CHECKPOINT:** ¿Sistema estable y respondiendo bien? → ¡LANZADO! 🎉

---

## 🎉 ¡FELICIDADES! ABACUS MVP ESTÁ LIVE

### Post-Lanzamiento (Primeras 24 horas)

**Hacer:**
- ✅ Monitorear cada conversación
- ✅ Responder feedback de beta testers
- ✅ Anotar mejoras necesarias
- ✅ Documentar bugs encontrados
- ✅ Celebrar el logro 🍾

**NO hacer:**
- ❌ Invitar muchos usuarios todavía
- ❌ Hacer cambios grandes sin testear
- ❌ Apagar el servidor
- ❌ Estresarte por pequeños errores

---

## 📊 MÉTRICAS OBJETIVO DÍA 1

```
✅ 3-5 beta testers activos
✅ 10-20 mensajes intercambiados
✅ 0 errores críticos
✅ <5 seg tiempo de respuesta
✅ 80%+ respuestas correctas
```

---

## 🆘 TROUBLESHOOTING COMÚN

### Problema: WhatsApp no conecta

```bash
# Verificar status
openclaw gateway status whatsapp

# Si está detenido, reiniciar
openclaw gateway restart whatsapp

# Ver logs específicos
openclaw logs --gateway whatsapp
```

### Problema: Claude no responde

```bash
# Verificar configuración OAuth
openclaw models status

# Re-configurar si es necesario
openclaw configure
```

### Problema: Respuestas muy lentas

```
Posibles causas:
1. Modelo sobrecargado → Esperar o cambiar a fallback
2. VPS lento → Monitorear recursos (htop)
3. Conectividad → Verificar ping al servidor
```

### Problema: Abacus dice "no sé"

```
Causa: Falta info en base de conocimiento

Solución:
1. Identificar tema faltante
2. Agregar a archivo .md correspondiente
3. Reiniciar: openclaw restart
```

---

## 📞 SOPORTE

**Comunidad OpenClaw:**
- Grupo WhatsApp: [Link si tienes]
- Discord: https://discord.gg/openclaw

**Documentación:**
- OpenClaw Docs: https://docs.openclaw.com
- Este README: [ABACUS_README.md](./ABACUS_README.md)

**Contacto Isca:**
- Email: [tu_email]
- WhatsApp: [tu_personal]

---

## ✅ CHECKLIST FINAL

**Antes de dormir hoy:**

- [ ] VPS contratado y accesible
- [ ] OpenClaw instalado y corriendo
- [ ] Claude + ChatGPT OAuth configurados
- [ ] WhatsApp Business conectado
- [ ] Base de conocimiento mínima creada
- [ ] Testing personal exitoso
- [ ] 3-5 beta testers invitados
- [ ] Logs monitoreados sin errores críticos
- [ ] Feedback inicial recopilado
- [ ] Celebrado el lanzamiento 🎉

---

**Siguiente paso:** [04_MVP_Testing.md](./04_MVP_Testing.md) - Plan de testing Semana 1

**¡Éxito con el lanzamiento! 🚀**
