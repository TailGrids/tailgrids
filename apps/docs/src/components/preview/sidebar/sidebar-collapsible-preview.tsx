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
import { AngleDoubleLeft } from "@tailgrids/icons";
import { BarChart2, LayoutGrid, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function SidebarCollapsiblePreview() {
  const [collapsibleType, setCollapsibleType] = useState<"offcanvas" | "icon">(
    "icon"
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-2 mb-2 p-2 rounded-lg bg-base-100">
        <label className="mr-2 text-sm text-title-50 font-medium">
          {" "}
          Collapsible modes:
        </label>
        <div className="flex items-center gap-2">
          {(["offcanvas", "icon"] as const).map(t => (
            <Button
              key={t}
              onClick={() => setCollapsibleType(t)}
              appearance={collapsibleType === t ? "fill" : "outline"}
              className="py-1 capitalize"
            >
              {t}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex h-100 w-full border border-base-200 bg-background-100 overflow-hidden rounded-md">
        <SidebarProvider defaultOpen={true}>
          <Sidebar collapsible={collapsibleType}>
            <SidebarHeader>
              <p className="flex items-center gap-2 h-8 w-full group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:justify-center">
                <LayoutGrid className="size-5 shrink-0" />
                <span className="group-data-[collapsible=icon]:hidden truncate font-semibold">
                  Collapsible App
                </span>
              </p>
            </SidebarHeader>

            <SidebarContent className="px-2">
              <SidebarGroup>
                <SidebarGroupLabel>Metrics</SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Messages">
                        <MessageSquare />
                        <span className="group-data-[collapsible=icon]:hidden">
                          Messages
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Performance">
                        <BarChart2 />
                        <span className="group-data-[collapsible=icon]:hidden">
                          Performance
                        </span>
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
                {collapsibleType} style
              </h1>
            </header>

            <main className="flex-1 overflow-auto p-6 bg-background-50">
              <div className="h-full rounded-xl border border-dashed border-base-200 p-4">
                <p className="text-sm text-text-400">
                  {collapsibleType === "icon" &&
                    "When clicking the trigger, the sidebar shrinks to icons. Tooltips will appear on hover."}
                  {collapsibleType === "offcanvas" &&
                    "When clicking the trigger, the sidebar slides completely out of view."}
                </p>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
