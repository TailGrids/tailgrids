import { ButtonGroup } from "@/registry/core/button-group";

export default function ButtonGroupCustomPreview() {
  return (
    <ButtonGroup className="divide-orange-200 border-orange-200 bg-orange-50 text-orange-900 [&>button]:border-orange-200 [&>button]:hover:bg-orange-100">
      <button>Custom</button>
      <button>Style</button>
      <button>Group</button>
    </ButtonGroup>
  );
}
