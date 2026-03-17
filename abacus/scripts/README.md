# Scripts — Abacus

## pdf_to_memory.py

Convierte PDFs de leyes fiscales mexicanas (LISR, LIVA, CFF, RMF) a archivos
Markdown chunkeados listos para el RAG de Abacus.

### Setup (una sola vez)

```bash
cd abacus/scripts/

# Crear entorno virtual
python3 -m venv .venv
source .venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt
# Primera vez descarga ~2-4 GB de modelos de marker (solo una vez)
```

### Flujo de trabajo

```
PDF original  →  [marker]  →  lisr_raw.md  →  [chunker]  →  lisr_arts_001_020.md
                                                               lisr_arts_021_040.md
                                                               lisr_arts_041_060.md
                                          →  subir al VPS
```

El `_raw.md` se guarda automáticamente para poder re-chunking sin re-ejecutar
marker (que es lento).

---

### Comandos

#### Convertir un PDF completo

```bash
python pdf_to_memory.py convert LISR_2026.pdf \
    --ley "Ley del Impuesto Sobre la Renta" \
    --sigla lisr \
    --output ../docs/memory/fiscal/lisr/
```

#### Solo una sección específica (recomendado para empezar)

```bash
# Solo RESICO (Arts. 113-E al 113-I)
python pdf_to_memory.py convert LISR_2026.pdf \
    --ley "Ley del Impuesto Sobre la Renta" \
    --sigla lisr \
    --seccion "Título IV, Cap. VIII: RESICO PF" \
    --desde-articulo "113" \
    --hasta-articulo "113" \
    --output ../docs/memory/fiscal/lisr/
```

#### Re-chunking desde markdown ya generado (rápido, sin re-correr marker)

```bash
python pdf_to_memory.py convert LISR_2026.pdf \
    --ley "Ley del Impuesto Sobre la Renta" \
    --sigla lisr \
    --markdown lisr_raw.md \
    --chunk-size 15 \
    --output ../docs/memory/fiscal/lisr/
```

#### Ver qué archivos se generarían sin escribir nada

```bash
python pdf_to_memory.py convert CFF_2026.pdf \
    --ley "Código Fiscal de la Federación" \
    --sigla cff \
    --output ../docs/memory/fiscal/cff/ \
    --dry-run
```

#### Inspeccionar artículos detectados en un markdown

```bash
python pdf_to_memory.py inspect lisr_raw.md
```

---

### Opciones completas

| Opción | Descripción | Default |
|--------|-------------|---------|
| `--ley` | Nombre completo de la ley | (requerido) |
| `--sigla` | Prefijo para nombres de archivo | (requerido) |
| `--vigencia` | Año de vigencia | 2026 |
| `--seccion` | Descripción del capítulo/título | Nombre de la ley |
| `--output` / `-o` | Carpeta destino | (requerido) |
| `--chunk-size` | Artículos por archivo | 20 |
| `--desde-articulo` | Filtrar desde número de artículo | sin filtro |
| `--hasta-articulo` | Filtrar hasta número de artículo | sin filtro |
| `--dry-run` | Ver sin escribir | False |
| `--markdown` | Usar .md existente en vez de PDF | None |

---

### Notas sobre el parser

El script detecta artículos con este patrón:
```
Artículo 1.          → número "1"
Artículo 113-E.      → número "113-E"
Artículo 69-B        → número "69-B"
Artículo PRIMERO.    → número "PRIMERO"
## Artículo 5        → número "5" (con heading markdown)
```

Si la ley usa una variante no detectada (ej. "ARTÍCULO 1o."), usa `inspect`
para verificar y reporta el problema para ajustar el patrón.

---

### Después de generar los archivos

1. Revisar que los `**Conceptos clave:**` tengan términos relevantes
   (se generan como placeholder `<!-- agregar términos relevantes -->`)

2. Subir al VPS:
   ```bash
   scp -r ../docs/memory/fiscal/lisr/ \
       vps-openclaw:/root/.openclaw/workspace/memory/fiscal/lisr/
   ```

3. Verificar en WhatsApp con una pregunta específica del artículo subido.
