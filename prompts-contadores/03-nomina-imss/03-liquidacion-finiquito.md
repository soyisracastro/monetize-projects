# Cálculo de Liquidación y Finiquito

> Calcula todos los conceptos de una liquidación o finiquito laboral: salarios pendientes, aguinaldo, vacaciones, prima vacacional, indemnización constitucional y más.

## Cuándo usarlo

- Cuando un trabajador renuncia voluntariamente (finiquito)
- Cuando el patrón despide a un trabajador justificada o injustificadamente (liquidación)
- Al negociar un convenio de terminación laboral
- Para estimar el costo de despido antes de tomar la decisión
- Cuando el trabajador demanda y necesitas calcular el monto de exposición legal

## El Prompt

```
Actúa como un especialista mexicano en derecho laboral y nóminas, con conocimiento profundo de la Ley Federal del Trabajo (LFT) y la Ley del Impuesto Sobre la Renta (LISR).

Calcula la liquidación/finiquito completo para el siguiente caso.

DATOS DEL TRABAJADOR:
- Nombre: [NOMBRE]
- Fecha de ingreso: [FECHA_INGRESO]
- Fecha de separación: [FECHA_SEPARACION]
- Antigüedad exacta: [AÑOS], [MESES] y [DIAS]
- Salario diario: $[SALARIO_DIARIO]
- Salario diario integrado (SBC): $[SDI]
- Tipo de jornada: [COMPLETA/REDUCIDA]

CAUSA DE SEPARACIÓN:
[SELECCIONAR UNA]
- Renuncia voluntaria (Art. 53 fracción I LFT)
- Despido injustificado (Art. 48 LFT)
- Despido justificado / Rescisión patronal (Art. 47 LFT)
- Terminación por mutuo consentimiento (Art. 53 fracción I LFT)
- Muerte del trabajador (Art. 500 LFT)
- Incapacidad permanente total

PRESTACIONES DEL TRABAJADOR:
- Aguinaldo: [DIAS] días al año
- Vacaciones según antigüedad: [DIAS] días
- Prima vacacional: [PORCENTAJE]%
- ¿Tiene fondo de ahorro? [SI/NO] - Saldo: $[MONTO]
- ¿Tiene vales de despensa pendientes? [SI/NO] - $[MONTO]
- ¿Tiene comisiones pendientes de pago? [SI/NO] - $[MONTO]
- Otras prestaciones pendientes: [DETALLAR]

INFORMACIÓN ADICIONAL:
- Último día trabajado y pagado: [FECHA]
- ¿Tiene días de vacaciones NO disfrutadas? [SI/NO] - [DIAS] días
- ¿Se le debe algún salario? [SI/NO] - [DIAS] días
- ¿Tiene préstamo de la empresa? [SI/NO] - Saldo: $[MONTO]
- UMA vigente: $[VALOR_UMA_DIARIO]

CALCULA:

1. **FINIQUITO** (conceptos que SIEMPRE se pagan, sin importar la causa)
   | Concepto | Cálculo | Importe |
   |----------|---------|---------|
   | Salarios pendientes de pago | [X] días × $[SD] | $ |
   | Aguinaldo proporcional | ([X] días / 365) × [Y] días × $[SD] | $ |
   | Vacaciones proporcionales | ([X] días / 365) × [Y] días × $[SD] | $ |
   | Prima vacacional proporcional | Vacaciones × [Z]% | $ |
   | Vacaciones no disfrutadas | [X] días × $[SD] | $ |
   | Prima vacacional de no disfrutadas | Vacaciones no disf. × [Z]% | $ |
   | Fondo de ahorro (si aplica) | | $ |
   | Otras prestaciones pendientes | | $ |
   | **Subtotal finiquito** | | **$** |

2. **INDEMNIZACIÓN** (solo si aplica: despido injustificado o mutuo consentimiento)
   | Concepto | Cálculo | Importe |
   |----------|---------|---------|
   | Indemnización constitucional (Art. 48 LFT) | 3 meses × $[SDI] × 30 = 90 días × $[SDI] | $ |
   | 20 días por año (Art. 50 fracc. II LFT) | [Años] × 20 × $[SDI] | $ |
   | Prima de antigüedad (Art. 162 LFT) | [Años] × 12 días × $[SD_TOPADO_2UMA] | $ |
   | **Subtotal indemnización** | | **$** |

3. **CÁLCULO DE ISR**
   Aplicar el tratamiento fiscal del Art. 93 fracción XIII y Art. 95 LISR:
   - Ingresos exentos:
     - Indemnización: exenta hasta 90 veces UMA diaria por año de servicio
     - Prima de antigüedad: exenta hasta 90 UMA por año
     - Aguinaldo: exento hasta 30 UMA
     - Prima vacacional: exenta hasta 15 UMA
   - Ingresos gravados: El excedente de cada concepto
   - ISR a retener (último sueldo mensual ordinario como referencia para Art. 96)

   | Concepto | Total | Exento | Gravado |
   |----------|-------|--------|---------|
   | Aguinaldo | $ | $ | $ |
   | Prima vacacional | $ | $ | $ |
   | Indemnización | $ | $ | $ |
   | Prima antigüedad | $ | $ | $ |
   | Salarios | $ | $0 | $ |
   | **Totales** | **$** | **$** | **$** |

4. **RESUMEN DE PAGO**
   | Concepto | Importe |
   |----------|---------|
   | Total finiquito bruto | $ |
   | Total indemnización bruta | $ |
   | **Total bruto** | **$** |
   | (-) ISR retenido | $ |
   | (-) Préstamos (si aplica) | $ |
   | (-) Cuotas IMSS del periodo | $ |
   | **NETO A PAGAR** | **$** |

5. **OBLIGACIONES DEL PATRÓN**
   - Baja ante el IMSS: Plazo de 5 días hábiles
   - CFDI de nómina: Timbrar con tipo "Extraordinario" y percepciones correspondientes
   - Constancia de retenciones: Para que el trabajador presente su declaración anual
   - Aviso de rescisión (si es despido justificado): ¿Se dio por escrito?

IMPORTANTE: Señala si la antigüedad del trabajador genera algún derecho adicional o si hay algún riesgo legal en el cálculo.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE]` | Nombre del trabajador | Carlos Mendoza Ruiz |
| `[FECHA_INGRESO]` | Primer día de trabajo | 16 de julio de 2019 |
| `[FECHA_SEPARACION]` | Último día de la relación | 28 de febrero de 2025 |
| `[SALARIO_DIARIO]` | Salario diario ordinario | 520.00 |
| `[SDI]` | Salario diario integrado | 554.80 |
| Causa de separación | Elegir una de las opciones | Despido injustificado |

## Ejemplo de uso

```
DATOS DEL TRABAJADOR:
- Nombre: Laura Castillo Vega
- Fecha de ingreso: 3 de enero de 2020
- Fecha de separación: 15 de marzo de 2025
- Antigüedad: 5 años, 2 meses, 12 días
- Salario diario: $480.00
- SDI: $513.60
- Jornada completa

CAUSA DE SEPARACIÓN: Despido injustificado

PRESTACIONES:
- Aguinaldo: 15 días
- Vacaciones (6to año): 16 días
- Prima vacacional: 25%
- Sin fondo de ahorro
- Sin comisiones pendientes

INFORMACIÓN ADICIONAL:
- Último día trabajado y pagado: 15 de marzo de 2025
- Vacaciones no disfrutadas: 8 días (del periodo anterior)
- No se deben salarios
- Sin préstamos
- UMA vigente: $113.14
```

## Tips profesionales

- **Siempre calcula con el Salario Diario Integrado (SDI) para la indemnización** y con el salario diario ordinario para el finiquito. Es un error común mezclarlos.
- **La prima de antigüedad se topa a 2 veces la UMA diaria.** Si el salario diario del trabajador excede ese tope, la prima se calcula con el tope, no con el salario real.
- **Antes de despedir, calcula el costo.** Usa este prompt ANTES de tomar la decisión para que tu cliente sepa exactamente cuánto le va a costar y pueda provisionarlo o negociar un convenio.
