# Capítulo 3: Como aprende la IA (y por que le importa a un contador)

<!--
Fuente: Newsletter #4
Concepto principal: Fases de entrenamiento de un LLM (preentrenamiento, fine-tuning, RLHF)
Términos para glosario: preentrenamiento, fine-tuning, RLHF, training data cutoff, modelo de código abierto, modelo de código cerrado
-->

Acuerdate de tus primeros días en la universidad. No los buenos --las fiestas, los cuates, las salidas del viernes. Me refiero a los otros días. Los de sentarte con una hoja tabular de doce columnas y registrar asientos contables a mano. Los de memorizar el catalogo de cuentas hasta que lo sonaras dormido. Los de resolver balanzas de comprobacion que nunca cuadraban a la primera.

Horas y horas leyendo las NIF. Haciendo ejercicios que parecian interminables. Estudiando teoria que no sabias si algún dia ibas a necesitar.

Y lo mas frustrante: todavía sin tocar un cliente real. Sin abrir el portal del SAT. Sin batallar con un CFDI cancelado fuera de plazo. Solo absorbiendo información como esponja, sin saber muy bien para que.

## Tres fases, un mismo camino

Pues resulta que la IA pasa por algo muy parecido antes de que tu puedas escribirle una sola palabra. No nace sabiendo. Aprende. Y su proceso de aprendizaje tiene tres fases que, curiosamente, se parecen mucho a tu carrera como contador.

### Fase 1: La universidad (preentrenamiento)

En está primera fase, el modelo lee cantidades absurdas de texto. Libros, articulos, paginas web, código, conversaciones, documentos legales, foros. Miles de millones de textos. Su único trabajo es detectar patrones: como se construyen las oraciones, que palabras tienden a ir juntas, como se estructura un argumento.

No sabe todavía para que lo van a usar. No tiene idea de que alguien va a preguntarle sobre la deducibilidad de un gasto o sobre como llenar una DIOT. Solo aprende la estructura del lenguaje.

Igual que tu en la carrera. Aprendiste la teoria contable completa sin saber que un dia ibas a tener un cliente que te llamara en panico porque el SAT le mando una carta-invitacion por supuestas diferencias.

> **Concepto Clave**
> **Preentrenamiento:** Es la primera fase de aprendizaje de un modelo de IA, donde lee miles de millones de textos para aprender patrones del lenguaje. No aprende a responder preguntas; aprende como funciona el idioma.

### Fase 2: El despacho (fine-tuning)

Ya terminaste la carrera. Llegas al despacho. Y te das cuenta de algo que nadie te dijo: lo que aprendiste en la universidad es la base, pero el trabajo real es otra cosa.

Ahora tienes que aprender a atender clientes. A estructurar respuestas que hagan sentido para alguien que no sabe de contabilidad. A no soltar tecnicismos sin explicarlos. A seguir instrucciones especificas: "necesito está declaracion para el viernes" o "quiero un resumen ejecutivo, no un tratado".

Para la IA, está fase se llama fine-tuning. El modelo ya sabe mucho sobre lenguaje. Ahora lo entrenan especificamente para tener conversaciones utiles. Para responder cuando le preguntan. Para seguir instrucciones. Para ser un asistente y no solo una enciclopedia enorme que vomita información sin orden.

> **Concepto Clave**
> **Fine-tuning:** Es la fase donde un modelo preentrenado se ajusta con datos especificos para que aprenda a tener conversaciones utiles, seguir instrucciones y responder de forma estructurada.

### Fase 3: Los clientes (RLHF)

Y luego llega la fase que mas te ensena en cualquier profesión: los clientes reales.

El cliente que te regresa un trabajo porque no quedo como esperaba. El que te explica exactamente que necesitaba y tu no entendiste a la primera. El socio que te revisa un papel de trabajo y te dice "esto está bien, pero esto otro no sirve así". Sin querer, te ensenan mas que tres semestres juntos.

Para la IA, esto se llama RLHF: Reinforcement Learning from Human Feedback. Aprendizaje por retroalimentacion humana. Miles de personas reales evaluan las respuestas del modelo. Senalan cuales son utiles, cuales son incorrectas, cuales son peligrosas. El modelo aprende de esas correcciones y se ajusta. Una y otra vez.

No es magia. Es iteracion. Es la misma razón por la que tu eres mejor contador hoy que hace cinco años: porque has recibido retroalimentacion de clientes, colegas y del propio SAT.

> **Concepto Clave**
> **RLHF (Reinforcement Learning from Human Feedback):** Es la fase donde humanos evaluan las respuestas de la IA y la corrigen, como un socio experimentado que revisa y corrige el trabajo de un pasante hasta que mejora.

### Ninguna fase se puede saltar

Esto es importante: no puedes tomar un modelo sin preentrenamiento y hacerle fine-tuning. Seria como meter a alguien al despacho sin que haya pisado una universidad. Tampoco puedes saltar el RLHF y esperar que el modelo responda bien a preguntas complejas. Seria como contratar a un recien egresado y mandarlo solo con tu cliente mas grande.

Cada fase construye sobre la anterior. Y cuando un modelo te da una respuesta que no te convence, no es porque sea tonto. Es porque en alguna de esas fases, para tu caso específico, le falto algo. Y ese "algo" muchas veces lo puedes compensar tu dandole mejor contexto en tu prompt, como veremos en el Capítulo 5.

## El corte de conocimiento: por que la IA no sabe lo que paso ayer

Hay algo que las tres fases anteriores tienen en común: todas ocurren ANTES de que tu uses el modelo. El entrenamiento no es en tiempo real. No es como una página de noticias que se actualiza cada hora.

Esto significa que cada modelo tiene lo que se llama un "corte de conocimiento" o training data cutoff. Es la fecha hasta la cual el modelo tiene información. Después de esa fecha, para efectos practicos, el mundo no existe para el.

Piensa en esto: si un modelo fue entrenado con datos hasta diciembre de 2024, y tu le preguntas sobre los cambios de la Miscelanea Fiscal 2026, literalmente no sabe. No es que se le olvido. No es que te está mintiendo a propósito. Es que esa información no existia cuando aprendio.

Y aquí viene el problema real: en lugar de decirte "no se", muchos modelos van a intentar responder con lo que saben. Van a darte información desactualizada como si fuera vigente. O van a inventar algo que suene razonable pero que no corresponde con la norma actual.

Por eso, para temas fiscales que cambian cada año --tasas, reglas, facilidades, resoluciones del SAT--, nunca confies ciegamente en la respuesta del modelo. Siempre verifica contra la fuente oficial. Este concepto lo vamos a profundizar cuando hablemos de alucinaciones y responsabilidad profesional en el Capítulo 12.

> **Concepto Clave**
> **Training data cutoff (corte de conocimiento):** Es la fecha limite de la información con la que fue entrenado un modelo. Todo lo que ocurrio después de esa fecha, el modelo simplemente no lo sabe.

## Código abierto vs código cerrado: lo que te importa en la práctica

Hay otra distincion que vale la pena que conozcas, aunque no seas programador. Los modelos de IA se dividen en dos grandes categorias: código cerrado y código abierto.

Un modelo de código cerrado es como usar Aspel, CONTPAQi o cualquier software propietario. Tu lo usas, metes datos, sacas reportes. Pero no puedes ver como funciona por dentro. No puedes modificarlo. No puedes instalarlo en tu propia computadora. Dependes completamente del proveedor. Los modelos de OpenAI (GPT), Anthropic (Claude) y Google (Gemini) son así.

Un modelo de código abierto es como una plantilla de Excel que alguien público y que cualquier persona puede descargar, modificar y adaptar a sus necesidades. Los modelos de Meta (Llama), Mistral o DeepSeek funcionan así. Alguien con conocimientos técnicos puede descargar el modelo, correrlo en su propia computadora y hasta ajustarlo para tareas especificas.

Para ti como contador, la diferencia práctica es está:

- **Código cerrado:** Mas fácil de usar, generalmente mejor rendimiento "de caja", pero tus datos pasan por los servidores de la empresa. Y dependes de sus politicas de privacidad.
- **Código abierto:** Mas control sobre tus datos (puedes correrlo localmente, sin internet), pero requiere conocimientos técnicos para instalarlo y generalmente necesita una computadora potente.

Si manejas información sensible de clientes --y como contador, siempre lo haces--, está distincion no es trivial. Saber que existen alternativas donde los datos no salen de tu equipo es importante, aunque hoy no las uses. Como veremos en el Capítulo 14, la etica y la privacidad en el uso de IA son temas que todo profesional debe tener en el radar.

## Por que los modelos mejoran con el tiempo

Seguro has notado que cada ciertos meses se anuncia una nueva versión de algún modelo. GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro... los nombres cambian, pero la lógica es la misma: cada nueva versión paso por las tres fases con mas datos, mejor fine-tuning y mas retroalimentacion humana.

Es como la diferencia entre tu como recien egresado y tu después de diez años de experiencia. Misma persona, misma base, pero con mas horas de vuelo.

Esto también significa que un prompt que te daba resultados mediocres hace seis meses puede darte resultados excelentes con un modelo mas reciente. No porque tu prompt haya cambiado, sino porque el modelo que lo interpreta es mejor.

## En la Práctica

Imagina que eres Adriana, contadora independiente en Queretaro, y un cliente te pregunta: "Oye, vi que salio una nueva facilidad del SAT para facturar gastos de gasolina. Me aplica?"

Tu instinto es preguntarle a la IA. Le escribes: "Cual es la nueva facilidad del SAT para deduccion de gasolina?" Y el modelo te responde con mucha seguridad... citando una regla de la Resolucion Miscelanea de 2024.

El problema: esa regla ya cambio. El modelo no lo sabe porque su corte de conocimiento es anterior a la actualizacion.

Si Adriana entiende el concepto de training data cutoff, no se traga la respuesta como verdad absoluta. La usa como punto de partida: "Ok, está era la regla antes. Ahora deja busco en la RMF vigente si cambio algo." Le ahorro tiempo al modelo de busqueda, pero hizo la verificación ella.

Eso es usar la IA como herramienta, no como oraculo. La IA te da el borrador; tu pones el criterio profesional.

## Mito vs Realidad

- **Mito:** La IA se actualiza sola y siempre tiene la información mas reciente.
- **Realidad:** Los modelos tienen un corte de conocimiento fijo. Todo lo posterior a esa fecha, no lo saben. Algunos modelos tienen acceso a internet para buscar información reciente, pero esa busqueda no es lo mismo que haber sido entrenados con esos datos: es mas superficial y puede contener errores.

- **Mito:** Si la IA da una mala respuesta, es porque la herramienta no sirve.
- **Realidad:** Muchas veces una mala respuesta significa que el modelo necesitaba mejor contexto de tu parte. Entender como aprende la IA te ayuda a darle la información que necesita para responderte bien.

---

### Lo que te llevas

- La IA aprende en tres fases (preentrenamiento, fine-tuning, RLHF) y ninguna se puede saltar. Entender esto te ayuda a saber por que responde como responde.
- Cada modelo tiene un corte de conocimiento: no sabe lo que paso después de su fecha de entrenamiento. Para temas fiscales que cambian cada año, siempre verifica con la fuente oficial.
- Existen modelos de código abierto y cerrado. La diferencia no es solo técnica: afecta donde quedan los datos de tus clientes.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA (ChatGPT, Claude, Gemini, el que tengas a la mano) y preguntale: "Cual es tu fecha de corte de conocimiento?" Anota la respuesta.
2. Ahora preguntale algo que sepas que cambio después de esa fecha. Por ejemplo: "Cual es la tasa de recargos vigente para 2026?" o "Que dice la Resolucion Miscelanea Fiscal 2026 sobre la cancelacion de CFDI?"
3. Compara la respuesta del modelo con la fuente oficial (DOF, página del SAT). Observa si el modelo te aviso que su información podria estar desactualizada o si te la presento como si fuera vigente.

### Si quieres ir mas lejos

Saber como aprende la IA es el primer paso. El segundo es saber como hablarle para que esas tres fases de entrenamiento trabajen a tu favor. En el pack de prompts para contadores, cada instrucción está diseñada considerando exactamente estos conceptos: le da al modelo el contexto fiscal mexicano que su preentrenamiento no cubre con suficiente profundidad.
