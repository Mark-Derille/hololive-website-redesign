import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroArticleCardType = {
  imgSrc: string;
  alt: string;
  date: string;
  headline: string;
  href: string;
};

function HeroArticleCard({
  alt,
  imgSrc,
  date,
  headline,
  href = "/",
}: HeroArticleCardType) {
  return (
    <Link target="_blank" href={href}>
      <div className=" shadow-md  border-2 border-holo-blue bg-holo-blue relative h-[250px] laptop:h-[300px] rounded-2xl device-xl:h-[400px]  transition-transform duration-300 hover:scale-[0.9]">
        <div className="absolute inset-0  z-10  rounded-2xl  flex items-end  bg-black/25">
          <div className="ml-6 mb-6 font-extrabold">
            <h2 className="mb-4  text-2xl tablet:text-3xl text-white">
              {headline}
            </h2>
            <p className="text-slate-200  contrast-200">{date}</p>
          </div>
        </div>
        <Image
          alt={alt}
          src={imgSrc}
          className="absolute object-cover rounded-2xl shadow-lg"
          fill
        />
      </div>
    </Link>
  );
}

export default HeroArticleCard;
