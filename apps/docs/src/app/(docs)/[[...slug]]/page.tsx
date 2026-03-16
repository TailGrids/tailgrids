import { PageContentProvider } from "@/components/page-content-provider";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { cn } from "@/utils/cn";
import { findNeighbour } from "fumadocs-core/page-tree";
import { PageFooter } from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const rawContent = await page.data.getText("raw");

  const nav = findNeighbour(source.pageTree, page.url);

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{
        enabled: true,
        component: (
          <PageFooter
            items={nav}
            className={cn(
              "mt-8",
              nav.previous && nav.next
                ? "w-full max-w-full"
                : "w-full max-w-100",
              nav.next && !nav.previous && "ml-auto"
            )}
          />
        )
      }}
    >
      <PageContentProvider content={rawContent}>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page)
            })}
          />
        </DocsBody>
      </PageContentProvider>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const canonical = params.slug?.length
    ? "/docs/" + params.slug.join("/")
    : "/docs";

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url
    },
    alternates: {
      canonical
    }
  };
}
