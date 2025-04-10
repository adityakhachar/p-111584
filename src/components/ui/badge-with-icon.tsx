
import React from "react";

interface BadgeWithIconProps {
  icon: string;
  text: string;
  className?: string;
}

export const BadgeWithIcon: React.FC<BadgeWithIconProps> = ({
  icon,
  text,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm text-[#C81F7B] font-normal text-center justify-center px-3 py-2 rounded-[50px] border border-[#C81F7B] border-solid ${className}`}
    >
      <img
        src={icon}
        className="aspect-square object-contain w-[17px] self-stretch shrink-0 my-auto"
        alt=""
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};
