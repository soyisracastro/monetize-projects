# Capitulo 9: Darle la informacion correcta desde la primera linea

<!--
Fuente: NUEVO
Concepto principal: Prompt Engineering / Estructura de un buen prompt
Terminos para glosario: Prompt, Prompt Engineering, Rol, Contexto, Instruccion, Formato de salida
-->

El otro dia me llamo un cliente nuevo. Primer contacto. Le pregunte en que le podia ayudar y me dijo, textual: "Es que tengo un problema con mis impuestos". Y se quedo callado. Como si con eso yo ya tuviera suficiente para resolver su vida fiscal completa.

Le tuve que sacar todo con pinzas. "¿Eres persona fisica o moral?" Persona fisica. "¿Que regimen?" No sabia. "¿Facturas?" Algunas. "¿Cuanto ganas al mes?" Depende. "¿Tienes empleados?" A veces. Y asi nos fuimos media hora hasta que logre armar un panorama minimo para empezar a trabajar.

Ahora imaginate que ese cliente, en vez de llegar con un "tengo un problema con mis impuestos", hubiera llegado con una carpeta organizada: su constancia de situacion fiscal, sus ultimas declaraciones, un resumen de sus ingresos y gastos del periodo, y una pregunta concreta. "Quiero saber si me conviene cambiar de regimen fiscal dado que mis ingresos ya rebasaron los 3.5 millones." Esa consulta la resuelvo en quince minutos. La otra, si me va bien, en hora y media.

Pues con la IA pasa exactamente lo mismo. La calidad de lo que le preguntas determina la calidad de lo que te responde. Y no es cuestion de suerte ni de que un modelo sea mejor que otro. Es cuestion de estructura.

## La forma en que preguntas cambia la respuesta que recibes

Si algo deberias haber notado en los capitulos anteriores, es que la IA no lee tu mente. No sabe que eres contador (a menos que se lo digas, como vimos con el system prompt en el Capitulo 8). No sabe en que pais trabajas. No sabe si tu cliente es una persona fisica en RESICO o una empresa de manufactura con operaciones internacionales. No sabe si quieres una tabla comparativa, un parrafo de tres lineas o un analisis de cinco paginas.

Todo eso se lo tienes que comunicar. Y la forma en que lo comunicas tiene un nombre: prompt.

Pero aqui viene lo importante. Un prompt no es simplemente "lo que escribes en el chat". Un prompt es una instruccion estructurada. Y como toda estructura, tiene componentes. Si te faltan componentes, el resultado se debilita. Si los tienes todos, el resultado es dramaticamente mejor.

Piensalo como una declaracion anual. Si llenas solo los datos de identificacion pero no capturas ingresos, deducciones ni pagos provisionales, el resultado no sirve. No porque el sistema del SAT sea malo, sino porque le diste informacion incompleta. Con la IA pasa igual.

> **Concepto Clave**
> **Prompt Engineering (Ingenieria de prompts):** Es la habilidad de estructurar instrucciones claras y completas para obtener mejores respuestas de un modelo de IA. No es programacion. Es comunicacion precisa, como redactar un buen requerimiento profesional o un dictamen bien fundamentado.

## El framework RCIF: cuatro piezas que cambian todo

Despues de meses usando IA en el despacho y de probar cientos de formas de preguntarle cosas, llegue a una estructura que funciona de forma consistente. La llamo RCIF, y tiene cuatro componentes. No los invente yo; es una destilacion de lo que funciona en la practica profesional contable.

**R - Rol**

Le dices al modelo quien es. No quien eres tu, sino que papel quieres que juegue para esta tarea.

"Eres un contador publico mexicano especializado en personas fisicas con actividad empresarial."

¿Te suena familiar? Deberia. En el Capitulo 8 hablamos del system prompt, que le da al modelo una identidad para toda la conversacion. El rol en un prompt individual funciona igual, pero para una sola pregunta. Si ya tienes un system prompt configurado, el rol del prompt lo complementa o lo ajusta para el caso especifico.

¿Por que importa? Porque un modelo al que le dices "eres un contador mexicano" responde distinto que uno al que le dices "eres un abogado espanol". La perspectiva cambia, los articulos que cita cambian, la terminologia cambia. Es como la diferencia entre pedirle opinion a un fiscalista y a un laboralista sobre la misma operacion. Los dos son abogados, pero ven el problema desde angulos distintos.

**C - Contexto**

Le das la informacion de fondo que necesita para entender tu caso.

"Mi cliente tiene un negocio de e-commerce. Factura aproximadamente 2 millones al ano. Esta dado de alta en el regimen de actividad empresarial y profesional, regimen 612. Tiene tres empleados y opera desde Queretaro."

En el Capitulo 5 hablamos de la ventana de contexto y como el modelo solo sabe lo que le pones enfrente. Aqui es donde eso se vuelve practico. El contexto es la informacion que metes en esa ventana para que el modelo trabaje con datos reales, no con suposiciones genericas.

La clave es dar contexto relevante. No le cuentes la historia de vida del cliente. Dale los datos que impactan la respuesta que necesitas: regimen fiscal, nivel de ingresos, tipo de operaciones, periodo fiscal, ubicacion geografica si es relevante. Lo justo. Ni de mas (porque desperdicias tokens y confundes al modelo, como vimos en el Capitulo 4), ni de menos (porque la respuesta sale generica e inutil).

**I - Instruccion**

Le dices exactamente que quieres que haga. Esta es la parte donde muchos fallan, porque creen que basta con dar contexto y el modelo va a adivinar que necesitan.

"Necesito que analices si a mi cliente le conviene cambiar al Regimen Simplificado de Confianza y que identifiques los requisitos que debe cumplir, los beneficios fiscales y los riesgos de la transicion."

Una instruccion vaga da una respuesta vaga. Una instruccion especifica da una respuesta especifica. Y aqui conecta directamente con lo que vimos en el Capitulo 6 sobre la cadena de pensamiento: entre mas clara sea tu instruccion, mas facil es para el modelo razonar paso a paso hacia la respuesta correcta.

Fijate que la instruccion del ejemplo no dice solo "analiza si le conviene cambiar al RESICO". Dice que identifique requisitos, beneficios y riesgos. Esos tres elementos le dan al modelo una ruta clara de lo que tiene que incluir en su respuesta. Es la diferencia entre decirle a un auxiliar "revisa esta declaracion" y decirle "revisa esta declaracion, verificando que los ingresos cuadren con los CFDIs, que las deducciones tengan comprobante vigente y que los pagos provisionales esten correctamente acreditados."

**F - Formato**

Le dices como quieres que te entregue la respuesta.

"Responde en una tabla comparativa con tres columnas: concepto, regimen 612 y RESICO. Incluye al final un parrafo con tu recomendacion y el fundamento legal."

Este componente es mas poderoso de lo que parece. Sin el, el modelo decide por ti como presentar la informacion. A veces te da un ensayo de mil palabras cuando necesitabas cinco bullets. Otras te da bullets cuando necesitabas una narrativa para presentarle al cliente. Especificar el formato reduce los tokens desperdiciados (Capitulo 4) y te da un resultado que puedes usar directamente, sin tener que reformatearlo.

## Un prompt malo vs un prompt bueno: el mismo caso, dos mundos

Veamoslo en accion. Mismo caso, misma pregunta de fondo, dos formas completamente distintas de pedirlo.

**El prompt malo:**

"¿Como calculo el ISR?"

¿Que obtendrias con esto? Una explicacion generica de como se calcula el ISR en Mexico. Probablemente te hable de personas fisicas y morales al mismo tiempo. Quiza cite algunos articulos, quiza no. Te va a dar informacion correcta en terminos generales, pero completamente inutil para resolver un caso real. Es como si un cliente te preguntara "¿como pago impuestos?" sin darte ningun dato mas. Le podrias dar una respuesta, pero seria un discurso de una hora que no le resuelve nada.

**El prompt bueno (con RCIF):**

"Eres un contador publico mexicano especializado en personas fisicas con actividad empresarial (Rol). Mi cliente esta en el regimen 612, tiene un negocio de comercializacion de ropa, factura 1.8 millones anuales, tiene deducciones autorizadas por 900 mil pesos, y ha realizado pagos provisionales mensuales durante todo el ejercicio 2025 (Contexto). Necesito que calcules el ISR del ejercicio aplicando la tarifa del articulo 152 de la LISR, considerando sus pagos provisionales, y que determines si resulta saldo a favor o a cargo (Instruccion). Presenta el calculo en formato de cedula de trabajo con cada paso claramente identificado: ingreso acumulable, deducciones, base gravable, ISR segun tarifa, subsidio si aplica, pagos provisionales acreditados y resultado (Formato)."

La diferencia en la respuesta es abismal. Con el segundo prompt, el modelo te entrega algo que se parece a un papel de trabajo real. Puedes verificar cada linea. Puedes ajustar las cifras. Puedes mostrarselo a un colega. Con el primero, obtienes un articulo de blog.

## Los errores que todos cometemos (y como evitarlos)

Despues de ver a muchos colegas usar IA por primera vez, he identificado cuatro errores que se repiten una y otra vez.

**Ser demasiado vago.** "Ayudame con impuestos" es el equivalente a que tu cliente te diga "ayudame con mi negocio". No hay suficiente informacion para hacer nada util. La solucion es siempre preguntarte: ¿si un colega me pidiera esto sin mas contexto, podria ayudarle? Si la respuesta es no, tu prompt necesita mas detalle.

**Dar informacion irrelevante.** El otro extremo. Pegarle al modelo tres paginas de antecedentes del cliente cuando solo necesitas que te calcule un coeficiente de utilidad. Recuerda el Capitulo 4: cada token cuesta. Y recuerda el Capitulo 5: la ventana de contexto tiene limite. Si la llenas de informacion irrelevante, le quitas espacio a la informacion que si importa.

**No especificar el formato.** Este es el mas comun. Le preguntas algo y el modelo te responde con un ensayo de ocho parrafos cuando lo que necesitabas era una tabla o tres bullets. La IA no sabe como necesitas la informacion hasta que se lo dices. Y reformatear la respuesta a mano es tiempo perdido que te pudiste haber ahorrado con una linea adicional en el prompt.

**Meter varias preguntas sin relacion en un solo prompt.** "Oye, ¿como calculo el ISR de mi cliente persona fisica, y tambien dime como facturo una nota de credito, y de paso explicame que es el CFDI 4.0?" Eso es como llegar con tu contador y pedirle que te resuelva tres temas distintos en la misma oracion. El modelo va a intentar responder todo, pero la calidad de cada respuesta baja porque esta repartiendo atencion. Mejor haz una pregunta a la vez, o por lo menos agrupa las que estan relacionadas.

## En la Practica

La contadora Sofia trabaja en un despacho en Leon, Guanajuato. Atiende principalmente personas fisicas en RESICO y unas cuantas personas morales del regimen general. Cuando empezo a usar IA, hacia lo que todos: preguntas genericas, respuestas genericas.

Un dia necesitaba determinar si un cliente en RESICO que habia rebasado el limite de 3.5 millones de ingresos podia seguir tributando en ese regimen o tenia que cambiarse. Le pregunto al modelo: "¿Que pasa si mi cliente rebasa el limite de RESICO?"

La respuesta fue correcta en lo general pero no le sirvio para el caso. Le hablo de RESICO tanto para personas fisicas como morales. Mezclo reglas de diferentes anos fiscales. No le dijo que hacer en la practica, solo le explico la teoria.

Sofia recordo el framework RCIF y reescribio su prompt:

"Eres un consultor fiscal mexicano especializado en regimen de confianza para personas fisicas. Mi cliente es una persona fisica en RESICO que inicio operaciones en enero 2024 con un negocio de venta de alimentos preparados. Al cierre de noviembre 2025 sus ingresos acumulados ya suman 3.7 millones de pesos. Necesito que me expliques: 1) si esta obligado a cambiar de regimen y a partir de cuando, 2) a que regimen pasaria, 3) que obligaciones nuevas tendria, y 4) que pasos debe seguir ante el SAT. Responde en formato de lista numerada con fundamento legal para cada punto."

La respuesta fue otra cosa. Especifica, accionable, con los articulos correctos citados, en el formato que necesitaba. Sofia verifico los fundamentos legales, ajusto un par de detalles y en quince minutos tenia la respuesta lista para su cliente.

La diferencia no fue el modelo. Fue el prompt.

## Mito vs Realidad

- **Mito:** "Si el modelo es bueno, no necesito esforzarme en como pregunto."
- **Realidad:** Hasta el modelo mas avanzado del mercado te da respuestas mediocres si le das un prompt mediocre. La calidad de la entrada determina la calidad de la salida. Un modelo excelente con un prompt malo es como un contador brillante al que le das un expediente incompleto: puede ser el mejor del mundo, pero sin datos no hay milagros.

- **Mito:** "Escribir buenos prompts es una habilidad tecnica que requiere estudiar programacion."
- **Realidad:** Escribir buenos prompts es comunicacion profesional. Si sabes redactar un dictamen fiscal, una opinion tecnica o un correo claro a un cliente, ya tienes las habilidades que necesitas. RCIF no es mas que organizar tu comunicacion: decirle al modelo quien es, darle contexto, pedirle algo especifico y decirle como quieres la respuesta. Nada que no hagas ya con tu equipo de trabajo.

---

### Lo que te llevas

- Un buen prompt tiene estructura, igual que un buen expediente de trabajo. El framework RCIF (Rol, Contexto, Instruccion, Formato) te da los cuatro componentes que necesitas para obtener respuestas utiles de cualquier modelo de IA.
- La diferencia entre un prompt vago y uno estructurado no es un poco mejor: es dramaticamente mejor. El mismo modelo, con la misma pregunta de fondo, te puede dar una respuesta generica e inutil o un papel de trabajo que solo necesita verificacion.
- Los errores mas comunes al escribir prompts son los mismos que vemos cuando un cliente nos da informacion incompleta: ser demasiado vago, dar datos irrelevantes, no decir que necesita exactamente, o pedir todo al mismo tiempo.

### Pruebalo tu mismo

1. Piensa en un caso fiscal real que tengas pendiente o que hayas resuelto recientemente. Abre cualquier modelo de IA y preguntale de la forma que normalmente lo harias, sin pensar demasiado en la estructura.
2. Ahora, en un chat nuevo, reescribe tu pregunta usando RCIF: asignale un rol, dale el contexto del caso, se especifico en lo que necesitas y dile en que formato quieres la respuesta.
3. Compara ambas respuestas lado a lado. Fijate no solo en la calidad del contenido, sino en lo util que es cada una para tu trabajo real. La segunda deberia ser algo que puedas usar directamente o con ajustes minimos.

### Si quieres ir mas lejos

El framework RCIF es la base. Una vez que lo dominas, escribir prompts efectivos se vuelve algo natural. Pero si quieres ver como se aplica esta estructura a 24 tareas especificas del despacho contable --desde revision de CFDIs hasta analisis de regimenes fiscales-- eso es exactamente lo que hace el Pack de Prompts: cada prompt ya trae el rol, el contexto, la instruccion y el formato disenados para tareas reales de la practica contable mexicana.
