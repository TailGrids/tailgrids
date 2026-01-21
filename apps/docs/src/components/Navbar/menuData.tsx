import {
  AIIcon,
  CartIcon,
  ChatBubbleIcon,
  ColoredFigmaIcon,
  ColoredReactIcon,
  ColoredVueIcon,
  CommunityIcon,
  ConfettiIcon,
  Dashboard2Icon,
  LayoutIcon,
  MegaPhoneIcon,
  PencilTextIcon,
  PieChartIcon,
  RoadMapIcon
} from "../ui/icons";

export interface MenuItem {
  title: string;
  path?: string;
  external?: boolean;
  children?: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  desc?: string;
  path?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const menuData: MenuItem[] = [
  {
    title: "Blocks",
    children: [
      {
        title: "Core Components",
        path: "https://staging.tailgrids.com/docs/components",
        icon: <Dashboard2Icon className="size-6" />,
        desc: "Core UI Components to kickstart any web projects - Open-source"
      },
      {
        title: "Application",
        path: "https://staging.tailgrids.com/blocks#application",
        icon: <LayoutIcon className="size-6" />,
        desc: "Components crafted for build all kind of modern webapps and sites"
      },
      {
        title: "Marketing",
        path: "https://staging.tailgrids.com/blocks#marketing",
        icon: <MegaPhoneIcon className="size-6" />,
        desc: "All you need to create stunning and high-converting landing pages"
      },
      {
        title: "Dashboard",
        path: "https://staging.tailgrids.com/blocks#dashboard",
        icon: <PieChartIcon className="size-6" />,
        desc: "Build data-rich modern backends, dashboards and admin panels"
      },
      {
        title: "E-commerce",
        path: "https://staging.tailgrids.com/blocks#e-commerce",
        icon: <CartIcon className="size-6" />,
        desc: "Components and Pages need to build complete online store UI"
      },
      {
        title: "AI Components",
        path: "https://staging.tailgrids.com/blocks#ai-components",
        icon: <AIIcon className="size-6" />,
        desc: "All you need to create stunning AI tools & landing pages"
      }
    ]
  },
  {
    title: "Templates",
    path: "/templates",
    external: false
  },
  {
    title: "Docs",
    path: "/docs",
    external: true
  },
  // {
  //   title: "Products",
  //   children: [
  //     {
  //       title: "Tailgrids React.js",
  //       desc: "Tailwind UI components for react.js",
  //       path: "/react",
  //       icon: <ColoredReactIcon className="size-6" />,
  //     },
  //     {
  //       title: "Tailgrids Vue.js",
  //       desc: "Tailwind UI components for vue.js",
  //       path: "/vue",
  //       icon: <ColoredVueIcon className="size-6" />,
  //     },
  //     {
  //       title: "Tailgrids Figma",
  //       desc: "Tailwind UI components for figma",
  //       path: "/figma",
  //       icon: <ColoredFigmaIcon className="size-6" />,
  //     },
  //   ],
  // },
  {
    title: "Resources",
    children: [
      {
        title: "Community",
        desc: "Connect, share, and grow with fellow users.",
        path: "/community",
        icon: <CommunityIcon className="size-6" />
      },
      {
        title: "Support",
        desc: "Need help? Our team’s here for you.",
        path: "/support",
        icon: <ChatBubbleIcon className="size-6" />
      },
      {
        title: "Roadmap",
        desc: "Discover upcoming features and releases.",
        path: "/roadmap",
        icon: <RoadMapIcon className="size-6" />
      },
      {
        title: "Icons",
        desc: "Fresh news and product updates.",
        path: "/icons",
        icon: <ConfettiIcon className="size-6" />
      },
      {
        title: "Blog",
        desc: "Fresh news and product updates.",
        path: "/blog",
        icon: <PencilTextIcon className="size-6" />
      }
    ]
  }
];
