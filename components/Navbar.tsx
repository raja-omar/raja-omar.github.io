"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition-all duration-200 underline-offset-4 decoration-myblue decoration-[1.5px] ${
      pathname === path
        ? "text-myblue underline"
        : "text-neutral-700 hover:underline hover:text-myblue"
    }`;

  return (
    <ul className="flex flex-row sm:flex-col justify-start sm:justify-end gap-3 sm:gap-1">
      <li className="sm:text-right">
        <Link href="/" className={linkClass("/")}>
          About
        </Link>
      </li>
      <li className="sm:text-right">
        <Link href="/experience" className={linkClass("/experience")}>
          Experience
        </Link>
      </li>
      <li className="sm:text-right">
        <a
          href="mailto:raja.omar@ucalgary.ca"
          className="transition-all duration-200 underline-offset-4 decoration-myblue decoration-[1.5px] text-neutral-700 hover:underline hover:text-myblue"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
