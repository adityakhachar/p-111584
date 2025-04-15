
import React from "react";
import { Menu, Search } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <nav className="flex items-center gap-[40px] text-lg text-[rgba(35,31,32,1)] font-normal flex-wrap my-auto max-md:flex-col max-md:items-start max-md:gap-6">
      <a href="#about" className="self-stretch my-auto hover:underline">
        About Us
      </a>
      <a href="#services" className="self-stretch my-auto hover:underline">
        Services
      </a>
      <a href="#solutions" className="self-stretch my-auto hover:underline">
        Solutions
      </a>
      <a href="#careers" className="self-stretch my-auto hover:underline">
        Careers
      </a>
      <a href="#insights" className="self-stretch my-auto hover:underline">
        Insights
      </a>
    </nav>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-4">
      <button className="rounded-full p-2 hover:bg-gray-100">
        <Search className="h-5 w-5" />
      </button>
      <a
        href="#contact"
        className="self-stretch text-[#C81F7B] border border-[#C81F7B] text-sm font-semibold px-[18px] py-3 rounded-[50px] hover:bg-pink-50"
      >
        Contact Us
      </a>
    </div>
  );

  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[25px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1200px] items-center gap-5 justify-between max-md:max-w-full">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/ef665630-311e-43ec-a354-747f7147a7b1.png"
            className="h-10 mr-2"
            alt="Tribastion Logo"
          />
          <span className="text-2xl font-bold">Tribastion</span>
        </div>

        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="px-6 py-6 flex flex-col gap-6">
                <NavLinks />
                <ActionButtons />
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <>
            <NavLinks />
            <ActionButtons />
          </>
        )}
      </div>
    </header>
  );
};
