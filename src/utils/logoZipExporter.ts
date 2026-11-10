import { LogoVariant } from '../types/brand';
import { generateLogoSvgString } from '../components/brand/BrandLogo';

export interface PaletteColorSpec {
  id: string;
  name: string;
  hex: string;
}

export const BRAND_PALETTE_COLORS: PaletteColorSpec[] = [
  { id: 'marfil', name: 'Marfil', hex: '#F5F2E6' },
  { id: 'indigo', name: 'Indigo', hex: '#223189' },
  { id: 'oliva', name: 'Oliva', hex: '#676E56' },
  { id: 'cacao', name: 'Cacao', hex: '#231C16' },
  { id: 'cielo', name: 'Cielo', hex: '#7398C1' },
];

export const LOGO_VARIANTS_SPEC: { id: LogoVariant; folder: string; filePrefix: string; width: number; height: number }[] = [
  { id: 'full', folder: 'logo-completo', filePrefix: 'mantra-logo-completo', width: 1500, height: 700 },
  { id: 'isotipo', folder: 'isotipo', filePrefix: 'mantra-isotipo', width: 930, height: 1410 },
  { id: 'wordmark', folder: 'wordmark', filePrefix: 'mantra-wordmark', width: 1460, height: 380 },
];

// Precomputed CRC32 table for standard ZIP archive creation
const CRC_TABLE = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  CRC_TABLE[i] = c >>> 0;
}

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = CRC_TABLE[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

interface ZipEntry {
  path: string;
  data: Uint8Array;
}

function createZipBlob(entries: ZipEntry[]): Blob {
  const encoder = new TextEncoder();
  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;

  const now = new Date();
  const dosTime =
    ((now.getHours() & 0x1f) << 11) |
    ((now.getMinutes() & 0x3f) << 5) |
    ((now.getSeconds() >> 1) & 0x1f);
  const dosDate =
    (((now.getFullYear() - 1980) & 0x7f) << 9) |
    (((now.getMonth() + 1) & 0x0f) << 5) |
    (now.getDate() & 0x1f);

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.path);
    const data = entry.data;
    const crc = crc32(data);

    // Local file header (30 bytes + filename)
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 0x04034b50, true); // PK\x03\x04
    lv.setUint16(4, 20, true); // Version needed
    lv.setUint16(6, 0x0800, true); // UTF-8 filename flag
    lv.setUint16(8, 0, true); // STORE (uncompressed)
    lv.setUint16(10, dosTime, true);
    lv.setUint16(12, dosDate, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    localParts.push(localHeader, data);

    // Central directory header (46 bytes + filename)
    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(centralHeader.buffer);
    cv.setUint32(0, 0x02014b50, true); // PK\x01\x02
    cv.setUint16(4, 20, true); // Version made by
    cv.setUint16(6, 20, true); // Version needed
    cv.setUint16(8, 0x0800, true); // UTF-8 flag
    cv.setUint16(10, 0, true); // STORE
    cv.setUint16(12, dosTime, true);
    cv.setUint16(14, dosDate, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  }

  let centralSize = 0;
  for (const part of centralParts) {
    centralSize += part.length;
  }

  // End of central directory record (22 bytes)
  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true); // PK\x05\x06
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  return new Blob([...localParts, ...centralParts, eocd] as BlobPart[], {
    type: 'application/zip',
  });
}

function loadSvgImage(svgString: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}

function canvasToUint8Array(
  canvas: HTMLCanvasElement,
  mimeType: 'image/png' | 'image/jpeg',
  quality?: number
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          reject(new Error('No se pudo generar el blob de imagen'));
          return;
        }
        const buffer = await blob.arrayBuffer();
        resolve(new Uint8Array(buffer));
      },
      mimeType,
      quality
    );
  });
}

/**
 * Genera y descarga un archivo ZIP con todas las variantes del logo (completo, isotipo, wordmark)
 * en formatos SVG, PNG y JPG, tanto sin fondo como con fondo, en todos los colores de la paleta.
 */
export async function downloadCompleteLogoSetZip(
  onProgress?: (statusText: string) => void
): Promise<void> {
  const encoder = new TextEncoder();
  const entries: ZipEntry[] = [];
  const rootFolder = 'Mantra-Logos-Set-Completo';

  if (onProgress) {
    onProgress('Preparando vectores en todos los colores de la paleta...');
  }

  // 1. Pre-cargar las 15 imágenes base (3 variantes x 5 colores de paleta)
  const imageCache = new Map<string, HTMLImageElement>();
  const loadTasks: Promise<void>[] = [];

  for (const variantSpec of LOGO_VARIANTS_SPEC) {
    for (const logoColor of BRAND_PALETTE_COLORS) {
      const key = `${variantSpec.id}:${logoColor.id}`;
      const svgTransparent = generateLogoSvgString(variantSpec.id, logoColor.hex, false);
      loadTasks.push(
        loadSvgImage(svgTransparent).then((img) => {
          imageCache.set(key, img);
        })
      );
    }
  }

  await Promise.all(loadTasks);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Contexto 2D no disponible');
  }

  // 2. Generar versiones SIN FONDO para las 3 variantes en los 5 colores de la paleta (SVG, PNG, JPG)
  if (onProgress) {
    onProgress('Exportando logos sin fondo (SVG, PNG, JPG) en los 5 colores...');
  }

  for (const variantSpec of LOGO_VARIANTS_SPEC) {
    canvas.width = variantSpec.width;
    canvas.height = variantSpec.height;

    for (const logoColor of BRAND_PALETTE_COLORS) {
      const key = `${variantSpec.id}:${logoColor.id}`;
      const img = imageCache.get(key)!;
      const baseFilename = `${variantSpec.filePrefix}-${logoColor.id}-sin-fondo`;

      // 2a. SVG sin fondo
      const svgStr = generateLogoSvgString(variantSpec.id, logoColor.hex, false);
      entries.push({
        path: `${rootFolder}/sin-fondo/svg/${variantSpec.folder}/${baseFilename}.svg`,
        data: encoder.encode(svgStr),
      });

      // 2b. PNG sin fondo (100% transparente)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const pngBytes = await canvasToUint8Array(canvas, 'image/png');
      entries.push({
        path: `${rootFolder}/sin-fondo/png/${variantSpec.folder}/${baseFilename}.png`,
        data: pngBytes,
      });

      // 2c. JPG en carpeta sin-fondo (JPG no soporta canal alfa; usa lienzo neutro de contraste)
      const neutralJpgBg = logoColor.id === 'marfil' ? '#231C16' : '#FFFFFF';
      ctx.fillStyle = neutralJpgBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const jpgBytes = await canvasToUint8Array(canvas, 'image/jpeg', 0.94);
      entries.push({
        path: `${rootFolder}/sin-fondo/jpg/${variantSpec.folder}/${baseFilename}.jpg`,
        data: jpgBytes,
      });
    }
  }

  // 3. Generar versiones CON FONDO combinando todos los colores de la paleta (SVG, PNG, JPG)
  for (let i = 0; i < LOGO_VARIANTS_SPEC.length; i++) {
    const variantSpec = LOGO_VARIANTS_SPEC[i];
    canvas.width = variantSpec.width;
    canvas.height = variantSpec.height;

    if (onProgress) {
      onProgress(
        `Exportando ${variantSpec.folder} con fondo en toda la paleta (${i + 1}/${LOGO_VARIANTS_SPEC.length})...`
      );
    }

    for (const bgColor of BRAND_PALETTE_COLORS) {
      for (const logoColor of BRAND_PALETTE_COLORS) {
        // Evitar mismo color de tinta sobre el mismo color de fondo
        if (bgColor.id === logoColor.id) continue;

        const key = `${variantSpec.id}:${logoColor.id}`;
        const img = imageCache.get(key)!;
        const baseFilename = `${variantSpec.filePrefix}-${logoColor.id}-sobre-fondo-${bgColor.id}`;

        // 3a. SVG con fondo
        const svgWithBg = generateLogoSvgString(
          variantSpec.id,
          logoColor.hex,
          true,
          bgColor.hex
        );
        entries.push({
          path: `${rootFolder}/con-fondo/svg/${variantSpec.folder}/fondo-${bgColor.id}/${baseFilename}.svg`,
          data: encoder.encode(svgWithBg),
        });

        // Dibujar fondo de paleta + logo en el canvas para PNG y JPG
        ctx.fillStyle = bgColor.hex;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 3b. PNG con fondo
        const pngWithBg = await canvasToUint8Array(canvas, 'image/png');
        entries.push({
          path: `${rootFolder}/con-fondo/png/${variantSpec.folder}/fondo-${bgColor.id}/${baseFilename}.png`,
          data: pngWithBg,
        });

        // 3c. JPG con fondo
        const jpgWithBg = await canvasToUint8Array(canvas, 'image/jpeg', 0.94);
        entries.push({
          path: `${rootFolder}/con-fondo/jpg/${variantSpec.folder}/fondo-${bgColor.id}/${baseFilename}.jpg`,
          data: jpgWithBg,
        });
      }
    }
  }

  // 4. Incluir el archivo vectorial maestro si está disponible
  try {
    const res = await fetch('/assets/aistudio/Mantra_logo_ee29c0a0.svg');
    if (res.ok) {
      const masterBuf = await res.arrayBuffer();
      entries.push({
        path: `${rootFolder}/Mantra_logo_master_oficial.svg`,
        data: new Uint8Array(masterBuf),
      });
    }
  } catch {
    // Continuar si falla la carga opcional del master
  }

  if (onProgress) {
    onProgress('Empaquetando archivo ZIP...');
  }

  const zipBlob = createZipBlob(entries);
  const zipUrl = URL.createObjectURL(zipBlob);
  const link = document.createElement('a');
  link.href = zipUrl;
  link.download = 'Mantra-Logos-Set-Completo.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(zipUrl), 5000);
}

