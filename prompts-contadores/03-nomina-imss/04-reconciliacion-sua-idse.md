# Reconciliación SUA vs IDSE

> Detecta y corrige diferencias entre los movimientos registrados en el SUA y los aceptados por el IMSS en IDSE, evitando capitales constitutivos y multas.

## Cuándo usarlo

- Antes de generar el pago bimestral de cuotas obrero-patronales en el SUA
- Cuando el IMSS envía una cédula de diferencias (CLEM-22)
- Al recibir un requerimiento del IMSS por diferencias en cuotas
- En la conciliación anual de movimientos afiliatorios
- Cuando sospechas que algún movimiento (alta, baja, modificación de salario) no se procesó correctamente

## El Prompt

```
Actúa como un especialista mexicano en seguridad social y afiliación al IMSS, con dominio del SUA (Sistema Único de Autodeterminación) e IDSE (IMSS Desde Su Empresa).

Ayúdame a realizar una reconciliación entre los datos del SUA y los movimientos procesados en IDSE para detectar y corregir diferencias.

DATOS DEL PATRÓN:
- Razón social: [RAZON_SOCIAL]
- Registro patronal: [REGISTRO_PATRONAL]
- Bimestre a conciliar: [BIMESTRE] de [AÑO]
  (1o: Ene-Feb, 2o: Mar-Abr, 3o: May-Jun, 4o: Jul-Ago, 5o: Sep-Oct, 6o: Nov-Dic)
- Total de trabajadores activos en SUA: [NUMERO]
- Total de trabajadores según emisión IMSS: [NUMERO]

MOVIMIENTOS DEL PERIODO:
Altas realizadas:
| # | NSS | Nombre | Fecha alta en SUA | SBC registrado | ¿Acuse IDSE? | Fecha acuse |
|---|-----|--------|-------------------|----------------|--------------|-------------|
[LLENAR CON DATOS]

Bajas realizadas:
| # | NSS | Nombre | Fecha baja en SUA | ¿Acuse IDSE? | Fecha acuse |
|---|-----|--------|-------------------|--------------|-------------|
[LLENAR CON DATOS]

Modificaciones de salario:
| # | NSS | Nombre | SBC anterior | SBC nuevo | Fecha en SUA | ¿Acuse IDSE? |
|---|-----|--------|-------------|-----------|-------------|--------------|
[LLENAR CON DATOS]

CUOTAS CALCULADAS:
- Cuota total según SUA: $[MONTO]
- Cuota total según emisión del IMSS (si disponible): $[MONTO]
- Diferencia: $[MONTO]

INCIDENCIAS CONOCIDAS:
[DESCRIBIR CUALQUIER SITUACIÓN ESPECIAL]
(Ejemplos: incapacidades, ausentismos, movimientos rechazados por IDSE, etc.)

GENERA:

1. **CHECKLIST DE RECONCILIACIÓN**
   | Punto de verificación | SUA | IDSE | ¿Coincide? | Acción requerida |
   |----------------------|-----|------|------------|------------------|
   | Número de trabajadores activos | | | | |
   | Movimientos de alta del bimestre | | | | |
   | Movimientos de baja del bimestre | | | | |
   | Modificaciones de salario | | | | |
   | SBC de cada trabajador | | | | |
   | Días cotizados | | | | |
   | Incapacidades registradas | | | | |
   | Ausentismos | | | | |

2. **DIFERENCIAS DETECTADAS**
   Para cada diferencia encontrada:
   - Trabajador afectado (NSS)
   - Tipo de diferencia (alta no procesada, SBC incorrecto, baja no registrada, etc.)
   - Impacto en cuotas: $[MONTO]
   - Causa probable
   - Solución recomendada
   - Plazo para corregir

3. **MOVIMIENTOS CORRECTIVOS**
   | # | Tipo de movimiento | NSS | Detalle | Medio (IDSE/SUA) | Prioridad |
   |---|--------------------|-----|---------|-------------------|-----------|
   - Lista de movimientos que deben realizarse en IDSE para corregir diferencias

4. **RIESGOS SI NO SE CORRIGE**
   - Capitales constitutivos (Art. 79 LSS)
   - Multas por extemporaneidad (Art. 304 LSS)
   - Diferencias en cuotas que generan recargos y actualizaciones
   - Impacto en las prestaciones del trabajador (incapacidades, créditos Infonavit, pensión)

5. **PROCEDIMIENTO DE CORRECCIÓN**
   Paso a paso para:
   - Presentar movimientos extemporáneos en IDSE
   - Corregir SBC en el SUA
   - Generar archivo de pago con diferencias
   - Pagar diferencias de cuotas (formato de pago)

6. **PREVENCIÓN**
   - Mejores prácticas para que esto no vuelva a ocurrir
   - Calendario sugerido de conciliación (cuándo hacer qué)

IMPORTANTE: Indica los fundamentos legales aplicables de la LSS para cada tipo de corrección.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[RAZON_SOCIAL]` | Nombre de la empresa | Logística Express SA de CV |
| `[REGISTRO_PATRONAL]` | Número asignado por el IMSS | Z43-98765-10-5 |
| `[BIMESTRE]` | Bimestre que estás conciliando | 5o bimestre (Sep-Oct) |
| `[NUMERO]` trabajadores | Cantidad en cada sistema | SUA: 32, IMSS: 30 |

## Ejemplo de uso

```
DATOS DEL PATRÓN:
- Razón social: Refaccionaria del Sureste SA de CV
- Registro patronal: Y27-34567-10-3
- Bimestre: 6o bimestre (Nov-Dic) de 2024
- Trabajadores en SUA: 18
- Trabajadores según emisión IMSS: 17

MOVIMIENTOS DEL PERIODO:
Altas:
| 1 | 1234567890-1 | Pedro Gómez | 01/Nov/2024 | $325.40 | Sí | 03/Nov |
| 2 | 9876543210-5 | Ana Torres | 15/Dic/2024 | $280.00 | No | - |

Bajas:
| 1 | 5432109876-3 | Luis Ramírez | 30/Nov/2024 | Sí | 02/Dic |

Modificaciones:
| 1 | 1111222233-4 | Rosa Flores | $310.50 | $345.20 | 01/Nov | Sí |

CUOTAS:
- SUA: $48,350
- Emisión IMSS: $46,890
- Diferencia: $1,460

INCIDENCIAS:
- Ana Torres: el movimiento de alta fue rechazado por IDSE porque el NSS tenía un dígito incorrecto. No se ha reenviado.
- Hubo 1 incapacidad de 5 días para el trabajador Carlos Vega en noviembre.
```

## Tips profesionales

- **Descarga la emisión mensual del SUA** (archivo EMA/EBA) y compárala contra el reporte de trabajadores de IDSE. Las diferencias casi siempre están en movimientos que se enviaron pero no se procesaron.
- **Los movimientos rechazados por IDSE NO se aplican automáticamente.** Si IDSE rechazó un alta o modificación, debes corregir el error y reenviar. Mientras tanto, el SUA sigue calculando cuotas con datos que el IMSS no tiene.
- **Haz esta reconciliación CADA bimestre, no solo cuando llega un requerimiento.** Corregir en caliente es fácil; corregir 2 años después es costoso y genera multas.
