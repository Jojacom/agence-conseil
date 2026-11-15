import type { APIRoute } from "astro";
import { services } from "../utils/data";
import { site } from "../utils/site";

// Plan du site généré automatiquement : chaque nouvelle page de service y apparaît.
export const GET: APIRoute = () => {
    const paths = ["/", ...services.map((s) => `/services/${s.slug}/`)];
    const lastmod = new Date().toISOString().slice(0, 10);
    const urls = paths
        .map((p) => `  <url>\n    <loc>${site.url}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
        .join("\n");
    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
    return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
