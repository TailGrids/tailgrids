import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { useId } from "react";

export default function InputStatesPreview() {
  const successId = useId();
  const errorId = useId();
  const disabledId = useId();

  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor={successId}>Email</Label>
        <Input id={successId} state="success" placeholder="email@example.com" />
        <p className="text-sm text-input-success">Email is valid</p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor={errorId}>Email</Label>
        <Input id={errorId} state="error" placeholder="email@example.com" />
        <p className="text-sm text-input-error">
          Please enter a valid email address
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor={disabledId}>Disabled</Label>
        <Input id={disabledId} disabled placeholder="Disabled input" />
      </div>
    </div>
  );
}
