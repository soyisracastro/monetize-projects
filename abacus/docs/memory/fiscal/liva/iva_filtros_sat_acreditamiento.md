# IVA — Filtros de la plataforma SAT para IVA acreditable

**Ley:** Ley del Impuesto al Valor Agregado (LIVA)
**Vigencia:** 2026
**Contexto:** Reglas de pre-llenado de la plataforma del SAT en declaraciones mensuales

---

## Filtros que aplica la plataforma del SAT

Cuando un contribuyente presenta su declaración mensual de IVA, la plataforma del SAT **auto-prellena** el IVA acreditable SOLO con CFDIs recibidos que cumplan TODOS estos criterios:

1. **Método de pago PUE** (Pago en Una sola Exhibición)
2. **Forma de pago bancarizada** (claves 02, 03, 04, 28, etc.). **Excluye forma de pago 01 (efectivo)**
3. **Uso del CFDI = G01** (Adquisición de mercancías) **o G03** (Gastos en general)

### Lo que el SAT excluye automáticamente:

| Tipo de CFDI excluido | Ejemplo | ¿Es legalmente acreditable? |
|---|---|---|
| Uso CFDI diferente a G01/G03 | Intereses bancarios (BBVA), comisiones | **SÍ** — el IVA de intereses bancarios es acreditable por ley, pero el contribuyente debe **agregarlo manualmente** en la declaración |
| Forma de pago 01 (efectivo) | Compras en ferretería pagadas en efectivo | **SÍ para montos < $2,000 MXN** — la LIVA no prohíbe acreditar IVA pagado en efectivo en montos menores |
| Método PPD sin complemento de pagos | Facturas a crédito sin complemento | **NO** hasta que exista el complemento de pagos |

### Impacto real (caso documentado):

En un caso real de contribuyente RESICO PF dedicado a instalaciones eléctricas:
- **Octubre 2025:** SAT pre-llenó 12 de 16 facturas → dejó $59 de IVA acreditable fuera
- **Diciembre 2025:** SAT pre-llenó 6 de 10 facturas → dejó $183 de IVA acreditable fuera
- **Total no acreditado:** $242 pesos que el contribuyente perdió por no agregar manualmente

### Catálogo de Usos de CFDI relevantes

| Clave | Descripción | Pre-llenado SAT |
|---|---|---|
| G01 | Adquisición de mercancías | ✅ Sí |
| G02 | Devoluciones, descuentos o bonificaciones | ✅ Sí |
| G03 | Gastos en general | ✅ Sí |
| I01 | Construcciones | ❌ No (agregar manual) |
| I02 | Mobiliario y equipo de oficina | ❌ No (agregar manual) |
| I03 | Equipo de transporte | ❌ No (agregar manual) |
| I04 | Equipo de cómputo y accesorios | ❌ No (agregar manual) |
| I08 | Otra maquinaria y equipo | ❌ No (agregar manual) |
| D01 | Honorarios médicos, dentales y gastos hospitalarios | ❌ No (deducción personal) |
| S01 | Sin efectos fiscales | ❌ No |
| CP01 | Pagos | ❌ No (complemento de pagos) |

### Formas de pago

| Clave | Descripción | Bancarizada |
|---|---|---|
| 01 | Efectivo | ❌ No |
| 02 | Cheque nominativo | ✅ Sí |
| 03 | Transferencia electrónica de fondos | ✅ Sí |
| 04 | Tarjeta de crédito | ✅ Sí |
| 28 | Tarjeta de débito | ✅ Sí |
| 99 | Por definir | ⚠️ Depende (usado en PPD) |

---

## Recomendación al contribuyente

Al presentar su declaración mensual de IVA:
1. Revisar qué facturas el SAT NO pre-llenó
2. Verificar si el IVA de esas facturas es legalmente acreditable
3. Agregarlas manualmente si corresponde
4. Especial atención a: comisiones/intereses bancarios y compras menores en efectivo
