# Planeación Fiscal Estratégica

> Genera estrategias de optimización fiscal legal y personalizada para tus clientes, considerando su régimen, actividad y situación actual.

## Cuándo usarlo

- Al inicio del ejercicio fiscal para definir la estrategia del año
- Cuando un cliente te pide opciones para "pagar menos impuestos" (legalmente)
- Al evaluar un cambio de régimen fiscal
- Antes de una operación relevante (compra de activo, distribución de dividendos, reestructura corporativa)
- En la revisión trimestral o semestral de la carga fiscal del cliente

## El Prompt

```
Actúa como un Contador Público mexicano especializado en planeación fiscal y optimización tributaria legal.

Necesito que desarrolles una estrategia fiscal personalizada para el siguiente contribuyente, considerando la legislación vigente en México (LISR, LIVA, CFF, LIESPS según aplique).

PERFIL DEL CONTRIBUYENTE:
- Nombre/Razón social: [NOMBRE]
- RFC: [RFC]
- Tipo de persona: [FISICA/MORAL]
- Régimen fiscal actual: [REGIMEN_FISCAL]
- Actividad económica: [ACTIVIDAD]
- Antigüedad del negocio: [AÑOS]
- Número de empleados: [EMPLEADOS]
- Facturación anual aproximada: [FACTURACION_ANUAL]

SITUACIÓN FISCAL ACTUAL:
- ISR causado último ejercicio: $[MONTO_ISR]
- IVA a cargo promedio mensual: $[MONTO_IVA]
- Deducciones principales: [LISTA_DEDUCCIONES]
- ¿Tiene pérdidas fiscales pendientes de amortizar? [SI/NO] - Monto: $[MONTO_PERDIDAS]
- ¿Tiene CUFIN? [SI/NO] - Saldo: $[MONTO_CUFIN]
- ¿Distribuye dividendos? [SI/NO]
- Coeficiente de utilidad actual: [COEFICIENTE]

OBJETIVOS DEL CLIENTE:
[DESCRIBIR_OBJETIVOS]
(Ejemplos: reducir carga fiscal, prepararse para vender el negocio, expandir operaciones, optimizar nómina, etc.)

GENERA LO SIGUIENTE:

1. **Diagnóstico fiscal actual**
   - Tasa efectiva de ISR vs tasa del régimen
   - Áreas de oportunidad identificadas
   - Riesgos fiscales detectados

2. **Estrategias de optimización** (mínimo 5), para cada una incluye:
   - Descripción de la estrategia
   - Fundamento legal específico (artículo y ley)
   - Ahorro fiscal estimado (rango)
   - Nivel de riesgo (bajo/medio/alto)
   - Complejidad de implementación (simple/media/compleja)
   - Plazo de implementación

3. **Comparativo de regímenes** (si aplica)
   - ¿Conviene cambiar de régimen fiscal?
   - Simula la carga fiscal en el régimen actual vs alternativas
   - Pros y contras de cada opción

4. **Calendario de acciones fiscales**
   - Acciones por trimestre para implementar las estrategias
   - Fechas límite relevantes

5. **Advertencias legales**
   - Qué NO hacer (prácticas que el SAT considera agresivas o simulación)
   - Diferencia entre planeación fiscal legítima y evasión

IMPORTANTE: Todas las estrategias deben ser 100% legales y estar fundamentadas en la ley vigente. No incluyas esquemas agresivos, simulación de actos jurídicos ni operaciones con EFOS.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE]` | Razón social o nombre del contribuyente | María González López |
| `[RFC]` | RFC del contribuyente | GOLM850315AB1 |
| `[FISICA/MORAL]` | Tipo de persona | Persona Física |
| `[REGIMEN_FISCAL]` | Régimen actual | 612 - Actividades Empresariales y Profesionales |
| `[ACTIVIDAD]` | Giro del negocio | Consultora de marketing digital |
| `[FACTURACION_ANUAL]` | Ingresos anuales | $2,800,000 MXN |
| `[DESCRIBIR_OBJETIVOS]` | Lo que el cliente quiere lograr | Reducir carga de ISR, está considerando constituir una PM |

## Ejemplo de uso

```
PERFIL DEL CONTRIBUYENTE:
- Nombre: María González López
- RFC: GOLM850315AB1
- Tipo de persona: Persona Física
- Régimen fiscal actual: 612 - Actividades Empresariales y Profesionales
- Actividad económica: Consultora de marketing digital
- Antigüedad del negocio: 6 años
- Número de empleados: 3 (nómina)
- Facturación anual aproximada: $2,800,000 MXN

SITUACIÓN FISCAL ACTUAL:
- ISR causado último ejercicio: $385,000 MXN
- IVA a cargo promedio mensual: $18,000 MXN
- Deducciones principales: Nómina ($720,000), renta oficina ($180,000), servicios profesionales ($240,000), equipo de cómputo ($95,000)
- ¿Tiene pérdidas fiscales? No
- Coeficiente de utilidad actual: 0.3215

OBJETIVOS DEL CLIENTE:
Reducir carga fiscal de ISR (siente que paga mucho), está evaluando si le conviene constituirse como Persona Moral. También quiere saber si sus deducciones actuales son óptimas.
```

## Tips profesionales

- **Actualiza los datos fiscales cada trimestre.** La planeación fiscal no es un ejercicio de una sola vez. Usa este prompt al menos cada 3 meses con datos actualizados.
- **Complementa con el Prompt #4 (Conciliación Contable-Fiscal)** para tener una foto completa antes de planear.
- **Nunca prometas ahorros específicos al cliente.** Presenta rangos y siempre con la advertencia de que depende de la correcta implementación y del cumplimiento de requisitos legales.
- **RESICO 2026 — Precisiones importantes.** Se confirma oficialmente la exención de declaración anual para la mayoría de contribuyentes RESICO (solo pagos mensuales definitivos). El límite de ingresos se mantiene en $3.5M anuales. Nuevas sanciones por no emitir CFDI. Si tu cliente está en el régimen 612 y factura menos de $3.5M, evalúa seriamente el cambio a RESICO (tasas del 1% al 2.5% de ISR).
- **Regulación de plataformas digitales (vigente enero 2026).** Si tu cliente trabaja a través de apps como Uber, Rappi, DiDi, etc., ahora tiene derechos laborales (IMSS, Infonavit) y sus ingresos se reportan directamente al SAT (Art. 30-B CFF). Esto cambia la planeación fiscal para este perfil de contribuyente.
