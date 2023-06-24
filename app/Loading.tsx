import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="z-[500] fixed inset-0 bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          width={400}
          height={400}
          src={"/images/common_logo_holopro.svg"}
          alt="hololive"
        />
      </div>
    </div>
  );
}

export default Loading;
