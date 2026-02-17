import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function InputWithLabelPreview() {
  const id = useId();

  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label htmlFor={id}>Full Name</Label>
      <Input id={id} placeholder="John Doe" />
    </div>
  );
}
