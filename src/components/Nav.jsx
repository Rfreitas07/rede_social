'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


const Nav = () => {
  const pathname = usePathname();
    return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname ==="/" ? "active" : ""}`} href="/">HOME</Link>
        </li>
        <li>
          <Link className={`link ${pathname ==="/sobre" ? "active" : ""}`}href="/sobre">SOBRE</Link>
        </li>
        <li>
          <Link className={`link ${pathname ==="/posts" ? "active" : ""}`}href="/posts">POSTS</Link>
        </li>
        <li>
          <Link className={`link ${pathname ==="/dashboard" ? "active" : ""}`}href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
