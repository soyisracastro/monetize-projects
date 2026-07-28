# Inteligencia Artificial para Contadores

## 3 Flujos Híbridos que te Ahorrarán Horas

*Guía práctica. Actualizada a 2026 con los modelos de frontera actuales (Claude Opus 5, Sonnet 5 y Fable 5).*

---

### Antes de empezar: el principio híbrido

La pregunta ya no es "¿la IA puede hacer mi trabajo?". La respuesta corta es: sí, buena parte del operativo. Los modelos de frontera de hoy (Claude Opus 5, Sonnet 5, o su equivalente en ChatGPT y Gemini) ya no solo redactan un correo. Ejecutan flujos completos: leen, clasifican, cruzan, calculan y te entregan un borrador.

La pregunta correcta es otra: "¿qué parte del flujo hace la máquina y qué parte me quedo yo?".

Eso es un flujo híbrido. La IA se lleva el volumen (la captura, el cruce, la primera pasada). Tú te quedas con lo que la máquina no puede firmar: el criterio, la verificación y la responsabilidad. Ante el SAT, quien responde eres tú, no el modelo.

Hay un cambio técnico que hizo esto posible y que casi nadie está aprovechando: la ventana de contexto. Los modelos frontera de 2026 leen alrededor de un millón de tokens en una sola conversación. En cristiano: en una sola sesión le cabe la Ley del ISR completa, la miscelánea vigente y el expediente entero de tu cliente. Todo junto.

Por eso el secreto ya no es "el prompt mágico". Es darle el contexto correcto. A esto se le llama context engineering, y es la diferencia entre una respuesta que puedes defender y una que solo se ve bonita.

Los tres flujos de abajo están pensados así: mucho contexto, la IA hace el trabajo pesado, tú pones el criterio. Cada uno te dice qué hace la máquina, qué te quedas tú, cómo montarlo y cuánto tiempo recuperas.

---

## Flujo 1. Clasificar tus CFDIs (deducible o no) sin capturar a mano

**El dolor:** son las 9 de la noche, tu familia ya cenó, y sigues frente a la pantalla decidiendo factura por factura si esa comida, esa gasolina o esa herramienta es deducible según la actividad del cliente. Cientos de XML, uno por uno.

**Qué hace la IA:** le pasas el lote de CFDIs (o el reporte en Excel que ya tienes) y el contexto del cliente: su régimen, su actividad económica y tus criterios de deducibilidad. El modelo lee cada comprobante, lo clasifica como deducible, no deducible o "revisar", y te explica por qué en cada caso dudoso. Un lote que te tomaba dos horas queda en minutos.

**Qué te quedas tú:** la lista de "revisar". La IA es buenísima para el 90% obvio, pero la deducibilidad de una comida de negocios o de un activo a medio camino es criterio profesional, y ahí decides tú. Nunca aceptes la clasificación completa a ciegas: revisa los casos que el modelo marcó como dudosos, que son justo donde estaba tu valor.

**El cómo:**
1. Usa un modelo de frontera con ventana grande (Claude Sonnet 5 es el punto dulce: rápido, barato y le cabe todo el lote).
2. Dale el contexto primero, no la orden. Pega: el régimen y la actividad del cliente, tus reglas de deducibilidad, y 3 o 4 ejemplos ya resueltos por ti (esto es "few-shot": le enseñas con casos, no con instrucciones).
3. Luego el lote, y pide la salida en tabla: RFC emisor, concepto, monto, clasificación, motivo, nivel de confianza.
4. Filtra por "nivel de confianza bajo" y revisa solo esos.

**El prompt** (fíjate que no es un one-liner: le das rol, contexto, ejemplos, formato y reglas. Eso es context engineering. Copia y ajusta lo que está entre [corchetes]):

```
Actúa como el gerente fiscal de mi despacho. Vas a clasificar CFDIs como
DEDUCIBLE, NO DEDUCIBLE o REVISAR para un cliente.

CONTEXTO DEL CLIENTE
- Régimen: [RESICO PF / Actividad Empresarial / Régimen General PM...]
- Actividad económica: [ej. venta de hamburguesas]
- Criterios de mi despacho: solo lo estrictamente indispensable para esa
  actividad; comidas solo con razón de negocio documentada; combustibles
  solo con pago bancarizado.

EJEMPLOS RESUELTOS (aprende de estos)
- "Carne y pan" para un negocio de hamburguesas -> DEDUCIBLE (insumo directo).
- "Cena en restaurante" sin con quién ni para qué -> REVISAR.
- "Gasolina pagada en efectivo" -> NO DEDUCIBLE (sin pago bancarizado).

TAREA
Clasifica cada CFDI del listado. Trabaja SOLO con los datos que te doy;
no inventes conceptos ni montos.

FORMATO DE SALIDA (tabla)
RFC emisor | Concepto | Monto | Clasificación | Motivo (1 línea) | Confianza

Al final, dame por separado solo los que marcaste REVISAR o confianza baja.

LISTADO
[pega aquí tu reporte de CFDIs]
```

**Cuánto ahorras:** de horas de captura a una revisión enfocada de 15 a 20 minutos por cliente.

---

## Flujo 2. Conciliar banco contra CFDI y contabilidad, con las diferencias ya marcadas

**El dolor:** cuadrar el estado de cuenta contra los CFDIs y contra las pólizas es de lo más tedioso del cierre. Un depósito sin factura, un pago que no amarra con su complemento, un cargo que nadie registró. Encontrar la diferencia toma más que corregirla.

**Qué hace la IA:** le das los tres insumos (movimientos del banco, tus CFDIs del periodo y el mayor o las pólizas) y el modelo los empata. Te devuelve lo que sí cuadra y, sobre todo, lo que no: depósitos sin CFDI, facturas PPD sin su complemento de pago, PUE que terminaron en parcialidades, cargos sin registrar. Con la ventana de un millón de tokens, procesa un periodo completo de una sola vez.

**Qué te quedas tú:** la interpretación de cada diferencia. Que un depósito no tenga factura puede ser un ingreso no facturado, un préstamo, un traspaso o un error del banco. La IA te lo señala; tú decides qué es y cómo se corrige. Esa lectura es tuya.

**El cómo:**
1. Modelo de frontera con razonamiento (Claude Opus 5 rinde muy bien aquí porque el cruce tiene lógica de varios pasos).
2. Dale un criterio de éxito claro: "empata por monto y fecha con tolerancia de 2 días; marca toda diferencia mayor a X pesos; no inventes movimientos que no estén en los datos".
3. Pide un reporte con tres secciones: cuadrado, diferencias por resolver, y una nota de por qué cada diferencia quedó marcada.
4. Trabaja la lista de diferencias como tu tablero del cierre.

**El prompt** (copia y ajusta lo que está entre [corchetes]):

```
Actúa como mi auxiliar de conciliación. Vas a cruzar tres fuentes y marcarme
SOLO las diferencias.

FUENTES
1) MOVIMIENTOS DEL BANCO: [pega el estado de cuenta o el CSV]
2) MIS CFDI DEL PERIODO: [pega el reporte de CFDI]
3) MAYOR O PÓLIZAS: [pega el mayor o las pólizas]

REGLAS
- Empata por monto y fecha, con tolerancia de 2 días.
- Marca toda diferencia mayor a $[monto] pesos.
- No inventes movimientos que no estén en los datos. Si algo no cuadra, dilo.

FORMATO DE SALIDA (tres secciones)
A) CUADRADO: cuántos movimientos y por qué monto (resumen de una línea).
B) DIFERENCIAS POR RESOLVER (tabla):
   Fecha | Monto | Quién lo tiene | A quién le falta | Posible causa | Prioridad
C) NOTA: en 3 líneas, qué reviso primero y por qué.
```

**Cuánto ahorras:** la conciliación deja de ser el cuello de botella del cierre. De medio día a un par de horas, y la mayor parte de ese tiempo ahora es criterio, no búsqueda.

---

## Flujo 3. Redactar la respuesta técnica al SAT (y traducirla a tu cliente)

**El dolor:** llega el requerimiento o la carta de invitación. Sabes la respuesta de fondo, pero armar el escrito con su fundamento legal, su tabla de conciliación y su tono correcto te quita una tarde. Y luego hay que explicárselo al cliente en palabras que entienda, sin que entre en pánico.

**Qué hace la IA:** le das el documento del SAT, tus números y las fuentes que aplican (los artículos de la ley, la regla de la miscelánea, tu papel de trabajo). El modelo te arma el borrador del escrito: estructura, fundamento, redacción formal y la tabla de soporte. Y en un segundo paso, te traduce ese mismo escrito a una explicación clara para el cliente.

**Qué te quedas tú:** la responsabilidad legal, completa. Este es el flujo donde más cuida el criterio, porque un modelo puede sonar impecable y citar un artículo que no aplica. Verifica cada fundamento contra la fuente real antes de firmar. La IA te da el 80% del borrador; el 20% que lo vuelve defendible (y tu firma) son tuyos.

**El cómo:**
1. Este es el caso de "dale la fuente de la verdad". No confíes en la memoria del modelo para lo legal: pégale el texto de los artículos y reglas que aplican, y ordénale trabajar exclusivamente sobre esas fuentes.
2. Modelo de frontera fuerte (Claude Opus 5 o Fable 5 para lo más delicado).
3. Pídelo en dos entregas: primero el escrito formal fundamentado; luego "ahora explícame esto mismo en 5 líneas para un cliente que no es contador".
4. Verifica cada cita contra la fuente. Ajusta. Firma.

**El prompt** (copia y ajusta lo que está entre [corchetes]):

```
Actúa como fiscalista senior. Vas a redactar la respuesta a un requerimiento
del SAT.

REGLA CRÍTICA: trabaja EXCLUSIVAMENTE sobre las fuentes que te pego. No cites
de memoria. Si una fuente no lo dice, no lo afirmes.

DOCUMENTO DEL SAT: [pega el requerimiento o la carta]
MIS NÚMEROS: [pega tu papel de trabajo o la conciliación]
FUENTES LEGALES (texto completo): [pega los artículos de la ley y las reglas
de la miscelánea que aplican]

ENTREGA 1 - EL ESCRITO
Redacta el escrito formal: antecedentes, argumento fundamentado citando
artículo por artículo (solo de las fuentes que te di) y una tabla de
conciliación con mis números.

ENTREGA 2 - PARA EL CLIENTE
Explica ese mismo escrito en máximo 5 líneas, en lenguaje simple, para un
cliente que no es contador y que está nervioso.
```

**Cuánto ahorras:** de una tarde por escrito a menos de una hora, con la parte legal ya estructurada y la comunicación al cliente resuelta de pasada.

---

## La regla que amarra todo

En los tres flujos el patrón es el mismo: la IA hace el trabajo completo, y el criterio y la responsabilidad siguen siendo enteramente tuyos. Ahí está tu valor.

La frase que se repite es "la IA no te reemplaza, te reemplaza el contador que la usa bien". Es cierto, pero se queda corta. El siguiente nivel no es solo usarla: es volverte quien diseña cómo opera tu despacho con ella. Cuando eres quien construyó el flujo que se usa todos los días, dejas de ser una pieza que se reemplaza. Te vuelves infraestructura. Y a la infraestructura no la despiden.

Estos tres flujos son el arranque. Si quieres el método completo (cómo hablarle a la IA para que te dé respuestas que puedas defender, cómo separar lo que sirve de lo que es humo, y cómo construir tus propias herramientas sin saber programar), ahí es donde entra el siguiente paso.

---

### Sigue aquí

- **Newsletter (fiscal + IA cada semana):** todoconta.com/entra
- **Ebook "IA para Contadores":** el método completo, capítulo por capítulo.
- **Jueves de ContadorIA:** en vivo cada jueves, 11 am hora del centro de México.

*Israel Castro. Contador Público y desarrollador. Construyo herramientas fiscales con IA. Creador de TodoConta.*
