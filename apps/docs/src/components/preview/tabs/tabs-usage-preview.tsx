import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";

export default function TabsUsagePreview() {
  return (
    <TabRoot defaultValue="overview">
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="analytics">Analytics</TabTrigger>
        <TabTrigger value="reports">Reports</TabTrigger>
      </TabList>
      <TabContent value="overview">
        <p>Overview content goes here.</p>
      </TabContent>
      <TabContent value="analytics">
        <p>Analytics content goes here.</p>
      </TabContent>
      <TabContent value="reports">
        <p>Reports content goes here.</p>
      </TabContent>
    </TabRoot>
  );
}
