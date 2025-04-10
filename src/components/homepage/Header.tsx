
import React from "react";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[25px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1200px] items-center gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/ef665630-311e-43ec-a354-747f7147a7b1.png"
            className="h-10 mr-2"
            alt="Tribastion Logo"
          />
          <span className="text-2xl font-bold">Tribastion</span>
        </div>
        <nav className="flex items-center gap-[40px] text-lg text-[rgba(35,31,32,1)] font-normal flex-wrap my-auto max-md:max-w-full">
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
      </div>
    </header>
  );
};
