# Razones Financieras con Interpretación

> Calcula e interpreta las razones financieras clave de una empresa, con análisis de tendencias y benchmarks por industria.

## Cuándo usarlo

- Cuando necesitas un análisis rápido de razones financieras sin armar un Excel completo
- Para explicarle al cliente en qué condición está su negocio con lenguaje simple
- Al preparar un dictamen o informe para terceros (bancos, socios, inversionistas)
- Para comparar la evolución del negocio trimestre a trimestre
- Cuando un cliente pide un crédito y necesitas evaluar su capacidad de pago

## El Prompt

```
Actúa como un analista financiero mexicano con experiencia en evaluación de empresas PyME.

Con las siguientes cifras financieras, calcula TODAS las razones financieras relevantes, interpreta cada una y dame un diagnóstico integral.

DATOS DE LA EMPRESA:
- Nombre: [NOMBRE_EMPRESA]
- Industria: [INDUSTRIA]
- Periodo: [PERIODO]

CIFRAS DEL BALANCE GENERAL:
- Efectivo: $[MONTO]
- Cuentas por cobrar: $[MONTO]
- Inventarios: $[MONTO]
- Total activo circulante: $[MONTO]
- Activo fijo neto: $[MONTO]
- Total activo: $[MONTO]
- Proveedores: $[MONTO]
- Total pasivo a corto plazo: $[MONTO]
- Pasivo a largo plazo: $[MONTO]
- Total pasivo: $[MONTO]
- Capital contable: $[MONTO]

CIFRAS DEL ESTADO DE RESULTADOS:
- Ventas netas: $[MONTO]
- Costo de ventas: $[MONTO]
- Utilidad bruta: $[MONTO]
- Gastos de operación: $[MONTO]
- Utilidad operativa: $[MONTO]
- Intereses pagados: $[MONTO]
- Utilidad neta: $[MONTO]

CALCULA Y PRESENTA:

1. **RAZONES DE LIQUIDEZ**
   | Razón | Fórmula | Resultado | Interpretación | Benchmark industria |
   - Razón circulante
   - Prueba ácida
   - Capital de trabajo neto
   - Razón de efectivo

2. **RAZONES DE RENTABILIDAD**
   | Razón | Fórmula | Resultado | Interpretación | Benchmark industria |
   - Margen bruto
   - Margen operativo
   - Margen neto
   - ROE (Rendimiento sobre capital)
   - ROA (Rendimiento sobre activos)
   - EBITDA (si es posible estimar)

3. **RAZONES DE ENDEUDAMIENTO**
   | Razón | Fórmula | Resultado | Interpretación | Benchmark industria |
   - Razón de deuda (pasivo total / activo total)
   - Razón deuda-capital
   - Cobertura de intereses
   - Apalancamiento financiero

4. **RAZONES DE ACTIVIDAD**
   | Razón | Fórmula | Resultado | Interpretación | Benchmark industria |
   - Rotación de cuentas por cobrar / Días de cobro (DSO)
   - Rotación de inventarios / Días de inventario
   - Rotación de cuentas por pagar / Días de pago (DPO)
   - Ciclo de conversión de efectivo
   - Rotación de activos totales

5. **DIAGNÓSTICO INTEGRAL**
   - Fortalezas financieras (top 3)
   - Debilidades financieras (top 3)
   - Calificación general: Excelente / Buena / Regular / Preocupante / Crítica
   - ¿Esta empresa podría obtener un crédito bancario? ¿Por qué?

6. **RECOMENDACIONES**
   - 3-5 acciones concretas para mejorar la posición financiera
   - Prioridad: Alta / Media / Baja
   - Impacto esperado de cada acción

Para los benchmarks de industria, usa valores típicos de [INDUSTRIA] en México. Si no tienes datos exactos, indica rangos generalmente aceptados.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_EMPRESA]` | Razón social | Fundidora del Bajío SA de CV |
| `[INDUSTRIA]` | Sector específico | Manufactura metalmecánica |
| `[PERIODO]` | Periodo de las cifras | Enero-Diciembre 2025 |
| Los `$[MONTO]` | Cifras reales del balance y estado de resultados | 3,500,000 |

## Ejemplo de uso

```
DATOS DE LA EMPRESA:
- Nombre: Panadería Don Miguel SA de CV
- Industria: Alimentos - Panadería y repostería
- Periodo: Enero-Diciembre 2025

CIFRAS DEL BALANCE GENERAL:
- Efectivo: $180,000
- Cuentas por cobrar: $95,000
- Inventarios: $220,000
- Total activo circulante: $495,000
- Activo fijo neto: $850,000
- Total activo: $1,345,000
- Proveedores: $310,000
- Total pasivo a corto plazo: $420,000
- Pasivo a largo plazo: $200,000
- Total pasivo: $620,000
- Capital contable: $725,000

CIFRAS DEL ESTADO DE RESULTADOS:
- Ventas netas: $3,600,000
- Costo de ventas: $1,800,000
- Utilidad bruta: $1,800,000
- Gastos de operación: $1,350,000
- Utilidad operativa: $450,000
- Intereses pagados: $42,000
- Utilidad neta: $295,000
```

## Tips profesionales

- **Para análisis de tendencias**, usa este prompt 4 veces al año con las cifras de cada trimestre. Luego pide a la IA: "Compara estos 4 trimestres y muéstrame la tendencia de cada indicador."
- **Si tu cliente va a pedir un crédito**, los bancos en México se fijan principalmente en: razón circulante (>1.5), cobertura de intereses (>3x), y razón de deuda (<60%). Asegúrate de resaltar estos indicadores.
- **Para PyMEs mexicanas**, los benchmarks varían mucho por industria. Agrega al prompt: "Compara contra los indicadores promedio de empresas PyME en México del sector [X] según datos de INEGI o CNBV."
