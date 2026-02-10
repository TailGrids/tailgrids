import { TextArea } from "@/registry/core/text-area";

export default function TextAreaSuccessPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea
        label="Description"
        state="success"
        hint="Looks good!"
        placeholder="Enter a short description..."
        className="max-w-md"
      />
    </div>
  );
}
