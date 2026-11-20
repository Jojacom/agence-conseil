import type { APIRoute } from "astro";
import { getPublishedPosts } from "../utils/blog";
import { services } from "../utils/data";
import { site } from "../utils/site";

// Résumé du site pour les assistants IA (ChatGPT, Perplexity, Claude, Gemini…) : https://llmstxt.org
export const GET: APIRoute = async () => {
    const posts = await getPublishedPosts();
    const hours = site.hours
        .map((h) => `${h.days} : ${h.slots.map(([o, c]) => `${o.replace(":", " h ")}–${c.replace(":", " h ")}`).join(", ")}`)
        .join(" ; ");
    const lines = [
        `# ${site.name}`,
        "",
        `> ${site.legalName} est une agence de communication digitale basée à Dakar (Sénégal). Elle aide les entreprises sénégalaises à attirer plus de clients grâce au digital : gestion des réseaux sociaux, création de sites web, publicité en ligne, création de contenu, référencement (SEO), identité de marque et stratégie digitale.`,
        "",
        "## Coordonnées",
        "",
        `- Adresse : ${site.address}, ${site.city} ${site.postalCode}, Sénégal`,
        `- Téléphone (appels) : ${site.phoneDisplay}`,
        `- WhatsApp (messages) : ${site.whatsappDisplay}`,
        `- E-mail : ${site.email}`,
        `- Horaires : ${hours} ; ${site.closedDays} : fermé`,
        `- Site web : ${site.url}/`,
        "",
        "## Services",
        "",
        ...services.map((s) => `- [${s.title}](${site.url}/services/${s.slug}/) : ${s.description}`),
        "",
        "## Pages principales",
        "",
        `- [Accueil](${site.url}/) : présentation de l'agence, services, méthode et contact`,
        `- [Agence digitale à Dakar](${site.url}/agence-digitale-dakar/) : pourquoi choisir une agence basée à Dakar, questions fréquentes`,
        `- [Réalisations](${site.url}/realisations/) : exemples de projets (identité visuelle, supports imprimés, signalétique)`,
        `- [Blog](${site.url}/blog/) : conseils digitaux pour les entreprises du Sénégal`,
        "",
        "## Articles du blog",
        "",
        ...posts.map((p) => `- [${p.data.title}](${site.url}/blog/${p.id}/) : ${p.data.description}`),
        "",
    ];
    return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
