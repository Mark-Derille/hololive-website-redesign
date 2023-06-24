import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxTriangleRight } from "react-icons/rx";

const Headline = () => {
  return (
    <div className=" device-xl:w-[50%]">
      <div
        id="about"
        className="text-center px-6 py-28 font-bold flex flex-col text-slate-800 items-center gap-y-6 max-w-[400px] mx-auto"
      >
        <h2 className="text-5xl  desktop:text-6xl text-holo-blue">ABOUT US</h2>
        <p className="text-lg">
          hololive production is one of the biggest VTuber agencies in the
          world.
        </p>
        <p className="text-lg">
          Here we introduce our challenges to deliver excitement to fans all
          around the world.
        </p>
        <Link
          target="_blank"
          href={"https://hololivepro.com/en/about/"}
          className="hover:bg-holo-blue/80  text-sm group shadow-md flex items-center bg-holo-blue rounded-full py-3 px-6 font-bold text-white"
        >
          <div className="transition-all duration-300 group-hover:translate-x-1 mr-3 rounded-full bg-white">
            <RxTriangleRight className="w-6 h-6 text-holo-blue" />
          </div>
          View More
        </Link>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="mt-24 hidden device-xl:block device-xl:w-[50%] relative">
      <div className="h-[90%] w-[80%] relative mx-auto">
        <Image
          src={"/images/about_img_chart.png"}
          alt="hololive"
          fill
          className=""
        />
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="bg-holo-blue/10 device-xl:flex">
      <Banner />
      <Headline />
    </div>
  );
}

export default About;
