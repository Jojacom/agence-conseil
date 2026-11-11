# Site JOJACOM

Site vitrine de **JOJACOM SARL**, agence de communication digitale à Dakar (Sénégal) : <https://jojacom.online>

## Outils
- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4 (plugin Vite `@tailwindcss/vite`)
- Node.js 22.23.4 ou plus récent

## Modifier le contenu
| Quoi | Où |
| :-- | :-- |
| Téléphone, e-mail, adresse, WhatsApp, réseaux sociaux | `src/utils/site.ts` |
| Liste des services et étapes de la méthode | `src/utils/data.ts` |
| Clients, résultats, témoignages, équipe (section « Ils nous font confiance ») | `src/utils/proof.ts` + images dans `public/preuves/` |
| Sections de la page d'accueil | `src/components/sections/` |
| Titre, description et balises SEO | `src/layouts/Layout.astro` |
| Couleurs de la charte et styles globaux | `src/styles/global.css` |

La section « Ils nous font confiance » et les photos de l'équipe ne s'affichent que lorsque `src/utils/proof.ts` contient des données réelles (avec l'accord des clients). Tant que ses listes sont vides, la page affiche Mission et Vision à la place.

Le formulaire de contact n'enregistre rien côté serveur : il prépare le message et l'ouvre dans WhatsApp ou dans la messagerie du visiteur.

## Commandes

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local sur `localhost:4321` |
| `npm run build` | Génère le site dans `./dist/` |
| `npm run preview` | Prévisualise le site généré |
| `npm run check` | Vérifie les types et les erreurs des fichiers Astro |

## Skills Claude Code
Le dossier `.claude/skills/` contient deux skills de design utilisées par Claude Code dans ce projet :

| Skill | Source | Licence | Usage |
| :-- | :-- | :-- | :-- |
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) v4.8.2 (commit `c1e0e54`) | Apache 2.0 | `/impeccable critique`, `audit`, `polish`, `clarify`… |
| `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) v2.15.0 (commit `6ae86f6`) | MIT | Référentiel de styles, palettes, polices et règles UX |

- Les hooks d'Impeccable (commandes lancées automatiquement après chaque modification) **ne sont pas installés**.
- Au premier lancement, Impeccable télécharge son moteur depuis les releases GitHub du projet, vérifié par empreinte SHA-256, dans `~/.impeccable` (hors du dépôt).
- Ces fichiers ne sont pas utilisés par le site publié.
