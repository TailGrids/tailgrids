import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/"
    },
    // sitemap: new URL("/sitemap.xml", process.env.NEXT_PUBLIC_SITE_URL)
    sitemap: undefined
  };
}
