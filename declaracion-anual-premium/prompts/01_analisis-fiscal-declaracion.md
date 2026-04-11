# Prompt: análisis fiscal de declaración anual con Claude

**Estado:** Pendiente — **post-temporada (mayo 2026+)**
**Bloque:** D — Automatización
**Origen del brief:** [`docs/00_Contexto_Estrategico.md`](../docs/00_Contexto_Estrategico.md) sección 4 (Automatización del análisis)

## Brief resumido

- **No es una pieza de marketing**: es una herramienta interna que Israel usará para acelerar y estandarizar el análisis de declaraciones anuales
- **Modelo objetivo**: Claude (Anthropic API) — la familia 4.5/4.6, idealmente Sonnet por costo/velocidad
- **Función**: recibir información del cliente (CFDIs, información precargada del SAT, datos personales) y producir un análisis partida por partida
- **Output esperado**: estructura que alimenta directamente la plantilla del dictamen 1-pager (`operacion/03_plantilla-dictamen-1pager.md`)
- **Esto NO automatiza la presentación** ante el SAT — eso lo hace Israel manualmente con la e-firma del cliente. Solo automatiza el ANÁLISIS y la GENERACIÓN del dictamen
- **Israel siempre revisa y valida** antes de presentar — el output del prompt es borrador, no final
- **Es post-temporada porque**: durante abril el volumen es bajo (40 declaraciones) y manual es viable. La automatización paga en la temporada del próximo año cuando se busca escalar a 100-200 declaraciones

## Outline propuesto del prompt

```
ROL
   Eres un analista fiscal mexicano con experiencia en declaraciones anuales
   de personas físicas con ingresos por sueldos y salarios e intereses de
   productos de ahorro y deuda. Tu trabajo es analizar la información fiscal
   de un contribuyente y producir un dictamen claro, profesional y útil para
   el cliente final.

CONTEXTO LEGAL
   - Marco: LISR (Ley del Impuesto sobre la Renta), Art. 96 a 152
   - Régimen aplicable: Personas físicas, sueldos y salarios + intereses (Cap. I y VI, Título IV LISR)
   - Ejercicio fiscal: [VARIABLE]
   - Topes vigentes: [VARIABLE — actualizar cada año]
   - Tarifa Art. 152 vigente para el ejercicio
   - UMA vigente

ENTRADA (los datos del cliente)
   - Información precargada del SAT (XML / JSON estructurado)
   - CFDIs de nómina del año
   - CFDIs de deducciones personales (médicos, colegiaturas, etc.)
   - Retenciones reportadas por el patrón (o patrones)
   - Datos personales: RFC, edad, dependientes, situación fiscal

INSTRUCCIONES
   1. Calcula los ingresos acumulables del año
   2. Calcula las retenciones totales del año
   3. Identifica y clasifica las deducciones personales aplicables
   4. Aplica topes (5 UMAs anuales o 15% de los ingresos, lo menor)
   5. Calcula la base gravable
   6. Aplica la tarifa del Art. 152
   7. Determina el saldo a favor o impuesto a cargo
   8. Identifica inconsistencias en el expediente SAT del cliente
   9. Genera recomendaciones para el siguiente ejercicio fiscal

FORMATO DE SALIDA
   Estructura JSON o markdown que alimente directamente la plantilla
   del dictamen 1-pager. Campos:
   - resultado: { tipo: "saldo_a_favor|a_cargo|sin_diferencia", monto: X }
   - explicacion_corta: [3-5 bullets]
   - inconsistencias_detectadas: [lista]
   - recomendaciones_siguiente_ejercicio: [lista — para el ejercicio fiscal posterior al analizado]
   - alertas_fuera_de_scope: [lista — cosas que requieren atención adicional]

REGLAS
   - Siempre cita el artículo de ley relevante cuando aplique
   - Si falta información crítica, marca claramente qué falta
   - No inventes cifras — si la entrada no tiene un dato, dilo explícitamente
   - Lenguaje del dictamen: humano, no técnico — el output va al cliente final
```

## TODO

- [ ] **NO trabajar en esto durante abril 2026** — esperar a post-temporada
- [ ] Recopilar 5-10 declaraciones reales (anonimizadas) como ground truth
- [ ] Iterar el prompt contra esos casos hasta que el output sea consistente
- [ ] Validar topes y tarifas: tarifa anual del Art. 152 LISR vigente para el ejercicio 2025 (declaración que se presenta abril 2026), y topes 2026 para las recomendaciones del siguiente ejercicio
- [ ] Decidir formato de entrada estructurada (¿conviene XML directo del SAT? ¿pasar por parser previo?)
- [ ] Decidir si conviene un único prompt grande o un pipeline de prompts especializados
- [ ] Definir guardrails: cuándo el modelo debe pedir intervención humana en lugar de inventar
- [ ] Construir suite de evals para regresión
- [ ] Considerar si vale la pena exponer esto como producto interno reutilizable para otros despachos

## Referencias

- [docs/00_Contexto_Estrategico.md sección 4](../docs/00_Contexto_Estrategico.md) — automatización del análisis
- [operacion/03_plantilla-dictamen-1pager.md](../operacion/03_plantilla-dictamen-1pager.md) — destino del output del prompt
- [../prompts-contadores/CLAUDE.md](../../prompts-contadores/CLAUDE.md) — framework RCIF (Rol, Contexto, Instrucción, Formato) usado en otros prompts del workspace
- [../abacus/](../../abacus/) — referencia: el bot fiscal con stack similar
