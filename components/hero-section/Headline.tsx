import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Headline() {
  return (
    <div className="z-10 w-full h-full flex justify-center items-center">
      <Link
        target=""
        href={"#talent"}
        className="shadow-sm  hover:bg-holo-blue flex items-center gap-4 bg-holo-blue/90 w-min  px-6 py-3  relative top-32 rounded-full group"
      >
        <div className="shadow-full bg-slate-800 rounded-full text-white w-min p-2 transition-all duration-300 group-hover:translate-x-1">
          <FaArrowRight className="h-5 w-5 tablet:w-6 tablet:h-6 " />
        </div>
        <p className=" text-2xl  font-bold text-white tablet:text-3xl whitespace-nowrap ">
          Explore Talent
        </p>
      </Link>
    </div>
  );
}

export default Headline;
