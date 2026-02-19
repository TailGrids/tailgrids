import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function InputWithHintPreview() {
  const id = useId();

  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label htmlFor={id}>Username</Label>
      <Input id={id} placeholder="Choose a username" />
      <p className="text-sm text-text-50">Must be 3-20 characters long</p>
    </div>
  );
}
