import { RadioInput } from "@/registry/core/radio-input";

export default function RadioCustomPreview() {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        name="custom"
        value="personal"
        label="Personal License"
        defaultChecked
        className="rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 has-checked:border-primary-500 has-checked:bg-primary-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:has-checked:bg-primary-900/20"
      />
      <RadioInput
        name="custom"
        value="business"
        label="Business License"
        className="rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 has-checked:border-primary-500 has-checked:bg-primary-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:has-checked:bg-primary-900/20"
      />
    </div>
  );
}
