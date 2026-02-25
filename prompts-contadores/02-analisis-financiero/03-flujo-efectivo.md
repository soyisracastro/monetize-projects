# Proyección de Flujo de Efectivo

> Estima el flujo de caja de los próximos 3 a 6 meses para anticipar problemas de liquidez y tomar decisiones financieras informadas.

## Cuándo usarlo

- Cuando tu cliente dice "no entiendo por qué no me alcanza el dinero si estoy vendiendo bien"
- Para planear si el negocio puede absorber una inversión, un nuevo empleado o un crédito
- Antes de la temporada alta/baja del negocio para prever necesidades de capital
- Al preparar un plan de negocios o solicitud de crédito que requiera proyecciones
- Para determinar si el cliente puede cumplir sus obligaciones fiscales mensuales

## El Prompt

```
Actúa como un Contador Público mexicano especializado en tesorería y administración del flujo de efectivo para PyMEs.

Necesito que proyectes el flujo de efectivo de los próximos [3/6] meses para la siguiente empresa, identificando posibles brechas de liquidez y recomendando acciones preventivas.

DATOS DE LA EMPRESA:
- Nombre: [NOMBRE_EMPRESA]
- Giro: [GIRO]
- Régimen fiscal: [REGIMEN]

SALDO INICIAL DE EFECTIVO:
- Saldo en bancos al [FECHA]: $[SALDO_ACTUAL]

INGRESOS RECURRENTES MENSUALES:
- Ventas promedio mensual: $[VENTAS_PROMEDIO]
- Tendencia de ventas: [ESTABLE/CRECIENTE/DECRECIENTE] - [PORCENTAJE]% mensual
- ¿Tiene estacionalidad? [SI/NO] - Detalle: [MESES_ALTOS_Y_BAJOS]
- Política de cobranza: [CONTADO/CREDITO] - Plazo: [DIAS] días
- Porcentaje de cobranza efectiva: [PORCENTAJE]%
- Otros ingresos recurrentes: $[MONTO] - Concepto: [CONCEPTO]

EGRESOS FIJOS MENSUALES:
- Nómina (incluye IMSS e Infonavit): $[MONTO]
- Renta de local/oficina: $[MONTO]
- Servicios (luz, agua, teléfono, internet): $[MONTO]
- Seguros: $[MONTO]
- Créditos/préstamos (pago mensual): $[MONTO]
- Contador/servicios profesionales: $[MONTO]
- Otros fijos: $[MONTO] - Concepto: [CONCEPTO]

EGRESOS VARIABLES MENSUALES:
- Compras de mercancía/materia prima: $[MONTO] (aprox. [PORCENTAJE]% de ventas)
- Comisiones de ventas: $[MONTO]
- Publicidad/marketing: $[MONTO]
- Mantenimiento: $[MONTO]
- Otros variables: $[MONTO]

OBLIGACIONES FISCALES:
- ISR provisional mensual (último pagado): $[MONTO]
- IVA a cargo mensual promedio: $[MONTO]
- Retenciones de ISR e IVA: $[MONTO]
- ISN (Impuesto Sobre Nómina): $[MONTO]
- Cuotas IMSS bimestrales: $[MONTO]
- ¿Tiene pagos anuales próximos? [SI/NO] - Concepto y monto: [DETALLE]

EVENTOS ESPECIALES PRÓXIMOS:
[LISTAR_GASTOS_O_INGRESOS_EXTRAORDINARIOS]
(Ejemplos: aguinaldos en diciembre, PTU en mayo, compra de equipo, pago de declaración anual, etc.)

GENERA:

1. **PROYECCIÓN MENSUAL DE FLUJO DE EFECTIVO**
   | Concepto | Mes 1 | Mes 2 | Mes 3 | Mes 4 | Mes 5 | Mes 6 |
   |----------|-------|-------|-------|-------|-------|-------|
   | Saldo inicial | | | | | | |
   | (+) Ingresos cobrados | | | | | | |
   | (+) Otros ingresos | | | | | | |
   | **Total entradas** | | | | | | |
   | (-) Nómina y cargas sociales | | | | | | |
   | (-) Proveedores/compras | | | | | | |
   | (-) Gastos fijos | | | | | | |
   | (-) Gastos variables | | | | | | |
   | (-) Obligaciones fiscales | | | | | | |
   | (-) Créditos | | | | | | |
   | (-) Eventos especiales | | | | | | |
   | **Total salidas** | | | | | | |
   | **Flujo neto del mes** | | | | | | |
   | **Saldo final** | | | | | | |

2. **ALERTAS DE LIQUIDEZ**
   - Meses en los que el saldo final es negativo o menor a [1 semana de gastos fijos]
   - Semáforo: 🟢 Holgado | 🟡 Justo | 🔴 Déficit

3. **ESCENARIOS**
   - Optimista (+20% ventas): Flujo neto total a 6 meses
   - Base (cifras proporcionadas): Flujo neto total a 6 meses
   - Pesimista (-20% ventas): Flujo neto total a 6 meses

4. **RECOMENDACIONES**
   - Acciones para mejorar el flujo de efectivo
   - Meses críticos y cómo prepararse
   - ¿Necesita financiamiento? ¿Cuánto y cuándo?
   - Reserva mínima de emergencia recomendada

Presenta las cifras redondeadas a miles para facilitar la lectura.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_EMPRESA]` | Razón social | Ferretería López SA de CV |
| `[SALDO_ACTUAL]` | Lo que hay en la cuenta del banco hoy | 285,000 |
| `[VENTAS_PROMEDIO]` | Promedio de facturación mensual | 450,000 |
| `[3/6]` | Horizonte de proyección | 6 |
| `[MESES_ALTOS_Y_BAJOS]` | Estacionalidad | Dic-Ene ventas +40%, Jul-Ago ventas -20% |

## Ejemplo de uso

```
DATOS DE LA EMPRESA:
- Nombre: Taller Mecánico Rodríguez
- Giro: Servicio automotriz
- Régimen: 612 - Actividades Empresariales PF

SALDO INICIAL DE EFECTIVO:
- Saldo en bancos al 1 de marzo 2025: $42,000

INGRESOS RECURRENTES MENSUALES:
- Ventas promedio mensual: $180,000
- Tendencia: Estable
- Estacionalidad: Sí - Diciembre y enero bajan 30%
- Cobranza: 70% contado, 30% crédito a 15 días
- Cobranza efectiva: 95%

EGRESOS FIJOS MENSUALES:
- Nómina (4 mecánicos + 1 recepcionista): $68,000
- Renta del taller: $15,000
- Servicios: $4,500
- Seguro del local: $2,000
- Contador: $3,500

EGRESOS VARIABLES:
- Refacciones y materiales: $72,000 (40% de ventas)
- Herramienta consumible: $5,000

OBLIGACIONES FISCALES:
- ISR provisional: $8,200
- IVA a cargo: $6,500
- ISN Nuevo León: $1,360
- IMSS bimestral: $18,400

EVENTOS ESPECIALES:
- Mayo: PTU estimada $35,000
- Junio: Renovación de seguros $24,000
```

## Tips profesionales

- **Actualiza la proyección cada mes** con cifras reales. Compara lo proyectado vs lo real para mejorar la precisión de las siguientes proyecciones.
- **La regla del "colchón"**: Recomienda a tu cliente mantener siempre el equivalente a 4-6 semanas de gastos fijos como reserva. Si la proyección muestra que baja de ese nivel, es momento de actuar.
- **Combina con el Prompt #6 (Estados Financieros)** para dar un análisis integral: los estados financieros muestran la foto, el flujo de efectivo muestra la película.
