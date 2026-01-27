import { ButtonGroup } from "@/registry/core/button-group";

export default function ButtonGroupVariantsPreview() {
  return (
    <div className="flex flex-col gap-5">
      <ButtonGroup variant="primary">
        <button>8oz</button>
        <button>10oz</button>
        <button>12oz</button>
      </ButtonGroup>

      <ButtonGroup variant="secondary">
        <button>8oz</button>
        <button>10oz</button>
        <button>12oz</button>
      </ButtonGroup>
    </div>
  );
}
