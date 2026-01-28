import { List } from "@/registry/core/list";
import { Exit, Gear1, Home, User2 } from "@tailgrids/icons";

export default function ListPreview() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <List direction="horizontal">
        <li>Home</li>
        <li data-active="true">About</li>
        <li>Services</li>
        <li>Contact</li>
      </List>

      <List>
        <li>
          <Home className="size-5" />
          Dashboard
          <span data-type="count">3</span>
        </li>
        <li data-active="true">
          <Gear1 className="size-5" />
          Settings
        </li>
        <li>
          <User2 className="size-5" />
          Profile
        </li>
        <li>
          <Exit className="size-5" />
          Logout
        </li>
      </List>
    </div>
  );
}
