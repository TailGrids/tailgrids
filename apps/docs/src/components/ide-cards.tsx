import { Card } from "@/registry/core/card";
import { Cards } from "fumadocs-ui/components/card";
import Image from "next/image";
import Link from "next/link";

interface IDE {
  name: string;
  icon: string | { light: string; dark: string };
  href: string;
}

export default function IdeCards() {
  const ides: IDE[] = [
    {
      name: "VS Code",
      icon: "vscode.svg",
      href: "vscode:extension/tailgrids.tailgrids-mcp"
    },
    {
      name: "Cursor",
      icon: {
        light: "cursor-light.svg",
        dark: "cursor-dark.svg"
      },
      href: "cursor:extension/tailgrids.tailgrids-mcp"
    },
    {
      name: "Antigravity",
      icon: "antigravity.svg",
      href: "antigravity:extension/tailgrids.tailgrids-mcp"
    },
    {
      name: "Windsurf",
      icon: {
        light: "windsurf-light.svg",
        dark: "windsurf-dark.svg"
      },
      href: "windsurf:extension/tailgrids.tailgrids-mcp"
    }
  ];

  return (
    <Cards className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
      {ides.map(ide => (
        <Link key={ide.name} href={ide.href} className="no-underline">
          <Card className="bg-white items-center **:my-0! p-10 border md:min-w-full hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-white/5">
            {typeof ide.icon === "object" ? (
              <>
                <Image
                  src={`/docs/images/logos/${ide.icon.light}`}
                  alt={ide.name}
                  width={40}
                  height={40}
                  className="size-10 dark:hidden"
                />
                <Image
                  src={`/docs/images/logos/${ide.icon.dark}`}
                  alt={ide.name}
                  width={40}
                  height={40}
                  className="size-10 hidden dark:block"
                />
              </>
            ) : (
              <Image
                src={`/docs/images/logos/${ide.icon}`}
                alt={ide.name}
                width={40}
                height={40}
                className="size-10"
              />
            )}
            <p className="text-neutral-950 dark:text-white text-nowrap">
              {ide.name}
            </p>
          </Card>
        </Link>
      ))}
    </Cards>
  );
}
