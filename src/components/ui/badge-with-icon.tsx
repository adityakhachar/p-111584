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
      className={`border flex items-center gap-2 text-sm text-[rgba(51,51,51,1)] font-normal text-center justify-center px-2.5 py-2 rounded-[50px] border-[rgba(204,204,204,1)] border-solid ${className}`}
    >
      <img
        src={icon}
        className="aspect-[0.89] object-contain w-[17px] self-stretch shrink-0 my-auto"
        alt=""
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};
