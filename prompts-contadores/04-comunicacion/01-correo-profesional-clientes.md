# Correo Profesional a Clientes

> Genera correos electrónicos profesionales, claros y con el tono adecuado para las distintas situaciones que enfrenta un contador con sus clientes.

## Cuándo usarlo

- Cuando necesitas enviar resultados financieros o fiscales a tu cliente
- Para notificar sobre cambios en la legislación que le afectan
- Al solicitar información o documentación pendiente
- Para dar seguimiento a un tema en proceso (declaraciones, devoluciones, auditorías)
- Cuando necesitas comunicar malas noticias (impuestos a pagar, multas, problemas detectados)

## El Prompt

```
Actúa como un Contador Público mexicano que necesita redactar un correo electrónico profesional para un cliente.

DATOS:
- Mi nombre: [TU_NOMBRE]
- Nombre del cliente: [NOMBRE_CLIENTE]
- Relación con el cliente: [NUEVA/RECURRENTE/DE_AÑOS]
- Tono preferido: [FORMAL/SEMIFORMAL/CERCANO_PERO_PROFESIONAL]

SITUACIÓN:
[SELECCIONAR Y DESCRIBIR]
Tipo de correo:
a) Entrega de información financiera/fiscal
b) Solicitud de documentación pendiente
c) Notificación de cambio en legislación
d) Comunicar impuestos a pagar / monto adeudado
e) Seguimiento de trámite en proceso
f) Respuesta a duda del cliente
g) Comunicar un problema o hallazgo
h) Otro: [ESPECIFICAR]

Detalle de la situación:
[DESCRIBIR QUÉ NECESITAS COMUNICAR]

Datos específicos a incluir:
- Montos: [SI_APLICA]
- Fechas límite: [SI_APLICA]
- Acciones que debe tomar el cliente: [SI_APLICA]
- Documentos adjuntos: [SI_APLICA]

REDACTA UN CORREO QUE:

1. Tenga un **asunto** claro y específico (que el cliente entienda de qué se trata sin abrir el correo)

2. Sea **breve y directo** (máximo 200 palabras en el cuerpo)

3. Incluya:
   - Saludo apropiado al tono de la relación
   - Contexto breve (1-2 oraciones)
   - La información o solicitud principal
   - Acciones que debe tomar el cliente (si aplica), con fechas claras
   - Ofrecimiento de aclaración
   - Despedida profesional

4. Use **lenguaje claro** — sin jerga contable innecesaria. Si es necesario usar un término técnico, agrega una explicación breve entre paréntesis.

5. Si hay montos o fechas importantes, **resáltalos** (negritas o lista).

6. Si el tema es urgente, indícalo de forma profesional sin ser alarmista.

Genera 2 versiones:
- **Versión A:** Más formal
- **Versión B:** Más cercana/conversacional

También incluye un modelo de **mensaje de WhatsApp** breve (máximo 3 líneas) para darle seguimiento si no responde en 3 días.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[TU_NOMBRE]` | Tu nombre como contador | CP Israel García |
| `[NOMBRE_CLIENTE]` | Nombre del cliente | Lic. Roberto Méndez |
| `[RELACIÓN]` | Qué tan cercana es la relación | Recurrente - 3 años trabajando juntos |
| Tipo de correo | Seleccionar de la lista (a-h) | d) Comunicar impuestos a pagar |
| Detalle | Explicar la situación | El ISR anual 2024 resultó en $45,000 a cargo |

## Ejemplo de uso

```
DATOS:
- Mi nombre: CP Israel García
- Nombre del cliente: Ing. Carmen Villarreal
- Relación: Recurrente - 2 años
- Tono: Cercano pero profesional

SITUACIÓN:
Tipo: d) Comunicar impuestos a pagar
Detalle: Terminé de calcular la declaración anual de persona física 2024 de la Ing. Villarreal. Resultó ISR a cargo de $38,500 MXN. La fecha límite es el 30 de abril. Necesito que me confirme si procedo a presentarla y cómo va a hacer el pago (una sola exhibición o en parcialidades).

Datos específicos:
- Monto: ISR a cargo $38,500 MXN
- Fecha límite: 30 de abril de 2025
- Acciones: Confirmar presentación y forma de pago
- Adjuntos: PDF con resumen del cálculo
```

## Tips profesionales

- **Manda el correo cuando el cliente lo va a leer.** Los martes a jueves entre 9-11am tienen las mejores tasas de apertura. Evita viernes por la tarde y fines de semana para temas fiscales.
- **Siempre incluye una acción clara.** En vez de "quedo a sus órdenes", cierra con "¿Podría confirmarme antes del viernes si procedo con la presentación?" Un call-to-action específico reduce el tiempo de respuesta.
- **Para malas noticias (impuestos altos, multas):** primero da el contexto, luego el monto, y termina con las opciones. Nunca abras con el monto negativo.
