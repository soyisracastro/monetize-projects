# Capítulo 2: No todos los modelos son iguales

<!--
Fuente: Newsletter #2
Concepto principal: Parámetros, modelos frontier vs modelos pequeños, y cómo elegir
Términos para glosario: parámetros, modelo frontier, benchmark, modelo open source, LMArena
-->

Imagínate que tienes una duda fiscal complicada. De esas que te quitan el sueño. Un cliente persona moral con operaciones en dos regímenes, ingresos acumulables que no cuadran con los CFDI emitidos, y el SAT ya mandó un requerimiento citando el artículo 42 del CFF.

Tienes dos opciones para pedir una opinión.

La primera: le preguntas al practicante que lleva tres meses en el despacho. Acaba de salir de la universidad, tiene buena actitud, sabe lo básico. Te va a dar una respuesta. Tal vez hasta suene convincente.

La segunda: se la planteas al socio de una firma con quince años de experiencia en auditoría fiscal. Ha visto cientos de casos como este, conoce los criterios del Tribunal Federal de Justicia Administrativa, sabe qué argumentos funcionan y cuáles no.

Los dos te van a responder. Pero la distancia entre ambas respuestas es enorme. Y tú lo sabes antes de preguntar.

Con los modelos de IA pasa exactamente lo mismo. Todos se llaman "inteligencia artificial". Todos tienen una cajita donde escribes y te responden. Pero por dentro son completamente distintos.

## La experiencia acumulada de un modelo

En el Capítulo 1 vimos que un LLM es una máquina de predicción de palabras. Ahora la pregunta es: qué hace que un modelo prediga mejor que otro.

La respuesta está en los parámetros.

Un parámetro es, en términos muy simplificados, un valor numérico que el modelo ajustó durante su entrenamiento. Piensa en cada parámetro como una pequeña pieza de "experiencia" que el modelo acumuló al leer texto. Cuantos más parámetros tiene un modelo, más patrones pudo capturar, más matices puede distinguir, y más capacidad tiene para manejar situaciones complejas.

Volvamos a la analogía del despacho. El practicante de tres meses ha visto tal vez 50 declaraciones. El socio con quince años ha visto miles. Cuando llega un caso raro, el practicante te da una respuesta basada en lo poco que ha visto. El socio reconoce el patrón porque ya lo vivió antes, quizás diez veces, en diferentes variantes. No es que sea más inteligente. Es que tiene más experiencia acumulada.

Los parámetros son esa experiencia acumulada, pero medida en números. Un modelo pequeño puede tener unos pocos miles de millones de parámetros. Un modelo frontier puede tener cientos de miles de millones, o más (muchas empresas ya no publican el número exacto, pero las diferencias en capacidad son evidentes).

> **Concepto Clave**
> **Parámetros:** Los valores numéricos que un modelo de IA ajusta durante su entrenamiento. Representan los patrones aprendidos. A mayor cantidad de parámetros, mayor capacidad del modelo para manejar tareas complejas, aunque no es el único factor que determina la calidad.

## No solo es cuestión de tamaño

Ahora, sería fácil pensar que más parámetros siempre significa mejor modelo. Pero la realidad tiene más matices, igual que en un despacho.

Un socio con quince años de experiencia en auditoría fiscal no necesariamente es el mejor para llevar un caso de derecho laboral. Tiene mucha experiencia, sí, pero en un área específica. Lo mismo pasa con los modelos: cómo fueron entrenados, con qué datos, y qué ajustes posteriores recibieron importa tanto como el tamaño bruto.

Además, las empresas que desarrollan estos modelos han descubierto que con técnicas de entrenamiento más sofisticadas, modelos relativamente más pequeños pueden rendir igual o mejor que modelos gigantes en ciertas tareas. Es como el contador joven que se especializó a fondo en un tema y, en ese tema puntual, puede darle batalla al socio más experimentado.

Dicho esto, para las tareas complejas que un contador enfrenta a diario (interpretar legislación fiscal, analizar criterios normativos, redactar fundamentos legales), los modelos con más capacidad siguen teniendo una ventaja clara. La diferencia se nota especialmente cuando la tarea requiere seguir instrucciones largas, mantener coherencia a lo largo de un documento extenso, o manejar múltiples variables al mismo tiempo.

## Modelos frontier vs modelos pequeños

En la industria se habla de "modelos frontier" para referirse a los modelos más capaces que existen en un momento dado. Son los que empujan los límites de lo que la IA puede hacer. Hoy, los modelos frontier incluyen los modelos más recientes de OpenAI, Claude de Anthropic, y Gemini de Google, entre otros.

En el otro extremo están los modelos más pequeños o ligeros. Algunos son gratuitos, otros son de código abierto (como los modelos Llama de Meta), y muchos pueden correr en hardware mucho más modesto. No son malos. Simplemente están diseñados para tareas diferentes.

> **Concepto Clave**
> **Modelo frontier:** El modelo de IA más avanzado disponible en un momento dado. Representa el estado del arte en capacidad, pero también suele ser el más costoso de usar. Lo que hoy es frontier, en seis meses puede ser superado.

La clave está en saber cuándo necesitas uno y cuándo necesitas el otro.

Para redactar un correo sencillo de seguimiento a un cliente, un modelo pequeño y gratuito probablemente te da un resultado perfectamente aceptable. Para analizar las implicaciones fiscales de una reestructura corporativa bajo los artículos 14-B del CFF y 161 de la LISR, vas a querer el modelo más capaz que puedas usar. Pedirle al practicante que resuelva el caso de reestructura no es ser eficiente, es arriesgarte a un resultado que vas a tener que rehacer desde cero.

## Cómo saber qué modelo es mejor: benchmarks y LMArena

Aquí es donde muchos contadores (y profesionistas en general) se pierden. Hay tantos modelos, con tantas versiones, que parece imposible saber cuál es el "mejor". Y la verdad es que no hay uno que sea el mejor para todo. Pero sí hay formas de evaluar y comparar.

La industria usa lo que se llama benchmarks: pruebas estandarizadas que miden el desempeño de los modelos en diferentes tareas. Es como los exámenes de certificación para contadores. No te dicen todo sobre la capacidad de una persona, pero te dan un punto de referencia objetivo.

Algunos benchmarks miden razonamiento matemático, otros miden comprensión de texto, otros miden capacidad de seguir instrucciones complejas, y otros miden conocimiento especializado. Un modelo puede ser excelente en razonamiento pero mediocre en seguimiento de instrucciones. Por eso no existe "el mejor modelo" en abstracto: depende de qué necesitas que haga.

Una herramienta particularmente útil es LMArena (anteriormente conocida como LMSYS Chatbot Arena). Funciona como un sistema de votación donde personas reales interactúan con dos modelos al mismo tiempo, sin saber cuál es cuál, y eligen cuál dio la mejor respuesta. Es como una cata a ciegas, pero de modelos de IA. El resultado es un ranking que refleja la preferencia humana real, no solo métricas técnicas.

> **Concepto Clave**
> **Benchmark:** Una prueba estandarizada que mide el desempeño de un modelo de IA en tareas específicas. Sirve como punto de referencia para comparar modelos, aunque ningún benchmark captura toda la realidad de cómo funciona un modelo en la práctica.

No necesitas convertirte en experto en benchmarks. Pero sí te conviene saber que existen, para que cuando alguien te diga "este modelo es el mejor" puedas preguntar: mejor para qué, según qué medición, y desde cuándo.

## El mapa de los modelos (que cambia cada semana)

> **Nota importante:** La siguiente información refleja el estado general del mercado y puede cambiar rápidamente. Considérala una fotografía, no un mapa permanente.

A grandes rasgos, las familias de modelos más relevantes hoy son:

**GPT (OpenAI):** La familia más conocida. Sus modelos más recientes son de los más capaces del mercado, especialmente en generación de texto y seguimiento de instrucciones. La serie "o" introduce capacidades de razonamiento extendido. Es probablemente el que más has escuchado mencionar.

**Claude (Anthropic):** Destaca por su capacidad de manejar documentos muy largos y seguir instrucciones detalladas con precisión. Muchos profesionistas que trabajan con textos extensos (contratos, legislación, dictámenes) encuentran que Claude maneja mejor ese tipo de tareas. También es reconocido por generar respuestas más cuidadosas y matizadas.

**Gemini (Google):** Su integración con el ecosistema de Google (Drive, Gmail, Docs) es su diferenciador principal. Si tu despacho vive en Google Workspace, Gemini puede acceder directamente a tu información. Sus modelos más grandes compiten con los mejores del mercado.

**Llama (Meta):** Modelos de código abierto que cualquiera puede usar y modificar. Son la opción para empresas o desarrolladores que quieren tener control total sobre el modelo, incluso correrlo en sus propios servidores. Probablemente no vas a usar Llama directamente, pero muchas herramientas que uses pueden estar construidas sobre estos modelos.

Cada familia tiene múltiples versiones y tamaños. Y cada pocas semanas aparecen actualizaciones que cambian el panorama. Lo que hoy es el modelo más capaz, mañana puede ser el segundo o el tercero. Por eso, como mencionamos en el Capítulo 1, vale más entender los conceptos que memorizar nombres de modelos.

## La ecuación costo vs calidad

Esto nos lleva a una realidad práctica: los modelos más capaces cuestan más. No siempre en dinero directo (muchos ofrecen planes gratuitos limitados), pero sí en alguna combinación de suscripción mensual, costo por uso, o límites de cuánto puedes usarlos.

Piénsalo como las herramientas de tu despacho. Puedes hacer una declaración anual a mano con las tablas impresas del DOF. Funciona. Pero usas un software porque el tiempo que te ahorra justifica el costo. Con los modelos de IA es lo mismo: el costo de un modelo más capaz se justifica cuando el valor de la tarea lo amerita.

La trampa en la que caen muchos es usar el modelo gratuito para todo y concluir que "la IA no sirve para cosas complejas". Es como si un despacho le diera todos los clientes, incluidos los más grandes, al practicante de tres meses, y luego se quejara de que "el personal nuevo ya no viene preparado".

El mejor prompt del mundo, ejecutado en el modelo equivocado, te va a dar una respuesta mediocre. Es como tener la mejor receta de cocina y prepararla con ingredientes de mala calidad. La receta no es el problema. El ingrediente sí.

Como veremos en el Capítulo 5, la forma en que le comunicas al modelo lo que necesitas es fundamental. Pero el modelo que elijas es el primer paso. Si la base es débil, ninguna instrucción, por brillante que sea, va a compensar.

## En la Práctica

Carlos tiene un despacho en Monterrey. Usa un modelo gratuito para todo: desde redactar correos hasta analizar las implicaciones del artículo 76 de la LISR para un cliente que realiza operaciones con partes relacionadas.

Para los correos, funciona perfecto. El modelo le da un borrador limpio en segundos. Pero cuando le pide que analice si las operaciones de su cliente cumplen con los requisitos de documentación de precios de transferencia conforme al artículo 179 de la LISR, la respuesta es superficial, mezcla conceptos de diferentes jurisdicciones, y omite consideraciones clave como los métodos establecidos en el artículo 180.

Carlos empieza a pensar que "la IA no sirve para temas fiscales complejos". Pero lo que realmente pasa es que está usando el practicante de tres meses para un caso que necesita al socio con quince años de experiencia.

Cuando prueba el mismo prompt con un modelo frontier, la diferencia es notable. El análisis tiene más estructura, cita los artículos correctos, distingue entre los métodos de precios de transferencia, y hasta señala puntos que Carlos debería verificar con las disposiciones vigentes. Sigue sin ser un producto final (Carlos tiene que validar todo, porque como veremos en el Capítulo 12, la responsabilidad profesional sigue siendo suya), pero es un punto de partida sólido que le ahorra horas de redacción.

La lección de Carlos no es que necesita pagar por el modelo más caro para todo. Es que necesita elegir el modelo adecuado para cada tarea. Correos rutinarios con el modelo gratuito. Análisis fiscal complejo con el modelo más capaz que tenga disponible.

## Mito vs Realidad

- **Mito:** Todos los modelos de IA son básicamente iguales; la diferencia es solo la marca.
- **Realidad:** Los modelos varían enormemente en capacidad, tamaño, entrenamiento y áreas de fortaleza. Elegir el modelo correcto para la tarea correcta es una decisión que afecta directamente la calidad del resultado que obtienes.

- **Mito:** El modelo más caro siempre es el mejor para cualquier tarea.
- **Realidad:** Un modelo más pequeño y económico puede ser perfectamente adecuado para tareas rutinarias. La habilidad está en saber cuándo necesitas la potencia de un modelo frontier y cuándo no. Usar el modelo más caro para redactar un correo de seguimiento es como contratar a un fiscalista senior para capturar facturas.

---

### Lo que te llevas

- Los modelos de IA se diferencian por sus parámetros (experiencia acumulada), su entrenamiento, y sus áreas de fortaleza. "Inteligencia artificial" no es una sola cosa: es un ecosistema diverso donde elegir importa.
- Para tareas simples y rutinarias, un modelo gratuito o pequeño puede ser suficiente. Para análisis fiscal complejo, redacción de fundamentos legales, o interpretación de normatividad, los modelos frontier marcan una diferencia real que justifica su costo.
- El mejor prompt con el modelo equivocado produce resultados mediocres. Antes de perfeccionar tus instrucciones (que es igualmente importante, como veremos en los Capítulos 8 a 11), asegúrate de que estás usando un modelo con la capacidad que tu tarea requiere.

### Pruébalo tú mismo

1. Toma una tarea sencilla y una compleja de tu trabajo diario. La sencilla puede ser "redacta un correo recordando al cliente que envíe su constancia de situación fiscal". La compleja puede ser "explica las diferencias entre el régimen de RESICO y el régimen general de ley para una persona física con actividad empresarial que factura $3 millones anuales, considerando ISR e IVA".
2. Prueba ambas tareas en un modelo gratuito y en un modelo de pago (si tienes acceso). Compara la profundidad, precisión y utilidad de cada respuesta.
3. Nota el patrón: en la tarea sencilla, la diferencia entre modelos es mínima. En la compleja, la diferencia puede ser la que existe entre un borrador que tienes que rehacer y un borrador que solo necesitas ajustar.

### Si quieres ir más lejos

Saber qué modelo usar es el primer paso. El segundo es saber qué decirle. Los 25 prompts del Pack para Contadores están diseñados para funcionar con modelos de alta capacidad y sacarles el máximo provecho en tareas fiscales y contables reales. Cada prompt ya incorpora el nivel de contexto y especificidad que estos modelos necesitan para darte resultados que de verdad puedas usar en tu despacho.
