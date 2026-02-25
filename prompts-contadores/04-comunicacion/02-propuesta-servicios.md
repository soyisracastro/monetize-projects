# Propuesta de Servicios Contables

> Genera una propuesta de servicios profesional, detallada y persuasiva para un prospecto de cliente, con alcances claros y opciones de precio.

## Cuándo usarlo

- Cuando un prospecto te pide una cotización de tus servicios contables
- Al renovar el contrato anual con un cliente existente con nuevos alcances
- Para presentar servicios adicionales a un cliente actual
- Cuando compites contra otro despacho y necesitas diferenciarte
- Al estandarizar tus propuestas para no reinventar la rueda cada vez

## El Prompt

```
Actúa como un Contador Público mexicano que necesita crear una propuesta de servicios profesionales para ganar un nuevo cliente.

DATOS DE MI DESPACHO:
- Nombre: [NOMBRE_DESPACHO]
- Años de experiencia: [AÑOS]
- Especialidades: [LISTAR_ESPECIALIDADES]
- Número de clientes atendidos: [CANTIDAD]
- Diferenciadores: [QUÉ_TE_HACE_DIFERENTE]
  (Ejemplos: uso de tecnología/IA, atención personalizada, experiencia en el giro, etc.)

DATOS DEL PROSPECTO:
- Nombre/Razón social: [NOMBRE_PROSPECTO]
- Tipo de persona: [FÍSICA/MORAL]
- Régimen fiscal: [REGIMEN]
- Giro del negocio: [GIRO]
- Número de empleados: [CANTIDAD]
- Facturación mensual aproximada: $[MONTO]
- ¿Tiene contador actualmente? [SI/NO]
- ¿Qué dolor o problema tiene? [DESCRIBIR]
  (Ejemplos: su contador anterior dejó desorden, necesita regularizarse, quiere reducir impuestos, no entiende sus números, etc.)

SERVICIOS QUE QUIERO OFRECER:
[SELECCIONAR LOS QUE APLIQUEN]
- [ ] Contabilidad mensual
- [ ] Declaraciones mensuales (ISR, IVA, DIOT, retenciones)
- [ ] Declaración anual
- [ ] Nómina y IMSS
- [ ] Facturación electrónica
- [ ] Asesoría fiscal
- [ ] Planeación fiscal
- [ ] Auditoría interna
- [ ] Dictamen fiscal
- [ ] Devoluciones de impuestos
- [ ] Regularización (poner al corriente)
- [ ] Otro: [ESPECIFICAR]

RANGO DE PRECIOS QUE MANEJO:
- Honorarios mensuales estimados: $[RANGO_MIN] - $[RANGO_MAX] MXN
- ¿Quiero ofrecer paquetes/tiers? [SI/NO]

GENERA UNA PROPUESTA PROFESIONAL QUE INCLUYA:

1. **PORTADA**
   - Título de la propuesta
   - Datos del despacho
   - Datos del prospecto
   - Fecha

2. **CARTA DE PRESENTACIÓN** (1 párrafo)
   - Personalizada al dolor/necesidad del prospecto
   - Breve, empática y profesional

3. **DIAGNÓSTICO INICIAL**
   - Basado en la información del prospecto, identifica sus necesidades principales
   - Prioriza: qué necesita resolver PRIMERO

4. **ALCANCE DE SERVICIOS**
   Para cada servicio, incluye:
   - Qué incluye específicamente (entregables)
   - Qué NO incluye (para evitar malentendidos)
   - Frecuencia (mensual, anual, puntual)
   - Responsabilidades del cliente (qué información debe proporcionar y cuándo)

5. **OPCIONES DE CONTRATACIÓN** (si aplica, 2-3 paquetes)
   | Característica | Básico | Profesional | Premium |
   |---------------|--------|-------------|---------|
   | [Servicio 1] | ✅ | ✅ | ✅ |
   | [Servicio 2] | ❌ | ✅ | ✅ |
   | [Servicio 3] | ❌ | ❌ | ✅ |
   | Precio mensual | $ | $ | $ |

6. **INVERSIÓN**
   - Honorarios mensuales
   - Condiciones de pago
   - ¿Hay costos adicionales? (regularización, setup inicial, etc.)

7. **POR QUÉ ELEGIRNOS** (3-4 razones)
   - Conectadas con el dolor del prospecto
   - Beneficios, no características

8. **TÉRMINOS Y CONDICIONES** (breve)
   - Vigencia de la propuesta
   - Forma de pago
   - Confidencialidad
   - Cancelación

9. **SIGUIENTE PASO**
   - Una acción clara para el prospecto
   - Datos de contacto

TONO: Profesional pero accesible. Que transmita confianza y conocimiento sin ser arrogante.
EXTENSIÓN: Máximo 3 páginas (o equivalente).
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_DESPACHO]` | Tu marca o nombre profesional | García & Asociados Contadores |
| `[ESPECIALIDADES]` | En qué eres bueno | Régimen fiscal PyMEs, nómina, planeación fiscal |
| `[NOMBRE_PROSPECTO]` | Quién te pidió cotización | Taquería "El Paisa" SA de CV |
| `[GIRO]` | A qué se dedica | Restaurante de tacos |
| `[QUÉ_TE_HACE_DIFERENTE]` | Tu ventaja competitiva | Uso de IA para análisis fiscal, reportes visuales |
| `[DOLOR]` | Por qué te busca | Su contador anterior dejó de contestar, tiene 3 meses sin declarar |

## Ejemplo de uso

```
DATOS DE MI DESPACHO:
- Nombre: Iscasur Contadores Digitales
- Años de experiencia: 8
- Especialidades: Contabilidad para PyMEs, nómina, planeación fiscal, uso de IA
- Clientes atendidos: 45+
- Diferenciadores: Uso de tecnología e IA, reportes claros y visuales, comunicación constante por WhatsApp

DATOS DEL PROSPECTO:
- Nombre: Taller Mecánico "AutoExpress" - Juan Rodríguez
- Tipo: Persona Física con Actividad Empresarial
- Régimen: 612
- Giro: Taller mecánico automotriz
- Empleados: 6 (4 mecánicos + 1 recepcionista + 1 ayudante)
- Facturación: ~$180,000/mes
- ¿Tiene contador? Sí, pero quiere cambiar
- Dolor: No entiende cuánto paga de impuestos ni por qué. Siente que paga mucho. Quiere alguien que le explique las cosas en su idioma.

SERVICIOS: Contabilidad mensual, declaraciones, nómina y IMSS, asesoría fiscal
RANGO DE PRECIOS: $3,500 - $6,500 MXN
PAQUETES: Sí, quiero ofrecer 3 niveles
```

## Tips profesionales

- **Siempre ofrece 3 opciones.** La psicología del pricing muestra que la mayoría elige la opción intermedia. Pon tu servicio ideal como el paquete "Profesional" (el del medio).
- **Enfoca la propuesta en el dolor del cliente, no en tus credenciales.** Al prospecto le importa que resuelvas SU problema. "Te ayudamos a entender tus números" vende más que "Tenemos 8 años de experiencia".
- **Incluye un costo de setup si el cliente viene con desorden.** No regales las horas de regularización. Puedes ofrecerlo como "Diagnóstico inicial: $X (único)" separado de los honorarios mensuales.
