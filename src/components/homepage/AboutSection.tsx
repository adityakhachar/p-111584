import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="self-center w-full max-w-[1210px] mt-24 max-md:max-w-full max-md:mt-10"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fc9264289f647e0e26fe8691616fc1ad480c2c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-full grow max-md:max-w-full max-md:mt-10"
            alt="About Us"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch text-lg text-[rgba(35,31,32,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
            <BadgeWithIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a43ed2f8dfabff824f1714c2e567c16499b08ae6?placeholderIfAbsent=true" text="About Us" />
            <h2 className="text-[50px] font-semibold mt-[30px] max-md:max-w-full max-md:text-[40px]">
              24/7 Cyber security
              <br />
              Services
            </h2>
            <p className="leading-[25px] self-stretch mt-[21px] max-md:max-w-full">
              At Tribastion, we take pride in serving as vigilant protectors of
              your digital assets. We provide proactive threat detection, rapid
              incident response, and 24/7 monitoring to safeguard your
              organization against cyber threats. Backed by a team of seasoned
              security experts with decades of experience and cutting-edge
              technologies, we stay ahead of emerging threats, so you can focus
              on your core business while we manage your security needs
              effectively.
            </p>
            <ButtonWithIcon
              text="Read More"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a01d8c8c8a578dea718f6f407f1549527bc84363?placeholderIfAbsent=true"
              variant="primary"
              className="mt-[25px] bg-[#231F20]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
