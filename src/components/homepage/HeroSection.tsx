import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const HeroSection: React.FC = () => {
  return (
    <section className="z-10 flex w-full flex-col overflow-hidden font-normal justify-center px-20 py-[136px] border-[rgba(214,243,255,1)] border-t max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-29px] w-[486px] max-w-full flex-col max-md:mb-2.5">
        <BadgeWithIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/922a36591ace49ed1d9f4fc08703d9714342d0a4?placeholderIfAbsent=true" text="Cyber Security Solutions" />
        <h1 className="text-[rgba(35,31,32,1)] text-[80px] self-stretch mt-[11px] max-md:max-w-full max-md:text-[40px]">
          <span>Stop </span>
          <span className="font-extrabold">threats</span>
          <br />
          <span>before they</span>
          <br />
          <span className="font-extrabold">strike</span>
        </h1>
        <ButtonWithIcon
          text="Get Started"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a01d8c8c8a578dea718f6f407f1549527bc84363?placeholderIfAbsent=true"
          variant="primary"
          className="mt-[33px] bg-[#231F20]"
        />
      </div>
    </section>
  );
};
