import React from "react";
import Video from "./Video";
import Headline from "./Headline";

function HeroSection() {
  return (
    <div id="hero" className="relative h-[580px] w-full">
      <Video />
      <Headline />
    </div>
  );
}

export default HeroSection;
