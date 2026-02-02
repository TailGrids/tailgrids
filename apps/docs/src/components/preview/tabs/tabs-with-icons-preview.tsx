import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";
import { FileText, Gear1, Home, PieChart1 } from "@tailgrids/icons";

export default function TabsWithIconsPreview() {
  return (
    <div className="w-full">
      <TabRoot defaultValue="home" variant="default">
        <TabList>
          <TabTrigger value="home" icon={<Home />}>
            Home
          </TabTrigger>
          <TabTrigger value="analytics" icon={<PieChart1 />}>
            Analytics
          </TabTrigger>
          <TabTrigger value="reports" icon={<FileText />}>
            Reports
          </TabTrigger>
          <TabTrigger value="settings" icon={<Gear1 />}>
            Settings
          </TabTrigger>
        </TabList>
        <TabContent value="home">
          <p className="text-neutral-600">
            Access your main dashboard and summary.
          </p>
        </TabContent>
        <TabContent value="analytics">
          <p className="text-neutral-600">
            View detailed charts and performance metrics.
          </p>
        </TabContent>
        <TabContent value="reports">
          <p className="text-neutral-600">
            Download and review your monthly reports.
          </p>
        </TabContent>
        <TabContent value="settings">
          <p className="text-neutral-600">
            Adjust your system preferences and configurations.
          </p>
        </TabContent>
      </TabRoot>
    </div>
  );
}
