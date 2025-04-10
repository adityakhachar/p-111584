import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[25px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1200px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede5b2d44a7756218cca6d77dc2264e551acbc4a?placeholderIfAbsent=true"
          className="aspect-[4.5] object-contain w-[180px] shrink-0 max-w-full"
          alt="Tribastion Logo"
        />
        <nav className="flex items-center gap-[40px_50px] text-lg text-[rgba(35,31,32,1)] font-normal flex-wrap my-auto max-md:max-w-full">
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
        <a
          href="#contact"
          className="self-stretch gap-2.5 text-sm font-semibold text-right px-[18px] py-3 rounded-[50px] hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};
