"use client";

import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utilis/cn";
import Link from "next/link";

 

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
       <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 bg-white rounded-4xl",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
        </Menu>


        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <Link href="/component/viewall">All Courses</Link>
              <Link href="/basictheory">Basic Music Theory</Link>
              <Link href="/advance">Advance Composition</Link>
              <Link href="/component/viewall">Music Production</Link>
            </div>

          </MenuItem>
        </Menu>

        <Menu setActive={setActive}>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;

