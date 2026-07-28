// Resolución de identidad: remitente de WhatsApp → API key de TodoConta.
//
// El runtime de OpenClaw entrega `requesterSenderId` en el contexto de la
// tool factory (identidad CONFIABLE del remitente — no viene de los
// argumentos del modelo, así que no se puede falsificar por prompt).
// Aquí se normaliza a E.164, se consulta el endpoint interno del gateway
// (que es quien habla con Supabase; el bot nunca toca el service key) y se
// descifra la API key con la llave AES local del VPS.

import { createDecipheriv } from "node:crypto";

const CACHE_TTL_MS = 10 * 60 * 1000; // vínculos válidos
const CACHE_NEG_TTL_MS = 60 * 1000; // números sin vínculo (no martillar al gateway)
const cache = new Map(); // numero E.164 -> { expira, apiKey|null }

/** Normaliza el sender de WhatsApp (p.ej. "5214431820680@s.whatsapp.net") a E.164. */
export function normalizarNumero(senderId) {
  if (!senderId) return null;
  const base = String(senderId).split("@")[0].split(":")[0];
  const digitos = base.replace(/[^0-9]/g, "");
  if (digitos.length < 8 || digitos.length > 15) return null;
  return `+${digitos}`;
}

/** Descifra base64(nonce(12) || ciphertext || tag(16)) con AES-256-GCM. */
function descifrarKey(blobB64, llaveB64) {
  const llave = Buffer.from(llaveB64, "base64");
  if (llave.length !== 32) {
    throw new Error("ASISTENTE_VINCULOS_KEY debe decodificar a 32 bytes");
  }
  const raw = Buffer.from(blobB64, "base64");
  const nonce = raw.subarray(0, 12);
  const tag = raw.subarray(raw.length - 16);
  const ct = raw.subarray(12, raw.length - 16);
  const d = createDecipheriv("aes-256-gcm", llave, nonce);
  d.setAuthTag(tag);
  return Buffer.concat([d.update(ct), d.final()]).toString("utf8");
}

/**
 * Devuelve la API key `tc_live_…` del remitente, o null si no hay vínculo
 * activo. Lanza Error ante fallas de infraestructura (gateway caído, llave
 * mal configurada) — el caller la convierte en mensaje amable.
 */
export async function resolverApiKey(senderId, { gatewayUrl, internoToken, vinculosKey }) {
  const numero = normalizarNumero(senderId);
  if (!numero) return null;

  const hit = cache.get(numero);
  if (hit && hit.expira > Date.now()) return hit.apiKey;

  const resp = await fetch(
    `${gatewayUrl.replace(/\/+$/, "")}/internal/vinculos/${encodeURIComponent(numero)}`,
    {
      headers: { "X-Interno-Token": internoToken },
      signal: AbortSignal.timeout(15_000),
    },
  );
  if (resp.status === 404) {
    cache.set(numero, { expira: Date.now() + CACHE_NEG_TTL_MS, apiKey: null });
    return null;
  }
  if (!resp.ok) throw new Error(`vinculos HTTP ${resp.status}`);
  const { api_key_cifrada } = await resp.json();
  const apiKey = descifrarKey(api_key_cifrada, vinculosKey);
  cache.set(numero, { expira: Date.now() + CACHE_TTL_MS, apiKey });
  return apiKey;
}

/** Vacía el cache (para pruebas o tras re-vincular un número). */
export function limpiarCache() {
  cache.clear();
}
