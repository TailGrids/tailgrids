"use client";

import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";
import { Toggle } from "@/registry/core/toggle";
import { cn } from "@/utils/cn";
import {
  BarChartSquare,
  Bell1,
  Shield1Check,
  UserMultiple1
} from "@tailgrids/icons";

export default function TabsCustomPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <TabRoot
        defaultValue="dashboard"
        variant="minimal"
        className="p-0! border-none! [&>div:first-child]:border-none!"
      >
        <TabList className="w-fit bg-background-soft-50 mx-auto p-1 rounded-full border border-base-100 flex flex-row items-center gap-1">
          {["dashboard", "messages", "settings"].map(tab => (
            <TabTrigger
              key={tab}
              value={tab}
              className={cn(
                "py-2 px-5 text-sm font-medium transition-all text-text-50 border-none rounded-full data-[active=true]:bg-background-50 data-[active=true]:shadow-sm data-[active=true]:text-title-50 hover:text-foreground-50"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabTrigger>
          ))}
        </TabList>

        <div className="mt-8">
          <TabContent value="dashboard" className="p-0">
            <div className="p-6 bg-background-50 border border-base-100 shadow-sm space-y-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-title-50">
                    Overview
                  </h3>
                  <p className="text-sm text-text-100">
                    Your performance metrics for this week
                  </p>
                </div>
                <button className="text-sm font-medium text-text-100">
                  View Report
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background-soft-50 border border-base-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-background-50 border border-base-100 rounded-lg">
                      <BarChartSquare className="size-5 text-text-50" />
                    </div>
                    <span className="text-sm font-medium text-text-50">
                      Revenue
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground-50">
                      $24.5k
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      +12%
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-background-soft-50 border border-base-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-background-50 border border-base-100">
                      <UserMultiple1 className="size-5 text-neutral-500" />
                    </div>
                    <span className="text-sm font-medium text-text-50">
                      Users
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-title-50">
                      1,234
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      +8.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>

          <TabContent value="messages" className="p-0">
            <div className="p-6 rounded-2xl bg-background-50 border border-base-100 shadow-sm">
              <div className="flex items-center justifying-between mb-6">
                <h3 className="text-lg font-semibold text-title-50">Inbox</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Alex Morgan",
                    msg: "Updated the design files for the new project.",
                    time: "2m ago",
                    initial: "A",
                    color: "bg-blue-100 text-blue-600"
                  },
                  {
                    name: "Sarah Chen",
                    msg: "Can we reschedule our meeting to tomorrow?",
                    time: "1h ago",
                    initial: "S",
                    color: "bg-orange-100 text-orange-600"
                  },
                  {
                    name: "Mike Ross",
                    msg: "Project deployment was successful!",
                    time: "3h ago",
                    initial: "M",
                    color: "bg-emerald-100 text-emerald-600"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3 hover:bg-neutral-50 transition-colors cursor-pointer group rounded-xl"
                  >
                    <div
                      className={cn(
                        "size-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0",
                        item.color
                      )}
                    >
                      {item.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-medium text-title-50 text-sm">
                          {item.name}
                        </span>
                        <span className="text-xs text-text-200">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-text-100 dark:text-text-200 truncate group-hover:text-text-50 transition-colors">
                        {item.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabContent>

          <TabContent value="settings" className="p-0">
            <div className="p-6 rounded-2xl bg-background-50 border border-base-100 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-title-50">
                  Account Settings
                </h3>
                <p className="text-sm text-text-100">
                  Manage your account preferences
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-base-50 bg-background-soft-50/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background-50 border border-base-100 text-text-100 rounded-lg">
                      <Bell1 className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground-50">
                        Notifications
                      </div>
                      <div className="text-xs text-text-100 dark:text-text-200">
                        Receive daily summaries
                      </div>
                    </div>
                  </div>
                  <Toggle defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-base-50 bg-background-soft-50/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background-50 border border-base-100 text-text-100 rounded-lg">
                      <Shield1Check className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground-50">
                        Security
                      </div>
                      <div className="text-xs text-text-100">
                        2FA Authentication
                      </div>
                    </div>
                  </div>
                  <Toggle />
                </div>
              </div>
            </div>
          </TabContent>
        </div>
      </TabRoot>
    </div>
  );
}
