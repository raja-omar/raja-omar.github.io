import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-10 pb-6">
      <ul className="flex flex-row gap-5">
        <li>
          <a
            href="https://github.com/raja-omar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={28}
              height={28}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/raja-omar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
