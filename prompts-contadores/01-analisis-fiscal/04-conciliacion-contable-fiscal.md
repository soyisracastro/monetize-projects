# Conciliación Contable-Fiscal

> Compara los registros contables contra la información declarada al SAT para detectar diferencias y corregirlas antes de que el SAT las detecte.

## Cuándo usarlo

- Al preparar la declaración anual de ISR
- Cuando los números del sistema contable no cuadran con lo declarado en pagos provisionales
- Antes de una auditoría (interna o del SAT)
- Para la elaboración del dictamen fiscal
- En el cierre del ejercicio fiscal

## El Prompt

```
Actúa como un Contador Público mexicano especializado en conciliación contable-fiscal conforme a las NIF (Normas de Información Financiera) y la legislación fiscal mexicana vigente.

Necesito que me ayudes a realizar la conciliación entre la utilidad o pérdida contable y el resultado fiscal del siguiente contribuyente.

DATOS DEL CONTRIBUYENTE:
- Razón social: [RAZON_SOCIAL]
- RFC: [RFC]
- Régimen fiscal: [REGIMEN_FISCAL]
- Ejercicio fiscal: [AÑO]

CIFRAS CONTABLES (según estado de resultados):
- Ingresos totales contables: $[INGRESOS_CONTABLES]
- Costo de ventas contable: $[COSTO_VENTAS]
- Gastos de operación contables: $[GASTOS_OPERACION]
- Depreciación contable del ejercicio: $[DEPRECIACION_CONTABLE]
- Otros ingresos/gastos: $[OTROS]
- Utilidad (pérdida) contable antes de impuestos: $[UTILIDAD_CONTABLE]

CIFRAS FISCALES (según declaraciones):
- Ingresos acumulables declarados: $[INGRESOS_FISCALES]
- Deducciones autorizadas declaradas: $[DEDUCCIONES_FISCALES]
- Deducción de inversiones fiscal: $[DEPRECIACION_FISCAL]
- PTU pagada en el ejercicio: $[PTU]
- Pérdidas fiscales amortizadas: $[PERDIDAS_AMORTIZADAS]
- Resultado fiscal declarado: $[RESULTADO_FISCAL]

INFORMACIÓN ADICIONAL:
- ¿Hay ingresos cobrados no facturados? [SI/NO] Monto: $[MONTO]
- ¿Hay facturas emitidas no cobradas? [SI/NO] Monto: $[MONTO]
- ¿Hay gastos no deducibles registrados en contabilidad? [SI/NO] Detalle: [DETALLE]
- ¿Hay anticipos de clientes? [SI/NO] Monto: $[MONTO]
- ¿Se aplicó alguna provisión contable? [SI/NO] Concepto: [CONCEPTO]

GENERA:

1. **Papel de trabajo de conciliación** con el formato estándar:
   ```
   Utilidad (pérdida) contable                    $________
   (+) Ingresos fiscales no contables             $________
       - Detalle de cada partida
   (-) Ingresos contables no fiscales             $________
       - Detalle de cada partida
   (+) Deducciones contables no fiscales           $________
       - Detalle de cada partida
   (-) Deducciones fiscales no contables           $________
       - Detalle de cada partida
   (=) Utilidad (pérdida) fiscal antes de PTU      $________
   (-) PTU pagada                                  $________
   (=) Utilidad (pérdida) fiscal                   $________
   (-) Pérdidas de ejercicios anteriores           $________
   (=) Resultado fiscal                            $________
   ```

2. **Detalle de partidas de conciliación** identificando:
   - Diferencias temporales (se revertirán en ejercicios futuros)
   - Diferencias permanentes (nunca se revierten)
   - Fundamento legal de cada partida

3. **Diferencias detectadas** entre las cifras contables y fiscales con explicación de la causa probable

4. **Recomendaciones** para corregir diferencias antes del cierre fiscal

IMPORTANTE: Indica si detectas alguna diferencia que pudiera derivar en una discrepancia fiscal ante el SAT.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[RAZON_SOCIAL]` | Nombre de la empresa | Comercial del Valle SA de CV |
| `[RFC]` | RFC | CVA110523MN8 |
| `[AÑO]` | Ejercicio fiscal | 2024 |
| `[INGRESOS_CONTABLES]` | Total de ingresos en contabilidad | 8,500,000 |
| `[INGRESOS_FISCALES]` | Total declarado como ingresos acumulables | 8,350,000 |
| `[UTILIDAD_CONTABLE]` | Utilidad antes de ISR en contabilidad | 1,200,000 |
| `[RESULTADO_FISCAL]` | Resultado fiscal en la declaración | 1,050,000 |

## Ejemplo de uso

```
DATOS DEL CONTRIBUYENTE:
- Razón social: Comercial del Valle SA de CV
- RFC: CVA110523MN8
- Régimen fiscal: 601 - General de Ley Personas Morales
- Ejercicio fiscal: 2024

CIFRAS CONTABLES:
- Ingresos totales contables: $8,500,000
- Costo de ventas contable: $4,250,000
- Gastos de operación contables: $2,800,000
- Depreciación contable del ejercicio: $320,000
- Otros ingresos/gastos: $50,000 (intereses bancarios)
- Utilidad contable antes de impuestos: $1,200,000

CIFRAS FISCALES:
- Ingresos acumulables declarados: $8,350,000
- Deducciones autorizadas declaradas: $7,050,000
- Deducción de inversiones fiscal: $280,000
- PTU pagada: $85,000
- Pérdidas fiscales amortizadas: $0
- Resultado fiscal declarado: $1,050,000

INFORMACIÓN ADICIONAL:
- ¿Ingresos cobrados no facturados? No
- ¿Facturas emitidas no cobradas? Sí - $150,000 (diciembre, cobradas en enero)
- ¿Gastos no deducibles? Sí - $95,000 (multas SAT, gastos sin comprobante, exceso en viáticos)
- ¿Anticipos de clientes? No
- ¿Provisiones contables? Sí - Estimación de cuentas incobrables $45,000
```

## Tips profesionales

- **Haz esta conciliación ANTES de presentar la declaración anual.** Es más fácil corregir diferencias que enfrentar un requerimiento del SAT después.
- **Las diferencias más comunes** en México son: depreciación contable vs fiscal (tasas diferentes), gastos no deducibles registrados en contabilidad, y la diferencia entre ingreso facturado vs ingreso cobrado (devengado vs flujo de efectivo).
- **Guarda este papel de trabajo** como soporte de tu declaración. El SAT puede solicitarlo hasta 5 años después. Documenta el fundamento legal de cada partida de conciliación.
