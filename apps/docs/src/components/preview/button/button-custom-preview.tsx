import { Button } from "@/registry/core/button";
import { RefreshCircle1Clockwise } from "@tailgrids/icons";

export default function ButtonCustomPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>
        <RefreshCircle1Clockwise className="animate-spin" />
        Saving...
      </Button>

      <Button className="bg-badge-cyan-icon-color hover:bg-badge-cyan-text focus:ring-badge-cyan-background text-white-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        Custom Design
      </Button>
    </div>
  );
}
