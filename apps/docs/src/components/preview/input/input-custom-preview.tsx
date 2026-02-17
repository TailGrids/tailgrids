import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function InputCustomPreview() {
  const id = useId();

  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label htmlFor={id}>Custom Style</Label>
      <Input
        id={id}
        placeholder="Type something..."
        className="border-badge-blue-icon-color focus:border-badge-blue-icon-color focus:ring-badge-blue-icon-color/20 rounded-full bg-badge-blue-background"
      />
    </div>
  );
}
