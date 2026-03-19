"use client";

import Link from "next/link";
import Image from "next/image";
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
      <li className="sm:text-right">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-all duration-200 underline-offset-4 decoration-myblue decoration-[1.5px] text-mygray hover:underline hover:text-myblue group"
        >
          Resume
          <Image
            src="/resume.svg"
            alt=""
            width={16}
            height={16}
            className="opacity-40 group-hover:opacity-100 transition-opacity duration-200"
          />
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
