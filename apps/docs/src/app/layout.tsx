import { RootProvider } from "fumadocs-ui/provider/next";
//@ts-ignore
import "./global.css";
import { DM_Sans, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist-mono",
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable} `}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
