import { Button } from "@/components/ui/button";
import Heading from "./_components/heading";
import { Heroes } from "./_components/heroes";
import Image from "next/image";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const LandingPage = () => {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-10 text-center">
        <Heading />
        <Heroes />
      </div>
    </div>
  );
};

export default LandingPage;
