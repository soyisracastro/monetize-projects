# Capítulo 14: Sesgo, etica y responsabilidad profesional

<!--
Fuente: NUEVO
Concepto principal: AI Bias, Etica, Responsabilidad profesional
Términos para glosario: Sesgo, Bias, Datos de entrenamiento, Etica profesional
-->

El otro dia un colega me conto algo que le paso con un cliente nuevo. El cliente, una persona moral con operaciones de comercio exterior, le pidio que le ayudara a determinar si ciertos gastos de importacion eran deducibles. Mi colega, que ya llevaba meses usando IA como herramienta de trabajo, le pregunto al modelo.

La respuesta fue impecable. Bien estructurada, con citas a articulos, con requisitos claros de documentacion comprobatoria, con porcentajes especificos. El problema? La mitad de la respuesta estaba basada en el Internal Revenue Code de Estados Unidos. No en la LISR. No en el CFF. No en las Reglas Generales de Comercio Exterior. En la legislacion gringa.

Y lo peor no fue que la IA se equivocara. Lo peor fue que la respuesta sonaba perfectamente lógica. Los conceptos eran similares. La estructura era la misma. Si no conoces la diferencia entre la legislacion mexicana y la estadounidense en materia de comercio exterior, te la compras completa. Mi colega la detecto porque lleva quince años en esto. Un recien egresado, probablemente no.

## La calculadora que ya tiene números adentro

Vamos a usar una analogia que te va a quedar clara. Imaginate que te dan una calculadora nueva, pero no está vacia. Ya tiene números precargados. Cada vez que escribes una operación, la calculadora mezcla tus números con los que ya tenía adentro. A veces el resultado es correcto porque los números precargados coinciden con los tuyos. Otras veces te da un resultado que parece razonable pero está contaminado por datos que no aplican a tu caso.

La IA funciona exactamente así. Viene precargada con datos, y esos datos no son neutrales. Tienen un sesgo inherente que viene de donde salieron.

La mayoria de los modelos de IA fueron entrenados predominantemente con texto en ingles. Datos de Estados Unidos. Legislacion estadounidense. Practicas contables bajo US GAAP. Criterios del IRS. Cuando le preguntas algo sobre contabilidad o fiscalidad, el modelo tiene mucho mas material de referencia gringo que mexicano. No porque alguien haya decidido que la legislacion mexicana no importa, sino porque simplemente hay mas contenido en ingles sobre estos temas en internet.

Y eso tiene consecuencias muy concretas para tu trabajo diario.

> **Concepto Clave**
> **Sesgo (Bias):** En el contexto de la IA, el sesgo es la tendencia del modelo a favorecer ciertos tipos de información sobre otros, basado en la composición de sus datos de entrenamiento. Si el modelo aprendio de mas textos en ingles que en espanol, de mas legislacion estadounidense que mexicana, sus respuestas van a inclinarse hacía lo que mas conoce. No es un error. Es una consecuencia matematica de con que datos fue entrenado.

Preguntale a la IA sobre "depreciacion" sin especificar el contexto mexicano y es probable que te de tasas y metodos bajo US GAAP en lugar de las NIF mexicanas. Preguntale sobre "deducciones fiscales" y puede darte criterios del IRS en lugar del SAT. Preguntale sobre "obligaciones de retencion" y quizá te hable de withholding taxes bajo reglas estadounidenses en lugar de las retenciones que marca la LISR.

No es que el modelo este mal. Es que sabe mas de un contexto que de otro. Y cuando no le especificas cual quieres, se va por el que mejor conoce.

## El sesgo que no ves

Hay otro tipo de sesgo mas sutil y que a veces es mas peligroso. Los términos financieros y contables que suenan igual en Mexico y en Estados Unidos pero significan cosas diferentes.

"Revenue recognition" suena como si fuera lo mismo que reconocimiento de ingresos bajo NIF. Y en muchos aspectos lo es. Pero los criterios especificos, los momentos de reconocimiento, las excepciones -- ahí hay diferencias que importan. Si el modelo te da una respuesta sobre reconocimiento de ingresos y mezcla criterios de IFRS, US GAAP y NIF sin avisarte, tienes un problema.

Lo mismo pasa con conceptos como "related party transactions", "transfer pricing", o "tax consolidation". Cada jurisdiccion tiene sus propias reglas, y el modelo no siempre distingue cuando está cruzando de una jurisdiccion a otra.

La solución no es dejar de usar la IA. Es darle contexto mexicano siempre. "Según la legislacion fiscal mexicana vigente...", "bajo las NIF mexicanas...", "conforme al CFF y la LISR...". Cada vez que le especificas el marco legal, reduces la probabilidad de que el modelo se vaya por el lado gringo. No la eliminas, pero la reduces significativamente.

## Y esto nos lleva a la etica

Ahora, imaginemos que conoces el sesgo. Sabes que la IA tiende hacía lo gringo. Sabes que alucina. Sabes que no verifica. Y aun así, copias la respuesta del modelo, la pegas en un correo y se la mandas a tu cliente como si fuera tu análisis profesional.

Eso no es usar IA. Eso es ser un intermediario que cobra por copiar y pegar.

La pregunta etica central es está: cuando usas IA para tu trabajo profesional, donde está la linea entre asistencia y negligencia?

La linea está en tu juicio profesional.

Cuando la IA te da un primer borrador de un análisis fiscal y tu lo lees, lo verificas, lo ajustas al caso específico del cliente, le agregas tu interpretacion basada en tu experiencia, y le das forma con tu criterio profesional -- eso es usar la IA como herramienta. Tu cliente está recibiendo tu trabajo, asistido por tecnología.

Cuando copias la respuesta del modelo, le cambias el formato para que se vea bonito y se la mandas al cliente sin verificar nada -- eso no es trabajo profesional. Es un servicio de relay. Y tu cliente está pagando honorarios profesionales por algo que pudo haber obtenido gratis abriendose su propia cuenta.

Las NIF siguen requiriendo juicio profesional. El Código de Etica del Contador Público sigue aplicando. Tu responsabilidad profesional no se delega a una herramienta, igual que no se delega a una hoja de cálculo. Si Excel te da un resultado incorrecto porque metiste una formula mal, la culpa no es de Microsoft. Es tuya. Con la IA es exactamente igual, solo que la IA es mas convincente cuando se equivoca.

> **Concepto Clave**
> **Etica profesional en el uso de IA:** El uso de inteligencia artificial no modifica las obligaciones eticas del contador público. La IA es una herramienta que asiste el juicio profesional, no lo sustituye. El profesional sigue siendo responsable de verificar, interpretar y aplicar correctamente la información, independientemente de la fuente que la genere.

## La pregunta de la transparencia

Hay una pregunta que me hacen seguido: debería decirle a mis clientes que uso IA?

Mi respuesta pragmatica: depende del contexto, pero en general, no necesitas hacer un disclaimer cada vez que usas una herramienta.

Nadie le dice a su cliente "este análisis fue realizado con apoyo de Microsoft Excel, Google Chrome y un lapiz marca BIC". Las herramientas que usas para hacer tu trabajo son decisiones operativas tuyas. Lo que el cliente espera es un resultado profesional, verificado y confiable. Como llegaste a ese resultado es tu proceso interno.

Dicho esto, hay dos situaciones donde si creo que vale la pena ser transparente. La primera es cuando el cliente te pregunta directamente. Si te pregunta si usas IA, se honesto. No hay nada de que avergonzarse. Usar herramientas modernas para ser mas eficiente es una fortaleza, no una debilidad.

La segunda es cuando el uso de la IA es el servicio en si. Si un cliente te contrata para que le implementes un sistema basado en IA, o para que le automatices un proceso, obviamente tiene que saber que hay IA de por medio. Eso no es transparencia opcional, es parte del servicio.

Pero para tu trabajo cotidiano -- análisis fiscal, redaccion de correos, investigacion de criterios, preparacion de declaraciones -- la IA es una herramienta mas en tu caja. Igual que tu software contable, tu base de datos de legislacion o tu calculadora financiera.

## La responsabilidad que no se mueve

Aquí llegamos al punto mas importante de este capítulo. Y es algo que ya tocamos en el Capítulo 12 pero que necesita su propio espacio porque es la base de todo lo demás.

Si la IA genera un análisis fiscal incorrecto y tu lo usas sin verificar, el responsable eres tu. No Anthropic. No OpenAI. No Google. Tu.

Si la IA clasifica mal un gasto y eso resulta en una deduccion improcedente, el SAT no le va a mandar el requerimiento al modelo de IA. Te lo va a mandar a ti. Porque tu nombre está en la declaracion. Tu firma está en el trabajo. Tu cedula profesional respalda el servicio.

Esto no es diferente de lo que ya vives todos los días. Si un auxiliar de tu despacho comete un error en una conciliacion y tu no lo detectas al revisar, el responsable sigues siendo tu. Si un software contable calcula mal un impuesto porque los parámetros estaban desactualizados y tu presentas la declaracion así, el responsable eres tu.

La IA es igual. Mas poderosa que un auxiliar, mas rápida que un software, pero con la misma condicion: el profesional que firma es el profesional que responde.

Y eso, lejos de ser una carga, es exactamente lo que te hace valioso. Cualquiera puede abrir un chat de IA y hacerle una pregunta fiscal. Pero no cualquiera puede evaluar si la respuesta es correcta, si aplica al caso específico, si hay matices que el modelo no considero, si hay un criterio del SAT que contradice lo que el modelo sugiere. Eso lo puedes hacer tu porque eres contador. Y eso es lo que tu cliente está pagando.

## En la Práctica

El despacho del contador Alejandro usa IA para agilizar la preparacion de DIOTs. El proceso es así: exportan los CFDIs recibidos del período, le dan al modelo la información resumida de cada proveedor, y la IA genera un borrador de la clasificación de operaciones de terceros.

Un mes, la IA clasifica a un proveedor extranjero como "operaciones con nacionales" en lugar de "operaciones con extranjeros". El monto es significativo. El DIOT se presenta con esa clasificación incorrecta.

Tres meses después, el SAT envia un requerimiento de información. La clasificación no coincide con los CFDIs de comercio exterior registrados. El SAT quiere una explicación.

Quien responde el requerimiento? No es Claude. No es ChatGPT. Es el contador Alejandro, con su nombre, su cedula y su firma. Porque el firmo. El presento. El era responsable de verificar que la información fuera correcta antes de enviarla.

El error no fue usar IA. El error fue no verificar el resultado. Si Alejandro hubiera revisado la clasificación antes de presentar -- cosa que le habria tomado diez minutos -- habria detectado el error inmediatamente. La IA le ahorro dos horas de trabajo manual. Esos diez minutos de revision eran parte del proceso, no un paso opcional.

## Mito vs Realidad

- **Mito:** "Si uso IA para mi trabajo profesional, estoy haciendo trampa o siendo deshonesto con mis clientes."
- **Realidad:** Usar herramientas tecnologicas para ser mas eficiente es parte natural de la evolucion profesional. Nadie cuestiona si es etico usar Excel, un software contable o una base de datos de legislacion. La IA es otra herramienta. Lo que importa es que el resultado final sea correcto, verificado y respaldado por tu juicio profesional.

- **Mito:** "La IA no tiene sesgos porque es una maquina y las maquinas son objetivas."
- **Realidad:** Los modelos de IA reflejan los sesgos de los datos con los que fueron entrenados. Si hay mas contenido en ingles y mas legislacion estadounidense en sus datos de entrenamiento, sus respuestas van a inclinarse hacía ese contexto. Siempre específica el marco legal mexicano cuando hagas consultas fiscales o contables.

---

### Lo que te llevas

- Los modelos de IA tienen un sesgo inherente hacía la legislacion y las practicas contables estadounidenses porque fueron entrenados con mas contenido en ingles. Siempre específica el contexto mexicano en tus consultas: NIF, LISR, CFF, SAT. No asumas que el modelo sabe que estas hablando de Mexico.
- La IA es una herramienta que asiste tu juicio profesional, no lo sustituye. La linea entre uso etico y negligencia está en la verificación: si revisas, verificas y aplicas tu criterio, estas usando la herramienta correctamente. Si copias y pegas sin verificar, estas delegando tu responsabilidad profesional a un algoritmo.
- La responsabilidad legal siempre es del contador que firma. Si la IA genera información incorrecta y tu la usas sin verificar, el SAT no le va a mandar el requerimiento al modelo de IA. Te lo va a mandar a ti. Eso no cambia con la tecnología que uses.

### Pruebalo tu mismo

1. Abre cualquier modelo de IA y hazle está pregunta en espanol pero sin especificar el país: "Cuales son los metodos de depreciacion permitidos para activos fijos y cuales son las tasas aplicables?" Observa la respuesta. Cuantos criterios son mexicanos y cuantos son de otra jurisdiccion?
2. Ahora hazle la misma pregunta pero agrega: "Responde exclusivamente bajo el marco de las NIF mexicanas y la LISR vigente en Mexico. No incluyas criterios de US GAAP, IFRS ni de ninguna otra jurisdiccion." Compara ambas respuestas y nota la diferencia.
3. Reflexiona: en tu trabajo diario, cuantas veces le has hecho preguntas a la IA sin especificar el contexto mexicano? Ese simple ajuste puede cambiar radicalmente la calidad de las respuestas que recibes.

### Si quieres ir mas lejos

Cada prompt del Pack de Prompts para Contadores incluye el contexto fiscal mexicano integrado desde la primera linea. No tienes que acordarte de especificar "bajo legislacion mexicana" cada vez porque los prompts ya lo hacen por ti. Es como tener un asistente que ya sabe que trabaja en Mexico y no necesita que se lo repitas en cada instrucción.
