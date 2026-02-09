import { Progress } from "@/registry/core/progress";

export default function ProgressCustomPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress
        progress={65}
        className="h-4 rounded-lg px-1.5 bg-background-soft-100 dark:bg-background-soft-200"
      />
    </div>
  );
}
