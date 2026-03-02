import { Label } from "@/registry/core/label";
import { RadioInput } from "@/registry/core/radio-input";
import { cn } from "@/utils/cn";

export default function RadioCustomPreview() {
  const options = [
    { label: "Personal License", value: "personal", defaultChecked: true },
    { label: "Business License", value: "business" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {options.map(option => (
        <Label
          key={option.value}
          className={cn(
            "group flex cursor-pointer items-center gap-3 select-none rounded-lg border border-(--border-color-base-100) bg-background-50 p-4 transition-colors hover:bg-background-soft-50 has-checked:border-primary-500 has-checked:bg-primary-50 dark:border-foreground-soft-200 dark:bg-foreground-50 dark:hover:bg-foreground-soft-100 dark:has-checked:bg-primary-900/20"
          )}
        >
          <RadioInput
            name="custom"
            value={option.value}
            defaultChecked={option.defaultChecked}
          />
          <span>{option.label}</span>
        </Label>
      ))}
    </div>
  );
}
