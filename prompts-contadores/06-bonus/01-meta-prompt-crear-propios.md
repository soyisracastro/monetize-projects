# BONUS: Crea tus Propios Prompts

> Aprende a diseñar prompts personalizados para cualquier tarea contable o fiscal que necesites automatizar. Este "prompt para crear prompts" te da independencia total.

## Cuándo usarlo

- Cuando tienes una tarea repetitiva que no está cubierta por los 23 prompts anteriores
- Para adaptar un prompt existente a un caso muy específico de tu práctica
- Cuando quieres crear prompts para un nicho o industria particular (restaurantes, médicos, constructoras)
- Para enseñarle a tu equipo de trabajo a usar IA de forma efectiva
- Cada vez que pienses "ojalá la IA pudiera ayudarme con esto"

## El Prompt

```
Actúa como un experto en ingeniería de prompts (prompt engineering) con conocimiento profundo de contabilidad y fiscalidad mexicana.

Necesito que me ayudes a crear un prompt profesional y efectivo para la siguiente tarea contable/fiscal.

TAREA QUE QUIERO AUTOMATIZAR:
- Descripción: [DESCRIBIR_LA_TAREA]
  (Ejemplo: "Necesito analizar las facturas de gastos médicos de mis clientes para determinar cuáles son deducibles en su declaración anual")

- ¿Con qué frecuencia la haces? [DIARIA/SEMANAL/MENSUAL/ANUAL/PUNTUAL]

- ¿Cuánto tiempo te toma actualmente? [TIEMPO]

- ¿Qué datos de entrada necesitas? [LISTAR_DATOS]
  (Ejemplo: "Los CFDI recibidos del cliente, su régimen fiscal, su actividad económica")

- ¿Qué resultado esperas? [DESCRIBIR_RESULTADO]
  (Ejemplo: "Una tabla con cada factura clasificada como deducible/no deducible, con el fundamento legal")

- ¿Quién va a usar este prompt? [TÚ/AUXILIAR/CLIENTE]

- Nivel de detalle necesario: [ALTO/MEDIO/BAJO]

GENERA UN PROMPT COMPLETO QUE INCLUYA:

1. **ROL**: Define quién debe "ser" la IA para esta tarea
   - Profesión específica
   - Especialización relevante
   - Contexto mexicano

2. **CONTEXTO**: La información de fondo que la IA necesita
   - Marco legal aplicable
   - Normas o estándares relevantes
   - Restricciones o condiciones especiales

3. **DATOS DE ENTRADA**: Campos claramente definidos con corchetes [CAMPO]
   - Solo los datos estrictamente necesarios
   - Con ejemplos de qué poner en cada campo
   - Formato esperado para cada dato

4. **INSTRUCCIONES**: Pasos específicos que la IA debe seguir
   - Numerados y en orden lógico
   - Con criterios de decisión claros
   - Sin ambigüedades

5. **FORMATO DE SALIDA**: Cómo debe presentar los resultados
   - Tablas, listas, resúmenes
   - Semáforos o indicadores visuales
   - Nivel de detalle apropiado para el usuario final

6. **VALIDACIONES**: Qué debe verificar la IA
   - Rangos aceptables
   - Consistencia de datos
   - Alertas de error

7. **EJEMPLO DE USO**: Un caso completo con datos ficticios mostrando:
   - Cómo se llena el prompt
   - Qué resultado se obtiene
   - Cómo interpretar la respuesta

TAMBIÉN INCLUYE:
- **3 variaciones** del prompt para diferentes niveles de complejidad (básico, intermedio, avanzado)
- **Tips** para obtener mejores resultados con este prompt específico
- **Errores comunes** al usar este tipo de prompt y cómo evitarlos

REGLAS PARA EL PROMPT QUE GENERES:
- Debe funcionar tanto en ChatGPT como en Claude
- No debe depender de acceso a internet o herramientas externas
- Debe incluir la advertencia de validar resultados contra fuentes oficiales
- Los campos entre corchetes deben ser intuitivos y fáciles de llenar
- El resultado debe ser accionable (no solo informativo)
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[DESCRIBIR_LA_TAREA]` | Qué quieres que la IA haga por ti | Calcular las diferencias entre lo declarado y lo que dice el visor de nómina del SAT |
| `[FRECUENCIA]` | Cada cuándo la haces | Mensual, con cada cliente que tiene nómina |
| `[TIEMPO]` | Cuánto te toma hoy | 2 horas por cliente |
| `[DATOS_DE_ENTRADA]` | Qué información necesitas darle | Datos del visor vs datos de mi sistema |
| `[RESULTADO]` | Qué quieres obtener | Tabla con diferencias y acciones correctivas |

## Ejemplo de uso

```
TAREA QUE QUIERO AUTOMATIZAR:
- Descripción: Analizar los movimientos bancarios de un cliente y clasificarlos automáticamente por categoría contable (ingresos por ventas, gastos deducibles, gastos no deducibles, préstamos, transferencias entre cuentas propias, etc.)

- Frecuencia: Mensual, para cada cliente

- Tiempo actual: 3-4 horas por cliente (reviso línea por línea el estado de cuenta)

- Datos de entrada: Estado de cuenta bancario del mes (movimientos con fecha, concepto, cargo/abono, saldo), catálogo de cuentas del cliente, RFC del cliente

- Resultado esperado: Tabla con cada movimiento clasificado por cuenta contable sugerida, separando los que necesitan factura de los que no, y señalando depósitos sin identificar que podrían ser ingresos no facturados

- Quién lo usa: Yo y mi auxiliar

- Nivel de detalle: Alto
```

La IA te generará un prompt completo, estructurado y listo para usar. Guárdalo en tu colección personal de prompts y úsalo cada mes.

## Tips profesionales

- **Empieza simple y ve iterando.** Tu primer prompt no será perfecto. Úsalo, identifica qué le falta o qué sobra, y pide a la IA que lo mejore: "Ajusta el prompt anterior para que también incluya [X]."
- **Crea una biblioteca personal.** Cada prompt que diseñes con este meta-prompt, guárdalo en una carpeta. En 6 meses tendrás una colección de herramientas de IA personalizada para tu práctica.
- **Los mejores prompts vienen de tu experiencia real.** Piensa en las tareas que haces una y otra vez, las que te aburren, las que te quitan tiempo. Esas son las primeras candidatas para automatizar con un prompt.

---

> **Nota final:** Este prompt de bonus es tu herramienta para seguir creciendo. Los 23 prompts anteriores cubren las necesidades más comunes, pero cada despacho tiene sus particularidades. Con este meta-prompt, puedes crear prompts para cualquier situación que se te presente. La IA es una herramienta poderosa — y ahora sabes cómo moldearla a tu medida.
