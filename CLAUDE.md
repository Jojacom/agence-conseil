# Site JOJACOM — instructions pour Claude

Site vitrine de JOJACOM SARL, agence de communication digitale à Dakar : https://www.jojacom.online (hébergé sur Vercel).
Le `README.md` indique où modifier chaque contenu ; ce fichier donne les règles de travail.

## Langue
- Réponses, messages de commit, titres et descriptions de PR : **en français**.
- Contenu du site : français, public sénégalais (entreprises, PME, institutions), ton professionnel et chaleureux.

## Stack
Astro 7 · Tailwind CSS 4 (plugin Vite) · TypeScript · Node ≥ 22 (`.nvmrc`). Site 100 % statique, aucun serveur.

## Commandes
| Commande | Quand |
| --- | --- |
| `npm install` | installer les dépendances |
| `npm run dev` | serveur local sur `localhost:4321` |
| `npm run check` | vérification des types et des fichiers Astro |
| `npm run build` | génère `dist/` (doit passer avant de dire qu'une tâche est finie) |

**Avant de dire qu'une tâche est finie** : `npm run check && npm run build` doivent passer, et pour un changement
visuel, vérifier le rendu (ordinateur et mobile) avec une capture d'écran.

## Règles critiques
1. **Coordonnées** (téléphone, WhatsApp, e-mail, adresse, horaires, RCCM, NINEA) : uniquement dans `src/utils/site.ts`.
   Elles doivent rester **identiques à la fiche Google Business Profile**. Ne jamais les inventer ni les changer sans demande.
2. **Preuves sociales** (`src/utils/proof.ts`) : uniquement des clients, chiffres et témoignages **réels et autorisés**.
   Ne jamais inventer de client, de résultat ou de témoignage.
3. **URLs** : `trailingSlash: 'always'` — tous les liens internes se terminent par `/`. Ne jamais changer l'adresse
   d'une page publiée sans redirection (référencement).
4. **SEO** : chaque page a un titre et une description uniques (`src/layouts/Layout.astro`), un seul `h1`,
   des images avec `alt`. Garder à jour `sitemap.xml.ts` et `llms.txt.ts` si on ajoute des pages.
5. **`netlify.toml`** redirige les anciens sites Netlify vers www.jojacom.online : ne pas le supprimer.
6. **Charte JOJACOM** : couleurs et styles dans `src/styles/global.css`, police Raleway. Accessibilité WCAG 2.1 AA.
7. Formulaire de contact : rien n'est envoyé à un serveur (ouverture WhatsApp ou e-mail). Ne pas ajouter de
   collecte de données sans demande explicite.

## Où modifier quoi
| Quoi | Où |
| --- | --- |
| Services et étapes de la méthode | `src/utils/data.ts` (pages : `src/pages/services/[slug].astro`) |
| Articles de blog | `src/content/blog/*.md` (schéma : `src/content.config.ts`) |
| Réalisations | `src/utils/realisations.ts` + `public/realisations/` |
| Sections de l'accueil | `src/components/sections/` |
| Images de partage (Open Graph) | `src/pages/og/` + `src/utils/og.ts` |

## Méthode de travail
- **Une tâche = une branche = une PR.**
- Nouvelle page ou refonte d'une section : proposer d'abord un plan (mode plan) et attendre la validation.
- Nouvel article de blog : mot-clé principal ciblé Dakar / Sénégal, liens internes vers les services, revue avec
  l'agent `seo-specialist`.
- Avant de proposer une fusion : agent `code-reviewer` ; pour un changement visuel, `a11y-architect` ou
  `/impeccable audit`.

## Outils disponibles
- Skills de design : `impeccable`, `ui-ux-pro-max` (voir le README).
- Agents ECC (`.claude/agents/`) : `seo-specialist`, `a11y-architect`, `code-reviewer`.
- Skills ECC (`.claude/skills/`) : `seo`, `accessibility`.
- Connecteur **Vercel** : déploiements et erreurs de production du site.
