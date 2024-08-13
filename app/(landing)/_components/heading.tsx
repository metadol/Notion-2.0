"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <header>
        <h1 className="text-3xl font-bold sm:text-5xl">
          Your Ideas, Documents & Plans Unified. Welcome to{" "}
          <span className="underline">Notion</span>
        </h1>
        <h2 className="text-base font-medium sm:text-xl md:text-2xl">
          Notion is the connected workspace where <br />
          better, faster work happens.
        </h2>
      </header>

      {isLoading ? (
        <div className="flex w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        <ButtonContent isAuthenticated={isAuthenticated} />
      )}
    </div>
  );
};

const ButtonContent = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? (
    <Button asChild>
      <a href="/documents">
        Enter Notion
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  ) : (
    <SignInButton mode="modal">
      <Button>
        Get Notion free
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </SignInButton>
  );
};

export default Heading;
