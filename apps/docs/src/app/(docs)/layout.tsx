import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions, ThemeToggleLink } from "@/lib/layout.shared";
import GlobalHeader from "@/components/global-header";

import { ContainerWithGrid } from "@/components/ContainerGrid";
import Footer from "@/components/Footer";
import MobileNav from "@/components/mobile-nav";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="">
      <GlobalHeader />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        sidebar={{
          collapsible: false,
          // Enable responsive sidebar: drawer on mobile, persistent on desktop
          enabled: true,
          banner: <ThemeToggleLink />,
          footer: <MobileNav />
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
