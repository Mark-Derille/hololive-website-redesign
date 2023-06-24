import Image from "next/image";
import Link from "next/link";
import React from "react";

type SiteCardType = {
  imgSrc: any;
  imgAlt: string;
  link: string;
};

function SiteCard({ link = "/", imgSrc, imgAlt }: SiteCardType) {
  return (
    <Link target="_blank" href={link}>
      <div className="relative h-[80px] border-2 border-holo-blue w-full rounded-md transition-transform duration-300 hover:scale-[0.9]">
        <Image
          className="w-full h-full rounded-md"
          src={imgSrc}
          alt={imgAlt}
          fill
        />
      </div>
    </Link>
  );
}

export default SiteCard;
