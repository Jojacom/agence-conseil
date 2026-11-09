# Site JOJACOM

Site vitrine de **JOJACOM SARL**, agence de communication digitale à Dakar (Sénégal) : <https://jojacom.online>

## Outils
- [Astro](https://astro.build) 3
- [Tailwind CSS](https://tailwindcss.com) 3

## Modifier le contenu
| Quoi | Où |
| :-- | :-- |
| Téléphone, e-mail, adresse, WhatsApp, réseaux sociaux | `src/utils/site.ts` |
| Liste des services et étapes de la méthode | `src/utils/data.ts` |
| Sections de la page d'accueil | `src/components/sections/` |
| Titre, description et balises SEO | `src/layouts/Layout.astro` |

Le formulaire de contact n'enregistre rien côté serveur : il prépare le message et l'ouvre dans WhatsApp ou dans la messagerie du visiteur.

## Commandes

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur local sur `localhost:4321` |
| `npm run build` | Génère le site dans `./dist/` |
| `npm run preview` | Prévisualise le site généré |
