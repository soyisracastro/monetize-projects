# BONUS: Guía Avanzada — Convierte tus Prompts en Asistentes Permanentes

> Este bonus enseña a los compradores a ir más allá de copiar y pegar: crear asistentes de IA personalizados que ya tienen todos los prompts cargados y listos para usar.

---

## CONCEPTO DEL BONUS

En lugar de copiar un prompt cada vez que lo necesites, puedes crear un **asistente personalizado** dentro de tu herramienta de IA favorita que ya "sabe" que es un Contador Público mexicano, ya conoce el contexto fiscal, y solo necesita que le des los datos de tu cliente.

Es la diferencia entre:
- **Sin asistente:** Abrir ChatGPT → Buscar el prompt → Copiar → Pegar → Personalizar → Enviar
- **Con asistente:** Abrir tu asistente "Contador Fiscal MX" → Escribir "Analiza estos CFDI" → Listo

---

## QUÉ INCLUYE ESTE BONUS

### Video 1: Introducción a los Asistentes de IA (10-15 min)
**Título:** "De prompts sueltos a un asistente contable que trabaja para ti"

**Contenido:**
- Qué es un asistente personalizado de IA y por qué es el siguiente nivel
- Diferencia entre usar prompts sueltos vs tener un asistente configurado
- Panorama actual: qué herramientas permiten crear asistentes (ChatGPT, Claude, Gemini)
- Cuál elegir según tu situación (gratuito vs pago, mejor para qué tarea)
- Demostración rápida de los 3 asistentes en acción

---

### Video 2: Crea tu GPT Personalizado en ChatGPT (15-20 min)
**Título:** "Cómo crear un GPT personalizado para tu despacho contable"

**Plataforma:** ChatGPT (requiere plan Plus, Team o Enterprise)

**Qué se muestra paso a paso:**

1. **Acceder al creador de GPTs**
   - Ir a chat.openai.com → Explorar GPTs → Crear
   - O directamente: chat.openai.com/gpts/editor

2. **Configurar el GPT**
   - **Nombre:** "Asistente Fiscal MX" (o el nombre que quieran)
   - **Descripción:** "Contador Público mexicano especializado en análisis fiscal, nómina, IMSS y productividad para despachos contables"
   - **Instrucciones (System Prompt):** Aquí va la magia — cargar las instrucciones base que combinen los mejores elementos de los 25 prompts

3. **Instrucciones base sugeridas para el GPT:**

```
Eres un Contador Público mexicano con las siguientes especialidades:

PERFIL:
- Experto en fiscalidad mexicana (LISR, LIVA, CFF, LSS, LFT)
- Especialista en nómina, IMSS, Infonavit e ISN
- Conocimiento profundo de CFDI 4.0, portal del SAT, SUA e IDSE
- Experiencia en análisis financiero conforme a NIF mexicanas
- Habilidad para comunicar conceptos complejos en lenguaje simple

REGLAS:
1. Siempre fundamenta tus respuestas con artículos de ley específicos
2. Cuando hagas cálculos, muestra el procedimiento paso a paso
3. Usa tablas y formatos estructurados para presentar resultados
4. Incluye alertas (🔴🟡🟢) cuando detectes riesgos
5. Al final de cada análisis, incluye "Recomendaciones" y "Siguiente paso"
6. Si no estás seguro de un dato (como tasas vigentes o fechas), indícalo claramente
7. Recuerda que tus respuestas complementan el criterio profesional del contador, no lo sustituyen
8. Usa el valor vigente de la UMA y salarios mínimos del año actual
9. Cuando el usuario mencione un estado, aplica las tasas de ISN correspondientes

TAREAS QUE PUEDES REALIZAR:
- Revisión y análisis de CFDI
- Verificación de proveedores en Lista 69-B
- Planeación fiscal estratégica
- Conciliación contable-fiscal
- Interpretación de cartas invitación del SAT
- Resumen de cambios en la Miscelánea Fiscal
- Análisis de estados financieros
- Cálculo de razones financieras
- Proyección de flujo de efectivo
- Cálculo de SBC y factor de integración
- Determinación de prima de riesgo de trabajo
- Cálculo de liquidación y finiquito
- Reconciliación SUA vs IDSE
- Cálculo de ISN por estado
- Redacción de correos profesionales
- Propuestas de servicios contables
- Explicación de impuestos en lenguaje simple
- Gestión de vencimientos y obligaciones

FORMATO PREFERIDO:
- Usa tablas cuando presentes datos numéricos
- Incluye semáforos de riesgo (🔴 Crítico, 🟡 Atención, 🟢 Correcto)
- Siempre termina con acciones concretas
- Si el usuario no especifica periodo, pregunta antes de calcular
```

4. **Subir archivos de conocimiento (Knowledge)**
   - Subir el PDF de los 25 prompts como referencia
   - Opcionalmente: subir tablas de ISN por estado, UMA vigente, tasas de impuestos

5. **Configurar capacidades**
   - Activar: Navegación web (para consultar tasas vigentes)
   - Activar: Análisis de datos (para procesar Excel/CSV del cliente)
   - Desactivar: Generación de imágenes (no lo necesita)

6. **Probar el GPT** con un caso real (datos ficticios)

7. **Publicar**
   - Privado (solo para ti)
   - Con link (para compartir con tu equipo)
   - No publicar en la tienda pública (es tu ventaja competitiva)

---

### Video 3: Crea tu Proyecto en Claude (15-20 min)
**Título:** "Configura Claude como tu asistente contable con Projects"

**Plataforma:** Claude (plan Pro o Team — claude.ai)

**Por qué Claude para contabilidad:**
- Según benchmarks recientes, Claude destaca en razonamiento complejo y análisis de documentos largos
- Ventana de contexto más grande (puede procesar estados financieros completos)
- Mejor seguimiento de instrucciones detalladas
- Menos "alucinaciones" en temas técnicos

**Qué se muestra paso a paso:**

1. **Crear un Proyecto**
   - Ir a claude.ai → Projects → Crear nuevo proyecto
   - Nombre: "Despacho Contable MX"

2. **Configurar instrucciones del proyecto (Project Instructions)**
   - Pegar las mismas instrucciones base (adaptadas)
   - En Claude las instrucciones del proyecto aplican a TODAS las conversaciones dentro de ese proyecto

3. **Agregar conocimiento (Project Knowledge)**
   - Subir el PDF de prompts
   - Subir documentos de referencia (tablas de ISN, UMA, etc.)
   - Claude puede recibir archivos PDF, TXT, CSV directamente en el chat

4. **Crear conversaciones temáticas dentro del proyecto**
   - "Cliente - Restaurante El Paisa" (una conversación por cliente)
   - "Cálculos de nómina - Febrero 2025"
   - "Planeación fiscal - Año 2025"
   - Cada conversación mantiene su historial pero comparte las instrucciones y conocimiento del proyecto

5. **Demostración:** Subir un estado financiero en PDF y pedir análisis completo

**Bonus dentro del video:** Mencionar Claude Code (CLI) para contadores que también programan — pueden crear Skills personalizados que ejecutan los prompts con un solo comando.

---

### Video 4: Crea tu Gema en Gemini (10-15 min)
**Título:** "Crea una Gema de Google Gemini para contabilidad mexicana"

**Plataforma:** Google Gemini (gemini.google.com) — requiere plan Advanced para Gemas personalizadas

**Ventaja de Gemini:**
- Integración nativa con Google Workspace (Sheets, Docs, Drive)
- Puede acceder a tu Google Drive directamente
- Si usas Google Sheets para tus papeles de trabajo, Gemini puede leerlos

**Qué se muestra paso a paso:**

1. **Acceder a Gems**
   - Ir a gemini.google.com → Gem Manager → Crear nueva Gem

2. **Configurar la Gema**
   - Nombre: "Contador Fiscal MX"
   - Instrucciones: Pegar las instrucciones base adaptadas para Gemini
   - Gemini permite instrucciones más cortas, ser conciso

3. **Instrucciones sugeridas para Gemini Gem:**

```
Eres un Contador Público mexicano experto en:
- Fiscalidad mexicana (ISR, IVA, CFF, IMSS, LFT)
- Análisis financiero (NIF mexicanas)
- Nómina y seguridad social
- Comunicación profesional con clientes

Reglas:
- Fundamenta con artículos de ley específicos
- Usa tablas para datos numéricos
- Incluye semáforos: 🔴 Crítico 🟡 Atención 🟢 Correcto
- Termina con recomendaciones accionables
- Advierte cuando un dato pueda no estar actualizado
```

4. **Probar con un caso**

5. **Guardar y acceder rápido** desde el menú lateral de Gemini

---

### Video 5: Comparativa Práctica — ¿Cuál IA Uso Para Qué? (10-15 min)
**Título:** "ChatGPT vs Claude vs Gemini: ¿Cuál es mejor para contadores?"

**Disclaimer importante (decirlo al inicio del video):**
> "Los modelos de IA cambian constantemente. Lo que te muestro hoy refleja el estado actual, pero en 3 meses puede ser diferente. Lo importante es que entiendas las fortalezas de cada uno para que tú decidas."

**Comparativa honesta (a fecha de creación):**

| Tarea | Mejor opción | Por qué |
|-------|-------------|---------|
| Análisis de documentos largos (EF, contratos) | Claude | Ventana de contexto más grande, mejor comprensión de documentos |
| Cálculos numéricos y tablas | ChatGPT (con Code Interpreter) | Puede ejecutar código Python para cálculos exactos |
| Integración con Google Sheets | Gemini | Acceso nativo a Google Workspace |
| Razonamiento fiscal complejo | Claude / ChatGPT | Ambos son fuertes, probar con el caso específico |
| Redacción de correos y comunicación | Cualquiera | Los 3 son buenos en generación de texto |
| Análisis de XML/CSV | ChatGPT (Code Interpreter) | Puede procesar archivos directamente con código |
| Investigación de legislación vigente | ChatGPT / Gemini (con búsqueda web) | Acceso a internet para verificar datos actuales |
| Seguir instrucciones detalladas | Claude | Mejor adherencia a instrucciones largas y complejas |

**Mensaje clave del video:**
- No hay "mejor" universal — depende de la tarea
- Lo ideal es tener 2 herramientas configuradas y usar cada una para lo que es mejor
- Prueba tu caso específico en 2-3 herramientas y quédate con la que te dé mejor resultado
- Los modelos mejoran cada pocos meses, lo que hoy es "peor" mañana puede ser "mejor"

**Modelos específicos a mencionar (sin casarse con ninguno):**
- OpenAI: GPT-4.1, o3, o4-mini (razonamiento)
- Anthropic: Claude Sonnet 4.6, Claude Opus 4.6 (razonamiento profundo)
- Google: Gemini 2.5 Flash, Gemini 2.5 Pro
- Nota: Los nombres y versiones cambian frecuentemente — consulta los sitios de referencia listados abajo para la información más actual

---

## RECURSOS Y REFERENCIAS PARA LOS USUARIOS

### Dónde comparar modelos de IA (incluir en el PDF y mencionar en videos)

**1. LMArena (antes LMSYS Chatbot Arena)**
- URL: lmarena.ai
- Qué es: Plataforma de la Universidad de Berkeley donde usuarios reales evalúan modelos de IA de forma anónima (blind test). Te presentan 2 respuestas sin decirte qué modelo las generó y tú eliges la mejor.
- Por qué importa: Es la referencia más confiable e imparcial para comparar modelos. Los rankings se actualizan constantemente.
- Cómo usarlo: Consulta el ranking general y el ranking por categoría (razonamiento, matemáticas, codificación, etc.)

**2. Artificial Analysis**
- URL: artificialanalysis.ai
- Qué es: Compara modelos de IA en calidad, velocidad, precio y eficiencia. Tiene gráficas interactivas muy claras.
- Por qué importa: Te ayuda a decidir cuál modelo da mejor relación calidad-precio (importante si pagas por uso).
- Ideal para: Comparar costos si algún día decides integrar IA por API en tu despacho.

**3. OpenRouter**
- URL: openrouter.ai/rankings
- Qué es: Plataforma que agrega múltiples modelos de IA y publica rankings de rendimiento.
- Por qué importa: Acceso a decenas de modelos desde un solo lugar. Útil si quieres probar modelos menos conocidos que podrían ser buenos para tu caso.

**4. HuggingFace Open LLM Leaderboard**
- URL: huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard
- Qué es: Ranking técnico de modelos abiertos (no comerciales). Más técnico.
- Por qué importa: Si algún día quieres explorar modelos de código abierto (gratuitos) que puedes correr en tu computadora.

**5. Sitios oficiales de cada herramienta**

| Herramienta | URL | Plan gratuito | Plan de pago |
|-------------|-----|---------------|--------------|
| ChatGPT | chatgpt.com | Sí (GPT-4.1 mini) | Plus $20 USD/mes |
| Claude | claude.ai | Sí (limitado) | Pro $20 USD/mes |
| Gemini | gemini.google.com | Sí (Gemini Flash) | Advanced $20 USD/mes (incluido en Google One AI) |
| Copilot | copilot.microsoft.com | Sí (básico) | Pro $20 USD/mes |
| Perplexity | perplexity.ai | Sí (búsqueda con IA) | Pro $20 USD/mes |

---

## IDEAS PARA VIDEOS ADICIONALES (CONTENIDO DE MARKETING)

### Videos cortos para redes sociales (Reels/TikTok/Shorts — 30-60 seg)

**Video A: "El error que cometen los contadores con ChatGPT"**
- Hook: "Si abres ChatGPT y escribes 'ayúdame con impuestos', estás perdiendo el tiempo"
- Contenido: Mostrar la diferencia entre un prompt genérico vs un prompt específico para contadores
- CTA: "Tengo 25 prompts listos para ti — link en bio"

**Video B: "Calculé una liquidación en 2 minutos con IA"**
- Hook: Pantalla dividida — lado izquierdo: Excel complicado / lado derecho: prompt + resultado
- Contenido: Demostración en tiempo real del Prompt #12 (Liquidación y Finiquito)
- CTA: "25 prompts como este — link en bio"

**Video C: "Lo que tu contador no te dice sobre la IA" (para atraer audiencia)**
- Hook: "La IA no va a reemplazar a los contadores. Pero los contadores que usen IA van a reemplazar a los que no."
- Contenido: 3 tareas que la IA hace mejor que tú (redacción, análisis de datos, explicaciones)
- CTA: "Aprende a usar IA en tu despacho"

**Video D: "Armé un asistente de IA que sabe de impuestos mexicanos"**
- Hook: Mostrar el asistente respondiendo una pregunta fiscal compleja
- Contenido: Speed run de crear el GPT/Proyecto/Gema en 60 segundos
- CTA: "Te enseño cómo — link en bio"

**Video E: "3 prompts que todo contador debería tener"**
- Hook: "Si eres contador y todavía no usas IA, estos 3 prompts te van a cambiar la vida"
- Contenido: Mostrar los prompts #1 (CFDI), #12 (Liquidación) y #17 (Explicación simple)
- CTA: "Los 25 prompts por $247 — link en bio"

### Video largo para YouTube / Curso (20-30 min)

**"Cómo uso Inteligencia Artificial en mi despacho contable — Tutorial completo"**

Estructura:
1. Intro: Por qué la IA importa para contadores (2 min)
2. Demo: Los 3 prompts más poderosos en acción (8 min)
3. Tutorial: Crear tu asistente personalizado (10 min)
4. Comparativa: Qué IA usar para qué (5 min)
5. Recursos: Dónde aprender más (3 min)
6. CTA: Presentar el producto completo (2 min)

Este video puede servir como:
- Contenido educativo gratuito (atrae audiencia)
- Preview del producto (muestra el valor)
- Embudo de ventas (CTA al final)

### Video para el producto (entregable al comprador — 15-20 min)

**"Guía de inicio rápido: Tus primeros 30 minutos con los prompts"**

1. Cómo abrir el PDF y navegar el índice (1 min)
2. Elegir tu primer prompt y probarlo (3 min)
3. Personalizar los campos con datos de un cliente real (3 min)
4. Evaluar el resultado y pedir ajustes (2 min)
5. Crear tu asistente personalizado (8 min)
6. Workflow recomendado para el día a día (3 min)

---

## CÓMO ESTRUCTURAR EL BONUS EN LA OFERTA

### Opción A: Incluido en el producto base ($247 MXN)
- Los 25 prompts en PDF
- Guía de inicio
- **BONUS: 5 videos** (acceso por link privado de YouTube/Vimeo)
- Posicionamiento: "Más valor por el mismo precio"
- Pro: Aumenta el valor percibido sin subir el precio
- Contra: Reduces el margen de un posible upsell

### Opción B: Producto escalonado (Recomendada)
**Básico — $247 MXN**
- 25 prompts en PDF
- Guía de inicio rápido

**Pro — $497 MXN**
- Todo lo del Básico
- 5 videos tutoriales (asistentes en ChatGPT, Claude, Gemini)
- Video de comparativa "Cuál IA usar para qué"
- Instrucciones base listas para copiar en cada plataforma
- Guía de recursos y referencias

**Despacho — $997 MXN**
- Todo lo del Pro
- Licencia para hasta 5 usuarios
- Sesión grupal en vivo de 1 hora (implementación)
- Acceso a actualizaciones por 12 meses

### Opción C: El video como lead magnet gratuito
- Publicar el Video 5 (Comparativa) como contenido gratuito en YouTube
- Al final del video: "Si quieres los 25 prompts listos para usar, están en el link de la descripción"
- Funciona como embudo: Video gratis → Producto de pago

---

## COPY PARA AGREGAR EL BONUS EN LA LANDING PAGE

### Si va como bonus incluido:

```
BONUS EXCLUSIVO: Asistentes de IA Personalizados (5 videos)

No te conformes con copiar y pegar. Aprende a crear tu propio
asistente de IA que ya sabe de contabilidad mexicana.

Incluye tutoriales paso a paso para:
✅ Crear un GPT personalizado en ChatGPT
✅ Configurar un Proyecto en Claude
✅ Armar una Gema en Google Gemini
✅ Comparativa: cuál IA es mejor para cada tarea contable
✅ Recursos para mantenerte actualizado (rankings de modelos, benchmarks)

Valor: $350 MXN → INCLUIDO en tu compra
```

### Si va como tier Pro:

```
¿Quieres ir más allá de copiar y pegar?

PACK PRO — $497 MXN
Todo lo del Pack Básico, más:

🎬 5 videos tutoriales donde te muestro cómo crear un asistente
   de IA que ya sabe de contabilidad mexicana

   En lugar de buscar el prompt cada vez, le dices
   "analiza estos CFDI" y tu asistente ya sabe qué hacer.

   Tutoriales para ChatGPT, Claude y Gemini — elige el que prefieras.

📊 Comparativa honesta: cuál IA es mejor para cada tarea
   (análisis fiscal, cálculos, redacción, documentos largos)

📚 Guía de recursos: dónde consultar rankings actualizados
   de modelos de IA (LMArena, Artificial Analysis, y más)
```

---

## CHECKLIST DE PRODUCCIÓN DE VIDEOS

### Equipo mínimo necesario
- [ ] Grabación de pantalla: OBS Studio (gratis) o Loom
- [ ] Cámara (opcional): Webcam o celular para intro/outro
- [ ] Micrófono: El del celular con audífonos funciona, un lavalier USB es mejor
- [ ] Edición: CapCut (gratis), DaVinci Resolve (gratis) o Descript
- [ ] Thumbnails: Canva

### Estructura de cada video
1. **Hook** (primeros 10 segundos): Qué van a aprender y por qué importa
2. **Contexto** (1-2 min): Breve explicación del concepto
3. **Tutorial** (el grueso): Pantalla compartida, paso a paso
4. **Resultado** (1-2 min): Mostrar el asistente funcionando con un caso real
5. **CTA** (30 seg): Qué hacer después (comprar producto, ver siguiente video, etc.)

### Orden de producción sugerido
1. Video 5 (Comparativa) — es el más corto y puede usarse como marketing
2. Video 2 (GPT personalizado) — ChatGPT es el más popular
3. Video 3 (Claude Projects) — segundo más relevante
4. Video 4 (Gemini Gems) — complementario
5. Video 1 (Introducción) — se graba al final cuando ya dominas el contenido

---

## NOTA SOBRE ACTUALIZACIONES

Las interfaces de ChatGPT, Claude y Gemini cambian frecuentemente. Recomendaciones:

- Grabar los videos con **enfoque en el concepto, no en los clicks exactos**
- Decir "busca la opción de crear un GPT personalizado" en vez de "haz click en el tercer ícono de la izquierda"
- Incluir un disclaimer: "La interfaz puede verse ligeramente diferente si ha habido actualizaciones"
- Cuando un video quede obsoleto por un cambio grande en la interfaz, regrabar solo ese video
- Considerar hacer los tutoriales también como guías escritas (con screenshots) que son más fáciles de actualizar
