export default function Footer() {
  return (
    <footer className="pt-10 pb-6">
      <ul className="flex flex-row gap-5">
        <li>
          <a
            href="https://github.com/raja-omar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-myblue transition-colors duration-200"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/raja-omar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-myblue transition-colors duration-200"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
