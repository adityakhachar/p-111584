import React from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ArticleCard } from "@/components/ui/article-card";

export const ArticlesSection: React.FC = () => {
  return (
    <section
      id="insights"
      className="flex w-full flex-col overflow-hidden items-center justify-center px-20 py-[120px] max-md:max-w-full max-md:px-5 max-md:py-[100px]"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center -mb-6 max-md:max-w-full max-md:mb-2.5">
        <BadgeWithIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ce9de0f5c4b6b78bbea82c14819bd68e3ad2437d?placeholderIfAbsent=true" text="Our Articles" />
        <h2 className="text-[rgba(35,31,32,1)] text-[50px] font-semibold text-center mt-2.5 max-md:max-w-full max-md:text-[40px]">
          Latest tips & tricks
        </h2>
        <p className="text-[rgba(51,51,51,1)] text-lg font-normal text-center mt-[19px] max-md:max-w-full">
          We provide round-the-clock monitoring to safeguard your organization
          against cyber threats
        </p>
        <div className="self-stretch mt-[46px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-md:w-full max-md:ml-0">
              <ArticleCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/6ead27a53ad78b1771d3725b4eb0f2846752cac4?placeholderIfAbsent=true"
                date="March 21, 2025"
                title="Protect Your Workplace"
                description="This includes complete management of security tools and solutions."
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <ArticleCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf81325c25de3a0394062def2e791b7168dda4f?placeholderIfAbsent=true"
                date="March 18, 2025"
                title="The Security Risks"
                description="This includes complete management of security tools and solutions."
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <ArticleCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/204aaa596395e6194bf5d286ca4d65d0000dcccc?placeholderIfAbsent=true"
                date="March 05, 2025"
                title="Avoid Mistakes"
                description="This includes complete management of security tools and solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
