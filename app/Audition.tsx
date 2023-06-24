import Link from "next/link";
import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import HoloAuditionLogo from "../public/images/holo-audition.svg";
import Image from "next/image";
type CustomLinkType = {
  href: string;
  label: string;
};

const CustomLink = ({ href, label }: CustomLinkType) => {
  return (
    <Link target="_blank" href={href}>
      <div className="shadow-sm shadow-holo-blue transition-all duration-300 ease-in relative  overflow-hidden border-2 border-holo-blue mb-6 h-[3rem] w-[15rem]  rounded-full text-lg font-semibold  text-holo-blue group hover:text-white  hover:border-0">
        <div className=" transition-[width] duration-300 ease-in-out w-0 h-full bg-holo-blue  group-hover:w-full rounded-full"></div>
        <div className="absolute inset-0 flex items-center gap-4 justify-center">
          <p>{label}</p>
          <BsFillArrowUpRightCircleFill className="w-4.5 h-4.5" />
        </div>
      </div>
    </Link>
  );
};

function Audition() {
  return (
    <div id="audition" className="mx-6 device-xl:mx-28 py-28 device-xl:flex">
      <div className="device-xl:w-[50%]">
        <h2 className="text-holo-blue  font-extrabold text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl device-xl:text-5xl text-center mb-8">
          We are looking for TALENT!
        </h2>
        <p className="mx-auto max-w-[25rem] text-center font-semibold text-lg mb-8 text-slate-700">
          Hololive English is holding auditions for Virtual content creators! We
          are looking forward to seeing our future talents!
        </p>
        <div className="mx-auto w-max">
          <CustomLink
            href="https://audition.hololivepro.com/"
            label="Japanese Talent"
          />
          <CustomLink
            href="https://audition.hololivepro.com/id"
            label="Indonesian Talent"
          />
          <CustomLink
            href="https://audition.hololivepro.com/en"
            label="English Talent"
          />
        </div>
      </div>
      <div className=" justify-center items-center device-xl:w-[50%] relative hidden device-xl:flex ml-6">
        <Image src={HoloAuditionLogo} alt="Hololive logo" />
      </div>
    </div>
  );
}

export default Audition;
