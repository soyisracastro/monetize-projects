# Capitulo 5: La IA solo sabe lo que le cuentas

<!--
Fuente: Newsletter #8
Concepto principal: Context Window (Ventana de Contexto)
Terminos para glosario: Context Window, tokens de contexto, truncamiento, lost in the middle
-->

Mi esposa llega del trabajo con una historia que, segun ella, es el chisme del siglo. Arranca a media conversacion, con nombres que jamas he escuchado, situaciones que no ubico y referencias a platicas que aparentemente ya deberia conocer. Yo asiento con cara de que entiendo, pero por dentro estoy armando un rompecabezas con la mitad de las piezas faltantes.

Al final no me queda mas remedio que frenarla: "Espera. ¿Quien es Lupita? ¿Que paso antes? ¿Por que estamos hablando de un vestido rojo?"

Cuando por fin me da el contexto completo, todo tiene sentido. El chisme es bueno, la indignacion esta justificada, y hasta puedo opinar con propiedad. Pero sin esos antecedentes, mi mejor respuesta era un "ah, que barbaridad" generico que no le servia a nadie.

Eso es exactamente lo que le pasa a un modelo de IA cuando le escribes sin contexto. No es que sea tonto. No es que no sepa de contabilidad. Es que le estas contando el chisme a medias y esperas que te de una respuesta completa.

## Tu conversacion tiene limites fisicos

Cuando hablas con un modelo de IA, existe un limite real y concreto de cuanta informacion puede "ver" al mismo tiempo. Ese limite se llama ventana de contexto, y funciona como un escritorio con espacio finito.

Imagina que tienes un escritorio donde solo caben 20 hojas. Puedes acomodar estados financieros, balanzas de comprobacion, papeles de trabajo. Pero el escritorio tiene un borde. Cuando llega la hoja 21, la hoja 1 se cae al suelo. Ya no la ves. Ya no existe para ti mientras trabajas.

El modelo de IA funciona igual. Todo lo que esta dentro de la ventana de contexto lo puede leer, analizar y usar para responderte. Todo lo que queda fuera, simplemente no existe. No es que lo ignore por flojera. Literalmente no lo puede ver.

> **Concepto Clave**
> **Context Window (Ventana de Contexto):** Es la cantidad maxima de texto que un modelo de IA puede procesar de una sola vez. Incluye tanto lo que tu le escribes como lo que el modelo te responde. Todo lo que queda fuera de esta ventana, para la IA no existe.

Ahora, hay algo que mucha gente no entiende y que cambia completamente como deberias trabajar con estas herramientas: la ventana de contexto no solo incluye tu mensaje. Incluye toda la conversacion. Cada mensaje que tu escribes y cada respuesta que el modelo genera van llenando ese escritorio. Si llevas una conversacion larga, eventualmente el escritorio se llena.

¿Y que pasa cuando se llena? El modelo empieza a "olvidar" lo que dijiste al principio. No te avisa. No te dice "oye, ya no recuerdo lo que me dijiste hace veinte mensajes". Simplemente deja de tener acceso a esa informacion. Tu sigues hablando como si el modelo supiera todo lo anterior, y el modelo responde con lo que le queda visible. Ahi es donde empiezan las respuestas raras, las contradicciones y la frustracion de "pero si ya te lo dije".

## Cuanto cabe en el escritorio

Para que tengas una referencia practica: los modelos actuales manejan ventanas de contexto de entre 100,000 y 200,000 tokens. Como vimos en el Capitulo 4, un token no es exactamente una palabra, pero como aproximacion puedes pensar que 100,000 tokens equivalen a unas 75,000 palabras en espanol. Eso es un libro completo. Parece mucho, ¿verdad?

Y lo es. Puedes subir un estado financiero de 50 paginas, una escritura constitutiva completa o el texto integro de la Ley del ISR, y el modelo lo puede leer. Tecnicamente cabe en el escritorio.

Pero aqui viene el matiz importante: que quepa no significa que lo procese igual de bien.

Los investigadores han descubierto un fenomeno que llaman "lost in the middle" -- perdido en el medio. Cuando le das al modelo un texto muy largo, presta mas atencion al principio y al final, y tiende a perderse detalles de la parte media. Es como cuando lees un documento larguisimo: recuerdas bien como empezaba y como terminaba, pero los parrafos del medio se te desdibujan.

Esto tiene implicaciones directas para tu trabajo. Si subes un dictamen fiscal de 80 paginas y le preguntas algo especifico que esta en la pagina 45, el modelo podria no captar ese detalle con la misma precision que si estuviera en la primera o la ultima pagina. No es un error del modelo. Es una limitacion real de como funcionan estas arquitecturas.

## La memoria que no existe

Hay otro punto que necesitas entender, porque genera muchisima confusion: los modelos de IA no tienen memoria entre conversaciones. Cada vez que abres un chat nuevo, el modelo parte de cero. No recuerda que ayer le pediste que analizara la situacion fiscal del cliente Martinez. No sabe que la semana pasada le explicaste como funciona tu despacho. Para el, cada conversacion nueva es como conocer a un desconocido en la calle.

Algunos servicios han empezado a ofrecer funciones de "memoria" que guardan cierta informacion entre conversaciones, y como veremos en el Capitulo 8, los sistemas de instrucciones personalizadas te permiten precargar contexto. Pero por defecto, la regla es clara: conversacion nueva, borrón y cuenta nueva.

Dentro de una misma conversacion, si hay continuidad. Si en el mensaje 1 le dices "soy contador en un despacho de Monterrey con 15 clientes personas morales del regimen general", en el mensaje 5 todavia lo sabe. Pero solo porque esa informacion sigue dentro de la ventana de contexto. El modelo no "recuerda" en el sentido humano de la palabra. Simplemente esta releyendo toda la conversacion cada vez que genera una respuesta.

Por eso las conversaciones largas se vuelven problematicas. No solo por el limite de la ventana, sino porque entre mas larga la conversacion, mas tokens se gastan en releer lo anterior, como vimos en el Capitulo 4, y menos espacio queda para contenido nuevo.

## En la Practica

Imaginate esta situacion. La contadora Laura tiene un cliente nuevo, una empresa de manufactura en Queretaro. Necesita analizar si aplica el estimulo fiscal del articulo 186 de la LISR por contratar personas con discapacidad. Abre un chat con su modelo de IA y escribe:

"¿Aplica el estimulo fiscal por contratar discapacitados?"

La respuesta que obtiene es generica. Le habla del articulo 186, le da los requisitos generales, menciona que necesita un certificado del IMSS. Informacion correcta pero que podria haber sacado de Google en tres minutos.

Ahora imagina que Laura escribe esto:

"Soy contadora fiscal en un despacho en Queretaro. Tengo un cliente persona moral del regimen general de ley que manufactura autopartes. Acaba de contratar a 3 personas con discapacidad motriz (certificada por el IMSS). Quiero aplicar el estimulo del articulo 186 de la LISR. El cliente tiene utilidad fiscal proyectada para 2026 de $4.2 millones. Necesito saber: 1) si aplica el estimulo con estas caracteristicas, 2) como calcularlo, 3) en que linea del ISR anual se refleja, y 4) que documentacion soporte necesito tener en el expediente para una eventual revision del SAT."

La diferencia es brutal. Ahora el modelo sabe quien pregunta, para que tipo de cliente, en que contexto fiscal, con que numeros reales, y exactamente que necesita saber. La respuesta pasa de ser un articulo de Wikipedia a ser un memo fiscal personalizado.

La diferencia entre una respuesta generica y una que parece que te la dio un colega que conoce tu despacho no es la inteligencia del modelo. Es el contexto que tu le das.

Y cuando subes documentos largos, recuerda el efecto "lost in the middle". Si necesitas que el modelo analice un punto especifico de un CFDI de nomina o de una declaracion anual, mejor senala exactamente donde esta lo que te interesa, en lugar de subir todo el documento y esperar que lo encuentre solo.

## Mito vs Realidad

- **Mito:** "La IA ya sabe de contabilidad mexicana, no necesito explicarle mi situacion."
- **Realidad:** El modelo fue entrenado con informacion general. Sabe que existe el SAT, el ISR y los CFDI. Pero no sabe nada de tu cliente, tu despacho, tu criterio profesional ni tu situacion especifica. Sin ese contexto, te da respuestas de manual. Con el, te da respuestas de colega.

- **Mito:** "Si la conversacion es larga, la IA recuerda todo lo que le dije."
- **Realidad:** Cuando la conversacion excede la ventana de contexto, el modelo pierde acceso a los mensajes mas antiguos. No te avisa. Simplemente deja de tener esa informacion disponible. Si estas en una conversacion larga y sientes que el modelo "olvido" algo, probablemente es exactamente eso lo que paso.

---

### Lo que te llevas

- La ventana de contexto es el limite fisico de cuanta informacion puede ver la IA al mismo tiempo. Lo que queda fuera de esa ventana, no existe para el modelo.
- Dar contexto completo (quien eres, que necesitas, situacion especifica, que ya intentaste) transforma respuestas genericas en respuestas personalizadas. La diferencia entre Google y un colega experto es el contexto.
- Cada conversacion nueva empieza de cero. El modelo no recuerda chats anteriores. Y en conversaciones muy largas, empieza a perder los mensajes del principio.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA y hazle una pregunta fiscal sin contexto. Por ejemplo: "¿Como calculo el ISR de una persona fisica?" Observa la respuesta.
2. Ahora, en un chat nuevo, hazle la misma pregunta pero con contexto completo: "Soy contador en [tu ciudad]. Tengo un cliente persona fisica con actividad empresarial que tributa en el regimen de confianza. Sus ingresos anuales son de $2.8 millones. Tiene deducciones personales por $180,000 (gastos medicos y colegiaturas). Necesito calcular su ISR anual 2025 y verificar si le conviene permanecer en RESICO o cambiar al regimen general. Muestra el calculo paso a paso."
3. Compara las dos respuestas. La primera sera un articulo generico. La segunda parecera un memo de trabajo de tu despacho.

### Si quieres ir mas lejos

Cada prompt del Pack de Prompts para Contadores ya incluye la estructura de contexto que necesitas: quien eres, que necesitas, para que tipo de cliente, y en que situacion fiscal. En lugar de construir ese contexto desde cero cada vez, lo tienes listo para las tareas mas comunes del despacho.
