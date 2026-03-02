import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";

export default function RadioSizesPreview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Label className="group flex cursor-pointer items-center gap-3 select-none">
        <RadioInput size="sm" name="size" value="sm" />
        <span>Small radio</span>
      </Label>
      <Label className="group flex cursor-pointer items-center gap-3 select-none">
        <RadioInput size="md" name="size" value="md" />
        <span>Medium radio</span>
      </Label>
    </div>
  );
}
