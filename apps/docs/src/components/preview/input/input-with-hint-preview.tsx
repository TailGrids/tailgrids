import { Input } from "@/registry/core/input";

export default function InputWithHintPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <Input
        label="Username"
        placeholder="Choose a username"
        hint="Must be 3-20 characters long"
      />
    </div>
  );
}
