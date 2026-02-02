import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";

export default function TabsPreview() {
  return (
    <div className="w-full">
      <TabRoot defaultValue="overview" variant="default">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="analytics">Analytics</TabTrigger>
          <TabTrigger value="reports">Reports</TabTrigger>
          <TabTrigger value="settings">Settings</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <h4 className="font-semibold text-neutral-800 mb-2">Overview</h4>
          <p className="text-neutral-600">
            Get a high-level view of your dashboard metrics and key performance
            indicators.
          </p>
        </TabContent>
        <TabContent value="analytics">
          <h4 className="font-semibold text-neutral-800 mb-2">Analytics</h4>
          <p className="text-neutral-600">
            Deep dive into your data with detailed analytics and insights.
          </p>
        </TabContent>
        <TabContent value="reports">
          <h4 className="font-semibold text-neutral-800 mb-2">Reports</h4>
          <p className="text-neutral-600">
            Generate and view comprehensive reports for your business.
          </p>
        </TabContent>
        <TabContent value="settings">
          <h4 className="font-semibold text-neutral-800 mb-2">Settings</h4>
          <p className="text-neutral-600">
            Configure your preferences and account settings.
          </p>
        </TabContent>
      </TabRoot>
    </div>
  );
}
