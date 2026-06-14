import { Button } from "@/registry/core/button";
import { RefreshCircle1Clockwise } from "@tailgrids/icons";

export default function ButtonDisabledPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>Disabled Button</Button>

      <Button disabled pending>
        <RefreshCircle1Clockwise className="animate-spin" />
        Saving...
      </Button>
    </div>
  );
}
