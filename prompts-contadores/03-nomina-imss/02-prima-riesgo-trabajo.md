# Determinación de Prima de Riesgo de Trabajo

> Calcula la prima de riesgo de trabajo para la declaración anual ante el IMSS, considerando los accidentes y enfermedades del periodo.

## Cuándo usarlo

- En febrero de cada año, para presentar la Declaración Anual de la Prima de Riesgo de Trabajo (plazo: último día de febrero)
- Cuando ocurre un accidente de trabajo y necesitas evaluar el impacto en la prima
- Al calcular el costo estimado de seguridad social para el siguiente ejercicio
- Para verificar si conviene implementar medidas de seguridad que reduzcan la siniestralidad

## El Prompt

```
Actúa como un especialista mexicano en seguridad social, específicamente en la determinación de la Prima de Riesgo de Trabajo conforme al artículo 72 de la Ley del Seguro Social y el Reglamento de la Ley del Seguro Social en materia de Afiliación, Clasificación de Empresas, Recaudación y Fiscalización (RACERF).

Calcula la nueva prima de riesgo de trabajo para la Declaración Anual que debe presentarse a más tardar el último día de febrero.

DATOS DEL PATRÓN:
- Razón social: [RAZON_SOCIAL]
- Registro patronal: [REGISTRO_PATRONAL]
- Clase de riesgo: [CLASE] (I, II, III, IV o V)
- Fracción y división económica: [FRACCION]
- Prima actual: [PRIMA_ACTUAL]% (la del año que termina)

DATOS DE SINIESTRALIDAD DEL PERIODO:
(Del 1 de enero al 31 de diciembre de [AÑO])

- Número de trabajadores promedio expuestos al riesgo: [PROMEDIO_TRABAJADORES]
  (Suma de los días de exposición al riesgo de TODOS los trabajadores / 365)

Accidentes y enfermedades de trabajo:
| # | Tipo | Fecha | Trabajador | Días subsidiados | ¿Incapacidad permanente? | % de valuación | ¿Defunción? |
|---|------|-------|------------|------------------|--------------------------|----------------|-------------|
| 1 | [AT/ET] | [FECHA] | [NOMBRE] | [DIAS] | [SI/NO] | [%] | [NO] |
| 2 | [AT/ET] | [FECHA] | [NOMBRE] | [DIAS] | [SI/NO] | [%] | [NO] |
[Agregar más filas según necesidad. Si no hubo accidentes, indicar "Sin siniestros en el periodo"]

Donde:
- AT = Accidente de Trabajo
- ET = Enfermedad de Trabajo

RESUMEN DE SINIESTRALIDAD:
- Total de casos de riesgo de trabajo terminados: [N]
- Total de días subsidiados: [S]
- Suma de porcentajes de incapacidades permanentes parciales y totales: [I]
- Número de defunciones: [D]

CALCULA:

1. **FÓRMULA DE LA PRIMA** (Art. 72 LSS)
   ```
   Prima = [(S/365) + V × (I + D)] × (F/N) + M
   ```
   Donde:
   - S = Total de días subsidiados
   - V = 28 años (duración promedio de vida activa)
   - I = Suma de porcentajes de IP (parciales y totales) / 100
   - D = Número de defunciones
   - F = Factor de prima = 2.3
   - N = Número de trabajadores promedio expuestos
   - M = Prima mínima de riesgo (0.005000)

2. **DESARROLLO DEL CÁLCULO** (paso a paso)
   - Paso 1: S/365 = [resultado]
   - Paso 2: V × (I + D) = 28 × ([I] + [D]) = [resultado]
   - Paso 3: (Paso 1 + Paso 2) = [resultado]
   - Paso 4: × F/N = × 2.3/[N] = [resultado]
   - Paso 5: + M = + 0.005000 = [resultado]
   - **Prima calculada: [RESULTADO]%**

3. **VALIDACIÓN DE LÍMITES**
   - Prima mínima de la clase: [VALOR]%
   - Prima máxima de la clase: [VALOR]%
   - ¿La prima calculada está dentro de los límites? [SI/NO]
   - Prima a declarar: [RESULTADO_FINAL]%

4. **REGLA DE VARIACIÓN** (Art. 74 LSS)
   - Prima anterior: [PRIMA_ACTUAL]%
   - Prima nueva calculada: [NUEVA]%
   - Variación: [DIFERENCIA]%
   - ¿La variación excede ±1% respecto a la prima del año anterior? [SI/NO]
   - Si excede: la variación máxima permitida es ±1%
   - **Prima final a declarar: [PRIMA_FINAL]%**

5. **IMPACTO ECONÓMICO**
   - Cuota mensual estimada con prima actual: $[MONTO]
   - Cuota mensual estimada con prima nueva: $[MONTO]
   - Diferencia mensual: $[MONTO]
   - Diferencia anual: $[MONTO]

6. **RECORDATORIOS**
   - Fecha límite de presentación: último día de febrero
   - Medio: IDSE o directamente en subdelegación del IMSS
   - Vigencia de la nueva prima: del 1 de marzo de [AÑO+1] al último de febrero de [AÑO+2]

IMPORTANTE: Si no hubo siniestros, indica si la empresa puede disminuir su prima y cuál sería el resultado.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[RAZON_SOCIAL]` | Nombre de la empresa | Constructora del Norte SA de CV |
| `[REGISTRO_PATRONAL]` | Número de registro patronal | E13-45678-10-2 |
| `[CLASE]` | Clase de riesgo (I a V) | III |
| `[PRIMA_ACTUAL]` | Prima vigente este año | 1.54321 |
| `[PROMEDIO_TRABAJADORES]` | Promedio de trabajadores en el año | 28 |

## Ejemplo de uso

```
DATOS DEL PATRÓN:
- Razón social: Manufactura Industrial del Golfo SA de CV
- Registro patronal: Y60-12345-10-8
- Clase de riesgo: III
- Fracción y división: 381 - Fabricación de productos metálicos
- Prima actual: 2.59840%

DATOS DE SINIESTRALIDAD (Enero-Diciembre 2024):
- Trabajadores promedio expuestos: 45

Accidentes:
| # | Tipo | Fecha | Trabajador | Días subsidiados | ¿IP? | % valuación | ¿Defunción? |
|---|------|-------|------------|------------------|-------|-------------|-------------|
| 1 | AT | 15/Mar | Juan Pérez | 21 | No | 0 | No |
| 2 | AT | 08/Jul | María López | 45 | Sí | 8% | No |
| 3 | AT | 22/Oct | Pedro Ríos | 7 | No | 0 | No |

RESUMEN:
- Casos terminados: 3
- Días subsidiados (S): 73
- Suma de % de IP (I): 0.08
- Defunciones (D): 0
```

## Tips profesionales

- **Si no hubo accidentes**, tu prima seguramente va a bajar. Siempre presenta la declaración aunque no haya siniestros — es tu oportunidad de reducir costos.
- **Presenta la declaración ANTES del plazo.** Si no la presentas, el IMSS te mantendrá la misma prima. Si te conviene bajarla, es dinero que dejas en la mesa.
- **Revisa los ST-7 y ST-9.** Asegúrate de que los dictámenes de incapacidad estén terminados antes de hacer el cálculo. Un caso "abierto" (sin dictamen final) puede cambiar completamente tu prima si después le asignan un porcentaje de valuación.
