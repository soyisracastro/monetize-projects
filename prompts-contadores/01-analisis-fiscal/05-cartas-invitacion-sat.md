# Respuesta a Cartas Invitación del SAT

> Interpreta cartas invitación, requerimientos y actos de fiscalización del SAT, y prepara una respuesta fundamentada.

## Cuándo usarlo

- Cuando tu cliente recibe una carta invitación del SAT en su buzón tributario
- Al recibir un requerimiento de información o documentación
- Cuando llega una propuesta de pago por diferencias detectadas por el SAT
- Para preparar la defensa ante una revisión de gabinete o visita domiciliaria
- Al recibir una multa o sanción que consideras improcedente

## El Prompt

```
Actúa como un Contador Público mexicano con experiencia en defensa fiscal y atención de actos de fiscalización del SAT.

Mi cliente recibió la siguiente comunicación del SAT y necesito que me ayudes a interpretarla y preparar una respuesta adecuada.

DATOS DEL CONTRIBUYENTE:
- Nombre/Razón social: [NOMBRE]
- RFC: [RFC]
- Régimen fiscal: [REGIMEN_FISCAL]
- Domicilio fiscal: [DOMICILIO]

DATOS DE LA COMUNICACIÓN DEL SAT:
- Tipo de comunicación: [TIPO]
  (Opciones: Carta invitación, Requerimiento de información, Propuesta de pago, Inicio de revisión de gabinete, Inicio de visita domiciliaria, Multa, Otro)
- Número de oficio/folio: [NUMERO_OFICIO]
- Fecha de notificación: [FECHA_NOTIFICACION]
- Autoridad emisora: [AUTORIDAD]
- Periodo revisado: [PERIODO]
- Concepto/Impuesto: [CONCEPTO]

CONTENIDO DE LA COMUNICACIÓN:
[PEGAR_AQUI_EL_TEXTO_DE_LA_CARTA]
(Copia el contenido principal de la carta o requerimiento. No incluyas datos personales sensibles como e.firma o contraseñas)

SITUACIÓN DE MI CLIENTE:
- ¿Las obligaciones mencionadas están cumplidas? [SI/NO/PARCIALMENTE]
- ¿Tiene la documentación soporte? [SI/NO/PARCIALMENTE]
- Detalle: [EXPLICAR_SITUACION]

NECESITO QUE GENERES:

1. **Interpretación de la comunicación**
   - ¿Qué está solicitando exactamente el SAT?
   - ¿Es un acto de molestia formal o solo una invitación?
   - ¿Qué facultades de comprobación está ejerciendo? (Art. 42 CFF)
   - ¿Es procedente o tiene algún vicio de forma?

2. **Plazos legales**
   - ¿Cuántos días tengo para responder? (calendario según tipo de acto)
   - ¿Desde cuándo corre el plazo? (fecha de notificación legal)
   - Fecha límite exacta para responder
   - ¿El plazo se suspende en algún periodo? (vacaciones SAT, días inhábiles)

3. **Análisis de la posición del cliente**
   - ¿El SAT tiene razón en su observación?
   - Si tiene razón: opciones para regularizarse (espontaneidad, autocorrección)
   - Si NO tiene razón: fundamentos legales para desvirtuar

4. **Borrador de respuesta** que incluya:
   - Encabezado con datos del contribuyente y referencia al oficio
   - Fundamentación legal de la respuesta
   - Argumentos organizados por punto observado
   - Lista de documentación probatoria a adjuntar
   - Solicitud de resolución (si aplica)

5. **Documentación a preparar**
   - Checklist de documentos que debo reunir
   - Formato en que deben presentarse
   - Plazo para cada documento

6. **Riesgos y recomendaciones**
   - ¿Qué pasa si NO respondo?
   - ¿Conviene pagar o impugnar?
   - ¿Se recomienda asesoría legal especializada?
   - ¿Aplica algún medio de defensa (recurso de revocación, juicio de nulidad)?

IMPORTANTE: Fundamenta todo con artículos específicos del CFF, LISR, LIVA o la ley que aplique.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE]` | Nombre del contribuyente | Juan Pérez Martínez |
| `[RFC]` | RFC | PEMJ800520AB1 |
| `[TIPO]` | Tipo de acto del SAT | Carta invitación por diferencias en IVA |
| `[NUMERO_OFICIO]` | Número del documento | 500-05-2024-12345 |
| `[FECHA_NOTIFICACION]` | Cuándo se notificó | 15 de enero de 2025 (buzón tributario) |
| `[PERIODO]` | Meses/año que revisa el SAT | Enero a diciembre 2023 |
| `[PEGAR_AQUI_EL_TEXTO_DE_LA_CARTA]` | El contenido de la carta | Copiar el texto principal |

## Ejemplo de uso

```
DATOS DEL CONTRIBUYENTE:
- Nombre: Distribuidora Hernández SA de CV
- RFC: DHE160310MN4
- Régimen fiscal: 601 - General de Ley Personas Morales
- Domicilio fiscal: Av. Reforma 234, Col. Centro, Monterrey, NL

DATOS DE LA COMUNICACIÓN DEL SAT:
- Tipo: Carta invitación - Propuesta de pago
- Número de oficio: 500-05-2024-98765
- Fecha de notificación: 10 de enero de 2025
- Autoridad: Administración Desconcentrada de Auditoría Fiscal de Nuevo León "1"
- Periodo revisado: Enero a diciembre 2023
- Concepto: Diferencias en IVA acreditable

CONTENIDO DE LA COMUNICACIÓN:
"Se detectaron diferencias entre el IVA acreditable declarado en sus pagos definitivos mensuales y el IVA que amparan los CFDI recibidos registrados en la base de datos del SAT. La diferencia acumulada asciende a $127,350.00 MXN. Se le invita a verificar su situación fiscal y, en su caso, presentar declaraciones complementarias..."

SITUACIÓN DE MI CLIENTE:
- ¿Obligaciones cumplidas? Parcialmente - Declaró IVA cada mes pero cree que hay facturas de proveedores que cancelaron sin avisarle
- ¿Tiene documentación? Sí - Tiene respaldo de todas sus operaciones
- Detalle: El cliente sospecha que 3 proveedores cancelaron CFDI después de que él ya los había acreditado. No recibió notificación de cancelación.
```

## Tips profesionales

- **Revisa el buzón tributario de tu cliente semanalmente.** Muchas cartas invitación tienen plazos cortos y se dan por notificadas automáticamente a los 3 días de publicarse en el buzón.
- **Una carta invitación NO es una auditoría formal.** No estás obligado legalmente a responder, pero ignorarla puede llevar a que el SAT inicie un acto formal de fiscalización. Siempre es mejor responder.
- **Si la diferencia es menor a $50,000 MXN** y el SAT tiene razón, generalmente conviene más autocorregirse con declaración complementaria (aplica espontaneidad y evitas multas) que litigar. Si es un monto mayor, evalúa con un abogado fiscalista.
