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
| Sections de la page d'accueil | `src/components/sections/` |
| Titre, description et balises SEO | `src/layouts/Layout.astro` |
| Couleurs de la charte et styles globaux | `src/styles/global.css` |

Le formulaire de contact n'enregistre rien côté serveur : il prépare le message et l'ouvre dans WhatsApp ou dans la messagerie du visiteur.

## Commandes

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local sur `localhost:4321` |
| `npm run build` | Génère le site dans `./dist/` |
| `npm run preview` | Prévisualise le site généré |
| `npm run check` | Vérifie les types et les erreurs des fichiers Astro |
