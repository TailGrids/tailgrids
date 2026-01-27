import { GoogleTagManager } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./global.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  style: ["normal", "italic"]
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-geist-mono",
  style: ["normal"]
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: "%s | Tailgrids Docs",
    default: "Tailgrids Docs"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script src="https://accounts.google.com/gsi/client" async defer />
      </head>

      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />

      <body className="flex flex-col min-h-screen bg-white dark:bg-[#030712] antialiased">
        <RootProvider
          theme={{
            defaultTheme: "light",
            enableSystem: false
          }}
          search={{
            enabled: true,
            options: {
              api: "/docs/api/search"
            }
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
