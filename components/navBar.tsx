"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: string }) {
  console.log(usePathname());
  return (
    <Link
      href={href}
      className={`text-background hover:text-df-accent tracking-widest ${usePathname() == href ? "underline" : ""}`}
    >
      {children}
    </Link>
  );
}

export function NavBar() {
  return (
    <>
      <div className="bg-df-shade-lighter fixed z-1 flex w-full justify-around p-[10px]">
        <NavLink href="">PHYS S-12 2025</NavLink>
        <div className="flex justify-center gap-5">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
        </div>
      </div>
      <div className="block h-[50px] w-full"></div>
    </>
  );
}
