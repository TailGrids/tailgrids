import { List } from "@/registry/core/list";

export default function ListWithActiveStatePreview() {
  return (
    <List>
      <li>Dashboard</li>
      <li data-active="true">Settings</li>
      <li>Profile</li>
    </List>
  );
}
