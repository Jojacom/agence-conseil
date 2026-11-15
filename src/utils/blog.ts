import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Articles publiés (hors brouillons), du plus récent au plus ancien. */
export async function getPublishedPosts(): Promise<Post[]> {
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date) =>
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Temps de lecture estimé (200 mots par minute). */
export const readingTime = (body: string | undefined) =>
    Math.max(1, Math.round((body ?? "").split(/\s+/).filter(Boolean).length / 200));
