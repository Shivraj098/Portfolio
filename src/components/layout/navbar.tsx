"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Writing",
    href: "/blog",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b border-white/5",
        "bg-black/20 backdrop-blur-xl"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between container-padding">
        <Link
          href="/"
          className="relative text-sm text-white/60 transition-all duration-300 hover:text-white after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Shivraj
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-white/60 transition-all duration-300 hover:text-white after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}