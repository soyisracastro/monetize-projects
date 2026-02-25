# Explicación de Impuestos para No-Contadores

> Traduce conceptos fiscales y contables complejos a un lenguaje simple que cualquier persona (sin formación contable) pueda entender.

## Cuándo usarlo

- Cuando tu cliente te pregunta "¿por qué pago tanto de impuestos?" y necesitas explicarlo sin jerga
- Al presentar resultados fiscales a dueños de negocio que no son contadores
- Para crear contenido educativo para tus redes sociales o newsletter
- Cuando un cliente nuevo necesita entender sus obligaciones fiscales desde cero
- Al explicar cambios en la legislación a personas no especializadas

## El Prompt

```
Actúa como un Contador Público mexicano que es excelente explicando conceptos fiscales y contables a personas que NO son contadores.

Tu superpoder es hacer que temas complejos se entiendan con ejemplos cotidianos, analogías simples y cero jerga técnica innecesaria.

PERFIL DE MI AUDIENCIA:
- ¿Quién es? [TIPO_DE_PERSONA]
  (Ejemplos: dueño de taquería, freelancer diseñador, doctor con consultorio, mamá emprendedora, mecánico con taller, etc.)
- Nivel de conocimiento fiscal: [NULO/BÁSICO/INTERMEDIO]
- ¿Qué le preocupa principalmente? [PREOCUPACIÓN]
  (Ejemplos: pagar menos impuestos, no meterse en problemas con el SAT, entender sus números, etc.)

TEMA A EXPLICAR:
[SELECCIONAR O ESCRIBIR]
a) ¿Qué es el ISR y cómo se calcula?
b) ¿Qué es el IVA y por qué lo cobro/pago?
c) ¿Qué son los pagos provisionales?
d) ¿Cómo funciona la declaración anual?
e) ¿Qué son las deducciones y cuáles puedo usar?
f) ¿Qué es la factura electrónica (CFDI) y por qué importa?
g) ¿Qué pasa si no declaro o no facturo?
h) ¿Qué régimen fiscal me conviene?
i) ¿Qué es el IMSS y cuánto me cuesta como patrón?
j) ¿Qué es la DIOT y para qué sirve?
k) Otro: [ESPECIFICAR_TEMA]

CONTEXTO ESPECÍFICO (si aplica):
[DATOS DEL CASO PARTICULAR DEL CLIENTE]

GENERA UNA EXPLICACIÓN QUE:

1. **Use una analogía cotidiana** para introducir el concepto
   (Ejemplo: "El IVA es como el peaje de una carretera: alguien tiene que pagarlo para que funcione")

2. **Explique el QUÉ** en máximo 3 oraciones simples
   - Sin términos técnicos (o si los usa, explicarlos entre paréntesis)
   - Como si le explicaras a un amigo en una comida

3. **Explique el POR QUÉ importa**
   - Qué pasa si lo hago bien (beneficio)
   - Qué pasa si lo ignoro (consecuencia)

4. **Dé un ejemplo con números reales** (simplificados)
   - Usando montos redondos y fáciles de seguir
   - Relacionados con el giro del cliente

5. **Incluya las 3 cosas más importantes** que el cliente debe recordar
   (Formato: "Lo que SÍ debes hacer / Lo que NO debes hacer / Lo que debes preguntar a tu contador")

6. **Cierre con un tip práctico** que pueda aplicar hoy

FORMATO: Conversacional, como si estuvieras platicando con el cliente. Usa "tú" en vez de "usted" (a menos que indique lo contrario). Puedes usar comparaciones con cosas cotidianas.

EXTENSIÓN: Máximo 400 palabras. Si el tema requiere más, divídelo en secciones cortas con subtítulos claros.

IMPORTANTE: La explicación debe ser correcta fiscalmente, solo simplificada en lenguaje. No sacrifiques precisión por simplicidad.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[TIPO_DE_PERSONA]` | A quién le explicas | Dueño de taller mecánico, 45 años, no terminó la prepa |
| `[NIVEL]` | Cuánto sabe de impuestos | Nulo - solo sabe que tiene que facturar |
| `[PREOCUPACIÓN]` | Qué le quita el sueño | Le da miedo que el SAT lo multe |
| Tema | Seleccionar de la lista | e) Deducciones |
| Contexto | Datos de su caso | Factura $150,000/mes, gasta $80,000 en refacciones |

## Ejemplo de uso

```
PERFIL DE MI AUDIENCIA:
- ¿Quién es? Dueña de estética de belleza, 35 años, emprendedora desde hace 2 años
- Nivel fiscal: Básico - sabe que tiene que facturar pero no entiende bien el IVA
- Preocupación: No entiende por qué a veces "le sale a pagar" y a veces no

TEMA: b) ¿Qué es el IVA y por qué lo cobro/pago?

CONTEXTO:
Factura $85,000 mensuales. Sus clientas le pagan en efectivo y con tarjeta. Compra productos de belleza por $25,000/mes con factura. No entiende por qué si ella cobra IVA, luego tiene que pagar más IVA al SAT.
```

## Tips profesionales

- **Guarda las explicaciones que generes.** Con el tiempo tendrás una biblioteca de explicaciones simples para cada tema. Puedes usarlas como contenido para redes sociales, newsletter, o incluso como parte de un mini-curso.
- **Adapta el lenguaje al cliente.** No es lo mismo explicarle al dueño de un taller mecánico que a un médico especialista. La analogía que le funciona a uno puede no resonar con el otro.
- **Usa este prompt para crear posts de redes sociales.** Agrega al final: "Ahora convierte esta explicación en un post para Instagram (carrusel de 5 slides con título llamativo) y un hilo de Twitter/X de 5 tweets."
