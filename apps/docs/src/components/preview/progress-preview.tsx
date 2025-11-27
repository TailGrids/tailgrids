import { Progress } from "@/registry/core/progress";

export default function ProgressPreview() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <Progress progress={25} />
      <Progress progress={50} withLabel />
    </div>
  );
}
