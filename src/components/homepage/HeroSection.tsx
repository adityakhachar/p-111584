
import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex w-full flex-col overflow-hidden font-normal justify-center px-20 py-[136px] bg-[#F8FAFC] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      {/* Network graphic background dots and lines */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <div className="absolute right-0 top-0 h-full w-[50%]">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e60dda7e1e5de88b7cc5f19a8c69f7c4a52dd56c8c7ac0b7f4ccaac9be0a4a?apiKey=581d2e3a1ac94ba5a2716263bee2132b&" 
            alt="Network Graphic" 
            className="h-full w-full object-cover"
          />
        </div>
        {/* Add some scattered dots with pink color */}
        <div className="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[25%] top-[10%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[30%] top-[30%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[35%] top-[50%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
      </div>
      
      <div className="relative flex mb-[-29px] w-[486px] max-w-full flex-col max-md:mb-2.5">
        <BadgeWithIcon 
          icon="/lovable-uploads/ef665630-311e-43ec-a354-747f7147a7b1.png" 
          text="Cyber Security Solutions" 
        />
        <h1 className="text-[#231F20] text-[80px] self-stretch mt-[11px] leading-tight max-md:max-w-full max-md:text-[40px]">
          <span>Stop </span>
          <span className="font-extrabold">threats</span>
          <br />
          <span>before they</span>
          <br />
          <span className="font-extrabold">strike</span>
        </h1>
        <ButtonWithIcon
          text="Get Started"
          variant="primary"
          className="mt-[33px] w-fit"
        />
      </div>
    </section>
  );
};
