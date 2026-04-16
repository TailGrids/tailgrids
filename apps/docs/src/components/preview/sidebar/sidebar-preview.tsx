"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/registry/core/sidebar";
import {
  AngleDoubleLeft,
  Calendar,
  Envelope1,
  Gear1,
  Home,
  Search1,
  User2
} from "@tailgrids/icons";
import { forwardRef, SVGProps } from "react";
import { mergeProps } from "react-aria";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Envelope1 },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search1 }
];

export default function SidebarPreview() {
  return (
    <div className="flex h-100 w-full rounded-md border border-base-200 overflow-hidden bg-background-100">
      <SidebarProvider className="h-full">
        <Sidebar className="h-full">
          <SidebarHeader className="p-4 flex-row items-center">
            <span className="flex aspect-square size-8 items-center justify-center rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-text-0">
              <User2 className="size-4 text-white" />
            </span>
            <span>My Application</span>
          </SidebarHeader>

          <SidebarContent className="px-4">
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        render={({ ref, ...props }) => (
                          <SidebarMenuItemLink
                            title={item.title}
                            url={item.url}
                            icon={item.icon}
                            ref={ref as React.Ref<HTMLAnchorElement>}
                            {...props}
                          />
                        )}
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Gear1 />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b border-base-200 bg-background-100 px-6">
            <SidebarTrigger>
              <AngleDoubleLeft className="group-data-[sidebar=closed]/sidebar-wrapper:rotate-180 duration-300" />
            </SidebarTrigger>
            <p className="text-lg font-semibold">Home</p>
          </header>

          <main className="flex-1 overflow-auto p-6 bg-background-50">
            <div className="h-full rounded-xl border border-dashed border-base-200 p-4">
              <p className="text-sm text-text-400">Main content goes here.</p>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}

const SidebarMenuItemLink = forwardRef<
  HTMLAnchorElement,
  {
    title: string;
    url: string;
    icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
    [key: string]: any;
  }
>(({ title, url, icon: Icon, ...props }, ref) => {
  return (
    <a
      {...mergeProps(props, {
        href: url,
        className: "flex items-center gap-2"
      })}
      ref={ref}
    >
      <Icon />
      <span>{title}</span>
    </a>
  );
});
SidebarMenuItemLink.displayName = "SidebarMenuItemLink";
