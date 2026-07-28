# Ebook: IA para Contadores

## Qué es este proyecto

Ebook educativo (~90-100 páginas) que enseña conceptos de inteligencia artificial a contadores mexicanos usando analogías del mundo contable. No es un manual técnico ni un tutorial de herramientas — es un libro de conceptos que responde "qué es la IA, cómo funciona y cómo me afecta como contador".

**Precio:** $297 MXN (individual) / $597 MXN en bundle con el Pack de Prompts / $197 MXN para compradores existentes del Pack de Prompts.

**Plataforma de venta:** nas.io

## Estructura

- 17 capítulos organizados en 5 partes temáticas (Desmitificar → Entender → Usar → Proteger → Decidir)
- 3 apéndices (Glosario, Recursos, 5 Prompts de muestra)
- Materiales de marketing (landing page, secuencia de 4 emails de lanzamiento, email para compradores existentes)
- Basado en 11 newsletters existentes (publicados en columna13.club, feb-mar 2026) + 6 capítulos nuevos

Ver `outline.md` para el índice completo con archivos y estado de cada capítulo.

## Convenciones importantes

### Estilo de escritura
- Ver `style-guide.md` para la guía completa
- Voz: primera persona (Isca), tuteo, conversacional pero profesional
- Cada capítulo sigue la plantilla en `chapter-template.md`
- Secciones obligatorias: Gancho → Concepto → "Concepto Clave" (blockquote) → "En la Práctica" → "Mito vs Realidad" → "Lo que te llevas" → "Pruébalo tú mismo" → "Si quieres ir más lejos"
- Sin emojis en el texto del ebook
- Extensión por capítulo: 1,500-2,500 palabras
- Los conceptos técnicos de IA siempre se explican con analogías del mundo contable

### Reglas de contenido
- **Agnóstico de herramientas:** No enseñar interfaz de ChatGPT/Claude/Gemini. Enseñar conceptos que aplican en cualquier modelo.
- **Concepto, no UI:** Nunca "haz clic aquí". Siempre "el concepto es X, y funciona así".
- **México primero:** Todos los ejemplos son mexicanos (SAT, CFDI, ISR, IMSS, pesos mexicanos).
- **Sin fechas que caduquen:** Evitar "en 2026 el modelo X puede..." — preferir "al momento de escribir esto".
- **Framework RCIF:** Rol, Contexto, Instrucción, Formato. Se introduce en Cap 9 y se referencia en capítulos posteriores.

### Relación con otros productos
- El ebook menciona el Pack de Prompts en la sección "Si quieres ir más lejos" de cada capítulo y en el Apéndice C (5 prompts de muestra simplificados).
- El Apéndice C debe ser consistente con los prompts reales del Pack (actualmente 25 prompts).
- El ebook NO debe duplicar el contenido del Pack — enseña conceptos, el Pack da herramientas listas para usar.
- Los newsletters originales están en `content/` — los capítulos en `chapters/` son versiones expandidas.

## Archivos clave

```
ebook/
  outline.md              # Índice maestro con estado de cada archivo
  style-guide.md          # Reglas de voz, tono, formato
  chapter-template.md     # Plantilla para nuevos capítulos
  chapters/               # Los 17 capítulos + 3 apéndices
  content/                # Newsletters originales (fuente)
  marketing/              # Landing page, emails de lanzamiento
  assets/                 # Imágenes y recursos
```

## Estado actual (marzo 2026)

- Todos los capítulos están en estado "Borrador" (escritos pero no editados/revisados)
- Las referencias al Pack de Prompts ya se actualizaron a 25 prompts
- Los nombres de modelos de IA en el contenido están actualizados a marzo 2026
