import ArticleCard from "@/components/ArticleCard";
import HeroArticleCard from "@/components/HeroArticleCard";
import Link from "next/link";
import React from "react";

const MoreNewsBtn = () => {
  return (
    <div className="w-full flex justify-center ">
      <Link
        className="hover:bg-holo-blue/50  font-semibold text-lg bg-white  border-2 border-holo-blue shadow-md  p-2 rounded-md text-slate-800"
        href={"https://hololivepro.com/en/news/"}
        target="_blank"
      >
        MORE NEWS
      </Link>
    </div>
  );
};

function LatestNews() {
  return (
    <div
      id="news"
      className="bg-white py-28 mx-6 laptop:mx-12 desktop:mx-44  device-xl:mx-24"
    >
      <div className="mb-16 laptop:flex laptop:justify-between laptop:items-center relative">
        <h2 className="text-center font-bold text-4xl laptop:text-5xl text-holo-blue ">
          What&apos;s the latest?
        </h2>
        <div className="hidden laptop:block">
          <MoreNewsBtn />
        </div>
      </div>

      <div className="device-xl:flex device-xl:gap-x-6 ">
        <div className=" w-full h-full mb-10 device-xl:w-[50%] ">
          <HeroArticleCard
            href="https://hololivepro.com/en/news/20230623-01-10/"
            headline="COVER Corporation announces partnership with Tokyo Otaku Mode"
            alt="Hololive"
            imgSrc="/images/hero-article.jpeg"
            date="2023.06.23"
          />
        </div>
        <div className="device-xl:w-[50%]">
          <ArticleCard
            href="https://hololivepro.com/en/news/20230616-01-36/"
            alt="hololive"
            headline="hololive English 1st Concert -Connect the World-"
            date="2023.06.16"
            imgSrc="/images/Connect-the-World-hololige-English-1st-Concert.png"
          />
          <ArticleCard
            href="https://hololivepro.com/en/news/20230614-01-9/"
            alt="hololive "
            headline="“hololive Indonesia” First Official Fanbook Confirmed"
            date="2023.05.11"
            imgSrc="/images/id-article.png"
          />
          <ArticleCard
            href="https://hololivepro.com/en/news/20230511-01-7/"
            alt="Hololive x aniplus collab Café"
            headline="hololive 3rd Generation x ANIPLUS Collaboration Café"
            date="2023.05.11"
            imgSrc="/images/article4.jpg"
          />
        </div>
      </div>
      <div className="laptop:hidden">
        <MoreNewsBtn />
      </div>
    </div>
  );
}

export default LatestNews;
