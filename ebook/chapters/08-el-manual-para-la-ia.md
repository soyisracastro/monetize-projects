# Capitulo 8: El manual de tu despacho, pero para la IA

<!--
Fuente: Newsletter #9
Concepto principal: System Prompt
Terminos para glosario: System Prompt, Instrucciones del sistema, Personalizacion
-->

Hace unos meses contrate a alguien para que me ayudara con trabajo administrativo en el despacho. Llego el primer dia con toda la actitud del mundo. Puntual, con ganas, libreta en mano. La clasica energia de "ponme a hacer lo que sea".

Y yo, con tres declaraciones pendientes, dos clientes llamando y el SAT de malas, hice lo peor que podia hacer: lo sente frente a la computadora y le dije "ahi esta todo, echale ganas". Y me fui a resolver incendios.

¿Que paso? Exactamente lo que te imaginas. Atendio llamadas de clientes con su propio criterio. Organizo archivos con una logica que solo el entendia. Respondio correos con un tono que no era el del despacho. Y al final del dia, termine rehaciendo la mitad del trabajo. No porque fuera malo. Era capaz, tenia conocimientos, le echaba ganas. Pero nadie le explico como funcionaba mi despacho. No tenia un manual. No tenia contexto. No sabia que al cliente Garcia siempre se le habla de usted, que los archivos van por RFC y no por nombre, ni que las dudas fiscales se consultan antes de responder.

Con la IA pasa exactamente lo mismo. Y la solucion es la misma: darle el manual.

## El manual de operaciones que la IA necesita

Cuando abres cualquier modelo de IA y le escribes una pregunta, el modelo no sabe quien eres. No sabe que eres contador. No sabe que estas en Mexico. No sabe si atiendes personas fisicas o morales, si tu despacho tiene dos personas o veinte, ni si tus clientes son taqueros con RESICO o empresas de manufactura del regimen general.

Sin esa informacion, hace lo que puede. Te da una respuesta generica que le serviria a cualquier persona en cualquier pais. Correcta, quiza. Util, apenas.

Pero existe un mecanismo para cambiar eso desde la raiz. Se llama system prompt, y es basicamente el manual de operaciones de tu despacho, pero para la IA.

> **Concepto Clave**
> **System Prompt (Instrucciones del sistema):** Es el mensaje inicial que le dice al modelo como debe comportarse durante toda la conversacion. Define su identidad, sus reglas, su formato de respuesta y sus limites. Es lo primero que el modelo "lee" antes de cualquier mensaje tuyo.

El system prompt no es parte de la conversacion que tu ves. Es una capa de instrucciones que va por debajo, como los cimientos de una casa. Tu no los ves cuando entras a la sala, pero sostienen todo. Cada respuesta que el modelo te da esta influenciada por ese system prompt, aunque tu no lo hayas escrito.

De hecho, todas las herramientas que usas ya tienen uno. Cuando abres cualquier modelo de IA comercial, alguien ya escribio un system prompt que le dice cosas como "se amable", "no generes contenido violento", "responde en el idioma del usuario". Lo que tu puedes hacer es agregar el tuyo encima, personalizando al modelo para tus necesidades especificas.

## Anatomia de un buen system prompt

No se trata de escribir un parrafo largo y esperar que funcione. Un buen system prompt tiene componentes especificos, y cada uno cumple una funcion. Piensa en ello como los datos de identificacion de una declaracion anual: si falta un campo, el resultado cambia completamente.

Estos son los cinco componentes que todo system prompt efectivo debe tener:

**1. Rol e identidad**

Le dices al modelo quien es. No quien eres tu, sino quien es el. Esto establece el marco desde el cual va a responder.

"Eres un contador publico mexicano especializado en fiscalizacion de personas morales del regimen general de ley."

Con esa sola linea, el modelo ya cambia la forma en que responde. Deja de ser un asistente generico y empieza a comportarse como un profesional con un perfil especifico.

**2. Contexto**

Aqui le explicas el entorno en el que trabaja. El tipo de despacho, los clientes que atiende, las herramientas que usa, la normativa que aplica.

"Trabajas en un despacho contable en Guadalajara que atiende principalmente personas fisicas con actividad empresarial en RESICO y personas morales del regimen general. Los clientes facturan entre 500 mil y 20 millones anuales."

Este contexto es lo que transforma respuestas de manual en respuestas de colega. Como vimos en el Capitulo 5, la ventana de contexto determina cuanta informacion puede ver el modelo. El system prompt ocupa parte de esa ventana, pero es espacio bien invertido porque moldea todas las respuestas que vienen despues.

**3. Reglas**

Las reglas son los limites y criterios que el modelo debe seguir. Son el equivalente a las politicas internas de tu despacho.

"Siempre cita el articulo de ley correspondiente cuando hagas una afirmacion fiscal. Nunca inventes datos, cifras ni porcentajes. Si una disposicion cambio recientemente y no tienes certeza de la version vigente, dilo explicitamente. Siempre distingue entre obligaciones federales y estatales."

Sin reglas, el modelo improvisa. Con reglas, trabaja dentro de un marco definido. Igual que ese empleado nuevo: no es que no pueda hacerlo bien, es que necesita saber que en tu despacho las cosas se hacen de cierta manera.

**4. Formato**

Le indicas como quieres que te entregue las respuestas. Esto parece menor, pero ahorra un tiempo enorme.

"Responde en bullets cuando sea una lista de requisitos. Usa tablas cuando compares opciones fiscales. Incluye al final de cada respuesta un apartado de 'Fundamento legal' con los articulos citados."

Si no le dices el formato, el modelo elige uno por ti. A veces te da un parrafo interminable cuando necesitabas una tabla. Otras veces te da bullets cuando necesitabas una explicacion detallada.

**5. Limites**

Los limites son lo que el modelo NO debe hacer. Son tan importantes como las instrucciones positivas.

"Si no tienes certeza sobre un dato, dilo claramente en lugar de inventar una respuesta. No des consejos legales sobre areas fuera de lo fiscal y contable. Si el usuario pregunta algo que requiere la opinion de un abogado o un actuario, sugiérelo explicitamente."

Este componente conecta directamente con lo que veremos en el Capitulo 13 sobre seguridad y las limitaciones inherentes de estos modelos. Los limites no hacen que la IA sea mas tonta. La hacen mas confiable.

## Un system prompt completo en accion

Para que veas como se ve todo junto, aqui tienes un ejemplo realista de un system prompt para un asistente contable. No es perfecto ni definitivo. Es un punto de partida que puedes adaptar:

"Eres un asistente fiscal especializado en contabilidad mexicana. Tu funcion es apoyar a un contador publico en su trabajo diario dentro de un despacho que atiende personas fisicas en RESICO, personas fisicas con actividad empresarial y profesional, y personas morales del regimen general de ley.

Tu base normativa principal es la Ley del ISR, la Ley del IVA, el Codigo Fiscal de la Federacion, la Resolucion Miscelanea Fiscal vigente y las NIF aplicables. Cuando respondas preguntas fiscales, siempre cita el articulo o regla especifica que sustenta tu respuesta.

Responde de forma directa y concisa. Usa bullets para listas de requisitos u obligaciones. Usa tablas cuando compares regimenes, tasas o alternativas. Incluye al final un apartado de fundamento legal.

Si no tienes certeza sobre una disposicion, dilo explicitamente. No inventes datos, porcentajes ni plazos. Si algo cambio recientemente y tu informacion podria estar desactualizada, mencionalo. Si la pregunta cae fuera del ambito fiscal o contable, indica que se requiere un especialista diferente.

Cuando analices un caso especifico, siempre pregunta por los datos que necesitas antes de dar una conclusion: regimen fiscal, monto de ingresos, tipo de operacion, periodo fiscal."

¿Ves la diferencia? Con este system prompt, el modelo ya no es un asistente generico. Es un auxiliar que conoce tu contexto, sigue tus reglas y responde en tu formato. No va a saber todo. Pero va a equivocarse mucho menos que si lo dejas improvisar.

## Donde vive el system prompt

Aqui hay un punto practico que genera confusion. No todas las herramientas te dejan configurar un system prompt de la misma manera.

Algunas plataformas te permiten establecerlo de forma permanente. Lo escribes una vez y aplica a todas las conversaciones dentro de ese espacio. No tienes que repetirlo cada vez que abres un chat nuevo. Piensa en ello como configurar las preferencias de tu software contable: lo haces una vez y ya.

Otras plataformas no tienen esa opcion. En esos casos, la unica alternativa es pegar tu system prompt al inicio de cada conversacion nueva. Es mas trabajo, pero funciona igual. El modelo lee esas instrucciones primero y las aplica durante toda la conversacion.

Lo importante es que entiendas el concepto, no la interfaz de una herramienta especifica. Las plataformas cambian cada semana. El concepto de darle instrucciones base al modelo va a seguir siendo relevante por mucho tiempo.

## En la Practica

El despacho de Roberto en Monterrey atiende 40 clientes: personas fisicas con actividad empresarial, algunos en RESICO, otros en el regimen general. Cada mes, Roberto y sus dos auxiliares preparan declaraciones provisionales, revisan CFDIs y responden consultas fiscales de los clientes.

Antes de configurar un system prompt, Roberto usaba la IA de forma esporadica. Abria un chat, preguntaba algo, obtenia una respuesta generica y terminaba verificando todo manualmente de todas formas. "Para lo que me sirve, mejor busco directo en la ley", decia.

Un dia se tomo treinta minutos para escribir un system prompt con el perfil de su despacho: tipos de clientes, regimenes que maneja, formato en que necesita las respuestas, las leyes que aplica a su trabajo diario. Lo guardo en un documento de texto y empezo a pegarlo al inicio de cada conversacion nueva.

La diferencia fue inmediata. Las respuestas dejaron de ser articulos de Wikipedia y empezaron a parecer memos internos del despacho. Cuando preguntaba sobre requisitos de deduccion, el modelo ya sabia que estaba hablando de clientes mexicanos en regimenes especificos. Cuando pedia apoyo con un calculo, el formato ya venia en tabla, como el lo necesitaba.

Roberto no se volvio dependiente de la IA. Sigue verificando todo. Pero ahora la verificacion le toma cinco minutos en lugar de veinticinco, porque el punto de partida ya esta estructurado y contextualizado.

## Mito vs Realidad

- **Mito:** "Un buen prompt es suficiente. No necesito system prompt."
- **Realidad:** Un buen prompt resuelve una pregunta. Un buen system prompt mejora todas las preguntas de esa conversacion. Son complementarios, no excluyentes. El prompt es lo que preguntas; el system prompt es como el modelo entiende tu mundo antes de que preguntes.

- **Mito:** "Configurar un system prompt es para programadores."
- **Realidad:** Es escribir instrucciones en espanol. Si puedes redactar un correo a un cliente explicandole como funciona tu despacho, puedes escribir un system prompt. No hay codigo, no hay configuracion tecnica. Es lenguaje natural, el mismo que usas todos los dias.

---

### Lo que te llevas

- El system prompt es el manual de operaciones de tu despacho para la IA. Sin el, obtienes respuestas genericas. Con el, obtienes un asistente que entiende tu contexto, sigue tus reglas y responde en tu formato.
- Un buen system prompt tiene cinco componentes: rol, contexto, reglas, formato y limites. No necesitas los cinco siempre, pero entre mas completo, mejor las respuestas.
- Lo escribes una vez y lo reutilizas. Algunas herramientas te dejan guardarlo de forma permanente. En las demas, pegalo al inicio de cada conversacion. Treinta minutos de configuracion te ahorran horas de retrabajo.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA y preguntale: "¿Cuales son las obligaciones fiscales de una persona fisica en RESICO?" Lee la respuesta. Sera correcta pero generica.
2. Ahora, en un chat nuevo, antes de preguntar nada, pega este system prompt: "Eres un asistente fiscal mexicano. Trabajo en un despacho que atiende personas fisicas en RESICO con ingresos menores a 3.5 millones anuales. Responde de forma concisa, en bullets, citando siempre el articulo de ley. Si no tienes certeza, dilo." Luego haz la misma pregunta.
3. Compara las dos respuestas. Nota como la segunda es mas especifica, mas estructurada y mas util para tu trabajo real. Esa diferencia la hizo el system prompt.

### Si quieres ir mas lejos

El concepto de system prompt es la base sobre la que se construyen los prompts especializados. Si quieres ver como se aplica esto a tareas concretas del despacho --desde revisar CFDIs hasta preparar papeles de trabajo-- el Pack de Prompts ya trae esa capa de contexto integrada para que no tengas que construirla desde cero cada vez.
