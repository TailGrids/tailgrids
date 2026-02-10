import { Button } from "@/registry/core/button";

export default function ButtonAppearancesPreview() {
  return (
    <div className="space-y-10 lg:space-y-5">
      <div className="flex items-center justify-between gap-6 md:gap-11 flex-wrap">
        <p>Fill:</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" appearance="fill">
            Primary
          </Button>
          <Button variant="danger" appearance="fill">
            Danger
          </Button>
          <Button variant="success" appearance="fill">
            Success
          </Button>
          <Button variant="ghost" appearance="fill">
            Ghost
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 md:gap-11 flex-wrap">
        <p>Outline:</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" appearance="outline">
            Primary
          </Button>
          <Button variant="danger" appearance="outline">
            Danger
          </Button>
          <Button variant="success" appearance="outline">
            Success
          </Button>
          <Button variant="ghost" appearance="outline">
            Ghost
          </Button>
        </div>
      </div>
    </div>
  );
}
