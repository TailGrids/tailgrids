import { Progress } from "@/registry/core/progress";

export default function ProgressBasicPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress progress={30} />
    </div>
  );
}
