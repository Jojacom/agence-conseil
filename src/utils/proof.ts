// Preuves affichées sur la page d'accueil (section « Ils nous font confiance »).
//
// RÈGLE : n'ajoutez ici que des informations réelles et vérifiables, avec
// l'accord écrit des clients concernés (logo, nom, chiffres, citation, photo).
// Tant que toutes les listes sont vides, la section n'apparaît pas sur le site.
//
// Images : déposez-les dans public/preuves/ et indiquez le chemin, par exemple
// "/preuves/logo-client.webp" (format WebP ou SVG de préférence).

export interface ClientLogo {
    name: string;   // Nom du client, utilisé aussi comme texte alternatif
    logo: string;   // Chemin de l'image, ex. "/preuves/boutique-awa.svg"
    url?: string;   // Site du client (facultatif)
}

export interface CaseStudy {
    client: string;  // Ex. "Boutique Awa, prêt-à-porter à Dakar"
    result: string;  // Le chiffre clé, ex. "+40 % de commandes"
    period: string;  // Ex. "en 3 mois"
    summary: string; // Une ou deux phrases : le problème et ce que vous avez fait
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;    // Ex. "Gérante, Boutique Awa"
    photo?: string;  // Ex. "/preuves/awa.webp" (facultatif)
}

export interface TeamMember {
    name: string;
    role: string;
    photo: string;   // Ex. "/preuves/equipe-moussa.webp"
}

export const clients: ClientLogo[] = [];
export const cases: CaseStudy[] = [];
export const testimonials: Testimonial[] = [];
export const team: TeamMember[] = [];
