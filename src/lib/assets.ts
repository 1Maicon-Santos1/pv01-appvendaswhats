import fs from "node:fs";
import path from "node:path";

/**
 * ============================================================================
 * DETECCAO DE ASSETS REAIS
 * ============================================================================
 * A pagina nunca inventa print, depoimento ou screenshot de produto.
 * Estas funcoes leem a pasta /public no servidor (build time) e dizem ao
 * componente se o arquivo real existe.
 *
 *   - existe   -> renderiza a imagem de verdade
 *   - nao existe -> a secao se adapta (e, em desenvolvimento, mostra as
 *                   instrucoes de onde colocar o arquivo)
 *
 * Basta soltar os arquivos nas pastas abaixo e rodar o build de novo.
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

function listImages(folder: string): string[] {
  const dir = path.join(PUBLIC_DIR, folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXT.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
  } catch {
    return [];
  }
}

/** Retorna o caminho publico do primeiro arquivo que casar com o slug. */
function findBySlug(folder: string, slug: string): string | null {
  const match = listImages(folder).find(
    (file) => path.parse(file).name.toLowerCase() === slug.toLowerCase(),
  );
  return match ? `/${folder}/${match}` : null;
}

export type ProductShot = {
  /** Nome do arquivo esperado, sem extensao. */
  slug: string;
  /** Titulo comercial do print na pagina. */
  title: string;
  /** Legenda curta explicando o que a tela mostra. */
  caption: string;
  /** Formato da moldura em que o print e exibido. */
  frame: "phone" | "window";
  /** Caminho real, quando o arquivo existe em /public/product. */
  src: string | null;
};

/**
 * Manifesto dos prints do aplicativo.
 * Coloque os arquivos em  /public/product/<slug>.png  (ou .jpg / .webp).
 */
const PRODUCT_MANIFEST: Omit<ProductShot, "src">[] = [
  {
    slug: "metodo-30-dias",
    title: "Método de 30 dias",
    caption: "Os trinta dias na ordem, com o de hoje em destaque.",
    frame: "phone",
  },
  {
    slug: "aula",
    title: "Aula do dia",
    caption: "Situação real, explicação curta e o que fazer com ela.",
    frame: "phone",
  },
  {
    slug: "progresso",
    title: "Progresso e conquistas",
    caption: "Sequência de estudos, metas e o que já foi concluído.",
    frame: "window",
  },
  {
    slug: "biblioteca",
    title: "Biblioteca de lições",
    caption: "Todo o conteúdo organizado por tema de atendimento.",
    frame: "window",
  },
  {
    slug: "podcasts",
    title: "Áudios e podcasts",
    caption: "Para ouvir no trajeto, sem precisar parar para estudar.",
    frame: "phone",
  },
  {
    slug: "quiz",
    title: "Quiz de fixação",
    caption: "Checagem rápida do que ficou de cada bloco.",
    frame: "phone",
  },
];

export function getProductShots(): ProductShot[] {
  return PRODUCT_MANIFEST.map((item) => ({
    ...item,
    src: findBySlug("product", item.slug),
  }));
}

/** Prints de conversa/resultado enviados pelo produtor: /public/proof/*.png */
export function getProofShots(): string[] {
  return listImages("proof").map((file) => `/proof/${file}`);
}

/** Fotos de depoimento: /public/testimonials/<id>.jpg */
export function getTestimonialPhoto(id: string): string | null {
  return findBySlug("testimonials", id);
}

/** Logotipo da marca: /public/brand/logo.svg (ou .png) */
export function getBrandLogo(): string | null {
  const svg = path.join(PUBLIC_DIR, "brand", "logo.svg");
  if (fs.existsSync(svg)) return "/brand/logo.svg";
  return findBySlug("brand", "logo");
}

export const IS_DEV = process.env.NODE_ENV !== "production";
