import { Input } from "@/registry/core/input";

export default function InputStatesPreview() {
  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-4">
      <Input label="Email" state="success" placeholder="email@example.com" />

      <Input
        label="Email"
        state="error"
        placeholder="email@example.com"
        hint="Please enter a valid email address"
      />

      <Input label="Disabled" disabled placeholder="Disabled input" />
    </div>
  );
}
