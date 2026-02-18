"use client";

import { Avatar } from "@/registry/core/avatar";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger
} from "@/registry/core/combobox";

const users = [
  {
    id: 1,
    name: "Alice Freeman",
    email: "alice@example.com",
    avatar: "/docs/images/avatar/avatar-1.webp"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    avatar: "/docs/images/avatar/avatar-2.webp"
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    avatar: "/docs/images/avatar/avatar-3.webp"
  },
  {
    id: 4,
    name: "David Miller",
    email: "david@example.com",
    avatar: "/docs/images/avatar/avatar-4.webp"
  }
];

export default function ComboboxAvatarPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={users}>
        <ComboboxLabel>Select assigning user</ComboboxLabel>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Search users..." />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxContent>
          <ComboboxList>
            {users.map(user => (
              <ComboboxItem key={user.id} id={user.id} textValue={user.name}>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  fallback={user.name.charAt(0)}
                  label={{ title: user.name, subtitle: user.email }}
                />
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No users found</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
