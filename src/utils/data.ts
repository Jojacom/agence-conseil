// Icônes : Heroicons (outline, MIT). Seul le tracé `d` est stocké ici.
export interface Faq {
    q: string;
    a: string;
}

export interface Service {
    slug: string;            // adresse de la page : /services/<slug>
    title: string;           // nom court (menus, liste)
    description: string;     // résumé (page d'accueil)
    icon: string;
    h1: string;              // titre de la page de service
    seoTitle: string;        // balise <title> (≈ 60 caractères)
    metaDescription: string; // description Google (≈ 155 caractères)
    intro: string[];
    includes: string[];
    faq: Faq[];
}

export const services: Service[] = [
    {
        slug: "gestion-reseaux-sociaux",
        title: "Gestion des réseaux sociaux",
        description: "Facebook, Instagram, TikTok, LinkedIn : calendrier éditorial, publications régulières et animation de votre communauté.",
        icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
        h1: "Community management à Dakar : nous gérons vos réseaux sociaux",
        seoTitle: "Community manager à Dakar – Réseaux sociaux | JOJACOM",
        metaDescription: "JOJACOM gère vos réseaux sociaux à Dakar : Facebook, Instagram, TikTok et LinkedIn. Calendrier éditorial, publications, animation de communauté et rapports.",
        intro: [
            "Être présent sur les réseaux sociaux ne suffit pas : il faut publier régulièrement, répondre vite et parler le langage de votre clientèle. C'est un travail quotidien que peu d'entreprises ont le temps de faire elles-mêmes.",
            "JOJACOM prend en charge vos comptes Facebook, Instagram, TikTok et LinkedIn pour que votre marque reste visible, cohérente et proche de ses clients au Sénégal.",
        ],
        includes: [
            "Audit de vos comptes et de ceux de vos concurrents",
            "Ligne éditoriale et calendrier de publication",
            "Création et publication des contenus (visuels, vidéos courtes, textes)",
            "Animation de la communauté : réponses aux commentaires et aux messages",
            "Rapport régulier : abonnés, portée, engagement et demandes reçues",
        ],
        faq: [
            { q: "Sur quels réseaux sociaux intervenez-vous ?", a: "Principalement Facebook, Instagram, TikTok et LinkedIn. Nous choisissons avec vous les réseaux où se trouve réellement votre clientèle, plutôt que d'être partout." },
            { q: "Est-ce que je garde le contrôle de mes comptes ?", a: "Oui. Vos comptes restent les vôtres : nous y accédons avec un rôle d'administrateur ou d'éditeur, et vous validez la ligne éditoriale." },
            { q: "Combien coûte la gestion des réseaux sociaux ?", a: "Le prix dépend du nombre de réseaux, du rythme de publication et du type de contenus. Après un premier échange, nous vous proposons une offre adaptée à votre budget." },
            { q: "Faut-il être présent sur tous les réseaux sociaux ?", a: "Non. Il vaut mieux être actif et régulier sur deux réseaux où se trouve votre clientèle que peu présent partout. Nous vous aidons à choisir les bons." },
            { q: "Répondez-vous aux commentaires et aux messages ?", a: "Oui, l'animation de la communauté fait partie du service : nous répondons aux commentaires et aux messages, et nous vous transmettons les demandes de clients." },
        ],
    },
    {
        slug: "creation-site-web",
        title: "Création de sites web",
        description: "Sites vitrines rapides, adaptés au mobile et bien référencés, pour présenter votre activité et recevoir des demandes.",
        icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
        h1: "Création de site web à Dakar : un site rapide qui vous apporte des clients",
        seoTitle: "Création de site web à Dakar – Site vitrine | JOJACOM",
        metaDescription: "Création de site internet à Dakar : site vitrine rapide, adapté au mobile, optimisé pour Google et relié à WhatsApp. JOJACOM, agence digitale au Sénégal.",
        intro: [
            "Votre site est souvent le premier contact entre un client et votre entreprise. Il doit se charger vite, même en 3G, s'afficher parfaitement sur téléphone et donner envie de vous contacter.",
            "JOJACOM conçoit des sites vitrines sur mesure pour les entreprises sénégalaises : clairs, rapides, optimisés pour Google et reliés à WhatsApp pour transformer les visites en demandes.",
        ],
        includes: [
            "Conception sur mesure à vos couleurs",
            "Site adapté au mobile et rapide à charger",
            "Optimisation pour Google dès la mise en ligne",
            "Boutons WhatsApp, appel et formulaire de contact",
            "Mise en ligne, nom de domaine et accompagnement après livraison",
        ],
        faq: [
            { q: "Combien de temps faut-il pour créer un site ?", a: "Cela dépend du nombre de pages et de la disponibilité des contenus (textes, photos, logo). Nous fixons un calendrier précis avec vous dès le départ." },
            { q: "Mon site sera-t-il visible sur Google ?", a: "Oui, chaque site est construit pour être bien compris par Google : structure, titres, vitesse et fiche entreprise. Le référencement se renforce ensuite avec le temps et le contenu." },
            { q: "Combien coûte un site web ?", a: "Le prix dépend du nombre de pages et des fonctionnalités souhaitées. Après un premier échange sur votre projet, nous vous proposons une offre adaptée." },
            { q: "Mon site sera-t-il adapté aux téléphones ?", a: "Oui. Au Sénégal, la plupart des visiteurs naviguent sur mobile : chaque site est conçu d'abord pour le téléphone, puis adapté aux ordinateurs." },
            { q: "Mon site peut-il être relié à WhatsApp ?", a: "Oui. Nous ajoutons des boutons pour écrire sur WhatsApp ou vous appeler en un clic, ainsi qu'un formulaire de contact." },
            { q: "Que se passe-t-il après la mise en ligne ?", a: "Nous vous accompagnons après la livraison : prise en main, modifications et conseils pour faire vivre votre site." },
        ],
    },
    {
        slug: "publicite-en-ligne",
        title: "Publicité en ligne",
        description: "Campagnes Facebook, Instagram et Google Ads ciblées sur votre clientèle, avec un budget maîtrisé et suivi.",
        icon: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46",
        h1: "Publicité Facebook, Instagram et Google à Dakar",
        seoTitle: "Publicité Facebook, Instagram et Google Ads à Dakar | JOJACOM",
        metaDescription: "Campagnes publicitaires sur Facebook, Instagram et Google Ads au Sénégal : ciblage précis, budget maîtrisé et suivi des résultats. JOJACOM, agence à Dakar.",
        intro: [
            "La publicité en ligne permet de toucher exactement les personnes susceptibles d'acheter chez vous : par quartier, par ville, par âge ou par centre d'intérêt. Encore faut-il bien la régler pour ne pas gaspiller son budget.",
            "JOJACOM conçoit, lance et suit vos campagnes sur Facebook, Instagram et Google Ads, avec un objectif clair : des messages WhatsApp, des appels, des visites en boutique ou des ventes.",
        ],
        includes: [
            "Définition de l'objectif et du public cible",
            "Création des annonces (visuels, vidéos, textes)",
            "Paramétrage et lancement des campagnes",
            "Optimisation continue du budget",
            "Rapport des résultats : coût par contact, portée, conversions",
        ],
        faq: [
            { q: "Quel budget prévoir pour la publicité en ligne ?", a: "Il n'y a pas de minimum universel : le budget dépend de votre objectif et de votre zone. Nous vous conseillons un montant de départ réaliste, puis nous l'ajustons selon les résultats." },
            { q: "Peut-on cibler uniquement Dakar ?", a: "Oui. Les campagnes peuvent viser une ville, un quartier ou un rayon autour de votre boutique." },
            { q: "Comment mesure-t-on les résultats ?", a: "Nous suivons les indicateurs liés à votre objectif : messages WhatsApp, appels, visites du site ou ventes, et nous vous les présentons dans un rapport régulier." },
            { q: "Faut-il un site web pour faire de la publicité en ligne ?", a: "Pas forcément. Une campagne peut renvoyer vers WhatsApp, vers un appel ou vers votre page Facebook ou Instagram. Un site reste un atout pour rassurer et convaincre." },
            { q: "Qui crée les annonces ?", a: "Nous nous occupons de tout : visuels, vidéos et textes des annonces, en accord avec vous avant la diffusion." },
        ],
    },
    {
        slug: "creation-de-contenu",
        title: "Création de contenu",
        description: "Visuels, vidéos courtes et textes qui donnent envie : un contenu à l'image de votre marque et de votre public.",
        icon: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
        h1: "Création de contenu à Dakar : visuels, vidéos et textes",
        seoTitle: "Création de contenu à Dakar – Visuels et vidéos | JOJACOM",
        metaDescription: "Visuels, vidéos courtes (Reels, TikTok) et textes pour vos réseaux sociaux et votre site. Des contenus à l'image de votre marque, créés à Dakar par JOJACOM.",
        intro: [
            "Sur les réseaux sociaux, ce sont les contenus qui arrêtent le défilement. Un bon visuel ou une vidéo courte bien pensée peut faire découvrir votre entreprise à des milliers de personnes.",
            "JOJACOM crée des contenus qui ressemblent à votre marque et parlent à votre public : visuels, vidéos courtes pour Reels et TikTok, et textes qui donnent envie d'agir.",
        ],
        includes: [
            "Visuels pour les réseaux sociaux et la publicité",
            "Vidéos courtes (Reels, TikTok, Stories)",
            "Rédaction des textes et des légendes",
            "Contenus pour votre site web",
            "Déclinaison aux formats de chaque plateforme",
        ],
        faq: [
            { q: "Faut-il fournir les photos de mes produits ?", a: "Vos propres photos sont un plus, mais pas une obligation : nous pouvons organiser la création des visuels avec vous." },
            { q: "Les contenus sont-ils adaptés à chaque réseau ?", a: "Oui. Chaque contenu est décliné au bon format et au bon ton pour Facebook, Instagram, TikTok ou LinkedIn." },
            { q: "Créez-vous des vidéos pour TikTok et les Reels ?", a: "Oui. Les vidéos courtes pour TikTok, les Reels et les Stories font partie de nos créations, au format vertical adapté à chaque plateforme." },
            { q: "Pouvez-vous rédiger les textes de mon site ?", a: "Oui. Nous rédigeons les textes de vos pages et de vos publications, dans un ton qui correspond à votre marque et à vos clients." },
        ],
    },
    {
        slug: "referencement-seo",
        title: "Référencement (SEO)",
        description: "Un site mieux classé sur Google pour être trouvé par les clients qui cherchent déjà vos produits ou services.",
        icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
        h1: "Référencement SEO à Dakar : être trouvé sur Google",
        seoTitle: "Référencement SEO à Dakar – Être visible sur Google | JOJACOM",
        metaDescription: "Améliorez votre visibilité sur Google au Sénégal : audit, optimisation technique, contenus et référencement local (Google Maps). JOJACOM, agence SEO à Dakar.",
        intro: [
            "Chaque jour, des clients cherchent sur Google exactement ce que vous proposez. S'ils ne vous trouvent pas, ils trouvent un concurrent.",
            "JOJACOM améliore la place de votre site et de votre fiche Google Maps dans les résultats de recherche, pour attirer des clients qui sont déjà prêts à acheter.",
        ],
        includes: [
            "Audit technique et analyse des mots-clés de votre secteur",
            "Optimisation des pages, des titres et de la vitesse",
            "Référencement local : fiche Google Business et Google Maps",
            "Rédaction de contenus utiles à vos clients",
            "Suivi des positions et rapport régulier",
        ],
        faq: [
            { q: "En combien de temps voit-on des résultats ?", a: "Le référencement est un travail de fond : les premiers effets apparaissent généralement après quelques semaines, et se renforcent sur plusieurs mois." },
            { q: "Pouvez-vous garantir la première place sur Google ?", a: "Non, et personne ne le peut honnêtement : Google décide seul de ses classements. Nous mettons en place les bonnes pratiques et suivons vos positions de près." },
            { q: "Qu'est-ce que le référencement local ?", a: "C'est le fait d'apparaître sur Google Maps et dans les résultats « près de moi ». Pour une entreprise de Dakar, c'est souvent le levier le plus rentable." },
            { q: "Qu'est-ce qu'une fiche Google Business ?", a: "C'est la fiche gratuite qui présente votre entreprise sur Google et Google Maps : adresse, horaires, téléphone, photos et avis. Bien remplie, elle vous rend visible auprès des clients proches." },
            { q: "Faut-il publier des articles pour être bien référencé ?", a: "C'est fortement recommandé. Des contenus utiles qui répondent aux questions de vos clients aident Google à comprendre votre activité et attirent de nouvelles visites." },
        ],
    },
    {
        slug: "identite-de-marque",
        title: "Identité de marque",
        description: "Logo, charte graphique et supports : une image cohérente et professionnelle sur tous vos canaux.",
        icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
        h1: "Logo et identité visuelle à Dakar",
        seoTitle: "Création de logo et identité visuelle à Dakar | JOJACOM",
        metaDescription: "Logo, charte graphique et supports de communication : une identité visuelle cohérente et professionnelle pour votre entreprise au Sénégal. JOJACOM, Dakar.",
        intro: [
            "Une marque reconnaissable inspire confiance. Un logo soigné, des couleurs et des polices cohérentes rendent votre entreprise plus professionnelle sur chaque support.",
            "JOJACOM crée ou modernise votre identité visuelle et l'applique à tous vos canaux : réseaux sociaux, site web, cartes de visite et supports imprimés.",
        ],
        includes: [
            "Création ou modernisation du logo",
            "Charte graphique : couleurs, polices, règles d'usage",
            "Supports : cartes de visite, flyers, signatures e-mail",
            "Modèles pour les réseaux sociaux",
            "Fichiers livrés dans tous les formats utiles",
        ],
        faq: [
            { q: "Pouvez-vous moderniser un logo existant ?", a: "Oui. Nous pouvons faire évoluer votre logo actuel en gardant ce qui fait sa reconnaissance, ou en créer un nouveau." },
            { q: "Dans quels formats recevrai-je mon logo ?", a: "Dans les formats adaptés à l'impression et au web, en couleur et en version simplifiée." },
            { q: "Que contient une charte graphique ?", a: "Vos couleurs, vos polices, les différentes versions de votre logo et les règles pour les utiliser correctement sur tous vos supports." },
            { q: "Mon identité sera-t-elle déclinée pour les réseaux sociaux ?", a: "Oui. Nous préparons des modèles pour vos publications afin que votre marque reste reconnaissable sur chaque réseau." },
        ],
    },
    {
        slug: "strategie-digitale",
        title: "Stratégie et analyse",
        description: "Étude de votre marché, choix des bons canaux et rapports clairs pour mesurer ce que rapporte chaque action.",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
        h1: "Stratégie digitale et analyse pour les entreprises sénégalaises",
        seoTitle: "Stratégie digitale à Dakar – Conseil et analyse | JOJACOM",
        metaDescription: "Étude de marché, choix des canaux, plan d'action et suivi des résultats : une stratégie digitale claire pour développer votre entreprise au Sénégal.",
        intro: [
            "Avant d'investir dans la publicité ou les réseaux sociaux, il faut savoir où sont vos clients, quel message leur parle et comment mesurer ce que chaque action vous rapporte.",
            "JOJACOM vous aide à construire une stratégie digitale claire et réaliste, adaptée à votre budget et au marché sénégalais, puis à suivre ses résultats.",
        ],
        includes: [
            "Analyse de votre marché, de vos clients et de vos concurrents",
            "Choix des canaux prioritaires",
            "Plan d'action et calendrier",
            "Mise en place des outils de mesure",
            "Rapports clairs et recommandations",
        ],
        faq: [
            { q: "Pour quelles entreprises ?", a: "Pour toute entreprise qui veut développer sa présence en ligne : commerces, PME, prestataires de services, institutions." },
            { q: "Faut-il déjà être présent en ligne ?", a: "Non. Nous pouvons partir de zéro et construire votre présence étape par étape." },
            { q: "Combien coûte une stratégie digitale ?", a: "Le prix dépend de la taille de votre entreprise et de l'étendue de l'analyse. Après un premier échange, nous vous proposons une offre adaptée à votre budget." },
            { q: "Comment mesurez-vous les résultats ?", a: "Nous mettons en place des outils de mesure dès le départ, puis nous suivons les indicateurs liés à vos objectifs : demandes reçues, appels, messages, ventes. Vous recevez des rapports clairs." },
        ],
    },
];

export const steps = [
    {
        title: "Écoute et diagnostic",
        description: "Nous analysons votre activité, vos clients, vos concurrents et votre présence en ligne actuelle.",
    },
    {
        title: "Stratégie sur mesure",
        description: "Nous définissons les objectifs, les canaux prioritaires, le budget et le calendrier adaptés à votre entreprise.",
    },
    {
        title: "Création et diffusion",
        description: "Notre équipe produit les contenus, publie, anime vos réseaux et lance les campagnes publicitaires.",
    },
    {
        title: "Suivi et ajustements",
        description: "Vous recevez des rapports réguliers et nous ajustons les actions pour améliorer vos résultats.",
    },
];
