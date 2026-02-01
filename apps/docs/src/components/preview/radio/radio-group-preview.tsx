import { RadioInput } from "@/registry/core/radio-input";

export default function RadioGroupPreview() {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">Select a plan</legend>
      <div className="flex flex-col gap-3">
        <RadioInput name="group-plan" label="Basic - $9/month" value="basic" />
        <RadioInput name="group-plan" label="Pro - $29/month" value="pro" />
        <RadioInput
          name="group-plan"
          label="Enterprise - $99/month"
          value="enterprise"
        />
      </div>
    </fieldset>
  );
}
