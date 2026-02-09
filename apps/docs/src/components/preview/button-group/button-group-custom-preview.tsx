import { ButtonGroup } from "@/registry/core/button-group";

export default function ButtonGroupCustomPreview() {
  return (
    <ButtonGroup className="bg-badge-orange-background text-badge-orange-text [&>button]:border-badge-orange-icon-color [&>button]:hover:bg-badge-orange-icon-color">
      <button>Custom</button>
      <button>Style</button>
      <button>Group</button>
    </ButtonGroup>
  );
}
