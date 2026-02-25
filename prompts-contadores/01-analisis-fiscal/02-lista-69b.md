# Consulta de Proveedores en Lista 69-B del SAT

> Verifica si tus proveedores o los de tu cliente aparecen en la lista de contribuyentes con operaciones simuladas (EFOS) del SAT.

## Cuándo usarlo

- Antes de registrar facturas de un proveedor nuevo
- Durante la revisión mensual de comprobantes recibidos
- Cuando recibes una carta invitación del SAT cuestionando deducciones
- Para preparar un reporte de due diligence fiscal para tu cliente
- Al auditar la cadena de proveedores de una empresa

## El Prompt

```
Actúa como un Contador Público mexicano especializado en cumplimiento fiscal y prevención de riesgos ante el SAT.

Necesito que me ayudes a crear un protocolo de verificación de proveedores contra la Lista 69-B del Código Fiscal de la Federación (contribuyentes con operaciones presuntamente inexistentes / EFOS).

CONTEXTO:
- Cliente: [NOMBRE_O_RAZON_SOCIAL]
- RFC del cliente: [RFC_DEL_CLIENTE]
- Régimen fiscal: [REGIMEN_FISCAL]
- Número de proveedores a verificar: [CANTIDAD]

LISTA DE PROVEEDORES A VERIFICAR:
[PEGAR_LISTA_DE_PROVEEDORES]
(Incluye: Nombre o razón social, RFC, monto facturado en el periodo)

NECESITO QUE GENERES:

1. **Guía de verificación paso a paso** para consultar cada proveedor en:
   - Lista 69-B publicada en el DOF
   - Portal del SAT (listado completo actualizado)
   - Artículo 69-B Bis (transmisión indebida de pérdidas fiscales)

2. **Tabla de control** con el siguiente formato:
   | # | Proveedor | RFC | Monto facturado | Estatus 69-B | Estatus 69-B Bis | Riesgo | Acción requerida |

3. **Análisis de riesgo** para cada proveedor clasificado como:
   - 🟢 Limpio: No aparece en ninguna lista
   - 🟡 Presunto: Aparece como presunto (tiene 30 días para desvirtuar)
   - 🔴 Definitivo: Publicado como definitivo en el DOF
   - ⚫ Desvirtuado: Apareció pero logró desvirtuar la presunción

4. **Plan de acción** si algún proveedor resulta en lista:
   - Impacto fiscal para mi cliente (Art. 69-B, cuarto párrafo CFF)
   - Plazos legales para actuar
   - Documentación que debo preparar
   - Estrategia para desvirtuar la presunción (si aplica)

5. **Modelo de carta** para solicitar aclaración al proveedor que aparezca en lista

IMPORTANTE: Recuérdame los fundamentos legales aplicables (CFF Art. 69-B, LISR Art. 27 fracción I, y disposiciones relacionadas).
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_O_RAZON_SOCIAL]` | Nombre de tu cliente | Restaurantes del Norte SA de CV |
| `[RFC_DEL_CLIENTE]` | RFC del contribuyente | RNO150320AB1 |
| `[REGIMEN_FISCAL]` | Régimen del cliente | 601 - General de Ley PM |
| `[CANTIDAD]` | Número de proveedores | 15 proveedores |
| `[PEGAR_LISTA_DE_PROVEEDORES]` | Lista con RFC y montos | Ver ejemplo abajo |

## Ejemplo de uso

```
CONTEXTO:
- Cliente: Comercializadora del Pacífico SA de CV
- RFC del cliente: CPA180901KL3
- Régimen fiscal: 601 - General de Ley Personas Morales
- Número de proveedores a verificar: 5

LISTA DE PROVEEDORES A VERIFICAR:
1. Distribuidora Nacional de Alimentos SA de CV | RFC: DNA100515QR7 | Facturado: $185,000 MXN
2. Servicios Integrales Mendoza | RFC: MELO850320AB1 | Facturado: $45,000 MXN
3. Transportes Logísticos del Centro SA de CV | RFC: TLC090812MN4 | Facturado: $320,000 MXN
4. Consultores Fiscales Asociados SC | RFC: CFA110203PQ8 | Facturado: $28,000 MXN
5. Suministros Industriales Pérez | RFC: PEGS770415CD2 | Facturado: $92,000 MXN
```

## Tips profesionales

- **Consulta la lista actualizada del SAT** en: sat.gob.mx → Otros trámites y servicios → Consulta de contribuyentes → Listado completo 69-B. Esta lista se actualiza regularmente.
- **Documenta SIEMPRE tu proceso de verificación.** En caso de auditoría, poder demostrar que revisaste a tus proveedores antes de deducir sus facturas es una defensa clave (materialidad de operaciones).
- **Crea un proceso recurrente.** Usa este prompt cada mes con los proveedores nuevos o con los que superen cierto monto. Te recomiendo verificar a cualquier proveedor con facturas mayores a $50,000 MXN.
