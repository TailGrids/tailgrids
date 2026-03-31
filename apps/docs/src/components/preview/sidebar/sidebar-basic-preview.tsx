"use client";

import tailgridsIcon from "@/assets/logo/tailgrids-icon.svg";
import { Breadcrumbs } from "@/registry/core/breadcrumbs";
import { buttonStyles } from "@/registry/core/button";
import { Collapsible, CollapsibleContent } from "@/registry/core/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger
} from "@/registry/core/sidebar";
import { cn } from "@/utils/cn";
import {
  BotUser1,
  ChevronBothDirection,
  ChevronRight,
  Code1Square,
  Gear1,
  MenuHamburger1,
  OpenBook,
  Plus,
  User2
} from "@tailgrids/icons";
import Image from "next/image";
import * as React from "react";

const data = {
  user: {
    name: "ahmedrtusar",
    email: "tusar@gmail.com"
  },
  teams: [
    {
      name: "Tailgrids",
      plan: "Enterprise"
    },
    {
      name: "Tailgrids Labs",
      plan: "Startup"
    },
    {
      name: "Tailgrids UI",
      plan: "Free"
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: Code1Square,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Models",
      url: "#",
      icon: BotUser1,
      items: [
        {
          title: "Genesis",
          url: "#"
        },
        {
          title: "Explorer",
          url: "#"
        },
        {
          title: "Quantum",
          url: "#"
        }
      ]
    },
    {
      title: "Documentation",
      url: "#",
      icon: OpenBook,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    },
    {
      title: "Settings",
      url: "#",
      icon: Gear1,
      items: [
        {
          title: "General",
          url: "#"
        },
        {
          title: "Team",
          url: "#"
        },
        {
          title: "Billing",
          url: "#"
        },
        {
          title: "Limits",
          url: "#"
        }
      ]
    }
  ]
};

export default function SidebarDemo() {
  const [open, setOpen] = React.useState<boolean>(true);
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0]!);

  return (
    <div className="flex h-150 w-full rounded-xl border overflow-hidden bg-background-100 shadow-sm">
      <SidebarProvider open={open} onOpenChange={setOpen} className="h-full">
        <Sidebar
          collapsible="icon"
          showSheetCloseButton={false}
          className="h-full"
        >
          <SidebarHeaderSection
            open={open}
            activeTeam={activeTeam}
            setActiveTeam={setActiveTeam}
          />

          <SidebarContentSection open={open} />

          <SidebarFooterSection open={open} />
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-2 border-b border-base-100 bg-background-100 px-4 transition-[width,height,padding] ease-linear">
            <SidebarTrigger className="p-0 border-0 mr-1 ">
              <MenuHamburger1 size={24} />
            </SidebarTrigger>

            <Breadcrumbs
              items={[
                { label: "Platform", href: "#" },
                { label: "Playground", href: "#" },
                { label: "History", href: "#" }
              ]}
              dividerType="chevron"
            />
          </header>
          <main className="flex-1 overflow-auto p-4 bg-background-50">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl border border-base-100 bg-background-100/50 shadow-sm" />
              <div className="aspect-video rounded-xl border border-base-100 bg-background-100/50 shadow-sm" />
              <div className="aspect-video rounded-xl border border-base-100 bg-background-100/50 shadow-sm" />
            </div>
            <div className="mt-4 min-h-100 rounded-xl border border-base-100 bg-background-100/50 shadow-sm" />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}

function SidebarHeaderSection({
  open,
  activeTeam,
  setActiveTeam
}: {
  open: boolean;
  activeTeam: { name: string; plan: string };
  setActiveTeam: (team: { name: string; plan: string }) => void;
}) {
  return (
    <SidebarHeader>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "w-full flex items-center rounded-md duration-200 hover:bg-background-soft-50 focus-visible:bg-background-soft-50 aria-expanded:bg-background-soft-100",
            open ? "p-2 justify-between" : "justify-start"
          )}
        >
          <div className={cn("flex items-center", open && "gap-2")}>
            <Image src={tailgridsIcon} alt="Tailgrids" width={34} height={34} />

            {open && (
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs text-text-100/70">
                  {activeTeam.plan}
                </span>
              </div>
            )}
          </div>

          {open && (
            <ChevronBothDirection className="ml-auto size-4 text-text-100/50" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-(--sidebar-width) min-w-56 p-1.5 border"
          placement="end top"
          offset={6}
        >
          <DropdownMenuHeader className="text-xs text-text-100/50 font-medium">
            Teams
          </DropdownMenuHeader>

          {data.teams.map(team => (
            <DropdownMenuItem
              key={team.name}
              onAction={() => setActiveTeam(team)}
            >
              <button className="w-full px-1 py-0.5 flex justify-between items-center">
                {team.name}

                <span className="text-xs text-text-100/50">{team.plan}</span>
              </button>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator className="my-1" />

          <DropdownMenuItem className="p-0 hover:bg-transparent focus:bg-transparent overflow-hidden">
            <button
              className={buttonStyles({
                appearance: "outline",
                className: "w-full py-1.5!"
              })}
            >
              <span className="flex size-6 items-center justify-center rounded-md border border-base-100 bg-background-100">
                <Plus className="size-4" />
              </span>
              <div className="font-medium text-text-100">Add team</div>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}

function SidebarContentSection({ open }: { open: boolean }) {
  return (
    <SidebarContent className={"px-4 group-data-[collapsible=icon]:px-2"}>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>

        <SidebarMenu>
          {data.navMain.map(item => (
            <SidebarMenuItem key={item.title}>
              <Collapsible
                defaultExpanded={item.isActive}
                className="group/collapsible w-full border-none p-0 bg-transparent sm:data-expanded:pb-0"
              >
                <SidebarMenuButton
                  slot="trigger"
                  tooltip={item.title}
                  className={cn(open && "justify-between")}
                >
                  <item.icon />
                  {open && (
                    <>
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-expanded/collapsible:rotate-90 pointer-events-none" />
                    </>
                  )}
                </SidebarMenuButton>

                <CollapsibleContent className="border-none group-data-expanded:px-3.5 sm:group-data-expanded:px-0.5 bg-transparent">
                  <SidebarMenuSub className="w-full">
                    {item.items?.map(subItem => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton href={subItem.url}>
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}

function SidebarFooterSection({ open }: { open: boolean }) {
  return (
    <SidebarFooter>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "w-full flex items-center rounded-md duration-200 hover:bg-background-soft-50 focus-visible:bg-background-soft-50 aria-expanded:bg-background-soft-100",
            open ? "p-2 justify-between" : "size-8 p-0 justify-center"
          )}
        >
          <div className={cn("flex items-center", open && "gap-2")}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <User2 className="size-4" />
            </div>

            {open && (
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-text-100">
                  {data.user.name}
                </span>
                <span className="truncate text-xs text-text-100/70">
                  {data.user.email}
                </span>
              </div>
            )}
          </div>

          {open && (
            <ChevronBothDirection className="ml-auto size-4 text-text-100/50" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-(--sidebar-width) min-w-56 p-1.5 border"
          placement="end top"
          offset={6}
        >
          <DropdownMenuHeader className="flex items-center gap-2 p-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <User2 className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{data.user.name}</span>
              <span className="truncate text-xs text-text-100/70">
                {data.user.email}
              </span>
            </div>
          </DropdownMenuHeader>

          <DropdownMenuSeparator className="my-0.5" />

          <DropdownMenuItem>Upgrade to Pro</DropdownMenuItem>

          <DropdownMenuSeparator className="my-0.5" />

          <DropdownMenuItem>Account</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Notifications</DropdownMenuItem>

          <DropdownMenuSeparator className="my-0.5" />

          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
}
