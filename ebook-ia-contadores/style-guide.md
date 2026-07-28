# Guía de Estilo — Ebook "IA para Contadores"

## Voz y Tono

- **Perspectiva:** Primera persona (Isca). Como si le estuvieras platicando a un colega contador mientras se toman una cerveza.
- **Registro:** Informal pero profesional. Nada de jerga técnica sin explicar. Nada de academicismo.
- **Tuteo:** Sí. Hablamos de "tú", no de "usted".
- **Humor:** Sutil, natural. No forzado. Tipo "ya sé que solo un friki habla de esto en una peda, pero aquí estamos".
- **Extensión por capítulo:** 1,500–2,500 palabras. Lo suficiente para profundizar, lo suficientemente corto para no aburrir.
- **Párrafos:** Cortos. Máximo 3-4 líneas. Mucho espacio en blanco.
- **Oraciones:** Directas. Evitar subordinadas largas.

## Estructura de cada Capítulo

```markdown
# Capítulo [N]: [Título]

[Gancho: Historia, anécdota o situación relatable. 2-3 párrafos máximo.]

## [Subtítulo del concepto principal]

[Explicación del concepto con la analogía contable/vida diaria.]

> **Concepto Clave**
> **[Término técnico]:** [Definición en una oración simple, sin jerga.]

[Desarrollo más profundo. Aquí se expande lo que el newsletter no cubría.]

## En la Práctica

[Cómo aplica este concepto en el día a día del despacho contable. Ejemplo concreto con contexto mexicano (SAT, CFDI, ISR, etc.).]

## Mito vs Realidad

- **Mito:** [Lo que la gente cree]
- **Realidad:** [Lo que realmente pasa y por qué]

## [Secciones adicionales según el capítulo]

[Contenido expandido, comparaciones, tablas, etc.]

---

### Lo que te llevas

- [Bullet 1: Takeaway principal]
- [Bullet 2: Takeaway secundario]
- [Bullet 3: Takeaway práctico]

### Pruébalo tú mismo

[Un ejercicio concreto que el lector puede hacer ahora mismo con cualquier LLM. Instrucciones paso a paso, máximo 3 pasos.]

### Si quieres ir más lejos

[Puente sutil — NO un pitch de ventas. Algo como: "Si quieres ver este concepto aplicado a 24 tareas reales de un despacho, el Pack de Prompts tiene exactamente eso." o "En el taller de abril trabajamos esto con casos en vivo."]
```

## Formato de Recuadros

### Concepto Clave
Se usa cuando se introduce un término técnico por primera vez. Formato blockquote con negrita:

```markdown
> **Concepto Clave**
> **Token:** Es el fragmento mínimo de texto que la IA procesa. Una palabra puede ser uno o varios tokens. Cada token cuesta dinero.
```

### En la Práctica
Sección propia (##) que muestra aplicación concreta en el despacho. Siempre con contexto mexicano.

### Mito vs Realidad
Lista con dos bullets. Directo, sin rodeos.

## Reglas de Contenido

1. **Conceptos, no interfaz.** Nunca escribir "haz clic en el botón X de ChatGPT". Los conceptos sobreviven; las instrucciones de UI caducan en semanas.
2. **Agnóstico de modelo.** Mencionar modelos como ejemplos, nunca como "la herramienta". Hoy es ChatGPT, mañana será otro.
3. **Tablas comparativas** de modelos o herramientas van en recuadros claramente marcados como información que puede cambiar.
4. **Sin CTAs de email.** Nada de "mañana te cuento" ni "haz clic aquí". Esto es un libro, no un newsletter.
5. **Cross-references internas.** Usar "como vimos en el Capítulo 3" o "esto lo profundizamos en el Capítulo 12".
6. **México primero.** Los ejemplos fiscales siempre con leyes mexicanas (LISR, LIVA, CFF, LSS, LFT, NIF).
7. **Sin emojis** en el cuerpo del texto. Limpio y profesional.
8. **Firmado como Isca.** La voz es siempre la de Isca, contador y programador.

## Glosario

Todo término técnico que aparezca en un "Concepto Clave" debe incluirse en el Apéndice A (Glosario). Mantener una lista running durante la escritura.

## Puentes al Pack de Prompts

- Máximo 1 mención por capítulo, en la sección "Si quieres ir más lejos"
- Tono: recomendación de colega, no pitch de ventas
- Nunca incluir precio ni enlace de compra dentro del capítulo
- Los 5 prompts de muestra van SOLO en el Apéndice C
