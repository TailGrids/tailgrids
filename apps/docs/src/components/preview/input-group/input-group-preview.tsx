import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";
import { Copy4, Link1AngularRight } from "@tailgrids/icons";

export default function InputGroupPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 p-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Link1AngularRight className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput defaultValue="https://tailgrids.com/docs" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy link">
            <Copy4 className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
