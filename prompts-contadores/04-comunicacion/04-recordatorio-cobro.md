# Recordatorio de Cobro Profesional

> Genera mensajes de seguimiento para cobrar honorarios o pagos pendientes de tus clientes, manteniendo un tono profesional y preservando la relación.

## Cuándo usarlo

- Cuando un cliente no ha pagado tus honorarios en la fecha acordada
- Para crear una secuencia de cobro escalonada (amable → firme → formal)
- Cuando necesitas cobrar un servicio extra que no estaba en el paquete mensual
- Al reactivar una cuenta de un cliente que tiene varios meses sin pagar
- Para cobrar un anticipo antes de comenzar un trabajo

## El Prompt

```
Actúa como un Contador Público mexicano que necesita cobrar honorarios pendientes a un cliente, manteniendo una relación profesional y sin dañar la confianza.

DATOS:
- Mi nombre: [TU_NOMBRE]
- Cliente: [NOMBRE_CLIENTE]
- Relación: [NUEVA/RECURRENTE/LARGA_TRAYECTORIA]
- Canal de comunicación preferido: [EMAIL/WHATSAPP/AMBOS]

DETALLE DEL ADEUDO:
- Concepto: [QUÉ_SERVICIO_SE_PRESTÓ]
  (Ejemplos: Honorarios de enero, Declaración anual, Regularización, Asesoría especial, etc.)
- Monto: $[MONTO] MXN
- Fecha de vencimiento: [FECHA]
- Días de atraso: [DÍAS]
- ¿Es la primera vez que se atrasa? [SI/NO]
- ¿Ha habido comunicación previa sobre este pago? [SI/NO] - Detalle: [QUÉ_SE_HA_DICHO]
- ¿El cliente atraviesa alguna dificultad conocida? [SI/NO] - Detalle: [SITUACIÓN]

GENERA UNA SECUENCIA DE 4 MENSAJES ESCALONADOS:

**MENSAJE 1: Recordatorio amable** (Día 1-3 después del vencimiento)
- Tono: Casual, como si fuera un simple olvido
- Objetivo: Recordar sin presionar
- Formato: WhatsApp (breve, 2-3 líneas)
- Incluir: Monto, concepto y datos para transferencia/pago

**MENSAJE 2: Seguimiento cordial** (Día 7-10)
- Tono: Profesional pero comprensivo
- Objetivo: Confirmar que recibió el recordatorio y obtener fecha de pago
- Formato: WhatsApp + Email corto
- Incluir: Referencia al mensaje anterior, opciones de pago

**MENSAJE 3: Comunicación firme** (Día 15-20)
- Tono: Directo y serio, pero sin amenazas
- Objetivo: Expresar que el retraso afecta tu operación y necesitas una solución
- Formato: Email formal
- Incluir: Historial de comunicaciones, solicitud de plan de pago, consecuencias si no se resuelve

**MENSAJE 4: Notificación final** (Día 30+)
- Tono: Formal y definitivo
- Objetivo: Último aviso antes de suspender servicios o tomar medidas
- Formato: Email formal (con copia a quien corresponda si es empresa)
- Incluir: Resumen completo del adeudo, fecha límite, acciones que se tomarán

PARA CADA MENSAJE INCLUYE:
- Versión de WhatsApp (máximo 4 líneas)
- Versión de Email (asunto + cuerpo)
- Qué hacer si el cliente responde pidiendo más tiempo
- Qué hacer si el cliente no responde

TAMBIÉN GENERA:
- Un modelo de **convenio de pago** breve (para cuando el cliente no puede pagar todo de un golpe)
- Una **plantilla de suspensión de servicios** (para casos extremos)

IMPORTANTE: Los mensajes deben ser firmes pero NUNCA amenazantes, humillantes o que dañen la relación irremediablemente. El objetivo es cobrar Y mantener al cliente.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[TU_NOMBRE]` | Tu nombre | CP Israel García |
| `[NOMBRE_CLIENTE]` | Nombre del cliente | Don Roberto / Lic. Fernández |
| `[CONCEPTO]` | Qué le cobraste | Honorarios contables enero-febrero 2025 |
| `[MONTO]` | Cuánto debe | 7,000 |
| `[DÍAS]` de atraso | Cuántos días lleva sin pagar | 12 días |
| `[SITUACIÓN]` | Si sabes algo de su contexto | Mencionó que las ventas de diciembre fueron bajas |

## Ejemplo de uso

```
DATOS:
- Mi nombre: CP Israel García
- Cliente: Arq. Mariana Solís
- Relación: Recurrente - 1.5 años
- Canal: WhatsApp primero, email si no responde

DETALLE:
- Concepto: Honorarios contables de enero 2025
- Monto: $4,500 MXN
- Vencimiento: 5 de febrero
- Días de atraso: 18
- ¿Primera vez? No, el mes pasado también se atrasó 1 semana
- ¿Comunicación previa? Sí, le mandé WhatsApp hace 10 días y solo respondió "sí, esta semana te deposito" pero no lo hizo
- ¿Dificultad conocida? Posiblemente, ha comentado que el inicio de año estuvo flojo en su despacho de arquitectura
```

## Tips profesionales

- **Cobra ANTES de entregar.** Si es posible, cambia tu modelo a "anticipo + entrega". Por ejemplo: "Los honorarios se pagan los primeros 5 días del mes, las declaraciones se presentan una vez confirmado el pago." Esto elimina el 80% de los problemas de cobranza.
- **Automatiza el primer recordatorio.** Configura un mensaje automático (por correo o WhatsApp Business) que se envíe el día después del vencimiento. Mientras más rápido recuerdes, más rápido te pagan.
- **Si un cliente se atrasa consistentemente**, es señal de que necesitas renegociar: o el precio, o los términos de pago, o la relación. A veces es mejor perder un cliente moroso que seguir trabajando gratis.
