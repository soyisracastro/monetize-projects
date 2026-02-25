# Gestión de Vencimientos y Obligaciones Fiscales

> Crea un calendario completo de obligaciones fiscales con alertas y recordatorios, para que nunca más se te pase una fecha límite.

## Cuándo usarlo

- Al inicio de cada año para planear todas las obligaciones del ejercicio
- Cuando das de alta un nuevo cliente y necesitas saber todas sus fechas límite
- Para crear un sistema de alertas que te avise con anticipación
- Cuando el SAT publica nuevas obligaciones o cambia plazos
- Al delegar clientes a un colaborador y necesitas que sepa las fechas

## El Prompt

```
Actúa como un especialista mexicano en cumplimiento fiscal y gestión de obligaciones ante el SAT, IMSS e Infonavit.

Genera un calendario completo de obligaciones fiscales para el siguiente contribuyente, considerando TODAS las obligaciones mensuales, bimestrales, trimestrales, semestrales y anuales.

DATOS DEL CONTRIBUYENTE:
- Nombre: [NOMBRE]
- RFC: [RFC]
- Tipo de persona: [FÍSICA/MORAL]
- Régimen fiscal: [REGIMEN]
- Actividad: [ACTIVIDAD]
- Fecha de inicio de operaciones: [FECHA]
- ¿Tiene empleados? [SI/NO] - Cantidad: [NÚMERO]
- ¿Es retenedor? [SI/NO]
- Estado donde opera: [ESTADO(S)]

OBLIGACIONES ESPECÍFICAS DEL CONTRIBUYENTE:
(Según su constancia de situación fiscal)
- [ ] Pago provisional ISR mensual
- [ ] Pago definitivo IVA mensual
- [ ] Retenciones ISR (honorarios, arrendamiento, etc.)
- [ ] Retenciones IVA
- [ ] DIOT mensual
- [ ] Contabilidad electrónica mensual
- [ ] Declaración anual ISR
- [ ] Cuotas IMSS bimestrales
- [ ] Aportaciones Infonavit bimestrales
- [ ] ISN estatal [ESTADO]
- [ ] Declaración informativa de operaciones con terceros
- [ ] Declaración informativa múltiple (DIM)
- [ ] Otra: [ESPECIFICAR]

AÑO FISCAL: [AÑO]

GENERA:

1. **CALENDARIO ANUAL COMPLETO**
   Para cada mes del año, lista TODAS las obligaciones con:

   | Mes | Obligación | Periodo que ampara | Fecha límite | Medio de presentación | Prioridad |
   |-----|------------|-------------------|--------------|----------------------|-----------|

   INCLUYE obligaciones especiales como:
   - Declaración anual (marzo PM / abril PF)
   - PTU (mayo)
   - Prima de riesgo de trabajo (febrero)
   - Ajuste anual de ISR trabajadores (febrero)
   - SIPARE (actualización anual)
   - Opinión de cumplimiento (32-D) si está obligado
   - Cualquier declaración informativa aplicable

2. **SISTEMA DE ALERTAS** (3 niveles)
   Para cada obligación:
   - 🟢 Alerta temprana: [X] días antes → "Empieza a preparar..."
   - 🟡 Alerta de advertencia: [X] días antes → "Fecha límite próxima..."
   - 🔴 Alerta crítica: [X] días antes → "ÚLTIMO DÍA para presentar..."

   Sugiere cuántos días antes debe activarse cada nivel según la complejidad de la obligación.

3. **FECHAS LÍMITE POR MES** (formato de vista rápida)
   ```
   ENERO [AÑO]:
   📅 Día 17: ISR provisional (dic), IVA (dic), Retenciones (dic)
   📅 Día 17: DIOT (dic)
   📅 Día 17: ISN [estado] (dic)
   📅 Último día: IMSS/Infonavit 6to bimestre (nov-dic)

   FEBRERO [AÑO]:
   📅 Día 17: ISR provisional (ene), IVA (ene)...
   📅 Último día: Declaración prima de riesgo de trabajo
   📅 Último día: Ajuste anual ISR trabajadores
   (... continuar todos los meses)
   ```

4. **CONSECUENCIAS POR INCUMPLIMIENTO**
   Para cada tipo de obligación:
   | Obligación | Multa por no presentar | Multa por presentar fuera de plazo | Recargos | Otras consecuencias |
   - Montos de multas actualizados
   - ¿Se pierde algún beneficio fiscal? (ej. espontaneidad)
   - ¿Afecta la opinión de cumplimiento?

5. **RECOMENDACIONES DE FLUJO DE TRABAJO**
   - Orden óptimo para procesar las declaraciones de cada mes
   - Qué información necesitas del cliente y cuándo solicitarla
   - Cuánto tiempo estimar para cada obligación
   - Qué se puede automatizar

6. **CHECKLIST DE VERIFICACIÓN MENSUAL**
   Al cierre de cada mes, verificar:
   - [ ] Todas las declaraciones presentadas
   - [ ] Acuses guardados en expediente
   - [ ] Pagos confirmados
   - [ ] Sin sellos digitales bloqueados
   - [ ] Buzón tributario revisado
   - [ ] Opinión de cumplimiento vigente

IMPORTANTE: Considera los días inhábiles y periodos vacacionales del SAT. Si una fecha límite cae en día inhábil, indica cuándo se recorre.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE]` | Nombre del contribuyente | Grupo Comercial del Norte SA de CV |
| `[REGIMEN]` | Régimen fiscal | 601 - General de Ley PM |
| `[AÑO]` | Año fiscal | 2025 |
| `[ESTADO(S)]` | Donde opera | Nuevo León y Coahuila |
| Las casillas `[ ]` | Marcar las que apliquen al cliente | [X] ISR, [X] IVA, [X] IMSS |

## Ejemplo de uso

```
DATOS:
- Nombre: Consultora Empresarial Vega SC
- RFC: CEV200115AB3
- Tipo: Persona Moral
- Régimen: 601 - General de Ley
- Actividad: Consultoría empresarial
- Inicio operaciones: 15 de enero de 2020
- Empleados: Sí - 8
- Retenedor: Sí (tiene 3 consultores externos PF)
- Estado: Jalisco

OBLIGACIONES:
- [X] ISR provisional mensual
- [X] IVA definitivo mensual
- [X] Retenciones ISR e IVA
- [X] DIOT mensual
- [X] Contabilidad electrónica
- [X] Declaración anual (marzo)
- [X] IMSS/Infonavit bimestral
- [X] ISN Jalisco mensual

AÑO: 2025
```

## Tips profesionales

- **Crea este calendario UNA VEZ por cliente** y actualízalo solo cuando cambien sus obligaciones. Guárdalo como la primera hoja de su expediente digital.
- **Usa Google Calendar o una herramienta de gestión** para crear las alertas automáticas. Crea un calendario compartido "Obligaciones Fiscales" y programa recordatorios con 7, 3 y 1 día de anticipación.
- **El día 1 de cada mes**, revisa el calendario del mes completo para saber exactamente qué tienes que hacer. Es mejor dedicar 15 minutos a planear que perder horas apagando incendios el día 17.
