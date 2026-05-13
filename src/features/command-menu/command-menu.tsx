"use client";

import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const items = [
  {
    label: "HirePilot",
    href: "#projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "GitHub",
    href: "https://github.com",
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key === "k"
      ) {
        e.preventDefault();

        setOpen((open) => !open);
      }
    }

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener(
        "keydown",
        down
      );
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
    >
      <CommandInput placeholder="Search portfolio..." />

      <CommandList>
        <CommandEmpty>
          No results found.
        </CommandEmpty>

        <CommandGroup heading="Navigation">
          {items.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => {
                window.location.href =
                  item.href;

                setOpen(false);
              }}
            >
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}