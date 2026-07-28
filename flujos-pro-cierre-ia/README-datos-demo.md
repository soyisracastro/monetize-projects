# Datos de demo + prompts — Flujos Pro

Todo lo que necesitas para **grabar** y para **subir a Nas.io**. Los RFC, nombres
y montos son **ficticios**; los datos traen "problemas" sembrados a propósito
para que la demo luzca. Esta hoja es tu **checklist de QA** (corre cada prompt
antes de grabar) y tu **guion de narración** (lo que la IA debe atrapar es lo que
tú señalas en cámara).

## Estructura

```
flujos-pro-cierre-ia/
├── guion-mini-curso.md        (el guion completo para grabar)
├── copy-venta-nasio.md        (copy de la página de venta)
├── prompts/                   (SUBIR a Nas.io como recursos descargables)
│   ├── modulo-0-tres-reglas.txt
│   ├── modulo-0-plantilla-base.txt
│   ├── flujo-1-ppd.txt
│   ├── flujo-2-diot.txt
│   ├── flujo-3-nomina.txt
│   ├── flujo-4-cierre.txt
│   └── TODOS-los-prompts.txt  (los 4 en un archivo)
└── datos-demo/                (para GRABAR; no es necesario subirlos)
    ├── flujo-1-ppd/  (cfdi-ingreso.csv, complementos-rep.csv, banco.csv)
    ├── flujo-2-diot/ (cfdi-recibidos.csv)
    ├── flujo-3-nomina/ (nomina-timbrada.csv, poliza-nomina.csv, dispersion-banco.csv)
    └── flujo-4-cierre/ (insumos-consolidados.md)
```

## Cómo grabar cada flujo (mismo ritmo siempre)

1. Abre Claude. Pega el prompt del flujo (de `prompts/`).
2. Pega los CSV de `datos-demo/` donde el prompt dice "[pega...]".
3. Deja que responda. Señala en cámara los hallazgos (abajo tienes cuáles).
4. Cierra con la regla: "esto lo hizo la IA; yo lo verifico y lo firmo".

> **Antes de grabar, corre cada prompt una vez (QA).** Si la salida no coincide
> con lo que espera esta hoja, ajusta el prompt o el dato antes de la toma.

---

## Flujo 1 — PPD. Qué debe atrapar la IA

Contexto a pegar: régimen Actividad Empresarial, periodo junio 2026, **fecha de
corte 2026-07-03**.

- **(a) PPD sin complemento y VENCIDO — la joya de la demo:** `F-004`
  Constructora Pime, 232,000. Se cobró en banco el 2026-05-22, el REP vencía el
  2026-06-05 y no existe. A la fecha de corte va ~28 días vencido.
- **(b) Parcialidad abierta:** `F-002` Transportes Lagunero, 116,000. Solo tiene
  REP por 58,000 (2026-06-22). Saldo pendiente 58,000.
- **(c) Cobro sin identificar:** SPEI del 2026-06-29 por **34,800** que no amarra
  con ninguna factura ni REP.
- **(d) PUE que debió ser PPD:** `F-005` Clínica Vida Sana, timbrada PUE, pero el
  depósito llegó 15 días después (2026-06-25). Método de pago mal.
- **Para contraste (NO deben marcarse como vencidas):** `F-006` (sin cobro aún) y
  `F-008` (cobrada 2026-06-27, su REP vence 2026-07-05: aún en plazo). `F-001`,
  `F-003`, `F-007` cuadran.

Punto de narración: "Un solo PPD vencido como el de Constructora Pime es multa
silenciosa. Míralo aparecer solo."

---

## Flujo 2 — DIOT. Qué debe atrapar la IA

Contexto: Actividad Empresarial, junio 2026.

- **Agrupa proveedores repetidos:** Papelería del Valle (`G-101` + `G-102`) en una
  sola fila; Combustibles La Rápida (`G-103` + `G-104`) en una sola fila.
- **Tasa 0%:** `G-108` Alimentos Básicos (subtotal 9,800, IVA 0).
- **Exento / sin IVA a revisar:** `G-109` Servicios Médicos (exento) y `G-112`
  Cámara de Comercio (cuota sin IVA → **alerta**, no mezclar con gravados).
- **Extranjero (tipo tercero 05):** `G-110` Global Tech Solutions LLC
  (RFC XEXX010101000, importación de servicio).
- **Retenciones:** `G-106` honorarios (IVA ret 1,600 + ISR ret 1,500) y `G-107`
  flete de autotransporte (IVA ret 480, el 4%).
- **Total de control:** IVA acreditable ≈ **13,777.11** (es el número que luego
  amarra con el cierre del Flujo 4). Base 16% ≈ 86,106.89.

Punto de narración: "Fíjate que junta los dos CFDIs del mismo proveedor y me marca
el extranjero y las retenciones. Ese es el trabajo tedioso, hecho."

---

## Flujo 3 — Nómina. Qué debe atrapar la IA

Contexto: junio 2026, 6 trabajadores.

- **Cuadran (timbrado = registrado = pagado):** Ana Torres, Bruno Salas, Carla
  Núñez.
- **David Ríos — finiquito NO registrado:** timbrado neto 17,800, registrado
  9,800, pagado 17,800. Falta el finiquito (8,000) en la póliza.
- **Elena Vargas — pago menor:** timbrado 7,500, registrado 7,500, **pagado
  6,900**. Diferencia de 600 (falta o ajuste no timbrado).
- **Fernando Aguilar — error de captura:** timbrado 9,100, **registrado 9,010**,
  pagado 9,100. Se transpuso el número en la póliza (90 de diferencia).
- **ISR retenido total timbrado = 9,830.** Talking point: hay que cuadrarlo contra
  lo provisionado/enterado.

Punto de narración: "Tres cuadran solos. Los otros tres son justo donde estaba tu
trabajo: interpretar por qué no cuadran."

---

## Flujo 4 — Cierre. Qué debe hacer la IA

Contexto y cifras: en `datos-demo/flujo-4-cierre/insumos-consolidados.md`.

- **Consolida** ingresos, deducciones, IVA y retenciones.
- **IVA a cargo esperado:** 45,600 − 13,777.11 = **31,822.89**.
- **Compara vs mayo** (IVA a cargo pasó de 24,100 a ~31,823; explica: se cobró más
  en el periodo).
- **La prueba de la regla "no inventes tasas":** el modelo NO tiene la utilidad
  acumulada, la tarifa del ISR ni los pagos provisionales previos. **Debe
  pedírtelos**, no calcular el ISR de memoria. Si los inventa, ese es el momento
  de enseñar por qué la regla importa.
- **Entrega 2:** el resumen de 6 líneas para el cliente.

Punto de narración: "Mira cómo me pide la tarifa en lugar de inventarla. Eso es lo
que lo vuelve confiable, y por eso tú sigues firmando."
