import Link from "next/link";
import React from "react";
import { GrClose } from "react-icons/gr";
import TextLink from "../footer/TextLinks";
import SiteCard from "@/components/SiteCard";
import { HiOutlineExternalLink } from "react-icons/hi";

type CustomLinkType = {
  label: string;
  href: string;
  external: any;
  target: string;
};
const CustomNavLinks = ({ href, label, external, target }: CustomLinkType) => {
  return (
    <Link target={target} href={href} className="relative w-full ">
      <div className=" rounded-md px-2 py-1 hover:bg-holo-blue/50  border-slate-700 transition-all duration-300 ease-in-out relative flex  group ">
        <p className="font-extrabold whitespace-nowrap text-3xl z-30 w-full flex items-center ">
          {label}
          {external}
        </p>
      </div>
    </Link>
  );
};

type SidebarType = {
  setShowSidebar: any;
  showSidebar: any;
};

function Sidebar({ setShowSidebar, showSidebar }: SidebarType) {
  return (
    <div
      className={` w-0  bottom top-0  transition-all duration-500 ease-in ${
        showSidebar ? "w-full left-0" : "hidden"
      }  fixed  z-[100] `}
    >
      <div className={`h-full bg-black/50 relative flex justify-end`}>
        <div className=" tablet:w-[420px] h-screen  p-5 relative bg-white  hide-scrollbar  overflow-auto ">
          <button
            onClick={() => setShowSidebar(false)}
            className="mr-auto w-min absolute right-5"
            type="button"
          >
            <GrClose className="w-7 h-7" />
          </button>

          <nav className="flex flex-col gap-y-4 mt-16 w-min mx-auto">
            <button type="button" onClick={() => setShowSidebar()}>
              <CustomNavLinks
                target=""
                external=""
                href="#about"
                label="ABOUT"
              />
            </button>
            <button type="button" onClick={() => setShowSidebar()}>
              <CustomNavLinks
                target=""
                external=""
                href="#talent"
                label="TALENT"
              />
            </button>
            <button type="button" onClick={() => setShowSidebar()}>
              <CustomNavLinks target="" external="" href="#news" label="NEWS" />
            </button>
            <button type="button" onClick={() => setShowSidebar()}>
              <CustomNavLinks
                target=""
                external={""}
                href="#audition"
                label="AUDITION"
              />
            </button>
            <CustomNavLinks
              target="_blank"
              external={<HiOutlineExternalLink className={` ml-2 w-5 h-5`} />}
              href="https://shop.hololivepro.com/en"
              label="OFFICIAL SHOP"
            />
          </nav>

          {/*  */}
          <div className="my-8 font-normal">
            <TextLink />
          </div>
          <div className="grid mobile:grid-cols-2 gap-y-4 gap-x-4">
            <SiteCard
              link="https://hololive.hololivepro.com/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/holo-logo.png"}
            />
            <SiteCard
              link="https://holoearth.com/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/holoearth.png"}
            />
            <SiteCard
              link="https://alt.hololive.tv/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/hololive_alt.png"}
            />
            <SiteCard
              link="https://holostars.hololivepro.com/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/hololive_stars.png"}
            />
            <SiteCard
              link="https://hololivemeet.hololivepro.com/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/hololiveMEET_hp.png"}
            />
            <SiteCard
              link="https://hololive.hololivepro.com/special/1937/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/hololy_hp.png"}
            />
            <SiteCard
              link="https://shop.hololivepro.com/"
              imgAlt=""
              imgSrc={"/../public/images/banner-logo/officialshop_hp.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
