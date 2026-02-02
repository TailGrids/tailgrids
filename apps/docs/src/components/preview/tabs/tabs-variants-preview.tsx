import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";

export default function TabsVariantsPreview() {
  return (
    <div className="w-full">
      <TabRoot defaultValue="home" variant="minimal">
        <TabList>
          <TabTrigger value="home">Home</TabTrigger>
          <TabTrigger value="profile">Profile</TabTrigger>
          <TabTrigger value="messages">Messages</TabTrigger>
        </TabList>
        <TabContent value="home">
          <p className="text-neutral-600">
            Welcome to your home dashboard. Here you can see recent activities.
          </p>
        </TabContent>
        <TabContent value="profile">
          <p className="text-neutral-600">
            Manage your personal information and profile settings here.
          </p>
        </TabContent>
        <TabContent value="messages">
          <p className="text-neutral-600">
            Check your inbox for new messages and notifications.
          </p>
        </TabContent>
      </TabRoot>
    </div>
  );
}
