import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";

export const ClientsSection: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[259px] w-full items-center pt-[129px] pb-[17px] px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff78324562d18d924d86a83ba15ab658b4e3b6ef?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative flex w-full max-w-[983px] flex-col items-stretch ml-[29px] max-md:max-w-full">
        <BadgeWithIcon
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/83c5e8981d7c4817abcc2b8e46434a88c2a673a1?placeholderIfAbsent=true"
          text="Our Clients"
          className="self-center"
        />
        <div className="flex items-stretch gap-5 flex-wrap justify-between mt-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/259fe971e2b32ced1eb18d580618f581369e98d3?placeholderIfAbsent=true"
            className="aspect-[1.3] object-contain w-[101px] bg-blend-luminosity shrink-0 max-w-full"
            alt="Client Logo 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e73f37f122ae0c6eb8d41066c9f4f9df96452b?placeholderIfAbsent=true"
            className="aspect-[2.59] object-contain w-[202px] bg-blend-luminosity shrink-0 max-w-full"
            alt="Client Logo 2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bbf5516d4f03d6374bbdec6590bf66a97dcc373?placeholderIfAbsent=true"
            className="aspect-[2.56] object-contain w-[200px] bg-blend-luminosity shrink-0 max-w-full"
            alt="Client Logo 3"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d072bb6f2cddeb976ea92171e1ef2f475694b1f?placeholderIfAbsent=true"
            className="aspect-[1.86] object-contain w-[145px] bg-blend-luminosity shrink-0 max-w-full"
            alt="Client Logo 4"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f45baebf7909e0395fe9a3117d5b0d4503a8b4b4?placeholderIfAbsent=true"
            className="aspect-[2.75] object-contain w-[215px] bg-blend-luminosity shrink-0 max-w-full"
            alt="Client Logo 5"
          />
        </div>
      </div>
    </section>
  );
};
