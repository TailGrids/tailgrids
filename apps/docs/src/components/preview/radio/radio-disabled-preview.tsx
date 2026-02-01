import { RadioInput } from "@/registry/core/radio-input";

export default function RadioDisabledPreview() {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        name="disabled"
        label="Disabled option"
        value="disabled"
        disabled
      />
      <RadioInput
        name="disabled-checked"
        label="Disabled checked"
        value="checked"
        disabled
        checked
      />
    </div>
  );
}
