# Revisión y Análisis de CFDI

> Analiza comprobantes fiscales digitales para detectar inconsistencias, errores en datos fiscales y oportunidades de deducción.

## Cuándo usarlo

- Al recibir la facturación mensual de un cliente y necesitas revisarla antes de registrarla
- Cuando preparas la declaración mensual o anual y quieres validar que los CFDI cuadren
- Si sospechas que hay errores en los comprobantes de un proveedor
- Durante una auditoría interna para verificar la calidad de la documentación fiscal

## El Prompt

```
Actúa como un Contador Público mexicano especializado en fiscalización y revisión de CFDI (Comprobantes Fiscales Digitales por Internet).

Necesito que analices la siguiente información de comprobantes fiscales y me entregues un reporte detallado.

DATOS DEL CONTRIBUYENTE:
- RFC: [RFC_DEL_CLIENTE]
- Régimen fiscal: [REGIMEN_FISCAL]
- Actividad económica principal: [ACTIVIDAD_ECONOMICA]
- Periodo de revisión: [MES_Y_AÑO]

DATOS DE LOS CFDI A REVISAR:
[PEGAR_AQUI_RESUMEN_DE_CFDIS]
(Incluye: UUID, RFC emisor, concepto, subtotal, IVA, total, uso de CFDI, método de pago, forma de pago)

REALIZA LAS SIGUIENTES VALIDACIONES:

1. **Datos fiscales del emisor**: Verifica que el RFC del emisor tenga formato válido (12 dígitos persona moral, 13 persona física). Señala cualquier RFC que parezca genérico (XAXX010101000, XEXX010101000).

2. **Uso de CFDI**: Valida que el uso de CFDI declarado sea congruente con el concepto facturado y el régimen fiscal del receptor. Lista los que no correspondan.

3. **Método y forma de pago**: Identifica inconsistencias entre método de pago (PUE/PPD) y forma de pago. Señala si hay CFDI con método PPD que no tengan complemento de pago asociado.

4. **Deducibilidad**: Clasifica cada CFDI como:
   - ✅ Deducible (cumple requisitos del Art. 27 LISR)
   - ⚠️ Revisar (podría ser deducible con ajustes)
   - ❌ No deducible (no cumple requisitos)

5. **Alertas de riesgo**: Identifica cualquier situación que pudiera representar un riesgo en caso de revisión por parte del SAT.

FORMATO DE ENTREGA:

**RESUMEN EJECUTIVO**
(Máximo 5 puntos clave)

**TABLA DE VALIDACIÓN**
| # | UUID (últimos 8) | Emisor | Concepto | Total | Uso CFDI | Estatus | Observación |

**ALERTAS** (si existen)
🔴 Crítico | 🟡 Atención | 🟢 Correcto

**RECOMENDACIONES**
(Acciones específicas a tomar, ordenadas por prioridad)
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[RFC_DEL_CLIENTE]` | RFC del contribuyente receptor | ABC010101AB1 |
| `[REGIMEN_FISCAL]` | Clave y nombre del régimen | 601 - General de Ley Personas Morales |
| `[ACTIVIDAD_ECONOMICA]` | Giro principal del negocio | Restaurante de comida mexicana |
| `[MES_Y_AÑO]` | Periodo que estás revisando | Enero 2025 |
| `[PEGAR_AQUI_RESUMEN_DE_CFDIS]` | Datos de los CFDI (puedes copiar de tu sistema contable o del portal del SAT) | Ver ejemplo abajo |

## Ejemplo de uso

```
DATOS DEL CONTRIBUYENTE:
- RFC: REST850315MN2
- Régimen fiscal: 601 - General de Ley Personas Morales
- Actividad económica principal: Restaurante de comida mexicana
- Periodo de revisión: Enero 2025

DATOS DE LOS CFDI A REVISAR:
1. UUID: ...a3b4c5d6 | RFC: PROA800101AB1 | Concepto: Compra de insumos alimenticios | Subtotal: $45,000 | IVA: $0 | Total: $45,000 | Uso: G03 (Gastos en general) | Método: PUE | Forma: 03 (Transferencia)
2. UUID: ...e7f8g9h0 | RFC: XAXX010101000 | Concepto: Servicio de limpieza | Subtotal: $8,500 | IVA: $1,360 | Total: $9,860 | Uso: G03 | Método: PUE | Forma: 01 (Efectivo)
3. UUID: ...i1j2k3l4 | RFC: GALL750620QR5 | Concepto: Renta de local comercial | Subtotal: $25,000 | IVA: $4,000 | Total: $29,000 | Uso: I01 (Construcciones) | Método: PPD | Forma: 99 (Por definir)
```

## Tips profesionales

- **Exporta los CFDI desde el portal del SAT** en formato de metadatos para tener toda la información estructurada. Descarga el reporte de "CFDI recibidos" del periodo y copia las columnas principales.
- **Presta atención especial al RFC genérico** (XAXX010101000). Si aparece como emisor, investiga inmediatamente — podría tratarse de un proveedor no localizado.
- **Para revisiones más profundas**, puedes agregar al prompt: "También verifica que los montos de IVA correspondan a la tasa correcta (16%, 0%, o exento) según el tipo de bien o servicio facturado."
- **Catálogos CFDI 4.0 actualizados en 2026.** El SAT actualizó los catálogos del CFDI 4.0 en febrero-marzo de 2026 (usos de CFDI, formas de pago, claves de producto/servicio). Verifica que los códigos usados por tus proveedores correspondan a las claves vigentes. También se actualizó el complemento de nómina a la revisión E (1.2 Rev E) y los catálogos de Carta Porte 3.1.
- **Nuevo requisito para productos con nicotina (2026).** Si revisas CFDI de empresas que comercializan tabacos labrados, la descripción del concepto debe incluir: peso total de tabaco contenido o cantidad de cigarros, y miligramos de nicotina. Su ausencia puede afectar la deducibilidad.
