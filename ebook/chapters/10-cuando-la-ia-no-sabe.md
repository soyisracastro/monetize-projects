# Capítulo 10: Cuando la IA no sabe, ensenale tu

<!--
Fuente: Newsletter #3
Concepto principal: RAG (Retrieval Augmented Generation)
Términos para glosario: RAG, Retrieval Augmented Generation, Base de conocimiento, Embeddings
-->

Hace poco un colega me conto una historia que me parecio perfecta para explicar esto. Tenía un caso complicado: un cliente persona moral que quería deducir gastos de un vehiculo que usaba tanto para la empresa como para uso personal. Mi colega sabía que había reglas especificas en la LISR, pero no se acordaba de los detalles exactos. Limites de deduccion, porcentajes, requisitos de comprobacion.

Hizo lo que muchos hacemos: le pregunto a la IA. "¿Cuales son los requisitos para deducir un automovil de uso mixto en una persona moral?" Y la respuesta que obtuvo sonaba perfecta. Articulos citados, porcentajes, requisitos de documentacion. Todo muy profesional, muy bien estructurado. Solo que un par de datos estaban mal. No inventados de la nada, pero si mezclados con disposiciones de otros países o versiones anteriores de la ley.

El modelo no estaba mintiendo a propósito. Estaba haciendo lo que sabe hacer: generar texto probable basado en todo lo que aprendio durante su entrenamiento. Pero "todo lo que aprendio" es un universo enorme de información donde la legislacion mexicana es solo una gota. Y esa gota se mezcla con legislacion de Espana, Argentina, Colombia y con versiones de la LISR que ya fueron reformadas.

La pregunta entonces no es si la IA sabe de contabilidad mexicana. La pregunta es: ¿como haces para que responda solo con la información que tu necesitas?

## Limitarle las fuentes, no la capacidad

Voy a retomar una analogia que use en capítulos anteriores. Imaginate que contratas a un socio con quince años de experiencia en fiscalizacion. Sabe de todo: ISR, IVA, CFF, comercio exterior, precios de transferencia, seguridad social. Un monstruo en su area.

Pero para un caso específico le dices: "Oye, para está consulta quiero que te bases unicamente en estos tres articulos del Código Fiscal de la Federacion. Solo estos tres. No quiero tu opinion general, no quiero que traigas cosas de otras leyes. Solo lo que dicen estos articulos."

No le estas quitando conocimiento. Le estas limitando las fuentes para este caso en particular. Y eso hace que su respuesta sea mucho mas precisa, verificable y útil.

Eso, en esencia, es lo que hace RAG.

> **Concepto Clave**
> **RAG (Retrieval Augmented Generation / Generación Aumentada por Recuperacion):** Es una técnica que limita las respuestas de la IA a documentos especificos que tu le proporcionas, en lugar de depender unicamente de su conocimiento general de entrenamiento. Le das la fuente, y el modelo responde solo con base en ella.

Es importante que entiendas la diferencia entre RAG y lo que vimos en capítulos anteriores. Los parámetros del modelo --su tamano, su capacidad, lo que aprendio durante el entrenamiento-- son como la formación academica de ese socio experto. Vienen de fabrica. Tu no los puedes cambiar. No puedes hacer que un modelo sepa mas de lo que sabe.

RAG es otra cosa. RAG es decirle: "Independientemente de todo lo que sabes, para está conversacion quiero que solo uses estos documentos." Es una restriccion de fuentes, no de capacidad.

## Como funciona por debajo (sin que te duela la cabeza)

Aquí viene la parte que a muchos les da miedo, pero que en realidad es mas sencilla de lo que parece.

Cuando subes un documento a una herramienta que usa RAG, el sistema no se lo "lee" de corrido como lo harias tu. Lo que hace es dividir el documento en fragmentos --parrafos, secciones, bloques de texto-- y convierte cada fragmento en algo que se llama embedding.

> **Concepto Clave**
> **Embedding:** Es una representación matematica de un fragmento de texto. Piensa en ello como coordenadas en un mapa: cada fragmento de texto tiene una ubicacion, y los fragmentos que hablan de temas similares quedan cerca unos de otros en ese mapa.

No necesitas entender las matematicas. Lo que necesitas saber es esto: cuando tu le haces una pregunta al modelo, el sistema convierte tu pregunta en las mismas coordenadas y busca los fragmentos del documento que están "mas cerca" de tu pregunta en ese mapa. Luego le pasa esos fragmentos al modelo y le dice: "Responde basandote en esto."

El modelo no lee todo el documento de principio a fin cada vez que preguntas. Busca los pedazos mas relevantes y trabaja con ellos. Es como tener un índice inteligente que sabe exactamente en que página de la ley está la respuesta a tu duda.

Esto es una ventaja enorme, pero también tiene implicaciones que necesitas entender para usarlo bien.

## Herramientas que puedes usar hoy

La buena noticia es que no necesitas ser programador para usar RAG. Hay herramientas disponibles ahora mismo que te permiten hacerlo de forma sencilla. No voy a darte instrucciones de interfaz porque esas cambian cada semana, pero si el concepto general:

**Subir documentos y preguntar sobre ellos.** Varias plataformas de IA te permiten cargar archivos --PDFs, documentos de texto, hojas de cálculo-- y luego hacerle preguntas al modelo limitando sus respuestas a esos archivos. Algunas lo hacen de forma temporal (solo para esa conversacion) y otras de forma permanente (como una base de conocimiento que siempre está disponible).

**Crear espacios de conocimiento.** Algunas herramientas te dejan crear proyectos o espacios donde subes multiples documentos y el modelo los usa como referencia constante. Piensa en ello como el archivero de tu despacho: siempre está ahí, y el modelo puede consultarlo cuando lo necesita.

Lo importante no es la herramienta específica que uses. Lo importante es que entiendas que estas limitando la fuente de información del modelo. Le estas diciendo: "Para esto, solo usa lo que te di."

## El ejemplo que lo explica todo

Vamos a hacerlo concreto. Imagina que subes el texto completo de la Ley del ISR como PDF a una herramienta con capacidad de RAG. Luego le preguntas:

"Según este documento, ¿cuales son los requisitos para deducir gastos de viaje?"

¿Que pasa por debajo? El sistema convierte tu pregunta en coordenadas, busca en el documento los fragmentos que hablan de deducciones de gastos de viaje, encuentra el articulo 28 fraccion V y las disposiciones relacionadas, y le pasa esos fragmentos al modelo. El modelo genera una respuesta basada unicamente en esos fragmentos.

El resultado es una respuesta que cita directamente lo que dice la ley que tu subiste. No lo que el modelo "cree recordar" de su entrenamiento. No una mezcla con legislacion de otros países. Lo que dice tu documento.

¿Elimina esto los errores por completo? No. Como veremos en el Capítulo 12, los modelos de IA pueden generar información incorrecta incluso cuando tienen la fuente correcta enfrente. Pero la probabilidad de error baja drasticamente. Y lo mas importante: tu puedes verificar la respuesta contra el mismo documento que subiste. La fuente está ahí, no pérdida en los miles de millones de textos con los que se entreno el modelo.

## Cuando RAG no funciona tan bien

Seria irresponsable de mi parte decirte que RAG resuelve todo. No lo hace. Hay situaciones donde funciona peor de lo que esperarias, y conocerlas te va a ahorrar frustracion.

**Preguntas ambiguas.** Si tu pregunta no es específica, el sistema no sabe que fragmentos del documento recuperar. "¿Que dice la ley sobre impuestos?" es tan vaga que el sistema podria traerte fragmentos de cualquier parte del documento, y la respuesta seria un revoltijo.

**Documentos que se contradicen.** Si subes la LISR y también una resolucion miscelanea que modifica un articulo de la LISR, el modelo puede no saber cual tiene prioridad. No entiende jerarquia normativa de la forma en que tu la entiendes. Tu sabes que la miscelanea fiscal vigente puede matizar lo que dice la ley. El modelo ve dos textos que dicen cosas diferentes y no siempre sabe cual pesa mas.

**Información enterrada en documentos muy largos.** Recuerdas el concepto de "lost in the middle" del Capítulo 5? Aquí aplica algo similar. Si el dato que necesitas está en una clausula pequena dentro de un documento de 200 paginas, el sistema de recuperacion podria no encontrarlo porque no es lo suficientemente "prominente" en el mapa de coordenadas. La solución es la misma que daria un buen auxiliar contable: se específico con tu pregunta.

**El principio de menos es mas.** Y aquí vale la pena rescatar algo que un colega, Christopher Lopez, señaló en una conversacion sobre este tema: mientras menos fuentes le des al RAG, mas exacta es la respuesta. Si subes diez leyes completas y preguntas algo específico, el sistema tiene demasiado terreno donde buscar. Si subes solo los articulos relevantes, la precisión se dispara. Esto aplica para todo: contexto preciso, respuesta precisa.

## En la Práctica

La contadora Mariana tiene un despacho en Puebla y está preparando la declaracion anual de una persona moral que manufactura productos de plastico. Necesita verificar si ciertos gastos de capacitación son deducibles y bajo que condiciones.

Antes de RAG, Mariana habria hecho una de dos cosas: buscar manualmente en la LISR (lo cual le tomaba veinte minutos cada vez) o preguntarle a la IA y arriesgarse a que mezclara la respuesta con información de otras jurisdicciones.

Ahora, Mariana sube el PDF de la LISR vigente a una herramienta con capacidad de RAG y pregunta: "Según este documento, ¿cuales son los requisitos de deducibilidad para gastos de capacitación de empleados en una persona moral del regimen general?"

El modelo le responde citando directamente los articulos aplicables. Le indica los requisitos de comprobacion, las limitaciones y las condiciones. Mariana verifica la respuesta contra el documento --que está ahí mismo-- y en cinco minutos tiene su respuesta confirmada.

¿Podria el modelo equivocarse aun así? Si. Por eso Mariana verifica. Pero el punto de partida es mil veces mejor que una respuesta generica construida desde la memoria general del modelo.

Un detalle práctico que Mariana descubrio con el tiempo: cuando sube todo el texto de la LISR (mas de 300 paginas), las respuestas son buenas pero no perfectas. Cuando sube solo el Título II de la ley (personas morales), la precisión mejora notablemente. Menos fuente, mas foco. Menos ruido, mas señal.

## Mito vs Realidad

- **Mito:** "Si uso RAG, la IA nunca se va a equivocar porque tiene el documento enfrente."
- **Realidad:** RAG reduce dramaticamente las respuestas inventadas, pero no las elimina por completo. El modelo sigue interpretando el texto, y esa interpretacion puede tener errores. Siempre verifica contra la fuente original. RAG te da un mejor punto de partida, no un sustituto de tu criterio profesional.

- **Mito:** "RAG es lo mismo que entrenar un modelo con mis datos."
- **Realidad:** Entrenar un modelo significa modificar sus parámetros internos, lo que viene de fabrica. Es caro, complejo y fuera del alcance de un despacho contable. RAG no modifica nada del modelo. Solo le da documentos de referencia para una conversacion específica. Es la diferencia entre mandar a alguien a la universidad (entrenamiento) y darle un libro para que consulte (RAG).

---

### Lo que te llevas

- RAG es una técnica que limita las respuestas de la IA a documentos especificos que tu le proporcionas. No modifica al modelo; le da fuentes concretas para trabajar. Es como decirle a un experto: "Para este caso, solo usa estas referencias."
- No necesitas ser programador para usar RAG. Hay herramientas disponibles hoy que te permiten subir PDFs, leyes, reglamentos o cualquier documento y hacer preguntas sobre ellos. Lo importante es el concepto, no la plataforma.
- Menos es mas. Mientras mas acotadas sean tus fuentes y mas especificas tus preguntas, mejores seran las respuestas. Subir toda la legislacion fiscal mexicana es menos efectivo que subir solo los articulos que aplican a tu caso.

### Pruebalo tu mismo

1. Busca una herramienta de IA que te permita subir documentos (varias opciones gratuitas lo permiten). Sube un documento que conozcas bien: puede ser un articulo de ley, un criterio normativo del SAT, o incluso un contrato de un cliente.
2. Hazle una pregunta específica sobre algo que tu ya sabes que dice el documento. Por ejemplo: "Según este documento, ¿cuales son los plazos para presentar el aviso de compensacion?" Compara la respuesta con lo que tu sabes que dice el texto.
3. Ahora hazle la misma pregunta en un chat nuevo, sin subir el documento. Nota la diferencia: la primera respuesta cita tu fuente directamente; la segunda es una respuesta general que podria o no ser precisa.

### Si quieres ir mas lejos

RAG es particularmente poderoso cuando se combina con los system prompts que vimos en el Capítulo 8. Si además de darle documentos de referencia le das instrucciones claras de como responder, tienes un asistente que conoce tu contexto y trabaja con tus fuentes. El Pack de Prompts está diseñado para funcionar en ese esquema: prompts que ya incluyen la estructura de contexto para las tareas mas comunes del despacho.
