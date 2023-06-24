"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import hololiveLogo from "../../../public/images/holo-logo.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import Sidebar from "./Sidebar";

type CustomLinkType = {
  label: string;
  href: string;
  style: string;
  icon: any;
  target: string;
};
export const CustomLink = ({
  label,
  href,
  style,
  icon = "",
  target,
}: CustomLinkType) => {
  return (
    <Link target={target} href={href} className={`${style} group`}>
      <p className="flex items-center gap-1 ">
        {label}
        {icon}
      </p>
      <div className="rounded-sm w-0 h-[2px] bg-sky-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
    </Link>
  );
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-50 fixed w-full px-6 py-3 flex items-center  justify font-extrabold text-xs   laptop:px-10  ${
        isScrolled ? "bg-holo-blue shadow-sm" : "bg-transparent"
      }`}
    >
      <div>
        <Link href={"/"}>
          <div className="relative w-[100px] h-[40px] laptop:w-[150px] laptop:h-[50px]">
            <Image
              src={hololiveLogo}
              alt="Hololive Logo"
              fill
              className="w-full h-full"
            />
          </div>
        </Link>
      </div>

      <nav className="ml-auto hidden  desktop:flex gap-x-2  px-4 bg-white/80 border-2 border-white rounded-full ">
        <CustomLink
          icon={""}
          style={`${isScrolled ? "hover:bg-sky-100" : ""} rounded-sm py-2 px-4`}
          href="#about"
          label="ABOUT"
          target=""
        />
        <CustomLink
          icon={""}
          style={`${isScrolled ? "hover:bg-sky-100" : ""} rounded-sm py-2 px-4`}
          href="#talent"
          label="TALENT"
          target=""
        />
        <CustomLink
          icon={""}
          style={`${isScrolled ? "hover:bg-sky-100" : ""} rounded-sm py-2 px-4`}
          href="#news"
          label="NEWS"
          target=""
        />
        <CustomLink
          icon={""}
          style={`${isScrolled ? "hover:bg-sky-100" : ""} rounded-sm py-2 px-4`}
          href="#audition"
          label="AUDITION"
          target=""
        />
      </nav>
      <nav className=" hidden desktop:flex gap-x-6  px-4 text-holo-blue">
        <CustomLink
          icon={<HiOutlineExternalLink className="w-4 h-4" />}
          style="border-2 border-white hover:bg-sky-300 border-holo-blue border px-4 py-2 rounded-full bg-holo-blue text-white"
          href="https://shop.hololivepro.com/en"
          label="OFFICIAL SHOP"
          target="_blank"
        />
      </nav>
      <button
        onClick={() => setShowSidebar(true)}
        type="button"
        className=" desktop:hidden ml-auto text-slate-800"
      >
        <HiBars3BottomRight className="w-8 h-8 laptop:w-9 laptop:h-9" />
      </button>

      <Sidebar
        setShowSidebar={() => setShowSidebar(false)}
        showSidebar={showSidebar}
      />
    </header>
  );
}

export default Header;
