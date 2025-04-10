import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="self-center flex w-full max-w-[1200px] gap-5 text-lg text-[rgba(35,31,32,1)] leading-[35px] flex-wrap justify-between mt-[120px] max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col text-[22px] font-normal leading-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b694e422f5b49a74a30d929b3ef0d425da1c304?placeholderIfAbsent=true"
            className="aspect-[4.5] object-contain w-[180px] max-w-full"
            alt="Tribastion Logo"
          />
          <div className="self-stretch mt-5">
            Fortifying your digital identity
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe1549dca7321afd025bfd92d2d1c165625c517?placeholderIfAbsent=true"
            className="aspect-[3.52] object-contain w-[134px] max-w-full mt-[30px] rounded-[100px]"
            alt="Social Media"
          />
        </div>
        <div className="self-stretch flex flex-col items-stretch">
          <h3 className="font-semibold">About Company</h3>
          <nav className="font-normal mt-[19px]">
            <a href="#" className="block font-semibold hover:underline">
              Home
            </a>
            <a href="#about" className="block hover:underline">
              About Us
            </a>
            <a href="#services" className="block hover:underline">
              Services
            </a>
            <a href="#careers" className="block hover:underline">
              Career
            </a>
            <a href="#contact" className="block hover:underline">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-stretch">
          <h3 className="font-semibold">Our Services</h3>
          <nav className="font-normal mt-[19px]">
            <a href="#" className="block hover:underline">
              Consulting Services
            </a>
            <a href="#" className="block hover:underline">
              Managed Security Services
            </a>
            <a href="#" className="block hover:underline">
              Training and Talent support
            </a>
            <a href="#" className="block hover:underline">
              Reseller Solutions
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-stretch whitespace-nowrap">
          <h3 className="font-semibold">Information</h3>
          <nav className="font-normal mt-[19px]">
            <a href="#" className="block hover:underline">
              Blog
            </a>
            <a href="#" className="block hover:underline">
              Resources
            </a>
            <a href="#" className="block hover:underline">
              Support
            </a>
            <a href="#" className="block hover:underline">
              FAQs
            </a>
          </nav>
        </div>
      </div>
      <div className="self-center flex min-h-[53px] w-full max-w-[1201px] items-center gap-[40px_100px] text-lg text-[rgba(35,31,32,1)] font-normal leading-[35px] justify-between flex-wrap mt-[109px] border-[rgba(35,31,32,1)] border-t max-md:max-w-full max-md:mt-10">
        <div className="self-stretch my-auto">
          © 2025 Tribastion. All rights reserved
        </div>
        <div className="self-stretch my-auto max-md:max-w-full">
          <a href="#" className="hover:underline mr-4">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
