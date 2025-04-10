import React from "react";

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <article className="flex grow flex-col text-lg text-[rgba(35,31,32,1)] font-normal">
      <img
        src={image}
        className="aspect-[1.52] object-contain w-full self-stretch rounded-[18px]"
        alt={title}
      />
      <time className="font-semibold mt-[30px]">{date}</time>
      <h3 className="text-3xl mt-5">{title}</h3>
      <p className="leading-[22px] mt-[13px]">{description}</p>
    </article>
  );
};
