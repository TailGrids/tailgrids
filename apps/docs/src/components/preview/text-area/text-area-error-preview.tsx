import { TextArea } from "@/registry/core/text-area";

export default function TextAreaErrorPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea
        label="Feedback"
        state="error"
        hint="Feedback cannot be empty."
        placeholder="Enter feedback..."
        className="max-w-md"
      />
    </div>
  );
}
