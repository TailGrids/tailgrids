import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";

export default function RadioDisabledPreview() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="group flex cursor-pointer items-center gap-3 select-none aria-disabled:pointer-events-none">
        <RadioInput name="disabled-radio-input" value="disabled" disabled />
        <span className="text-text-200">Disabled option</span>
      </Label>

      <Label className="group flex cursor-pointer items-center gap-3 select-none aria-disabled:pointer-events-none">
        <RadioInput
          name="disabled-radio-input"
          value="checked"
          disabled
          defaultChecked
        />
        <span className="text-text-200">Disabled checked</span>
      </Label>
    </div>
  );
}
