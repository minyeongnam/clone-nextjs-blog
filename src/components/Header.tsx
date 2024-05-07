import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link href="/">Blog</Link>
      </h1>
      <nav className="gnb">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
