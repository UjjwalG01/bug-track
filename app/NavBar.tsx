"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SiBugsnag } from "react-icons/si";
import classNames from "classnames";

const NavBar = () => {
  let currentPath: string = usePathname();
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
            className={classNames({
              "text-zinc-800": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors text-lg": true,
            })}
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
