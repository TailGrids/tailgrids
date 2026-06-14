import { z } from "zod";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";

const extendedMetaSchema = metaSchema.extend({
  badges: z.record(z.string(), z.enum(["new", "updated"])).optional()
});

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content",
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: extendedMetaSchema
  }
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  }
});
