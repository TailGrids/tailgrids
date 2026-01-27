import { ButtonGroup } from "@/registry/core/button-group";

export default function ButtonGroupSizesPreview() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ButtonGroup size="sm">
        <button>Copy</button>
        <button>Paste</button>
      </ButtonGroup>

      <ButtonGroup size="md">
        <button>Copy</button>
        <button>Paste</button>
      </ButtonGroup>

      <ButtonGroup size="lg">
        <button>Copy</button>
        <button>Paste</button>
      </ButtonGroup>
    </div>
  );
}
