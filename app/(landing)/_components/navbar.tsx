import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center bg-background p-6">
      <Image
        src="/notion.svg"
        height="30"
        width="30"
        alt="logo"
        className="hidden md:block"
      />

      <div className="flex w-full md:ml-auto md:justify-end">
        {/* Login */}
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
