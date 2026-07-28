# abacus-todoconta — Poderes SAT para Abacus

Plugin de OpenClaw que conecta Abacus con la **API pública de TodoConta**
(`api.todoconta.com/v1`): CSF, Opinión 32-D, descarga masiva de CFDIs,
resumen/reportes/Excel, listas negras y calculadoras — de las empresas del
suscriptor que escribe por WhatsApp.

## Cómo identifica al suscriptor

El runtime de OpenClaw pasa `requesterSenderId` (número del remitente,
confiable — no viene de los argumentos del modelo) a la tool factory. El
plugin lo normaliza a E.164 y lo resuelve a la API key `tc_live_…` del
usuario vía el endpoint interno del gateway (`/internal/vinculos/{numero}`,
header `X-Interno-Token`); la key llega cifrada (AES-256-GCM) y se descifra
con la llave local. Cada tool llama al gateway con la key DEL remitente:
cada quien ve solo sus empresas.

Vinculación (lado TodoConta, repo sat-descarga-masiva):

```bash
# en el VPS, con TODOCONTA_SUPABASE_URL, SUPABASE_SERVICE_KEY y ASISTENTE_VINCULOS_KEY
python3 deploy/gateway/emitir-key.py \
  --email cliente@despacho.mx --nombre "Abacus" --whatsapp +5215512345678
```

## Config

`openclaw.plugin.json` → configSchema. Todo puede venir por env (recomendado,
NADA de secretos en `openclaw.json`):

| Config | Env fallback | Qué es |
|---|---|---|
| `gatewayUrl` | `TODOCONTA_GATEWAY_URL` | Base de la API (default `https://api.todoconta.com`) |
| `internoToken` | `TODOCONTA_INTERNO_TOKEN` | Token de `/internal/vinculos` (mismo `VINCULOS_INTERNAL_TOKEN` del gateway) |
| `vinculosKey` | `ASISTENTE_VINCULOS_KEY` | Llave AES (32 bytes base64) — la misma que usa `emitir-key.py` |
| `mediaDir` | — | Default `/root/.openclaw/media/outbound` |

Los env del servicio se cargan vía systemd (`EnvironmentFile=`), fuera de git.

## Despliegue al VPS

```bash
# 1. Copiar el plugin
rsync -a --exclude node_modules plugins/abacus-todoconta/ \
  root@187.77.152.160:/root/.openclaw/plugins-local/abacus-todoconta/

# 2. Instalar deps
ssh root@187.77.152.160 'cd /root/.openclaw/plugins-local/abacus-todoconta && pnpm install'

# 3. Habilitar el plugin en openclaw.json (sección plugins, como los abacus-* existentes)
#    y agregar TOOLS-todoconta.md al TOOLS.md del workspace-abacus.

# 4. Reiniciar OpenClaw
ssh root@187.77.152.160 'systemctl --user restart openclaw-gateway'
```

Prerequisitos del lado TodoConta (una sola vez):
1. Tabla `asistente_vinculos` en Supabase (migración `031_asistente_vinculos.sql`
   en todoconta-apps).
2. Gateway con el endpoint `/internal/vinculos` y env `VINCULOS_INTERNAL_TOKEN`.
3. `ASISTENTE_VINCULOS_KEY` generada (`openssl rand -base64 32`) y compartida
   entre `emitir-key.py` y este plugin (solo en el VPS).

## Tools (11)

`todoconta_listar_empresas` · `todoconta_descargar_csf` ·
`todoconta_descargar_opinion` · `todoconta_consultar_listas_negras` ·
`todoconta_solicitar_cfdis` · `todoconta_estado_solicitud` ·
`todoconta_procesar_cfdis` · `todoconta_resumen_cfdis` ·
`todoconta_reporte_cfdis` · `todoconta_excel_cfdis` · `todoconta_calculadora`

Los PDFs/Excel se guardan en `mediaDir` y el resultado instruye al agente a
enviarlos con `message(action=send, media=<ruta>)` (patrón de cfdi-tools).
Comportamiento conversacional y flujos encadenados: `TOOLS-todoconta.md`.
