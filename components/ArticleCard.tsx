import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardType = {
  date: string;
  headline: string;
  imgSrc: string;
  alt: string;
  href: string;
};

function ArticleCard({
  headline,
  date,
  alt,
  imgSrc,
  href = "/",
}: ArticleCardType) {
  return (
    <Link target="_blank" href={href}>
      <div className="bg-white hover:bg-holo-blue/50 relative shadow-lg flex justify-between h-[150px] w-full  border-2 border-holo-blue mb-6  rounded-lg  transition-transform duration-300 hover:scale-[0.9] ">
        <div className="rounded-md w-full z-10 flex flex-col justify-center p-6 gap-y-2">
          <p className="text-slate-800 font-extrabold text-2xl table:text-lg  ">
            {headline}
          </p>
          <p className="text-slate-600 font-bold">{date}</p>
        </div>
        <Image
          src={imgSrc}
          alt={alt}
          width={600}
          height={600}
          className=" h-full w-[200px] rounded-lg hidden tablet:block  bg-holo-blue/50"
        />
      </div>
    </Link>
  );
}

export default ArticleCard;
