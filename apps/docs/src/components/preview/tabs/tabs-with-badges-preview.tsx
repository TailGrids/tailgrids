import { TabContent, TabList, TabRoot, TabTrigger } from "@/registry/core/tabs";
import { Envelope1, PenToSquare, Send4 } from "@tailgrids/icons";

export default function TabsWithBadgesPreview() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <TabRoot defaultValue="inbox" variant="minimal">
        <TabList>
          <TabTrigger value="inbox" icon={<Envelope1 />} badge={12}>
            Inbox
          </TabTrigger>
          <TabTrigger value="drafts" icon={<PenToSquare />} badge={3}>
            Drafts
          </TabTrigger>
          <TabTrigger value="sent" icon={<Send4 />}>
            Sent
          </TabTrigger>
        </TabList>
        <TabContent value="inbox">
          <p className="text-text-100">
            You have 12 new messages in your inbox.
          </p>
        </TabContent>
        <TabContent value="drafts">
          <p className="text-text-100">
            You have 3 draft messages waiting to be sent.
          </p>
        </TabContent>
        <TabContent value="sent">
          <p className="text-text-100">
            View history of all messages you have previously sent.
          </p>
        </TabContent>
      </TabRoot>
    </div>
  );
}
