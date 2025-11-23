import React from "react";

export default function HeaderNav() {
  return (
    <nav className="hidden xl:flex ">
      <ul className="flex items-center gap-6">
        <li>
          <a
            href="#"
            target="_blank"
            className="text-sm hover:text-primary-500 dark:text-gray-400"
          >
            Components
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="text-sm hover:text-primary-500 dark:text-gray-400"
          >
            Templates
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="text-sm hover:text-primary-500 dark:text-gray-400  "
          >
            Figma
          </a>
        </li>
      </ul>
    </nav>
  );
}
