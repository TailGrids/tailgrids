import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";
import { Gear1, PieChart1, UserMultiple1 } from "@tailgrids/icons";

export default function TabsHorizontalPreview() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <TabRoot defaultValue="team" direction="horizontal" variant="default">
        <TabList>
          <TabTrigger value="team" icon={<UserMultiple1 />}>
            Team
          </TabTrigger>
          <TabTrigger value="analytics" icon={<PieChart1 />}>
            Analytics
          </TabTrigger>
          <TabTrigger value="settings" icon={<Gear1 />}>
            Settings
          </TabTrigger>
        </TabList>
        <div className="flex-1">
          <TabContent value="team">
            <h4 className="font-semibold text-title-50 mb-2">
              Team Management
            </h4>
            <p className="text-text-100">
              Manage your team members, roles, and permissions. Add new members
              or update existing ones.
            </p>
          </TabContent>
          <TabContent value="analytics">
            <h4 className="font-semibold text-title-50 mb-2">Team Analytics</h4>
            <p className="text-text-100">
              View team performance metrics, activity logs, and productivity
              insights.
            </p>
          </TabContent>
          <TabContent value="settings">
            <h4 className="font-semibold text-title-50 mb-2">Team Settings</h4>
            <p className="text-text-100">
              Configure team-wide settings, notifications, and integrations.
            </p>
          </TabContent>
        </div>
      </TabRoot>
    </div>
  );
}
