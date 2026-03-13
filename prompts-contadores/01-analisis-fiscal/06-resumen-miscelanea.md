# Resumen de Cambios en la Miscelánea Fiscal

> Extrae los cambios más relevantes de la Resolución Miscelánea Fiscal (RMF) para tu práctica profesional y genera un análisis de impacto para tus clientes.

## Cuándo usarlo

- Cuando se publica una nueva versión de la RMF y necesitas identificar qué cambió
- Al preparar una circular informativa para tus clientes sobre cambios fiscales
- Cuando quieres verificar si una regla específica de la miscelánea sigue vigente o fue modificada
- Al inicio de cada ejercicio fiscal para actualizar tus procesos internos
- Cuando un cliente te pregunta sobre algún cambio que "vio en las noticias" y necesitas confirmar

## El Prompt

```
Actúa como un Contador Público mexicano especializado en legislación fiscal y análisis regulatorio, con amplia experiencia interpretando la Resolución Miscelánea Fiscal (RMF) y sus modificaciones.

Necesito que analices los siguientes cambios en la RMF y me entregues un resumen ejecutivo orientado a la práctica profesional.

DATOS DE LA RESOLUCIÓN:
- Versión de la RMF: [VERSION_RMF]
  (Ejemplo: RMF 2026, Primera Modificación a la RMF 2026, etc.)
- Fecha de publicación en el DOF: [FECHA_PUBLICACION]
- Fecha de entrada en vigor: [FECHA_VIGOR]

CONTEXTO DE MI DESPACHO:
- Tipos de contribuyentes que manejo: [TIPOS_CONTRIBUYENTES]
  (Ejemplos: PM régimen general, PF con actividad empresarial, RESICO, arrendamiento, sueldos, plataformas digitales)
- Sectores principales de mis clientes: [SECTORES]
- Número aproximado de clientes: [NUMERO_CLIENTES]

CONTENIDO A ANALIZAR:
[PEGAR_AQUI_EL_CONTENIDO]
(Pega el texto de las reglas que cambiaron, las fichas de trámite modificadas o el resumen publicado por el SAT. Si el documento es muy extenso, pega las secciones que consideres más relevantes.)

GENERA LO SIGUIENTE:

1. **Resumen ejecutivo** (máximo 10 puntos)
   - Los cambios más importantes en orden de impacto
   - Para cada cambio: qué dice la regla, qué cambia respecto a la versión anterior, y a quién afecta
   - Clasificación: 🔴 Impacto alto | 🟡 Impacto medio | 🟢 Impacto bajo

2. **Análisis de impacto por tipo de contribuyente**
   | Tipo de contribuyente | Reglas que le aplican | Acciones requeridas | Urgencia |
   - Persona Moral régimen general
   - Persona Física actividad empresarial
   - RESICO
   - Otros que apliquen según mi contexto

3. **Reglas modificadas vs anteriores**
   Para cada regla que cambió:
   - Número de regla
   - Versión anterior (resumen)
   - Versión nueva (resumen)
   - Qué implica el cambio en la práctica
   - ¿Requiere acción inmediata?

4. **Fichas de trámite nuevas o modificadas**
   - Número de ficha
   - Trámite que regula
   - Qué cambió (documentos requeridos, plazos, procedimiento)
   - ¿Afecta algún trámite que hago regularmente?

5. **Calendario de implementación**
   - Cambios que entran en vigor inmediatamente
   - Cambios con periodo de transición
   - Fechas límite relevantes

6. **Borrador de circular para clientes**
   - Texto listo para enviar a tus clientes (máximo 300 palabras)
   - Lenguaje simple y directo
   - Solo los puntos que les afectan directamente
   - Con las acciones que deben tomar (si las hay)

IMPORTANTE: Fundamenta cada punto con el número de regla específico de la RMF. Si algún cambio tiene implicación en el CFF, LISR, LIVA u otra ley, menciónalo.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[VERSION_RMF]` | Qué versión de la RMF estás analizando | Tercera Modificación a la RMF 2026 |
| `[FECHA_PUBLICACION]` | Fecha del DOF | 15 de julio de 2026 |
| `[FECHA_VIGOR]` | Cuándo aplica | Al día siguiente de su publicación |
| `[TIPOS_CONTRIBUYENTES]` | Qué regímenes manejas | PM régimen general, RESICO, arrendamiento |
| `[SECTORES]` | Giros de tus clientes | Restaurantes, comercio, servicios profesionales |
| `[PEGAR_AQUI_EL_CONTENIDO]` | El texto de los cambios | Copiar del DOF o del portal del SAT |

## Ejemplo de uso

```
DATOS DE LA RESOLUCIÓN:
- Versión: Primera Modificación a la RMF 2026
- Fecha de publicación en DOF: 10 de marzo de 2026
- Entrada en vigor: 11 de marzo de 2026

CONTEXTO DE MI DESPACHO:
- Tipos de contribuyentes: PM régimen general (60%), RESICO (25%), PF actividad empresarial (10%), arrendamiento (5%)
- Sectores: Comercio, restaurantes, servicios profesionales, manufactura
- Número de clientes: 45

CONTENIDO A ANALIZAR:
"Se modifican las reglas 2.7.1.35, 2.7.1.36 y 2.7.1.39 relativas a la emisión de CFDI por concepto de nómina. Se establece que los contribuyentes que emitan CFDI de nómina deberán verificar que la información del complemento de nómina versión 1.2 Rev E corresponda con los datos registrados ante el IMSS...

Se adiciona la regla 3.13.35 que establece el procedimiento para que los contribuyentes del RESICO presenten la solicitud de reducción de multas conforme al artículo 74 del CFF...

Se modifica la ficha de trámite 82/CFF relativa al procedimiento para desvirtuar la presunción de inexistencia de operaciones del artículo 69-B del CFF. Se adiciona como requisito la presentación de los estados de cuenta bancarios que amparen la materialidad de las operaciones..."
```

## Tips profesionales

- **Consulta la RMF directamente en el DOF.** El Diario Oficial de la Federación (dof.gob.mx) es la fuente oficial. Los resúmenes de terceros pueden omitir detalles importantes.
- **Suscríbete a las notificaciones del SAT.** En sat.gob.mx puedes activar alertas cuando se publican modificaciones a la RMF. También revisa las "Notas informativas" del SAT que a veces adelantan cambios.
- **Usa este prompt cada vez que se publique una modificación.** La RMF suele tener entre 3 y 5 modificaciones por año, más el Anexo 1-A (fichas de trámite). Cada una puede afectar tus procesos.
- **Combina con el Prompt #5 (Cartas Invitación del SAT).** Si una modificación a la RMF cambia los procedimientos de fiscalización, tenlo en cuenta al responder actos del SAT.
- **RMF 2026 — Puntos clave para todo el ejercicio.** La RMF 2026 incorporó cambios derivados de la reforma al CFF publicada el 7 de noviembre de 2025. Entre los más relevantes: nuevos procedimientos para el Art. 69-B (EFOS), regulación de plataformas digitales (Art. 30-B CFF), actualización de catálogos CFDI 4.0, y nuevas fichas de trámite para RESICO. Mantén este prompt a la mano durante todo el ejercicio.
