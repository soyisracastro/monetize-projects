# Flujos Pro: Cierra tu Mes con IA

## Guion y outline para grabar (mini-curso de pago, $27 USD)

*Segundo escalón de la escalera. El gratis es "3 Flujos Híbridos" (clasificar CFDIs, conciliar banco, responder al SAT). Este cobra los flujos que de verdad cierran el mes: PPD, DIOT, nómina y cierre. Se vende y se entrega en Nas.io (formato reto/curso).*

---

## Notas de producción (léelo antes de grabar)

- **Herramienta en pantalla:** Claude (claude.ai o la app de escritorio). Usa Opus 5 para lo que tiene lógica de varios pasos (conciliaciones, cierre) y Sonnet 5 para el volumen (clasificar, agrupar). Dilo en cámara para que el alumno sepa cuál elegir.
- **Formato:** un video por módulo, pantalla compartida + tu cara en esquina. No busques perfección de estudio; busca que te vean HACERLO. El valor está en verte pegar los datos y en el prompt.
- **Duración objetivo:** 8 a 15 min por flujo. El total ronda 60 a 80 min. Un tripwire no necesita ser largo, necesita entregar una victoria concreta.
- **Datos de demo:** usa un set de datos ficticio o anonimizado (RFC genéricos, montos redondos). Nunca datos reales de un cliente en cámara.
- **Cada módulo entrega dos cosas:** el video y el **prompt descargable** (pega el bloque de este documento en un .txt o Notion y súbelo como recurso del módulo en Nas.io). El prompt es lo que se llevan; el video es cómo se usa.
- **Regla de oro que repites en cada flujo:** "La IA hace el trabajo pesado. Tú firmas, tú verificas. Ante el SAT respondes tú, no el modelo." Es lo que separa esto de un curso de humo.
- **Reto (opcional):** puedes correrlo como "Automatiza tu cierre en un fin de semana": Módulo 0 el viernes, un flujo por día. Nas.io lo soporta como reto; sube la tasa de finalización.

---

## Módulo 0. Cimientos (la teoría que hace que todo lo demás funcione)

**Objetivo:** que el alumno entienda POR QUÉ estos flujos funcionan, para que no dependa de copiar tus prompts a ciegas y pueda construir los suyos.

**Duración:** 10 a 12 min, puedes partirlo en 2 videos cortos.

**Guion (qué dices y muestras):**

1. **Cómo funciona la IA hoy, sin misticismo.** No "adivina": predice la siguiente palabra y, en los modelos de frontera, planea antes de responder. Eso es todo. Deja de tratarla como un oráculo y trátala como un auxiliar muy rápido al que hay que darle expediente.
2. **La ventana de contexto de 1 millón de tokens.** En cristiano: en una sola conversación le cabe la Ley del ISR, la miscelánea vigente y el expediente completo del cliente. Por eso el secreto ya no es "el prompt mágico" sino darle el contexto correcto. Eso se llama context engineering.
3. **El cambio que casi nadie sabe (gancho de autoridad):** los modelos de frontera de Anthropic (Opus 5, Sonnet 5, Fable 5) ya no usan el parámetro de "temperatura". Ahora razonan con adaptive thinking. Aclara el matiz para que no quedes mal: esto es de la frontera de Anthropic; ChatGPT y Gemini todavía exponen la temperatura. (Este mismo tema da para un live y para actualizar el capítulo del ebook.)
4. **Las 3 reglas del flujo híbrido** (esto es el corazón, dilo lento):
   - Dale contexto, no órdenes. Primero el expediente, luego la tarea.
   - Ordénale que no invente: "trabaja solo con los datos que te doy; si no está, dilo".
   - Tú firmas. La IA te da el 90%; el 10% que lo vuelve defendible y tu firma son tuyos.
5. **Setup en 2 minutos:** qué modelo, dónde pegar los XML o el reporte de Excel, y cómo pedir la salida en tabla.

**Entregable del módulo:** una hoja de "las 3 reglas" + la plantilla base de prompt (rol, contexto, reglas, formato de salida).

---

## Flujo Pro 1. Complementos de pago PPD (caza los REP que faltan antes que el SAT)

**Objetivo:** que en minutos sepa qué facturas PPD no tienen su complemento de pago, cuáles van vencidas, y qué cobros del banco no amarran con nada.

**El dolor (gancho):** el complemento de pago es de lo que más multa silenciosa genera. Un PPD sin su REP, un PUE que terminó cobrándose en parcialidades, un depósito que no sabes a qué factura pertenece. Y te enteras hasta que el cliente recibe la invitación del SAT.

**Qué muestras en pantalla:** pegas tres cosas (reporte de CFDI de ingreso con método de pago PUE/PPD, reporte de complementos de pago emitidos, y el estado de cuenta) y la IA te devuelve la tabla de PPD sin complemento con los días de vencimiento ya calculados.

**Qué se queda el contador:** decidir qué se corrige y contactar al cliente por los cobros sin identificar. Eso es criterio, no captura.

**El prompt (descargable):**

```
Actúa como mi auxiliar de cumplimiento de complementos de pago (REP). Vas a
cruzar mis CFDIs de ingreso PPD contra los complementos de pago emitidos y
contra el banco, y marcarme SOLO lo que falta o no cuadra.

CONTEXTO
- Régimen del cliente: [RESICO PF / Actividad Empresarial / PM...]
- Periodo: [mes/año]
- Regla legal: el complemento de pago se emite a más tardar el quinto día
  natural del mes siguiente a aquel en que se recibió el pago.

FUENTES
1) CFDI DE INGRESO DEL PERIODO (UUID, método de pago PUE/PPD, forma de pago,
   fecha, total): [pega el reporte]
2) COMPLEMENTOS DE PAGO (REP) EMITIDOS (UUID del REP, UUID relacionado, monto
   del pago, fecha de pago, número de parcialidad): [pega el reporte]
3) MOVIMIENTOS DE BANCO (fecha, monto, referencia): [pega el estado de cuenta]

REGLAS
- Empata cada CFDI PPD con su(s) REP por UUID relacionado.
- No inventes UUID ni montos. Trabaja solo con lo que te doy.
- Marca: (a) PPD sin ningún REP y con el plazo vencido; (b) PPD con REP parcial
  y saldo pendiente; (c) cobros del banco que no amarran con ningún REP;
  (d) CFDI marcado PUE cuyo pago llegó en fecha distinta a la emisión (debió
  ser PPD).

FORMATO DE SALIDA (tres tablas)
A) PPD SIN COMPLEMENTO: UUID | Cliente | Monto | Fecha factura | Días vencido | Riesgo
B) PARCIALIDADES ABIERTAS: UUID | Cobrado | Saldo | Última parcialidad
C) COBROS SIN IDENTIFICAR: Fecha banco | Monto | Posible cliente
Cierra con: qué corrijo primero y por qué (3 líneas).
```

**Cuánto ahorra:** de revisar factura por factura a una lista enfocada de lo que sí urge. Una sola invitación del SAT evitada ya pagó el curso.

---

## Flujo Pro 2. Armar la DIOT del periodo (de los XML al layout, sin capturar proveedor por proveedor)

**Objetivo:** que agrupe sus CFDIs de gastos por proveedor y salga con el layout de la DIOT listo para capturar o para la carga masiva.

**El dolor (gancho):** la DIOT es de las tareas más ingratas del mes. Clasificar proveedor por proveedor, separar tasas, sacar el IVA acreditable, armar el formato. Horas de captura que no le suman nada a nadie.

**Qué muestras en pantalla:** pegas el reporte de CFDI recibidos y la IA agrupa por RFC, suma base e IVA, clasifica el tipo de tercero y de operación, y te marca los proveedores raros (sin IVA, con retención, montos atípicos).

**Qué se queda el contador:** validar la clasificación de operaciones dudosas, los proveedores nuevos y el cruce contra la declaración de IVA. La IA arma; tú validas.

**El prompt (descargable):**

```
Actúa como mi auxiliar para armar la DIOT del periodo. Vas a agrupar mis CFDIs
de gastos por proveedor y devolverme el layout listo para capturar.

CONTEXTO
- Régimen del cliente: [...]
- Periodo: [mes/año]

FUENTE
CFDI RECIBIDOS DEL PERIODO (RFC emisor, nombre, subtotal, IVA trasladado 16%,
IVA retenido, ISR retenido, concepto, uso de CFDI): [pega el reporte]

REGLAS
- Agrupa por RFC de proveedor. Suma por proveedor: base gravable e IVA.
- Clasifica el tipo de tercero: 04 proveedor nacional, 05 extranjero,
  15 global (público en general).
- Separa por tipo de operación: pagado a tasa 16%, tasa 0%, exento,
  importación, y actos con retención de IVA.
- No inventes RFC ni montos. Si un CFDI no trae IVA, sepáralo (posible exento
  o no objeto); no lo mezcles con los gravados.

FORMATO DE SALIDA
A) LAYOUT DIOT (una fila por proveedor):
   Tipo tercero | Tipo operación | RFC | Nombre | Base 16% | IVA 16% |
   Base 0% | Exento | IVA retenido | IVA importación
B) ALERTAS: proveedores nuevos, CFDI sin IVA, retenciones, montos atípicos.
C) TOTALES DE CONTROL para cuadrar contra tu declaración de IVA.
```

**Cuánto ahorra:** de medio día de captura a una revisión de la clasificación. Y de paso te cuadra la DIOT contra el IVA antes de presentar.

---

## Flujo Pro 3. Conciliar la nómina timbrada contra tu contabilidad

**Objetivo:** que cuadre lo timbrado (CFDI de nómina) contra lo registrado y lo pagado, y que salgan marcadas las diferencias por trabajador.

**El dolor (gancho):** timbras la nómina, la registras y la pagas por banco. En teoría los tres números son iguales. En la práctica hay un finiquito mal capturado, una falta que no bajaron, un ISR que no cuadra. Encontrar la diferencia toma más que corregirla.

**Qué muestras en pantalla:** pegas los CFDI de nómina, la póliza y la dispersión del banco, y la IA devuelve la conciliación por trabajador con las tres igualdades verificadas.

**Qué se queda el contador:** interpretar cada diferencia (finiquito, falta, ajuste) y decidir la corrección. La lectura es tuya.

**El prompt (descargable):**

```
Actúa como mi auxiliar de conciliación de nómina. Vas a cruzar lo timbrado
contra lo registrado y lo pagado, y marcarme SOLO las diferencias.

CONTEXTO
- Periodo: [mes/año]  |  Número de trabajadores: [...]

FUENTES
1) CFDI DE NÓMINA TIMBRADOS (por trabajador: total percepciones, total
   deducciones, ISR retenido, subsidio, neto): [pega el reporte]
2) PÓLIZA O MAYOR DE NÓMINA (lo registrado en contabilidad): [pega]
3) DISPERSIÓN EN BANCO (lo efectivamente pagado): [pega]

REGLAS
- Empata por trabajador (nombre o RFC). Tolerancia de $1 por redondeo.
- Verifica tres igualdades: timbrado = registrado = pagado (neto), y que el
  ISR retenido timbrado coincida con el provisionado.
- No inventes trabajadores ni importes.

FORMATO DE SALIDA
A) CUADRE: cuántos trabajadores cuadran y por qué monto total.
B) DIFERENCIAS (tabla): Trabajador | Timbrado | Registrado | Pagado |
   Diferencia | Posible causa (finiquito, falta, ajuste, error de captura)
C) NOTA: qué reviso primero (3 líneas).
```

**Cuánto ahorra:** la conciliación de nómina deja de ser el hueco negro del cierre. Y llegas a la declaración con el ISR retenido ya cuadrado.

---

## Flujo Pro 4. El cierre mensual asistido (aquí se junta todo)

**Objetivo:** que consolide los resultados de los flujos anteriores y salga con el número del mes MÁS el reporte para el cliente en lenguaje claro.

**El dolor (gancho):** al final del mes hay que juntar todo (ingresos, gastos deducibles, IVA, ISR provisional), sacar el número a pagar y luego explicárselo al cliente sin que entre en pánico. Es donde se te va la última tarde del cierre.

**Qué muestras en pantalla:** con los insumos ya procesados por los flujos anteriores, le pides el cálculo del mes, la comparación contra el mes anterior y el resumen ejecutivo para el cliente. Muestras cómo le exiges que enseñe el procedimiento paso a paso para poder verificarlo.

**Qué se queda el contador:** la firma, la validación del cálculo y presentarlo al cliente. Aquí es donde más cuidas el criterio: un modelo puede sonar impecable y equivocar una tasa. Por eso le prohíbes calcular tasas de memoria.

**El prompt (descargable):**

```
Actúa como el contador que arma mi cierre mensual. Vas a consolidar los
resultados que ya procesé y darme el número del mes más el reporte al cliente.

CONTEXTO
- Cliente: [...]  |  Régimen: [...]  |  Periodo: [mes/año]
- Mes anterior (para comparar): ISR pagado [...], IVA [...]

FUENTES (resultados ya validados por mí)
- INGRESOS DEL PERIODO (cobrados o facturados según régimen): [...]
- GASTOS DEDUCIBLES CLASIFICADOS: [...]
- IVA: trasladado [...], acreditable [...] (de la DIOT)
- RETENCIONES: [...]

REGLAS
- Usa EXCLUSIVAMENTE mis cifras. No recalcules tasas ni límites de memoria:
  si necesitas una tasa o un límite, pídemela antes de calcular.
- Muestra el procedimiento paso a paso para que yo lo verifique.

ENTREGA 1 - EL CÁLCULO
Base de ISR, ISR del periodo, IVA a cargo o a favor, y total a pagar.
Compara contra el mes anterior y explica la variación.

ENTREGA 2 - PARA EL CLIENTE
En 6 líneas, lenguaje simple: cuánto paga este mes, por qué cambió respecto al
anterior, y qué necesitas de él antes de la fecha límite.
```

**Cuánto ahorra:** de una tarde armando el cálculo y el correo al cliente, a menos de una hora con todo ya estructurado.

---

## Módulo de cierre. El siguiente escalón (puente al curso completo)

**Objetivo:** cerrar con la transformación y abrir la puerta al siguiente producto, sin sonar a venta desesperada.

**Guion (60 a 90 seg):**

- Recap: "Acabas de automatizar PPD, DIOT, nómina y el cierre. Eso es el operativo que te tenía preso."
- El nivel que sigue no es usar la IA: es diseñar cómo opera tu despacho con ella. Cuando eres quien construyó el flujo que se usa todos los días, dejas de ser una pieza que se reemplaza. Te vuelves infraestructura. Y a la infraestructura no la despiden.
- CTA suave: "Si quieres el método completo (construir tus propias herramientas, no solo usar prompts), ahí entra el curso completo Claude para Contadores." Un solo enlace, sin presión.

**Entregable:** el paquete de los 4 prompts en un solo archivo + la hoja de las 3 reglas.

---

## Checklist antes de publicar en Nas.io

- [ ] Grabar Módulo 0 + 4 flujos + cierre (6 videos).
- [ ] Subir los 4 prompts como recursos descargables (un .txt por flujo + uno consolidado).
- [ ] Portada del curso/reto (usa la línea gráfica navy/bone de la marca).
- [ ] Precio: 27 USD (considera mostrar el equivalente en MXN). Order bump opcional: el pack de 25 prompts.
- [ ] Copy de venta: ver `copy-venta-nasio.md`.
- [ ] Conectar el CTA desde el lead magnet gratis (correo de bienvenida de la lista) y desde el primer comentario fijado del video del live.
