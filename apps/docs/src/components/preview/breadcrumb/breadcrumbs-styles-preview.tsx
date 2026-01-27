import { Breadcrumbs } from "@/registry/core/breadcrumbs";

export default function BreadcrumbsStylesPreview() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs
        dividerType="chevron"
        items={[
          { href: "/", label: "Home" },
          { href: "/docs", label: "Documentation" }
        ]}
      />

      <Breadcrumbs
        dividerType="dot"
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" }
        ]}
      />

      <Breadcrumbs
        dividerType="slash"
        items={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" }
        ]}
      />
    </div>
  );
}
