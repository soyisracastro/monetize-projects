# Presupuesto Anual

> Crea un presupuesto anual completo basado en datos históricos del negocio, con metas de ingresos, control de gastos y puntos de equilibrio.

## Cuándo usarlo

- Al inicio de cada ejercicio fiscal para planear el año financiero
- Cuando el cliente quiere establecer metas de ventas y control de gastos
- Para evaluar la viabilidad de un proyecto de expansión o inversión
- Al preparar un plan de negocios para socios, bancos o inversionistas
- En la revisión semestral para ajustar el presupuesto del segundo semestre

## El Prompt

```
Actúa como un Contador Público mexicano especializado en presupuestos y planeación financiera para PyMEs.

Con los datos históricos que te proporciono, elabora un presupuesto anual completo para el ejercicio [AÑO].

DATOS DE LA EMPRESA:
- Nombre: [NOMBRE_EMPRESA]
- Giro: [GIRO]
- Años operando: [AÑOS]
- Número de empleados: [EMPLEADOS]

DATOS HISTÓRICOS:
Ventas mensuales del año anterior:
| Mes | Ventas | Costo de venta | Gastos operación |
|-----|--------|----------------|------------------|
| Enero | $[MONTO] | $[MONTO] | $[MONTO] |
| Febrero | $[MONTO] | $[MONTO] | $[MONTO] |
| Marzo | $[MONTO] | $[MONTO] | $[MONTO] |
| Abril | $[MONTO] | $[MONTO] | $[MONTO] |
| Mayo | $[MONTO] | $[MONTO] | $[MONTO] |
| Junio | $[MONTO] | $[MONTO] | $[MONTO] |
| Julio | $[MONTO] | $[MONTO] | $[MONTO] |
| Agosto | $[MONTO] | $[MONTO] | $[MONTO] |
| Septiembre | $[MONTO] | $[MONTO] | $[MONTO] |
| Octubre | $[MONTO] | $[MONTO] | $[MONTO] |
| Noviembre | $[MONTO] | $[MONTO] | $[MONTO] |
| Diciembre | $[MONTO] | $[MONTO] | $[MONTO] |

GASTOS FIJOS ACTUALES (mensuales):
- Nómina total (incluyendo cargas sociales): $[MONTO]
- Renta: $[MONTO]
- Servicios: $[MONTO]
- Seguros: $[MONTO]
- Créditos/préstamos: $[MONTO]
- Otros fijos: $[MONTO]

EXPECTATIVAS PARA [AÑO]:
- Crecimiento esperado en ventas: [PORCENTAJE]%
- ¿Planea contratar personal? [SI/NO] - Detalle: [CUANTOS_Y_SUELDO]
- ¿Inversiones planeadas? [SI/NO] - Detalle: [QUE_Y_CUANTO]
- ¿Aumentos en costos esperados? [SI/NO] - Detalle: [CONCEPTO_Y_PORCENTAJE]
- ¿Nuevas líneas de negocio? [SI/NO] - Detalle: [DESCRIPCION]
- Inflación estimada para el año: [PORCENTAJE]%

GENERA:

1. **PRESUPUESTO DE INGRESOS** (mensual)
   | Mes | Ventas proyectadas | Crecimiento vs año anterior |
   - Considerando estacionalidad del año anterior
   - Meta anual total

2. **PRESUPUESTO DE EGRESOS** (mensual)
   | Mes | Costo venta | Nómina | Renta | Servicios | Variables | Fiscal | Total |
   - Desglose de gastos fijos y variables
   - Ajustados por inflación y crecimiento

3. **PRESUPUESTO DE OBLIGACIONES FISCALES** (mensual)
   | Mes | ISR provisional | IVA | Retenciones | ISN | IMSS | Total fiscal |
   - Estimación basada en las ventas proyectadas
   - Señalar meses con obligaciones especiales (anual, PTU, ajuste anual)

4. **PUNTO DE EQUILIBRIO**
   - Ventas mensuales mínimas para cubrir todos los gastos
   - En pesos y en unidades/servicios (si aplica)
   - Margen de seguridad actual

5. **ESTADO DE RESULTADOS PROYECTADO** (anual)
   - Ingresos → Utilidad neta proyectada
   - Comparativo vs año anterior

6. **INDICADORES META**
   | Indicador | Año anterior | Meta [AÑO] |
   - Margen bruto
   - Margen operativo
   - Margen neto
   - Costo como % de ventas
   - Gastos como % de ventas

7. **ESCENARIOS**
   - Optimista (+15% ventas)
   - Base (proyección normal)
   - Pesimista (-15% ventas)
   - Para cada escenario: utilidad neta esperada

8. **CALENDARIO DE REVISIÓN**
   - Fechas recomendadas para revisar el presupuesto vs real
   - KPIs a monitorear cada mes

Presenta las cifras en formato de miles de pesos para facilitar la lectura.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_EMPRESA]` | Razón social | Clínica Dental Sonrisa |
| `[AÑO]` | Año del presupuesto | 2026 |
| `[GIRO]` | Actividad del negocio | Servicios dentales |
| Los montos mensuales | Cifras reales del año anterior (puedes sacarlas de tu balanza de comprobación) | 320,000 |
| `[PORCENTAJE]` crecimiento | Meta de crecimiento | 12% |

## Ejemplo de uso

```
DATOS DE LA EMPRESA:
- Nombre: Papelería y Centro de Copiado "El Estudiante"
- Giro: Venta de papelería y servicios de impresión
- Años operando: 8
- Empleados: 4

DATOS HISTÓRICOS (simplificado):
| Mes | Ventas | Costo venta | Gastos |
| Ene | $95,000 | $52,000 | $35,000 |
| Feb | $110,000 | $60,000 | $36,000 |
| Mar | $105,000 | $57,000 | $35,500 |
(... completar los 12 meses)

GASTOS FIJOS MENSUALES:
- Nómina: $32,000
- Renta: $8,000
- Servicios: $3,200
- Seguro: $1,500

EXPECTATIVAS 2026:
- Crecimiento esperado: 8%
- Contratar 1 empleado medio tiempo en agosto (regreso a clases): $6,000/mes
- Inversión: Impresora de gran formato en marzo: $85,000
- Aumento en papel y materiales: 5% a partir de julio
- Inflación estimada: 4.5%
```

## Tips profesionales

- **Usa la regla 80/20 para los gastos variables.** Generalmente el 80% de los costos variables se concentra en el 20% de los conceptos. Identifica esos conceptos clave y presupuéstalos con mayor detalle.
- **Revisa el presupuesto vs real cada mes** (no solo al final del año). Usa el Prompt #6 (Estados Financieros) con las cifras reales y compara contra lo presupuestado. Las desviaciones mayores al 10% requieren análisis.
- **El presupuesto fiscal es clave en México.** Muchos clientes olvidan presupuestar la PTU (mayo), el ajuste anual de ISR (marzo), y las cuotas bimestrales del IMSS. Estas pueden representar golpes fuertes al flujo si no se prevén.
