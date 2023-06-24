import Image from "next/image";
import Link from "next/link";
import React from "react";

type TalentCardType = {
  href: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  logoAlt: string;
  logoSrc: any;
};

function TalentCard({
  href,
  thumbnailAlt,
  thumbnailSrc,
  logoAlt,
  logoSrc,
}: TalentCardType) {
  return (
    <Link href={href}>
      <div className="   h-[200px]  bg-white  rounded-2xl relative flex group  border-2 shadow-md border-holo-blue group">
        {/* Talent logo */}
        <div className="p-6 z-10 w-full h-full flex justify-center items-center ">
          <div className="w-[60%] h-[40%]  bg-slate-100/90  rounded-2xl relative -bottom-[50px] group-hover:bg-slate-200/90 transition-transform duration-300 group-hover:scale-[1.1]">
            <Image
              className={"w-full h-full px-4 py-2"}
              alt={logoAlt}
              src={logoSrc}
              fill
            />
          </div>
        </div>
        {/* Talent Thumbnail*/}
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          fill
          className=" absolute inset-0 object-cover rounded-xl  "
        />
      </div>
    </Link>
  );
}

export default TalentCard;
