import { Description } from "@/registry/core/description";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function InputUncontrolledPreview() {
  return (
    <TextField
      className="max-w-sm w-full mx-auto grid gap-2"
      defaultValue="Tailgrids UI is awesome"
    >
      <Label>Uncontrolled Input</Label>
      <Input placeholder="Start typing..." />
      <Description className="text-sm text-text-50">
        Must be 3-20 characters long
      </Description>
    </TextField>
  );
}
