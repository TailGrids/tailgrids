"use client";

import { cn } from "@/lib/cn";
import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";
import { Toggle } from "@/registry/core/toggle";
import { BarChart3, Bell, Shield, Users } from "lucide-react";

export default function TabsCustomPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <TabRoot
        defaultValue="dashboard"
        variant="minimal"
        className="p-0! border-none! [&>div:first-child]:border-none!"
      >
        <TabList className="bg-neutral-100 dark:bg-neutral-800 w-fit mx-auto p-1 rounded-full border border-neutral-200 dark:border-neutral-700/50 flex flex-row items-center gap-1">
          {["dashboard", "messages", "settings"].map(tab => (
            <TabTrigger
              key={tab}
              value={tab}
              className={cn(
                "rounded-full py-2 px-5 text-sm font-medium transition-all text-neutral-600 dark:text-neutral-400 border-none",
                "data-[active=true]:bg-white dark:data-[active=true]:bg-neutral-900",
                "data-[active=true]:text-neutral-900 dark:data-[active=true]:text-white",
                "data-[active=true]:shadow-sm data-[active=true]:border-none!",
                "hover:text-neutral-900 dark:hover:text-neutral-200"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabTrigger>
          ))}
        </TabList>

        <div className="mt-8">
          <TabContent value="dashboard" className="p-0">
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    Overview
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Your performance metrics for this week
                  </p>
                </div>
                <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                  View Report
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      <BarChart3 className="size-4 text-neutral-500 dark:text-neutral-400" />
                    </div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Revenue
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">
                      $24.5k
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-1.5 py-0.5 rounded-full">
                      +12%
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      <Users className="size-4 text-neutral-500 dark:text-neutral-400" />
                    </div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Users
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">
                      1,234
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-1.5 py-0.5 rounded-full">
                      +8.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabContent>

          <TabContent value="messages" className="p-0">
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center justifying-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Inbox
                </h3>
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
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer group"
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
                        <span className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                          {item.name}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                        {item.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabContent>

          <TabContent value="settings" className="p-0">
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Account Settings
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Manage your account preferences
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                      <Bell className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">
                        Notifications
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
                        Receive daily summaries
                      </div>
                    </div>
                  </div>
                  <Toggle defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400">
                      <Shield className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">
                        Security
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">
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
