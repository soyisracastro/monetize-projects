// Plugin Abacus ⇄ TodoConta: poderes SAT vía la API pública (api.todoconta.com/v1).
//
// Cada tool se registra como FACTORY: OpenClaw la invoca con el contexto de la
// sesión, del que tomamos `requesterSenderId` (identidad confiable del
// remitente — el runtime la provee, NO viene de los argumentos del modelo).
// Con ese número se resuelve la API key `tc_live_…` del suscriptor
// (identidad.mjs) y toda llamada al gateway sale con SU key: cada quien ve
// solo sus empresas. Sin vínculo → mensaje de activación, nunca un error crudo.
//
// PDFs y Excel se guardan en el directorio de medios (entrega.mjs) y el
// resultado instruye al agente a enviarlos con message(action=send, media=…).

import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { Type } from "@sinclair/typebox";
import { resolverApiKey } from "./identidad.mjs";
import { guardarBinario } from "./entrega.mjs";

const RFC_PATTERN = "^[A-Za-zÑñ&]{3,4}[0-9]{6}[A-Za-z0-9]{3}$";
const FECHA_PATTERN = "^[0-9]{4}-[0-9]{2}-[0-9]{2}$";

const SIN_VINCULO =
  "Este número de WhatsApp no está vinculado a una cuenta de TodoConta, así que " +
  "no puedo operar sobre tus empresas. Pide tu vinculación a Isca y vuelve a intentarlo.";

const texto = (t) => ({ content: [{ type: "text", text: t }] });
const fallo = (t) => ({ content: [{ type: "text", text: t }], isError: true });

/** Convierte respuestas de error del gateway en mensajes conversacionales. */
async function mensajeDeError(resp) {
  let detalle = "";
  try {
    detalle = (await resp.json())?.detail || "";
  } catch {
    /* cuerpo no-JSON */
  }
  switch (resp.status) {
    case 401:
      return "Tu vínculo con TodoConta ya no es válido (key revocada). Hay que re-vincular tu número.";
    case 403:
      return detalle || "Tu cuenta no tiene permiso para esta operación.";
    case 404:
      return detalle || "No encontré ese recurso en tu cuenta de TodoConta.";
    case 409:
      return detalle || "La operación no se puede completar todavía (falta un paso previo).";
    case 429:
      return "Alcancé el límite de peticiones de tu cuenta; dame un par de minutos y vuelve a pedírmelo.";
    case 503:
      return detalle || "El SAT anda intermitente en este momento; intenta de nuevo en unos minutos.";
    default:
      return detalle || `No pude completar la operación (HTTP ${resp.status}).`;
  }
}

/**
 * Llama al gateway con la key del usuario. `binario: true` devuelve el
 * Response para guardarlo; si no, el JSON parseado. Si el espacio del usuario
 * está arrancando (503 "arrancando"), reintenta una vez tras 10 s.
 */
async function llamarGateway({ gatewayUrl, apiKey, metodo = "GET", ruta, body, params, timeoutMs = 60_000, binario = false }) {
  const url = new URL(gatewayUrl.replace(/\/+$/, "") + ruta);
  for (const [k, v] of Object.entries(params || {})) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  const opciones = {
    method: metodo,
    headers: { "X-Api-Key": apiKey, ...(body ? { "Content-Type": "application/json" } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  for (let intento = 1; intento <= 2; intento++) {
    let resp;
    try {
      resp = await fetch(url, { ...opciones, signal: AbortSignal.timeout(timeoutMs) });
    } catch {
      return { error: "No pude conectar con TodoConta; intenta de nuevo en unos minutos." };
    }
    if (resp.ok) {
      if (binario) return { resp };
      try {
        return { data: await resp.json() };
      } catch {
        return { error: "TodoConta respondió algo que no entendí; intenta de nuevo." };
      }
    }
    const mensaje = await mensajeDeError(resp);
    if (resp.status === 503 && intento === 1 && /arrancando/i.test(mensaje)) {
      // El gateway está encendiendo el espacio del usuario; darle aire.
      await new Promise((r) => setTimeout(r, 10_000));
      continue;
    }
    return { error: mensaje };
  }
  return { error: "El espacio del usuario sigue arrancando; vuelve a intentarlo en un minuto." };
}

function resolverConfig(config) {
  const c = config ?? {};
  return {
    gatewayUrl: c.gatewayUrl || process.env.TODOCONTA_GATEWAY_URL || "https://api.todoconta.com",
    internoToken: c.internoToken || process.env.TODOCONTA_INTERNO_TOKEN || "",
    vinculosKey: c.vinculosKey || process.env.ASISTENTE_VINCULOS_KEY || "",
    mediaDir: c.mediaDir || "/root/.openclaw/media/outbound",
  };
}

export default definePluginEntry({
  id: "abacus-todoconta",
  name: "Abacus TodoConta",
  description:
    "Poderes SAT para Abacus vía la API pública de TodoConta: documentos, CFDIs, " +
    "reportes y calculadoras de las empresas del suscriptor (identidad por número de WhatsApp).",
  register(api) {
    const conf = resolverConfig(api.config);
    if (!conf.internoToken || !conf.vinculosKey) {
      api.logger?.warn?.(
        "[abacus-todoconta] falta internoToken y/o vinculosKey (env TODOCONTA_INTERNO_TOKEN / ASISTENTE_VINCULOS_KEY); las tools responderán sin vínculo.",
      );
    }

    // Factory: OpenClaw la llama con el contexto de la sesión (remitente confiable).
    api.registerTool((ctx) => {
      const sender = ctx?.requesterSenderId ?? null;

      /** Resuelve la key del remitente y ejecuta; errores → mensaje amable. */
      async function conKey(fn) {
        if (!sender) {
          return fallo("No pude identificar el número remitente de este chat, así que no puedo operar sobre TodoConta aquí.");
        }
        let apiKey;
        try {
          apiKey = await resolverApiKey(sender, conf);
        } catch (err) {
          api.logger?.error?.(`[abacus-todoconta] resolverApiKey: ${err?.message || err}`);
          return fallo("No pude verificar tu vínculo con TodoConta en este momento; intenta más tarde.");
        }
        if (!apiKey) return fallo(SIN_VINCULO);
        try {
          return await fn(apiKey);
        } catch (err) {
          api.logger?.error?.(`[abacus-todoconta] tool: ${err?.message || err}`);
          return fallo("Algo falló al hablar con TodoConta; intenta de nuevo en unos minutos.");
        }
      }

      /** Descarga un documento binario y lo deja listo para enviar por WhatsApp. */
      async function documento(apiKey, { metodo, ruta, body, params, nombre, timeoutMs }) {
        const r = await llamarGateway({ ...conf, apiKey, metodo, ruta, body, params, timeoutMs, binario: true });
        if (r.error) return fallo(r.error);
        const archivo = await guardarBinario(r.resp, { mediaDir: conf.mediaDir, nombre });
        return texto(
          `Documento listo: ${archivo}\n` +
            `Envíalo al usuario como documento con message(action=send, media=${archivo}).`,
        );
      }

      const json = (d) => texto(JSON.stringify(d, null, 2));

      return [
        {
          name: "todoconta_listar_empresas",
          description:
            "Lista las empresas dadas de alta en la cuenta TodoConta del usuario (RFC, nombre, métodos " +
            "de acceso, vencimiento de e.firma). Úsala PRIMERO cuando el usuario mencione una empresa o " +
            "cliente, para confirmar que existe en su catálogo; solo puedes operar sobre estas empresas.",
          parameters: Type.Object({}, { additionalProperties: false }),
          execute: (_id) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({ ...conf, apiKey, ruta: "/v1/empresas", timeoutMs: 45_000 });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_descargar_csf",
          description:
            "Descarga la Constancia de Situación Fiscal (PDF) de una empresa del catálogo del usuario. " +
            "Úsala cuando pidan 'constancia', 'CSF' o 'situación fiscal'. Requiere que la empresa tenga " +
            "su e.firma cargada en TodoConta; tarda 1-2 minutos (el SAT es lento). Puede pedirse la de " +
            "cualquier empresa/cliente dada de alta.",
          parameters: Type.Object(
            { rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa (12-13 caracteres)." }) },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc }) =>
            conKey((apiKey) =>
              documento(apiKey, {
                metodo: "POST",
                ruta: "/v1/csf",
                body: { rfc: rfc.toUpperCase() },
                nombre: `CSF_${rfc.toUpperCase()}.pdf`,
                timeoutMs: 300_000,
              }),
            ),
        },
        {
          name: "todoconta_descargar_opinion",
          description:
            "Descarga la Opinión de Cumplimiento 32-D (PDF) de una empresa del catálogo del usuario. " +
            "Úsala cuando pidan 'opinión de cumplimiento', '32-D' u 'opinión del SAT'. Requiere e.firma " +
            "cargada en TodoConta; tarda 1-2 minutos.",
          parameters: Type.Object(
            { rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }) },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc }) =>
            conKey((apiKey) =>
              documento(apiKey, {
                metodo: "POST",
                ruta: "/v1/opinion",
                body: { rfc: rfc.toUpperCase() },
                nombre: `Opinion32D_${rfc.toUpperCase()}.pdf`,
                timeoutMs: 300_000,
              }),
            ),
        },
        {
          name: "todoconta_consultar_listas_negras",
          description:
            "Consulta hasta 200 RFCs contra las listas negras del SAT (69 y 69-B: EFOS/EDOS). Úsala " +
            "cuando pidan verificar proveedores o RFCs. Preferible sobre el verificador clásico cuando " +
            "son varios RFCs a la vez.",
          parameters: Type.Object(
            {
              rfcs: Type.Array(Type.String({ pattern: RFC_PATTERN }), {
                minItems: 1,
                maxItems: 200,
                description: "RFCs a consultar.",
              }),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfcs }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                metodo: "POST",
                ruta: "/v1/listas-negras",
                body: { rfcs: rfcs.map((x) => x.toUpperCase()) },
                timeoutMs: 45_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_solicitar_cfdis",
          description:
            "Crea una solicitud de descarga masiva de CFDIs (XML) ante el SAT vía Web Service para una " +
            "empresa del catálogo. Úsala cuando pidan 'descarga mis XML/facturas de [periodo]'. OJO: el " +
            "SAT tarda minutos u HORAS en tenerla lista — avisa al usuario que le notificarás o que " +
            "pregunte '¿cómo va mi descarga?' más tarde. El espacio del usuario la descarga solo al " +
            "estar lista; después se procesa con todoconta_procesar_cfdis.",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              fecha_inicio: Type.String({ pattern: FECHA_PATTERN, description: "Desde (YYYY-MM-DD)." }),
              fecha_fin: Type.String({ pattern: FECHA_PATTERN, description: "Hasta (YYYY-MM-DD)." }),
              tipo_comprobante: Type.Optional(
                Type.Union([Type.Literal("E"), Type.Literal("R")], {
                  description: "E = emitidos (default) · R = recibidos.",
                }),
              ),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, fecha_inicio, fecha_fin, tipo_comprobante }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                metodo: "POST",
                ruta: "/v1/cfdi/solicitudes",
                body: {
                  rfc: rfc.toUpperCase(),
                  fecha_inicio,
                  fecha_fin,
                  tipo_comprobante: tipo_comprobante || "E",
                  tipo_solicitud: "CFDI",
                },
                timeoutMs: 150_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_estado_solicitud",
          description:
            "Consulta el estado de una solicitud de descarga masiva ya creada. Úsala cuando pregunten " +
            "'¿cómo va mi descarga?'. Estados: en proceso, lista (descargada) o vencida.",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              id_solicitud: Type.String({ minLength: 8, description: "ID que devolvió todoconta_solicitar_cfdis." }),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, id_solicitud }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                ruta: `/v1/cfdi/solicitudes/${encodeURIComponent(rfc.toUpperCase())}/${encodeURIComponent(id_solicitud)}`,
                timeoutMs: 45_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_procesar_cfdis",
          description:
            "Carga al procesador de TodoConta los XML YA descargados de una empresa (por periodo) para " +
            "poder sacar resumen, reportes y Excel. Úsala DESPUÉS de que la solicitud de descarga esté " +
            "lista y ANTES de todoconta_resumen_cfdis / todoconta_excel_cfdis. Puede tardar 1-3 minutos.",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              desde: Type.Optional(Type.String({ pattern: FECHA_PATTERN, description: "Desde (YYYY-MM-DD)." })),
              hasta: Type.Optional(Type.String({ pattern: FECHA_PATTERN, description: "Hasta (YYYY-MM-DD)." })),
              tipo: Type.Optional(
                Type.Union([Type.Literal("E"), Type.Literal("R")], {
                  description: "E = emitidos · R = recibidos · omitir = ambos.",
                }),
              ),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, desde, hasta, tipo }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                metodo: "POST",
                ruta: "/v1/cfdi/procesar",
                body: { rfc: rfc.toUpperCase(), desde, hasta, tipo },
                timeoutMs: 320_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_resumen_cfdis",
          description:
            "KPIs del periodo sobre CFDIs ya procesados (totales, IVA/ISR, conteos por tipo). Úsala para " +
            "responder '¿cuánto facturé/gasté en [periodo]?'. Si sale vacío, primero hay que descargar " +
            "(todoconta_solicitar_cfdis) y procesar (todoconta_procesar_cfdis).",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              desde: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              hasta: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              direccion: Type.Optional(
                Type.Union([Type.Literal("E"), Type.Literal("R")], {
                  description: "E = emitidos · R = recibidos · omitir = ambos.",
                }),
              ),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, desde, hasta, direccion }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                ruta: "/v1/cfdi/resumen",
                params: { rfc: rfc.toUpperCase(), desde, hasta, direccion },
                timeoutMs: 130_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_reporte_cfdis",
          description:
            "Reportes JSON sobre CFDIs ya procesados: totales-mes (evolución mensual), top-contrapartes " +
            "(clientes/proveedores principales) e integridad (huecos de folios). Mismo prerequisito que " +
            "el resumen: descargar y procesar primero.",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              nombre: Type.Union(
                [Type.Literal("totales-mes"), Type.Literal("top-contrapartes"), Type.Literal("integridad")],
                { description: "Reporte a generar." },
              ),
              desde: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              hasta: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              direccion: Type.Optional(Type.Union([Type.Literal("E"), Type.Literal("R")])),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, nombre, desde, hasta, direccion }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                ruta: `/v1/cfdi/reporte/${nombre}`,
                params: { rfc: rfc.toUpperCase(), desde, hasta, direccion },
                timeoutMs: 130_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
        {
          name: "todoconta_excel_cfdis",
          description:
            "Genera el Excel (o CSV) del periodo con el detalle de CFDIs e impuestos, listo para enviar " +
            "por WhatsApp. Requiere CFDIs ya descargados Y procesados (todoconta_procesar_cfdis). Úsala " +
            "cuando pidan 'mándame el Excel/reporte de mis facturas'.",
          parameters: Type.Object(
            {
              rfc: Type.String({ pattern: RFC_PATTERN, description: "RFC de la empresa." }),
              desde: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              hasta: Type.Optional(Type.String({ pattern: FECHA_PATTERN })),
              direccion: Type.Optional(Type.Union([Type.Literal("E"), Type.Literal("R")])),
              formato: Type.Optional(
                Type.Union([Type.Literal("xlsx"), Type.Literal("csv")], { description: "Default xlsx." }),
              ),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { rfc, desde, hasta, direccion, formato }) =>
            conKey((apiKey) =>
              documento(apiKey, {
                metodo: "GET",
                ruta: "/v1/cfdi/excel",
                params: { rfc: rfc.toUpperCase(), desde, hasta, direccion, formato: formato || "xlsx" },
                nombre: `CFDIs_${rfc.toUpperCase()}.${formato || "xlsx"}`,
                timeoutMs: 320_000,
              }),
            ),
        },
        {
          name: "todoconta_calculadora",
          description:
            "Calculadoras fiscales/laborales de TodoConta: sbc (salario base de cotización), isr " +
            "(ISR de salarios), aguinaldo, finiquito, liquidacion, carga-patronal, ptu. Úsala para " +
            "cálculos con cifras oficiales vigentes. Si faltan parámetros, la respuesta 400/422 dice " +
            "exactamente cuáles en español — pídeselos al usuario y reintenta.",
          parameters: Type.Object(
            {
              tipo: Type.Union(
                [
                  Type.Literal("sbc"),
                  Type.Literal("isr"),
                  Type.Literal("aguinaldo"),
                  Type.Literal("finiquito"),
                  Type.Literal("liquidacion"),
                  Type.Literal("carga-patronal"),
                  Type.Literal("ptu"),
                ],
                { description: "Calculadora a usar." },
              ),
              parametros: Type.Record(Type.String(), Type.Union([Type.String(), Type.Number(), Type.Boolean()]), {
                description: "Parámetros del cálculo (p.ej. salario_diario, fecha_ingreso…).",
              }),
            },
            { additionalProperties: false },
          ),
          execute: (_id, { tipo, parametros }) =>
            conKey(async (apiKey) => {
              const r = await llamarGateway({
                ...conf,
                apiKey,
                metodo: "POST",
                ruta: `/v1/calculadoras/${tipo}`,
                body: parametros || {},
                timeoutMs: 70_000,
              });
              return r.error ? fallo(r.error) : json(r.data);
            }),
        },
      ];
    });

    api.logger?.info?.("[abacus-todoconta] 11 tools registradas (gateway: " + conf.gatewayUrl + ")");
  },
});
