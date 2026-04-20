import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET(
  _: NextRequest,
  props: { params: Promise<{ slug: string[] }> }
) {
  const params = await props.params;

  const normalizedSlug = params.slug.map((segment, index, segments) => {
    if (index === segments.length - 1) {
      return segment.replace(/\.md$/, "");
    }

    return segment;
  });

  const slug =
    normalizedSlug.at(-1) === "index"
      ? normalizedSlug.slice(0, -1) // Remove the "index" segment for the root path. e.g. ["foo", "index"] -> ["foo"]
      : normalizedSlug;

  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const content = await page.data.getText("raw");

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown"
    }
  });
}

export async function generateStaticParams() {
  return source.generateParams().map(params => ({
    slug: params.slug?.length ? params.slug : ["index"]
  }));
}
