"use client";

import { Avatar } from "@/registry/core/avatar";
import { Badge } from "@/registry/core/badge";
import { Checkbox } from "@/registry/core/checkbox";
import { Pagination } from "@/registry/core/pagination";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";
import { cn } from "@/utils/cn";
import { ArrowUpDown, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

const DATA = [
  {
    id: 1,
    name: "Musharof Chowdhury",
    email: "chowdhury@pimjo.com",
    role: "Admin",
    status: "Active",
    joinedDate: "2024-11-23",
    avatar: "/docs/images/avatar/avatar-1.webp"
  },
  {
    id: 2,
    name: "Joe Robertson",
    email: "joe@gmail.com",
    role: "Editor",
    status: "Active",
    joinedDate: "2023-08-15",
    avatar: "/docs/images/avatar/avatar-2.webp"
  },
  {
    id: 3,
    name: "Marcus Tan",
    email: "marcus@email.com",
    role: "Viewer",
    status: "Suspended",
    joinedDate: "2024-01-09",
    avatar: "/docs/images/avatar/avatar-3.webp",
    checked: true
  },
  {
    id: 4,
    name: "Mac Miller",
    email: "mac@email.com",
    role: "Admin",
    status: "Inactive",
    joinedDate: "2023-12-03",
    avatar: "/docs/images/avatar/avatar-4.webp"
  }
];

export default function TableUserManagementPreview() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-title-50">User Management</h3>
        <div className="flex gap-2">
          <input
            placeholder="Search..."
            className="border rounded px-3 py-1.5 text-sm w-full sm:w-64"
          />
          <button className="border rounded px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-background-soft-50">
            Filter
          </button>
        </div>
      </div>

      <TableRoot className="mb-1">
        <TableHeader>
          <TableRow className="bg-background-soft-50">
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>
              <div className="flex items-center gap-1 cursor-pointer hover:text-title-50">
                Role <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1 cursor-pointer hover:text-title-50">
                Status <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>Joined Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow
              key={item.id}
              className={cn("text-sm", item.checked ? "bg-primary-50/50" : "")}
            >
              <TableCell>
                <Checkbox checked={item.checked} />
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    src={item.avatar}
                    fallback={item.name.charAt(0)}
                  />
                  <span className="font-medium text-title-50 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-text-100 whitespace-nowrap">
                {item.email}
              </TableCell>

              <TableCell>
                <Badge
                  color={
                    item.role === "Admin"
                      ? "purple"
                      : item.role === "Editor"
                        ? "blue"
                        : item.role === "Viewer"
                          ? "orange"
                          : "gray"
                  }
                >
                  {item.role}
                </Badge>
              </TableCell>

              <TableCell>
                <Badge
                  color={
                    item.status === "Active"
                      ? "success"
                      : item.status === "Suspended"
                        ? "error"
                        : item.status === "Pending"
                          ? "warning"
                          : "gray"
                  }
                  prefixIcon={
                    <span
                      className={`size-1.5 rounded-full ${
                        item.status === "Active"
                          ? "bg-success-500"
                          : item.status === "Suspended"
                            ? "bg-error-500"
                            : item.status === "Pending"
                              ? "bg-warning-500"
                              : "bg-text-200"
                      }`}
                    />
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>

              <TableCell className="text-xs -tracking-[0.2px] text-text-100 whitespace-nowrap">
                {item.joinedDate}
              </TableCell>

              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1 rounded text-text-100 hover:text-text-50">
                    <Edit2 className="size-3" />
                  </button>
                  <button className="p-1 rounded text-text-100 hover:text-error-600">
                    <Trash2 className="size-3" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <div className="mt-4 w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          sideLayout="label"
        />
      </div>
    </div>
  );
}
