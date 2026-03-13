# Cálculo de ISN por Estado

> Calcula el Impuesto Sobre Nómina (ISN) considerando las tasas, bases y exenciones específicas de cada entidad federativa de México.

## Cuándo usarlo

- Cada mes al determinar y pagar el ISN estatal
- Cuando una empresa tiene trabajadores en múltiples estados y necesitas calcular ISN por cada entidad
- Al presupuestar el costo laboral total de un nuevo empleado
- Cuando un estado modifica su tasa de ISN y necesitas recalcular
- Para comparar el costo fiscal laboral entre diferentes estados (por ejemplo, al decidir dónde abrir una sucursal)

## El Prompt

```
Actúa como un especialista mexicano en impuestos estatales, específicamente en el Impuesto Sobre Nómina (ISN) / Impuesto Sobre Erogaciones por Remuneraciones al Trabajo Personal.

Calcula el ISN que debe pagar la siguiente empresa, considerando las disposiciones vigentes de la ley de hacienda del estado correspondiente.

DATOS DEL PATRÓN:
- Razón social: [RAZON_SOCIAL]
- Estado(s) donde tiene trabajadores: [ESTADO(S)]
- Periodo de cálculo: [MES_Y_AÑO]
- Frecuencia de pago: [MENSUAL/BIMESTRAL/TRIMESTRAL]

NÓMINA DEL PERIODO:
[Si es un solo estado]
| # | Trabajador | Salario bruto | Horas extra (gravadas) | Aguinaldo | Prima vac. | Gratificaciones | Comisiones | Otros gravados |
|---|-----------|---------------|----------------------|-----------|------------|-----------------|------------|----------------|
[LLENAR CON DATOS]

Total de nómina bruta: $[MONTO]

[Si son múltiples estados, repetir la tabla por cada estado]
Estado: [NOMBRE_ESTADO]
Total nómina bruta en este estado: $[MONTO]
Número de trabajadores: [CANTIDAD]

CONCEPTOS DE NÓMINA A EVALUAR:
- Sueldos y salarios: $[MONTO]
- Tiempo extra: $[MONTO]
- Aguinaldo pagado en el periodo: $[MONTO]
- Prima vacacional pagada: $[MONTO]
- PTU pagada: $[MONTO]
- Comisiones: $[MONTO]
- Bonos y gratificaciones: $[MONTO]
- Previsión social gravada: $[MONTO]
- Separaciones (liquidaciones/finiquitos): $[MONTO]
- Honorarios asimilados a salarios: $[MONTO]
- Otros: $[MONTO]

CALCULA:

1. **TASA VIGENTE DEL ESTADO**
   - Estado: [NOMBRE]
   - Tasa de ISN vigente: [X]%
   - Fundamento legal: Artículo [X] de la Ley de Hacienda del Estado de [NOMBRE]
   - ¿Existe alguna tasa diferenciada o estímulo? [SI/NO] Detalle

2. **BASE GRAVABLE**
   | Concepto | Monto | ¿Grava para ISN? | Fundamento | Base gravable |
   |----------|-------|-------------------|------------|---------------|
   | Sueldos y salarios | $ | | | $ |
   | Tiempo extra | $ | | | $ |
   | Aguinaldo | $ | | | $ |
   | Prima vacacional | $ | | | $ |
   | PTU | $ | | | $ |
   | Comisiones | $ | | | $ |
   | Bonos | $ | | | $ |
   | Previsión social | $ | | | $ |
   | Honorarios asimilados | $ | | | $ |
   | **Total base gravable** | | | | **$** |

   NOTA: Cada estado tiene reglas diferentes sobre qué conceptos gravan. Indica específicamente cuáles aplican en [ESTADO].

3. **EXENCIONES Y SUBSIDIOS** (si aplica)
   - ¿El estado tiene monto exento? [SI/NO] - Monto: $[X]
   - ¿Existe subsidio para PyMEs o nuevas empresas? [SI/NO]
   - ¿Aplica algún estímulo fiscal vigente? [SI/NO]
   - Base gravable después de exenciones: $[MONTO]

4. **CÁLCULO DEL IMPUESTO**
   ```
   Base gravable:            $[MONTO]
   (-) Exenciones:           $[MONTO]
   (=) Base neta:            $[MONTO]
   (×) Tasa:                 [X]%
   (=) ISN a pagar:          $[MONTO]
   ```

5. **[Si hay múltiples estados] RESUMEN CONSOLIDADO**
   | Estado | Base gravable | Tasa | ISN | Fecha límite de pago |
   |--------|---------------|------|-----|---------------------|
   | | $ | % | $ | |
   | **Total** | **$** | | **$** | |

6. **OBLIGACIONES FORMALES**
   - Fecha límite de pago: [DIA] de cada mes (o bimestre)
   - Medio de pago: [PORTAL_ESTATAL / BANCO / OTRO]
   - ¿Se presenta declaración? [SI/NO] - ¿Dónde?
   - ¿Se emite CFDI de retención? [SI/NO]

IMPORTANTE: Las tasas de ISN varían por estado y pueden cambiar cada año fiscal. Confirma la tasa vigente en [AÑO].
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[RAZON_SOCIAL]` | Nombre de la empresa | Grupo Industrial del Norte SA de CV |
| `[ESTADO(S)]` | Dónde tiene nómina | Nuevo León y Tamaulipas |
| `[MES_Y_AÑO]` | Periodo | Enero 2026 |
| Los montos | Cifras de la nómina del mes | 285,000 |

## Ejemplo de uso

```
DATOS DEL PATRÓN:
- Razón social: Servicios Tecnológicos de Occidente SA de CV
- Estados: Jalisco y Ciudad de México
- Periodo: Febrero 2026
- Frecuencia: Mensual

NÓMINA - JALISCO (8 trabajadores):
- Sueldos y salarios: $145,000
- Tiempo extra: $3,200
- Aguinaldo: $0 (no aplica este mes)
- Comisiones: $18,000
- Bonos: $12,000
Total: $178,200

NÓMINA - CDMX (5 trabajadores):
- Sueldos y salarios: $112,000
- Tiempo extra: $0
- Honorarios asimilados: $25,000
Total: $137,000
```

## Tips profesionales

- **Las tasas de ISN en México van del 2.40% al 5%** dependiendo del estado y concepto. Referencia de tasas 2026 (verifica siempre en el portal de hacienda estatal, ya que cambian cada año):
  - **4%**: CDMX (subió de 3% en 2025), Chihuahua (subió de 3%), Baja California, Quintana Roo, Tabasco
  - **3.75%**: Yucatán (subió de 3%)
  - **3%**: Aguascalientes, Baja California Sur (subió de 2%), Campeche, Chiapas, Coahuila, Colima (subió de 2%), Durango, Estado de México, Guanajuato, Guerrero, Hidalgo, Jalisco (5% para asimilados), Michoacán, Morelos, Nayarit, Nuevo León, Oaxaca, Puebla, Querétaro, San Luis Potosí, Sinaloa, Sonora, Tamaulipas, Tlaxcala, Veracruz, Zacatecas
  - **2.5%-2.4%**: Algunos estados mantienen tasas menores para ciertos conceptos
- **Cuidado con los honorarios asimilados.** Algunos estados los incluyen en la base del ISN y otros no. Es una de las diferencias más comunes entre entidades.
- **Si tu cliente abre operaciones en un nuevo estado**, recuerda inscribirlo en la hacienda estatal correspondiente. El ISN es responsabilidad del patrón y la omisión genera multas.
