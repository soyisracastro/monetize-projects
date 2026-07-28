# Apéndice B: Caso real — cómo un contribuyente dejó $7,184 en la mesa

<!--
Tipo: Caso real anonimizado
Concepto principal: Aplicación práctica de los conceptos del libro a un caso real
Términos para glosario: saldo a favor, pre-llenado, filtros SAT
-->

El caso que vas a leer es real. Los nombres están cambiados, pero los números son exactos y las facturas existieron. Lo comparto porque es el ejemplo más limpio que he visto de cómo los cinco errores del Capítulo 13 se manifiestan al mismo tiempo en un contribuyente honesto, trabajador y ordenado.

Si tu operación se parece a esta — trabajas por proyectos, facturas grandes intermitentes, compras material fuerte al principio de cada obra — este apéndice es tu espejo.

## El contribuyente

**Nombre (cambiado):** Omar
**Actividad:** Instalaciones eléctricas y paneles solares
**Ciudad:** Cuernavaca, Morelos
**Régimen:** RESICO PF
**Estructura:** Él + un ayudante de planta + un electricista especialista que subcontrata por proyecto
**Modo de declarar:** Él solo, con la plataforma del SAT, mensualmente

Omar llegó al despacho a principios de abril de 2026. Llevaba dos años declarando por su cuenta. Su pregunta original: "¿cuánto debería estar pagando de ISR? Me parece mucho." Al revisar, el ISR estaba correcto — RESICO tiene tasas fijas y él las aplicaba bien. El problema estaba en el IVA.

## Los ingresos de los últimos 4 meses

| Mes | Ingresos | IVA trasladado 16% |
|---|---|---|
| Septiembre 2025 | $112,477 | $17,996 |
| Octubre 2025 | $0 | $0 |
| Noviembre 2025 | $47,414 | $7,586 |
| Diciembre 2025 | $0 | $0 |
| **Total** | **$159,891** | **$25,583** |

El patrón es clásico del oficio: meses con cobro grande alternan con meses sin cobro. Los proyectos se cierran y se cobran cuando están terminados, mientras que las compras de material se hacen antes.

## Los gastos de los últimos 4 meses

| Mes | Compras | IVA acreditable declarado |
|---|---|---|
| Septiembre 2025 | $18,500 | $2,552 |
| Octubre 2025 | $41,820 | $5,771 |
| Noviembre 2025 | $23,000 | $3,172 |
| Diciembre 2025 | $10,240 | $1,413 |
| **Total** | **$93,560** | **$12,908** |

En octubre — cuando estaba comprando material para el proyecto que cobró en noviembre — sus compras fueron 4.5 veces mayores que en septiembre. En diciembre un patrón similar: sin ingresos pero sí compras para el siguiente proyecto.

## Lo que declaró (y pagó)

| Mes | IVA trasladado | IVA acreditable | Resultado | ¿Aplicó saldo a favor? |
|---|---|---|---|---|
| Sep 2025 | $17,996 | $2,552 | **$15,444 a pagar** | N/A |
| Oct 2025 | $0 | $5,771 | **$5,771 a favor** | — |
| Nov 2025 | $7,586 | $3,172 | **$4,414 a pagar** | **No aplicó los $5,771 de octubre** |
| Dic 2025 | $0 | $1,413 | **$1,413 a favor** | — |

### Error 1: No aplicó el saldo a favor

Este es el error más caro. En octubre quedó con saldo a favor de $5,771. En noviembre le salió a pagar $4,414 y lo pagó completo de su bolsillo, sin aplicar el saldo de octubre.

La plataforma del SAT tiene un campo específico para esto: "Acreditamiento de saldo a favor del mes anterior". Omar nunca llenó ese campo porque nadie le había explicado que existía.

**Costo de este error:** $4,414 pagados que no tenía que pagar. Más $1,357 de saldo a favor restante que debió aplicarse en diciembre.

**Corrección correcta:**

| Mes | IVA a pagar (ajustado) |
|---|---|
| Nov 2025 | $0 (aplica $4,414 de los $5,771 a favor) |
| Dic 2025 | Queda $1,357 de saldo a favor + $1,413 nuevo = $2,770 a favor para aplicar en enero |

## Las facturas que el SAT excluyó

Adicionalmente, el SAT aplicó sus filtros automáticos y dejó facturas fuera del pre-llenado que sí eran legítimamente acreditables. Omar nunca las agregó manualmente.

### Octubre 2025

De 16 facturas de gastos del mes, el SAT le mostró 12. Las cuatro excluidas:

| # | Proveedor | Monto | IVA | Razón de exclusión |
|---|---|---|---|---|
| 1 | BBVA (comisiones e intereses) | $420.50 | $58.00 | Uso CFDI distinto a G01/G03 |
| 2 | Home Depot (garantía $1) | $1.00 | $0.16 | Forma de pago 01, monto irrelevante |
| 3 | BBVA (servicios de facturación) | $0.01 | $0.00 | Uso CFDI distinto a G01/G03 |
| 4 | BBVA (servicios de facturación) | $0.01 | $0.00 | Uso CFDI distinto a G01/G03 |
| | **Subtotal IVA excluido Oct** | | **$58.16** | |

### Diciembre 2025

De 10 facturas de gastos, el SAT mostró 6. Las cuatro excluidas:

| # | Proveedor | Monto | IVA | Razón de exclusión |
|---|---|---|---|---|
| 1 | BBVA (comisiones) | $362.50 | $50.00 | Uso CFDI distinto a G01/G03 |
| 2 | Ferretería El Sol | $580.00 | $80.00 | Forma de pago 01 (efectivo) |
| 3 | Gasolinera Pemex | $385.00 | $53.15 | Forma de pago 01 (efectivo) — combustible |
| 4 | Papelería Lupita | $87.00 | $12.00 | Forma de pago 01 (efectivo) |
| | **Subtotal IVA excluido Dic** | | **$195.15** | |

**Total IVA excluido en 2 meses:** $242 (redondeado).

### Nota sobre el combustible

De las 4 excluidas de diciembre, la de la gasolinera ($53 de IVA) técnicamente no se puede acreditar aunque la agregue manualmente — recordemos que el combustible requiere medio electrónico obligatorio, regla específica. Los otros $189 sí se pueden agregar manual, en cambio. Total realmente recuperable de los excluidos: alrededor de $189.

## Un detalle aparte: la factura "contaminada"

En septiembre apareció una factura de Home Depot de $4,280 pesos por material de obra. Al revisar los conceptos línea por línea, uno de los items decía:

> "ESPECIERO GIRATORIO DE BAMBU 3 NIVELES — $489.00"

Omar admitió entre risas que ese especiero estaba en la cocina de su casa. Lo compró junto con el material de una obra y la factura salió con todo junto.

Esa factura no es fraudulenta ni te hace perder el IVA de los otros items. Pero si alguna vez el SAT revisa a detalle y ve ese concepto, cuestiona la intencionalidad de TODA la factura. Lo limpio: comprar personal y profesional por separado, aunque sea en la misma visita a la tienda.

## El cuadro completo: cuánto perdió y cuánto se puede recuperar

| Rubro | Monto |
|---|---|
| Saldo a favor de octubre no aplicado | $5,771 |
| Saldo a favor de diciembre no aplicado | $1,413 |
| IVA excluido del pre-llenado recuperable | $189 |
| **Total dinero "atorado" o perdido** | **$7,373** |

De esos $7,373:
- Los saldos a favor ($7,184) se pueden recuperar — ya sea aplicándolos en declaraciones futuras (lo más fácil) o solicitando devolución (más lento y con revisión).
- Los $189 de facturas excluidas se pueden recuperar **solo** modificando declaraciones complementarias de octubre y diciembre, lo cual activa revisión. Para este caso decidimos no hacerlo — no vale la pena por $189.

Adicionalmente, pagó $4,414 en noviembre que no debió pagar. Ese pago ya se hizo, pero se puede aplicar como saldo a favor de futuras declaraciones también (pago indebido).

## El plan de regularización

Lo que hicimos con Omar — en ese orden:

**Paso 1: Declaración de enero 2026 con aplicación de saldos acumulados**

En lugar de pedir devolución (proceso de meses con revisión), decidimos aplicar los $7,184 de saldos a favor acumulados contra los próximos meses de IVA a cargo.

**Paso 2: Implementar la checklist mensual (Cap 14)**

Omar imprimió la checklist del Capítulo 14 y la pegó en su oficina. Desde enero la sigue cada mes antes de declarar.

**Paso 3: Configurar facturación automática en las plataformas**

Configuró RFC en:
- BBVA (para facturas automáticas de comisiones)
- CFE (luz)
- Telmex (internet)
- Pemex (contrató monedero electrónico Edenred para combustible)

**Paso 4: Separar cuentas y tarjetas**

Abrió una cuenta separada solo para el negocio. Una tarjeta del negocio, una personal. Toda compra del negocio pasa por esa tarjeta.

**Paso 5: Consolidar proveedor de material**

Cambió de 3 proveedores chicos (2 sin factura) a un distribuidor mayorista que factura todo. Precio 4% más alto, pero IVA acreditable al 100%.

## Resultado a los 6 meses

Con la regularización aplicada, aquí está la comparación:

| Métrica | Antes (4 meses previos) | Después (4 meses post-orden) |
|---|---|---|
| IVA trasladado total | $25,583 | $31,200 (mayor ingreso) |
| IVA acreditable capturado | $12,908 | $22,400 |
| Tasa de captura de IVA | ~50% | ~72% |
| Saldos a favor no aplicados | $7,184 | $0 |
| IVA efectivo pagado al SAT | $19,858 | $8,800 |

Pagó **$11,058 menos** de IVA en el trimestre post-orden, con ingresos **22% mayores**. No es magia — es operación ordenada con la misma actividad.

## Qué aprender de este caso

Omar no es un caso excepcional. Es el caso promedio de un contribuyente RESICO ordenado que declara por su cuenta. Hace todo de buena fe. No evade ni manipula. Simplemente no sabía:

1. Que la plataforma del SAT aplica filtros que excluyen facturas legítimas.
2. Que el saldo a favor se aplica manualmente en la siguiente declaración.
3. Que las comisiones bancarias necesitan agregarse manual.
4. Que mezclar compras personales en facturas del negocio es un riesgo.
5. Que el combustible pagado en efectivo no es acreditable.

Son cinco conceptos que este libro te explicó en 14 capítulos. Si al leer este apéndice reconociste tu propia situación — proyectos intermitentes, saldos a favor que nunca aplicas, facturas del banco que nunca bajas — hoy sabes por dónde empezar.

---

### Qué hacer si tu caso se parece

1. **Abre tus últimas 12 declaraciones de IVA.** Busca si alguna tuvo saldo a favor. Suma el total acumulado.
2. **Revisa si aplicaste esos saldos en las declaraciones posteriores.** Si no, ese dinero sigue vivo — se puede aplicar en la próxima.
3. **Compara facturas recibidas vs. facturas pre-llenadas** de los últimos 3 meses. Mide tu "tasa de captura".
4. **Decide:** ¿lo haces tú con la checklist del Cap 14, o pides ayuda?

### Si quieres acompañamiento

El caso de Omar lo resolvimos en una sesión de diagnóstico de 90 minutos y un mes de seguimiento. Si tu situación es similar — años de declaraciones propias, sospechas de que algo no cuadra, varios saldos a favor acumulados — una auditoría puntual de tu historial suele pagarse sola con lo que se recupera. Mi despacho ofrece este tipo de revisiones. Escríbeme si quieres platicar de tu caso.
