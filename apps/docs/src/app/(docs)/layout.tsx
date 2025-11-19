import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions, ThemeToggleLink } from "@/lib/layout.shared";
import GlobalHeader from "@/components/global-header";
import { Container } from "lucide-react";
import { ContainerWithGrid } from "@/components/ContainerGrid";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <GlobalHeader />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        sidebar={{
          collapsible: false,
          // Enable responsive sidebar: drawer on mobile, persistent on desktop
          enabled: true,
          banner: <ThemeToggleLink />,
        }}
      >
        <ContainerWithGrid>{children}</ContainerWithGrid>
      </DocsLayout>
    </>
  );
}
