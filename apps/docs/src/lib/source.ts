import { docs } from "@/.source";
import {
  type InferPageType,
  type PageTreeTransformer,
  loader
} from "fumadocs-core/source";
// import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";

// Injects badges from meta.json into sidebar items at build time
const badgesTransformer: PageTreeTransformer = {
  folder(node, _folderPath, metaPath) {
    if (!metaPath) return node;

    const metaFile = this.storage.read(metaPath);
    if (!metaFile || metaFile.format !== "meta") return node;

    const badges = (metaFile.data as Record<string, unknown>)
      .badges as Record<string, "new" | "updated"> | undefined;
    if (!badges) return node;

    return {
      ...node,
      children: node.children.map((child) => {
        if (child.type !== "page") return child;
        const badge = badges[child.url];
        if (!badge) return child;
        return { ...child, description: badge };
      })
    };
  }
};

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [badgesTransformer]
  }
  // plugins: [lucideIconsPlugin()]
});

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
