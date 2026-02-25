# Automatización de Reportes Recurrentes

> Crea plantillas y estructuras de reportes que puedes generar rápidamente cada mes para tus clientes, estandarizando la presentación de información contable y fiscal.

## Cuándo usarlo

- Cuando entregas el mismo tipo de reporte cada mes a tus clientes pero lo armas desde cero
- Para estandarizar los reportes de tu despacho (que todos los contadores entreguen lo mismo)
- Cuando quieres subir la calidad de lo que entregas sin invertir más tiempo
- Al crear un "paquete de entrega mensual" profesional para diferenciarte de otros contadores
- Para automatizar la generación de resúmenes ejecutivos

## El Prompt

```
Actúa como un Contador Público mexicano especializado en reportes ejecutivos y comunicación de información financiera a clientes.

Necesito que diseñes plantillas de reportes mensuales que pueda reutilizar con todos mis clientes, solo cambiando los datos.

DATOS DE MI DESPACHO:
- Nombre: [NOMBRE_DESPACHO]
- Número de clientes: [CANTIDAD]
- ¿Qué reportes entrega actualmente? [DESCRIBIR]
  (Ejemplos: "Solo mando un WhatsApp con el monto a pagar", "Envío los acuses por email", etc.)
- ¿Qué formato prefiere? [EXCEL/PDF/GOOGLE_SHEETS/NOTION]

PERFIL TÍPICO DE MIS CLIENTES:
- Tipo predominante: [FÍSICAS/MORALES/AMBAS]
- Nivel de sofisticación: [BAJO/MEDIO/ALTO]
  (¿Entienden estados financieros o solo quieren saber cuánto pagar?)
- ¿Qué les importa más saber? [DESCRIBIR]
  (Ejemplos: cuánto pagaron de impuestos, cómo va el negocio, si están al corriente, etc.)

GENERA LAS SIGUIENTES PLANTILLAS:

1. **REPORTE EJECUTIVO MENSUAL** (1 página)
   Para enviar a cada cliente después del cierre mensual.
   Debe incluir:
   - Resumen de impuestos del mes (qué se pagó y cuánto)
   - Estatus de obligaciones (✅ presentada / ❌ pendiente)
   - 3 indicadores clave del negocio (ventas, gastos, utilidad)
   - Comparativo vs mes anterior (subió/bajó)
   - Alertas o recomendaciones (si aplica)
   - Próximas fechas importantes

   Formato: Tabla limpia, con semáforos de colores, fácil de leer en celular.

2. **RESUMEN DE IMPUESTOS PAGADOS** (tabla)
   | Impuesto | Periodo | Base | Tasa | Impuesto determinado | Pagos previos | A pagar | Fecha límite | Estatus |
   - ISR provisional
   - IVA
   - Retenciones
   - ISN
   - IMSS (si aplica)
   - Total del mes

3. **REPORTE DE CFDI DEL MES** (resumen)
   | Concepto | Cantidad | Monto total |
   - CFDI emitidos (ingresos facturados)
   - CFDI recibidos (gastos con factura)
   - Nómina timbrada
   - Complementos de pago emitidos
   - Complementos de pago recibidos
   - CFDI cancelados

4. **DASHBOARD FINANCIERO TRIMESTRAL** (cada 3 meses)
   - Gráfica de ventas mensuales (últimos 6 meses)
   - Gráfica de impuestos pagados (tendencia)
   - Comparativo acumulado vs año anterior
   - Top 5 gastos más fuertes
   - Indicadores de salud financiera (semáforo)

5. **CARTA DE CUMPLIMIENTO FISCAL** (semestral/anual)
   Documento formal para que el cliente tenga evidencia de que está al corriente:
   - Lista de obligaciones cumplidas
   - Periodos declarados
   - Opinión de cumplimiento SAT (32-D)
   - Recomendaciones para el siguiente periodo

PARA CADA PLANTILLA INCLUYE:
- Estructura exacta (columnas, filas, secciones)
- Qué datos van en cada celda
- De dónde sale cada dato (sistema contable, portal SAT, SUA, etc.)
- Fórmulas o cálculos necesarios
- Instrucciones para llenarla en menos de 15 minutos por cliente
- Ejemplo con datos ficticios

IMPORTANTE: Las plantillas deben ser lo suficientemente simples para que un auxiliar las llene, pero lo suficientemente profesionales para impresionar al cliente.
```

## Cómo personalizar

| Campo | Qué poner | Ejemplo |
|-------|-----------|---------|
| `[NOMBRE_DESPACHO]` | Tu despacho | Contadores ISC |
| `[CANTIDAD]` | Número de clientes | 20 |
| Reportes actuales | Qué entregas hoy | Solo mando WhatsApp con línea de captura |
| `[FORMATO]` | Tu herramienta preferida | Google Sheets |
| Nivel de clientes | Qué tan sofisticados son | Bajo - solo quieren saber cuánto pagar |

## Ejemplo de uso

```
DATOS DE MI DESPACHO:
- Nombre: Iscasur Contadores
- Clientes: 25
- Reportes actuales: Mando por WhatsApp los acuses de las declaraciones y el monto que se pagó. A veces los clientes preguntan "cómo voy" y no tengo un reporte listo.
- Formato preferido: Google Sheets (para generar PDF después)

PERFIL DE MIS CLIENTES:
- 60% personas físicas, 40% morales
- Nivel: Bajo a medio. La mayoría no lee estados financieros, solo quieren saber: ¿cuánto pagué de impuestos? ¿estoy al corriente?
- Les importa: No tener problemas con el SAT y saber si su negocio va bien o mal
```

## Tips profesionales

- **Un buen reporte te ahorra preguntas.** Si cada mes le mandas a tu cliente un resumen claro de "qué se hizo, cuánto pagó y cómo va", eliminas el 80% de las preguntas por WhatsApp que te interrumpen el día.
- **Cobra por el reporte.** Los clientes valoran lo visual. Si hoy les mandas un WhatsApp con "$3,500 de ISR" y mañana les mandas un reporte con semáforos, gráficas y comparativos, puedes justificar un aumento de honorarios del 20-30%.
- **Automatiza con fórmulas.** Si usas Google Sheets, crea una hoja maestra que jale datos de tu sistema contable. Con IMPORTRANGE, QUERY y formato condicional puedes generar reportes semi-automáticos.
