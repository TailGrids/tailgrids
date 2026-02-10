import { RadioInput } from "@/registry/core/radio-input";

export default function RadioCustomPreview() {
  return (
    <div className="flex flex-col gap-3">
      <RadioInput
        name="custom"
        value="personal"
        label="Personal License"
        defaultChecked
        className="rounded-lg border border-(--border-color-base-100) bg-background-50 p-4 transition-colors hover:bg-background-soft-50 has-checked:border-primary-500 has-checked:bg-primary-50 dark:border-foreground-soft-200 dark:bg-foreground-50 dark:hover:bg-foreground-soft-100 dark:has-checked:bg-primary-900/20"
      />
      <RadioInput
        name="custom"
        value="business"
        label="Business License"
        className="rounded-lg border border-(--border-color-base-100) bg-background-50 p-4 transition-colors hover:bg-background-soft-50 has-checked:border-primary-500 has-checked:bg-primary-50 dark:border-foreground-soft-200 dark:bg-foreground-50 dark:hover:bg-foreground-soft-100 dark:has-checked:bg-primary-900/20"
      />
    </div>
  );
}
