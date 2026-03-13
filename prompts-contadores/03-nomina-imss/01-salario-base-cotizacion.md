# Cálculo de Salario Base de Cotización (SBC)

> Calcula el Salario Base de Cotización y el factor de integración de un trabajador considerando todas sus prestaciones, conforme a la Ley del Seguro Social.

## Cuándo usarlo

- Al dar de alta un trabajador nuevo en el IMSS
- Cuando cambian las prestaciones de un empleado (aumento, antigüedad, etc.)
- En la revisión anual del SBC (por cambio en días de vacaciones o aguinaldo)
- Para verificar que el SBC registrado en el SUA esté correcto
- Al preparar la determinación bimestral de cuotas obrero-patronales

## El Prompt

```
Actúa como un especialista mexicano en seguridad social (IMSS) y nóminas, con conocimiento profundo de la Ley del Seguro Social (LSS) y sus reglamentos.

Calcula el Salario Base de Cotización (SBC) y el factor de integración para el siguiente trabajador, conforme a los artículos 27, 28, 29, 30 y 32 de la LSS.

DATOS DEL TRABAJADOR:
- Nombre: [NOMBRE_TRABAJADOR]
- NSS: [NUMERO_SEGURO_SOCIAL]
- Fecha de ingreso: [FECHA_INGRESO]
- Antigüedad: [AÑOS_Y_MESES]
- Salario diario: $[SALARIO_DIARIO]
- Tipo de salario: [FIJO/VARIABLE/MIXTO]
- Jornada: [COMPLETA/REDUCIDA] - [HORAS] horas

PRESTACIONES:
- Aguinaldo: [DIAS] días (mínimo legal: 15 días)
- Vacaciones: [DIAS] días según antigüedad
- Prima vacacional: [PORCENTAJE]% (mínimo legal: 25%)
- Fondo de ahorro patronal: [SI/NO] - [PORCENTAJE]% del salario
- Vales de despensa: [SI/NO] - $[MONTO] mensual
- Premio de puntualidad: [SI/NO] - [PORCENTAJE]% del salario
- Premio de asistencia: [SI/NO] - [PORCENTAJE]% del salario
- Bono de productividad: [SI/NO] - $[MONTO] mensual promedio
- Comisiones: [SI/NO] - $[MONTO] promedio mensual últimos 2 meses
- Otras prestaciones: [DETALLAR]

PRESTACIONES EXCLUIDAS DEL SBC (Art. 27 LSS):
- Herramientas de trabajo: [SI/NO]
- Fondo de ahorro (si cumple requisitos): [SI/NO]
- Aportaciones adicionales de vivienda: [SI/NO]
- Despensas en especie (hasta 40% UMA): [SI/NO]
- Alimentación (si cobra al menos 20% del salario): [SI/NO]
- Otros: [DETALLAR]

CALCULA Y PRESENTA:

1. **FACTOR DE INTEGRACIÓN**
   Desglose paso a paso:
   | Concepto | Días | Proporción diaria | Fundamento |
   |----------|------|-------------------|------------|
   | Salario base | 365 | 1.0000 | Art. 27 LSS |
   | Aguinaldo | [X] días / 365 | | Art. 87 LFT |
   | Prima vacacional | [X] días × [Y]% / 365 | | Art. 80 LFT |
   | [Otras prestaciones integrables] | | | |
   | **Factor de integración** | | **[RESULTADO]** | |

2. **SALARIO BASE DE COTIZACIÓN**
   - Salario diario: $[MONTO]
   - Factor de integración: [FACTOR]
   - **SBC = Salario diario × Factor = $[RESULTADO]**

3. **VALIDACIÓN CONTRA TOPES**
   - SBC calculado: $[MONTO]
   - Tope máximo (25 UMA): $[VALOR_25_UMA]
   - ¿Excede el tope? [SI/NO]
   - SBC a registrar: $[MONTO_FINAL]

4. **CUOTAS ESTIMADAS** (bimestral)
   | Ramo de seguro | Cuota patronal | Cuota obrera | Total |
   |----------------|----------------|--------------|-------|
   | Enfermedades y maternidad (cuota fija) | | | |
   | Enfermedades y maternidad (excedente) | | | |
   | Prestaciones en dinero | | | |
   | Gastos médicos pensionados | | | |
   | Invalidez y vida | | | |
   | Riesgo de trabajo (prima: [X]%) | | | |
   | Guarderías y prestaciones sociales | | | |
   | Retiro | | | |
   | Cesantía y vejez | | | |
   | Infonavit | | | |
   | **TOTAL** | | | |

5. **COMPARATIVO**
   - Costo mensual total del trabajador para el patrón
   - Desglose: Salario bruto + Cuotas patronales + Infonavit + ISN

IMPORTANTE: Usa el valor de la UMA vigente en [AÑO] para los cálculos. Referencia UMA 2026: $117.31 diario (vigente desde 1 de febrero de 2026). Tope máximo SBC (25 UMA): $2,932.75 diarios. El valor de la UMA se actualiza cada 1 de febrero; verifica en inegi.org.mx/temas/uma/.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_TRABAJADOR]` | Nombre del empleado | Ana Martínez López |
| `[FECHA_INGRESO]` | Cuándo entró a trabajar | 15 de marzo de 2020 |
| `[SALARIO_DIARIO]` | Salario diario (no mensual) | 450.00 |
| `[DIAS]` aguinaldo | Días que paga la empresa | 20 días |
| `[DIAS]` vacaciones | Según antigüedad y Art. 76 LFT reformado (Vacaciones Dignas 2023): 1er año=12, 2do=14, 3ro=16, 4to=18, 5to=20; a partir del 6to aumenta 2 días cada 5 años | 14 días (2do año) |

## Ejemplo de uso

```
DATOS DEL TRABAJADOR:
- Nombre: Roberto Sánchez Pérez
- Fecha de ingreso: 1 de junio de 2021
- Antigüedad: 3 años 9 meses
- Salario diario: $380.00
- Tipo de salario: Fijo
- Jornada: Completa - 8 horas

PRESTACIONES:
- Aguinaldo: 15 días
- Vacaciones: 14 días (4to año según Art. 76 LFT)
- Prima vacacional: 25%
- Fondo de ahorro patronal: Sí - 5% del salario
- Vales de despensa: Sí - $1,200 mensual
- Premio de puntualidad: Sí - 5% del salario
- Premio de asistencia: No
- Comisiones: No
```

## Tips profesionales

- **Recalcula el factor CADA AÑO.** Cuando el trabajador cumple un año más de antigüedad, sus días de vacaciones cambian y eso modifica el factor de integración. Muchos patrones olvidan esto y pagan cuotas incorrectas.
- **El fondo de ahorro solo se excluye del SBC** si la aportación patronal no excede del 13% del salario y el trabajador solo puede retirarlo al terminar la relación laboral o máximo 2 veces al año (Art. 27 fracción II LSS).
- **Valida contra el SUA.** Después de calcular, compara el SBC que obtuviste con el que aparece registrado en el SUA. Las diferencias generan capitales constitutivos.
