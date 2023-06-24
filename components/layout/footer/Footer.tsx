import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

import holoIcon from "../../../public/images/holo-logo.svg";
import TextLink from "./TextLinks";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <footer className="bg-holo-blue text-white text-xs  py-8 px-8 ">
      {/*  */}
      <div className="desktop:flex">
        <div className="desktop:w-[50%]">
          <Link href={""}>
            <Image
              src={holoIcon}
              alt="Hololive Logo"
              height={200}
              width={200}
              className="mx-auto mb-8"
            />
          </Link>
          <TextLink />
        </div>
        {/*  */}
        <div className="desktop:w-[50%]">
          <SocialMediaLinks />
        </div>
      </div>
      {/*  */}
      <div className="border-t pt-10 border-white flex flex-col justify-center items-center gap-y-6 desktop:flex-row desktop:justify-start relative desktop:mt-8">
        <small className="desktop:w-[50%] text-center">
          © 2016 COVER Corp.
        </small>
        <Link
          href={"/"}
          className=" rounded-full w-min p-4 bg-white desktop:absolute desktop:right-6 shadow-sm   hover:bg-slate-100"
        >
          <FaArrowUp className="h-7 w-7 text-holo-blue" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
