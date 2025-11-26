import { TextArea } from "@/registry/core/text-area";

export default function TextAreaPreview() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <TextArea label="Message" placeholder="Write something..." />

      <TextArea
        label="Bio"
        hint="Tell us a little about yourself."
        placeholder="Your bio..."
      />

      <TextArea
        label="Feedback"
        state="error"
        hint="Feedback cannot be empty."
        placeholder="Enter feedback..."
      />

      <TextArea
        label="Description"
        state="success"
        hint="Looks good!"
        placeholder="Enter a short description..."
      />

      <TextArea label="Notes" disabled placeholder="Disabled textarea..." />
    </div>
  );
}
