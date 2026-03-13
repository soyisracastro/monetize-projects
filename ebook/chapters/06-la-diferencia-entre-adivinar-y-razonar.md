# Capitulo 6: La diferencia entre adivinar y razonar

<!--
Fuente: Newsletter #7
Concepto principal: Chain of Thought (Cadena de Pensamiento)
Terminos para glosario: Chain of Thought, reasoning tokens, modelos de razonamiento, modelos rapidos
-->

La semana pasada tuve una entrevista de trabajo en una startup. Una empresa con una actividad que nunca he llevado en el despacho. Industria completamente nueva para mi. Operaciones que no habia visto antes. El tipo de situacion donde un impostor se queda callado y reza por que no le pregunten nada tecnico.

Pero cuando llegaron las preguntas de contabilidad, las pude responder. No porque conociera el giro. No porque hubiera estudiado esa industria la noche anterior. Sino porque tenia algo mas basico y mas poderoso: la logica contable base. Dame los detalles de cualquier operacion y puedo determinar si afecta al activo, al pasivo, al capital o a resultados. No importa si es una startup de criptomonedas, una constructora o una taqueria. La estructura financiera funciona igual.

Lo que hice en esa entrevista fue razonar paso a paso. Primero entender la operacion. Luego clasificarla. Luego aplicar el marco contable que ya conozco. Y finalmente llegar a la respuesta. No adiviné. Razoné. Y esa diferencia, que para ti como contador es obvia, es exactamente lo que separa a un modelo de IA bueno de uno excepcional.

## Pensar antes de hablar

Los primeros modelos de IA funcionaban como ese contador que te da el saldo directo sin mostrarte como llego ahi. Le preguntabas algo y te escupia una respuesta de golpe. A veces acertaba. A veces no. Y cuando no acertaba, no tenias forma de saber en que parte del proceso se habia equivocado, porque no habia proceso visible. Era un numero final sin auxiliar.

Los modelos mas recientes hacen algo distinto. Antes de darte la respuesta, razonan. Generan pasos intermedios, una secuencia logica interna que se parece mucho a como tu piensas cuando resuelves un caso fiscal nuevo:

"El usuario me pregunta X. Para responder necesito considerar A. Si A es cierto, entonces B aplica. Pero B tiene una excepcion cuando C. Verifico si C aplica en este caso. No aplica, entonces la respuesta es Z."

Eso es lo que los tecnicos llaman cadena de pensamiento. Y no es un detalle menor. Es la diferencia entre un modelo que adivina y uno que razona.

> **Concepto Clave**
> **Chain of Thought (Cadena de Pensamiento):** Es la capacidad de un modelo de IA para generar pasos intermedios de razonamiento antes de dar una respuesta final. En lugar de saltar directamente a la conclusion, el modelo "piensa en voz alta", lo que reduce errores y permite verificar su logica.

¿Por que importa esto? Porque ese proceso de razonamiento intermedio es lo que reduce las alucinaciones en preguntas complejas. Cuando el modelo se obliga a razonar paso a paso, se auto-verifica durante el camino. Si en el paso 3 se contradice con algo que establecio en el paso 1, tiene oportunidad de corregirse antes de darte la respuesta final.

Es como la diferencia entre el contador que te muestra el auxiliar completo y el que solo te da el total. Al segundo le preguntas como llego ahi y te dice "ah, es que me confundi". Al primero le puedes seguir la pista, identificar exactamente donde esta el error si lo hay, y confiar en el resultado porque puedes verificar el proceso.

## Dos tipos de modelos, dos tipos de trabajo

Aqui es donde la cosa se pone practica. No todos los modelos razonan igual, y entender la diferencia te va a ahorrar tiempo y dinero.

Existen lo que podemos llamar modelos rapidos y modelos de razonamiento. Los rapidos -- como las versiones ligeras de cualquier familia de modelos -- priorizan velocidad y bajo costo. Te dan una respuesta en un segundo, gastan pocos tokens, y para muchas tareas son mas que suficientes. Necesitas redactar un correo al cliente recordandole que envie su constancia de situacion fiscal? Un modelo rapido lo hace perfecto.

Los modelos de razonamiento son otra cosa. Estos se toman su tiempo. Generan internamente una cadena de pensamiento que puede ser extensa antes de darte la respuesta visible. Algunos, como el pensamiento extendido de Claude o la serie "o" de OpenAI, te dejan ver ese razonamiento. Otros lo hacen internamente y solo te muestran el resultado final. Pero en ambos casos, el modelo esta haciendo mas trabajo bajo el capo.

¿Cuando usar cada uno? La regla es simple:

Si la tarea es rutinaria, repetitiva o no requiere analisis profundo, usa un modelo rapido. Redactar correos, resumir documentos, formatear informacion, traducir textos. No necesitas que el modelo "piense" veinte segundos para escribirte un recordatorio de pago.

Si la tarea requiere analisis, logica o precision fiscal, usa un modelo de razonamiento. Analizar si un gasto es deducible bajo las fracciones del articulo 27 de la LISR, determinar el tratamiento contable de una operacion compleja, revisar si una estrategia fiscal tiene riesgo ante el SAT. Ahi quieres que el modelo se tome su tiempo y razone.

La diferencia de costo es real, como vimos en el Capitulo 4. Un modelo de razonamiento puede costar 5 o 10 veces mas que uno rapido para la misma pregunta. Pero si esa pregunta vale una opinion fiscal de $15,000, el costo adicional de unos pesos en tokens es irrelevante.

## Los tokens invisibles

Hay un concepto que conecta este capitulo con lo que aprendiste en el Capitulo 4 sobre costos: los tokens de razonamiento.

Cuando un modelo de razonamiento "piensa", genera texto interno. A veces lo puedes ver (como una seccion de "pensamiento" antes de la respuesta). A veces no lo ves, pero el modelo lo genero internamente de todos modos. Ese texto interno consume tokens. Y esos tokens cuestan dinero.

Es por eso que los modelos de razonamiento son mas caros. No es que te cobren un premium por ser mejores. Es que literalmente estan generando mas texto -- mas trabajo computacional -- para llegar a la respuesta. Si un modelo rapido genera 200 tokens para responderte, un modelo de razonamiento puede generar 200 tokens de respuesta visible mas 800 tokens de razonamiento interno. Estas pagando por 1,000 tokens en lugar de 200.

Piensalo asi: es la diferencia entre el despacho que te cobra $3,000 por "darte el numero" y el que te cobra $15,000 pero te entrega el numero con todo el papel de trabajo detras. Los dos te dan un resultado. Pero el segundo hizo mas trabajo, y ese trabajo tiene valor porque puedes verificarlo.

## El truco que cambia todo

Ahora viene la parte que mas me gusta, porque es algo que puedes usar hoy mismo sin gastar un peso extra.

Aunque estes usando un modelo rapido -- de esos que no razonan por defecto -- puedes forzar la cadena de pensamiento con una instruccion simple. Basta con agregar a tu prompt algo como:

"Piensa paso a paso antes de darme la respuesta final."

O: "Explica tu razonamiento antes de dar la conclusion."

O: "Analiza esto como si fueras un contador revisando un caso: primero identifica los hechos, luego la norma aplicable, luego la conclusion."

Esta tecnica, conocida como "prompting de cadena de pensamiento", obliga al modelo a generar los pasos intermedios como parte de su respuesta visible. Y los estudios muestran que mejora la precision de forma significativa, incluso en modelos que no fueron disenados especificamente para razonar.

¿Por que funciona? Porque al obligar al modelo a "mostrar su trabajo", le estas dando la oportunidad de auto-corregirse. Si en el paso 2 dice algo que contradice el paso 1, al escribirlo se da cuenta y ajusta. Sin esa instruccion, el modelo salta directo a la conclusion y no tiene ese mecanismo de verificacion.

Es como cuando le pides a un becario que no solo te de el resultado de la conciliacion bancaria, sino que te muestre cada partida. El simple hecho de tener que mostrar el proceso hace que lo haga con mas cuidado.

## En la Practica

El contador Roberto tiene un caso fiscal complicado. Su cliente, una persona moral del regimen general, hizo una venta de un inmueble que habia sido su oficina corporativa durante 12 anos. Roberto necesita determinar el tratamiento fiscal: la ganancia en la enajenacion, la actualizacion del costo de adquisicion, la deduccion por inversiones pendiente, y si hay alguna implicacion en materia de IVA.

Si Roberto le pregunta al modelo "¿como calculo el ISR por venta de un inmueble de una persona moral?", va a obtener una respuesta generica que menciona los articulos aplicables pero no le resuelve el caso.

Pero si Roberto le dice: "Analiza paso a paso el siguiente caso. Una persona moral del regimen general vende un inmueble que fue su oficina corporativa. Lo adquirio en marzo 2014 por $3.8 millones. Lo vende en noviembre 2026 por $7.2 millones. Ha deducido inversiones con la tasa del 5% anual conforme al articulo 34 fraccion I de la LISR. Necesito que razones: 1) el costo actualizado de adquisicion usando INPC, 2) la deduccion por inversiones acumulada, 3) la ganancia fiscal, 4) el tratamiento para IVA, y 5) la documentacion que necesito para soportar la operacion. Muestra tu razonamiento completo antes de la conclusion."

Con esa instruccion, el modelo va a generar un analisis paso a paso que Roberto puede seguir, verificar contra la ley y su criterio profesional, y ajustar donde sea necesario. No es que el modelo haga el trabajo de Roberto. Es que le da un primer borrador razonado que Roberto puede auditar.

Y esa es la palabra clave: auditar. Como contador, tu trabajo es verificar. Si el modelo te muestra su razonamiento, puedes leerlo y detectar si en algun paso se equivoco. "Aqui usaste la tasa del 10% pero el articulo 34 fraccion I dice 5%." Sin el razonamiento visible, solo tienes un numero final y ninguna forma de saber si el camino fue correcto.

Como veremos en el Capitulo 12, la IA no tiene RFC ni responde ante el SAT. Tu si. Por eso poder leer el razonamiento no es un lujo, es una necesidad profesional.

## Mito vs Realidad

- **Mito:** "Los modelos de IA mas caros siempre dan mejores respuestas."
- **Realidad:** Los modelos de razonamiento dan mejores respuestas en tareas complejas que requieren analisis. Para tareas simples, un modelo rapido y barato da el mismo resultado en menos tiempo y a menor costo. Usar un modelo de razonamiento para redactar un correo es como contratar a un fiscalista para hacer una captura en el portal del SAT.

- **Mito:** "Si el modelo no razona, no sirve para nada fiscal."
- **Realidad:** Puedes forzar la cadena de pensamiento en cualquier modelo con una simple instruccion. No necesitas el modelo mas avanzado del mercado para obtener respuestas razonadas. A veces basta con pedirle que piense paso a paso.

---

### Lo que te llevas

- La cadena de pensamiento es lo que separa a un modelo que adivina de uno que razona. Los modelos que generan pasos intermedios antes de la respuesta final cometen menos errores y te permiten verificar su logica.
- Existen modelos rapidos (baratos, para tareas simples) y modelos de razonamiento (mas caros, para analisis complejos). Saber cuando usar cada uno te ahorra dinero y te da mejores resultados.
- Puedes forzar el razonamiento en cualquier modelo con una instruccion tan simple como "piensa paso a paso". Ese truco mejora la precision de forma significativa y no cuesta nada extra.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA y pregunta: "Una persona moral del regimen general tiene un ingreso por arrendamiento de un inmueble y tambien lo usa parcialmente como oficina. ¿Puede deducir el 100% de los gastos de mantenimiento?" Observa la respuesta directa.
2. Ahora, en un chat nuevo, haz la misma pregunta pero agrega al final: "Antes de darme tu conclusion, razona paso a paso: identifica los articulos aplicables de la LISR y la LIVA, analiza si hay proporcion de uso, y luego dame tu conclusion fundamentada."
3. Compara ambas respuestas. La primera te dara una respuesta plana. La segunda te mostrara el razonamiento, y podras verificar si cada paso es correcto conforme a tu criterio profesional.

### Si quieres ir mas lejos

Los prompts del Pack de Prompts para Contadores ya incluyen instrucciones de razonamiento paso a paso en las tareas fiscales complejas. En lugar de recordar agregar "piensa paso a paso" cada vez, esa estructura ya viene integrada para que el modelo te muestre su trabajo y tu puedas auditarlo como harias con cualquier papel de trabajo de tu equipo.
