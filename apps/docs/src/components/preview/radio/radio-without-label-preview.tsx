import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";

export default function RadioWithoutLabelPreview() {
  return (
    <div className="flex items-center gap-3">
      <Label id="" aria-label="Option 1" className="cursor-pointer">
        <RadioInput name="option" value="1" size="sm" />
      </Label>
      <Label aria-label="Option 2" className="cursor-pointer">
        <RadioInput name="option" value="2" size="md" />
      </Label>
    </div>
  );
}
