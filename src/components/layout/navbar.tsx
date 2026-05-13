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
    href: "#blog",
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
          className="text-sm font-medium tracking-wide text-white"
        >
          Shivraj
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}