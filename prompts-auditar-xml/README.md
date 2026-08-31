# 5 Prompts Avanzados para Auditar XMLs sin errores con Claude

Lead magnet prometido en la encuesta de Tally (perfil del Avatar A, agosto 2026).
Se entrega como PDF al terminar la encuesta "IA y el Futuro de tu Despacho".

## Origen del contenido

- Los 5 prompts vienen de las 4 capas de `../../cfdi-validator/` (Anexo 20,
  materialidad Doctrina Ponce, tabla de scoring ACMR-SAT, 69-B/REPSE) más un
  quinto prompt integrador (reporte ejecutivo cobrable).
- Reciclaje parcial de `../prompts-contadores/01-analisis-fiscal/` (prompts 1 y 2
  del pack de venta, reescritos y ampliados).
- Actualizado a los modelos frontera 2026 vía skill `/claude-api`: Claude Opus 5,
  Sonnet 5, Haiku 4.5; sin `temperature` en frontera de Anthropic (nota de que
  ChatGPT/Gemini la conservan solo por API); razonamiento adaptativo; ventana ~1M.

## Reglas de marca aplicadas

- Cero em-dash (verificar con `grep -c '—' *.html` antes de regenerar).
- Cero emoji decorativo (documento de autoridad/B2B).
- Tokens del design system (`todoconta-apps/docs/design-system.md`): Azul Legal
  `#0B5FFF`, navy `#0A1628`, bone `#FAFAF7`, cian `#06B6D4` solo para cajas de IA,
  Inter + JetBrains Mono, esquinas rectas (superficie landing/print).
- Principio "copiloto, no autopiloto" en cada prompt (la IA señala, el contador
  decide y firma).

## URL pública (Cloudflare R2)

https://pub-fe401e74dfe1437287b572edf97cd651.r2.dev/guias/5-prompts-auditar-xml-claude.pdf

Subido al bucket de R2 del repo (credenciales en `todoconta-apps/packages/video/.env`),
prefijo `guias/`, con `cache-control: public,max-age=3600` (1 hora, no el año de los
shorts, para que una re-subida al mismo nombre propague rápido). Re-subir:

```bash
set -a && source ~/Code/projects/todoconta-apps/packages/video/.env && set +a
AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID" AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY" \
AWS_DEFAULT_REGION=auto AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED \
AWS_RESPONSE_CHECKSUM_VALIDATION=WHEN_REQUIRED \
aws s3 cp 5-prompts-auditar-xml-claude.pdf "s3://$R2_BUCKET/guias/5-prompts-auditar-xml-claude.pdf" \
  --endpoint-url "https://$R2_ACCOUNT_ID.r2.cloudflarestorage.com" \
  --content-type application/pdf --cache-control "public,max-age=3600"
```

## Regenerar el PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="5-prompts-auditar-xml-claude.pdf" \
  "file://$PWD/guia-5-prompts-auditar-xml.html"
```

Cada sección es una página carta exacta (`.page` con `height: 11in` y
`overflow: hidden`): si editas contenido, verifica que nada se recorte
renderizando con `pdftoppm -png -r 60 <pdf> page` y revisando las imágenes.

## Estructura (9 páginas)

1. Portada
2. Intro: por qué no es otra lista de prompts + "lo que cambió en 2026"
3. Preparación: qué modelo usar + confidencialidad + exportar del portal SAT
4. Prompt 1: validación formal (Anexo 20)
5. Prompt 2: materialidad (estándar Ponce)
6. Prompt 3: scoring de riesgo con semáforo (tabla de puntos del validador)
7. Prompt 4: proveedores 69-B + REPSE
8. Prompt 5: reporte ejecutivo integrador
9. Cierre: equivalencias ChatGPT/Gemini + fundamentos + CTA Jueves de ContadorIA
