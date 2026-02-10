import { Input } from "@/registry/core/input";

export default function InputCustomPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <Input
        label="Custom Style"
        placeholder="Type something..."
        className="border-badge-blue-icon-color focus:border-badge-blue-icon-color focus:ring-badge-blue-icon-color/20 rounded-full bg-badge-blue-background"
      />
    </div>
  );
}
