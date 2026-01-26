import { JSX } from "react";
import { DiscordIcon, GithubIcon, XIcon } from "../ui/icons";

export interface FooterLinkItemType {
  title: string;
  url: string;
  external?: boolean;
}

export interface SocialLinkType extends FooterLinkItemType {
  icon: JSX.Element;
}

export const resourceLinks: FooterLinkItemType[] = [
  {
    title: "Change Logs",
    url: "/changelog",
    external: false
  },
  {
    title: "Roadmap",
    url: "https://tailgrids.com/roadmap",
    external: false
  },
  {
    title: "Tailgrids Blocks",
    url: "https://tailgrids.com/blocks",
    external: false
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    external: true
  },
  {
    title: "Tailgrids - Tailwind Figma",
    url: "https://tailgrids.com/figma",
    external: false
  }
];

export const usefulLinks: FooterLinkItemType[] = [
  {
    title: "License",
    url: "/license",
    external: false
  },
  {
    title: "Privacy Policy",
    url: "https://tailgrids.com/privacy-policy",
    external: true
  },
  {
    title: "Refund Policy",
    url: "https://tailgrids.com/refund-policy",
    external: true
  },
  {
    title: "Download",
    url: "https://tailgrids.com/pricing",
    external: false
  }
];

export const helpAndSupportLinks: FooterLinkItemType[] = [
  {
    title: "Support",
    url: "https://tailgrids.com/support",
    external: false
  },
  {
    title: "Docs",
    url: "/",
    external: false
  },
  {
    title: "FAQs",
    url: "https://tailgrids.com/pricing#faqs",
    external: false
  },
  {
    title: "Community",
    url: "https://pimjo.com/community",
    external: true
  }
];

export const socialsLinks: SocialLinkType[] = [
  {
    title: "X",
    url: "https://x.com/tailgrids",
    external: true,
    icon: <XIcon className="size-4.5" />
  },
  {
    title: "Github",
    url: "https://github.com/Tailgrids",
    external: true,
    icon: <GithubIcon className="size-4.5" />
  },
  {
    title: "Discord",
    url: "https://www.pimjo.com/community",
    external: true,
    icon: <DiscordIcon className="size-4.5" />
  }
];
