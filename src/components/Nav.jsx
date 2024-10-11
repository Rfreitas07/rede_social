'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


const Nav = () => {
  const pathname = usePathname();
    return (
    <nav>
      <ul className= "container mx-auto flex flex-row justify-between">
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
          <Link className={`link ${pathname ==="/exemplo?parametro=teste" ? "active" : ""}`}href="/exemplo?parametro=teste">PARÂMETRO</Link>
        </li>
        <li>
          <Link className={`link ${pathname ==="/dashboard" ? "active" : ""}`}href="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link className={`link ${pathname ==="/profile" ? "active" : ""}`}href="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
