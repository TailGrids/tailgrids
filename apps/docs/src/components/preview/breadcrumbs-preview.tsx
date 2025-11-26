import { Breadcrumbs } from "@/registry/core/breadcrumbs";

export default function BreadcrumbsPreview() {
  return (
    <Breadcrumbs
      dividerType="chevron"
      items={[
        { href: "#", label: "Docs" },
        { href: "#", label: "Components" },
        {
          href: "#",
          label: "Breadcrumbs"
        }
      ]}
    />
  );
}
