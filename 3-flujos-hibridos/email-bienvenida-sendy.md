# Autoresponder de bienvenida — Sendy

**Lista:** Recursos gratis - Casos prácticos IA (`vzn2EzpQzSnPJiEf4jR6Kg`)
**Tipo:** Autoresponder, se dispara al confirmar la suscripción (doble opt-in).

---

**Asunto:** Aquí están tus 3 flujos

**Cuerpo:**

Hola [Name,fallback=qué tal],

Aquí tienes la guía que pediste: los 3 flujos híbridos para quitarle horas a tu semana en el despacho.

Descárgala aquí: https://todoconta.com/guias/3-flujos-hibridos.pdf

Un consejo antes de abrirla: no la leas como teoría. Agarra UN cliente, el que más batalles esta semana, y prueba el flujo 1 con sus CFDIs. En 20 minutos vas a ver de qué hablo.

Cada flujo trae el prompt listo para copiar y pegar. Ajustas lo que está entre [corchetes] y listo.

Los jueves a las 11 (hora del centro) hago "Jueves de ContadorIA" en vivo, donde llevo esto más lejos. Si te sirvió la guía, ahí nos vemos.

– Isca

PD: La IA no te reemplaza. Te reemplaza el contador que aprendió a usarla antes que tú. Estos 3 flujos son para que ese contador seas tú.

---

## Cómo montarlo en Sendy (UI, lado tuyo)

1. Sendy → **Autoresponders** → *Create a new autoresponder*.
2. **Brand/List:** selecciona la lista "Recursos gratis - Casos prácticos IA".
3. **Send this email:** *immediately* después de que se suscriben (o "0 days").
4. Pega el **asunto** y el **cuerpo** de arriba.
5. Verifica que el link `https://todoconta.com/guias/3-flujos-hibridos.pdf` responde (se publica al hacer deploy de la landing con esta rama).
6. Activa el autoresponder.

> Nota: cuando el mini-curso de $27 esté vivo en Nas.io, se puede agregar un
> segundo correo a este autoresponder (día 2-3) con la oferta, y prender también
> el upsell en el landing (`CURSO_27_URL`).
