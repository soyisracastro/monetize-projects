#!/usr/bin/env python3
"""
pdf_to_memory.py — Convierte PDFs de leyes fiscales mexicanas a Markdown
chunkeado para el RAG de Abacus.

Sigue la estructura definida en docs/memory/fiscal/INSTRUCCIONES.md:
- Un archivo por chunk de ~20 artículos
- H1 con contexto al inicio (persiste en cada chunk via overlap de 80 tokens)
- H3 por artículo
- Placeholder "**Conceptos clave:**" al final de cada artículo

Uso:
    python pdf_to_memory.py convert LISR_2026.pdf \\
        --ley "Ley del Impuesto Sobre la Renta" \\
        --sigla lisr \\
        --vigencia 2026 \\
        --output ../docs/memory/fiscal/lisr/ \\
        --chunk-size 20

    python pdf_to_memory.py convert CFF_2026.pdf \\
        --ley "Código Fiscal de la Federación" \\
        --sigla cff \\
        --vigencia 2026 \\
        --output ../docs/memory/fiscal/cff/
"""

import re
import sys
import textwrap
from dataclasses import dataclass
from pathlib import Path

import click


# ---------------------------------------------------------------------------
# Estructuras de datos
# ---------------------------------------------------------------------------

@dataclass
class Articulo:
    numero: str          # "113-E", "69-B", "1", "PRIMERO"
    numero_int: int      # Para ordenar y agrupar (0 si no es numérico)
    titulo: str          # Texto del heading del artículo (si lo tiene)
    contenido: str       # Cuerpo del artículo


@dataclass
class Chunk:
    articulos: list[Articulo]
    primer_articulo: str
    ultimo_articulo: str


# ---------------------------------------------------------------------------
# Conversión PDF → Markdown con marker
# ---------------------------------------------------------------------------

def convertir_pdf(pdf_path: Path, paginas: str | None = None) -> str:
    """
    Convierte un PDF a Markdown usando marker-pdf.

    paginas: rango de páginas en formato marker, ej. "45-60" o "45,46,47-60"
             Si es None, convierte todo el PDF.
    """
    rango_info = f" (páginas {paginas})" if paginas else " (documento completo)"
    click.echo(f"  Cargando modelos de marker (primera vez puede tardar ~2 min)...")

    try:
        from marker.converters.pdf import PdfConverter
        from marker.models import create_model_dict
        from marker.config.parser import ConfigParser
    except ImportError:
        click.secho(
            "ERROR: marker-pdf no está instalado.\n"
            "Ejecuta: pip install marker-pdf",
            fg="red"
        )
        sys.exit(1)

    config: dict = {"output_format": "markdown"}
    if paginas:
        config["page_range"] = paginas

    config_parser = ConfigParser(config)

    models = create_model_dict()
    converter = PdfConverter(
        config=config_parser.generate_config_dict(),
        artifact_dict=models,
        processor_list=config_parser.get_processors(),
        renderer=config_parser.get_renderer(),
    )

    click.echo(f"  Convirtiendo {pdf_path.name}{rango_info}...")
    rendered = converter(str(pdf_path))

    # El renderer markdown devuelve el texto en rendered.markdown
    if hasattr(rendered, "markdown"):
        return rendered.markdown
    # Fallback: algunos renderers usan .text
    if hasattr(rendered, "text"):
        return rendered.text

    click.secho("ERROR: marker no devolvió texto markdown.", fg="red")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Parsing de artículos
# ---------------------------------------------------------------------------

# Patrones para detectar inicio de artículo en leyes fiscales mexicanas:
#   "Artículo 1." / "Artículo 1o." / "Artículo 113-E." / "ARTÍCULO 69-B"
#   "Artículo PRIMERO." / "Artículo DÉCIMO TRANSITORIO"
#   También con heading markdown: "## Artículo 5" o "**Artículo 5.**"
#
# EXCLUYE las anotaciones marginales del DOF que marker extrae como texto:
#   "Artículo adicionado DOF 12-11-2021"
#   "Artículo reformado DOF 09-12-2019"
#   "Artículo derogado DOF..."
PATRON_ARTICULO = re.compile(
    r"^(?:#{1,4}\s*)?(?:\*{1,2})?Art[íi]culo\s+"
    r"((?!\s*(?:adicionado|reformado|derogado|corrección|fe\s+de\s+erratas))"
    r"[\dA-ZÁÉÍÓÚÑ][^\n\.–—]*?)"
    # Acepta dos formatos de salida de marker-pdf:
    #   1) Heading puro:  "### Artículo 113-F" o "**Artículo 113-F.**"
    #   2) Inline bold:   "**Artículo 113-F.** Los contribuyentes..."
    r"(?:\.(?:\*{0,2})?(?:[ \t](?P<inline>[^\n]*))?)?\s*$",
    re.MULTILINE | re.IGNORECASE,
)

# Extrae el número "limpio" para ordenar: "113-E" → 113, "69-B" → 69
PATRON_NUM = re.compile(r"(\d+)")


def numero_a_int(numero: str) -> int:
    m = PATRON_NUM.search(numero)
    return int(m.group(1)) if m else 0


def limpiar_markdown(markdown: str) -> str:
    """
    Elimina ruido que marker-pdf agrega en PDFs de leyes:
    - Imágenes: ![](_page_N_Picture_N.jpeg)
    - Encabezados institucionales del DOF/CÁMARA DE DIPUTADOS
    - Anotaciones de adición/reforma: "*Artículo adicionado DOF 12-11-2021*"
    """
    # Imágenes embebidas por marker
    texto = re.sub(r"!\[]\(_page_\d+_Picture_\d+\.\w+\)\n?", "", markdown)
    # Encabezados institucionales (líneas con CÁMARA DE DIPUTADOS, Secretaría...)
    texto = re.sub(
        r"\*{0,2}CÁMARA DE DIPUTADOS[^\n]*\*{0,2}\n?"
        r"(?:Secretaría General[^\n]*\n?)?"
        r"(?:Secretaría de Servicios Parlamentarios[^\n]*\n?)?",
        "",
        texto,
        flags=re.IGNORECASE,
    )
    # Anotaciones DOF al pie del artículo
    texto = re.sub(
        r"\*Artículo\s+(?:adicionado|reformado|derogado)[^\n]*\*\n?",
        "",
        texto,
        flags=re.IGNORECASE,
    )
    return texto


def parsear_articulos(markdown: str) -> list[Articulo]:
    """
    Extrae todos los artículos del markdown como una lista de Articulo.
    """
    markdown = limpiar_markdown(markdown)
    matches = list(PATRON_ARTICULO.finditer(markdown))

    if not matches:
        click.secho(
            "  ADVERTENCIA: No se encontraron artículos con el patrón estándar.\n"
            "  Revisa el markdown generado y ajusta PATRON_ARTICULO si es necesario.",
            fg="yellow"
        )
        return []

    articulos = []
    for i, match in enumerate(matches):
        numero = match.group(1).strip().rstrip(".").rstrip("*")
        inicio_contenido = match.end()
        fin_contenido = matches[i + 1].start() if i + 1 < len(matches) else len(markdown)

        contenido = markdown[inicio_contenido:fin_contenido].strip()

        # Formato inline: "**Artículo 113-F.** texto..." — el texto está en el grupo 'inline'
        inline = (match.group("inline") or "").strip()
        if inline:
            contenido = inline + ("\n\n" + contenido if contenido else "")

        # Si la primera línea del contenido parece un título (corta y sin punto), extraerla
        lineas = contenido.split("\n", 1)
        titulo = ""
        if len(lineas) > 1 and len(lineas[0]) < 80 and not lineas[0].endswith("."):
            titulo = lineas[0].strip(" #*")
            contenido = lineas[1].strip() if len(lineas) > 1 else ""

        articulos.append(Articulo(
            numero=numero,
            numero_int=numero_a_int(numero),
            titulo=titulo,
            contenido=contenido,
        ))

    return articulos


# ---------------------------------------------------------------------------
# Chunking
# ---------------------------------------------------------------------------

def dividir_en_chunks(articulos: list[Articulo], chunk_size: int) -> list[Chunk]:
    """
    Divide la lista de artículos en chunks de `chunk_size` artículos cada uno.
    """
    chunks = []
    for i in range(0, len(articulos), chunk_size):
        grupo = articulos[i : i + chunk_size]
        chunks.append(Chunk(
            articulos=grupo,
            primer_articulo=grupo[0].numero,
            ultimo_articulo=grupo[-1].numero,
        ))
    return chunks


# ---------------------------------------------------------------------------
# Generación de Markdown de salida
# ---------------------------------------------------------------------------

def generar_nombre_archivo(sigla: str, chunk_index: int, chunk: Chunk) -> str:
    """
    Genera un nombre de archivo descriptivo.
    Ej: lisr_arts_001_020.md / cff_arts_069b_069b.md
    """
    def normalizar(n: str) -> str:
        return n.lower().replace("-", "").replace(" ", "_")[:6]

    primero = normalizar(chunk.primer_articulo)
    ultimo = normalizar(chunk.ultimo_articulo)

    if primero == ultimo:
        return f"{sigla}_art_{primero}.md"
    return f"{sigla}_arts_{primero}_{ultimo}.md"


def renderizar_chunk(
    chunk: Chunk,
    ley: str,
    sigla: str,
    vigencia: str,
    descripcion_seccion: str,
) -> str:
    """
    Genera el contenido Markdown de un chunk listo para el RAG.
    Sigue el formato de INSTRUCCIONES.md.
    """
    lineas = []

    # H1 de contexto — aparece en todos los chunks por el overlap de 80 tokens
    lineas.append(
        f"# {sigla.upper()} — {descripcion_seccion}: "
        f"Arts. {chunk.primer_articulo} al {chunk.ultimo_articulo}"
    )
    lineas.append(f"**Ley:** {ley}")
    lineas.append(f"**Vigencia:** {vigencia}")
    lineas.append(f"**Artículos:** {chunk.primer_articulo} al {chunk.ultimo_articulo}")
    lineas.append("")
    lineas.append("---")
    lineas.append("")

    for art in chunk.articulos:
        # H3 por artículo
        if art.titulo:
            lineas.append(f"### Artículo {art.numero} — {art.titulo}")
        else:
            lineas.append(f"### Artículo {art.numero}")
        lineas.append("")

        # Contenido del artículo (limpiado)
        contenido = art.contenido.strip()
        if contenido:
            lineas.append(contenido)
            lineas.append("")

        # Placeholder para conceptos clave — el usuario los llena después
        lineas.append("**Conceptos clave:** <!-- agregar términos relevantes -->")
        lineas.append("")
        lineas.append("---")
        lineas.append("")

    return "\n".join(lineas)


# ---------------------------------------------------------------------------
# CLI principal
# ---------------------------------------------------------------------------

@click.group()
def cli():
    """Herramienta para convertir PDFs de leyes fiscales al formato RAG de Abacus."""


@cli.command()
@click.argument("pdf", type=click.Path(exists=True, path_type=Path))
@click.option("--ley", required=True, help="Nombre completo de la ley. Ej: 'Ley del Impuesto Sobre la Renta'")
@click.option("--sigla", required=True, help="Sigla corta para nombres de archivo. Ej: lisr, liva, cff")
@click.option("--vigencia", default="2026", show_default=True, help="Año de vigencia")
@click.option("--seccion", default="", help="Descripción de la sección. Ej: 'Título IV, Cap. VIII RESICO'")
@click.option("--output", "-o", required=True, type=click.Path(path_type=Path), help="Carpeta destino. Ej: ../docs/memory/fiscal/lisr/")
@click.option("--chunk-size", default=20, show_default=True, help="Artículos por archivo de salida")
@click.option("--desde-articulo", default=None, help="Procesar solo desde este artículo. Ej: '90'")
@click.option("--hasta-articulo", default=None, help="Procesar solo hasta este artículo. Ej: '113'")
@click.option("--paginas", default=None,
              help="Páginas del PDF a procesar. Ej: '45-60' o '45,46,50-60'. "
                   "Úsalo para pasar solo el capítulo, no la ley completa.")
@click.option("--dry-run", is_flag=True, help="Muestra qué archivos se generarían sin escribirlos")
@click.option("--markdown", "markdown_input", default=None, type=click.Path(exists=True, path_type=Path),
              help="Usa un .md ya convertido en vez de convertir el PDF (útil para re-chunking)")
def convert(
    pdf: Path,
    ley: str,
    sigla: str,
    vigencia: str,
    seccion: str,
    output: Path,
    chunk_size: int,
    desde_articulo: str | None,
    hasta_articulo: str | None,
    paginas: str | None,
    dry_run: bool,
    markdown_input: Path | None,
):
    """
    Convierte un PDF de ley fiscal a archivos Markdown chunkeados para RAG.

    Ejemplos:

    \b
    # LISR completa, chunks de 20 artículos
    python pdf_to_memory.py convert LISR_2026.pdf \\
        --ley "Ley del Impuesto Sobre la Renta" --sigla lisr \\
        --output ../docs/memory/fiscal/lisr/

    \b
    # Solo artículos 113-E al 113-I (RESICO)
    python pdf_to_memory.py convert LISR_2026.pdf \\
        --ley "Ley del Impuesto Sobre la Renta" --sigla lisr \\
        --seccion "Título IV, Cap. VIII: RESICO PF" \\
        --desde-articulo "113" --hasta-articulo "113" \\
        --output ../docs/memory/fiscal/lisr/

    \b
    # Re-chunking desde un .md ya convertido (sin re-ejecutar marker)
    python pdf_to_memory.py convert LISR_2026.pdf \\
        --ley "Ley del Impuesto Sobre la Renta" --sigla lisr \\
        --markdown lisr_raw.md \\
        --output ../docs/memory/fiscal/lisr/
    """
    sigla = sigla.lower()

    # 1. Obtener el markdown
    if markdown_input:
        click.echo(f"Usando markdown existente: {markdown_input}")
        raw_markdown = markdown_input.read_text(encoding="utf-8")
    else:
        click.echo(f"Convirtiendo PDF: {pdf.name}")
        raw_markdown = convertir_pdf(pdf, paginas=paginas)

        # Guardar el markdown raw para poder re-chunking sin re-convertir
        raw_path = output.parent / f"{sigla}_raw.md" if not dry_run else None
        if raw_path and not dry_run:
            raw_path.parent.mkdir(parents=True, exist_ok=True)
            raw_path.write_text(raw_markdown, encoding="utf-8")
            click.echo(f"  Markdown raw guardado en: {raw_path}")

    # 2. Parsear artículos
    click.echo("Parseando artículos...")
    articulos = parsear_articulos(raw_markdown)

    if not articulos:
        click.secho("No se encontraron artículos. Revisa el markdown raw generado.", fg="red")
        sys.exit(1)

    click.echo(f"  {len(articulos)} artículos encontrados "
               f"(Art. {articulos[0].numero} → Art. {articulos[-1].numero})")

    # 3. Filtrar por rango si se especificó
    if desde_articulo or hasta_articulo:
        desde_int = numero_a_int(desde_articulo) if desde_articulo else 0
        hasta_int = numero_a_int(hasta_articulo) if hasta_articulo else 99999

        articulos = [
            a for a in articulos
            if desde_int <= a.numero_int <= hasta_int
        ]
        click.echo(f"  Filtrado: {len(articulos)} artículos en rango "
                   f"{desde_articulo or '?'} – {hasta_articulo or '?'}")

        if not articulos:
            click.secho("El filtro no dejó artículos. Verifica --desde-articulo y --hasta-articulo.", fg="red")
            sys.exit(1)

    # 4. Dividir en chunks
    chunks = dividir_en_chunks(articulos, chunk_size)
    click.echo(f"  {len(chunks)} chunks de ~{chunk_size} artículos cada uno")

    # 5. Generar y guardar archivos
    descripcion_seccion = seccion or ley
    output.mkdir(parents=True, exist_ok=True)

    click.echo(f"\nArchivos a generar en {output}:")
    archivos_generados = []

    for i, chunk in enumerate(chunks):
        nombre = generar_nombre_archivo(sigla, i, chunk)
        ruta = output / nombre
        contenido = renderizar_chunk(chunk, ley, sigla, vigencia, descripcion_seccion)

        arts_en_chunk = len(chunk.articulos)
        palabras = len(contenido.split())
        click.echo(
            f"  [{i+1:02d}/{len(chunks):02d}] {nombre:45s} "
            f"({arts_en_chunk} arts, ~{palabras} palabras)"
        )

        if not dry_run:
            ruta.write_text(contenido, encoding="utf-8")

        archivos_generados.append(ruta)

    if dry_run:
        click.secho("\n(dry-run: ningún archivo fue escrito)", fg="yellow")
    else:
        click.secho(f"\n✓ {len(archivos_generados)} archivos generados en {output}", fg="green")
        click.echo(
            f"\nPróximo paso — subir al VPS:\n"
            f"  scp -r {output}/ "
            f"vps-openclaw:/root/.openclaw/workspace/memory/fiscal/{sigla}/"
        )


@cli.command()
@click.argument("markdown_file", type=click.Path(exists=True, path_type=Path))
def inspect(markdown_file: Path):
    """
    Muestra los artículos detectados en un archivo markdown (sin generar nada).
    Útil para verificar que el parser encuentra los artículos correctamente
    antes de chunking.
    """
    texto = markdown_file.read_text(encoding="utf-8")
    articulos = parsear_articulos(texto)

    if not articulos:
        click.secho("No se encontraron artículos.", fg="red")
        return

    click.echo(f"{len(articulos)} artículos encontrados:\n")
    for art in articulos:
        titulo_display = f" — {art.titulo}" if art.titulo else ""
        palabras = len(art.contenido.split())
        click.echo(f"  Art. {art.numero:<12}{titulo_display:<40}  (~{palabras} palabras)")


if __name__ == "__main__":
    cli()
