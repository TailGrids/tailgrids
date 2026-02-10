"use client";

import { Badge } from "@/registry/core/badge";
import { Input } from "@/registry/core/input";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";
import { MoreHorizontal, Search } from "lucide-react";

const DATA = [
  {
    id: 1,
    name: "Bought PYPL",
    date: "Nov 23, 01:00 PM",
    price: "$2,567.88",
    category: "Finance",
    status: "Success",
    icon: "P",
    iconColor: "bg-primary-600"
  },
  {
    id: 2,
    name: "Bought AAPL",
    date: "Nov 22, 09:00 PM",
    price: "$3,987.45",
    category: "Technology",
    status: "Failed",
    icon: "A",
    iconColor: "bg-black"
  },
  {
    id: 3,
    name: "Sell KKST",
    date: "Oct 12, 03:54 PM",
    price: "$6,754.99",
    category: "Finance",
    status: "Success",
    icon: "K",
    iconColor: "bg-success-500"
  },
  {
    id: 4,
    name: "Bought FB",
    date: "Sep 09, 02:00 AM",
    price: "$1,445.41",
    category: "Social media",
    status: "Pending",
    icon: "f",
    iconColor: "bg-primary-500"
  },
  {
    id: 5,
    name: "Sell AMZN",
    date: "Feb 05, 08:00 PM",
    price: "$5,698.55",
    category: "E-commerce",
    status: "Success",
    icon: "a",
    iconColor: "bg-warning-500"
  }
];

export default function TableTransactionsPreview() {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-title-50">
          Latest Transactions
        </h3>
        <div className="flex gap-2">
          <div className="relative">
            <Input
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 text-sm w-48 sm:w-64"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-200" />
          </div>
        </div>
      </div>

      <TableRoot className="mb-1">
        <TableHeader>
          <TableRow className="bg-background-soft-50 border-none">
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-10"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow
              key={item.id}
              className="text-sm border-b border-(--border-color-base-50) last:border-none"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${item.iconColor}`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium text-title-50 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-xs -tracking-[0.2px] text-text-100 whitespace-nowrap">
                {item.date}
              </TableCell>

              <TableCell className="font-semibold text-text-100 -tracking-[0.2px] whitespace-nowrap">
                {item.price}
              </TableCell>

              <TableCell className="text-text-50 whitespace-nowrap">
                {item.category}
              </TableCell>

              <TableCell>
                <Badge
                  color={
                    item.status === "Success"
                      ? "success"
                      : item.status === "Failed"
                        ? "error"
                        : "warning"
                  }
                  prefixIcon={
                    <span
                      className={`size-1.5 rounded-full ${
                        item.status === "Success"
                          ? "bg-success-500"
                          : item.status === "Failed"
                            ? "bg-error-500"
                            : "bg-warning-500"
                      }`}
                    />
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>

              <TableCell>
                <button className="text-text-200 hover:text-text-100">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
}
