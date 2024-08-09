"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <nav className="flex w-full items-center bg-background p-6">
      <Image
        src="/notion.svg"
        height="30"
        width="30"
        alt="logo"
        className="hidden md:block"
      />

      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner/>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"sm"}>
                Login
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button size={"sm"}>Get Notion free</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
