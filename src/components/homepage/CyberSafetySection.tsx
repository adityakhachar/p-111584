import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const CyberSafetySection: React.FC = () => {
  return (
    <section className="self-center w-full max-w-[1234px] mt-[62px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[55%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/673122bc5ad6653766450627513739cd1c20b868?placeholderIfAbsent=true"
            className="aspect-[0.93] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
            alt="Cyber Safety"
          />
        </div>
        <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-lg text-[rgba(35,31,32,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
            <BadgeWithIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f6dc1f7ea5f95cdf45a98fe28756c68c8b480b96?placeholderIfAbsent=true" text="Cyber Safety Tips" />
            <h2 className="text-[50px] font-semibold leading-[50px] mr-[29px] mt-[30px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:mr-2.5">
              Why is cybersecurity
              <br />
              important?
            </h2>
            <p className="leading-[25px] mt-[23px] max-md:max-w-full">
              There were 2,365 cyberattacks in 2023, with 343,338,964 victims.
              The average cost of a data breach was USD 4.45 Million. As our
              world embraces digitalization, the threat of cybersecurity
              breaches is a growing reality. Personal, national, and global
              cyber security was never this vulnerable.
            </p>
            <ButtonWithIcon
              text="View Reports"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a01d8c8c8a578dea718f6f407f1549527bc84363?placeholderIfAbsent=true"
              variant="primary"
              className="mt-[30px] bg-[#231F20]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
