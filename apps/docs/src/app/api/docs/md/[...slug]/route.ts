import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  props: { params: Promise<{ slug: string[] }> }
) {
  const params = await props.params;

  const page = source.getPage(params.slug);

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
