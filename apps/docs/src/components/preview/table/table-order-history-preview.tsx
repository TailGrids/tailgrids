"use client";

import { Badge } from "@/registry/core/badge";
import { Pagination } from "@/registry/core/pagination";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import { useState } from "react";

const DATA = [
  {
    id: "#ORD-10245",
    customer: "Musharof Chowdhury",
    product: "Noise Buds Pro",
    amount: "$79.99",
    status: "Shipped",
    date: "2025-03-11"
  },
  {
    id: "#ORD-10246",
    customer: "Johurul Haque",
    product: "MacBook Air M2",
    amount: "$1,199",
    status: "Pending",
    date: "2025-03-18"
  },
  {
    id: "#ORD-10247",
    customer: "Ahmed Faisal",
    product: "Dell XPS 13",
    amount: "$999",
    status: "Cancelled",
    date: "2025-02-27"
  },
  {
    id: "#ORD-10248",
    customer: "Ahmed Tusar",
    product: "Apple Watch SE",
    amount: "$249",
    status: "Shipped",
    date: "2025-04-01"
  }
];

export default function TableOrderHistoryPreview() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Navigating to page ${page}`);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-title-50">Order History</h3>
          <p className="text-sm text-text-100 mt-1">
            Review all your past purchases in one convenient place.
          </p>
        </div>
        <button className="p-2 hover:bg-background-soft-100 rounded-full">
          <MoreVertical className="h-5 w-5 text-text-100" />
        </button>
      </div>

      <TableRoot fullBleed className="mb-1">
        <TableHeader>
          <TableRow className="border-b border-(--border-color-base-100)">
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>
              <div className="flex items-center gap-1 cursor-pointer hover:text-title-50">
                Status <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap hover:text-title-50">
                Order Date <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.id} className="text-sm">
              <TableCell className="font-medium text-title-50 whitespace-nowrap">
                {item.id}
              </TableCell>
              <TableCell className="whitespace-nowrap text-text-100">
                {item.customer}
              </TableCell>
              <TableCell className="text-text-50 whitespace-nowrap">
                {item.product}
              </TableCell>
              <TableCell className="font-semibold text-text-100 -tracking-[0.2px] whitespace-nowrap">
                {item.amount}
              </TableCell>

              <TableCell>
                <Badge
                  color={
                    item.status === "Shipped"
                      ? "success"
                      : item.status === "Cancelled"
                        ? "error"
                        : "warning"
                  }
                  prefixIcon={
                    <span
                      className={`size-1.5 rounded-full ${
                        item.status === "Shipped"
                          ? "bg-success-500"
                          : item.status === "Cancelled"
                            ? "bg-error-500"
                            : "bg-warning-500"
                      }`}
                    />
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>

              <TableCell className="whitespace-nowrap text-xs -tracking-[0.2px]">
                {item.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>

      <div className="w-full mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          sideLayout="full"
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
