// Entrega de archivos: baja el binario del gateway y lo deja en el directorio
// de medios de OpenClaw. El agente lo envía por WhatsApp como documento con
// `message(action=send, media=<ruta>)` — mismo patrón que abacus-cfdi-tools.
// (Los links del gateway expiran y un link pelado es mala UX; el documento no.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function nombreSeguro(nombre) {
  return String(nombre)
    .replace(/[^A-Za-z0-9._-]/g, "_")
    .slice(0, 120);
}

/**
 * Guarda la respuesta binaria (fetch Response) y devuelve la ruta absoluta.
 * Usa el filename del Content-Disposition si viene; si no, `nombre`.
 */
export async function guardarBinario(resp, { mediaDir, nombre }) {
  const buf = Buffer.from(await resp.arrayBuffer());
  const disp = resp.headers.get("content-disposition") || "";
  const m = disp.match(/filename="?([^";]+)"?/i);
  const archivo = `${Date.now()}_${nombreSeguro(m?.[1] || nombre)}`;
  mkdirSync(mediaDir, { recursive: true });
  const ruta = join(mediaDir, archivo);
  writeFileSync(ruta, buf);
  return ruta;
}
