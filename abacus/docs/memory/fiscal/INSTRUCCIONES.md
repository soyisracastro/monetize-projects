# Base de Conocimiento Legal — Abacus RAG

**Destino en VPS:** `/root/.openclaw/workspace/memory/fiscal/`
**Subir con:** `scp -r ./memory/fiscal/ vps-openclaw:/root/.openclaw/workspace/memory/`

---

## Formato obligatorio

- Solo archivos `.md` — OpenClaw no indexa PDF, TXT ni JSON
- El watcher re-indexa automáticamente al detectar cambios (debounce 1.5s)
- No necesitas reiniciar OpenClaw después de subir archivos

## Cómo chunkeiza OpenClaw

~400 tokens por chunk con 80 tokens de overlap.
En español: ~250–300 palabras por chunk.
Un artículo corto = 1 chunk. Artículos largos se parten solos.

---

## Estructura de carpetas

```
memory/fiscal/
├── lisr/          Ley del Impuesto Sobre la Renta
├── liva/          Ley del Impuesto al Valor Agregado
├── cff/           Código Fiscal de la Federación
└── rmf-2026/      Resolución Miscelánea Fiscal 2026
```

---

## Plantilla de archivo

Cada archivo debe empezar con el encabezado de contexto (aparece en cada chunk
por el overlap de 80 tokens, ayuda al modelo a saber de qué ley viene el resultado):

```markdown
# [LEY] — [Título/Capítulo]: [Descripción]
**Ley:** Nombre completo de la ley
**Vigencia:** 2026
**Artículos:** XX al YY

---

### Artículo XX — Nombre del artículo

Texto del artículo...

**Conceptos clave:** término1, término2, término3
```

### Reglas de formato

- **H1** al inicio del archivo: ley + capítulo (contexto para todos los chunks)
- **H3** por artículo — nunca agrupar 10+ artículos bajo un solo H2
- **Negrita** en montos, porcentajes, fechas y plazos
- Línea `**Conceptos clave:**` al final de cada artículo (mejora recall semántico)
- Máximo ~20–30 artículos por archivo (archivos más pequeños = mejor precisión)

---

## Orden de prioridad para subir

| # | Archivo | Artículos | Por qué |
|---|---------|-----------|---------|
| 🔴 1 | `lisr/cap-viii-resico-pf.md` | 113-E al 113-I | Consulta más frecuente |
| 🔴 2 | `cff/art-69b-efos.md` | 69-B | Complementa verificador RFC |
| 🟡 3 | `lisr/cap-iii-arrendamiento.md` | 114–118 | Muy consultado |
| 🟡 4 | `lisr/cap-ii-actividad-empresarial.md` | 100–113 | Honorarios, negocios |
| 🟡 5 | `rmf-2026/reglas-resico.md` | 3.13.1–3.13.x | Reglas operativas RESICO |
| 🟡 6 | `liva/cap-i-disposiciones-generales.md` | 1–18 | IVA base |
| 🟢 7 | `cff/cap-contabilidad.md` | 28–32 | Obligaciones contables |
| 🟢 8 | `lisr/titulo-iv-salarios.md` | 94–99 | Asalariados |
| 🟢 9 | `lisr/titulo-ii-personas-morales.md` | 10–88 | Para clientes PM |

---

## Comando de subida

```bash
# Subir toda la carpeta (sobreescribe lo existente)
scp -r ./memory/fiscal/ vps-openclaw:/root/.openclaw/workspace/memory/

# Subir solo un archivo nuevo
scp memory/fiscal/lisr/cap-viii-resico-pf.md vps-openclaw:/root/.openclaw/workspace/memory/fiscal/lisr/

# Verificar que llegó
ssh vps-openclaw "ls -la /root/.openclaw/workspace/memory/fiscal/lisr/"
```

Después de subir, prueba en WhatsApp con una pregunta específica del contenido
que acabas de agregar. Si responde bien sin web_search = el RAG está funcionando.
