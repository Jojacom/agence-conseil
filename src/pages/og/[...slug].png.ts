import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getOgPages, ogKey, type OgPage } from "../../utils/og";

// Images de partage (Facebook, WhatsApp, LinkedIn…) générées à la construction du site
const fontDir = path.join(process.cwd(), "node_modules/@fontsource/raleway/files");
const fonts = [
    { name: "Raleway", data: fs.readFileSync(path.join(fontDir, "raleway-latin-400-normal.woff")), weight: 400 as const, style: "normal" as const },
    { name: "Raleway", data: fs.readFileSync(path.join(fontDir, "raleway-latin-700-normal.woff")), weight: 700 as const, style: "normal" as const },
];
const logo = `data:image/svg+xml;base64,${fs.readFileSync(path.join(process.cwd(), "public/favicon.svg")).toString("base64")}`;

export async function getStaticPaths() {
    const pages = await getOgPages();
    return pages.map((page) => ({ params: { slug: ogKey(`/${page.path}`) }, props: { page } }));
}

const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}) => ({
    type,
    props: { style, children, ...extra },
});

export const GET: APIRoute = async ({ props }) => {
    const { page } = props as { page: OgPage };
    const titleSize = page.title.length > 70 ? 54 : page.title.length > 45 ? 62 : 72;
    const tree = h("div", { width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#FBF6F1", fontFamily: "Raleway" }, [
        h("div", { height: 18, width: "100%", display: "flex", background: "linear-gradient(90deg, #A6524B 0%, #BF793B 50%, #F28729 100%)" }),
        h("div", { flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 72px 52px" }, [
            h("div", { display: "flex", alignItems: "center", gap: 20 }, [
                h("img", { width: 76, height: 76 }, undefined, { src: logo, width: 76, height: 76 }),
                h("div", { fontSize: 38, fontWeight: 700, color: "#172554", letterSpacing: 2 }, "JOJACOM"),
            ]),
            h("div", { display: "flex", flexDirection: "column" }, [
                h("div", { fontSize: 28, fontWeight: 700, color: "#A6524B", textTransform: "uppercase", letterSpacing: 2 }, page.kicker),
                h("div", { marginTop: 18, fontSize: titleSize, fontWeight: 700, color: "#172554", lineHeight: 1.12, maxWidth: 1040 }, page.title),
            ]),
            h("div", { display: "flex", justifyContent: "space-between", fontSize: 26, color: "#374151" }, [
                h("div", {}, "www.jojacom.online"),
                h("div", {}, "Agence digitale · Dakar, Sénégal"),
            ]),
        ]),
    ]);
    const svg = await satori(tree as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
