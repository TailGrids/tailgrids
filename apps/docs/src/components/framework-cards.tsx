import { Card } from "@/registry/core/card";
import { Cards } from "fumadocs-ui/components/card";
import Image from "next/image";
import Link from "next/link";

interface Framework {
  name: string;
  icon: string | Icon;
  href: string;
}

interface Icon {
  light: string;
  dark: string;
}

export default function FrameworkCards() {
  const frameworks: Framework[] = [
    {
      name: "Next.js",
      icon: "/next-js.svg",
      href: "/next"
    },
    {
      name: "Vite",
      icon: "/vite.svg",
      href: "/vite"
    },
    {
      name: "Tanstack Start",
      icon: "/tanstack.svg",
      href: "/tanstack"
    },
    {
      name: "React Router",
      icon: {
        light: "/react-router-light.svg",
        dark: "/react-router-dark.svg"
      },
      href: "/react-router"
    },
    {
      name: "Manual",
      icon: "/react.svg",
      href: "/manual"
    },
    {
      name: "Astro",
      icon: {
        light: "/astro-light.svg",
        dark: "/astro-dark.svg"
      },
      href: "/astro"
    }
  ];

  return (
    <Cards className="gap-2.5">
      {frameworks.map(framework => (
        <Link
          key={framework.name}
          href={`/installation${framework.href}`}
          className="no-underline"
        >
          <Card className="bg-background-soft-50 items-center **:my-0! p-10 border md:min-w-full hover:bg-background-soft-100">
            {typeof framework.icon === "object" ? (
              <>
                <Image
                  src={`/docs/images/logos/${framework.icon.light}`}
                  alt={framework.name}
                  width={40}
                  height={40}
                  className="size-10 dark:hidden"
                />
                <Image
                  src={`/docs/images/logos/${framework.icon.dark}`}
                  alt={framework.name}
                  width={40}
                  height={40}
                  className="size-10 hidden dark:block"
                />
              </>
            ) : (
              <Image
                src={`/docs/images/logos/${framework.icon}`}
                alt={framework.name}
                width={40}
                height={40}
                className="size-10"
              />
            )}
            <p>{framework.name}</p>
          </Card>
        </Link>
      ))}
    </Cards>
  );
}
