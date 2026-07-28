# Apéndice A: Catálogo rápido — formas de pago y uso de CFDI

<!--
Tipo: Referencia rápida
Concepto principal: Catálogos SAT relevantes para IVA acreditable
Términos para glosario: forma de pago, método de pago, uso CFDI
-->

Este apéndice es para consulta rápida. No está escrito para leerse corrido — es el que vas a abrir cuando te pregunten "¿cuál forma de pago uso?" o "¿este uso de CFDI se pre-llena?".

## Forma de pago (catálogo SAT)

La forma de pago es cómo pagaste la factura. El SAT distingue entre formas "bancarizadas" (que dejan rastro en el sistema financiero) y formas que no. Para efectos del pre-llenado automático, solo las bancarizadas se incluyen.

| Clave | Descripción | ¿Bancarizada? | ¿Se pre-llena? |
|---|---|---|---|
| 01 | Efectivo | No | No |
| 02 | Cheque nominativo | Sí | Sí |
| 03 | Transferencia electrónica de fondos | Sí | Sí |
| 04 | Tarjeta de crédito | Sí | Sí |
| 05 | Monedero electrónico | Sí | Sí |
| 06 | Dinero electrónico | Sí | Sí |
| 08 | Vales de despensa | Varía | Parcial |
| 12 | Dación en pago | No | No |
| 13 | Pago por subrogación | No | No |
| 14 | Pago por consignación | No | No |
| 15 | Condonación | No | No |
| 17 | Compensación | No | No |
| 23 | Novación | No | No |
| 24 | Confusión | No | No |
| 25 | Remisión de deuda | No | No |
| 26 | Prescripción o caducidad | No | No |
| 27 | A satisfacción del acreedor | No | No |
| 28 | Tarjeta de débito | Sí | Sí |
| 29 | Tarjeta de servicios | Sí | Sí |
| 30 | Aplicación de anticipos | Varía | Parcial |
| 31 | Intermediario pagos | Varía | Parcial |
| 99 | Por definir | No | No |

### Notas importantes sobre forma de pago

- **01 Efectivo:** Si pagaste en efectivo, la factura no se pre-llena automáticamente, pero puedes agregarla manualmente si es <$2,000. **Excepción:** combustible siempre requiere medio electrónico.
- **99 Por definir:** Úsala solo si el método de pago es PPD (pagos en parcialidades) y aún no sabes cómo va a ser el pago. Cuando pagues, se emite complemento de pago con la forma real.
- **La forma de pago es distinta del método de pago.** Forma = cómo pagaste. Método = PUE (una exhibición) o PPD (parcialidades).

## Método de pago

Solo son dos, pero la diferencia es crítica:

| Clave | Descripción | ¿Acreditable al emitir? |
|---|---|---|
| PUE | Pago en Una sola Exhibición | Sí, en el mes de la factura |
| PPD | Pago en Parcialidades o Diferido | No — hasta que haya complemento de pago |

**PUE:** Pagaste todo al momento (o antes) de que te emitan la factura. Acreditas el IVA en el mes de la factura. Se pre-llena normal.

**PPD:** Vas a pagar después o en parcialidades. La factura se emite primero, y conforme pagas, se emiten "complementos de pago". El IVA **NO es acreditable** hasta que exista complemento de pago por el monto pagado.

Error típico: facturas emitidas como PPD por costumbre, aunque en realidad se paguen en una sola exhibición. Eso retrasa el acreditamiento de tu IVA. Si pagas al momento, pide que la factura sea PUE.

## Uso del CFDI (catálogo relevante)

El uso del CFDI es el dato que indica para qué usaste ese gasto. Es importante para el pre-llenado del SAT: solo los usos **G01** y **G03** se incluyen automáticamente. Los demás existen y son válidos, pero las facturas con otros usos se agregan manualmente.

### Usos que sí se pre-llenan

| Clave | Descripción | Uso típico |
|---|---|---|
| G01 | Adquisición de mercancías | Compra de mercancía para reventa |
| G03 | Gastos en general | El "cajón universal" — luz, internet, papelería, combustible, consultoría |

### Usos que NO se pre-llenan (pero pueden ser acreditables)

| Clave | Descripción | Uso típico | ¿IVA acreditable? |
|---|---|---|---|
| G02 | Devoluciones, descuentos o bonificaciones | Ajustes de factura | Depende del caso |
| I01 | Construcciones | Obras, remodelación mayor | Sí — agrega manual |
| I02 | Mobiliario y equipo de oficina por inversiones | Escritorios, sillas, muebles | Sí — agrega manual |
| I03 | Equipo de transporte | Camionetas, vehículos de carga | Sí — agrega manual |
| I04 | Equipo de cómputo y accesorios | Laptops, monitores, impresoras | Sí — agrega manual |
| I05 | Dados, troqueles, moldes, matrices | Manufactura | Sí — agrega manual |
| I06 | Comunicaciones telefónicas | Equipo de telecom | Sí — agrega manual |
| I07 | Comunicaciones satelitales | Equipo de comunicación | Sí — agrega manual |
| I08 | Otra maquinaria y equipo | Maquinaria general | Sí — agrega manual |

### Usos de persona física (no aplican para RESICO empresarial)

| Clave | Descripción |
|---|---|
| D01 | Honorarios médicos, dentales y gastos hospitalarios |
| D02 | Gastos médicos por incapacidad o discapacidad |
| D03 | Gastos funerales |
| D04 | Donativos |
| D05 | Intereses reales efectivamente pagados por créditos hipotecarios |
| D06 | Aportaciones voluntarias al SAR |
| D07 | Primas por seguros de gastos médicos |
| D08 | Gastos de transportación escolar obligatoria |
| D09 | Depósitos en cuentas para ahorro |
| D10 | Pagos por servicios educativos (colegiaturas) |

Estos usos son para que **tu** CFDI personal como persona física sirva en tu declaración anual. No se usan para facturas de gastos del negocio.

### Usos administrativos especiales

| Clave | Descripción | Uso |
|---|---|---|
| S01 | Sin efectos fiscales | Factura global al público en general |
| CP01 | Pagos | Complementos de pago |
| CN01 | Nómina | Recibo de nómina (empleados) |

## Tasas de IVA

| Tasa | Aplicación |
|---|---|
| 16% | Mayoría de productos y servicios |
| 0% | Alimentos básicos, medicinas, libros, exportación |
| Exento | Servicios médicos, educativos, intereses de créditos, vivienda |

**Tasa 0% vs. exento:** La diferencia práctica es que con tasa 0% puedes acreditar tu IVA (aunque tu tasa de venta sea 0%), mientras que con actividades exentas no puedes acreditar IVA de tus compras.

Para un contribuyente RESICO típico, esta distinción importa sobre todo si vendes alimentos, libros o medicinas (tasa 0%) o si prestas servicios médicos/educativos (exento).

## Retenciones de IVA más comunes

Cuando las personas morales te pagan, te retienen IVA. Los porcentajes típicos:

| Concepto | Retención IVA |
|---|---|
| Servicios profesionales (PF a PM) | 2/3 partes = 10.67% |
| Arrendamiento (PF a PM) | 2/3 partes = 10.67% |
| Servicios de transporte de carga (PF a PM) | 4% |
| Comisiones (PF a PM) | 2/3 partes = 10.67% |
| Servicios de outsourcing | 6% (sobre el valor total) |

Las retenciones de IVA **no son costo** para ti — son pago adelantado del IVA que te toca causar. Se compensan en tu declaración mensual.

## Plazos clave

| Obligación | Fecha límite |
|---|---|
| Declaración mensual de IVA | Día 17 del mes siguiente |
| Declaración mensual de ISR RESICO | Día 17 del mes siguiente |
| Declaración anual PF | Abril del año siguiente |
| Declaración anual PM | Marzo del año siguiente |
| Factura global al público en general | Dentro de las 72 horas siguientes al cierre del mes |
| Complemento de pago (en facturas PPD) | A más tardar el día 5 del mes siguiente al pago |
| Emisión de factura individual | Dentro de las 24 horas siguientes al hecho generador |

## Montos límite útiles

| Concepto | Límite |
|---|---|
| Pago en efectivo para acreditar IVA (excepto combustible) | Hasta $2,000 por comprobante |
| Ingresos para estar en RESICO PF | Hasta $3,500,000 al año |
| Ingresos para estar en RESICO PM | Hasta $35,000,000 al año |
| Prescripción general de IVA | 5 años |

## Referencias de ley (para tu abogado, no para ti)

Si algún día necesitas ver el fundamento legal de lo que este libro te explicó:

- **Ley del IVA (LIVA):** Artículos 1, 2, 4, 5 (acreditamiento), 5-D (factura global)
- **Reglamento LIVA:** Artículos 35, 35-A (requisitos de acreditamiento)
- **Código Fiscal de la Federación:** Artículos 29, 29-A (requisitos de CFDI)
- **Resolución Miscelánea Fiscal vigente:** Regla 2.7.1 (catálogos y reglas de facturación), 3.13 (RESICO)

Este libro te da la operación. Los artículos respaldan cuando necesitas discutir con alguien. En la práctica, casi nunca los necesitas.
