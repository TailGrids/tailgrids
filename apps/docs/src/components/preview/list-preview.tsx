import { List } from "@/registry/core/list";
import { Home, Settings, User, Logout } from "@tailgrids/icons";

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
          <Settings className="size-5" />
          Settings
        </li>
        <li>
          <User className="size-5" />
          Profile
        </li>
        <li>
          <Logout className="size-5" />
          Logout
        </li>
      </List>
    </div>
  );
}
