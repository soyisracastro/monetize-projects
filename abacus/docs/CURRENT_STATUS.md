# Estado Actual del Proyecto Abacus

**Actualizado:** 2026-04-12
**Fuente:** Inspección directa del VPS de producción + session de hardening con Claude Code

---

## Estado general: EN PRODUCCION

Abacus está corriendo en producción atendiendo usuarios reales desde ~marzo 2026.

**Suscriptores activos:** 5 (mensuales, al 12 de abril 2026)
**Precio definido:** $499 MXN/mes (sin opción anual)
**Cambio de costos:** Anthropic dejó de permitir compartir suscripción personal con Abacus — ahora se paga API directa.

---

## Infraestructura desplegada

| Componente | Detalle |
|---|---|
| VPS | Hostinger, Ubuntu 24.04 LTS, 8GB RAM |
| IP | 187.77.152.160 |
| OpenClaw | v2026.3.23-2, systemd user service (`openclaw-gateway.service`) |
| Modelo principal | Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`) — via API (no OAuth) |
| Modelo fallback | Gemini 3 Flash Preview |
| Cambio de costos | Anthropic ya no permite compartir suscripcion personal con Abacus. Se paga API directa. |
| Modelo imágenes/PDF | Gemini 3 Flash Preview |
| PDF max | 50 MB / 100 páginas |
| Memoria vectorial | LanceDB (`memory-lancedb`), embeddings OpenAI `text-embedding-3-small` |
| Auto-recall / auto-capture | Habilitados |
| Prompt caching | `cacheRetention: short` para Sonnet (habilitado abril 2026) |
| Heartbeat | Cada 55 minutos |
| Context pruning | cache-ttl 1h, keepLastAssistants 10 |
| Puerto gateway | 18789 (localhost) |

## Canales de mensajería activos

| Canal | Account | Número | Estado |
|---|---|---|---|
| WhatsApp | `default` | +5215544753602 | ✅ activo (público) |
| WhatsApp | `personal` | +5214431820680 | ✅ activo (Isca admin) |
| Telegram | configurado | — | ✅ activo |

## Agentes configurados

| ID | Workspace | Modelo | Rol |
|---|---|---|---|
| `main` | `/root/.openclaw/workspace-abacus` | Sonnet 4.6 | Abacus (fiscal público) |
| `personal` (Ada) | `/root/.openclaw/workspace-personal` | Sonnet 4.6 | Asistente personal de Isca |

Mention patterns de Abacus: `abacus`, `Abacus`, `ABACUS`, `ábacus`, `abaxus`, `abacux`, `avacus`

## Archivos core del workspace Abacus

| Archivo | Versión | Descripción |
|---|---|---|
| `SOUL.md` | v1.2 | Identidad + reglas. Envuelto en XML tags. Reglas de seguridad expandidas. |
| `AGENTS.md` | v1.1 | Session startup (7 pasos), heartbeat vs cron, memory maintenance |
| `USER.md` | v1.0 | Admin (Isca) + perfiles de usuarios finales |
| `IDENTITY.md` | v1.0 | Quién soy, misión, cuándo respondo |
| `TOOLS.md` | v1.1 | Orden de búsqueda, disclaimer, calendario SAT 2026, tipo de cambio |
| `HEARTBEAT.md` | v1.0 | Resumen diario de mensajes sin respuesta |
| `EXAMPLES.md` | v1.0 | 6 few-shot examples con thinking blocks |

## Skills

| Skill | Tipo | Descripción |
|---|---|---|
| `gatekeeper` | Plugin nativo (`abacus_gatekeeper`) | Allowlist WhatsApp, owner-only. Migrado a tool con schema estricto. |
| `verificador-rfc` | Plugin nativo (`verificar_rfc_listas_negras` + `verificar_cfdi_sat`) | Listas 69-B, 69 CFF via Supabase + validación CFDI ante SAT SOAP. |
| `tipo-de-cambio` | SKILL.md (pendiente migrar a plugin) | TC FIX Banxico via API, EUR, conversiones |
| `cfdi-tools` | SKILL.md + scripts (pendiente migrar a plugin) | XML CFDI 4.0 → Excel (openpyxl) + PDF (pdfkit). Dinámico por RFC/folio. |
| `fiscal-mx` | SKILL.md (base de conocimiento, NO requiere plugin) | RESICO, General, Sueldos, Arrendamiento, Plataformas, CFDI, 69-B, ISR, IVA, IMSS 2026, deducciones nómina |
| `blogwatcher` | SKILL.md | Monitoreo de blogs/RSS |
| `summarize` | SKILL.md | Resumen de URLs, YouTube, PDFs |
| `contalink` | ELIMINADO (abril 2026) | Acceso a app.contalink.com — retirado por desuso |

## Plugins de OpenClaw registrados

| Plugin | ID | Status | Tools |
|---|---|---|---|
| Abacus Gatekeeper | `abacus-gatekeeper` | loaded | `abacus_gatekeeper` |
| Abacus Verificador RFC | `abacus-verificador-rfc` | loaded | `verificar_rfc_listas_negras`, `verificar_cfdi_sat` |
| Memory LanceDB | `memory-lancedb` | loaded | (vector storage) |
| WhatsApp | `whatsapp` | loaded | (channel) |
| Telegram | `telegram` | loaded | (channel) |
| Google (web search) | `google` | loaded | web search via Gemini |

**Total plugins cargados**: 41/80 disponibles

## Base de conocimiento

| Carpeta | Contenido |
|---|---|
| `knowledge/fiscal/lisr/` | `lisr_arts_113e_113j.md` (RESICO PF) |
| `knowledge/fiscal/cff/` | `cff_art_69b_doctrina_ponce.md`, 2 CTSATs |
| `knowledge/legal/` | `estandar_cita_jurisprudencia.md` (formato citación) |
| `skills/fiscal-mx/SKILL.md` | Base de conocimiento MVP (regímenes, ISR, IVA, IMSS, CFDI, deducciones) |

## MCP Servers (vía mcporter, NO nativos en OpenClaw aún)

| Servidor | Tools | Estado | Ubicación |
|---|---|---|---|
| `stripe` | 13 | ✅ healthy | `workspace-personal/config/mcporter.json` |
| `supabase` | 29 | ✅ healthy | `workspace-personal/config/mcporter.json` |
| `context7` | 2 | ✅ healthy | `workspace-personal/config/mcporter.json` |

**Pendiente**: migrar a OpenClaw nativo via `openclaw mcp set` (tarea #14).

## Allowlist WhatsApp (via gatekeeper)

~10 números autorizados gestionados por Isca via `abacus_gatekeeper` tool.
Último registro: 2026-04-08.

---

## Seguridad — Issues conocidos

| Issue | Severidad | Estado |
|---|---|---|
| API keys en `openclaw.json` en plaintext (ANTHROPIC, GEMINI, BMX, NOTION, SUPABASE, GOG keyring) | 🔴 Alta | Ya en historial git. Pendiente: rotar + filter-repo |
| OpenAI embedding key en `plugins.entries.memory-lancedb.config` | 🔴 Alta | Mismo problema |
| Stripe live key en `workspace-personal/config/mcporter.json` (restricted, `rk_live_*`) | 🟠 Media | Bloqueado de git vía gitignore. Archivo en disco OK. |
| `openclaw.json` con permisos 644 | 🟡 Baja | Legible por cualquier usuario del sistema |
| GOG_KEYRING_PASSWORD en systemd unit file | 🟡 Baja | Visible en `systemd show` |

**Recomendación**: rotar todas las keys, mover a archivos `.env` separados, limpiar historial git con `git filter-repo`.

---

## Mejoras realizadas (session abril 2026)

### Prompts (alineados con best practices Anthropic)
- SOUL.md envuelto en XML tags (`<identidad>`, `<principios>`, `<limites>`, `<dominio_estricto>`, `<seguridad>`, `<precios>`, `<gatekeeper>`, `<vibe>`)
- Reglas de seguridad 6 (no contactar) y 7 (prompt injection vía documentos) expandidas con instrucciones operativas
- EXAMPLES.md creado con 6 few-shot (consulta fiscal, declinación, desambiguación, skill execution, prompt injection en doc, escalamiento)
- Tarifas duplicadas consolidadas (TOOLS.md → apunta a fiscal-mx como fuente única)
- Guía heartbeat vs cron reincorporada en AGENTS.md
- Carga de jurisprudencia referenciada en session startup
- Versionado con footer HTML en todos los .md core

### Plugins nativos
- `abacus-gatekeeper`: bash wrapper con schema TypeBox estricto (previene inyección)
- `abacus-verificador-rfc`: 2 tools (listas negras Supabase + CFDI SAT SOAP) con validación de inputs

### Git
- 3 repos limpiados: `.gitignore` endurecido (secrets, node_modules, backups, CFDI generados)
- Stripe live key y MCP configs bloqueados de git antes del primer commit
- `projects/cfdi-validator/` (4to repo nested) ignorado del padre
- `.openclaw/workspace-state.json` removido del tracking

---

## Tareas pendientes

| # | Tarea | Prioridad |
|---|---|---|
| 11 | Migrar `tipo-de-cambio` a plugin tool nativo | Media |
| 12 | Envolver `cfdi-tools` como plugin tool nativo | Media |
| 14 | Migrar MCPs (stripe, supabase, context7) a OpenClaw nativo | Media |
| — | Rotar API keys + limpiar historial git | 🔴 Alta |
| — | Definir pricing final (actualmente "en definición") | Alta |
| — | Expandir knowledge base (LIVA, CFF completo, RMF 2026) | Media |
| — | Configurar `plugins.allow` explícito en openclaw.json | Baja |
