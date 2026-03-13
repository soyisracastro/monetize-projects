# Apendice A: Glosario de terminos

<!--
Fuente: NUEVO
-->

Este glosario incluye todos los terminos tecnicos que aparecen a lo largo del libro. Estan ordenados alfabeticamente. Si en algun capitulo encuentras una palabra que no te suena, ven aqui.

---

**Agente de IA**: Un sistema de inteligencia artificial que puede tomar decisiones, ejecutar acciones y usar herramientas de forma autonoma para completar una tarea, no solo responder preguntas sino hacer cosas por ti.

**Alucinacion (Hallucination)**: Cuando un modelo de IA genera informacion que suena convincente pero es falsa, inventada o no tiene sustento en datos reales. No es que "mienta" a proposito; es que produce texto que estadisticamente parece correcto aunque no lo sea.

**API (Application Programming Interface)**: Una forma estandarizada para que un programa de software se comunique con otro. En el contexto de IA, es lo que permite que una aplicacion le envie preguntas a un modelo como GPT o Claude y reciba respuestas, sin necesidad de abrir un chat manualmente.

**Bias (Sesgo)**: Tendencias o prejuicios que un modelo de IA hereda de los datos con los que fue entrenado. Si los datos reflejan estereotipos o perspectivas incompletas, el modelo va a reproducirlos en sus respuestas.

**Cadena de pensamiento (Chain of Thought)**: Una tecnica de prompting donde le pides al modelo que razone paso a paso antes de dar su respuesta final. Esto suele mejorar la calidad de las respuestas, especialmente en problemas que requieren logica o calculo.

**Contexto**: Toda la informacion que el modelo tiene disponible al momento de generar una respuesta, incluyendo tu pregunta, las instrucciones del sistema y el historial de la conversacion.

**Datos de entrenamiento (Training Data)**: El enorme conjunto de textos, libros, paginas web y documentos que se usaron para ensenarle al modelo a generar lenguaje. El modelo no "recuerda" estos datos como tu recuerdas un libro; los uso para aprender patrones estadisticos del lenguaje.

**Determinismo**: La propiedad de un sistema de producir siempre el mismo resultado ante la misma entrada. Los modelos de IA no son deterministas por defecto: puedes hacerles la misma pregunta dos veces y obtener respuestas diferentes.

**Embeddings**: Una representacion numerica de un texto (palabras, oraciones o documentos) en forma de lista de numeros. Sirven para que la computadora pueda medir que tan parecidos o diferentes son dos textos, algo fundamental para busquedas semanticas y sistemas RAG.

**Few-shot**: Una tecnica de prompting donde le das al modelo algunos ejemplos de lo que esperas antes de hacerle tu pregunta real. "Aqui tienes tres ejemplos de como quiero que clasifiques estas facturas; ahora clasifica esta."

**Fine-tuning**: El proceso de tomar un modelo ya entrenado y volverlo a entrenar con datos especificos para que se especialice en una tarea particular. Es como si un contador generalista tomara un diplomado en precios de transferencia.

**Formato de salida**: La estructura en la que le pides al modelo que entregue su respuesta: texto plano, lista con vinetas, tabla, JSON, XML, etc. Especificar el formato mejora enormemente la utilidad de las respuestas.

**Groundedness**: La cualidad de que una respuesta de IA este basada en informacion verificable y proporcionada, en lugar de ser inventada. Una respuesta "grounded" se apoya en datos concretos; una que no lo es, probablemente es una alucinacion.

**Human-in-the-loop**: Un enfoque donde un humano revisa, valida o aprueba las salidas de la IA antes de que se usen o se actue sobre ellas. En contabilidad, esto significa que tu siempre revisas lo que la IA produce antes de enviarlo al cliente o al SAT.

**In-context learning**: La capacidad de un modelo para aprender a hacer algo nuevo basandose unicamente en las instrucciones y ejemplos que le das dentro del prompt, sin necesidad de reentrenarlo.

**Instruccion**: La parte de tu prompt donde le dices al modelo exactamente que quieres que haga. "Resume este texto", "Clasifica estas partidas", "Redacta un correo". Entre mas clara sea la instruccion, mejor sera el resultado.

**Jailbreak**: Un intento de manipular a un modelo de IA para que ignore sus restricciones de seguridad y genere contenido que normalmente rechazaria. Los proveedores de IA trabajan constantemente para prevenir esto.

**LLM (Large Language Model)**: Un modelo de inteligencia artificial entrenado con enormes cantidades de texto que puede entender y generar lenguaje humano. ChatGPT, Claude y Gemini son interfaces construidas sobre LLMs.

**Modelo de frontera**: El modelo mas avanzado y capaz disponible en un momento dado. Hoy puede ser GPT-4o o Claude Opus; manana sera otro. "De frontera" significa que esta en la punta de lo que la tecnologia puede hacer.

**Modelo open source / closed source**: Un modelo open source es aquel cuyo codigo y pesos estan disponibles publicamente para que cualquiera los use y modifique (como Llama de Meta). Uno closed source es propiedad de una empresa y solo puedes usarlo a traves de sus servicios (como GPT de OpenAI).

**One-shot**: Una tecnica de prompting donde le das al modelo un solo ejemplo de lo que esperas antes de hacerle tu pregunta. Es el punto medio entre zero-shot (sin ejemplos) y few-shot (varios ejemplos).

**Parametros**: Los millones o miles de millones de valores numericos internos que definen el comportamiento de un modelo. Cuantos mas parametros tiene, mas capacidad tiene para capturar patrones complejos del lenguaje. No confundir con los "parametros de configuracion" como temperatura o top-p.

**Pre-entrenamiento**: La primera fase del entrenamiento de un modelo, donde aprende los patrones generales del lenguaje procesando enormes cantidades de texto. Despues del pre-entrenamiento vienen fases adicionales como el ajuste con instrucciones y RLHF.

**Prompt**: Todo lo que le escribes a un modelo de IA: tu pregunta, tus instrucciones, el contexto que le proporcionas, los ejemplos que incluyes. Es tu herramienta principal de comunicacion con la IA.

**Prompt Engineering**: La habilidad de disenar y estructurar prompts de forma que obtengas los mejores resultados posibles del modelo. No es magia ni arte oscuro; es una combinacion de claridad, estructura y conocimiento de como funcionan estos modelos.

**Prompt Injection**: Un tipo de ataque donde alguien inserta instrucciones maliciosas dentro de un texto que sera procesado por la IA, intentando que el modelo ignore sus instrucciones originales y haga algo diferente.

**RAG (Retrieval Augmented Generation)**: Una tecnica donde el modelo consulta documentos o bases de datos externos antes de generar su respuesta, en lugar de depender solo de lo que "aprendio" durante su entrenamiento. Esto reduce las alucinaciones y permite trabajar con informacion actualizada o privada.

**Reasoning tokens**: Tokens que el modelo genera internamente como parte de su proceso de razonamiento pero que no siempre se muestran al usuario. Algunos modelos usan estos tokens para "pensar" paso a paso antes de darte su respuesta final.

**RLHF (Reinforcement Learning from Human Feedback)**: Una tecnica de entrenamiento donde humanos evaluan las respuestas del modelo y esa retroalimentacion se usa para mejorar su comportamiento. Es lo que hace que los modelos sean utiles y seguros en lugar de solo predecir la siguiente palabra.

**Rol**: La identidad o perspectiva que le asignas al modelo en tu prompt. "Actua como un auditor fiscal con 20 anos de experiencia" le da al modelo un marco de referencia para ajustar el tono, la profundidad y el enfoque de sus respuestas.

**Sampling**: El proceso mediante el cual el modelo selecciona la siguiente palabra de entre todas las opciones posibles. Los parametros como temperatura y top-p controlan como se hace esta seleccion, haciendola mas predecible o mas creativa.

**System Prompt**: Instrucciones especiales que se le dan al modelo antes de que el usuario empiece a interactuar con el. Define el comportamiento general, las reglas y el contexto base. En muchas herramientas, tu no ves el system prompt, pero esta ahi trabajando.

**Temperatura**: Un parametro que controla que tan creativas o predecibles son las respuestas del modelo. Temperatura baja (cercana a 0) da respuestas mas consistentes y seguras. Temperatura alta da respuestas mas variadas y sorprendentes, pero con mayor riesgo de errores.

**Token**: La unidad basica en la que un modelo divide el texto para procesarlo. No es exactamente una palabra: puede ser una palabra completa, parte de una palabra o incluso un signo de puntuacion. En espanol, una palabra comun suele equivaler a 1 o 2 tokens.

**Top-p**: Un parametro que controla la diversidad de las respuestas limitando el conjunto de palabras que el modelo considera. Un top-p de 0.1 significa que solo considera las palabras mas probables; un top-p de 1.0 considera todas las opciones.

**Training data cutoff**: La fecha hasta la cual el modelo tiene informacion de sus datos de entrenamiento. Si el cutoff es abril de 2024, el modelo no "sabe" nada de lo que paso despues de esa fecha a menos que le proporciones esa informacion en el prompt.

**Ventana de contexto (Context Window)**: La cantidad maxima de texto (medida en tokens) que un modelo puede procesar en una sola conversacion, incluyendo tanto lo que tu escribes como lo que el modelo responde. Si la conversacion excede la ventana de contexto, el modelo empieza a "olvidar" lo del principio.

**Zero-shot**: Cuando le pides al modelo que haga algo sin darle ningun ejemplo previo. Simplemente le das la instruccion y confias en que su entrenamiento le permite entender que hacer. Es lo que la mayoria de la gente hace cuando usa ChatGPT por primera vez.
