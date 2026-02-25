# Análisis de Estados Financieros

> Analiza estados financieros y genera un resumen ejecutivo con indicadores clave, alertas y recomendaciones listo para presentar al cliente.

## Cuándo usarlo

- En la reunión mensual o trimestral con tu cliente para presentar resultados
- Al evaluar la salud financiera de un prospecto de cliente
- Para preparar un informe ejecutivo para el consejo de administración o socios
- Cuando necesitas identificar rápidamente áreas de oportunidad financiera
- Al comparar el desempeño de un periodo contra otro

## El Prompt

```
Actúa como un Contador Público mexicano especializado en análisis financiero conforme a las NIF (Normas de Información Financiera) mexicanas.

Analiza los siguientes estados financieros y genera un reporte ejecutivo profesional.

DATOS DE LA EMPRESA:
- Nombre: [NOMBRE_EMPRESA]
- Giro: [GIRO_O_INDUSTRIA]
- Antigüedad: [AÑOS_OPERANDO]
- Tamaño: [MICRO/PEQUEÑA/MEDIANA/GRANDE]

ESTADO DE SITUACIÓN FINANCIERA (Balance General):
Periodo: [FECHA_CORTE]

ACTIVO:
- Efectivo y equivalentes: $[MONTO]
- Cuentas por cobrar: $[MONTO]
- Inventarios: $[MONTO]
- Otros activos circulantes: $[MONTO]
- Total activo circulante: $[MONTO]
- Propiedades, planta y equipo (neto): $[MONTO]
- Otros activos no circulantes: $[MONTO]
- Total activo: $[MONTO]

PASIVO:
- Proveedores: $[MONTO]
- Acreedores diversos: $[MONTO]
- Impuestos por pagar: $[MONTO]
- Porción circulante de deuda a largo plazo: $[MONTO]
- Total pasivo a corto plazo: $[MONTO]
- Deuda a largo plazo: $[MONTO]
- Total pasivo: $[MONTO]

CAPITAL CONTABLE:
- Capital social: $[MONTO]
- Resultados acumulados: $[MONTO]
- Resultado del ejercicio: $[MONTO]
- Total capital contable: $[MONTO]

ESTADO DE RESULTADOS:
Periodo: [PERIODO] (ej. Enero-Diciembre 2024)

- Ingresos netos: $[MONTO]
- Costo de ventas: $[MONTO]
- Utilidad bruta: $[MONTO]
- Gastos de operación: $[MONTO]
  - Gastos de administración: $[MONTO]
  - Gastos de venta: $[MONTO]
- Utilidad de operación: $[MONTO]
- Gastos financieros (intereses): $[MONTO]
- Otros ingresos/gastos: $[MONTO]
- Utilidad antes de impuestos: $[MONTO]
- ISR: $[MONTO]
- Utilidad neta: $[MONTO]

PERIODO ANTERIOR (para comparativo):
[PEGAR_CIFRAS_DEL_PERIODO_ANTERIOR_SI_DISPONIBLES]

GENERA EL SIGUIENTE REPORTE:

1. **RESUMEN EJECUTIVO** (máximo 5 bullets en lenguaje claro, NO técnico)
   - Lo más importante que el dueño del negocio debe saber

2. **INDICADORES FINANCIEROS**
   | Categoría | Indicador | Valor | Interpretación | Semáforo |
   |-----------|-----------|-------|----------------|----------|
   | Liquidez | Razón circulante | | | 🟢🟡🔴 |
   | Liquidez | Prueba ácida | | | |
   | Liquidez | Capital de trabajo | | | |
   | Rentabilidad | Margen bruto % | | | |
   | Rentabilidad | Margen operativo % | | | |
   | Rentabilidad | Margen neto % | | | |
   | Rentabilidad | ROE | | | |
   | Rentabilidad | ROA | | | |
   | Endeudamiento | Razón de deuda | | | |
   | Endeudamiento | Cobertura de intereses | | | |
   | Actividad | Días de cobro (DSO) | | | |
   | Actividad | Días de inventario | | | |
   | Actividad | Días de pago (DPO) | | | |
   | Actividad | Ciclo de conversión de efectivo | | | |

3. **ANÁLISIS COMPARATIVO** (vs periodo anterior, si proporcioné datos)
   - Variaciones significativas (>10%) con explicación probable

4. **ALERTAS**
   🔴 Crítico: Requiere acción inmediata
   🟡 Atención: Monitorear de cerca
   🟢 Positivo: Fortalezas a mantener

5. **RECOMENDACIONES ACCIONABLES**
   - Mínimo 3 acciones concretas, priorizadas por impacto
   - Cada recomendación con: qué hacer, por qué, impacto esperado

El tono debe ser profesional pero comprensible para alguien que no es contador.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_EMPRESA]` | Razón social | Comercial del Norte SA de CV |
| `[GIRO_O_INDUSTRIA]` | Sector del negocio | Distribución de alimentos |
| `[FECHA_CORTE]` | Fecha del balance | Al 31 de diciembre de 2024 |
| `[PERIODO]` | Periodo del estado de resultados | Enero a diciembre 2024 |
| Los campos `$[MONTO]` | Cifras en pesos sin centavos | 1,250,000 |

## Ejemplo de uso

Sustituye los campos `$[MONTO]` con las cifras reales del estado financiero de tu cliente. Si no tienes el periodo anterior para comparativo, simplemente escribe "No disponible" en esa sección.

## Tips profesionales

- **Usa este prompt al final de cada mes** con las cifras de la balanza de comprobación. Así puedes presentarle a tu cliente un reporte ejecutivo en minutos en lugar de horas.
- **Agrega contexto de la industria.** Si conoces los promedios del sector (por ejemplo, margen bruto promedio en restaurantes es 60-65%), agrégalo al prompt para que la IA compare contra benchmarks relevantes.
- **Para presentaciones a socios o inversionistas**, agrega al final del prompt: "Genera también una versión en formato de presentación con 5 slides principales (títulos y bullets)."
