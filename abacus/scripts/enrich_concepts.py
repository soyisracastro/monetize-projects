#!/usr/bin/env python3
"""
enrich_concepts.py — Genera automáticamente los "Conceptos clave" de cada
artículo en los archivos .md del RAG de Abacus usando la API de Claude.

Lee archivos con placeholders:
    **Conceptos clave:** <!-- agregar términos relevantes -->

Y los reemplaza con términos reales extraídos del texto verbatim del artículo:
    **Conceptos clave:** RESICO, declaración anual, abril, tabla anual, ISR

Uso:
    python enrich_concepts.py enrich ../docs/memory/fiscal/lisr/lisr_arts_113e_113j.md

    # Procesar toda una carpeta
    python enrich_concepts.py enrich ../docs/memory/fiscal/lisr/

    # Vista previa sin escribir
    python enrich_concepts.py enrich ../docs/memory/fiscal/ --dry-run
"""

import re
import sys
from pathlib import Path

import click
from dotenv import load_dotenv

# Carga .env desde la carpeta del script (o cualquier padre hasta encontrarlo)
load_dotenv(Path(__file__).parent / ".env")

PLACEHOLDER = "<!-- agregar términos relevantes -->"
PATRON_ARTICULO_BLOQUE = re.compile(
    r"(### Artículo .+?\n)(.*?)(\*\*Conceptos clave:\*\*\s*" + re.escape(PLACEHOLDER) + r")",
    re.DOTALL,
)


def generar_conceptos(numero: str, texto: str, cliente) -> str:
    """
    Llama a Claude para extraer conceptos clave del texto verbatim de un artículo.
    Devuelve una cadena de términos separados por coma.
    """
    prompt = f"""Eres un experto en derecho fiscal mexicano. Se te proporciona el texto verbatim del {numero} de una ley fiscal mexicana.

Extrae entre 6 y 12 términos o frases clave que un contador utilizaría para buscar este artículo. Los términos deben ser:
- Palabras o frases del texto o directamente relacionadas
- Útiles para búsqueda semántica (no redundantes entre sí)
- Incluir: conceptos técnicos, nombres de obligaciones, plazos relevantes, montos si los hay, referencias a otros artículos importantes

Responde ÚNICAMENTE con los términos separados por coma, sin explicación, sin numeración, sin punto final.

Texto del artículo:
{texto[:2000]}"""

    mensaje = cliente.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}],
    )
    return mensaje.content[0].text.strip().rstrip(".")


def enriquecer_archivo(ruta: Path, cliente, dry_run: bool) -> int:
    """
    Procesa un archivo .md y reemplaza los placeholders con conceptos generados.
    Devuelve el número de artículos enriquecidos.
    """
    contenido = ruta.read_text(encoding="utf-8")

    pendientes = list(PATRON_ARTICULO_BLOQUE.finditer(contenido))
    sin_placeholder = [m for m in pendientes if PLACEHOLDER in m.group(3)]

    if not sin_placeholder:
        click.echo(f"  {ruta.name} — sin placeholders, omitiendo")
        return 0

    click.echo(f"  {ruta.name} — {len(sin_placeholder)} artículo(s) a enriquecer")

    nuevo_contenido = contenido
    enriquecidos = 0

    for match in sin_placeholder:
        heading = match.group(1).strip()
        numero = heading.replace("### ", "").strip()
        texto_articulo = match.group(2).strip()

        if not texto_articulo or "PENDIENTE" in texto_articulo:
            click.echo(f"    {numero} — texto pendiente, saltando")
            continue

        click.echo(f"    {numero}...", nl=False)

        try:
            conceptos = generar_conceptos(numero, texto_articulo, cliente)
            click.echo(f" {conceptos[:60]}{'...' if len(conceptos) > 60 else ''}")

            reemplazo_original = match.group(3)
            reemplazo_nuevo = f"**Conceptos clave:** {conceptos}"
            nuevo_contenido = nuevo_contenido.replace(reemplazo_original, reemplazo_nuevo, 1)
            enriquecidos += 1

        except Exception as e:
            click.secho(f" ERROR: {e}", fg="red")

    if not dry_run and enriquecidos > 0:
        ruta.write_text(nuevo_contenido, encoding="utf-8")
        click.secho(f"  ✓ {ruta.name} actualizado ({enriquecidos} artículos)", fg="green")
    elif dry_run:
        click.secho(f"  (dry-run: {enriquecidos} conceptos generados, archivo no modificado)", fg="yellow")

    return enriquecidos


@click.group()
def cli():
    """Enriquece archivos RAG de Abacus con conceptos clave generados por IA."""


@cli.command()
@click.argument("ruta", type=click.Path(exists=True, path_type=Path))
@click.option("--dry-run", is_flag=True, help="Genera los conceptos pero no escribe los archivos")
@click.option("--api-key", envvar="ANTHROPIC_API_KEY",
              help="API key de Anthropic (o variable ANTHROPIC_API_KEY)")
def enrich(ruta: Path, dry_run: bool, api_key: str | None):
    """
    Genera conceptos clave para artículos con placeholder en uno o varios archivos .md.

    RUTA puede ser un archivo .md o una carpeta (procesa recursivamente).

    Ejemplos:

    \b
    python enrich_concepts.py enrich ../docs/memory/fiscal/lisr/lisr_arts_113e_113j.md
    python enrich_concepts.py enrich ../docs/memory/fiscal/lisr/
    python enrich_concepts.py enrich ../docs/memory/fiscal/ --dry-run
    """
    try:
        import anthropic
    except ImportError:
        click.secho(
            "ERROR: anthropic no está instalado.\nEjecuta: pip install anthropic",
            fg="red"
        )
        sys.exit(1)

    if not api_key:
        click.secho(
            "ERROR: Se requiere ANTHROPIC_API_KEY.\n"
            "Exporta: export ANTHROPIC_API_KEY=sk-ant-...\n"
            "O pasa: --api-key sk-ant-...",
            fg="red"
        )
        sys.exit(1)

    cliente = anthropic.Anthropic(api_key=api_key)

    # Recolectar archivos a procesar
    if ruta.is_file():
        archivos = [ruta]
    else:
        archivos = sorted(ruta.rglob("*.md"))
        archivos = [f for f in archivos if "INSTRUCCIONES" not in f.name]

    if not archivos:
        click.secho("No se encontraron archivos .md", fg="yellow")
        return

    click.echo(f"Archivos a procesar: {len(archivos)}\n")

    total = 0
    for archivo in archivos:
        total += enriquecer_archivo(archivo, cliente, dry_run)

    click.echo(f"\nTotal: {total} artículos enriquecidos")
    if not dry_run and total > 0:
        click.echo("\nPróximo paso — subir al VPS:")
        click.echo(f"  scp -r {ruta}/ vps-openclaw:/root/.openclaw/workspace/memory/fiscal/")


if __name__ == "__main__":
    cli()
