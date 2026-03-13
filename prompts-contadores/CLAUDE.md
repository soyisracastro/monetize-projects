# Pack de Prompts de Productividad para Contadores Mexicanos

## Qué es este proyecto

Colección de 25 prompts de IA listos para copiar, pegar y personalizar, diseñados específicamente para contadores mexicanos. Cada prompt incluye: instrucciones completas, tabla de personalización, ejemplo de uso con datos ficticios, y tips profesionales.

**Precio actual:** $497 MXN (el precio de lanzamiento de $247 MXN ya no aplica).

**Plataforma de venta:** nas.io

## Estructura

25 prompts organizados en 5 categorías + 1 bonus:

| Categoría | Prompts | Carpeta |
|-----------|---------|---------|
| 1. Análisis Fiscal | 6 prompts (#1-#6) | `01-analisis-fiscal/` |
| 2. Análisis Financiero | 4 prompts (#7-#10) | `02-analisis-financiero/` |
| 3. Nómina e IMSS | 5 prompts (#11-#15) | `03-nomina-imss/` |
| 4. Comunicación con Clientes | 4 prompts (#16-#19) | `04-comunicacion/` |
| 5. Productividad del Despacho | 5 prompts (#20-#24) | `05-productividad/` |
| 6. Bonus | 1 prompt (#25) | `06-bonus/` |

Ver `README.md` para el índice completo con links a cada prompt.

## Convenciones importantes

### Estructura de cada prompt
Todos los prompts siguen el framework **RCIF** (Rol, Contexto, Instrucción, Formato):
1. **Cuándo usarlo** — Situaciones prácticas donde este prompt ahorra tiempo
2. **El Prompt** — Bloque de código listo para copiar
3. **Cómo personalizar** — Tabla con campos `[ENTRE_CORCHETES]` y ejemplos
4. **Ejemplo de uso** — Caso completo con datos ficticios mexicanos
5. **Tips profesionales** — Consejos para sacarle más provecho, incluyendo notas de legislación vigente

### Legislación y datos que caducan
- **UMA 2026:** $117.31/día (vigente desde 1 de febrero de 2026). Se actualiza cada año el 1 de febrero.
- **ISN por estado:** Las tasas cambian anualmente. La tabla actual es de 2026 (rango: 2.40%–5%). CDMX: 4%, Chihuahua: 4%.
- **CFF 2026:** Reforma publicada DOF 07/11/2025. Incluye nuevas penas por EFOS (2-9 años prisión), Art. 30-B (plataformas digitales), facultades tecnológicas del SAT.
- **RESICO 2026:** Límite $3.5M, tasas 1%-2.5%, exención de declaración anual confirmada, nuevas sanciones CFDI.
- **LFT reformada:** Vacaciones Dignas 2023 (12 días mínimo Art. 76), regulación de plataformas digitales 2025-2026.
- **CFDI 4.0:** Catálogos actualizados feb-mar 2026, complemento de nómina 1.2 Rev E, Carta Porte 3.1.

Cuando se actualice legislación, revisar el `CHANGELOG.md` para documentar los cambios.

### Reglas de contenido
- Sin emojis en el cuerpo de los prompts (sí se usan semáforos 🔴🟡🟢 en formatos de salida)
- Los ejemplos siempre usan datos ficticios mexicanos (RFC, montos en MXN, nombres mexicanos)
- Todos los fundamentos legales deben citar artículo y ley específicos
- Los tips profesionales incluyen notas de legislación vigente 2026 donde aplique

## Relación con otros productos

- El **Ebook "IA para Contadores"** (`../ebook/`) menciona este pack en cada capítulo y tiene 5 prompts de muestra simplificados en su Apéndice C. Si se modifica la estructura de un prompt aquí, verificar consistencia con el apéndice.
- La **Guía Avanzada** (`bonus-video-guia-avanzada.md`) contiene instrucciones para crear asistentes de IA (GPTs, Claude Projects, Gemini Gems) basados en estos prompts. Si se agrega un prompt nuevo, agregarlo a la lista de tareas del system prompt sugerido.
- La **Landing Page** (`landing-page-copy.md`) tiene el copy de venta. Mantener sincronizado: conteo de prompts, precio, legislación mencionada en FAQ.

## Archivos clave

```
prompts-contadores/
  README.md                    # Índice del producto con todos los prompts numerados
  CHANGELOG.md                 # Historial de cambios para notificar a compradores
  00-introduccion.md           # Guía rápida de uso
  landing-page-copy.md         # Copy de la página de venta
  bonus-video-guia-avanzada.md # Guía para crear asistentes de IA
  01-analisis-fiscal/          # 6 prompts
  02-analisis-financiero/      # 4 prompts
  03-nomina-imss/              # 5 prompts
  04-comunicacion/             # 4 prompts
  05-productividad/            # 5 prompts
  06-bonus/                    # 1 prompt (meta-prompting)
```

## Estado actual (marzo 2026)

- v2.0 completada: todos los prompts actualizados a legislación 2026
- Prompt #6 (Resumen de Miscelánea Fiscal) agregado como regalo para compradores existentes
- CHANGELOG.md listo para notificar compradores a través de la plataforma
- Precio actualizado de $247 a $497 MXN en landing page y materiales
