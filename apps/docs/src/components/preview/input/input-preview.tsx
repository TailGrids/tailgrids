import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function InputPreview() {
  const id = useId();

  return (
    <div className="max-w-sm w-full mx-auto grid gap-2">
      <Label htmlFor={id}>Email</Label>
      <Input id={id} placeholder="Enter your email" />
    </div>
  );
}
