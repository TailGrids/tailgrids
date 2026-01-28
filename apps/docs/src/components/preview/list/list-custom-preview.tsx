import { List } from "@/registry/core/list";
import { Bell1, Gear1, Home, Message1, User2 } from "@tailgrids/icons";

export default function ListCustomPreview() {
  return (
    <div className="flex flex-col gap-6">
      <List>
        <li>
          <Message1 className="size-5" />
          Messages
          <span data-type="count">12</span>
        </li>
        <li data-active="true">
          <Bell1 className="size-5" />
          Notifications
          <span data-type="count">5</span>
        </li>
        <li>
          <Gear1 className="size-5" />
          Settings
        </li>
      </List>

      <List direction="horizontal" hideDividers>
        <li>
          <Home className="size-5" />
          Home
        </li>
        <li data-active="true">
          <User2 className="size-5" />
          Profile
        </li>
        <li>
          <Gear1 className="size-5" />
          Settings
        </li>
      </List>
    </div>
  );
}
