import { Label } from "@/registry/core/label";
import { TextArea } from "@/registry/core/text-area";

export default function LabelTextAreaPreview() {
  return (
    <div className="max-w-sm w-full mx-auto p-8">
      <div className="grid grid-cols-1 gap-2">
        <Label htmlFor="message">Your Message</Label>
        <TextArea id="message" placeholder="Type your message here..." />
      </div>
    </div>
  );
}
