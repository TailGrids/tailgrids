import { TabRoot, TabList, TabTrigger, TabContent } from "@/registry/core/tabs";
import {
  Home,
  PieChart1,
  FileText,
  Gear1,
  UserMultiple1,
  Envelope1
} from "@tailgrids/icons";

export default function TabsPreview() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Default Variant - Vertical */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Default (Vertical)
        </h3>
        <TabRoot defaultValue="overview" variant="default">
          <TabList>
            <TabTrigger value="overview">Overview</TabTrigger>
            <TabTrigger value="analytics">Analytics</TabTrigger>
            <TabTrigger value="reports">Reports</TabTrigger>
            <TabTrigger value="settings">Settings</TabTrigger>
          </TabList>
          <TabContent value="overview">
            <h4 className="font-semibold text-neutral-800 mb-2">Overview</h4>
            <p>
              Get a high-level view of your dashboard metrics and key
              performance indicators.
            </p>
          </TabContent>
          <TabContent value="analytics">
            <h4 className="font-semibold text-neutral-800 mb-2">Analytics</h4>
            <p>
              Deep dive into your data with detailed analytics and insights.
            </p>
          </TabContent>
          <TabContent value="reports">
            <h4 className="font-semibold text-neutral-800 mb-2">Reports</h4>
            <p>Generate and view comprehensive reports for your business.</p>
          </TabContent>
          <TabContent value="settings">
            <h4 className="font-semibold text-neutral-800 mb-2">Settings</h4>
            <p>Configure your preferences and account settings.</p>
          </TabContent>
        </TabRoot>
      </div>

      {/* Minimal Variant - Vertical */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Minimal (Vertical)
        </h3>
        <TabRoot defaultValue="home" variant="minimal">
          <TabList>
            <TabTrigger value="home">Home</TabTrigger>
            <TabTrigger value="profile">Profile</TabTrigger>
            <TabTrigger value="messages">Messages</TabTrigger>
          </TabList>
          <TabContent value="home">
            <p>Home content goes here.</p>
          </TabContent>
          <TabContent value="profile">
            <p>Profile content goes here.</p>
          </TabContent>
          <TabContent value="messages">
            <p>Messages content goes here.</p>
          </TabContent>
        </TabRoot>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          With Icons
        </h3>
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
          <TabContent value="home">Home content with icon</TabContent>
          <TabContent value="analytics">Analytics content with icon</TabContent>
          <TabContent value="reports">Reports content with icon</TabContent>
          <TabContent value="settings">Settings content with icon</TabContent>
        </TabRoot>
      </div>

      {/* With Badges */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          With Badges
        </h3>
        <TabRoot defaultValue="inbox" variant="minimal">
          <TabList>
            <TabTrigger value="inbox" icon={<Envelope1 />} badge={12}>
              Inbox
            </TabTrigger>
            <TabTrigger value="drafts" badge={3}>
              Drafts
            </TabTrigger>
            <TabTrigger value="sent">Sent</TabTrigger>
          </TabList>
          <TabContent value="inbox">
            <p>You have 12 new messages in your inbox.</p>
          </TabContent>
          <TabContent value="drafts">
            <p>You have 3 draft messages.</p>
          </TabContent>
          <TabContent value="sent">
            <p>View your sent messages.</p>
          </TabContent>
        </TabRoot>
      </div>

      {/* Horizontal Direction */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Horizontal Layout
        </h3>
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
              <h4 className="font-semibold text-neutral-800 mb-2">
                Team Management
              </h4>
              <p>
                Manage your team members, roles, and permissions. Add new
                members or update existing ones.
              </p>
            </TabContent>
            <TabContent value="analytics">
              <h4 className="font-semibold text-neutral-800 mb-2">
                Team Analytics
              </h4>
              <p>
                View team performance metrics, activity logs, and productivity
                insights.
              </p>
            </TabContent>
            <TabContent value="settings">
              <h4 className="font-semibold text-neutral-800 mb-2">
                Team Settings
              </h4>
              <p>
                Configure team-wide settings, notifications, and integrations.
              </p>
            </TabContent>
          </div>
        </TabRoot>
      </div>
    </div>
  );
}
