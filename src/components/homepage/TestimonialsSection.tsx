import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-stretch text-lg text-[rgba(35,31,32,1)] font-normal text-center justify-center px-20 py-[17px] max-md:max-w-full max-md:px-5">
      <div className="flex flex-col relative min-h-[629px] w-full max-w-[1259px] items-center justify-center px-20 py-[124px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/550666571aeb35cd0804e57dc7ec4b23a6d056ec?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Testimonial Background"
        />
        <div className="relative flex mb-[-29px] w-[793px] max-w-full flex-col items-center max-md:mb-2.5">
          <BadgeWithIcon
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7a18f8536c4510dd8af545273fc638b729632fea?placeholderIfAbsent=true"
            text="Testimonials"
            className="whitespace-nowrap"
          />
          <h2 className="text-[50px] font-semibold mt-2.5 max-md:max-w-full max-md:text-[40px]">
            What our clients say
          </h2>
          <blockquote className="leading-[25px] self-stretch mt-[54px] max-md:max-w-full max-md:mt-10">
            We've implementing the cybersecurity services from Tribastion, and
            experienced a significant reduction in breaches and phishing
            attempts.
          </blockquote>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6b2d2853f946f9f288641b162fbab772cc30be?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[90px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-[19px] rounded-[50%]"
            alt="Sarah Tom"
          />
          <div className="leading-5 mt-5">
            <span className="font-semibold">Sarah Tom</span>
            <br />
            <span className="text-sm">Senior Executive Officer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
