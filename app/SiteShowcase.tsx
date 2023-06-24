import SiteCard from "@/components/SiteCard";
import React from "react";

function SiteShowcase() {
  return (
    <div className=" px-6 py-16 grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4  gap-4 mx-auto laptop:px-12 device-xl:px-28">
      <SiteCard
        link={"https://hololive.hololivepro.com/"}
        imgAlt="hololive"
        imgSrc={"/images/banner-logo/holo-logo.png"}
      />
      <SiteCard
        link={"https://holoearth.com/"}
        imgAlt="holoearth"
        imgSrc={"/images/banner-logo/holoearth.png"}
      />
      <SiteCard
        link={"https://alt.hololive.tv/"}
        imgAlt="holo alt"
        imgSrc={"/images/banner-logo/hololive_alt.png"}
      />
      <SiteCard
        link={"https://holostars.hololivepro.com/"}
        imgAlt="holostars"
        imgSrc={"/images/banner-logo/hololive_stars.png"}
      />
      <SiteCard
        link={"https://hololivemeet.hololivepro.com/"}
        imgAlt="holomeet"
        imgSrc={"/images/banner-logo/hololiveMEET_hp.png"}
      />
      <SiteCard
        link={"https://hololive.hololivepro.com/special/1937/"}
        imgAlt="hololy"
        imgSrc={"/images/banner-logo/hololy_hp.png"}
      />
      <SiteCard
        link={"https://shop.hololivepro.com/"}
        imgAlt="holoshop"
        imgSrc={"/images/banner-logo/officialshop_hp.png"}
      />
    </div>
  );
}

export default SiteShowcase;
