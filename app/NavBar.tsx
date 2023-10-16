import Link from "next/link";
import React from "react";
import { SiBugsnag } from "react-icons/si";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/bugs" },
  ];

  return (
    <nav className="flex space-x-8 h-20 items-center px-8 bg-slate-100 border-b">
      <Link className="" href={"/"}>
        <SiBugsnag className="text-3xl flex items-center" />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-400 hover:text-zinc-800 text-lg transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
