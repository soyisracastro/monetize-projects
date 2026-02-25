# Minutas de Reunión con Clientes

> Genera minutas estructuradas de tus reuniones con clientes, documentando acuerdos, pendientes y responsables de forma profesional.

## Cuándo usarlo

- Después de cada reunión con un cliente (presencial, llamada o videollamada)
- Al hacer la revisión mensual o trimestral de resultados con el cliente
- Cuando se toman decisiones importantes que necesitan quedar documentadas
- Para crear un registro de lo acordado y evitar malentendidos
- Al dar seguimiento a los compromisos de reuniones anteriores

## El Prompt

```
Actúa como un Contador Público mexicano que necesita documentar una reunión con un cliente de forma profesional y accionable.

Con las notas que te proporciono, genera una minuta estructurada que sirva como registro formal de la reunión.

DATOS DE LA REUNIÓN:
- Fecha: [FECHA]
- Hora: [HORA_INICIO] a [HORA_FIN]
- Modalidad: [PRESENCIAL/VIDEOLLAMADA/TELEFÓNICA]
- Lugar: [LUGAR_O_PLATAFORMA]
- Cliente: [NOMBRE_CLIENTE]
- Asistentes por el cliente: [NOMBRES_Y_CARGOS]
- Asistentes por el despacho: [NOMBRES_Y_CARGOS]
- Reunión convocada por: [QUIÉN_LA_PIDIÓ]

CONTEXTO:
- Tipo de reunión: [SELECCIONAR]
  a) Revisión mensual/trimestral de resultados
  b) Planeación fiscal del ejercicio
  c) Problema o urgencia específica
  d) Presentación de propuesta
  e) Seguimiento de acuerdos anteriores
  f) Onboarding de cliente nuevo
  g) Otro: [ESPECIFICAR]

MIS NOTAS DE LA REUNIÓN:
[PEGAR_NOTAS_SUELTAS]
(No importa si están desordenadas, en bullets, con abreviaturas o incompletas. Escribe lo que recuerdes de la reunión, temas tratados, decisiones, pendientes, etc.)

GENERA UNA MINUTA CON:

1. **ENCABEZADO**
   - Número de minuta: [AÑO]-[CONSECUTIVO]
   - Fecha y hora
   - Asistentes
   - Objetivo de la reunión (1 oración)

2. **TEMAS TRATADOS**
   Para cada tema discutido:
   | # | Tema | Resumen de lo discutido | Decisión tomada |
   - Organizar los temas en orden lógico (no necesariamente el orden en que se discutieron)
   - Incluir cifras y datos mencionados

3. **ACUERDOS Y COMPROMISOS**
   | # | Compromiso | Responsable | Fecha límite | Prioridad |
   |---|-----------|-------------|--------------|-----------|
   - Cada acuerdo debe ser específico y medible
   - Asignar un solo responsable por compromiso
   - Fecha límite realista

4. **PENDIENTES DEL CLIENTE**
   Lista clara de lo que el cliente debe hacer o enviar:
   - [ ] Tarea - Fecha límite
   - [ ] Tarea - Fecha límite

5. **PENDIENTES DEL DESPACHO**
   Lista de lo que nosotros debemos hacer:
   - [ ] Tarea - Responsable - Fecha límite

6. **PRÓXIMA REUNIÓN**
   - Fecha tentativa
   - Temas a tratar
   - Información que se necesita preparar

7. **NOTAS ADICIONALES**
   - Observaciones relevantes
   - Temas que quedaron pendientes para futuras reuniones
   - Cambios en la relación comercial (si aplica)

FORMATO: Profesional pero legible. Que el cliente pueda revisarla en 2 minutos y sepa exactamente qué le toca hacer.

TONO: [FORMAL/SEMIFORMAL]

TAMBIÉN GENERA:
- Un **mensaje de WhatsApp** breve (5 líneas máximo) para enviar al cliente con el resumen de acuerdos
- Un **correo de seguimiento** para adjuntar la minuta formal
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[FECHA]` | Cuándo fue la reunión | 15 de febrero de 2025 |
| `[NOMBRE_CLIENTE]` | Con quién te reuniste | Arq. Patricia Solís |
| Tipo de reunión | Seleccionar de la lista | a) Revisión trimestral |
| `[NOTAS_SUELTAS]` | Tus apuntes tal cual | Ver ejemplo abajo |

## Ejemplo de uso

```
DATOS DE LA REUNIÓN:
- Fecha: 20 de febrero de 2025
- Hora: 10:00 a 11:15
- Modalidad: Videollamada por Google Meet
- Cliente: Distribuidora Hernández SA de CV
- Asistentes cliente: Don Roberto Hernández (Director), Lic. Ana Villarreal (Administración)
- Asistentes despacho: CP Israel García
- Convocada por: El despacho (revisión de resultados)

CONTEXTO: Revisión de resultados enero + planeación fiscal 2025

MIS NOTAS:
- les mostré los números de enero, vendieron $520k vs $480k del año pasado, subieron 8%
- el costo de ventas subió más que las ventas, hay que revisar por qué, posiblemente el proveedor de plásticos subió precios
- el ISR de enero fue $18,500, se espantó Don Roberto, le expliqué que es por el coeficiente de utilidad
- me preguntó si conviene cambiar a RESICO (le dije que no porque factura más de 3.5M)
- quieren contratar 2 personas nuevas, les expliqué el costo patronal
- Ana me pidió que le mande el desglose de cuánto le cuesta cada empleado con IMSS, Infonavit e ISN
- hablamos del crédito bancario que quieren pedir, necesitan EF dictaminados? no necesariamente pero ayuda
- pendiente: me tienen que mandar los estados de cuenta de enero (no me los han mandado)
- pendiente mío: calcular el costo de los 2 nuevos empleados con 3 escenarios de sueldo
- quedamos de vernos en marzo para revisar febrero y avanzar con lo del crédito
```

## Tips profesionales

- **Envía la minuta dentro de las 24 horas.** Mientras más tardes, más se olvidan los detalles (tanto tú como el cliente). Idealmente, generala el mismo día de la reunión.
- **La minuta es tu mejor defensa.** Si en 6 meses el cliente dice "tú nunca me dijiste eso", la minuta con fecha, asistentes y acuerdos es tu evidencia. Guárdala en el expediente digital del cliente.
- **Usa las minutas para demostrar valor.** Cuando un cliente cuestione tus honorarios, una colección de minutas detalladas muestra todo el trabajo y asesoría que le has dado. Es la diferencia entre "mi contador solo presenta declaraciones" y "mi contador me asesora estratégicamente".
