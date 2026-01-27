import { Breadcrumbs } from "@/registry/core/breadcrumbs";
import { Home, ThreeDCube1 } from "@tailgrids/icons";

export default function BreadcrumbsWithIconPreview() {
  return (
    <Breadcrumbs
      items={[
        { href: "/", label: "Home", icon: <Home /> },
        { href: "/products", label: "Products", icon: <ThreeDCube1 /> },
        { href: "/products/laptop", label: "Laptop" }
      ]}
    />
  );
}
