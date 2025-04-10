import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ServiceCard } from "@/components/ui/service-card";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col overflow-hidden items-center mt-[61px] pl-20 pb-[120px] max-md:max-w-full max-md:mt-10 max-md:pl-5 max-md:pb-[100px]"
    >
      <div className="w-[890px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch text-center mt-[120px] max-md:mt-10">
              <BadgeWithIcon
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa26a426c9254ec96268fcc1a85de15830bef96e?placeholderIfAbsent=true"
                text="Our Services"
                className="self-center"
              />
              <h2 className="text-[rgba(35,31,32,1)] text-[50px] font-semibold mt-2.5 max-md:text-[40px]">
                What we offer
              </h2>
            </div>
          </div>
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/034edf911363464030b4d54093036aa7b9f699e1?placeholderIfAbsent=true"
              className="aspect-[1.99] object-contain w-full max-md:max-w-full max-md:mt-10"
              alt="Services Illustration"
            />
          </div>
        </div>
      </div>
      <p className="text-[rgba(51,51,51,1)] text-lg font-normal text-center mt-[19px] max-md:max-w-full">
        We provide round-the-clock monitoring to safeguard your organization
        against cyber threats
      </p>
      <div className="w-full max-w-[1200px] mt-[46px] -mb-6 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3b6174c1532785a8dba30584be4f10ba2d68371d?placeholderIfAbsent=true"
              title="Cyber Security Consulting"
              description="At Tribastion, we understand that every industry faces unique cybersecurity challenges. Be it IT, OT, or Cloud environment, our consulting services are tailored to fit your specific domain and needs."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef3f7dbf78656ec1248930f4936944c1744222a?placeholderIfAbsent=true"
              title="Managed Security Services"
              description="In today's dynamic threat landscape, safeguarding your digital assets requires expert management and continuous oversight. Tribastion offers extensive Managed Security Services (MSS) designed to protect"
              isDark={true}
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8f3e30523b9757c1d4bcd339453b356400535fa8?placeholderIfAbsent=true"
              title="Training and Talent support"
              description="At Tribastion, we believe that the strength of your cybersecurity measures begins with well-trained, knowledgeable teams. Our Cyber Security Training and Talent Support services are designed to equip your staff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
