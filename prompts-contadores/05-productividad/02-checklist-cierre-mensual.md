# Checklist de Cierre Mensual

> Genera un checklist completo y personalizado de todas las actividades que debes realizar para el cierre contable y fiscal de cada mes, sin olvidar ningún paso.

## Cuándo usarlo

- Al inicio de cada periodo de cierre (generalmente del día 1 al 17 del mes siguiente)
- Cuando incorporas un auxiliar nuevo y necesitas que siga un proceso estandarizado
- Para auditar si tu proceso de cierre actual está completo o le faltan pasos
- Al crear un manual de procedimientos para tu despacho
- Cuando sientes que "algo se te olvida" cada mes pero no sabes qué

## El Prompt

```
Actúa como un Contador Público mexicano experto en procesos y eficiencia para despachos contables.

Crea un checklist detallado y ordenado cronológicamente para el cierre mensual de un cliente, considerando todas las obligaciones contables y fiscales mexicanas.

DATOS DEL CLIENTE:
- Nombre: [NOMBRE_CLIENTE]
- Tipo de persona: [FÍSICA/MORAL]
- Régimen fiscal: [REGIMEN]
- Giro: [GIRO]
- ¿Tiene nómina? [SI/NO] - Empleados: [CANTIDAD]
- ¿Tiene operaciones con el extranjero? [SI/NO]
- ¿Es retenedor? [SI/NO] - ¿De qué? [ISR/IVA/AMBOS]
- ¿Está obligado a presentar DIOT? [SI/NO]
- ¿Está obligado a presentar contabilidad electrónica? [SI/NO]
- Sistema contable: [NOMBRE_SISTEMA]
- Mes de cierre: [MES_Y_AÑO]

OBLIGACIONES ESPECÍFICAS:
- ¿Pago provisional de ISR? [SI/NO]
- ¿Pago definitivo de IVA? [SI/NO]
- ¿Retenciones de ISR por honorarios? [SI/NO]
- ¿Retenciones de ISR por arrendamiento? [SI/NO]
- ¿Retenciones de IVA? [SI/NO]
- ¿ISN estatal? [SI/NO] - Estado: [ESTADO]
- ¿IESPS? [SI/NO]
- ¿Declaración informativa de operaciones con terceros (DIOT)? [SI/NO]
- ¿Es mes de pago bimestral IMSS? [SI/NO]
- ¿Es mes de declaración especial? [SI/NO] - ¿Cuál? [DETALLAR]

GENERA UN CHECKLIST CON:

1. **FASE 1: RECOPILACIÓN DE INFORMACIÓN** (Días 1-5 del mes siguiente)
   - [ ] Tarea con descripción breve
   - Responsable: Contador / Auxiliar / Cliente
   - Fuente del dato
   - Fecha límite sugerida

2. **FASE 2: REGISTRO CONTABLE** (Días 3-10)
   - [ ] Tareas de captura y registro
   - Orden lógico de captura
   - Validaciones a realizar

3. **FASE 3: CONCILIACIONES** (Días 8-12)
   - [ ] Conciliaciones bancarias
   - [ ] Conciliación de auxiliares vs mayor
   - [ ] Conciliación de CFDI vs registros
   - Tolerancias aceptables

4. **FASE 4: CÁLCULO DE IMPUESTOS** (Días 10-14)
   - [ ] Determinación de cada impuesto
   - Papeles de trabajo necesarios
   - Validaciones cruzadas

5. **FASE 5: PRESENTACIÓN DE DECLARACIONES** (Días 14-17)
   - [ ] Cada declaración con:
     - Portal/sistema donde se presenta
     - Fecha límite legal
     - Acuse a guardar

6. **FASE 6: CIERRE Y DOCUMENTACIÓN** (Días 17-20)
   - [ ] Archivo de documentos
   - [ ] Notificación al cliente
   - [ ] Respaldo de información

Para cada tarea incluye:
- Prioridad: 🔴 Crítica / 🟡 Importante / 🟢 Deseable
- Tiempo estimado
- Herramienta/sistema a usar
- Documento de salida (qué genera esta tarea)

TAMBIÉN GENERA:
- **Calendario visual** del mes con las fechas límite clave
- **Lista de documentos** que el cliente debe enviar y cuándo
- **Mensaje para el cliente** recordándole qué debe enviar

IMPORTANTE: Ordena las tareas en el orden en que se deben realizar, no alfabéticamente. Las dependencias deben ser claras (qué tarea debe completarse antes de iniciar otra).
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_CLIENTE]` | Nombre del cliente | Comercializadora Azteca SA de CV |
| `[REGIMEN]` | Régimen fiscal | 601 - General de Ley PM |
| `[GIRO]` | Actividad | Venta de materiales de construcción |
| `[CANTIDAD]` empleados | Cuántos tiene | 12 |
| `[MES_Y_AÑO]` | Mes que estás cerrando | Enero 2025 |
| `[NOMBRE_SISTEMA]` | Tu software contable | CONTPAQi / Aspel / Excel |

## Ejemplo de uso

```
DATOS DEL CLIENTE:
- Nombre: Alimentos Frescos del Bajío SA de CV
- Tipo: Persona Moral
- Régimen: 601 - General de Ley Personas Morales
- Giro: Distribuidora de alimentos
- Nómina: Sí - 18 empleados
- Operaciones con extranjero: No
- Retenedor: Sí - ISR e IVA (tiene 2 proveedores PF)
- DIOT: Sí
- Contabilidad electrónica: Sí
- Sistema: CONTPAQi Comercial + Nóminas
- Mes de cierre: Enero 2025

OBLIGACIONES:
- ISR provisional: Sí
- IVA definitivo: Sí
- Retenciones ISR e IVA: Sí
- ISN Guanajuato: Sí
- DIOT: Sí
- Bimestral IMSS: No (enero es impar)
- Especial: No
```

## Tips profesionales

- **Crea una copia del checklist para CADA cliente y CADA mes.** Puedes tenerlo en Google Sheets, Notion o incluso en papel. Lo importante es que marques cada tarea como completada y sepas exactamente en qué paso vas.
- **El cuello de botella casi siempre es la información del cliente.** Envía el recordatorio de documentos el día 1 del mes (no esperes al 10). Usa el Prompt #15 (Correo Profesional) para crear el mensaje de solicitud.
- **Automatiza lo que puedas.** Si usas CONTPAQi, los XML se pueden importar automáticamente. Si usas Excel, crea macros para los cálculos repetitivos. Cada minuto que automatizas se multiplica por el número de clientes.
