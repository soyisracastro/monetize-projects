# Plantilla del dictamen fiscal 1-pager

**Estado:** Pendiente
**Bloque:** A — Contenido al cliente (post-compra)
**Origen del brief:** [`docs/00_Contexto_Estrategico.md`](../docs/00_Contexto_Estrategico.md) sección 3 (Paquete base, ítem 2)

## Brief resumido

- **Es el corazón del posicionamiento premium.** Lo que justifica los $2,500 frente a un contador barato o una app de $1,500 que solo presenta y se va
- 1 sola página (no más). El cliente no quiere leer 10 páginas — quiere claridad
- Resumen del resultado en lenguaje humano: cuánto a favor / a cargo, **por qué** salió así
- Inconsistencias detectadas en el expediente SAT (CFDI mal emitidos, retenciones que no cuadran, deducciones que no aplicaron)
- Recomendaciones concretas para el siguiente ejercicio fiscal
- Plantilla = estructura fija + campos personalizables. La idea es que Israel pueda llenarla rápido (5-10 min por cliente) y entregar algo de valor real

## Outline propuesto

```
H1: Dictamen Fiscal Personalizado
    [Nombre del cliente] · Ejercicio fiscal 2025 · [Fecha de presentación]

H2: Tu resultado en una línea
    Saldo a favor de $X / Impuesto a cargo de $X / Sin diferencia

H2: Por qué salió así (la explicación corta)
    [3-5 bullets en lenguaje humano]
    - Tus ingresos del año fueron $X
    - Tu patrón te retuvo $X
    - Aprovechaste $X en deducciones personales
    - El resultado es la diferencia entre lo que debías pagar y lo que ya pagaron por ti

H2: Lo que noté en tu expediente SAT
    [Lista de inconsistencias o hallazgos — 0 a 5 bullets]
    - Ejemplo: tu patrón emitió X CFDI de nómina con error en concepto
    - Ejemplo: el SAT tiene registrado un ingreso por intereses bancarios que no consideramos
    - Ejemplo: tu deducción de gastos médicos no incluyó el dentista de febrero — el CFDI estaba bien pero faltaba el método de pago

H2: Recomendaciones para 2026 (cómo llegar mejor preparado)
    [3-5 bullets accionables — el ejercicio 2026 ya está corriendo, así que aún hay tiempo de actuar]
    - Guarda los CFDI de [tipo de gasto] desde enero 2026
    - Si vas a cambiar de empleo, avísame antes
    - Considera abrir una cuenta de ahorro para retiro (deducible)

H2 (opcional): ¿Quieres entender tu resultado en vivo?
    Línea muy sutil del add-on de sesión 1:1
    Solo si el cliente NO contrató el add-on todavía

Firma:
   CP Israel Castro Urieta · S&I Castro Consultores
   Cédula profesional [N]
```

## TODO

- [ ] Definir si es PDF o markdown que se imprime a PDF
- [ ] Crear sistema de variables: `[NOMBRE]`, `[INGRESOS]`, `[RETENCIONES]`, `[DEDUCCIONES]`, `[RESULTADO]`, etc.
- [ ] Definir campos opcionales vs obligatorios
- [ ] Decidir si las inconsistencias se omiten cuando no hay (sección entera desaparece) o se deja "No detecté inconsistencias en tu expediente"
- [ ] Plantilla visual: ¿logo? ¿colores de S&I Castro? ¿formato sobrio o más diseñado?
- [ ] Decidir qué tan formal es el lenguaje (quiero que sea humano, pero también que se sienta como un documento profesional)
- [ ] Validar que cabe en 1 sola página de A4 con todos los campos llenos

## Referencias

- [docs/00_Contexto_Estrategico.md sección 3](../docs/00_Contexto_Estrategico.md) — paquete base ítem 2
- [docs/00_Contexto_Estrategico.md sección 6](../docs/00_Contexto_Estrategico.md) — argumento anti-precio (el dictamen es lo que justifica el precio)
- [docs/01_FAQs_Audiencia.md FAQ 1](../docs/01_FAQs_Audiencia.md) — "por qué este año me sale a pagar" → la sección "Por qué salió así" del dictamen responde directamente esta pregunta
- [prompts/01_analisis-fiscal-declaracion.md](../prompts/01_analisis-fiscal-declaracion.md) — el prompt de Claude que automatizará la generación del dictamen
