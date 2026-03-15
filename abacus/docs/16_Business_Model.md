# 16 - MODELO DE NEGOCIO: ABACUS

**Versión:** 2.0 — Pivot a Contador como usuario primario
**Última revisión:** 15 de Marzo de 2026
**Autor:** Isca Castro

---

## El insight que cambió todo

El MVP reveló que el usuario que más valor obtiene de Abacus no es el contribuyente
buscando respuestas básicas — es el **contador profesional** en medio de su jornada.

El contador tiene 30 clientes, 8 pendientes abiertos y un cliente que le acaba de
mandar un audio preguntando si puede deducir algo. No tiene tiempo de abrir el SAT,
buscar en Google o llamar a un colega. Necesita **la respuesta correcta en 10 segundos**.

Ahí es donde Abacus es insustituible.

---

## Usuario principal: El Contador Mexicano

### Perfil

```
Quién es:
→ Contador Público (C.P. o L.C.) en ejercicio independiente
→ 5-20 años de experiencia
→ 10-50 clientes activos (personas físicas y morales)
→ Trabaja solo o en despacho pequeño (2-5 personas)
→ Factura $15,000-80,000 MXN/mes

Su día a día:
→ Múltiples clientes con preguntas simultáneas vía WhatsApp
→ Deadlines del SAT que no perdonan (17 de cada mes)
→ Reformas y actualizaciones fiscales constantes
→ Clientes que preguntan fuera de horario
→ Siempre pensando en 3 cosas a la vez
```

### El dolor real

```
No es que el contador "no sepa" — es que:

1. VELOCIDAD: El cliente pregunta algo razonable pero específico.
   Buscarlo toma 10 min. El cliente espera respuesta en 2 min.

2. CERTEZA: Recuerda la regla general pero no el artículo exacto
   ni la excepción de la RMF 2026. No puede citar algo sin estar seguro.

3. VOLUMEN: A las 7pm con 5 chats abiertos, la fatiga cognitiva es real.
   El margen de error sube.

4. ACTUALIZACIÓN: La RMF cambia. Las resoluciones del SAT cambian.
   Mantenerse al día es trabajo en sí mismo.
```

### Cómo usa Abacus

```
Flujo típico:

[Cliente WhatsApp] → "Oye, ¿puedo deducir mi auto si soy RESICO?"

[Contador] → Manda nota de voz a Abacus:
"¿Puede un contribuyente RESICO deducir un auto? ¿Qué límites aplican?"

[Abacus en 5 segundos] → Respuesta con:
- Respuesta directa: Sí/No y bajo qué condiciones
- Fundamento legal: Art. 113-G + Regla RMF correspondiente
- Límite aplicable y porcentaje
- Advertencia si hay restricción por régimen

[Contador al cliente] → Respuesta precisa con fundamento
```

**El contador no necesita que Abacus lo reemplace — necesita que lo haga
ver más profesional, más rápido y más seguro ante su cliente.**

---

## Usuarios secundarios (no el foco hoy, pero válidos)

```
→ Estudiantes de contaduría (uso intenso, conversión baja)
→ Empresarios con interés fiscal (uso esporádico, buen lead para vender servicio)
→ Contribuyentes independientes con régimen simple (RESICO PF)

Por qué son secundarios:
- Menor disposición a pagar
- Mayor variabilidad en preguntas (out-of-scope más frecuente)
- Relación menos recurrente con la herramienta
```

---

## Propuesta de valor

### Para el contador

> **"Tu segundo cerebro fiscal. Siempre disponible, siempre actualizado."**

Beneficios concretos:
- Responde en segundos, no minutos
- Cita la ley, no solo da la opinión
- Disponible a las 10pm cuando el cliente no puede esperar
- Entiende notas de voz — el contador habla, Abacus responde
- Actualizado con RMF 2026, resoluciones SAT, cambios de criterio
- No juzga la pregunta — el contador puede preguntar "lo básico" sin pena

### Lo que no es Abacus

```
❌ No sustituye el criterio del contador
❌ No firma declaraciones ni asume responsabilidad profesional
❌ No es asesor legal (escala a profesionales cuando es necesario)
❌ No reemplaza al contador ante el cliente
```

---

## Pricing

### Principio de diseño del pricing

Un contador que atiende 20 clientes cobra en promedio $1,500-3,000 MXN/mes por cliente.
Una herramienta que lo hace más eficiente y reduce errores vale el 5-10% de UNA sola
mensualidad de cliente. El precio no es la barrera — la confianza lo es.

---

### Tier 1: PRUEBA (14 días gratis, sin tarjeta)

```
Precio: $0 — 14 días completos

Incluye:
✅ Acceso completo durante 14 días
✅ Consultas ilimitadas
✅ Notas de voz
✅ Verificador de RFC y 69-B
✅ Sin límites artificiales

Objetivo:
- Que el contador pruebe Abacus en casos reales
- Que llegue al "momento aha" (cuando Abacus le resuelve algo en vivo)
- Conversión por valor demostrado, no por presión
```

**Por qué 14 días completos vs. 3 consultas:**
El modelo anterior de 3 consultas/mes crea fricción antes de que el usuario
entienda el valor. Un contador necesita ~3 interacciones para "engancharse".
14 días garantizan ese momento.

---

### Tier 2: PROFESIONAL (Core)

```
Precio: $199 MXN/mes (~$10 USD)

Incluye:
✅ Consultas ilimitadas
✅ Notas de voz (Whisper)
✅ Verificador RFC + 69-B local (14,280 registros)
✅ Verificador CFDI (XML, foto, o UUID + datos)
✅ Base de conocimiento fiscal México 2026
✅ Respuestas con referencia legal (artículo + ley)
✅ Disponible 24/7

FASE 2 (Mes 4+):
✅ Recordatorios de obligaciones por cliente
✅ Calculadoras: RESICO, IMSS, ISR asalariados, IVA proporcional

FASE 3 (Mes 7+):
✅ Widget en app.todoconta.com

FASE 4 (Año 2):
✅ Verificación directa en portal SAT (con e.firma)
✅ Descarga automática de XMLs
```

---

### Tier 3: DESPACHO (Año 1 Q3+)

```
Precio: $499 MXN/mes

Para: Despachos de 2-5 contadores

Incluye:
✅ Todo Profesional
✅ Hasta 5 usuarios en el mismo despacho
✅ Historial compartido de consultas del despacho
✅ Perfil de clientes del despacho (régimen, obligaciones)
✅ Reporte mensual de consultas más frecuentes

Objetivo:
- Despachos donde el socio quiere que sus junior tengan un respaldo
- Homogeneizar criterios dentro del despacho
```

---

### Tier 4: BUNDLE TODOCONTA (Diferenciador de ecosistema)

```
Precio: $299 MXN/mes

Incluye:
✅ Todo Profesional
✅ Newsletter TodoConta semanal (análisis fiscal actual)
✅ Plantillas fiscales y formatos descargables
✅ Acceso a webinars exclusivos (declaraciones, reformas)
✅ Descuentos en cursos TodoConta (20-30%)

Early Bird: $199/mes lifetime para primeros 50 suscriptores

Por qué este bundle tiene sentido:
El contador que ya consume TodoConta es exactamente el perfil ideal
de usuario de Abacus. El Bundle convierte en un ecosistema completo:
aprende + consulta + se mantiene actualizado, todo en un solo lugar.
```

---

## Proyecciones financieras

### Supuestos revisados (usuario = contador)

```
- Ticket promedio: $199 MXN/mes (vs $99 anterior)
- Tasa de conversión prueba → pago: 25% (contadores evalúan más racionalmente)
- Churn mensual: 3% (herramienta profesional = mayor stickiness)
- Crecimiento: comunidades de contadores vs. público general
```

### Año 1

| Mes | Profesional | Bundle | Despacho | MRR (MXN) | Costos | Utilidad |
|-----|-------------|--------|----------|-----------|--------|----------|
| 1   | 0           | 0      | 0        | 0         | 2,288  | -2,288   |
| 2   | 5           | 2      | 0        | 1,593     | 2,288  | -695     |
| 3   | 12          | 5      | 0        | 3,883     | 2,288  | +1,595   |
| 4   | 20          | 8      | 1        | 6,879     | 2,253  | +4,626   |
| 5   | 28          | 10     | 1        | 9,069     | 2,253  | +6,816   |
| 6   | 38          | 14     | 2        | 13,024    | 2,253  | +10,771  |
| 7   | 50          | 18     | 3        | 17,277    | 2,253  | +15,024  |
| 8   | 65          | 22     | 4        | 22,324    | 2,253  | +20,071  |
| 9   | 80          | 27     | 5        | 27,569    | 2,253  | +25,316  |
| 10  | 95          | 32     | 6        | 32,814    | 2,253  | +30,561  |
| 11  | 110         | 38     | 7        | 38,656    | 2,253  | +36,403  |
| 12  | 130         | 45     | 9        | 46,685    | 2,253  | +44,432  |

**Resultados Año 1:**
```
Break-even: Mes 3 (vs Mes 8 del modelo anterior)
MRR final: ~$46,685 MXN
Utilidad acumulada Año 1: ~$194,000 MXN
Suscriptores finales: 184 (130 Prof + 45 Bundle + 9 Despacho)
```

### Escenario conservador (si la conversión es 15%, no 25%)

```
Break-even: Mes 5
MRR final Mes 12: ~$28,000 MXN
Suscriptores: ~110
Sigue siendo mejor que el modelo anterior a $99
```

---

## Canales de adquisición

### Fase 1 — Comunidades de contadores (Mes 1-3)

```
Canal                              Costo      Potencial
─────────────────────────────────────────────────────
Grupo Diplomado CACC (Isca)        $0         Alta conversión (conocen a Isca)
Audiencia TodoConta (3,000 emails) $0         Media-alta (ya confían en la marca)
Facebook: grupos de contadores MX  $0         Alto volumen, baja conversión inicial
Instagram @soyisracastro           $0         Media
LinkedIn (Isca como C.P.)          $0         Media-alta (perfil profesional)
IMCP / colegios de contadores      $0-500     Alto (autoridad profesional)
```

**Mensaje de adquisición:**
> "Soy C.P. y construí el asistente que quisiera tener cuando un cliente
> me pregunta algo en medio de 5 pendientes. Pruébalo 14 días gratis."

### Fase 2 — Contenido demostrativo (Mes 4-6)

```
Formato más efectivo para contadores:

→ Video corto: "Cliente me preguntó X, así respondí en 10 segundos con Abacus"
   (demostración real, no pitch — el formato más viral en comunidades de contadores)

→ Thread/post: "Las 5 preguntas que más me hacen mis clientes RESICO
   y cómo Abacus me las resuelve"

→ Newsletter TodoConta: Caso de uso real cada semana
```

### Fase 3 — Referral entre colegas (Mes 3+)

```
Los contadores confían en sus colegas. Un referral de un C.P. a otro
vale más que cualquier ad.

Programa:
- Refiere un colega → ambos obtienen 1 mes gratis Profesional
- Refiere 5 colegas → 3 meses gratis + acceso Beta Despacho

Meta: 30% de nuevos usuarios vía referral en Mes 6
```

---

## Métricas clave

### La métrica que importa: "Momento Aha"

```
Definición del Momento Aha de Abacus:
"El usuario envía una consulta real (no de prueba) y recibe una respuesta
con referencia legal que usa directamente con su cliente."

Meta: 80% de usuarios en prueba alcanzan el Momento Aha antes del día 7
```

### KPIs por fase

**Mes 1-3 (Validación):**
```
→ % pruebas que envían primera nota de voz (meta: >50%)
→ % que llegan al día 7 activos (meta: >60%)
→ % conversión prueba → pago (meta: >20%)
→ NPS de cuentas pagadas (meta: >60)
```

**Mes 4-6 (Crecimiento):**
```
→ MRR crecimiento mes a mes (meta: >20%)
→ Churn mensual (meta: <4%)
→ % nuevos usuarios via referral (meta: >25%)
→ Consultas promedio/usuario/mes (meta: >15)
```

**Mes 7-12 (Escala):**
```
→ Upgrading Profesional → Despacho (meta: >8%)
→ LTV promedio (meta: >$2,400 MXN = 12 meses)
→ CAC pagado vs orgánico
→ % usuarios con >30 consultas/mes (power users)
```

---

## Comparaciones que importan ahora

### Abacus vs. "Buscar en Google + DOF + SAT"

```
Google/DOF:
Tiempo: 15-30 minutos por consulta
Confianza: Variable — hay que triangular fuentes
Formato: PDF de 400 páginas, buscar el artículo
Disponibilidad: 24/7 pero con fricción alta

Abacus:
Tiempo: 5-10 segundos
Confianza: Alta — cita la ley y el artículo
Formato: Respuesta directa + fundamento
Disponibilidad: 24/7 sin fricción
```

### Abacus vs. "Preguntarle a un colega"

```
Colega:
Respuesta inmediata si está disponible
Confianza alta (le conoces)
Gratis
Problema: No siempre disponible, puede equivocarse igual

Abacus:
Siempre disponible
Cita fuente (verificable)
$199/mes
Ventaja: Sin depender de la disponibilidad de nadie
```

### Abacus vs. Suscripción a servicio de consultas (IMCP, etc.)

```
IMCP y servicios de consulta:
$500-1,500 MXN/mes
Tiempo de respuesta: horas o días
Para dudas complejas y formales

Abacus:
$199 MXN/mes
Tiempo: segundos
Para dudas del día a día, cálculos rápidos, referencias rápidas

Son complementarios, no competidores.
```

---

## Riesgos y mitigaciones

```
Riesgo 1: El contador no confía en la respuesta de la IA
Mitigación: Siempre citar artículo + ley. Disclaimer claro.
           El contador verifica — Abacus acelera, no reemplaza.

Riesgo 2: Respuesta incorrecta daña la relación con cliente
Mitigación: SOUL.md: Abacus escala cuando no tiene certeza.
           Nunca inventa artículos. Prefiere "no sé" a respuesta errónea.

Riesgo 3: Competencia de ChatGPT/Claude directamente
Mitigación: Abacus está especializado (legislación MX, RMF 2026, 69-B local).
           Un C.P. no tiene tiempo de prompt-enginear Claude cada vez.

Riesgo 4: Reforma fiscal cambia las reglas
Mitigación: Proceso de actualización mensual de memory/fiscal/
           Skill fiscal-mx actualizable. Suscriptores alertados de cambios.
```

---

## Resumen ejecutivo

```
Oportunidad:
→ 120,000+ contadores registrados en México (IMCP)
→ Mercado real direccionable: 30,000-50,000 despachos independientes
→ Dolor concreto y diario, no aspiracional
→ Willingness to pay: alto (herramienta profesional, bajo el costo de un cliente)

Modelo:
→ 14 días gratis (sin fricción de entrada) → $199/mes Profesional
→ Bundle con TodoConta: ecosistema de aprendizaje + consulta
→ Despacho: expansión natural dentro del mismo cliente

Ventaja competitiva:
→ Construido por un C.P. para C.P.s (credibilidad de par)
→ Integrado con TodoConta (audiencia ya calificada)
→ Especialización fiscal MX (RMF, SAT, 69-B, CFDI)
→ WhatsApp + voz (el canal que los contadores ya usan)

Tracción proyectada:
→ Mes 3: Break-even (~17 suscriptores)
→ Mes 6: MRR ~$13,000 MXN (~52 suscriptores)
→ Mes 12: MRR ~$46,000 MXN (~184 suscriptores)
```

---

**Versión:** 2.0
**Próxima revisión:** 15 de Junio de 2026 (post-Mes 3)
**Cambio vs v1.1:** Pivot de contribuyente general → contador profesional como usuario primario.
Pricing ajustado de $99 a $199, modelo de prueba de 14 días vs. 3 consultas.
