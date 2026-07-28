# Correos de Sendy — lead magnet "3 Flujos Híbridos" (DOUBLE OPT-IN)

**Lista:** Recursos gratis - Casos prácticos IA (`vzn2EzpQzSnPJiEf4jR6Kg`)

**Flujo:** 1) se suscriben en `/flujos` → Sendy manda el **correo de confirmación** → 2) dan clic y confirman → el **autoresponder de bienvenida** manda la guía. Hasta que confirmen, no reciben nada. (Esto ya lo asume el landing: "Casi listo. Falta un paso… confirma tu correo".)

---

## 1) Correo de confirmación (opt-in)

Lo manda Sendy al suscribirse. En Sendy vive en los ajustes de la lista/brand
("Opt-in confirmation email"). Inserta el **enlace de confirmación de Sendy** donde
se indica (Sendy lo ofrece como botón/merge tag en ese editor).

**Asunto:** Un clic y te mando la guía

**Cuerpo:**

Hola [Name,fallback=qué tal],

Casi. Antes de mandarte la guía necesito que confirmes que este correo es tuyo. Es para que nadie te suscriba sin tu permiso, y para que la guía sí te llegue a ti.

Confirma aquí: [inserta el enlace de confirmación de Sendy]

En cuanto le des clic, te llega la guía de los 3 flujos. Si no confirmas, no te llega nada. Y si no fuiste tú quien se suscribió, ignora este correo y listo.

– Isca

---

## 2) Correo de bienvenida (autoresponder)

Se dispara al **confirmar** la suscripción. Sendy → Autoresponders → nueva, lista
"Recursos gratis - Casos prácticos IA", enviar *immediately* (0 días).

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

## Checklist en Sendy

1. Ajustes de la lista → **doble opt-in** activado.
2. Pegar el **correo de confirmación** (arriba) en la plantilla de opt-in e insertar el enlace de confirmación.
3. Crear/confirmar el **autoresponder de bienvenida** (arriba), *immediately*, sobre la misma lista.
4. Verificar que `https://todoconta.com/guias/3-flujos-hibridos.pdf` responde (ya deployado).
5. Prueba real: suscríbete con un correo tuyo → confirma → revisa que llegue la guía.

> Cuando el mini-curso de $27 esté en Nas.io: agregar un 2º correo al autoresponder
> (día 2-3) con la oferta, y prender el upsell en el landing (`CURSO_27_URL`).
