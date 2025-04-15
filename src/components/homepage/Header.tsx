import React from "react";
import { Menu, Search } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const shouldUseCompactNav = isMobile || isTablet;

  const NavLinks = () => (
    <nav className="flex items-center gap-[40px] text-lg text-[rgba(35,31,32,1)] font-normal flex-wrap my-auto max-lg:flex-col max-lg:items-start max-lg:gap-6">
      <a 
        href="#about" 
        className="self-stretch my-auto text-[rgba(35,31,32,1)] transition-colors duration-300 hover:text-[#EB008B]"
      >
        About Us
      </a>
      <a 
        href="#services" 
        className="self-stretch my-auto text-[rgba(35,31,32,1)] transition-colors duration-300 hover:text-[#EB008B]"
      >
        Services
      </a>
      <a 
        href="#solutions" 
        className="self-stretch my-auto text-[rgba(35,31,32,1)] transition-colors duration-300 hover:text-[#EB008B]"
      >
        Solutions
      </a>
      <a 
        href="#careers" 
        className="self-stretch my-auto text-[rgba(35,31,32,1)] transition-colors duration-300 hover:text-[#EB008B]"
      >
        Careers
      </a>
      <a 
        href="#insights" 
        className="self-stretch my-auto text-[rgba(35,31,32,1)] transition-colors duration-300 hover:text-[#EB008B]"
      >
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
          <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 mr-2">
            <path d="M24.9008 1.5V3.4L27.1008 4H18.8008V0H12.7008V4.1H4.30078L6.50078 3.5V1.5H0.300781V31.9L15.7008 40L31.0008 31.9V1.5H24.9008ZM2.80078 23.9L9.60078 20L4.30078 17L5.40078 11.7L13.2008 16.2L17.5008 18.7L19.8008 20L15.5008 22.5L13.2008 23.8L6.90078 27.5L2.80078 23.9ZM25.0008 28.9L18.3008 25V31.1L13.2008 32.8V25.5L20.8008 20.6L26.1008 23.7L25.0008 28.9ZM20.7008 19.4L13.1008 14.5V8.9L18.2008 7.2V15L23.5008 12L27.5008 15.6L20.7008 19.4Z" fill="url(#paint0_linear_31479_5733)"/>
            <defs>
              <linearGradient id="paint0_linear_31479_5733" x1="32.2063" y1="45.8247" x2="11.2957" y2="8.972" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EC008C"/>
                <stop offset="1" stopColor="#A3238E"/>
              </linearGradient>
            </defs>
          </svg>
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
        ) : isTablet ? (
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="pt-10 flex flex-col gap-6">
                <NavLinks />
                <ActionButtons />
              </div>
            </SheetContent>
          </Sheet>
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
