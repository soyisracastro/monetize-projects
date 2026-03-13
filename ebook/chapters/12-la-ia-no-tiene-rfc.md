# Capitulo 12: La IA no tiene RFC ni responde ante el SAT. Tu si

<!--
Fuente: Newsletter #5
Concepto principal: Alucinaciones (Hallucinations)
Terminos para glosario: Alucinacion, Hallucination, Verificacion, Groundedness
-->

Todos tenemos un colega asi.

El que te dice con total seguridad: "No, eso ya lo derogaron en la reforma de 2022". O: "El articulo 27, fraccion VIII de la LISR dice claramente que si es deducible". O: "La fecha limite para eso es el 17 de abril, no el 17 de marzo". Te lo dice con tal conviccion que no le preguntas. Le crees. Porque suena seguro, porque habla rapido, porque nunca titubea.

Y tres dias despues, cuando lo verificas porque algo no te cuadra, resulta que la fraccion no era la VIII sino la III. O que la fecha si era en marzo. O que la disposicion que supuestamente derogaron sigue vigente y aplicando.

Lo confrontas y te sale con: "Ah, me confundi, es que estaba pensando en otro articulo". Y ya. Sin mas. Como si confundir una fraccion de la LISR fuera lo mismo que equivocarse de mesa en un restaurante.

## El colega que nunca dice "no se"

Pues la IA hace exactamente lo mismo. Y lo hace por la misma razon: no porque sea malintencionada, sino porque esta disenada para darte una respuesta, no para buscar la verdad.

Recuerda lo que vimos en el Capitulo 3 sobre como aprende la IA. Todo su entrenamiento es un ciclo de predecir y ajustar. El modelo nunca "busca" la respuesta correcta en una base de datos de hechos verificados. Lo que hace es calcular cual es la siguiente palabra mas probable dado todo lo que le dijiste antes. Es un sistema de prediccion estadistica sofisticadisimo, pero prediccion al fin.

Y aqui esta el problema: cuando el modelo no tiene suficiente informacion para darte la respuesta correcta, no se queda callado. No dice "mira, de esto no estoy seguro, dejame checarlo". Hace lo que tu colega: te da una respuesta con la misma confianza con la que te daria una que si es correcta.

Ese fenomeno tiene nombre: alucinacion.

> **Concepto Clave**
> **Alucinacion (Hallucination):** Es cuando un modelo de IA genera informacion que suena correcta y se presenta con total confianza, pero que es parcial o completamente falsa. No es un error aleatorio: es una consecuencia estructural de como funcionan los modelos de lenguaje.

La palabra "alucinacion" es perfecta porque describe exactamente lo que pasa. El modelo no esta mintiendo. No sabe que esta diciendo algo incorrecto. Para el, esa respuesta es la mas probable dado el contexto. El modelo esta viendo cosas que no existen, igual que alguien que alucina.

Y esto es lo mas importante que quiero que entiendas: la confianza del modelo no tiene ninguna correlacion con la precision de su respuesta. Cero. Nada. Te dice "el articulo 28, fraccion V del CFF establece que..." con la misma seguridad si el articulo existe como si se lo acaba de inventar.

## Esto no es un bug. Es una caracteristica

Aqui es donde mucha gente se pierde. Cada cierto tiempo sale alguien diciendo que la nueva version de tal modelo ya "resolvio" el problema de las alucinaciones. Hace poco, en un grupo de colegas, alguien compartio una actualizacion de una herramienta y dijo: "100% libre de alucinacion".

Eso no existe todavia. Y probablemente no existira pronto.

No es que los ingenieros de las empresas de IA sean flojos o incompetentes. Es que la alucinacion es consecuencia directa de la arquitectura de estos modelos. Mientras el modelo funcione prediciendo la siguiente palabra mas probable, siempre existira la posibilidad de que esa prediccion sea incorrecta pero suene perfecta.

Piensalo en terminos contables: es como si tuvieras un sistema que calcula el ISR de tus clientes con base en patrones estadisticos de miles de declaraciones anteriores, en lugar de aplicar la ley articulo por articulo. La mayor parte del tiempo va a dar un resultado razonable. Pero de vez en cuando va a calcular algo que suena logico, que parece correcto, pero que no tiene fundamento legal real.

Los modelos han mejorado mucho. Alucinan menos que antes. Pero "menos" no es "nunca". Y en materia fiscal, la diferencia entre "casi siempre correcto" y "siempre correcto" puede ser una multa, un requerimiento del SAT o la perdida de un cliente.

## Lo que la IA inventa en materia fiscal

Voy a ser especifico porque esto lo he visto con mis propios ojos y necesitas saber que tipo de errores comete.

**Articulos del CFF que no existen.** Le preguntas a la IA sobre algun tema fiscal y te cita un "articulo 42 Bis del Codigo Fiscal de la Federacion" con toda la seguridad del mundo. Suena legitimo. Tiene la estructura correcta. Pero no existe. El modelo junto palabras que estadisticamente van juntas en textos fiscales y creo una referencia ficticia.

**Tasas de ISR incorrectas para el ejercicio.** Te da una tasa de retencion del 30% para un tipo de ingreso que en realidad tributa al 35%, o viceversa. El numero que te da existio en algun momento, quiza en otro ejercicio fiscal, quiza para otro tipo de contribuyente. Pero no aplica al caso que le estas preguntando.

**Leyes derogadas citadas como vigentes.** El modelo fue entrenado con textos de diferentes epocas. Tiene informacion de leyes que ya no estan vigentes mezclada con legislacion actual. A veces te cita una disposicion que fue derogada hace tres anos como si siguiera aplicando. No distingue entre lo que era y lo que es.

**Fechas de publicacion en el DOF inventadas.** Te dice "esta disposicion fue publicada en el Diario Oficial de la Federacion el 15 de marzo de 2024" y resulta que ese dia no se publico nada relevante. La fecha suena plausible, el formato es correcto, pero es completamente fabricada.

Cada uno de estos errores, si no lo verificas, se convierte en un problema con tu nombre encima. Porque la IA no tiene RFC. No firma declaraciones. No responde requerimientos del SAT. Tu si.

## Tu lista de verificacion antes de confiar

Despues de meses de usar la IA como herramienta de trabajo en el despacho, he desarrollado un proceso que hoy es automatico para mi. Antes de usar cualquier dato fiscal que me da la IA, lo paso por estos cinco filtros:

**1. Verifica los numeros de articulo en la ley real.** Si la IA te cita el "articulo 27, fraccion III de la LISR", abre la LISR y confirma que esa fraccion dice lo que la IA afirma que dice. No asumas. Verifica. He encontrado fracciones correctas con contenido equivocado y fracciones inventadas con contenido que suena perfecto.

**2. Confirma tasas y porcentajes contra las tablas oficiales.** Si la IA te da una tasa de retencion, una tarifa, un porcentaje de deduccion, verificalo contra la tabla oficial vigente para el ejercicio fiscal que estas trabajando. Las tasas cambian, los limites se actualizan, y el modelo no siempre tiene la version mas reciente.

**3. Revisa las fechas contra publicaciones del DOF.** Si la IA te dice que algo se publico en una fecha especifica, busca esa publicacion. El DOF tiene un buscador. Toma treinta segundos. Si la publicacion no existe, todo lo que se construye sobre esa referencia se cae.

**4. Cruza la informacion con criterios oficiales del SAT.** El SAT publica criterios normativos y no vinculativos. Si la IA te da una interpretacion, verificala contra estos criterios. A veces el modelo te da una interpretacion que suena razonable pero que va directamente en contra de un criterio publicado.

**5. Si cita una fuente, verifica que la fuente exista.** Esto parece obvio pero es el error mas comun. La IA te dice "segun la Resolucion Miscelanea Fiscal para 2026, regla 2.7.1.35" y tu asumes que si te dio el numero de regla, es porque la leyo. No. Verifica que esa regla exista y que diga lo que la IA afirma.

Cinco pasos. Menos de diez minutos en total. Y la diferencia entre un dato verificado y una alucinacion con apariencia de legalidad.

## En la Practica

La contadora Elena tiene un cliente nuevo, persona moral del regimen general, que quiere saber si puede deducir los gastos de un viaje de negocios al extranjero. Elena decide usar la IA para hacer una primera investigacion.

Le pregunta al modelo y recibe una respuesta impecable: cita el articulo 28 de la LISR, menciona los requisitos de deducibilidad, habla de la documentacion comprobatoria, e incluso le da los limites de viaticos exentos para viajes al extranjero con el monto especifico en pesos.

Elena, que no ha verificado, le manda un resumen al cliente con los montos. El cliente planea su viaje y sus gastos con base en esos numeros.

Dos meses despues, al preparar la declaracion anual, Elena revisa los montos contra la ley vigente. Los limites que la IA le dio no corresponden al ejercicio actual. Eran de dos ejercicios atras. La diferencia es significativa y el cliente ya gasto mas de lo deducible.

Si Elena hubiera aplicado el paso 2 de la lista de verificacion -- confirmar tasas y porcentajes contra tablas oficiales -- habria detectado el error en treinta segundos. Antes de mandarle cualquier cosa al cliente. Antes de que el cliente tomara decisiones con datos incorrectos.

La IA le dio un excelente punto de partida. La estructura del analisis era correcta. Los articulos aplicables eran los correctos. Pero un dato especifico -- el monto -- estaba mal. Y en fiscalidad, un dato especifico mal puede costar dinero real.

## Como reducir el riesgo (sin dejar de usar la IA)

No estoy diciendo que no uses la IA. Estoy diciendo que la uses con los ojos abiertos.

Hay dos mecanismos que reducen significativamente las alucinaciones. No las eliminan. Las reducen.

El primero lo vimos en el Capitulo 10: RAG. Cuando le das al modelo documentos especificos -- la ley, el reglamento, la miscelanea -- y le dices que responda solo con base en esos documentos, el modelo tiene menos espacio para inventar. En lugar de predecir que diria la ley, lee lo que dice la ley. Es como la diferencia entre pedirle a alguien que te cuente de memoria lo que dice un articulo y pedirle que lo lea en voz alta con el documento enfrente.

El segundo lo vimos en el Capitulo 6: la cadena de pensamiento. Cuando obligas al modelo a razonar paso a paso, cada paso funciona como un punto de verificacion. Si en el paso 3 dice algo que contradice el paso 1, tiene la oportunidad de detectarlo y corregirse. No es infalible, pero reduce errores de forma significativa.

Y el tercero eres tu. Tu criterio profesional. Tu conocimiento de la ley. Tu capacidad de leer una respuesta y detectar cuando algo no cuadra. La IA es una herramienta poderosa, pero necesita un profesional detras que sepa distinguir entre una respuesta correcta y una alucinacion bien escrita.

> **Concepto Clave**
> **Groundedness (Fundamentacion):** Es la medida en que una respuesta de la IA esta basada en informacion real y verificable, en lugar de ser generada por prediccion estadistica. Una respuesta "grounded" se puede rastrear hasta su fuente original. Una respuesta no fundamentada puede sonar perfecta pero no tener respaldo real.

## Mito vs Realidad

- **Mito:** "La nueva version de tal modelo ya no alucina. Es 100% confiable."
- **Realidad:** Ningun modelo de lenguaje actual esta libre de alucinaciones. Los modelos mas recientes alucinan menos, pero la posibilidad siempre existe porque es inherente a como funcionan. En materia fiscal, "casi siempre correcto" no es suficiente.

- **Mito:** "Si la IA te cita un articulo de ley con numero y fraccion, es porque lo verifico."
- **Realidad:** La IA no verifica nada. Predice que combinacion de palabras es mas probable. Puede inventar un numero de articulo que suena perfecto y citarlo con total confianza. La unica verificacion real es la tuya.

---

### Lo que te llevas

- La alucinacion no es un error que se va a corregir en la proxima actualizacion. Es una consecuencia estructural de como funcionan los modelos de lenguaje. La confianza con la que te da una respuesta no tiene relacion con que tan correcta es.
- Antes de usar cualquier dato fiscal generado por IA, pasalo por los cinco filtros: verifica articulos, confirma tasas, revisa fechas, cruza con criterios del SAT, y si cita una fuente, confirma que exista.
- La IA es un primer borrador extraordinario, no una fuente de verdad. Usala para investigar, estructurar y analizar. Pero la firma en la declaracion es tuya, y la responsabilidad ante el SAT tambien.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA y preguntale: "Cuales son los requisitos de deducibilidad de los gastos de viaje al extranjero para una persona moral del regimen general segun la LISR vigente? Dame los montos especificos de viaticos exentos."
2. Toma la respuesta y verifica cada dato contra la ley vigente. Los articulos que cito, existen? Las fracciones dicen lo que el modelo afirma? Los montos son correctos para el ejercicio fiscal actual?
3. Anota cuantos datos eran correctos y cuantos no. Ese ejercicio te va a calibrar mejor que cualquier articulo sobre que tan confiable es la IA en temas fiscales.

### Si quieres ir mas lejos

Los prompts del Pack de Prompts para Contadores ya incluyen instrucciones que le piden al modelo citar fuentes especificas y senalar cuando no tiene certeza. Eso no elimina las alucinaciones, pero las hace mas faciles de detectar. Es como ponerle un auxiliar a cada respuesta en lugar de recibir solo el saldo final.
