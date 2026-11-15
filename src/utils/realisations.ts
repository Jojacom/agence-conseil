// Réalisations de JOJACOM affichées sur le site.
// RÈGLE : ne publier qu'avec l'accord du client, sans coordonnées personnelles
// (noms, téléphones, e-mails de particuliers) ni marques de tiers non autorisées.
// Images : public/realisations/, format WebP, 1400 px maximum.

export type RealisationCategory = "Identité visuelle" | "Supports imprimés" | "Signalétique";

export interface Realisation {
    client: string;
    title: string;              // ce qui a été réalisé
    category: RealisationCategory;
    image: string;              // chemin dans public/
    width: number;
    height: number;
    alt: string;                // description pour Google et les lecteurs d'écran
}

export const realisations: Realisation[] = [
    {
        client: "African West Technology",
        title: "Flyer « Bornes interactives »",
        category: "Supports imprimés",
        image: "/realisations/flyer-bornes-interactives-african-west-technology.webp",
        width: 999, height: 1400,
        alt: "Flyer A4 d'African West Technology présentant une borne interactive tactile, avec les avantages du produit et un appel à demander une démonstration",
    },
    {
        client: "LONASE",
        title: "Cartes de visite de la direction (dorure)",
        category: "Supports imprimés",
        image: "/realisations/cartes-de-visite-lonase-dorure.webp",
        width: 918, height: 1152,
        alt: "Cartes de visite de la Loterie Nationale Sénégalaise : recto vert avec logo en dorure, verso crème pour le Directeur général, coordonnées masquées",
    },
    {
        client: "Legui",
        title: "Création de logo",
        category: "Identité visuelle",
        image: "/realisations/logo-legui.webp",
        width: 933, height: 1400,
        alt: "Logo Legui : une lettre G verte formant une horloge, avec des traits jaunes évoquant la vitesse",
    },
    {
        client: "Katour 224",
        title: "Panneau publicitaire de restaurant",
        category: "Signalétique",
        image: "/realisations/panneau-restaurant-katour-224.webp",
        width: 1100, height: 1100,
        alt: "Panneau vertical bordeaux et or du restaurant Katour 224 dans une rue de Dakar, présentant plats africains, fast-food et numéros de livraison",
    },
    {
        client: "Labyrinthe",
        title: "Logo d'imprimerie numérique",
        category: "Identité visuelle",
        image: "/realisations/logo-labyrinthe-imprimerie-numerique.webp",
        width: 1264, height: 843,
        alt: "Logo Labyrinthe Imprimerie Numérique : un labyrinthe circulaire noir avec un point vert au centre",
    },
    {
        client: "African West Technology",
        title: "Kakémono « Fluidifiez votre accueil »",
        category: "Supports imprimés",
        image: "/realisations/kakemono-african-west-technology.webp",
        width: 595, height: 1400,
        alt: "Kakémono d'African West Technology présentant une borne d'accueil sans contact avec impression de tickets",
    },
    {
        client: "Saint-Louisienne Traiteur",
        title: "Création de logo",
        category: "Identité visuelle",
        image: "/realisations/logo-saint-louisienne-traiteur.webp",
        width: 1170, height: 557,
        alt: "Logo Saint-Louisienne Traiteur : le pont Faidherbe stylisé en bleu, avec une cuillère et une fourchette croisées",
    },
    {
        client: "AFEE-BI Consulting",
        title: "Affiche de formation",
        category: "Supports imprimés",
        image: "/realisations/affiche-formation-afee-bi-consulting.webp",
        width: 786, height: 1400,
        alt: "Affiche d'AFEE-BI Consulting pour un certificat en contrôle de gestion pratique, avec une formatrice souriante devant un ordinateur",
    },
    {
        client: "Floss Fo Academy",
        title: "Logo et badge",
        category: "Identité visuelle",
        image: "/realisations/logo-floss-fo-academy.webp",
        width: 1400, height: 762,
        alt: "Logo Floss Fo Academy bleu marine et or, avec un radeau à voile, décliné sur une carte et un badge",
    },
    {
        client: "African West Technology",
        title: "Enseigne en relief",
        category: "Signalétique",
        image: "/realisations/enseigne-logo-african-west-technology.webp",
        width: 788, height: 1400,
        alt: "Enseigne découpée African West Technology : une spirale orange autour du continent africain et le mot Technology sur fond rouge",
    },
    {
        client: "LONASE",
        title: "Cartes de visite recto verso",
        category: "Supports imprimés",
        image: "/realisations/cartes-de-visite-lonase-option-1.webp",
        width: 515, height: 575,
        alt: "Carte de visite recto verso de la LONASE pour le Directeur du marketing et de la communication, vert et or, coordonnées et QR code masqués",
    },
    {
        client: "La Scène Verte",
        title: "Création de logo",
        category: "Identité visuelle",
        image: "/realisations/logo-la-scene-verte.webp",
        width: 291, height: 291,
        alt: "Logo La Scène Verte : un cercle de vagues et de notes de musique vert clair sur fond vert",
    },
];
