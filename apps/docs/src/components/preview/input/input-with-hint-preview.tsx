import { Input } from "@/registry/core/input";

export default function InputWithHintPreview() {
  return (
    <Input
      label="Username"
      placeholder="Choose a username"
      hint="Must be 3-20 characters long"
    />
  );
}
