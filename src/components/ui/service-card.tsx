import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isDark?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isDark = false,
}) => {
  const bgColor = isDark ? "bg-[#231F20]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[rgba(35,31,32,1)]";
  const buttonBg = isDark
    ? "bg-white"
    : "border border-[rgba(204,204,204,1)] border-solid";
  const buttonText = isDark
    ? "text-[rgba(35,31,32,1)]"
    : "text-[rgba(35,31,32,1)]";

  return (
    <div
      className={`flex w-full flex-col overflow-hidden text-sm ${textColor} font-normal p-[30px] rounded-[18px] ${bgColor}`}
    >
      <img src={icon} className="aspect-[1] object-contain w-[58px]" alt="" />
      <div className="text-3xl mt-[58px]">{title}</div>
      <div className="leading-[22px] self-stretch mt-5">{description}</div>
      <div
        className={`self-stretch ${buttonBg} gap-2.5 ${buttonText} text-right mt-[31px] px-[18px] py-3 rounded-[50px]`}
      >
        Read More
      </div>
    </div>
  );
};
