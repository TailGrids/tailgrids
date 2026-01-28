import { Input } from "@/registry/core/input";

export default function InputCustomPreview() {
  return (
    <Input
      label="Custom Style"
      placeholder="Type something..."
      className="border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-full bg-indigo-50/50"
    />
  );
}
