import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
  AvatarStatus
} from "@/registry/core/avatar";
import { List } from "@/registry/core/list";

const users = [
  {
    name: "Musharof Chowdhury",
    email: "chowdhury@pimjo.com",
    avatar: "/docs/images/avatar/avatar-1.webp",
    status: "online"
  },
  {
    name: "Johurul Haque",
    email: "haque@pimjo.com",
    avatar: "/docs/images/avatar/avatar-2.webp",
    status: "busy"
  },
  {
    name: "Niaj Morshed",
    email: "morshed@pimjo.com",
    avatar: "/docs/images/avatar/avatar-3.webp",
    status: "offline"
  },
  {
    name: "Ahmed Tusar",
    email: "tusar@pimjo.com",
    avatar: "/docs/images/avatar/avatar-4.webp",
    status: "online"
  }
] as const;

export default function ListUsersPreview() {
  return (
    <List className="max-w-70">
      {users.map((user, index) => (
        <li key={index}>
          <figure className="flex justify-start items-center gap-2 w-full">
            <Avatar size="md">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              <AvatarBadge status={user.status as AvatarStatus} />
            </Avatar>
            <figcaption>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </List>
  );
}
