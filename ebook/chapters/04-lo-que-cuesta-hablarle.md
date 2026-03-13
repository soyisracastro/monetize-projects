# Capitulo 4: Lo que cuesta hablarle a la IA

<!--
Fuente: Newsletter #6
Concepto principal: Tokens como unidad de costo en modelos de IA
Terminos para glosario: token, tokens de entrada, tokens de salida, API, contexto, suscripcion, nivel gratuito
-->

Tengo un cliente --lo voy a llamar Don Ramon, por proteger al inocente-- que cada vez que me llama, me cuenta la historia completa de su negocio desde que lo fundo en 1998. Quien le vendio el local. Por que se peleo con su primer socio. Como le fue en la crisis del 2009. Y despues de quince minutos de contexto innecesario, me suelta la pregunta real: "Oye, y esa factura que me llego, la puedo deducir?"

Dos minutos de pregunta. Quince minutos de rollo.

Y yo, que cobro por hora, ya perdi tiempo que no recupero. Tiempo que podria haber dedicado a otro cliente, a revisar una declaracion, a lo que fuera. No es que Don Ramon sea mala persona. Es que no sabe que su forma de comunicarse tiene un costo.

Ahora imagina el caso contrario: la Licenciada Marta. Llama, va directo al grano. "Tengo un CFDI de un proveedor de servicios por $45,000 mas IVA, regimen 612, y quiero saber si me lo puedo deducir aunque el pago fue en efectivo." Treinta segundos. Toda la informacion que necesito. Puedo responderle en el momento.

La diferencia entre Don Ramon y la Licenciada Marta es exactamente la diferencia entre un mal prompt y un buen prompt. Y esa diferencia, cuando hablas con la IA, se mide en algo muy concreto: tokens.

## Que es un token (y por que te cuesta dinero)

Cada vez que le escribes algo a un modelo de IA, tu texto no llega tal cual. Antes de procesarlo, el modelo lo descompone en fragmentos pequenos llamados tokens. Un token no es exactamente una palabra. A veces es una palabra completa, a veces es un pedazo de palabra, a veces es un signo de puntuacion.

Como regla general, en espanol, una palabra equivale a entre 1 y 2 tokens. Un texto de 500 palabras son aproximadamente 375-700 tokens, dependiendo de la complejidad de las palabras.

Lo importante: cada token cuesta dinero. Tanto los que tu escribes (tokens de entrada) como los que el modelo te responde (tokens de salida).

> **Concepto Clave**
> **Token:** Es el fragmento minimo de texto que un modelo de IA procesa. Cada palabra se divide en uno o mas tokens. Procesar tokens tiene un costo real: pagas por lo que escribes y por lo que el modelo te responde.

## Tokens de entrada vs tokens de salida

Aqui hay un detalle que poca gente conoce y que importa mas de lo que parece: los tokens de salida cuestan mas que los de entrada. En algunos modelos, hasta tres o cuatro veces mas.

La logica tiene sentido si lo piensas en terminos contables. Leer un documento es mas rapido que redactar uno. Revisar una balanza te toma menos tiempo que elaborarla desde cero. El modelo hace mas trabajo generando una respuesta que leyendo tu pregunta.

Por eso, cuando le pides al modelo que te escriba un ensayo de cinco paginas sobre el tratamiento fiscal de los ingresos acumulables segun el Titulo II de la LISR, estas generando muchos tokens de salida. Y esos cuestan.

No significa que debas pedirle respuestas cortas siempre. Significa que debes ser consciente de que una respuesta de 2,000 palabras cuesta significativamente mas que una de 200. Y a veces, la de 200 es mas util.

> **Concepto Clave**
> **Tokens de entrada vs tokens de salida:** Los tokens de entrada son los que tu escribes; los de salida, los que el modelo genera. Los de salida cuestan mas porque el modelo hace mas trabajo al producir texto que al leerlo.

## Cuanto cuesta en la practica

Vamos a hablar de numeros, porque somos contadores y los numeros son lo nuestro.

Una conversacion tipica con un modelo de IA tiene entre 2,000 y 4,000 tokens en total (sumando lo que tu escribes y lo que el modelo responde). Con los precios de API de los modelos mas usados en 2025, eso cuesta entre 0.5 y 5 centavos de dolar por conversacion. Estamos hablando de fracciones de peso.

"Entonces, si es tan barato, por que me importa?"

Porque eso es UNA conversacion. Si usas la IA 50 veces al dia --que es perfectamente normal en un despacho activo--, el costo se multiplica. Y si tus prompts son ineficientes y necesitas tres intentos para obtener la respuesta que querias, estas triplicando el gasto.

Ahora, si usas un modelo con razonamiento avanzado --como veremos en el Capitulo 6--, los tokens de "pensamiento" tambien cuentan. Una consulta compleja puede usar 10,000 o 20,000 tokens facilmente. Y el costo ya no son fracciones de peso.

A escala de una empresa o un despacho con varios usuarios, esos centavos se convierten en cientos o miles de pesos al mes. Es como las comisiones bancarias: una no la sientes, pero al final del ano te preguntas a donde se fue todo ese dinero.

## Gratis vs de pago: que obtienes realmente

"Pero yo uso la version gratuita y no pago nada." Cierto. No pagas con dinero. Pero pagas de otras formas.

Los niveles gratuitos de los modelos de IA tienen limitaciones reales:

- **Limites de uso:** Solo puedes enviar cierto numero de mensajes por hora o por dia. En horas pico, te toca esperar.
- **Modelos menos potentes:** Generalmente te dan acceso al modelo basico, no al mas avanzado. La diferencia en calidad de respuesta puede ser notable, especialmente en temas tecnicos como fiscalidad.
- **Sin acceso a funciones avanzadas:** Cosas como analisis de documentos, generacion de imagenes o modelos con razonamiento extendido suelen estar reservadas para los planes de pago.

La suscripcion tipica ronda los $20 dolares al mes (aproximadamente $350-400 pesos mexicanos al tipo de cambio actual). Lo que obtienes a cambio: modelos mas potentes, mas mensajes, menos esperas y funciones adicionales.

La pregunta real no es "es caro o barato". La pregunta es: "cuanto vale mi tiempo?"

Si eres un contador que cobra $500 pesos la hora de consultoria y la IA te ahorra 30 minutos en una tarea, esos 30 minutos valen $250 pesos. La suscripcion de todo el mes se pago sola en media hora. Incluso si cobras menos, piensa en cuantas horas al mes te ahorra tener un asistente que escribe borradores, resume documentos y organiza informacion. Si la respuesta es mas de una hora, la cuenta es obvia.

## El verdadero costo de un mal prompt

Regresemos a Don Ramon y la Licenciada Marta.

Cuando Don Ramon le escribe a la IA, escribe algo asi:

"Hola, tengo una duda. Mira, es que yo tengo un negocio de papeleria desde hace muchos anos y siempre he facturado normal pero ahora un proveedor me mando una factura y no se si esta bien porque dice cosas que no entiendo y me preocupa que el SAT me vaya a decir algo. Tu que opinas?"

Eso son muchos tokens de entrada que no aportan informacion util. El modelo va a responder con algo generico --"depende del tipo de factura, del regimen fiscal..."-- que tampoco sirve. Don Ramon va a tener que aclarar. Otro mensaje. Mas tokens. Y al tercer intento, tal vez llegue a una respuesta decente.

Tres rondas de conversacion. Seis bloques de tokens (tres de entrada, tres de salida). Costo multiplicado por tres. Tiempo perdido.

La Licenciada Marta escribe:

"Soy contadora en Mexico. Mi cliente esta en el regimen 612 (personas fisicas con actividades empresariales). Recibio un CFDI por $45,000 + IVA de un proveedor de servicios de limpieza. El pago fue en efectivo. Quiero saber: 1) Es deducible para ISR? 2) Hay algun limite por pago en efectivo segun el articulo 27 de la LISR? Responde de forma concisa."

Una ronda. Un bloque de entrada, uno de salida. Respuesta precisa al primer intento. La diferencia en costo y en tiempo es brutal.

> **Concepto Clave**
> **Ventana de contexto:** Es la cantidad maxima de tokens que un modelo puede procesar en una sola conversacion (tanto lo que tu escribes como lo que el modelo responde). Si te pasas del limite, el modelo empieza a "olvidar" lo que le dijiste al principio.

## Por que mas largo no siempre es mejor

Hay una tentacion natural: si la IA me puede escribir mucho, que me escriba mucho. Pero mas tokens de salida no significan mejor respuesta. De hecho, muchas veces es al reves.

Una respuesta de 2,000 palabras sobre un tema que se resuelve en 200 tiene un problema doble: te costo mas y te toca a ti filtrar el relleno para encontrar la informacion util. Es como recibir un dictamen de 50 paginas cuando lo unico que necesitabas era un parrafo con la conclusion.

Cuando redactes tus prompts, no tengas miedo de pedir concision. "Responde en maximo 3 parrafos" o "Dame solo la conclusion sin explicar el razonamiento" son instrucciones perfectamente validas que te ahorran tokens y tiempo. En el Capitulo 8 vamos a ver como estructurar instrucciones de sistema que controlan la extension y el formato de las respuestas.

## En la Practica

Ricardo tiene un despacho en Monterrey con tres auxiliares contables. Los cuatro usan la IA a diario para redactar correos a clientes, resumir disposiciones fiscales y preparar borradores de papeles de trabajo.

Cada uno hace unas 30 consultas al dia. Son 120 consultas diarias del despacho. Si cada consulta promedio usa 3,000 tokens y los prompts son ineficientes (requieren dos intentos en promedio), estamos hablando de 720,000 tokens al dia. Al mes (22 dias habiles), son casi 16 millones de tokens.

Con precios tipicos de API, eso puede representar entre $500 y $3,000 pesos mensuales, dependiendo del modelo que usen. No es una fortuna, pero tampoco es trivial.

Ahora, si Ricardo entrena a su equipo para escribir mejores prompts --directos, con contexto, con formato especifico-- y reducen los intentos de dos a uno en promedio, acaban de cortar el consumo a la mitad. Mismo resultado, mitad de costo. Es exactamente la misma logica que cuando optimizas los procesos del despacho para reducir horas de trabajo.

## Mito vs Realidad

- **Mito:** Usar la IA es gratis, no cuesta nada.
- **Realidad:** Siempre hay un costo. Si usas la version gratuita, la empresa lo absorbe a cambio de limitarte el acceso y usar tus datos para mejorar el modelo. Si pagas, lo pagas tu. Como todo en esta vida, no hay almuerzo gratis.

- **Mito:** Si pago la suscripcion, puedo usar la IA de forma ilimitada.
- **Realidad:** Incluso los planes de pago tienen limites de uso, especialmente para los modelos mas avanzados. Un prompt ineficiente sigue desperdiciando tu cuota de mensajes y tu tiempo, aunque no te cobren por token individual.

---

### Lo que te llevas

- Cada interaccion con la IA se mide en tokens, y los tokens cuestan dinero. Los de salida cuestan mas que los de entrada porque el modelo trabaja mas al generar texto.
- La diferencia entre un buen prompt y uno malo no es solo la calidad de la respuesta: es el costo. Un prompt directo y con contexto te ahorra dinero, tiempo y frustracion.
- La decision de usar un plan gratuito o de pago depende de cuanto vale tu tiempo. Si la IA te ahorra mas de una hora al mes, la suscripcion probablemente se paga sola.

### Pruebalo tu mismo

1. Toma una pregunta que le hagas frecuentemente a la IA y escribela de dos formas: una vaga y larga (como Don Ramon), otra precisa y con contexto (como la Licenciada Marta).
2. Envia ambas versiones al modelo y compara las respuestas. Fijate en cual te da una respuesta util al primer intento y cual requiere aclaraciones.
3. Pidele al modelo que cuente los tokens de cada version: "Cuantos tokens aproximados tiene este texto?" Vas a ver la diferencia en numeros concretos.

### Si quieres ir mas lejos

Cada uno de los prompts del pack para contadores fue escrito pensando en eficiencia de tokens: maximo contexto util en el minimo espacio necesario. Si quieres ver como se estructura un prompt que no desperdicia ni una palabra, ahi tienes 24 ejemplos reales aplicados al trabajo diario del despacho.
