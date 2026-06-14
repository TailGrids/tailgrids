import GlobalHeader from "@/components/global-header";
import { baseOptions, ThemeToggleLink } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { ContainerWithGrid } from "@/components/ContainerGrid";
import Footer from "@/components/Footer";
import MobileNav from "@/components/mobile-nav";
import { CustomFolder, CustomItem, CustomSeparator } from "@/components/sidebar-components";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <GlobalHeader />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        sidebar={{
          collapsible: false,
          enabled: true,
          banner: <ThemeToggleLink />,
          footer: <MobileNav />,
          defaultOpenLevel: 1,
          components: {
            Item: CustomItem,
            Folder: CustomFolder,
            Separator: CustomSeparator
          }
        }}
      >
        <ContainerWithGrid>
          {children}
          <Footer />
        </ContainerWithGrid>
      </DocsLayout>
    </div>
  );
}
