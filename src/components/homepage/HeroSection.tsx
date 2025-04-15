import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#F8FAFC] px-4 py-16 sm:px-10 md:px-20 md:py-24">
      {/* Content container */}
      <div className="relative z-20 w-full md:w-1/2 text-center md:text-left">
        {/* Your text content and button here */}
        <BadgeWithIcon 
          icon="/src/assets/images/tribback.svg" 
          text="Cyber Security Solutions"
          className="mx-auto md:mx-0 text-sm md:text-base scale-90 md:scale-100"
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
          className="mt-[33px] w-fit mx-auto md:mx-0"
        />
        
        {/* Mobile-only image */}
        <div className="mt-8 block md:hidden w-3/4 mx-auto">
          <img 
            src="/src/assets/images/tribback.svg" 
            alt="Network Graphic" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Desktop background image */}
      <div className="absolute inset-0 h-full w-full opacity-70 hidden md:block">
        <div className="absolute right-0 top-0 h-full w-[50%]">
          <img 
            src="/src/assets/images/tribback.svg" 
            alt="Network Graphic" 
            className="h-full w-full object-cover"
          />
        </div>
        {/* SVG background */}
        <svg width="986" height="681" viewBox="0 0 986 681" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
          <g opacity="0.7">
            <path d="M439.207 97.2193C440.241 97.4636 441.276 96.8238 441.521 95.7905C441.765 94.7567 441.125 93.7214 440.092 93.4771C439.059 93.2333 438.023 93.8731 437.779 94.906C437.534 95.9394 438.174 96.9751 439.207 97.2193Z" fill="url(#paint0_linear_31479_462)"/>
          </g>
        </svg>
        {/* Add some scattered dots with pink color */}
        <div className="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[25%] top-[10%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[30%] top-[30%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
        <div className="absolute left-[35%] top-[50%] h-2 w-2 rounded-full bg-[#C81F7B] opacity-30"></div>
      </div>
    </section>
  );
};
