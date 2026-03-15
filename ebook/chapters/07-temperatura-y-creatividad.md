# Capítulo 7: Temperatura, creatividad y por qué a veces la IA te da respuestas diferentes

<!--
Fuente: NUEVO
Concepto principal: Temperature / Sampling
Términos para glosario: Temperatura, Sampling, Determinismo, Top-p
-->

La otra vez estaba preparando una respuesta a un requerimiento del SAT para un cliente. Le pedí a la IA que me ayudara a redactar el escrito. Lo revisé, le hice ajustes, y quedó bien. Formal, fundamentado, con los artículos del CFF correctos. Al día siguiente, otro cliente me llegó con un requerimiento casi idéntico. Pensé "perfecto, ya tengo la estructura". Abrí un chat nuevo, le di las mismas instrucciones al modelo, y la respuesta salió... diferente.

No mal. Diferente. Otro orden de argumentos, otra forma de citar los fundamentos legales, otro tono en el primer párrafo. El contenido era correcto, pero la forma había cambiado. Y me pregunté: si le estoy diciendo exactamente lo mismo, ¿por qué me da algo distinto?

Si te ha pasado algo parecido, no es un error. No es que la IA esté fallando ni que se le haya olvidado lo que sabe. Es que detrás de cada respuesta hay un mecanismo que introduce variabilidad a propósito. Se llama temperatura. Y entender cómo funciona te va a quitar mucha frustración.

## El termómetro invisible de la IA

Piensa en esto. Le haces la misma pregunta fiscal a cinco colegas diferentes.

Si los cinco estudiaron en la misma universidad, con el mismo maestro, usando el mismo libro, sus respuestas van a ser casi idénticas. Tal vez uno pone primero el fundamento y otro la conclusión, pero la sustancia es la misma. Eso es temperatura baja. El modelo se limita a elegir las palabras más probables, las más seguras, las que estadísticamente tienen más sentido en ese contexto. El resultado es predecible, consistente, casi mecánico.

Ahora imagina que les preguntas a cinco colegas de firmas diferentes, con especialidades diferentes, formados en ciudades diferentes. Uno te responde desde la perspectiva fiscal, otro desde la financiera, otro te menciona una tesis aislada que encontró hace tres años. Las respuestas varían más. Algunas te sorprenden. Alguna te parece rara. Pero una de ellas te abre una perspectiva que no habías considerado. Eso es temperatura alta. El modelo se permite considerar palabras menos probables, opciones menos obvias, caminos que no son los más seguros pero que pueden ser más interesantes.

> **Concepto Clave**
> **Temperatura:** Es el parámetro que controla qué tan "creativa" o "predecible" es la respuesta de un modelo de IA. A temperatura baja, el modelo siempre elige la palabra más probable. A temperatura alta, se permite explorar opciones menos obvias. No cambia lo que el modelo sabe, solo cómo elige expresarlo.

La escala generalmente va de 0 a 1, aunque algunos modelos permiten ir hasta 2. Para entenderlo de forma práctica:

**Temperatura 0 a 0.3** -- piensa en un auditor rígido. De esos que siguen el manual de procedimientos al pie de la letra. No improvisa. No se sale del guion. Si le pides la misma revisión diez veces, te entrega el mismo papel de trabajo diez veces. Cero sorpresas. Cero creatividad. Todo por el libro. Para muchas tareas contables, eso es exactamente lo que quieres.

**Temperatura 0.4 a 0.7** -- un punto medio. Como un contador experimentado que conoce la norma pero tiene criterio para adaptarla al caso específico. Sigue siendo riguroso, pero tiene cierta flexibilidad. Si le pides la misma opinión dos veces, la esencia será la misma pero la forma puede variar ligeramente.

**Temperatura 0.8 a 1.0** -- el colega creativo. El que en una junta te dice "oye, ¿y si lo vemos desde otro ángulo?". A veces sus ideas son brillantes. A veces son impracticables. Pero te saca de la caja y te obliga a pensar diferente. También es el que más riesgo tiene de decir algo que no aplica.

## Cómo funciona por dentro (sin fórmulas, lo prometo)

Cuando un modelo de IA genera texto, no escribe toda la respuesta de golpe. La construye palabra por palabra. En cada paso, el modelo tiene una lista interna de posibles palabras siguientes, cada una con una probabilidad. Como vimos en el Capítulo 3, el modelo aprendió patrones estadísticos durante su entrenamiento. Esos patrones le dicen que después de "el contribuyente debe presentar su declaración" la siguiente palabra más probable es "anual" o "mensual", no "mariposa".

La temperatura decide cómo el modelo elige de esa lista.

Con temperatura 0, siempre elige la palabra con mayor probabilidad. Punto. No hay aleatoriedad, no hay variación. Si la palabra más probable es "anual", siempre va a decir "anual". Por eso, con temperatura 0, puedes hacer la misma pregunta cien veces y obtienes la misma respuesta cien veces. A esto se le llama comportamiento determinista.

Conforme subes la temperatura, el modelo empieza a considerar opciones menos probables. Con temperatura 0.5, tal vez "anual" sigue ganando la mayoría de las veces, pero de vez en cuando elige "mensual" o "complementaria". Con temperatura 1.0, la distribución se aplana tanto que palabras con probabilidad media empiezan a tener chances reales de ser elegidas.

> **Concepto Clave**
> **Determinismo:** Un sistema determinista siempre produce el mismo resultado ante la misma entrada. Con temperatura 0, la IA es determinista: misma pregunta, misma respuesta. Conforme sube la temperatura, se introduce aleatoriedad y las respuestas empiezan a variar.

Hay otro parámetro que trabaja junto con la temperatura y vale la pena conocer: el Top-p, también llamado muestreo nuclear. En lugar de controlar qué tan "aplanada" está la distribución de probabilidades, Top-p limita cuántas opciones considera el modelo. Si le pones un Top-p de 0.9, el modelo solo considera las palabras que juntas sumen el 90% de probabilidad, descartando el 10% menos probable. Es otra forma de decirle "sé creativo, pero no tanto".

> **Concepto Clave**
> **Top-p (muestreo nuclear):** Un parámetro que limita el grupo de palabras que el modelo puede elegir. Un Top-p de 0.9 significa que solo considera opciones dentro del 90% superior de probabilidad. Funciona como complemento de la temperatura para controlar la variabilidad de las respuestas.

No necesitas memorizar las diferencias entre temperatura y Top-p. Lo importante es que entiendas el concepto general: hay perillas que controlan cuánta variación hay en las respuestas, y la mayoría de los usuarios no saben que existen.

## Por qué importa para tu trabajo

Aquí es donde esto deja de ser teoría y se vuelve práctico.

La mayoría de las herramientas de IA que usas traen una temperatura predeterminada. Generalmente está entre 0.7 y 1.0, que es un rango "conversacional". Eso significa que cada vez que abres un chat nuevo y haces la misma pregunta, la respuesta puede salir diferente. No porque el modelo sea inconsistente o poco confiable. Sino porque está diseñado para no repetirse como loro.

Para muchas tareas de la vida diaria, eso está bien. Si le pides ayuda para redactar un correo, no quieres que todos tus correos suenen idénticos. Pero en el contexto contable, hay tareas donde la variabilidad no es una virtud. Es un problema.

Si le pides a la IA que te ayude a calcular la base gravable de un contribuyente, no quieres creatividad. Quieres precisión. Quieres que aplique la ley exactamente como está escrita. Quieres la misma respuesta hoy, mañana y en seis meses.

Y al revés: si le pides ideas para reestructurar la estrategia fiscal de un cliente dentro del marco legal, quieres que explore opciones. Que te presente ángulos que no habías considerado. Ahí la temperatura alta es tu aliada.

La clave es saber cuándo necesitas cada modo.

## En la Práctica

Diana es contadora en un despacho mediano en la Ciudad de México. Tiene dos tareas pendientes está semana.

La primera: redactar la respuesta a un requerimiento del SAT. A su cliente le están pidiendo documentación soporte de una deducción que el SAT consideró improcedente. Esto necesita precisión quirúrgica. Cada palabra importa. Los fundamentos legales deben ser exactos. El tono debe ser formal y técnico. Diana necesita que la IA le dé una respuesta consistente, y si la tiene que regenerar porque quiere ajustar un párrafo, no quiere que el modelo le cambie toda la estructura.

Para esto, Diana necesita temperatura baja. Si la herramienta que usa le permite ajustarla, la pone en 0.1 o 0.2. Si no tiene ese control, al menos sabe que si la respuesta le sale diferente cada vez, no es que algo esté mal. Es la temperatura haciendo su trabajo.

La segunda tarea: una de sus clientas, una persona moral que fabrica muebles, quiere explorar opciones para optimizar su carga fiscal del siguiente ejercicio. Quiere saber qué incentivos fiscales puede aprovechar, si le conviene algún régimen específico, qué deducciones no está utilizando. Aquí Diana sí quiere que la IA sea creativa. Quiere que le presente opciones que ella después va a filtrar con su criterio profesional.

Para esto, temperatura más alta. No le molesta que la respuesta varíe entre intentos. De hecho, le conviene. Cada variación puede traer una idea diferente que vale la pena explorar.

Lo que Diana hace en ambos casos, como vimos en el Capítulo 6, es pedirle al modelo que razone paso a paso. Pero ahora sabe que la cadena de pensamiento trabaja junto con la temperatura. Un modelo con temperatura baja y razonamiento paso a paso te da análisis riguroso y reproducible. Un modelo con temperatura alta y razonamiento te da exploración creativa pero fundamentada.

## Cuando no tienes el control

Seamos honestos: la mayoría de las veces no vas a poder ajustar la temperatura directamente. Las interfaces más populares no te exponen ese parámetro, o lo esconden en configuración avanzada que poca gente toca.

Pero saber que existe te da tres ventajas enormes:

Primero, dejas de frustrarte cuando la IA te da respuestas diferentes a la misma pregunta. Ya sabes por qué pasa. No es un bug, es un feature.

Segundo, puedes compensar con el prompt. Si necesitas respuestas consistentes y no puedes bajar la temperatura, le dices al modelo algo como: "Dame una respuesta formal y técnica. No improvises. Cíñete estrictamente a lo que establece la ley." Esas instrucciones empujan al modelo hacía palabras más predecibles, imitando el efecto de una temperatura baja.

Si necesitas creatividad, le dices: "Dame cinco enfoques diferentes para resolver este caso. No te limites al más obvio. Incluye opciones poco convencionales." Eso empuja al modelo a explorar opciones menos probables, como si subieras la temperatura desde el prompt.

Tercero, si algún día usas la IA a través de una API, como vimos en el Capítulo 4, sí tendrás control directo sobre la temperatura. Y cuando llegue ese momento, ya vas a saber exactamente qué valor necesitas para cada tipo de tarea.

## Mito vs Realidad

- **Mito:** "Si la IA me da respuestas diferentes cada vez, es porque no es confiable y no sabe la respuesta."
- **Realidad:** La variación entre respuestas se debe a la temperatura, un parámetro de diseño que introduce aleatoriedad controlada. El modelo puede saber perfectamente la respuesta y aun así expresarla de formas diferentes cada vez. Es como pedirle a cinco contadores buenos la misma opinión: todos aciertan, pero cada uno la redacta diferente.

- **Mito:** "Siempre conviene poner la temperatura al mínimo para que la IA sea más precisa."
- **Realidad:** Temperatura baja da consistencia, no necesariamente precisión. Un modelo puede ser consistentemente incorrecto con temperatura 0. Lo que la temperatura controla es la variabilidad de la forma, no la calidad del conocimiento. Para tareas creativas o de exploración de ideas, una temperatura más alta te da mejores resultados.

---

### Lo que te llevas

- La temperatura es el parámetro que controla cuánta variación hay en las respuestas de la IA. Baja significa predecible y consistente; alta significa variada y creativa. Ninguna es mejor que la otra, depende de la tarea.
- Para trabajo fiscal preciso (respuestas al SAT, cálculos de ISR, análisis de artículos) necesitas el equivalente a temperatura baja. Para exploración de ideas, estrategia y redacción, te conviene más variación. Si no puedes ajustar el parámetro directamente, puedes compensar con la forma en que escribes tu prompt.
- Cuando la IA te da respuestas diferentes a la misma pregunta, no está fallando. Está funcionando exactamente como fue diseñada. Ahora sabes por qué.

### Pruébalo tú mismo

1. Abre cualquier modelo de IA y escríbele exactamente esto: "Redacta un párrafo de 3 oraciones explicando por qué una persona moral debe presentar su declaración anual de ISR." Copia la respuesta.
2. Abre un chat nuevo con el mismo modelo y pega exactamente la misma instrucción. Compara las dos respuestas. Si son diferentes (y probablemente lo serán), ya estás viendo el efecto de la temperatura.
3. Ahora prueba a agregar está instrucción al inicio: "Responde de forma estrictamente técnica y formal. No parafrasees, usa los términos exactos de la ley." Nota cómo la respuesta se vuelve más predecible y "rígida", como si hubieras bajado la temperatura desde el prompt.

### Si quieres ir más lejos

En el Pack de Prompts para Contadores, cada prompt ya tiene recomendaciones de cuánta rigidez o flexibilidad pedirle al modelo según el tipo de tarea. Los prompts fiscales están diseñados para producir respuestas consistentes y verificables, mientras que los de estrategia y comunicación le dan espacio al modelo para explorar opciones. Así no tienes que recordar está configuración cada vez que abres un chat.
