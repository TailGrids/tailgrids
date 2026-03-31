"use client";

import { Button } from "@/registry/core/button";
import {
  Sidebar,
  SidebarContent,
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
  Bell1,
  MapMarker5,
  PieChart1,
  UserCircle1
} from "@tailgrids/icons";
import { useState } from "react";

export default function SidebarVariantsPreview() {
  const [variant, setVariant] = useState<"sidebar" | "floating" | "inset">(
    "sidebar"
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 mb-2 p-2 rounded-lg bg-base-100">
        <label className="mr-2 text-sm text-title-50 font-medium">
          Variants:
        </label>

        <div className="flex items-center gap-2">
          {(["sidebar", "floating", "inset"] as const).map(v => (
            <Button
              key={v}
              onClick={() => setVariant(v)}
              appearance={v === variant ? "fill" : "outline"}
              className="py-1 capitalize"
            >
              {v}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex h-100 w-full rounded-md border border-base-200 overflow-hidden bg-background-200">
        <SidebarProvider className="h-full">
          <Sidebar variant={variant} className="h-full p-2">
            <SidebarHeader className="flex-row items-center gap-2">
              <span className="size-8 bg-linear-to-br from-indigo-400 via-purple-400 to-fuchsia-600 rounded-lg" />
              <h2 className="text-lg font-medium">Sidebar Variants</h2>
            </SidebarHeader>

            <SidebarContent className="px-2">
              <SidebarGroup>
                <SidebarGroupLabel>Analytics</SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <MapMarker5 /> <span>Geographic</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="group-data-[variant=inset]:hover:bg-background-50">
                        <PieChart1 /> <span>Demographics</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="group-data-[variant=inset]:hover:bg-background-50">
                        <UserCircle1 /> <span>Profile</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton className="group-data-[variant=inset]:hover:bg-background-50">
                        <Bell1 /> <span>Notifications</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div className="flex flex-1 flex-col">
            <header className="flex h-14 items-center gap-4 border-b border-base-200 bg-background-100 px-6">
              <SidebarTrigger>
                <AngleDoubleLeft className="group-data-[sidebar=closed]/sidebar-wrapper:rotate-180 duration-300" />
              </SidebarTrigger>

              <h1 className="text-sm font-semibold capitalize">
                {variant} layout
              </h1>
            </header>

            <main className="flex-1 overflow-auto p-4 md:p-6 bg-background-50">
              <div className="h-full rounded-xl border border-dashed border-base-200 p-4">
                <p className="text-sm text-text-400">
                  Main content area reflecting {variant} variant changes.
                </p>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
