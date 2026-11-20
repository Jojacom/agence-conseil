import { getPublishedPosts } from "./blog";
import { services } from "./data";

export interface OgPage {
    /** Chemin de la page sans barres obliques ("" pour l'accueil) */
    path: string;
    kicker: string;
    title: string;
}

/** Clé de l'image de partage pour un chemin de page : "/" -> "accueil", "/services/x/" -> "services/x" */
export const ogKey = (pathname: string) => pathname.replace(/^\/+|\/+$/g, "") || "accueil";

/** Toutes les pages du site qui ont une image de partage. */
export async function getOgPages(): Promise<OgPage[]> {
    const posts = await getPublishedPosts();
    return [
        { path: "", kicker: "Agence de communication digitale", title: "Plus de clients grâce au digital, à Dakar et partout au Sénégal" },
        { path: "agence-digitale-dakar", kicker: "Agence digitale à Dakar", title: "Votre agence digitale à Dakar" },
        { path: "realisations", kicker: "Portfolio", title: "Nos réalisations" },
        { path: "blog", kicker: "Blog", title: "Conseils digitaux pour les entreprises du Sénégal" },
        ...services.map((s) => ({ path: `services/${s.slug}`, kicker: s.title, title: s.h1 })),
        ...posts.map((p) => ({ path: `blog/${p.id}`, kicker: p.data.category, title: p.data.title })),
    ];
}
