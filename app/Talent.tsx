import TalentCard from "@/components/TalentCard";
import React from "react";
import LiveJP from "../public/images/hololive-jp-logo.svg";
import LiveEN from "../public/images/hololive-en-logo.svg";
import LiveID from "../public/images/holo-id-logo.svg";
import StarsJP from "../public/images/holostars-jp-logo.svg";
import StarsEN from "../public/images/holostars-en-logo.svg";

function Talent() {
  return (
    <div
      id="talent"
      className="bg-holo-blue/10 px-6 py-28  laptop:px-12 desktop:12px device-xl:px-24 relative"
    >
      <h2 className="text-center font-[1000] text-5xl mb-16 text-holo-blue desktop:text-start">
        Talent
      </h2>
      <div className="grid laptop:grid-cols-2 gap-y-8 gap-x-12">
        <TalentCard
          href="https://hololive.hololivepro.com/en/talents?gp=hololive"
          thumbnailSrc="/images/thumbnail-jp-2.jpg"
          thumbnailAlt="Hololive JP"
          logoSrc={LiveJP}
          logoAlt="Hololive Logo"
        />
        <TalentCard
          href="https://hololive.hololivepro.com/en/talents?gp=english"
          thumbnailSrc="/images/thumbnail-en-1.jpg"
          thumbnailAlt=""
          logoSrc={LiveEN}
          logoAlt=""
        />
        <TalentCard
          href="https://hololive.hololivepro.com/en/talents?gp=indonesia"
          thumbnailSrc="/images/thumbnail-id-3.jpg"
          thumbnailAlt=""
          logoSrc={LiveID}
          logoAlt=""
        />
        <TalentCard
          href="https://holostars.hololivepro.com/en/talent?gp=holostars"
          thumbnailSrc="/images/stars-jp-thumbnail-2.jfif"
          thumbnailAlt=""
          logoSrc={StarsJP}
          logoAlt=""
        />
        <div className="desktop:col-span-2 desktop:w-[50%] desktop:mx-auto">
          <TalentCard
            href="https://holostars.hololivepro.com/en/talent?gp=holostars-english"
            thumbnailSrc="/images/stars-en-thumbnail.png"
            thumbnailAlt=""
            logoSrc={StarsEN}
            logoAlt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Talent;
