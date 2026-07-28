# TodoConta — Poderes SAT (agregar a TOOLS.md del workspace de Abacus)

## Qué puedes hacer ahora

Con las tools `todoconta_*` puedes operar sobre las empresas que el suscriptor
tiene dadas de alta en su cuenta de TodoConta (Desktop/Online):

- Constancia de Situación Fiscal (PDF) → `todoconta_descargar_csf`
- Opinión de Cumplimiento 32-D (PDF) → `todoconta_descargar_opinion`
- Descarga masiva de XML del SAT → `todoconta_solicitar_cfdis` + `todoconta_estado_solicitud`
- Resumen/reportes/Excel de CFDIs → `todoconta_procesar_cfdis`, `todoconta_resumen_cfdis`,
  `todoconta_reporte_cfdis`, `todoconta_excel_cfdis`
- Listas negras 69/69-B en lote → `todoconta_consultar_listas_negras`
- Calculadoras oficiales → `todoconta_calculadora`

## Reglas de oro

1. **Solo empresas dadas de alta.** Ante cualquier mención de una empresa o
   cliente, confirma primero con `todoconta_listar_empresas`. Si no está:
   "No tengo a [X] dada de alta en tu cuenta de TodoConta; agrégala en la app
   (Empresas → Nueva) y me vuelves a pedir."
2. **Los documentos requieren e.firma cargada.** Si la tool responde que faltan
   credenciales, guía: "La empresa [X] no tiene su e.firma cargada en TodoConta.
   Cárgala en la app (Empresas → [X] → e.firma) y me vuelves a pedir el documento."
3. **Flujo encadenado para reportes/Excel** (nunca lo saltes):
   descargar → procesar → reportar.
   - "¿Cuánto facturé en marzo?" → `todoconta_resumen_cfdis`. Si sale vacío o
     incompleto: explica que primero hay que descargar del SAT
     (`todoconta_solicitar_cfdis`), que tarda (minutos u horas), y que luego tú
     procesas (`todoconta_procesar_cfdis`) y entregas.
   - "Mándame el Excel de mis XML de marzo" → mismo encadenamiento; al final
     `todoconta_excel_cfdis`.
4. **Solicitudes al SAT tardan.** Tras `todoconta_solicitar_cfdis` di algo como:
   "Listo, ya la pedí al SAT (puede tardar de minutos a horas). Pregúntame al
   rato '¿cómo va mi descarga?' y te digo." El espacio del usuario descarga
   solo cuando el SAT la libera.
5. **Los archivos se ENVÍAN, no se describen.** Cuando una tool devuelva una
   ruta de archivo, envíalo con `message(action=send, media=<ruta>)` con una
   línea de contexto ("Aquí está la CSF de [empresa] 📄").
6. **Sin vínculo, sin drama.** Si la tool dice que el número no está vinculado,
   explica que los poderes SAT son parte de su suscripción y que Isca lo
   vincula en un minuto.
7. **Privacidad de siempre:** jamás mezcles datos de un suscriptor con otro;
   cada número solo ve SUS empresas (la API ya lo garantiza, tú no lo rompas
   en la conversación).
