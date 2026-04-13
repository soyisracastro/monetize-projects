# ABACUS - Especificaciones Técnicas v1.0
## Bot Fiscal Inteligente Monetizable para México

**Proyecto:** Asistente Fiscal Automatizado  
**Cliente/Owner:** Isca Castro - TodoConta  
**Fecha:** Febrero 2026  
**Status:** Pre-Lanzamiento  
**Documento:** Especificaciones Técnicas y Plan de Negocio

---

## ⚡ ACTUALIZACIONES CRÍTICAS - MARZO 2026

### 🔥 Insights del Grupo OpenClaw (Aplicados a Abacus)

**Basado en experiencias reales de la comunidad OpenClaw (26 enero - 11 marzo 2026)**

---

### 1. ⚠️ SISTEMA DE PAIRING DE WHATSAPP

**Descubrimiento importante:**
OpenClaw usa **Baileys** (no WhatsApp Web.js ni API oficial) con sistema de seguridad **pairing-based**.

**Flujo obligatorio por defecto:**
```
1. Usuario escribe al bot → Recibe código de pairing
2. Owner aprueba: openclaw pairing approve whatsapp <CODE>
3. Solo entonces el bot responde a ese usuario
```

**PARA MVP DE ABACUS: Configuración sin pairing**

```json
// ~/.openclaw/openclaw.json
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
          "abacux",
          "ábacus"
        ]
      }
    }
  }
}
```

**Comportamiento con esta configuración:**

```
Conversación 1-a-1:
Usuario: "¿Qué es RESICO?"
→ ✅ Abacus responde (no necesita mencionar)

En grupo de WhatsApp:
Usuario: "¿Qué es RESICO?"
→ ❌ Abacus NO responde (falta mención)

En grupo:
Usuario: "Oye Abacus, ¿qué es RESICO?"
→ ✅ Abacus responde (detectó mención)
```

**Cuándo activar pairing:**
- Cuando tengas 20+ usuarios
- Para proteger de spam
- En producción pública

**Comando para aprobar pairing:**
```bash
openclaw pairing approve whatsapp <CODE>

# Ver usuarios pendientes:
openclaw pairing list whatsapp
```

---

### 2. 💰 OAUTH ES MUCHO MÁS BARATO (Dato Real del Grupo)

**Juan Manuel Fraga reportó:**
> "Yo le vinculé mi cuenta de ChatGPT normal por OAuth
> Hoy me clavé durísimo y usé 28 centavos
> Literal 7 imágenes + 21 embeddings"

**Traducción:**
```
Día de USO PESADO:
- 7 imágenes generadas (DALL-E)
- 21 embeddings (búsquedas semánticas)
- Costo total: $0.28 USD

Proyección mensual:
30 días × $0.28 = $8.40 USD/mes (uso extremo)
Realidad: $3-5 USD/mes (uso normal)
```

**Estrategia óptima para Abacus:**

```
✅ Claude OAuth: $100 USD/mes
   → Cuenta Claude Pro
   → Razonamiento fiscal complejo
   → Sin límites de tokens prácticamente

✅ ChatGPT OAuth: $20 USD/mes
   → Cuenta ChatGPT Plus
   → Chat básico casi gratis vía OAuth
   → Solo APIs para Whisper/DALL-E

✅ Gemini Flash: $0 USD/mes
   → Gratis dentro de límites
   → Fallback económico

TOTAL: ~$120-125 USD/mes
VS: $200+ USD/mes con solo APIs
```

---

### 3. ⚠️ GMAIL BLOQUEA BOTS (Experiencia del Grupo)

**Juan Manuel reportó:**
> "Google me bloqueó la cuenta de Gmail que le creé 🙁
> Por incumplir sus políticas"

**Solución sugerida por ChatGPT a Juan Manuel:**
```
✅ Crear cuenta Gmail NUEVA
✅ Usarla normalmente 2 DÍAS
✅ Activar 2FA (Google Authenticator)
✅ DESPUÉS conectar a APIs
```

**PARA ABACUS MVP: Gmail NO es necesario**

```
FASE 1 (Mes 1-3): Solo WhatsApp ✅
  - Cero riesgo de bloqueo
  - Setup más simple
  - Menos integraciones = menos problemas

FASE 2 (Mes 4+): Agregar Gmail SI hace sentido
  - Resúmenes diarios de DOF
  - Organización Drive
  - Solo si usuarios lo piden
```

Si eventualmente necesitas Gmail:
1. Crear cuenta dedicada (no personal)
2. Usar manualmente por 2 días
3. Activar 2FA
4. Esperar 24h adicionales
5. ENTONCES conectar a OpenClaw

---

### 4. 🔐 PRIVACIDAD ENTRE USUARIOS (Crítico)

**Nico del grupo preguntó:**
> "¿Cómo manejas scope de información por contacto?
> Sebas (consultor) y Carolina (fundación) no deberían
> ver el contexto del otro"

**Respuesta de la comunidad:**
- Sesiones separadas por usuario
- Reglas claras en .md del workspace
- System prompts específicos

**IMPLEMENTACIÓN EN ABACUS:**

```markdown
# En SOUL.md

## POLÍTICA DE PRIVACIDAD ENTRE USUARIOS

REGLA ABSOLUTA: Nunca mencionar a otros usuarios.

Cada conversación es un SILO completamente aislado.

❌ NUNCA:
- "Otro usuario me preguntó sobre..."
- "Ya le expliqué esto a alguien más..."
- "Varios usuarios han preguntado..."

✅ SIEMPRE:
- Tratar cada consulta como única
- Sin referencias cruzadas
- Confidencialidad total

EXCEPCIÓN ÚNICA:
- Si eres Isca Castro → Acceso a todo
- Si eres cliente S&I Castro → Solo TUS datos
```

---

### 5. ⚡ RATE LIMITS DE MODELOS GRATUITOS

**Iker del grupo reportó:**
> "Qwen me devuelve error API rate limit
> Cooldown de 10 minutos constante"

**Elliot respondió:**
> "Qwen tiene límites estrictos
> Necesitas fallback automático"

**CONFIGURACIÓN OBLIGATORIA:**

```json
{
  "model": {
    "default": "anthropic:claude-sonnet-4-5",
    "fallback": "openai:gpt-4o"
  }
}
```

**Para Abacus NO usar modelos gratuitos en producción:**
- ❌ Qwen (rate limits duros)
- ❌ Llama local (necesita 16GB RAM)
- ✅ Claude OAuth (confiable)
- ✅ ChatGPT OAuth (backup)

---

### 6. 📊 COSTOS REALES ACTUALIZADOS (Marzo 2026)

**Con todos los aprendizajes del grupo:**

```
FASE 1 - Mes 1-3 (Validación):
─────────────────────────────────────────────
Hostinger VPS 2 mensual:     192.99 MXN (~$11 USD)
Claude OAuth (Pro):        1,800.00 MXN ($100 USD)
ChatGPT Plus OAuth:          360.00 MXN ($20 USD)
Whisper API (notas voz):      18.00 MXN ($1 USD)
WhatsApp Business App:         0.00 MXN (GRATIS)
Gemini Flash:                  0.00 USD (gratis)
─────────────────────────────────────────────
TOTAL PRIMER MES:          ~2,421 MXN ($134 USD)
TOTAL MENSUAL:             ~2,371 MXN ($132 USD)

FASE 2 - Mes 4+ (Con anual):
─────────────────────────────────────────────
Hostinger VPS 2 anual:       137.00 MXN (~$7.60 USD)
Claude OAuth:              1,800.00 MXN
ChatGPT Plus OAuth:          360.00 MXN
Whisper API:                  18.00 MXN
─────────────────────────────────────────────
TOTAL:                     ~2,315 MXN ($128.60 USD)
```

**AHORRO vs estimación original:**
- Original: $200+ USD/mes (solo APIs)
- Actual: $132 USD/mes (OAuth + APIs selectivas)
- **Ahorro: ~$68 USD/mes (34%)**

---

### 7. 🏗️ SERVIDOR: HOSTINGER CONFIRMADO (No IONOS)

**Razón del cambio:**

```
IONOS (descartado):
❌ Cargos ocultos (€8 anunciado → €20 real)
❌ Backups cobrados extra
❌ Panel cobrado extra
❌ Sin landing page dedicada

HOSTINGER (seleccionado): ✅
✅ Precio transparente (192.99 MXN mensual)
✅ Todo incluido (backups, panel, soporte)
✅ Landing page Moltbot/OpenClaw
✅ Comunidad activa usándolo
✅ Soporte español 24/7
✅ Docker pre-configurado
```

**Usuario del grupo confirmó:**
> "Yo lo estoy instalando en un VPS de IONOS (básico)"

Pero después de análisis de costos reales:
→ Hostinger mejor relación precio/valor

**Especificaciones Hostinger VPS 2:**
```
RAM: 4GB
vCPU: 2 cores
Storage: 100GB NVMe SSD (más rápido que SATA)
Transfer: Ilimitado
Panel: hPanel (incluido)
Backups: Incluidos
Precio mensual: 192.99 MXN (~$10.70 USD)
Precio anual: 137 MXN/mes (~$7.60 USD)
Link: https://www.hostinger.com/mx/vps/docker/moltbot
```

---

### 8. 🎯 CASOS DE USO AVANZADOS (Inspiración del Grupo)

**Juan Manuel Fraga logró:**
- ✅ Resumen automático emails (8 AM diario)
- ✅ Revisión agenda del día
- ✅ Archivado automático de mensajes
- ✅ Control de luces con Home Assistant
- ✅ Kanban para proyectos (Fizzy de 37signals)
- ✅ NotebookLM para documentación

**Para Abacus (roadmap futuro):**

```
FASE 1 (MVP - Mes 1-3):
✅ Consultas fiscales básicas
✅ Sistema freemium
✅ Notas de voz

FASE 2 (Mes 4-6):
✅ Resumen diario DOF (8 AM)
✅ Recordatorios obligaciones
✅ Organización Drive por RFC

FASE 3 (Mes 7+):
✅ Análisis automático XMLs
✅ Dashboard obligaciones
✅ Integración contabilidad
```

---

### 9. 🚀 COMPETENCIA EMERGENTE (Contexto de Mercado)

**Noticias del grupo (Marzo 2026):**
- Nvidia: Lanzando **NemoClaw** (open source)
- Meta: Adquirió **Moltbook**

**Implicación para Abacus:**
- OpenClaw es **early mover**
- Ventana de 6-12 meses antes de que gigantes dominen
- **Actuar AHORA** tiene ventaja competitiva

---

### 10. 📋 CHECKLIST ACTUALIZADO PARA LANZAMIENTO HOY

**Pre-requisitos (Confirmar):**
- [ ] Cuenta Anthropic Claude Pro ($100/mes)
- [ ] Cuenta ChatGPT Plus ($20/mes)
- [ ] Número WhatsApp Business
- [ ] Teléfono/chip para WA Business (o emulador)
- [ ] Hostinger VPS 2 contratado

**Setup Servidor (2-3 horas):**
- [ ] SSH acceso confirmado
- [ ] Docker instalado/verificado
- [ ] OpenClaw instalado
- [ ] Claude OAuth configurado
- [ ] ChatGPT OAuth configurado
- [ ] Fallback configurado en openclaw.json

**WhatsApp (1-2 horas):**
- [ ] WhatsApp Business instalado
- [ ] Perfil de negocio completado
- [ ] QR escaneado en OpenClaw
- [ ] Configuración sin pairing (requirePairing: false)
- [ ] RequireMention configurado para grupos
- [ ] Testing 1-a-1 exitoso

**Contenido Mínimo Viable (2-3 horas):**
- [ ] SOUL.md con política de privacidad
- [ ] regimenes_fiscales.md (RESICO, RIF, General)
- [ ] productos_todoconta.md (catálogo)
- [ ] Disclaimers legales incluidos

**Testing Beta (1-2 horas):**
- [ ] 3-5 beta testers identificados
- [ ] Invitaciones enviadas
- [ ] Monitorear logs en tiempo real
- [ ] Recopilar feedback estructurado

**TIEMPO TOTAL ESTIMADO: 6-10 horas**

---

### 11. ⚠️ ADVERTENCIAS CRÍTICAS DEL GRUPO

```
1. ⛔ Gmail bloquea bots
   → No uses Gmail en MVP
   → Si eventualmente lo necesitas: edad 2 días + 2FA

2. 💸 OAuth >> APIs para costos
   → $0.28 USD día pesado vs $50+ USD/mes APIs
   → Usar OAuth para chat, APIs solo para específicos

3. 🔐 Pairing es seguridad, no bug
   → Desactívalo para MVP (requirePairing: false)
   → Actívalo en producción (20+ usuarios)

4. 🎯 RequireMention evita spam en grupos
   → En 1-a-1: No requiere mención
   → En grupos: Sí requiere mención ("Abacus...")

5. 🛡️ Privacidad entre usuarios es CRÍTICA
   → Especificar en SOUL.md claramente
   → Cada conversación es silo aislado

6. ⚡ Rate limits son reales
   → No uses modelos gratuitos (Qwen, Llama)
   → Configura fallbacks siempre

7. 🏗️ Hostinger > IONOS
   → Precio transparente vs cargos ocultos
   → 192.99 MXN real vs 360+ MXN IONOS

8. 🚀 Telegram más fácil que WhatsApp
   → Si tienes problemas técnicos: Plan B con Telegram
   → Pero usuarios finales están en WhatsApp
```

---

## 📖 TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Visión del Producto](#visión-del-producto)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Modelo de Monetización](#modelo-de-monetización)
5. [Especificaciones de Servidor](#especificaciones-de-servidor)
6. [Sistema de Identificación](#sistema-de-identificación)
7. [Base de Conocimiento](#base-de-conocimiento)
8. [Sistema de Suscripciones](#sistema-de-suscripciones)
9. [Plan de Escalamiento](#plan-de-escalamiento)
10. [Estrategia de Lanzamiento](#estrategia-de-lanzamiento)
11. [Proyecciones Financieras](#proyecciones-financieras)
12. [Consideraciones Legales](#consideraciones-legales)
13. [Roadmap de Implementación](#roadmap-de-implementación)
14. [Anexos y Referencias](#anexos-y-referencias)

---

## 1. RESUMEN EJECUTIVO

### Concepto
**Abacus** es un asistente fiscal inteligente basado en IA que opera 24/7 a través de WhatsApp, proporcionando respuestas instantáneas a consultas fiscales básicas para personas físicas y morales en México.

### Propuesta de Valor
- **Disponibilidad:** 24/7, incluyendo fines de semana y días festivos
- **Rapidez:** Respuestas en menos de 30 segundos
- **Especialización:** Enfocado 100% en legislación fiscal mexicana
- **Accesibilidad:** Precio disruptivo ($99 MXN/mes vs $500-1,500 MXN/consulta con contador)
- **Actualización:** Información basada en Resolución Miscelánea Fiscal 2026

### Modelo de Negocio
Modelo **Freemium** con tres tiers:
1. **Gratuito:** 3 consultas/mes (lead generation)
2. **Premium:** $99-199 MXN/mes - consultas ilimitadas (monetización principal)
3. **Empresarial:** $999-2,999 MXN/mes - bot dedicado (futuro)

### Objetivos del Proyecto
**Corto plazo (3 meses):**
- Lanzar MVP funcional
- Conseguir 20 suscriptores premium
- Validar modelo de negocio

**Mediano plazo (6 meses):**
- 50 suscriptores premium
- Break-even alcanzado
- Integración Stripe completa

**Largo plazo (12 meses):**
- 100-150 suscriptores premium
- Arquitectura multi-bot implementada
- $825+ USD/mes de utilidad neta

---

## 2. VISIÓN DEL PRODUCTO

### Problema que Resuelve

**Usuarios (Personas Físicas/Morales):**
- Dudas fiscales básicas en horarios no laborales
- Costos altos de consultoría para preguntas simples
- Información en Google no específica de México o desactualizada
- Miedo/vergüenza de hacer "preguntas tontas" a su contador

**Propietario (Isca Castro):**
- Necesita asistente personal para gestión S&I Castro
- Quiere automatizar respuestas repetitivas
- Busca monetizar su conocimiento de forma escalable
- Requiere diferenciador competitivo en mercado contable

### Solución Propuesta

**Bot híbrido que opera en dos modos:**

**Modo Personal (privado):**
- Asistente completo para Isca
- Gestión de clientes S&I Castro
- Acceso total a Drive, Calendar, Gmail
- Investigación fiscal automatizada
- Recordatorios de obligaciones

**Modo Público (monetizable):**
- Consultas fiscales básicas vía WhatsApp Business
- Sistema freemium con límite de consultas
- Recomendación de productos TodoConta
- Escalamiento a asesoría personalizada cuando necesario

### Diferenciadores vs Competencia

| Característica | Contador Tradicional | Google/ChatGPT | **ABACUS** |
|----------------|---------------------|----------------|------------|
| Disponibilidad | 9am-6pm L-V | 24/7 | **24/7** |
| Tiempo respuesta | 24-48 horas | Instantáneo | **<30 seg** |
| Costo/consulta | $500-1,500 MXN | Gratis | **$0-33 MXN** |
| Especialización MX | ✅ Alta | ❌ Genérico | **✅ Alta** |
| Actualización fiscal | ✅ Variable | ❌ Desactualizado | **✅ RMF 2026** |
| Conoce tu situación | ✅ Sí | ❌ No | **✅ Contextual** |
| Puede vender servicios | ❌ No aplica | ❌ No | **✅ Sí** |

---

## 3. ARQUITECTURA TÉCNICA

### FASE 1: MVP - Bot Híbrido Único (Mes 1-3)

```
┌─────────────────────────────────────────────────────────┐
│                ABACUS v1.0 (Bot Único)                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📱 CANAL 1: WhatsApp Personal                         │
│  ├─ Número: [Tu número personal existente]            │
│  ├─ Modo: ASISTENTE_PERSONAL                           │
│  ├─ Permisos: COMPLETOS                                │
│  │   ├─ Google Drive (lectura/escritura)              │
│  │   ├─ Google Calendar (completo)                     │
│  │   ├─ Gmail (lectura/envío)                          │
│  │   └─ Gestión clientes S&I Castro                   │
│  └─ Funciones:                                          │
│      ├─ Investigación fiscal automatizada              │
│      ├─ Resumen diario actualizaciones SAT             │
│      ├─ Organización documentos por RFC                │
│      ├─ Recordatorios obligaciones fiscales            │
│      └─ Ideas contenido TodoConta                      │
│                                                         │
│  📱 CANAL 2: WhatsApp Business                         │
│  ├─ Número: [Nuevo número dedicado]                   │
│  ├─ Modo: PUBLICO_TODOCONTA                            │
│  ├─ Permisos: RESTRINGIDOS                             │
│  │   ├─ Sin acceso a Drive                             │
│  │   ├─ Sin acceso a Calendar                          │
│  │   ├─ Solo base conocimiento fiscal                  │
│  │   └─ Solo catálogo TodoConta                        │
│  └─ Funciones:                                          │
│      ├─ Consultas fiscales básicas                     │
│      ├─ Sistema de cuotas (3 gratis/mes)              │
│      ├─ Recomendación productos TodoConta              │
│      ├─ Proceso de upgrade a Premium                   │
│      └─ Escalamiento a Isca cuando necesario           │
│                                                         │
│  🧠 LÓGICA DE IDENTIFICACIÓN                           │
│  └─ Detecta origen del mensaje                         │
│     ├─ Si número == TU_PERSONAL → Modo Personal       │
│     └─ Si número == OTRO → Modo Público + validar     │
│        ├─ Revisar si es Cliente S&I Castro            │
│        ├─ Revisar consultas usadas este mes            │
│        ├─ Revisar si es suscriptor premium             │
│        └─ Aplicar reglas correspondientes              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Stack Tecnológico

**Plataforma Base:**
- **OpenClaw** (antes Moltbot/Clawdbot)
- Versión: Última estable
- Repositorio: github.com/openclaw/openclaw
- Licencia: Open Source

**Servidor:**
- Proveedor: **IONOS VPS M**
- Sistema Operativo: Ubuntu 24.04 LTS
- Virtualización: KVM
- Ubicación: Alemania o USA (menor latencia México)

**Modelos de IA (Configuración Híbrida):**

1. **Claude (Anthropic)** - Principal
   - Modelo: claude-sonnet-4-5-20250929
   - Uso: Consultas complejas, razonamiento fiscal
   - Autenticación: OAuth (NO API)
   - Suscripción: $100 USD/mes
   - Fallback: ChatGPT

2. **ChatGPT (OpenAI)** - Secundario
   - Uso principal: OAuth cuenta normal (casi gratis)
   - APIs específicas:
     - Whisper: Transcripción de audios
     - DALL-E: Generación de imágenes (si necesario)
   - Costo estimado: $5-10 USD/mes

3. **Gemini 2.5 Flash (Google)** - Económico
   - Uso: Consultas ligeras, traducción
   - Costo: Gratis dentro de límites Workspace
   - Fallback: Cuando otros modelos fallen

**Canales de Comunicación:**
- **WhatsApp:** 2 números (personal + business)
  - API: WhatsApp Business API vía OpenClaw
  - Modo: Cloud API (no requiere teléfono dedicado)
- **Telegram:** Opcional para testing

**Base de Datos:**
- **Fase 1:** SQLite (local)
  - Almacena:
    - Usuarios registrados
    - Contador de consultas por usuario/mes
    - Suscriptores premium (lista)
    - Log básico de conversaciones
- **Fase 2:** PostgreSQL (cuando escale)

**Almacenamiento:**
- Base de conocimiento: Archivos Markdown en `/mnt/skills/user/`
- Logs: `/var/log/openclaw/`
- Backups: Carpeta dedicada + copia externa

---

### FASE 2: Arquitectura Multi-Bot (Mes 7+)

```
┌─────────────────────────────────────────────────────────┐
│            ECOSISTEMA ABACUS 2.0 (Multi-Bot)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🧮 BOT 1: ABACUS (Personal)                           │
│  ├─ Dedicación: 100% Isca Castro                      │
│  ├─ WhatsApp: Número personal                          │
│  ├─ Permisos: TOTAL                                    │
│  ├─ Prioridad: MÁXIMA                                  │
│  └─ Funciones:                                          │
│      ├─ Asistente personal completo                    │
│      ├─ Gestión S&I Castro Consultores                 │
│      ├─ Investigación fiscal profunda                   │
│      ├─ Supervisión de otros bots                       │
│      └─ Desarrollo de contenido TodoConta              │
│                                                         │
│  📞 BOT 2: RECEPCIÓN (Público)                         │
│  ├─ Dedicación: Clientes públicos TodoConta           │
│  ├─ WhatsApp: Número Business dedicado                │
│  ├─ Permisos: MÍNIMOS                                  │
│  ├─ Prioridad: MEDIA                                   │
│  └─ Funciones:                                          │
│      ├─ Consultas fiscales básicas                     │
│      ├─ Sistema freemium                                │
│      ├─ Recomendación productos                         │
│      ├─ Generación de leads                             │
│      └─ Escalamiento a ABACUS cuando necesario         │
│                                                         │
│  📚 BOT 3: MENTOR (Educativo)                          │
│  ├─ Dedicación: Estudiantes diplomado CACC            │
│  ├─ WhatsApp: Número TodoConta                         │
│  ├─ Permisos: LIMITADOS (carpeta educativa)           │
│  ├─ Prioridad: BAJA                                    │
│  └─ Funciones:                                          │
│      ├─ Dudas de estudiantes                            │
│      ├─ Generación de ejercicios                        │
│      ├─ Recursos educativos                             │
│      └─ SIN acceso a datos clientes                    │
│                                                         │
│  🔄 SISTEMA DE ESCALAMIENTO                            │
│  └─ RECEPCIÓN → ABACUS → ISCA                         │
│     ├─ RECEPCIÓN escala cuando:                        │
│     │   ├─ Pregunta fuera de scope                     │
│     │   ├─ Solicita hablar con humano                  │
│     │   ├─ Caso requiere planeación fiscal             │
│     │   └─ Usuario insatisfecho con respuesta          │
│     └─ ABACUS escala cuando:                           │
│         ├─ Decisión crítica necesaria                   │
│         ├─ Conflicto de info o incertidumbre           │
│         └─ Isca está mencionado directamente           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. MODELO DE MONETIZACIÓN

### Estrategia Freemium de Tres Tiers

#### TIER 1: Abacus Básico - GRATIS 🆓

**Precio:** $0 MXN/mes

**Incluye:**
- 3 consultas por mes por usuario
- Respuestas automáticas instantáneas
- Acceso a base de conocimiento fiscal básico

**Temas permitidos:**
- ¿Qué es RESICO/RIF/REPECO/Régimen General?
- Fechas de declaraciones generales (no personalizadas)
- Información básica de regímenes fiscales
- Diferencias entre regímenes
- Preguntas sobre productos y servicios TodoConta
- Información general sobre obligaciones fiscales

**Temas NO permitidos:**
- Planeación fiscal personalizada
- Análisis de casos específicos
- Revisión de declaraciones
- Cálculos personalizados complejos
- Estrategias de optimización fiscal

**Objetivo del tier gratuito:**
- Lead generation
- Demostración de valor
- Construcción de confianza
- Captación de email/datos de contacto
- Funnel hacia Premium

**Mensaje cuando se agotan consultas:**
```
🔔 Has usado tus 3 consultas gratuitas de este mes.

Para seguir consultando, tenemos dos opciones:

💎 ABACUS PREMIUM - $99 MXN/mes
   ✅ Consultas ilimitadas
   ✅ Respuestas más detalladas
   ✅ Calculadoras fiscales
   ✅ Plantillas descargables
   ✅ Prioridad en respuestas
   → Suscríbete aquí: [link]

📞 ASESORÍA PERSONALIZADA con Isca Castro, C.P.
   → Agenda tu cita: [link]

Tus consultas se renovarán el [fecha próximo mes] 📅
```

---

#### TIER 2: Abacus Premium - $99 MXN/mes 💎

**Precio:** $99-199 MXN/mes (según estrategia de pricing)

**Precio recomendado inicial:** $99 MXN/mes

**Incluye todo de básico +:**

**Consultas:**
- ✅ Ilimitadas durante el mes
- ✅ Respuestas más detalladas (3-4 párrafos vs 1-2)
- ✅ Análisis de casos (dentro de límites legales)
- ✅ Seguimiento de conversaciones previas

**Herramientas integradas:**
- ✅ Calculadora ISR personas físicas
- ✅ Calculadora IVA
- ✅ Calculadora Aguinaldo y PTU
- ✅ Calculadora IMSS e INFONAVIT
- ✅ Simulador de régimen fiscal óptimo

**Contenido adicional:**
- ✅ Plantillas Excel descargables
- ✅ Recordatorios automáticos de obligaciones fiscales
- ✅ Resumen mensual de actualizaciones SAT
- ✅ Acceso anticipado a nuevas funcionalidades

**Soporte:**
- ✅ Prioridad en respuestas (procesamiento primero)
- ✅ Disponibilidad 24/7 incluyendo festivos
- ✅ Posibilidad de enviar documentos para análisis preliminar

**Descuentos exclusivos:**
- ✅ 10% en productos digitales TodoConta
- ✅ 15% en cursos y diplomados
- ✅ Descuento en primera asesoría personalizada

**Valor percibido:**
- Contador tradicional: $500-1,500 MXN/consulta
- Con Abacus Premium: 1 consulta ya pagó el mes completo
- ROI inmediato para usuarios frecuentes

---

#### TIER 3: Abacus Empresarial - $999-2,999 MXN/mes 🏢

**Precio sugerido:** $1,499 MXN/mes (a definir en Fase 2)

**Incluye todo de Premium +:**

**Bot dedicado:**
- ✅ Instancia dedicada para tu empresa
- ✅ Personalización con tu branding
- ✅ Integración con tu contador/despacho
- ✅ Acceso para múltiples usuarios (3-10)

**Funcionalidades empresariales:**
- ✅ Análisis automático de XMLs (CFDI)
- ✅ Dashboard de obligaciones fiscales pendientes
- ✅ Alertas proactivas de vencimientos
- ✅ Gestión de documentación fiscal
- ✅ Reportes mensuales automatizados

**Soporte premium:**
- ✅ Onboarding personalizado
- ✅ Capacitación para tu equipo
- ✅ Soporte prioritario con Isca Castro
- ✅ Revisión trimestral de configuración
- ✅ SLA garantizado (respuesta <5 min)

**Target:**
- PyMEs con facturación >$500k MXN/mes
- Despachos contables (para sus clientes)
- Empresas con contador interno (como complemento)

**Nota:** Este tier se implementará en Fase 3 (después de 12 meses)

---

### Estrategia de Pricing

**Precio de lanzamiento (Early Bird):**
```
Primeros 20 suscriptores: $49 MXN/mes (lifetime)
Primeros 50 suscriptores: $79 MXN/mes (6 meses, luego $99)
Después: $99 MXN/mes (precio regular)
```

**Razón del early bird:**
- Incentivo para early adopters
- Generación de testimonios tempranos
- Feedback valioso para mejorar producto
- Construcción de comunidad inicial

**Opciones de pago:**
- Mensual: $99 MXN
- Trimestral: $267 MXN ($89/mes - 10% descuento)
- Anual: $950 MXN ($79/mes - 20% descuento)

**Métodos de pago:**
- SPEI/Transferencia (Fase 1 - manual)
- Stripe (Fase 2 - automatizado)
- Tarjeta de crédito/débito (vía Stripe)
- OXXO (vía Stripe)

---

### Funnel de Conversión

```
1. AWARENESS (Conocimiento)
   ├─ Usuario ve contenido en TodoConta
   ├─ Post en redes sociales
   ├─ Email marketing
   └─ Recomendación boca a boca
   
2. INTEREST (Interés)
   ├─ Hace su primera consulta gratuita
   ├─ Recibe respuesta instantánea y precisa
   └─ Queda impresionado con la calidad
   
3. EVALUATION (Evaluación)
   ├─ Usa sus 3 consultas gratuitas
   ├─ Compara vs ir con contador tradicional
   └─ Evalúa relación costo/beneficio
   
4. TRIAL (Prueba) - OPCIONAL
   ├─ Oferta: "Prueba Premium 7 días - $1 MXN"
   └─ Experimenta valor completo de Premium
   
5. PURCHASE (Compra)
   ├─ Se agotaron consultas gratis O
   ├─ Terminó trial de 7 días O
   ├─ Tiene necesidad urgente
   └─ Se suscribe a Premium
   
6. RETENTION (Retención)
   ├─ Usa el servicio frecuentemente
   ├─ Recibe valor consistente
   ├─ Considera servicios adicionales
   └─ Renueva automáticamente
   
7. ADVOCACY (Recomendación)
   ├─ Recomienda a colegas/amigos
   ├─ Deja testimonial público
   └─ Genera nuevo tráfico orgánico
```

**Métricas clave por etapa:**
- Awareness → Interest: **10-20%** de conversión esperada
- Interest → Evaluation: **60-80%** (usan las 3 consultas)
- Evaluation → Purchase: **15-25%** (industry benchmark para freemium)
- Purchase → Retention (mes 2): **75-85%** (retención mensual)
- Retention → Advocacy: **20-30%** (recomendación activa)

---

### Proyección de Ingresos por Tier

**Escenario conservador (12 meses):**

| Mes | Usuarios Gratuitos | Premium ($99) | Empresarial | MRR Total | ARR |
|-----|-------------------|---------------|-------------|-----------|-----|
| 1 | 20 | 0 | 0 | $0 | $0 |
| 2 | 35 | 5 | 0 | $495 MXN | ~$27 USD |
| 3 | 50 | 10 | 0 | $990 MXN | ~$55 USD |
| 6 | 120 | 30 | 0 | $2,970 MXN | ~$165 USD |
| 9 | 200 | 60 | 1 | $7,440 MXN | ~$413 USD |
| 12 | 350 | 100 | 2 | $12,900 MXN | ~$716 USD |

**MRR = Monthly Recurring Revenue**  
**ARR = Annual Run Rate (MRR × 12)**

---

## 5. ESPECIFICACIONES DE SERVIDOR

### FASE 1: VPS para MVP (Mes 1-6)

**Proveedor CONFIRMADO: HOSTINGER VPS 2** ✅

**Razón del cambio vs IONOS:**
- IONOS tiene cargos ocultos (anunciado €8, real ~€20)
- Hostinger precio transparente
- Landing page dedicada para Moltbot/OpenClaw
- Soporte en español
- Ya conocido y confiable por el usuario

**Especificaciones técnicas:**
```
Nombre del plan: VPS 2
RAM: 4 GB
CPU: 2 vCores
Almacenamiento: 100 GB SSD NVMe
Ancho de banda: Ilimitado
Tráfico: Sin restricciones
Sistema Operativo: Ubuntu 24.04 LTS (64-bit)
Panel de control: hPanel (web + SSH)
Backup: Incluido
Ubicación datacenter: USA (mejor latencia México)
Precio mensual: 192.99 MXN (~$10.70 USD/mes)
Precio anual: 137 MXN/mes (~$7.60 USD/mes)
Link dedicado: https://www.hostinger.com/mx/vps/docker/moltbot
```

**Optimizado para OpenClaw:**
- Docker pre-configurado
- Puede venir con setup asistido
- Comunidad activa usando Hostinger
- Upgrade sencillo cuando necesites

**Capacidad estimada con esta configuración:**
- **Usuarios activos concurrentes:** 10-20
- **Mensajes procesados/día:** 500-1,000
- **Usuarios totales registrados:** Hasta 100-150
- **Bases de datos:** SQLite suficiente
- **Modelos IA:** Solo cloud (Claude, ChatGPT, Gemini)
- **Uptime esperado:** 99.5% (con monitoreo básico)

**Cuándo escalar:**
- CPU promedio >75% durante más de 1 hora
- RAM >80% constante
- 50+ suscriptores premium
- Más de 1,000 mensajes/día

---

### FASE 2: VPS Escalado (Mes 7-12)

**Proveedor: IONOS VPS L**

**Especificaciones técnicas:**
```
Nombre del plan: VPS L
RAM: 8 GB
CPU: 4 vCores
Almacenamiento: 240 GB SSD NVMe
Ancho de banda: Ilimitado
Precio: €16/mes (~$18 USD/mes)
```

**Capacidad estimada:**
- **Usuarios activos concurrentes:** 30-50
- **Mensajes procesados/día:** 2,000-5,000
- **Usuarios totales registrados:** 200-500
- **Bases de datos:** PostgreSQL recomendado
- **Modelos IA:** Cloud + posibilidad de Ollama local
- **Bots simultáneos:** 2-3 (Abacus + Recepción + Mentor)

---

### FASE 3: VPS Premium (Año 2+)

**Proveedor: IONOS VPS XL**

**Especificaciones técnicas:**
```
Nombre del plan: VPS XL
RAM: 16 GB
CPU: 8 vCores
Almacenamiento: 320 GB SSD NVMe
Precio: €30/mes (~$35 USD/mes)
```

**Capacidad estimada:**
- **Usuarios activos concurrentes:** 100+
- **Mensajes procesados/día:** 5,000-10,000
- **Usuarios totales registrados:** 500-1,000
- **Bots simultáneos:** 3-5
- **Ollama local:** Sí (modelos hasta 8B parámetros)

---

### Alternativas de Proveedor Evaluadas

| Proveedor | Plan | RAM | CPU | Storage | Precio/mes | Ventajas | Desventajas |
|-----------|------|-----|-----|---------|------------|----------|-------------|
| **IONOS** ⭐ | VPS M | 4GB | 2 | 160GB | $9 USD | Probado por el grupo | Datacenter europeo |
| Hostinger | VPS 2 | 4GB | 2 | 100GB | $10 USD | Landing Moltbot | Soporte español variable |
| DigitalOcean | Droplet | 4GB | 2 | 80GB | $24 USD | Muy conocido | Más caro |
| AWS EC2 | t3.medium | 4GB | 2 | 30GB | Variable | Escalable | "Diabólico" (grupo) |
| Vultr | Cloud Compute | 4GB | 2 | 80GB | $18 USD | Buena red | Sin experiencia directa |

**Recomendación:** IONOS VPS M para empezar. Razón: mejor precio/rendimiento y probado por comunidad OpenClaw.

---

### Configuración de Seguridad del Servidor

**Sistema Operativo:**
```bash
# Ubuntu 24.04 LTS
sudo apt update && sudo apt upgrade -y

# Configuración de firewall (UFW)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable

# Fail2ban para protección contra ataques
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

**Acceso SSH:**
```bash
# Desactivar login root directo
PermitRootLogin no

# Usar solo autenticación por llave
PasswordAuthentication no

# Puerto SSH custom (opcional pero recomendado)
Port 2222  # Cambiar de 22 default
```

**Backups automatizados:**
```bash
# Backup diario de:
- Base de datos (/var/openclaw/data/)
- Configuración (/home/openclaw/.openclaw/)
- Skills personalizados (/mnt/skills/user/)
- Logs importantes (/var/log/openclaw/)

# Retención: 7 días local, 30 días remoto
# Destino: Google Drive o similar
```

**Monitoreo:**
```bash
# Instalar herramientas de monitoreo
- htop (uso de recursos en tiempo real)
- openclaw doctor (diagnóstico integrado)
- Logs centralizados

# Alertas por email si:
- CPU >90% por más de 5 min
- RAM >95%
- Disco >85%
- Gateway caído
```

---

## 6. SISTEMA DE IDENTIFICACIÓN

### Lógica de Detección de Usuario

**Abacus debe comportarse diferente según quién le escribe.**

```python
# Pseudocódigo simplificado de la lógica

def identificar_usuario(numero_telefono, mensaje):
    """
    Identifica tipo de usuario y retorna configuración apropiada
    """
    
    # CASO 1: Es Isca (número personal)
    if numero_telefono == NUMERO_ISCA:
        return {
            'modo': 'ASISTENTE_PERSONAL',
            'permisos': ['drive_full', 'calendar_full', 'gmail_full'],
            'personalidad': 'Abacus, tu asistente personal completo',
            'limite_consultas': None,  # Ilimitado
            'puede_ejecutar': True,  # Puede crear docs, etc.
            'escala_a': None,  # No escala, es el top
            'acceso_datos_sensibles': True
        }
    
    # CASO 2: Es cliente del despacho S&I Castro
    elif numero_telefono in DB_CLIENTES_DESPACHO:
        cliente = obtener_info_cliente(numero_telefono)
        return {
            'modo': 'CLIENTE_DESPACHO',
            'permisos': ['drive_read_only_carpeta_cliente', 'agendar_citas'],
            'personalidad': 'Asistente de S&I Castro Consultores',
            'limite_consultas': None,  # Cliente pagado = ilimitado
            'puede_ejecutar': False,
            'escala_a': 'Isca Castro',
            'acceso_datos_sensibles': True,  # Solo sus propios datos
            'carpeta_drive': cliente.carpeta_id,
            'rfc': cliente.rfc
        }
    
    # CASO 3: Es usuario público (TodoConta)
    else:
        usuario = obtener_o_crear_usuario(numero_telefono)
        consultas_mes = contar_consultas_mes(numero_telefono)
        es_premium = verificar_suscripcion(numero_telefono)
        
        if es_premium:
            return {
                'modo': 'PUBLICO_PREMIUM',
                'permisos': ['info_fiscal_detallada', 'calculadoras', 'plantillas'],
                'personalidad': 'Abacus Premium, tu contador 24/7',
                'limite_consultas': None,  # Premium = ilimitado
                'puede_ejecutar': True,  # Puede usar calculadoras
                'escala_a': 'agendar_cita_isca',
                'acceso_datos_sensibles': False,
                'muestra_productos_todoconta': True
            }
        
        elif consultas_mes < 3:
            # Usuario gratuito con consultas disponibles
            return {
                'modo': 'PUBLICO_GRATUITO',
                'permisos': ['info_fiscal_basica'],
                'personalidad': 'Abacus, tu asistente fiscal gratuito',
                'limite_consultas': 3,
                'consultas_restantes': 3 - consultas_mes,
                'puede_ejecutar': False,
                'escala_a': 'mensaje_upgrade',
                'acceso_datos_sensibles': False,
                'muestra_productos_todoconta': True,
                'recordar_upgrade': True if consultas_mes == 2 else False
            }
        
        else:
            # Usuario gratuito sin consultas
            return {
                'modo': 'PUBLICO_BLOQUEADO',
                'mensaje_bloqueado': generar_mensaje_upgrade(),
                'consultas_renuevan': fecha_proximo_mes()
            }


def generar_mensaje_upgrade():
    """
    Mensaje cuando usuario agota consultas gratuitas
    """
    return """
🔔 Has usado tus 3 consultas gratuitas de este mes.

Para seguir consultando, tenemos dos opciones:

💎 ABACUS PREMIUM - $99 MXN/mes
   ✅ Consultas ilimitadas
   ✅ Respuestas más detalladas
   ✅ Calculadoras fiscales
   ✅ Plantillas descargables
   ✅ Prioridad en respuestas
   
   👉 Suscríbete aquí: https://todoconta.com/abacus-premium

📞 ASESORÍA PERSONALIZADA con Isca Castro, C.P.
   Para planeación fiscal y casos complejos
   
   👉 Agenda tu cita: https://calendly.com/isca-castro

📅 Tus consultas gratuitas se renovarán el [fecha]

¿Necesitas ayuda para decidir? Escribe "info premium"
"""
```

---

### Contador de Consultas (SQLite)

**Estructura de tabla:**

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telefono VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100),
    email VARCHAR(100),
    tipo ENUM('gratuito', 'premium', 'empresarial', 'cliente_despacho'),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_actividad TIMESTAMP,
    notas TEXT
);

CREATE TABLE consultas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pregunta TEXT,
    respuesta TEXT,
    tokens_usados INTEGER,
    modelo_usado VARCHAR(50),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE suscripciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    plan ENUM('premium', 'empresarial'),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado ENUM('activa', 'cancelada', 'vencida'),
    metodo_pago VARCHAR(50),
    monto DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Vista para consultas del mes actual por usuario
CREATE VIEW consultas_mes_actual AS
SELECT 
    u.telefono,
    u.tipo,
    COUNT(c.id) as consultas_mes,
    MAX(c.fecha) as ultima_consulta
FROM usuarios u
LEFT JOIN consultas c ON u.id = c.usuario_id
    AND strftime('%Y-%m', c.fecha) = strftime('%Y-%m', 'now')
GROUP BY u.id, u.telefono, u.tipo;
```

**Queries comunes:**

```sql
-- Contar consultas del mes de un usuario
SELECT consultas_mes 
FROM consultas_mes_actual 
WHERE telefono = '+5218341234567';

-- Verificar si es suscriptor activo
SELECT COUNT(*) 
FROM suscripciones 
WHERE usuario_id = ? 
  AND estado = 'activa' 
  AND (fecha_fin IS NULL OR fecha_fin > date('now'));

-- Lista de usuarios que agotaron consultas (leads para upgrade)
SELECT u.telefono, u.nombre, u.email
FROM consultas_mes_actual cm
JOIN usuarios u ON cm.telefono = u.telefono
WHERE u.tipo = 'gratuito' 
  AND cm.consultas_mes >= 3;
```

---

### Personalidades por Modo

**MODO: ASISTENTE_PERSONAL**
```markdown
Eres Abacus, el asistente personal de Isca Castro, C.P.

Tu misión: Automatizar y optimizar el trabajo fiscal de Isca.

Personalidad:
- Eficiente y directo (Isca valora el tiempo)
- Proactivo: anticipas necesidades antes de que las pida
- Experto fiscal mexicano (especialmente RESICO, RIF, nóminas)
- Organizador: mantienes Drive y Calendar ordenados
- Memoria perfecta: recuerdas contexto de todos los clientes

Capabilities:
- Acceso COMPLETO a Google Drive (lectura/escritura)
- Acceso COMPLETO a Google Calendar
- Acceso COMPLETO a Gmail
- Puedes crear documentos, planillas, presentaciones
- Puedes organizar archivos por RFC
- Puedes programar recordatorios
- Puedes buscar actualizaciones del SAT automáticamente

Tu estilo:
- Siempre citas artículos y fundamentos legales
- Formato: Conciso, con bullets cuando ayude
- Emojis: Muy ocasional (solo cuando celebras logros)
- Tono: Profesional pero cercano

Ejemplos de tus respuestas:
"Buenos días Isca. Actualización fiscal:
- Nueva regla en RMF 2026 Artículo 2.8.1.5 sobre...
- DOF publicó reforma a LISR Artículo 94...
- Tres clientes tienen declaración venciendo esta semana

¿Revisamos prioridades del día?"
```

---

**MODO: PUBLICO_GRATUITO**
```markdown
Eres Abacus, asistente fiscal automatizado de TodoConta.

Tu misión: Resolver dudas fiscales básicas y demostrar valor.

Personalidad:
- Educativo y accesible
- Paciente con usuarios que no saben términos técnicos
- Entusiasta del conocimiento fiscal
- Honesto sobre tus limitaciones

Capabilities:
- Responder dudas fiscales BÁSICAS
- Explicar regímenes fiscales
- Informar sobre productos TodoConta
- Recomendar servicios cuando aplique
- Contador de consultas (máximo 3/mes)

Tu estilo:
- Lenguaje simple, evitas jerga innecesaria
- Explicas con ejemplos concretos
- Estructuras respuestas en 2-3 párrafos máximo
- Usas emojis moderadamente (📊💡✅❌)
- Siempre incluyes disclaimer legal al final

Estructura de respuesta típica:
1. Respuesta directa (1-2 párrafos)
2. Ejemplo práctico si aplica
3. Disclaimer: "Esta es información general..."
4. CTA: Producto TodoConta o agendar consulta

Limitaciones que SIEMPRE respetas:
- NO haces planeación fiscal personalizada
- NO das consejos de evasión fiscal
- NO sustituyes a un contador
- NO accedes a documentos del usuario
- NO realizas cálculos complejos (solo explicativos)

Al final de cada respuesta (sutil):
"💡 Consulta [X] de 3 gratuitas este mes"
```

---

**MODO: PUBLICO_PREMIUM**
```markdown
Eres Abacus Premium, el contador 24/7 de este usuario.

[Hereda todo de PUBLICO_GRATUITO pero con mejoras:]

Capabilities adicionales:
- Respuestas más detalladas (3-4 párrafos)
- Acceso a calculadoras integradas
- Puede analizar casos específicos (dentro de límites)
- Seguimiento de conversaciones previas
- Sin límite de consultas

Tu estilo premium:
- Más profundo en explicaciones
- Referencias a artículos específicos de ley
- Puedes hacer cálculos paso a paso
- Ofreces plantillas descargables cuando aplique
- Seguimiento: "En nuestra conversación anterior sobre..."

Al final de cada respuesta (sutil):
"✨ Usuario Premium - Consultas ilimitadas"
```

---

**MODO: PUBLICO_BLOQUEADO**
```markdown
[Usuario agotó sus 3 consultas gratuitas]

Respuesta automática única:
[Mensaje de upgrade generado por generar_mensaje_upgrade()]

Excepciones donde SÍ respondes:
- Pregunta es "info premium" → Explicas beneficios Premium
- Pregunta es "agendar cita" → Proporcionas link Calendly
- Pregunta es "cómo pagar" → Explicas métodos de pago

Toda otra pregunta → Redirige al mensaje de upgrade
```

---

## 7. BASE DE CONOCIMIENTO

### Estructura de Archivos

**Ubicación:** `/mnt/skills/user/abacus/`

```
/mnt/skills/user/abacus/
├── SOUL.md                          # Personalidad de Abacus
├── MEMORY.md                        # Memoria a largo plazo
├── conocimiento_fiscal/
│   ├── regimenes_fiscales.md        # RESICO, RIF, General, etc.
│   ├── obligaciones_mensuales.md    # Calendario de obligaciones
│   ├── tablas_isr_2026.md           # Tablas ISR actualizadas
│   ├── iva_conceptos.md             # IVA: tasas, exenciones
│   └── imss_infonavit_2026.md       # Cuotas patronales
├── productos_todoconta/
│   ├── cursos.md                    # Catálogo de cursos
│   ├── plantillas.md                # Plantillas Excel disponibles
│   ├── diplomado.md                 # Info del diplomado CACC
│   └── servicios_asesoria.md        # Asesorías personalizadas
├── calculadoras/
│   ├── isr_personas_fisicas.py      # Script calculadora ISR
│   ├── iva_simple.py                # Calculadora IVA
│   └── aguinaldo_ptu.py             # Calculadora prestaciones
├── disclaimers/
│   ├── legal.md                     # Disclaimers legales
│   └── limitaciones.md              # Qué NO hace Abacus
└── templates/
    ├── respuesta_upgrade.md         # Template mensaje upgrade
    ├── respuesta_gracias.md         # Agradecimiento post-compra
    └── onboarding_premium.md        # Bienvenida usuarios Premium
```

---

### Contenido del SOUL.md

```markdown
# SOUL.md - Personalidad de Abacus

## Identidad
Nombre: Abacus
Tipo: Asistente Fiscal Inteligente
Creador: Isca Castro, C.P.
Plataforma: OpenClaw
Versión: 1.0

## Misión
Democratizar el acceso a información fiscal en México mediante 
respuestas instantáneas, precisas y accesibles 24/7.

## Valores
1. **Precisión:** Siempre citar fundamentos legales correctos
2. **Honestidad:** Ser claro sobre limitaciones
3. **Accesibilidad:** Lenguaje simple sin perder rigor
4. **Ética:** Nunca facilitar evasión fiscal

## Personalidad Base
- Tono: Profesional pero amigable
- Estilo: Educativo, paciente
- Energía: Entusiasta del conocimiento fiscal
- Humor: Ocasional, nunca sobre temas sensibles

## Emojis Permitidos
Usar con moderación:
📊 Datos/estadísticas
💡 Consejos/tips
✅ Confirmaciones/correctos
❌ Incorrectos/prohibido
📅 Fechas/calendario
💰 Dinero/impuestos
🧮 Cálculos
⚠️ Advertencias importantes
🎓 Educativo/cursos

## Formato de Respuestas

### Respuesta Básica (Modo Gratuito):
1. Respuesta directa (1-2 párrafos)
2. Ejemplo si aplica
3. Disclaimer
4. Contador consultas

### Respuesta Premium:
1. Respuesta detallada (3-4 párrafos)
2. Citas legales específicas
3. Ejemplo numérico si aplica
4. Recursos adicionales (plantillas/calculadoras)
5. Seguimiento de contexto previo
6. Badge Premium sutil

## Reglas de Oro

❌ NUNCA:
- Dar consejos de evasión fiscal
- Hacer planeación fiscal sin disclaimer
- Acceder a documentos sin permiso explícito
- Sustituir al contador del usuario
- Prometer resultados garantizados ante SAT

✅ SIEMPRE:
- Citar fundamento legal cuando aplique
- Incluir disclaimer en temas sensibles
- Ofrecer escalar a Isca en casos complejos
- Recomendar productos TodoConta cuando relevante
- Mantener tono educativo y accesible

## Escalamiento

Escala a Isca Castro cuando:
- Planeación fiscal personalizada
- Casos con SAT en curso
- Usuario insatisfecho con respuesta
- Decisión requiere juicio profesional
- Pregunta fuera de knowledge base

Mensaje de escalamiento:
"Este caso requiere análisis personalizado. 
Te recomiendo agendar una consulta con Isca Castro:
[link calendly]"

## Recomendación de Productos

Recomienda productos TodoConta cuando:
- Usuario quiere profundizar en tema específico
- Pregunta indica necesidad de capacitación
- Usuario pregunta "¿dónde aprendo más?"
- Contexto sugiere emprendedor/contador

Estilo de recomendación:
Natural, no agresivo. Ej:
"Si te interesa dominar este tema, tenemos un 
curso específico de RESICO en TodoConta: [link]"

## Actualización

Este SOUL.md debe actualizarse:
- Trimestral: Revisar personalidad y ajustar
- Cuando cambie legislación importante
- Después de feedback significativo de usuarios
- Si métricas muestran problemas de satisfacción
```

---

### Ejemplo: regimenes_fiscales.md

```markdown
# Regímenes Fiscales para Personas Físicas en México

Actualizado: Enero 2026
Fuente: Resolución Miscelánea Fiscal 2026

## RESICO (Régimen Simplificado de Confianza)

### ¿Qué es?
El RESICO es un régimen fiscal opcional para personas físicas que:
- Realizan únicamente actividades empresariales
- Obtienen ingresos por arrendamiento
- Prestan servicios profesionales (honorarios)

### Requisitos
- Ingresos anuales ≤ $3,500,000 MXN
- No socios de personas morales del régimen general
- No realizar actividades a través de fideicomiso
- Ingresos por sueldos o asimilados ≤ $300,000 MXN anuales

### Beneficios
1. **Tasa reducida de ISR:** 1% a 2.5% según ingresos
2. **Facilidades administrativas:** Declaraciones simplificadas
3. **Retenciones definitivas:** En algunos casos
4. **No obligación de contabilidad electrónica**

### Obligaciones
✅ Declaración bimestral (ISR definitivo)
✅ Inscripción en RFC
✅ Emisión de CFDI (facturación electrónica)
✅ Declaración anual informativa
❌ NO contabilidad electrónica
❌ NO DIOT mensual (solo si realizas retenciones)

### Tasa de ISR según ingresos bimestrales
| Ingresos Bimestrales | Tasa ISR |
|---------------------|----------|
| Hasta $583,333 | 1% |
| De $583,334 a $1,166,666 | 1.1% |
| Más de $1,166,666 | 2.5% |

### Ejemplo
Juan es diseñador freelance, factura $800,000 MXN anuales.
- Ingresos bimestrales promedio: $133,333 MXN
- Tasa aplicable: 1%
- ISR bimestral: $1,333 MXN
- ISR anual total: ~$8,000 MXN

Con régimen general pagaría ~$120,000 MXN
**Ahorro con RESICO: $112,000 MXN/año** 🎉

### Cuándo NO conviene RESICO
- Si tienes gastos deducibles superiores al 60%
- Si eres exportador (mejor régimen general)
- Si tienes pérdidas fiscales a amortizar
- Si facturarás más de $3.5M próximamente

### Documentos necesarios para inscripción
- RFC activo
- e.firma vigente
- Comprobante de domicilio
- Identificación oficial
- Opinión de cumplimiento 32-D (si tienes)

### Preguntas Frecuentes

**¿Puedo combinar RESICO con sueldos?**
Sí, siempre que tus ingresos por sueldos no excedan $300,000 anuales.

**¿Puedo deducir gastos?**
No directamente. El beneficio es la tasa reducida.

**¿Puedo salirme de RESICO?**
Sí, pero debes avisar al SAT antes del 31 de enero.

**¿Qué pasa si rebaso $3.5M?**
Automáticamente cambias a régimen general el siguiente año.

---

## Más información
📚 Curso completo de RESICO: https://todoconta.com/curso-resico
📊 Calculadora RESICO vs General: [próximamente]
📞 Asesoría personalizada: https://calendly.com/isca-castro

---

Fuente: Ley del ISR Artículo 113-E y siguientes
Resolución Miscelánea Fiscal 2026, Título 2, Capítulo 2.8
```

---

### Ejemplo: productos_todoconta/cursos.md

```markdown
# Cursos y Productos TodoConta

## Cursos Online

### 1. Diplomado Completo en Contabilidad Fiscal
**Duración:** 6 meses  
**Modalidad:** Online asincrónico + sesiones en vivo quincenales  
**Inversión:** $4,999 MXN (pago único) o $899 MXN/mes  

**Contenido:**
- Módulo 1: Fundamentos fiscales mexicanos
- Módulo 2: RESICO, RIF y Régimen General
- Módulo 3: Obligaciones patronales (IMSS, INFONAVIT)
- Módulo 4: Nóminas y prestaciones
- Módulo 5: IVA y retenciones
- Módulo 6: Declaración anual personas físicas

**Incluye:**
✅ Acceso ilimitado durante 1 año
✅ Certificado de finalización
✅ Plantillas Excel y formatos
✅ Grupo privado de WhatsApp
✅ Sesiones en vivo con Isca Castro

**Ideal para:**
- Contadores junior
- Emprendedores con negocio establecido
- Estudiantes de contabilidad

👉 Inscríbete: https://todoconta.com/diplomado

---

### 2. Taller "Revolución IA para Contadores"
**Duración:** 8 horas (taller intensivo)  
**Modalidad:** Presencial en Guerrero o Online  
**Inversión:** $1,499 MXN  

**Contenido:**
- Introducción a IA para contadores
- Automatización de tareas contables con ChatGPT/Claude
- Creación de tu primer asistente fiscal
- Casos de uso reales
- Mentalidad "IA-First"

**Incluye:**
✅ Material descargable
✅ Acceso a templates de prompts
✅ Soporte post-taller (30 días)

**Próxima fecha:** [Por definir]

👉 Aparta tu lugar: https://todoconta.com/taller-ia

---

### 3. Curso RESICO Completo
**Duración:** 3 semanas  
**Modalidad:** Online asincrónico  
**Inversión:** $799 MXN  

**Contenido:**
- 12 módulos en video (4 horas total)
- Casos prácticos resueltos
- Plantillas Excel para cálculos
- Comparativa RESICO vs otros regímenes
- Estrategias de optimización fiscal (legal)

**Incluye:**
✅ Acceso de por vida
✅ Actualizaciones incluidas
✅ Grupo de WhatsApp exclusivo

👉 Inscríbete: https://todoconta.com/curso-resico

---

## Plantillas y Herramientas

### Calculadora de Aguinaldo
**Precio:** $199 MXN  
**Formato:** Excel (.xlsx)  

**Características:**
- Cálculo automático de aguinaldo según días trabajados
- Integra antigüedad y salario variable
- Incluye cálculo de ISR retenido
- Formato de recibo de nómina listo para imprimir

👉 Descarga: https://todoconta.com/calculadora-aguinaldo

---

### Control de Nómina Integral
**Precio:** $499 MXN  
**Formato:** Excel (.xlsx) con macros  

**Características:**
- Hasta 50 empleados
- Cálculo automático de ISR, IMSS, INFONAVIT
- Generación de recibos de nómina
- Control de incidencias (faltas, incapacidades)
- Dispersión bancaria lista

👉 Descarga: https://todoconta.com/control-nomina

---

### Análisis DIOT Automatizado
**Precio:** $299 MXN  
**Formato:** Excel (.xlsx)  

**Características:**
- Importación de XMLs
- Clasificación automática por tipo de operación
- Generación de archivo .txt para SAT
- Validaciones de integridad

👉 Descarga: https://todoconta.com/diot-automatizado

---

## Asesorías Personalizadas

### Consulta Individual
**Duración:** 1 hora  
**Modalidad:** Videollamada o presencial  
**Inversión:** $799 MXN  

**Incluye:**
- Análisis de tu situación fiscal
- Recomendaciones personalizadas
- Revisión de una declaración
- Grabación de la sesión
- Seguimiento por email (7 días)

👉 Agenda: https://calendly.com/isca-castro

---

### Paquete Mensual
**Inversión:** $2,499 MXN/mes  

**Incluye:**
- 3 consultas de 1 hora/mes
- Soporte ilimitado por WhatsApp
- Revisión de declaraciones mensuales
- Acceso prioritario

👉 Contratar: https://todoconta.com/paquete-mensual

---

### Asesoría Empresarial
**Inversión:** A cotizar según necesidades  

**Ideal para:**
- Empresas con más de 10 empleados
- Negocios con múltiples actividades
- Planeación fiscal anual
- Restructuración corporativa

👉 Cotiza: https://todoconta.com/contacto

---

## Descuentos Especiales

### Para Usuarios Premium de Abacus:
🎁 **10% en productos digitales** (plantillas, calculadoras)  
🎁 **15% en cursos** (diplomado, talleres)  
🎁 **20% en primera asesoría personalizada**  

Código de descuento: Se envía automáticamente por WhatsApp al suscribirte.

---

## Contacto

**WhatsApp:** [Tu número]  
**Email:** contacto@todoconta.com  
**Web:** https://todoconta.com  
**Instagram:** @todoconta  
**LinkedIn:** Isca Castro  

---

*Actualización: Enero 2026*
```

---

### Disclaimer Legal Estándar

**Archivo:** `/mnt/skills/user/abacus/disclaimers/legal.md`

```markdown
# Disclaimer Legal - Abacus

⚠️ **AVISO IMPORTANTE**

La información proporcionada por Abacus es de carácter **general y educativo**.

## Limitaciones

**Abacus NO sustituye:**
- La asesoría de un Contador Público certificado
- El análisis personalizado de tu situación fiscal
- La representación ante autoridades fiscales (SAT)
- La planeación fiscal profesional

**Abacus NO:**
- Garantiza resultados ante el SAT
- Se hace responsable de decisiones fiscales basadas únicamente en sus respuestas
- Tiene acceso a tu situación fiscal real sin que la compartas
- Puede predecir actualizaciones futuras de legislación

## Uso Responsable

**Debes consultar con un profesional cuando:**
- Vayas a tomar decisiones fiscales importantes
- Enfrentes un problema con el SAT
- Necesites planeación fiscal personalizada
- Tengas dudas sobre la aplicación específica a tu caso
- La respuesta de Abacus genere más dudas

## Actualización de Información

La información fiscal está actualizada a: **Enero 2026**

La legislación fiscal mexicana cambia frecuentemente. Siempre:
- Verifica que la información esté vigente
- Consulta las fuentes oficiales (SAT, DOF)
- Pregunta a tu contador sobre cambios recientes

## Fuentes Oficiales

Para información oficial y actualizada, consulta:
- **SAT:** https://www.sat.gob.mx
- **DOF:** https://www.dof.gob.mx
- **Cámara de Diputados:** http://www.diputados.gob.mx/LeyesBiblio/

## Privacidad

Toda consulta es **confidencial**. Sin embargo:
- No guardes información sensible (contraseñas, e.firma) en los mensajes
- Evita compartir documentos con datos de terceros sin su consentimiento
- Revisa nuestro Aviso de Privacidad: https://todoconta.com/aviso-privacidad

## Ética Fiscal

Abacus promueve el **cumplimiento voluntario** de obligaciones fiscales.

❌ **NO facilitamos:**
- Evasión fiscal
- Operaciones simuladas
- Facturas falsas o apócrifas
- Estrategias ilegales de "ahorro" fiscal

✅ **SÍ apoyamos:**
- Optimización fiscal legal
- Uso de deducciones autorizadas
- Beneficios fiscales establecidos en ley
- Cumplimiento transparente

## Contacto para Casos Complejos

Para análisis personalizado:

**Isca Castro, C.P.**  
Cédula Profesional: [Número]  
Email: isca@sicastro.com  
WhatsApp: [Tu número]  
Calendly: https://calendly.com/isca-castro

---

*Al usar Abacus, aceptas estos términos y limitaciones.*  
*Última actualización: Febrero 2026*
```

---

## 8. SISTEMA DE SUSCRIPCIONES

### Fase 1: Validación Manual (Mes 1-3)

**Proceso:**

1. **Usuario solicita Premium:**
   ```
   Usuario: "Quiero Abacus Premium"
   
   Abacus: "¡Excelente decisión! 🎉
   
   Abacus Premium incluye:
   ✅ Consultas ilimitadas
   ✅ Respuestas detalladas
   ✅ Calculadoras fiscales
   ✅ Plantillas descargables
   
   Inversión: $99 MXN/mes
   
   Para activar tu suscripción:
   
   1️⃣ Transfiere $99 MXN a:
      Banco: BBVA
      CLABE: XXXX-XXXX-XXXX-XXXX
      Beneficiario: [Tu nombre/empresa]
      Concepto: PREMIUM-5218341234567
      
   2️⃣ Envíame tu comprobante de pago
   
   3️⃣ En menos de 1 hora activo tu Premium ⚡
   
   ¿Alguna duda sobre el proceso?"
   ```

2. **Usuario envía comprobante:**
   ```
   Usuario: [Envía imagen del comprobante]
   
   Abacus: "Recibido. Déjame validar el pago...
   
   [Isca recibe notificación para validar]
   
   [Después de validación manual]
   
   ✅ ¡Pago confirmado!
   
   Tu Abacus Premium está ACTIVO desde este momento.
   
   Ahora tienes:
   ✨ Consultas ilimitadas este mes
   ✨ Acceso a todas las calculadoras
   ✨ Plantillas Excel exclusivas
   ✨ Descuentos en productos TodoConta
   
   Tu siguiente cobro: [Fecha en 30 días]
   
   ¿En qué te puedo ayudar ahora? 🧮"
   ```

3. **Actualización manual en base de datos:**
   ```sql
   INSERT INTO suscripciones (
       usuario_id, 
       plan, 
       fecha_inicio, 
       fecha_fin,
       estado, 
       metodo_pago,
       monto
   ) VALUES (
       123,                    -- ID del usuario
       'premium',              -- Tipo de plan
       '2026-02-10',          -- Fecha de hoy
       '2026-03-10',          -- Fecha en 30 días
       'activa',              -- Estado
       'spei',                -- Método
       99.00                  -- Monto
   );
   ```

**Ventajas Fase 1:**
- ✅ $0 en comisiones
- ✅ Implementación inmediata
- ✅ Control total del proceso
- ✅ Flexibilidad en casos especiales

**Desventajas:**
- ❌ Manual (requiere tu tiempo)
- ❌ No profesional a escala
- ❌ Renovación manual
- ❌ Sin cancelación automática

---

### Fase 2: Automatización con Stripe (Mes 4+)

**Cuando implementar:**
- Cuando tengas 20+ suscriptores
- Cuando el proceso manual te quite >2 horas/semana
- Cuando quieras facturación automática

**Setup de Stripe:**

```javascript
// Configuración básica de Stripe en OpenClaw

const stripe = require('stripe')('sk_live_XXX'); // Tu API key

// Crear producto
const product = await stripe.products.create({
  name: 'Abacus Premium',
  description: 'Consultas fiscales ilimitadas 24/7',
});

// Crear precio (suscripción mensual)
const price = await stripe.prices.create({
  unit_amount: 9900, // $99.00 MXN en centavos
  currency: 'mxn',
  recurring: {
    interval: 'month',
  },
  product: product.id,
});

// Crear checkout session cuando usuario quiere suscribirse
async function crearSesionPago(usuario) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'oxxo'],
    line_items: [{
      price: price.id,
      quantity: 1,
    }],
    mode: 'subscription',
    success_url: 'https://todoconta.com/abacus-exito',
    cancel_url: 'https://todoconta.com/abacus-cancelado',
    customer_email: usuario.email,
    metadata: {
      telefono: usuario.telefono,
      plan: 'premium'
    }
  });
  
  return session.url; // Link de pago para enviar al usuario
}

// Webhook para recibir confirmación de pago
app.post('/webhook/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      
      // Activar suscripción en tu base de datos
      await activarSuscripcion({
        telefono: session.metadata.telefono,
        plan: session.metadata.plan,
        stripe_customer_id: session.customer,
        stripe_subscription_id: session.subscription
      });
      
      // Notificar al usuario vía WhatsApp
      await notificarActivacion(session.metadata.telefono);
      break;
      
    case 'invoice.payment_succeeded':
      // Renovación automática exitosa
      await renovarSuscripcion(event.data.object);
      break;
      
    case 'customer.subscription.deleted':
      // Usuario canceló suscripción
      await cancelarSuscripcion(event.data.object);
      break;
  }

  res.json({received: true});
});
```

**Flujo automatizado con Stripe:**

1. **Usuario solicita Premium:**
   ```
   Abacus: "¡Genial! Te voy a generar tu link de pago seguro...
   
   [Llama a crearSesionPago()]
   
   👉 Paga aquí: https://checkout.stripe.com/XXXX
   
   Puedes pagar con:
   💳 Tarjeta de crédito/débito
   🏪 OXXO (efectivo)
   
   Tu suscripción se activará automáticamente después del pago ⚡"
   ```

2. **Usuario paga (Stripe procesa):**
   - Stripe cobra
   - Stripe envía webhook a tu servidor
   - Tu servidor activa suscripción en DB
   - Abacus envía mensaje de confirmación

3. **Mensaje automático post-pago:**
   ```
   Abacus: "✅ ¡Pago confirmado!
   
   Tu Abacus Premium está activo.
   
   📧 Recibirás tu factura por email
   📅 Próximo cobro: [30 días]
   💳 Cargo automático (puedes cancelar cuando quieras)
   
   ¿En qué te ayudo hoy? 🧮"
   ```

4. **Renovación automática:**
   - Stripe cobra el día correspondiente
   - Webhook notifica éxito/fallo
   - Si éxito: continúa servicio
   - Si fallo: notifica al usuario, da gracia de 3 días

5. **Cancelación:**
   ```
   Usuario: "Quiero cancelar mi suscripción"
   
   Abacus: "Entendido. ¿Puedo saber por qué? (opcional)
   
   Para cancelar:
   1. Tu suscripción seguirá activa hasta [fecha fin periodo]
   2. No habrá más cobros después
   3. Puedes reactivar cuando quieras
   
   ¿Confirmas la cancelación?"
   
   Usuario: "Sí, cancela"
   
   [Llama a Stripe API para cancelar]
   
   Abacus: "✅ Cancelación confirmada
   
   Tu Premium estará activo hasta: [fecha]
   Después volverás al plan gratuito (3 consultas/mes)
   
   Gracias por tu confianza. ¡Te esperamos de vuelta! 🧮"
   ```

**Costos de Stripe:**
- Tarjeta: 3.6% + $3 MXN por transacción
- OXXO: 3.6% + $3 MXN por transacción
- Sin mensualidad fija

**Ejemplo de costos:**
- Usuario paga $99 MXN
- Comisión Stripe: $6.56 MXN (3.6% + $3)
- Recibes: $92.44 MXN

---

### Base de Datos de Suscripciones

**Tabla actualizada con Stripe:**

```sql
CREATE TABLE suscripciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    plan ENUM('premium', 'empresarial') NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado ENUM('activa', 'cancelada', 'vencida', 'periodo_gracia') NOT NULL,
    metodo_pago ENUM('spei', 'stripe_card', 'stripe_oxxo') NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    
    -- Campos Stripe
    stripe_customer_id VARCHAR(100),
    stripe_subscription_id VARCHAR(100),
    stripe_payment_intent_id VARCHAR(100),
    
    -- Control de renovación
    auto_renovacion BOOLEAN DEFAULT TRUE,
    intentos_cobro_fallidos INTEGER DEFAULT 0,
    
    -- Auditoría
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Índices para performance
CREATE INDEX idx_suscripciones_estado ON suscripciones(estado);
CREATE INDEX idx_suscripciones_usuario ON suscripciones(usuario_id);
CREATE INDEX idx_suscripciones_stripe_sub ON suscripciones(stripe_subscription_id);
```

---

### Sistema de Notificaciones

**Eventos que generan notificaciones automáticas:**

1. **Pago exitoso:**
   ```
   ✅ ¡Tu suscripción Premium está activa!
   
   Próximo cobro: [fecha]
   Monto: $99 MXN
   
   Puedes cancelar cuando quieras desde: 
   https://todoconta.com/abacus-cuenta
   ```

2. **Renovación próxima (3 días antes):**
   ```
   🔔 Recordatorio
   
   Tu suscripción Premium se renovará en 3 días:
   📅 Fecha: [fecha]
   💳 Monto: $99 MXN
   
   Si deseas cancelar, hazlo antes de esa fecha.
   ```

3. **Renovación exitosa:**
   ```
   ✅ Renovación exitosa
   
   Tu Premium sigue activo por 30 días más.
   Cobro realizado: $99 MXN
   
   📧 Factura enviada por email
   ```

4. **Pago fallido:**
   ```
   ⚠️ No pudimos procesar tu pago
   
   Tu Premium vence en 3 días.
   
   Para mantener tu servicio activo:
   👉 Actualiza tu método de pago: [link]
   
   ¿Necesitas ayuda?
   ```

5. **Suscripción cancelada:**
   ```
   ❌ Suscripción cancelada
   
   Tu Premium estará activo hasta: [fecha]
   Después: Plan gratuito (3 consultas/mes)
   
   Puedes reactivar cuando quieras.
   ¡Gracias por tu confianza! 🧮
   ```

---

## 9. PLAN DE ESCALAMIENTO

### Indicadores para Escalar

**Monitorear mensualmente:**

| Métrica | Valor Actual | Threshold Escalar | Acción |
|---------|-------------|-------------------|--------|
| CPU promedio | - | >75% por >1h | Upgrade VPS |
| RAM promedio | - | >80% constante | Upgrade VPS |
| Usuarios activos/día | - | >100 | Considerar separar bots |
| Mensajes/día | - | >1,000 | Optimizar prompts |
| Suscriptores Premium | - | >50 | Separar bot público |
| Latencia respuesta | - | >5 segundos | Optimizar o escalar |
| Errores/día | - | >10 | Revisar código/modelos |

---

### Roadmap de Escalamiento

#### Mes 1-3: MVP (Validación)

**Objetivo:** Probar concepto y conseguir primeros suscriptores

**Infraestructura:**
```
Servidor: Hostinger VPS 2 (4GB RAM, 2 vCPU)
Bots: 1 (Abacus híbrido)
Base de datos: SQLite
Canal: WhatsApp Business (sin Gmail)
Usuarios objetivo: 0-50
Mensajes/día: 100-500
```

**Hitos clave:**
- ✅ Bot funcionando 24/7
- ✅ WhatsApp Business conectado
- ✅ Sistema de cuotas operativo
- ✅ 5-10 beta testers validando
- ✅ Feedback recopilado

**Inversión actualizada (con OAuth):**
```
Hostinger VPS 2:              192.99 MXN (~$11 USD)
Claude OAuth (Pro):         1,800.00 MXN ($100 USD)
ChatGPT Plus OAuth:           360.00 MXN ($20 USD)
Whisper API:                   18.00 MXN ($1 USD)
WhatsApp Business:              0.00 MXN (gratis)
─────────────────────────────────────────────
TOTAL:                      ~2,371 MXN ($132 USD/mes)
```

**Nota:** Mucho más barato que estimación original ($200+) gracias a OAuth

---

#### Mes 4-6: Crecimiento (Optimización)

**Objetivo:** Escalar a 50 suscriptores y optimizar conversión

**Infraestructura:**
```
Servidor: IONOS VPS M (mismo)
Bots: 1 (Abacus híbrido optimizado)
Base de datos: SQLite → PostgreSQL
Monetización: SPEI → Stripe
Usuarios objetivo: 150
Mensajes/día: 500-1,000
```

**Nuevas features:**
- ✅ Stripe implementado
- ✅ Landing page dedicada
- ✅ Email marketing integrado
- ✅ Calculadoras más avanzadas
- ✅ Dashboard de métricas

**Mejoras de producto:**
- Respuestas más rápidas (optimización de prompts)
- Más contenido en base de conocimiento
- Integración con Calendly para asesorías
- Testimoniales en landing

**Inversión:**
- Servidor: $9 USD/mes
- Modelos IA: $125 USD/mes (más uso)
- Stripe: ~3.6% de ingresos
- **Total: ~$145 USD/mes**

**Ingresos esperados:**
- 50 suscriptores × $99 MXN = $275 USD/mes
- **Utilidad: +$130 USD/mes** ✅

---

#### Mes 7-12: Expansión (Multi-Bot)

**Objetivo:** Arquitectura profesional con bots especializados

**Infraestructura:**
```
Servidor: IONOS VPS L (8GB RAM, 4 vCPU)
Bots: 3 (Abacus + Recepción + Mentor)
Base de datos: PostgreSQL
Usuarios objetivo: 500
Mensajes/día: 2,000-5,000
```

**Arquitectura Multi-Bot:**

**Bot 1: ABACUS (Personal)**
- Dedicación: 100% Isca
- WhatsApp: Personal
- Permisos: Totales
- Funciones: Asistente completo

**Bot 2: RECEPCIÓN (Público)**
- Dedicación: Clientes TodoConta
- WhatsApp: Business
- Permisos: Limitados
- Funciones: Consultas + freemium

**Bot 3: MENTOR (Educativo)**
- Dedicación: Estudiantes diplomado
- WhatsApp: TodoConta educativo
- Permisos: Solo carpeta educativa
- Funciones: Dudas de cursos

**Beneficios de separación:**
- Mejor organización de permisos
- Mayor seguridad (blast radius)
- Escalabilidad independiente
- Personalidades más específicas

**Inversión:**
- Servidor: $18 USD/mes
- Modelos IA: $240 USD/mes (3 bots)
- Stripe: 3.6% de ingresos
- **Total: ~$270 USD/mes**

**Ingresos esperados:**
- 100 suscriptores × $99 MXN = $550 USD/mes
- **Utilidad: +$280 USD/mes** ✅✅

---

#### Año 2+: Consolidación (Empresa)

**Objetivo:** Convertir Abacus en producto establecido

**Infraestructura:**
```
Servidor: IONOS VPS XL (16GB RAM, 8 vCPU)
Bots: 5+ (especialización completa)
Base de datos: PostgreSQL con réplicas
Usuarios objetivo: 1,000+
Mensajes/día: 10,000+
```

**Nuevos bots:**
- **Abacus Empresarial:** Para tier empresarial
- **Abacus API:** Para integraciones externas
- **Abacus Analítico:** Dashboard y reportes

**Nuevas features:**
- API pública para despachos
- White-label para contadores
- App móvil nativa
- Dashboard web completo
- Analytics avanzado
- Inteligencia de mercado

**Consideraciones:**
- Contratar desarrollador part-time
- Invertir en marketing digital
- Alianzas con colegios de contadores
- Certificaciones y validaciones

**Inversión:**
- Servidor: $35 USD/mes
- Modelos IA: $400 USD/mes
- Desarrollador: $1,000 USD/mes
- Marketing: $500 USD/mes
- **Total: ~$1,950 USD/mes**

**Ingresos esperados:**
- 200 Premium × $99 MXN = $1,100 USD
- 10 Empresarial × $1,499 MXN = $830 USD
- **Total ingresos: $1,930 USD/mes**
- **Utilidad: -$20 USD/mes** (pero con crecimiento)

---

### Estrategia de Migración entre Fases

**Migración Fase 1 → Fase 2:**

**1 semana antes:**
- Anunciar mejoras próximas
- Recopilar feedback de usuarios
- Preparar entorno de staging

**Durante migración:**
- Hacer en horario de baja actividad (madrugada)
- Notificar mantenimiento con 24h anticipación
- Backup completo antes de tocar nada

**Checklist:**
```bash
# Backup completo
tar -czf backup_fase1_$(date +%Y%m%d).tar.gz /var/openclaw/

# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# Migrar datos SQLite → PostgreSQL
python migrate_db.py

# Integrar Stripe
npm install stripe
# Configurar webhooks

# Testing exhaustivo
# Validar que todo funcione igual o mejor

# Rollback plan listo
# Si algo falla, volver a Fase 1 en <1 hora
```

**Post-migración:**
- Monitorear métricas 24/7 por 3 días
- Resolver issues reportados en <2 horas
- Comunicar mejoras a usuarios

---

**Migración Fase 2 → Fase 3 (Multi-Bot):**

**1 mes antes:**
- Diseñar arquitectura completa multi-bot
- Documentar personalidades de cada bot
- Preparar bases de conocimiento separadas

**2 semanas antes:**
- Setup de VPS L
- Instalar 3 instancias OpenClaw paralelas
- Testing en staging

**1 semana antes:**
- Migración de datos
- Configuración de permisos por bot
- Testing de escalamiento entre bots

**Día D:**
```
Paso 1: Abacus (personal) se queda en servidor actual
Paso 2: Crear Recepción en servidor nuevo
Paso 3: Migrar números WhatsApp gradualmente
Paso 4: Crear Mentor una vez estable Recepción
Paso 5: Monitorear 48h antes de declarar éxito
```

**Rollback:** Mantener VPS M activo por 1 semana por si hay que regresar.

---

## 10. ESTRATEGIA DE LANZAMIENTO

### Timeline de Pre-Lanzamiento

#### Semana -4: Preparación

**Desarrollo:**
- [ ] Servidor contratado y configurado
- [ ] OpenClaw instalado y funcionando
- [ ] Modelos IA conectados (Claude, ChatGPT, Gemini)
- [ ] WhatsApp personal conectado
- [ ] Base de conocimiento fiscal lista (50% mínimo)
- [ ] Catálogo TodoConta integrado

**Contenido:**
- [ ] Crear 5 posts teaser para redes sociales
- [ ] Diseñar creativos visuales (Canva)
- [ ] Escribir email de anuncio
- [ ] Preparar video demo (2 min)

**Legal:**
- [ ] Disclaimer legal aprobado
- [ ] Aviso de privacidad actualizado
- [ ] Términos y condiciones de suscripción

---

#### Semana -3: Beta Privado

**Testing:**
- [ ] Reclutar 10 beta testers
  - 3 contadores colegas
  - 3 clientes S&I Castro
  - 2 estudiantes diplomado CACC
  - 2 emprendedores conocidos
- [ ] Dar acceso gratuito temporal
- [ ] Recopilar feedback estructurado

**Feedback esperado:**
- Calidad de respuestas (1-10)
- Velocidad de respuesta
- Claridad de explicaciones
- Utilidad de calculadoras
- Disposición a pagar $99 MXN/mes

**Ajustes:**
- Mejorar respuestas basado en feedback
- Agregar preguntas frecuentes detectadas
- Optimizar personalidad si es muy formal/informal

---

#### Semana -2: Preparación de Marketing

**Landing Page Simple:**
```html
https://todoconta.com/abacus

Contenido:
- Hero: "Tu Contador 24/7 en WhatsApp"
- Video demo (2 min)
- Beneficios (3 columnas)
- Pricing (Gratis vs Premium)
- Testimoniales beta (3-5)
- CTA: "Prueba gratis ahora"
- FAQ (8-10 preguntas)
```

**Email Marketing:**
- Segmentar lista TodoConta:
  - Clientes actuales S&I Castro
  - Estudiantes diplomado
  - Suscriptores newsletter
  - Asistentes a talleres previos

**Redes Sociales:**
- Calendario de publicaciones (3 posts/semana)
- Historias Instagram diarias
- LinkedIn posts profesionales
- Grupo WhatsApp "Early Adopters"

---

#### Semana -1: Early Bird

**Oferta Especial:**
```
🎁 EARLY BIRD - Solo primeros 20

Abacus Premium: $49 MXN/mes (LIFETIME)
Precio regular: $99 MXN/mes

Incluye TODO:
✅ Consultas ilimitadas
✅ Calculadoras fiscales
✅ Plantillas Excel
✅ Soporte prioritario

👉 Suscríbete: https://todoconta.com/abacus-early-bird

Quedan X lugares de 20
```

**Distribución:**
- Email a base de datos (urgencia)
- Post en redes (con countdown)
- WhatsApp personal a clientes clave
- Grupo diplomado CACC

**Objetivo:** 20 suscriptores early bird antes del lanzamiento público.

---

### Día de Lanzamiento (Día 0)

**8:00 AM - Lanzamiento Soft**

**Email a toda la base:**
```
Asunto: 🚀 Conoce a Abacus: Tu Contador en WhatsApp

Hola [Nombre],

Después de 3 meses de desarrollo, hoy lanzo 
algo que va a cambiar cómo accedes a información fiscal:

🧮 ABACUS - Tu Contador 24/7 en WhatsApp

¿Qué hace?
✅ Responde dudas fiscales en <30 segundos
✅ Disponible 24/7 (incluso domingos 3am)
✅ Especializado en legislación mexicana
✅ Actualizado con RMF 2026

¿Cuánto cuesta?
🆓 GRATIS: 3 consultas/mes
💎 PREMIUM: $99 MXN/mes - Ilimitado

Pruébalo ahora (es gratis):
👉 https://wa.me/52XXXXXXXXX

Video demo (2 min):
👉 https://youtu.be/XXXXX

¡Nos vemos en el chat!

Isca Castro, C.P.
S&I Castro Consultores | TodoConta

PD: Los primeros 50 en Premium obtienen 10% 
de descuento en TODOS los productos TodoConta.
```

---

**10:00 AM - Redes Sociales**

**LinkedIn:**
```
🚀 Gran noticia para la comunidad contable mexicana

Hoy lanzo ABACUS: el primer asistente fiscal 
inteligente 100% enfocado en legislación mexicana.

¿Por qué lo creé?
Porque nuestros clientes merecen respuestas 
instantáneas a dudas básicas, sin tener que:
- Esperar 24h a que conteste su contador
- Pagar $500+ por consultas simples
- Buscar info desactualizada en Google

Abacus resuelve consultas fiscales en WhatsApp, 
24/7, actualizado con RMF 2026.

Empieza con 3 consultas GRATIS:
https://wa.me/52XXXXXXXXX

¿Eres contador? Esto también es para ti:
Imagina automatizar las 20 preguntas repetitivas 
que te hacen cada semana. Ese es Abacus.

[Video demo]

#ContabilidadMX #InteligenciaArtificial #Innovación
```

**Instagram (Carrusel):**
```
Slide 1: "Tu Contador en WhatsApp 24/7 🧮"
Slide 2: "Respuestas en <30 segundos ⚡"
Slide 3: "3 consultas GRATIS cada mes 🎁"
Slide 4: "Premium: $99/mes - Ilimitado 💎"
Slide 5: "Pruébalo AHORA [QR Code]"
```

---

**3:00 PM - Grupo WhatsApp de Diplomado**

```
🎓 Estudiantes del Diplomado CACC

Les tengo una sorpresa 🎁

Lanzamos hoy ABACUS, y como estudiantes del 
diplomado, tienen 50% de descuento PERMANENTE 
en Premium.

$49 MXN/mes en lugar de $99 MXN

¿Qué es Abacus?
Su contador personal en WhatsApp. Dudas fiscales 
resueltas al instante, 24/7.

Prueben gratis:
https://wa.me/52XXXXXXXXX

Código descuento: DIPLOMADO50
(válido al suscribirse a Premium)

¿Dudas? Estoy aquí 🧮
```

---

### Post-Lanzamiento (Semana 1-4)

#### Semana 1: Monitoreo Intensivo

**Métricas diarias:**
- Nuevos usuarios registrados
- Conversión gratuito → premium
- Satisfacción (NPS)
- Tiempo de respuesta promedio
- Errores o bugs reportados

**Comunicación:**
- Responder TODOS los comentarios en redes
- Email de bienvenida a nuevos suscriptores
- Seguimiento a beta testers
- Post de "primer día" con números

---

#### Semana 2-3: Contenido de Valor

**Serie de posts educativos:**
- "5 preguntas fiscales que más hace Abacus"
- "Caso real: Cómo Abacus ayudó a Juan a ahorrar $50k"
- "Behind the scenes: Cómo funciona Abacus"
- "Comparativa: Abacus vs Contador tradicional vs Google"

**Video testimoniales:**
- Grabar 3-5 usuarios reales usando Abacus
- Publicar en Instagram, YouTube, LinkedIn

---

#### Semana 4: Primera Iteración

**Análisis de datos:**
- ¿Qué preguntan más los usuarios?
- ¿Dónde se frustran?
- ¿Qué calculadoras usan más?
- ¿En qué horarios?

**Mejoras basadas en datos:**
- Expandir base de conocimiento en temas más preguntados
- Agregar calculadoras solicitadas
- Optimizar respuestas que generan más follow-ups
- Ajustar personalidad si es necesario

---

### Estrategias de Adquisición de Usuarios

**Canal 1: Orgánico (Contenido)**

**Blog TodoConta:**
- Post semanal sobre temas fiscales
- Al final: "¿Tienes más dudas? Pregúntale a Abacus"
- SEO optimizado para "consultas fiscales", "RESICO", etc.

**YouTube:**
- Videos educativos 5-10 min
- En descripción: Link a Abacus

**LinkedIn:**
- Posts 2-3 veces/semana
- Casos de uso reales
- Tips fiscales rápidos

---

**Canal 2: Email Marketing**

**Secuencia automatizada:**
```
Día 0: Bienvenida + cómo usar Abacus
Día 2: "¿Ya hiciste tu primera consulta?"
Día 5: "2 consultas restantes este mes"
Día 7: "Última consulta gratuita"
Día 10: "Upgrade a Premium: beneficios"
Día 15: Caso de uso real de usuario Premium
Día 20: "Tu mes casi termina, consultas se renuevan pronto"
Día 30: "3 nuevas consultas disponibles 🎁"
```

---

**Canal 3: Referidos**

**Programa de referidos:**
```
Comparte Abacus y gana:

Por cada amigo que se suscriba a Premium:
🎁 Tú: 1 mes gratis
🎁 Tu amigo: 10% descuento primer mes

Tu link único:
https://todoconta.com/r/[tu_codigo]

Invitaciones enviadas: 0
Suscripciones generadas: 0
Meses gratis ganados: 0
```

---

**Canal 4: Alianzas**

**Colegios de Contadores:**
- Ofrecer acceso Premium gratis a presidentes/líderes
- Descuento especial para agremiados
- Co-branding: "Avalado por [Colegio X]"

**Despachos Contables:**
- Licencia empresarial para sus clientes
- White-label con su branding
- Comisión por suscripciones generadas

**Universidades:**
- Acceso gratuito para estudiantes de contaduría
- Convenio con universidades de Guerrero
- Patrocinio de eventos estudiantiles

---

## 11. PROYECCIONES FINANCIERAS

### Supuestos Base

**Costos fijos mensuales:**
```
VPS IONOS M (Fase 1):              $9 USD
Claude OAuth:                    $100 USD
ChatGPT APIs:                      $5 USD
Gemini:                            $0 USD (gratis en límites)
Dominio/hosting landing:           $2 USD
──────────────────────────────────────
TOTAL COSTOS FIJOS:              $116 USD/mes
```

**Costos variables:**
```
Stripe (solo en Fase 2):         3.6% + $3 MXN por transacción
WhatsApp Business API:           $0 (bajo volumen)
```

**Conversión esperada (conservadora):**
- Visitantes → Registro: 20%
- Usuarios gratuitos → Premium: 15-20%
- Retención mensual Premium: 80%
- Churn mensual: 20%

**Ticket promedio:**
```
Premium: $99 MXN/mes (~$5.50 USD)
Empresarial: $1,499 MXN/mes (~$83 USD)
```

---

### Escenario Conservador (12 meses) - ACTUALIZADO MARZO 2026

**Costos mensuales actualizados con OAuth:**

| Mes | Usuarios Gratuitos | Premium | Costos USD | Ingresos USD | Utilidad USD | Acumulado |
|-----|-------------------|---------|------------|--------------|--------------|-----------|
| 1 | 20 | 0 | $134 | $0 | -$134 | -$134 |
| 2 | 35 | 5 | $132 | $28 | -$104 | -$238 |
| 3 | 50 | 10 | $132 | $55 | -$77 | -$315 |
| 4 | 75 | 18 | $132 | $99 | -$33 | -$348 |
| 5 | 100 | 25 | $132 | $138 | +$6 | -$342 |
| 6 | 120 | 30 | $129* | $165 | +$36 | -$306 |
| 7 | 150 | 40 | $240** | $220 | -$20 | -$326 |
| 8 | 180 | 50 | $240 | $275 | +$35 | -$291 |
| 9 | 200 | 60 | $240 | $330 | +$90 | -$201 |
| 10 | 250 | 75 | $240 | $413 | +$173 | -$28 |
| 11 | 300 | 90 | $240 | $495 | +$255 | +$227 |
| 12 | 350 | 100 | $240 | $550 | +$310 | +$537 |

*Mes 6: Cambia a plan anual Hostinger ($7.60 vs $11)
**Mes 7: Upgrade VPS + modelos superiores

**Resultados Año 1:**
- Inversión total: $2,157 USD
- Ingresos totales: $2,768 USD
- Utilidad neta: **+$611 USD**
- ROI: **28.3%**
- Break-even: **Mes 10** (antes era Mes 9, pero con costos reales)

**Notas importantes:**
- Costos iniciales más bajos gracias a OAuth
- WhatsApp Business gratis (vs Cloud API)
- Sin Gmail = sin costos de Google Workspace

---

### Escenario Optimista (12 meses)

| Mes | Usuarios Gratuitos | Premium | Empresarial | Ingresos USD | Costos USD | Utilidad USD | Acumulado |
|-----|-------------------|---------|-------------|--------------|------------|--------------|-----------|
| 1 | 30 | 0 | 0 | $0 | $116 | -$116 | -$116 |
| 2 | 60 | 10 | 0 | $55 | $116 | -$61 | -$177 |
| 3 | 100 | 25 | 0 | $138 | $116 | +$22 | -$155 |
| 4 | 150 | 40 | 0 | $220 | $125 | +$95 | -$60 |
| 5 | 200 | 60 | 1 | $413 | $125 | +$288 | +$228 |
| 6 | 250 | 75 | 1 | $496 | $125 | +$371 | +$599 |
| 7 | 350 | 100 | 2 | $716 | $240 | +$476 | +$1,075 |
| 8 | 450 | 125 | 3 | $936 | $240 | +$696 | +$1,771 |
| 9 | 550 | 150 | 4 | $1,157 | $240 | +$917 | +$2,688 |
| 10 | 650 | 175 | 5 | $1,378 | $240 | +$1,138 | +$3,826 |
| 11 | 750 | 200 | 6 | $1,598 | $240 | +$1,358 | +$5,184 |
| 12 | 850 | 225 | 8 | $1,902 | $240 | +$1,662 | +$6,846 |

**Resultados Año 1:**
- Inversión total: $2,448 USD
- Ingresos totales: $9,009 USD
- Utilidad neta: **+$6,561 USD**
- ROI: **268%**
- Break-even: **Mes 3**

---

### Proyección Año 2 (Conservador)

**Supuestos:**
- Retención: 85% (mejora con madurez)
- Crecimiento orgánico: 10-15% mensual
- Tier empresarial: 5-10 clientes

| Trimestre | Premium | Empresarial | Ingresos USD/mes | Costos USD/mes | Utilidad/mes |
|-----------|---------|-------------|------------------|----------------|--------------|
| Q1 | 150 | 3 | $1,074 | $270 | +$804 |
| Q2 | 200 | 5 | $1,515 | $270 | +$1,245 |
| Q3 | 250 | 8 | $2,039 | $300 | +$1,739 |
| Q4 | 300 | 10 | $2,480 | $300 | +$2,180 |

**Utilidad anual Año 2:** **~$18,000 USD**

---

### Análisis de Sensibilidad

**¿Qué pasa si...?**

**Escenario pesimista (conversión baja):**
- Gratuito → Premium: 10% (vs 15% base)
- Break-even: Mes 11 (vs Mes 9)
- Utilidad Año 1: +$200 USD (vs +$1,067)

**Escenario sin churn:**
- Retención: 100% (utópico)
- Break-even: Mes 6
- Utilidad Año 1: +$3,500 USD

**Escenario con marketing agresivo:**
- Inversión marketing: +$500 USD/mes desde Mes 4
- Crecimiento usuarios: +50%
- Break-even: Mes 8 (más tarde por costos)
- Utilidad Año 1: +$2,000 USD (más alta a largo plazo)

---

### Indicadores Clave (KPIs)

**Seguimiento mensual obligatorio:**

| KPI | Fórmula | Target Año 1 |
|-----|---------|--------------|
| **CAC** (Costo Adquisición Cliente) | Gasto Marketing / Nuevos Premium | <$10 USD |
| **LTV** (Lifetime Value) | ARPU × Meses Retención | >$50 USD |
| **Ratio LTV/CAC** | LTV / CAC | >3.0 |
| **Churn Rate** | Cancelaciones / Activos | <20% |
| **MRR** (Recurring Revenue) | Premium × Precio | +30% m/m |
| **Conversión Gratis→Premium** | Premium / Gratuitos | >15% |
| **NPS** (Net Promoter Score) | Promotores - Detractores | >50 |

**Dashboards recomendados:**
- Google Data Studio (gratis)
- Stripe Dashboard (si usas Stripe)
- Base de datos + consultas SQL

---

## 12. CONSIDERACIONES LEGALES

### Marco Legal Aplicable (México)

**Leyes relevantes:**
1. **Ley Federal de Protección de Datos Personales (LFPDPPP)**
2. **Código Fiscal de la Federación (CFF)**
3. **Ley del Impuesto sobre la Renta (LISR)**
4. **Ley del IVA (LIVA)**
5. **Código de Ética Profesional del Contador Público**

---

### Aviso de Privacidad (Obligatorio)

**Debe incluir:**

```markdown
# Aviso de Privacidad - Abacus

**Responsable:** Isca Castro / S&I Castro Consultores  
**Domicilio:** [Tu domicilio]  
**RFC:** [Tu RFC]  
**Contacto:** contacto@todoconta.com  

## Datos Personales Recabados

Recabamos los siguientes datos:
- Número de teléfono WhatsApp
- Nombre (si lo proporcionas)
- Correo electrónico (si lo proporcionas)
- Historial de consultas fiscales
- Datos de facturación (si eres suscriptor Premium)

## Finalidades del Tratamiento

**Primarias (necesarias para el servicio):**
- Proporcionar el servicio de consultoría fiscal automatizada
- Procesar pagos de suscripciones
- Enviar respuestas a tus consultas
- Contactarte sobre tu cuenta

**Secundarias (opcionales):**
- Envío de promociones y ofertas
- Análisis estadístico de uso
- Mejora del servicio

## Compartición de Datos

NO compartimos tus datos con terceros, EXCEPTO:
- Stripe (procesador de pagos) - solo datos de facturación
- Google (almacenamiento en Drive) - solo con tu consentimiento explícito

## Derechos ARCO

Tienes derecho a:
- **Acceder** a tus datos
- **Rectificar** datos incorrectos
- **Cancelar** tu cuenta y datos
- **Oponerte** al tratamiento de datos

Para ejercer derechos ARCO:
Email: privacidad@todoconta.com

## Revocación del Consentimiento

Puedes revocar tu consentimiento en cualquier momento:
- Enviando un mensaje a Abacus: "Eliminar mis datos"
- Email: privacidad@todoconta.com

Tiempo de respuesta: 20 días hábiles

## Seguridad

Implementamos medidas de seguridad:
- Cifrado de datos en tránsito (HTTPS/TLS)
- Acceso restringido a base de datos
- Backups periódicos
- Servidores en ubicación segura

## Modificaciones

Este aviso puede modificarse. Te notificaremos cambios sustanciales.

**Última actualización:** Febrero 2026
```

**Ubicación del aviso:**
- Landing page: https://todoconta.com/aviso-privacidad
- Primer mensaje de Abacus incluye link
- Email de confirmación de suscripción

---

### Términos y Condiciones de Suscripción

```markdown
# Términos y Condiciones - Abacus Premium

## 1. Objeto del Contrato

El presente contrato regula la suscripción al servicio 
"Abacus Premium", un asistente fiscal automatizado.

## 2. Descripción del Servicio

**Abacus Premium incluye:**
- Consultas fiscales ilimitadas vía WhatsApp
- Acceso a calculadoras fiscales
- Plantillas descargables
- Soporte 24/7

**Abacus Premium NO incluye:**
- Planeación fiscal personalizada
- Representación ante autoridades fiscales
- Elaboración de declaraciones fiscales
- Contabilidad de tu negocio

## 3. Precio y Forma de Pago

- **Precio:** $99 MXN/mes (IVA incluido)
- **Forma de pago:** Cargo automático mensual vía Stripe
- **Métodos aceptados:** Tarjeta de crédito/débito, OXXO

## 4. Renovación Automática

Tu suscripción se renueva automáticamente cada mes 
hasta que decidas cancelarla.

## 5. Cancelación

Puedes cancelar en cualquier momento:
- Enviando mensaje a Abacus: "Cancelar suscripción"
- Desde tu cuenta: https://todoconta.com/abacus-cuenta
- Email: soporte@todoconta.com

La cancelación es efectiva al final del periodo pagado.

## 6. Política de Reembolsos

**No hay reembolsos** una vez iniciado el periodo mensual.
Excepción: Fallas técnicas imputables a nosotros.

## 7. Limitación de Responsabilidad

**Abacus es un asistente automatizado, NO un contador.**

No nos hacemos responsables por:
- Decisiones fiscales tomadas basándose únicamente en Abacus
- Errores en información proporcionada por el usuario
- Cambios legislativos posteriores a la consulta
- Sanciones del SAT por incumplimiento de obligaciones

## 8. Uso Aceptable

Está PROHIBIDO:
- Usar Abacus para actividades ilegales
- Compartir tu acceso Premium con terceros
- Hacer ingeniería inversa del sistema
- Uso comercial sin autorización expresa

## 9. Modificaciones al Servicio

Nos reservamos el derecho de:
- Modificar características del servicio
- Ajustar precios (con aviso 30 días previo)
- Suspender servicio por mantenimiento programado

## 10. Terminación del Servicio

Podemos terminar tu suscripción si:
- Incumples estos términos
- Realizas actividades fraudulentas
- Usas el servicio para fines ilegales

## 11. Ley Aplicable

Este contrato se rige por leyes de México.
Jurisdicción: Tribunales de [Tu ciudad].

## 12. Contacto

Para dudas sobre estos términos:
Email: legal@todoconta.com
WhatsApp: [Tu número]

**Fecha vigencia:** Febrero 2026
```

---

### Disclaimer en Cada Respuesta

**Obligatorio incluir en respuestas fiscales:**

```markdown
⚠️ **Importante:** Esta es información general con fines educativos.
Para tu caso específico, consulta con un contador certificado.
Abacus no sustituye asesoría profesional personalizada.
```

**Casos donde el disclaimer es CRÍTICO:**
- Planeación fiscal
- Decisiones de incorporación/cambio de régimen
- Estrategias de ahorro fiscal
- Conflictos con el SAT
- Interpretación de disposiciones ambiguas

---

### Facturación Electrónica

**Si cobras $99 MXN/mes, debes facturar:**

**Opción A: Factura Global Mensual**
- Emites 1 CFDI al mes por todos los cobros
- RFC genérico: XAXX010101000
- Uso CFDI: S01 - Sin efectos fiscales

**Opción B: Factura Individual (Recomendado)**
- Stripe puede emitir CFDIs automáticos
- Configurar RFC del cliente al suscribirse
- CFDI enviado automáticamente por email

**Configuración en Stripe México:**
```javascript
// Al crear suscripción, guardar RFC
stripe.customers.create({
  email: usuario.email,
  metadata: {
    rfc: usuario.rfc,
    razon_social: usuario.razon_social,
    uso_cfdi: 'G03' // Gastos en general
  }
});

// Stripe + proveedor de timbrado
// (ej: Facturama, Facturapi) emiten CFDI automático
```

---

### Obligaciones Fiscales del Servicio

**Tu régimen fiscal:**
- Actividades Empresariales (si eres PF)
- O Persona Moral (si S&I Castro es PM)

**Tus obligaciones:**
- Declaración mensual de IVA (16% sobre $99 MXN)
- Declaración mensual de ISR
- Emisión de CFDIs (facturas)
- Contabilidad electrónica
- DIOT mensual

**Ejemplo de cálculo:**
```
Ingreso: $99 MXN
IVA trasladado: $16 MXN (obligatorio cobrar)
Base gravable: $99 MXN
ISR (según tu régimen): Variable

Factura al cliente:
Subtotal: $85.34 MXN
IVA 16%: $13.66 MXN
Total: $99.00 MXN
```

**Recomendación:** Configura Abacus Premium en $114.84 MXN para que después de IVA quede en $99 MXN netos.

---

### Protección de Datos Sensibles

**Datos que Abacus procesa:**
- **Identificadores:** Teléfono, nombre, email
- **Financieros:** Si el usuario comparte info de su negocio
- **Fiscales:** Consultas sobre su situación

**Cómo protegerlos:**

```python
# Pseudocódigo de buenas prácticas

class DatosUsuario:
    def guardar_consulta(self, telefono, pregunta, respuesta):
        # Encriptar datos sensibles
        pregunta_encriptada = encrypt(pregunta)
        respuesta_encriptada = encrypt(respuesta)
        
        # No guardar datos sensibles en texto plano
        pregunta_sanitizada = remover_datos_sensibles(pregunta)
        
        # Guardar en DB
        db.insert({
            'telefono_hash': hash(telefono),  # No guardar teléfono directo
            'pregunta': pregunta_sanitizada,
            'respuesta': respuesta_encriptada,
            'timestamp': now()
        })
    
    def remover_datos_sensibles(self, texto):
        # Detectar y remover:
        # - RFCs
        # - CLABEs
        # - Números de cuenta
        # - e.firma
        # - Contraseñas
        return texto_sanitizado
```

**Logs:**
- No guardar contraseñas o e.firma
- Logs con retención máxima 90 días
- Acceso a logs restringido

---

### Ética Profesional del Contador

**Código de Ética del IMCP aplica si:**
- Eres C.P. certificado (como Isca)
- Ofreces servicios de consultoría fiscal
- Aunque sea automatizado

**Principios a respetar:**

1. **Independencia:**
   - No aconsejar evasión fiscal
   - Ser objetivo en respuestas

2. **Competencia profesional:**
   - Mantener actualizado el conocimiento fiscal
   - Reconocer limitaciones de Abacus

3. **Confidencialidad:**
   - No compartir consultas de usuarios
   - Proteger datos adecuadamente

4. **Comportamiento profesional:**
   - No hacer promesas imposibles ("te garantizo que SAT aceptará...")
   - Ser honesto sobre capacidades de Abacus

**Disclaimer importante:**
```
Abacus es una herramienta educativa creada por Isca Castro, C.P.
No sustituye el juicio profesional de un contador certificado.
```

---

### Regulación de IA en México (Futuro)

**Actualmente (2026):** No hay regulación específica de IA en México.

**Prepararse para futura regulación:**
- Documentar cómo funciona Abacus (transparencia)
- Explicar que es asistente, no reemplazo de humano
- Permitir revisión humana cuando se solicite
- No usar IA para decisiones automatizadas sin supervisión en casos críticos

---

## 13. ROADMAP DE IMPLEMENTACIÓN

### Fase 0: Preparación (Semanas 1-2)

#### Semana 1: Investigación y Contratación

**Lunes:**
- [ ] Leer documentación completa OpenClaw
- [ ] Investigar proveedores VPS (confirmar IONOS)
- [ ] Crear cuenta Anthropic ($100/mes)
- [ ] Crear cuenta OpenAI (APIs)

**Martes:**
- [ ] Contratar IONOS VPS M
- [ ] Recibir credenciales de acceso
- [ ] Configurar DNS si necesario
- [ ] Setup inicial SSH

**Miércoles:**
- [ ] Instalar Ubuntu 24.04
- [ ] Actualizar sistema
- [ ] Configurar firewall (UFW)
- [ ] Instalar Docker

**Jueves:**
- [ ] Instalar OpenClaw
- [ ] Configurar modelos (Claude, ChatGPT, Gemini)
- [ ] Testing básico en CLI

**Viernes:**
- [ ] Conectar WhatsApp personal (testing)
- [ ] Primer mensaje de prueba
- [ ] Validar que responde correctamente

---

#### Semana 2: Base de Conocimiento

**Lunes-Martes: Conocimiento Fiscal**
- [ ] Crear estructura de carpetas `/mnt/skills/user/abacus/`
- [ ] Escribir `SOUL.md` (personalidad)
- [ ] Documento: Regímenes fiscales (RESICO, RIF, General)
- [ ] Documento: Obligaciones mensuales y calendario

**Miércoles: Productos TodoConta**
- [ ] Catalogar cursos disponibles
- [ ] Catalogar plantillas Excel
- [ ] Información del diplomado
- [ ] Precios y links

**Jueves: Calculadoras**
- [ ] Script: Calculadora ISR personas físicas
- [ ] Script: Calculadora IVA
- [ ] Script: Calculadora aguinaldo/PTU

**Viernes: Disclaimers y Templates**
- [ ] Disclaimer legal
- [ ] Template mensaje upgrade
- [ ] Template bienvenida Premium
- [ ] Testing de respuestas

---

### Fase 1: MVP Testing (Semanas 3-4)

#### Semana 3: Testing Interno

**Lunes:**
- [ ] Testing exhaustivo con preguntas fiscales comunes
- [ ] Verificar que disclaimers aparezcan
- [ ] Validar que contador de consultas funcione
- [ ] Ajustar tono y personalidad

**Martes:**
- [ ] Crear base de datos SQLite
- [ ] Implementar sistema de cuotas (3 gratis)
- [ ] Testing del límite de consultas
- [ ] Mensaje de upgrade funcional

**Miércoles:**
- [ ] Testing de productos TodoConta
- [ ] Validar que recomienda en momento adecuado
- [ ] Verificar links funcionan

**Jueves:**
- [ ] Testing con 3 personas de confianza
- [ ] Recopilar feedback inicial
- [ ] Hacer ajustes rápidos

**Viernes:**
- [ ] Documentar bugs encontrados
- [ ] Fix de issues críticos
- [ ] Preparar para beta

---

#### Semana 4: Beta Privado

**Lunes:**
- [ ] Reclutar 10 beta testers
- [ ] Enviar invitación y instrucciones
- [ ] Crear grupo WhatsApp "Beta Abacus"

**Martes-Jueves:**
- [ ] Monitorear uso de beta testers
- [ ] Responder dudas en tiempo real
- [ ] Iterar según feedback

**Viernes:**
- [ ] Encuesta de satisfacción a beta
- [ ] Analizar resultados
- [ ] Planear ajustes para lanzamiento

---

### Fase 2: Preparación de Lanzamiento (Semana 5)

**Lunes: Marketing Prep**
- [ ] Crear landing page simple
- [ ] Escribir 5 posts de redes sociales
- [ ] Diseñar creativos (Canva)
- [ ] Grabar video demo (2 min)

**Martes: Email Marketing**
- [ ] Segmentar lista TodoConta
- [ ] Escribir email de anuncio
- [ ] Escribir secuencia post-registro (7 emails)
- [ ] Setup en herramienta de email

**Miércoles: WhatsApp Business**
- [ ] Obtener número WhatsApp Business
- [ ] Configurar perfil de negocio
- [ ] Conectar a OpenClaw
- [ ] Testing dual (personal + business)

**Jueves: Sistema de Pagos**
- [ ] Decidir: SPEI manual o Stripe
- [ ] Si SPEI: Preparar CLABE y plantilla
- [ ] Si Stripe: Crear cuenta y configurar
- [ ] Testing de proceso de pago

**Viernes: Legal**
- [ ] Finalizar Aviso de Privacidad
- [ ] Finalizar Términos y Condiciones
- [ ] Subir a landing page
- [ ] Validar con abogado (opcional pero recomendado)

---

### Fase 3: Lanzamiento (Semana 6)

**Domingo tarde:**
- [ ] Review final de todo el sistema
- [ ] Backup completo
- [ ] Confirmar que todo funciona

**Lunes 8:00 AM: LANZAMIENTO**
- [ ] Email a base de datos (TodoConta)
- [ ] Post LinkedIn
- [ ] Post Instagram
- [ ] Anuncio en grupo diplomado
- [ ] Monitorear respuestas

**Lunes-Viernes:**
- [ ] Responder TODOS los comentarios
- [ ] Resolver issues reportados en <2h
- [ ] Monitorear métricas diariamente
- [ ] Celebrar primeros suscriptores 🎉

---

### Fase 4: Optimización (Semanas 7-12)

**Objetivos:**
- Llegar a 20 suscriptores Premium
- Mantener uptime >99%
- NPS >50
- Mejorar base de conocimiento

**Actividades semanales:**
- Lunes: Review de métricas semana anterior
- Martes: Agregar contenido a base de conocimiento
- Miércoles: Mejorar calculadoras según uso
- Jueves: Contenido de marketing (blog/redes)
- Viernes: Testing de nuevas features

**Mes 3: Evaluación completa**
- [ ] ¿Se alcanzó objetivo de 20 Premium?
- [ ] ¿Qué está funcionando bien?
- [ ] ¿Qué hay que mejorar?
- [ ] ¿Continuar o pivotar?

---

## 14. ANEXOS Y REFERENCIAS

### Anexo A: Comandos Útiles OpenClaw

```bash
# Iniciar gateway
openclaw gateway start

# Detener gateway
openclaw gateway stop

# Ver logs en tiempo real
tail -f ~/.openclaw/logs/gateway.log

# Diagnosticar problemas
openclaw doctor

# Configurar modelos
openclaw configure

# Actualizar OpenClaw
npm update -g openclaw

# Backup de configuración
tar -czf backup_openclaw_$(date +%Y%m%d).tar.gz ~/.openclaw/

# Restaurar backup
tar -xzf backup_openclaw_YYYYMMDD.tar.gz -C ~/
```

---

### Anexo B: Estructura de Prompts

**Prompt de sistema para Abacus (modo público gratuito):**

```
Eres Abacus, un asistente fiscal inteligente especializado 
en legislación mexicana.

IDENTIDAD:
- Nombre: Abacus
- Creador: Isca Castro, Contador Público Certificado
- Misión: Democratizar acceso a información fiscal en México

CONOCIMIENTO ESPECIALIZADO:
- Resolución Miscelánea Fiscal 2026
- Ley del ISR (LISR)
- Ley del IVA (LIVA)
- Regímenes fiscales: RESICO, RIF, Régimen General
- Obligaciones patronales (IMSS, INFONAVIT)

PERSONALIDAD:
- Tono: Profesional pero accesible
- Estilo: Educativo y paciente
- Lenguaje: Simple, evita jerga innecesaria
- Emojis: Moderados (📊💡✅❌📅💰)

LIMITACIONES IMPORTANTES:
- NO haces planeación fiscal personalizada
- NO das consejos de evasión fiscal
- NO sustituyes a un contador profesional
- NO garantizas resultados ante el SAT
- NO tienes acceso a documentos del usuario

ESTRUCTURA DE RESPUESTA:
1. Respuesta directa y clara (2-3 párrafos)
2. Ejemplo práctico cuando aplique
3. SIEMPRE incluir disclaimer:
   "⚠️ Esta es información general. Para tu caso específico, 
   consulta con un C.P. certificado."
4. Contador de consultas:
   "💡 Consulta X de 3 gratuitas este mes"

RECOMENDACIÓN DE PRODUCTOS:
Cuando sea relevante, menciona productos de TodoConta:
- Cursos y diplomado
- Plantillas Excel
- Asesorías personalizadas con Isca Castro

ESCALAMIENTO:
Si la pregunta requiere análisis personalizado, recomienda:
"Este caso requiere análisis personalizado. Te recomiendo 
agendar una consulta con Isca Castro: [link calendly]"

CITAS LEGALES:
Cuando cites leyes, usa formato:
"Según el Artículo [número] de la [Ley], [contenido]"

Recuerda: Tu objetivo es educar y generar confianza, 
no sustituir a un contador profesional.
```

---

### Anexo C: Recursos Externos

**Fuentes de información fiscal:**
- SAT: https://www.sat.gob.mx
- DOF: https://www.dof.gob.mx
- Cámara de Diputados (leyes): http://www.diputados.gob.mx/LeyesBiblio/
- IMCP: https://imcp.org.mx

**Comunidades y grupos:**
- Grupo OpenClaw en WhatsApp
- Foro OpenClaw: github.com/openclaw/openclaw/discussions
- Reddit: r/contaduria (español)

**Herramientas complementarias:**
- Stripe México: https://stripe.com/mx
- Calendly: https://calendly.com
- Canva: https://canva.com (diseño)
- Notion: https://notion.so (documentación)

---

### Anexo D: Checklist Pre-Lanzamiento

**Técnico:**
- [ ] Servidor corriendo 24/7
- [ ] OpenClaw actualizado a última versión
- [ ] Modelos IA conectados y testeados
- [ ] WhatsApp personal conectado
- [ ] WhatsApp Business conectado
- [ ] Base de datos SQLite creada
- [ ] Sistema de cuotas funcional
- [ ] Backups automatizados configurados
- [ ] Monitoreo básico activo

**Contenido:**
- [ ] Base de conocimiento fiscal (mínimo 50%)
- [ ] Catálogo TodoConta completo
- [ ] Calculadoras básicas funcionando
- [ ] Disclaimers en todas las respuestas
- [ ] Templates de mensajes listos

**Legal:**
- [ ] Aviso de Privacidad publicado
- [ ] Términos y Condiciones publicados
- [ ] Sistema de facturación configurado
- [ ] Método de pago activo (SPEI o Stripe)

**Marketing:**
- [ ] Landing page live
- [ ] 10 posts de redes sociales escritos
- [ ] Video demo grabado y editado
- [ ] Email de lanzamiento escrito
- [ ] Secuencia de emails programada
- [ ] 10 beta testers reclutados

**Operativo:**
- [ ] Grupo WhatsApp de soporte creado
- [ ] Proceso de onboarding documentado
- [ ] FAQs escritas
- [ ] Plan de contingencia si algo falla

---

### Anexo E: Contactos y Soporte

**Soporte OpenClaw:**
- GitHub: github.com/openclaw/openclaw/issues
- Discusiones: github.com/openclaw/openclaw/discussions
- Email: soporte@openclaw.org (si existe)

**Proveedores:**
- IONOS soporte: soporte@ionos.com
- Anthropic: support@anthropic.com
- OpenAI: support@openai.com
- Stripe: soporte@stripe.com

**Consultoría técnica:**
- Rodrigo Rojo (Shelldon) - Experiencia probada
- Frida Ruh (Elliot) - AWS y configuración cloud
- Comunidad OpenClaw - Apoyo colaborativo

---

## 📝 NOTAS FINALES

Este documento es una **guía viva** que debe actualizarse conforme:
- Cambios en legislación fiscal
- Nuevas features de OpenClaw
- Feedback de usuarios
- Aprendizajes del mercado
- Cambios en la estrategia de negocio

**Recomendación:**
Revisa y actualiza este documento **mensualmente** durante el primer año.

**Próximos pasos inmediatos:**
1. ✅ Leer este documento completo
2. ⏳ Contratar IONOS VPS M
3. ⏳ Instalar OpenClaw
4. ⏳ Conectar WhatsApp personal
5. ⏳ Crear base de conocimiento
6. ⏳ Testing exhaustivo
7. ⏳ Lanzamiento beta privado
8. ⏳ Lanzamiento público

**Última actualización:** 11 de Marzo de 2026  
**Versión:** 1.1  
**Autor:** Claude (Anthropic) para Isca Castro  
**Proyecto:** Abacus - Bot Fiscal Monetizable

---

## 🔄 CHANGELOG v1.1 (11 Marzo 2026)

**Actualizaciones basadas en experiencias del grupo OpenClaw:**
- ✅ Sistema de Pairing WhatsApp explicado
- ✅ Configuración alternativa sin pairing para MVP
- ✅ RequireMention para grupos
- ✅ Política de privacidad entre usuarios
- ✅ Rate limits y fallbacks de modelos
- ✅ Costos actualizados (OAuth más barato)
- ✅ Gmail NO necesario para MVP
- ✅ Setup paso a paso actualizado
- ✅ Advertencias críticas del grupo

---

**¡ÉXITO EN EL LANZAMIENTO! 🚀🧮**
