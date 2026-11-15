import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Articles du blog : un fichier Markdown par article dans src/content/blog/.
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),                  // titre de l'article (H1)
        seoTitle: z.string().max(52),       // balise <title> (+ « | JOJACOM » ≈ 60 caractères)
        description: z.string().max(170),   // description Google
        date: z.coerce.date(),              // date de publication
        updated: z.coerce.date().optional(),
        category: z.string(),
        relatedService: z.string().optional(), // slug d'un service (lien en fin d'article)
        draft: z.boolean().default(false),  // true = non publié
        order: z.number().optional(),       // départage les articles du même jour (1 = en premier)
    }),
});

export const collections = { blog };
