import { Badge } from "@/registry/core/badge";

export default function BadgeColors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge color="primary">Primary</Badge>
      <Badge color="gray">Gray</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="cyan">Cyan</Badge>
      <Badge color="sky">Sky</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="violet">Violet</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="rose">Rose</Badge>
      <Badge color="orange">Orange</Badge>
    </div>
  );
}
