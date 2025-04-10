
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonWithIconProps {
  text: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  text,
  icon,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseClasses =
    "flex items-center gap-3 font-semibold text-right justify-center px-[35px] py-[18px] rounded-[50px]";

  const variantClasses = {
    primary: "text-white bg-[#C81F7B] hover:bg-[#A71865]",
    secondary: "text-[rgba(35,31,32,1)] bg-white",
    outline:
      "text-[rgba(35,31,32,1)] border border-[rgba(204,204,204,1)] border-solid",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="self-stretch my-auto">{text}</span>
      {icon ? (
        <img
          src={icon}
          className="aspect-[2.16] object-contain w-[26px] self-stretch shrink-0 my-auto"
          alt=""
        />
      ) : (
        <ArrowRight className="w-5 h-5" />
      )}
    </button>
  );
};
