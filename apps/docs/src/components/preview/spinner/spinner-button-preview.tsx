import { Button } from "@/registry/core/button";
import { Spinner } from "@/registry/core/spinner";

export default function SpinnerButtonPreview() {
  return (
    <Button disabled>
      <Spinner size="sm" />
      Loading...
    </Button>
  );
}
