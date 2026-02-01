import { Progress } from "@/registry/core/progress";

export default function ProgressPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress progress={25} />
      <Progress progress={50} withLabel />
    </div>
  );
}
