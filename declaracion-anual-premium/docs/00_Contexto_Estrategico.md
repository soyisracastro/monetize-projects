# Contexto de Proyecto: Servicio de Declaración Anual Premium

**CP Israel Castro Urieta · S&I Castro Consultores · TodoConta**
**Documento para Claude Code — Abril 2026**

> **Nota de corrección (sesión de scaffolding, 9-abril-2026):** el documento original mencionaba "ejercicio 2024" en varios puntos. La declaración que efectivamente se presenta esta temporada (abril 2026) corresponde al **ejercicio fiscal 2025**. Todas las referencias a ejercicio fueron actualizadas. Las menciones a fechas de calendario (abril 2026, mayo 2026, etc.) son correctas como están — son cuándo ocurre el trabajo.

---

## 1. Resumen Ejecutivo

Servicio digital de declaración anual para personas físicas asalariadas, vendido principalmente a la audiencia de TodoConta (plataforma de contenido contable con 12 años de trayectoria).

**Meta conservadora para esta temporada:**
- 40 declaraciones presentadas
- Precio: $2,500 MXN por declaración
- Ingreso proyectado: $100,000 MXN
- Plazo: Abril 2026 (mes límite para personas físicas ante el SAT)

**Premisa central:** El cliente no compra un trámite, compra certeza y tranquilidad. El servicio se posiciona en segmento premium, diferenciándose de contadores de bajo costo por experiencia demostrable, dictamen personalizado, y una experiencia sin fricción donde el cliente no tiene que hacer absolutamente nada.

---

## 2. Perfil del Oferente

- **Nombre:** CP Israel Castro Urieta ("Isca")
- **Empresa:** S&I Castro Consultores (co-dirigida con su padre Salomón Castro y la colega Rosario Mondragón)
- **Plataforma de contenido:** TodoConta — 12 años de operación, amplia base de suscriptores y seguidores en redes sociales
- **Newsletter:** columna13.club
- **Plataforma de ventas:** Nas.io (ya configurada, con experiencia previa vendiendo ebooks)

### Credenciales clave para comunicar en el marketing
- Más de 15 años de experiencia como Contador Público Certificado
- Más de 10 años presentando declaraciones anuales
- Más de $20 millones de pesos recuperados en saldos a favor (ISR + IVA) — cifra acumulada incluye temporada 2025 y lo que va de 2026
- Perfil único: combina expertise fiscal con 3 años de experiencia en ingeniería de software
- Autor de "IA para Contadores" (ebook de 17 capítulos, publicado en Nas.io)
- Creador de Abacus: asistente fiscal vía WhatsApp powered by Claude (Anthropic)

### Stack tecnológico disponible
- Frontend: React.js, Next.js, JavaScript
- Backend/DB: Supabase (PostgreSQL + Storage + Auth)
- Automatización: GitHub Actions, Notion, Astro
- IA: Claude (Anthropic API), Gemini, ChatGPT
- Email marketing: Sendy (servidor propio)
- Plataforma de ventas: Nas.io

---

## 3. El Servicio

### Nombre tentativo
"Declaración Anual Tranquila" — transmite tranquilidad, no trámite. Pendiente definir nombre final.

### Público objetivo
- Personas físicas con ingresos por sueldos y salarios
- Que también pueden tener ingresos por intereses de apps de ahorro (Nu, Cetes Directo, Hey Banco, Mercado Pago, GBM Smart Cash, Sofipos, fondos de deuda)
- Con ingresos por nómina durante 2025
- Que quieren saber si tienen saldo a favor
- Que prefieren no lidiar con el SAT por su cuenta
- Audiencia principal: suscriptores y seguidores de TodoConta

### Paquete base — $2,500 MXN
1. **Presentación completa de la declaración anual** ante el SAT (haya o no haya saldo a favor) — incluye ingresos por salarios E intereses de apps de ahorro sin cargo extra
2. **Dictamen fiscal personalizado** (1 página): resumen claro del resultado, por qué salió así, inconsistencias detectadas en el expediente SAT
3. **Guía de deducciones personales para 2026**: checklist con gastos deducibles según el perfil del cliente, con CFDI requeridos
4. **Revisión de buzón tributario**: verificación de notificaciones pendientes que el cliente probablemente no ha revisado

### Add-on opcional — $400 MXN adicionales
**Sesión de claridad 1:1:** videollamada de 20 minutos para que el cliente entienda su resultado y salga orientado. No incluida en el paquete base para proteger la capacidad operativa. Se oferta como upgrade opcional post-compra.

### Lo que NO incluye el servicio
- Aclaraciones ante el SAT
- Declaraciones de otros regímenes (RESICO, Actividad Empresarial, Arrendamiento)
- Ingresos por enajenación de acciones, ETFs de renta variable, derivados, criptomonedas o dividendos
- Más de un ejercicio fiscal

### Capacidad operativa
- 5–8 declaraciones por día en ritmo sostenible
- Cupo total esta temporada: 40 declaraciones
- El cupo limitado es real y funciona como elemento de escasez legítima

---

## 4. Flujo Operativo del Servicio

### Proceso completo (el cliente no hace nada salvo pagar y mandar credenciales)

```
Cliente paga en Nas.io
→ Recibe email de bienvenida con instrucciones
→ Manda RFC + e-firma (.cer, .key, contraseña) por correo electrónico
→ Isca descarga información precargada del SAT
→ Isca calcula, analiza y prepara la declaración (apoyado en IA)
→ Isca presenta la declaración con la e-firma del cliente
→ Cliente recibe: acuse de presentación + dictamen personalizado + guía de deducciones
→ (Opcional) Sesión 1:1 de 20 minutos si contrató el add-on
```

### Decisión sobre recepción de documentos
Se optó por **correo electrónico simple** en lugar de plataforma técnica. Razón: la confianza no viene de la tecnología sino de la relación previa con la audiencia de TodoConta. Agregar una plataforma de upload genera más fricción que confianza en este segmento.

### Documento de instrucciones para el cliente
Se enviará un documento claro y humano (no técnico) que:
1. Explica qué es la e-firma en términos simples (no ".cer y .key", sino "los dos archivos que el SAT te dio")
2. Dice exactamente qué se hará con ella ("solo para enviar tu declaración, como un notario con tu firma física")
3. Confirma que los archivos se eliminan una vez presentada la declaración
4. Anticipa la duda antes de que surja

### Automatización del análisis
- Isca descarga CFDIs e información precargada del SAT
- Alimenta los datos a un prompt estructurado en Claude para análisis partida por partida: ingresos, retenciones, deducciones personales, inconsistencias
- El output es un dictamen que Isca revisa y valida antes de presentar
- **Pendiente:** construir el prompt de análisis fiscal (tarea post-lanzamiento)

---

## 5. Funnel de Captación

### Estructura general
```
Video Meta Ads (30 seg)
→ Squeeze Page
→ Lead Magnet (1 audio + 1 PDF)
→ Secuencia de 3 emails
→ Página de ventas en Nas.io
→ Compra
```

### Squeeze Page
- Minimalista, un solo objetivo: capturar email
- Un campo (email), un botón, una promesa
- Titular propuesto: *"Descubre si el SAT te debe dinero: audio + guía gratuita sobre tu Declaración Anual 2025"*
- Sin navegación, sin distracciones

### Lead Magnet: 1 audio + 1 PDF

**El audio (4–6 minutos)**
- Grabado con celular, editado con IA para mejorar calidad de sonido
- Tono: cercano, directo, como susurrar al oído — sin producción exagerada
- Contenido: qué son las deducciones personales + credencial de autoridad de Isca + oferta del servicio
- Función estratégica: activa conciencia, genera deseo, y cierra con oferta en una sola pieza
- No son 3 audios separados — 1 audio bien ejecutado > 3 a medias

**El PDF — "Guía Práctica: Tu Declaración Anual sin Sorpresas"**
- Independiente del audio, complementario en tema
- Estructura:
  - Sección 1: Lo que el SAT ya sabe de ti (información precargada, CFDIs, retenciones)
  - Sección 2: Caso Juan vs Caso Laura (mismo sueldo, diferente resultado por deducciones)
  - Sección 3: Checklist de deducciones personales con límites y CFDI requeridos
  - Sección 4: Los 5 errores más comunes al declarar
  - Sección 5: Qué pasa si no presento (consecuencias reales, sin alarmar)
  - Sección 6: Siguiente paso → CTA al servicio en Nas.io

**Caso Juan vs Caso Laura (núcleo del PDF)**
- Juan: asalariado, sueldo ~$18,000/mes, nunca guardó CFDIs, no tiene hipoteca. Resultado: saldo a favor mínimo o impuesto a cargo.
- Laura: mismo sueldo. Fue al dentista, pagó colegiatura, tiene seguro de GMM, hizo donativo. Guardó todos sus CFDIs. Resultado: saldo a favor de $8,000–$12,000 que el SAT le regresa.
- La diferencia no es el sueldo. Es saber qué guardar.

### Secuencia de 3 emails
1. **Email 1 (inmediato):** Entrega del audio + PDF. Breve, cálido.
2. **Email 2 (día 2):** Valor adicional. Subject con dato concreto (ej. "¿Sabías que los gastos del dentista son deducibles?"). Refuerza el porqué de declarar bien.
3. **Email 3 (día 4–5):** Cierre con urgencia. Presenta el servicio, precio, cupo limitado, fecha límite 30 de abril.

### Video para Meta Ads
- Duración: 15–30 segundos
- Formato: Isca directo a cámara, sin producción elaborada (funciona mejor así)
- Objetivo: interrumpir e enganchar, no educar
- Gancho propuesto: *"¿Sabías que el SAT puede deberte dinero y tú sin saberlo? Descúbrelo gratis aquí."*
- Dirige exclusivamente a la squeeze page

---

## 6. Posicionamiento y Pricing

### Contexto del mercado
| Segmento | Rango de precio |
|---|---|
| Low end | $200–$600 (express, sin análisis, sin atención) |
| Mid market | $800–$2,000 |
| Premium | $2,000–$3,500+ (despachos con marca) |

### Por qué $2,500 funciona
- Es la entrada al premium boutique, por encima de Heru ($1,499 app sin humano) e Impuestum ($1,740 solo presentación)
- El paquete justifica el precio: dictamen personalizado + guía + revisión de buzón = nadie más da esto a este precio
- El año pasado se compitió en la categoría equivocada (low end). Con el perfil de Israel y la audiencia tibia de TodoConta, no hay razón para competir por precio.
- Contadores Mismo Lenguaje "Integral" cobra $1,990 sin dictamen ni guía. $2,500 con ambos es competitivo.

### El argumento anti-precio para el cliente
*"Si tienes saldo a favor y la declaración tiene errores, o el SAT genera una discrepancia después, el costo de corregirlo es mucho mayor que los $2,500."*

### Mensaje central de marketing
> *"Presentamos tu declaración anual con análisis incluido, para que entiendas tu situación fiscal y llegues mejor preparado al siguiente año."*

### Credencial de autoridad principal
**"He recuperado más de $20 millones de pesos en saldos a favor para mis clientes."**
Este dato debe aparecer en: squeeze page, audio, Email 3, video de Meta Ads, página de Nas.io. Es el reencuadre que hace irrelevante la comparación con el contador barato.

---

## 7. Lista de Piezas a Construir

### Semana 1 — Lo que activa el dinero
| # | Pieza | Estado |
|---|---|---|
| 1 | Guion del video de Meta Ads (30 seg) | Pendiente |
| 2 | Guion del audio del lead magnet (5 min) | Pendiente |
| 3 | Copy completo de la squeeze page | Pendiente |
| 4 | Documento de instrucciones para el cliente (cómo mandar e-firma) | Pendiente |

### Semana 2 — Lo que cierra la venta
| # | Pieza | Estado |
|---|---|---|
| 5 | PDF guía práctica (casos Juan vs Laura + checklist + CTA) | Pendiente |
| 6 | Secuencia de 3 emails | Pendiente |
| 7 | Página del servicio en Nas.io (copy, precio, cupo, urgencia) | Pendiente |

### Post-temporada
| # | Pieza | Estado |
|---|---|---|
| 8 | Prompt de análisis fiscal para automatizar revisión de declaraciones con Claude | Pendiente |

---

## 8. Decisiones Tomadas (para no re-discutir)

- **Cupo:** 40 declaraciones. No más esta temporada.
- **Sesión 1:1:** No incluida en paquete base. Es add-on de $400.
- **Recepción de documentos:** Por correo electrónico simple. No se construye plataforma técnica esta temporada.
- **Credenciales del SAT:** Se pide e-firma completa (no solo CIEC) porque el cliente no debe hacer nada al final. La confianza se genera con el documento de instrucciones, no con tecnología.
- **Audio:** 1 solo audio (no 3). Grabado con celular, editado con IA. Tono cercano.
- **Excel calculadora:** Descartado. Se reemplaza con los casos Juan vs Laura dentro del PDF.
- **Postura competitiva:** No competir por precio. Posicionarse en premium con credencial de $20M recuperados.

---

## 9. Notas Adicionales

### Sobre la estacionalidad
El material educativo (audio + PDF) puede circular todo el año como contenido evergreen. Los ajustes necesarios son:
- Actualización de topes de deducciones personales cuando cambien (generalmente cada año en la RMF)
- Cambio de referencias al ejercicio fiscal (2025 → 2026) el próximo año
- El funnel de captación puede mantenerse activo todo el año captando leads para la siguiente temporada

### Sobre Meta Ads
- Isca tiene perfil de desarrollador y puede conectar cualquier herramienta necesaria
- El video de Meta Ads es la pieza más urgente porque activa todo el flujo
- Audiencia objetivo en Meta: personas 25–55 años, México, intereses en finanzas personales, impuestos, SAT, nómina

### Sobre Nas.io
- Isca ya tiene cuenta activa y experiencia vendiendo en la plataforma
- El servicio se configura como producto de precio fijo con cupo limitado
- Plataforma ya probada con la venta del ebook "IA para Contadores"

---

*Documento generado en conversación estratégica con Claude (Anthropic) — Abril 2026*
*Próximo paso: construir guion del video de Meta Ads*
