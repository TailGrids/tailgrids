import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";

export default function InputDisabledPreview() {
  return (
    <TextField disabled className="grid gap-2">
      <Label>Disabled</Label>
      <Input placeholder="Disabled input" />
    </TextField>
  );
}
