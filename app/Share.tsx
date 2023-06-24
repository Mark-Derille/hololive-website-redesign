import Link from "next/link";
import React from "react";
import { BsFacebook, BsLine, BsReddit, BsTwitter } from "react-icons/bs";

function Share() {
  return (
    <div className="  px-6 flex flex-col items-center py-16 ">
      <h3 className="font-bold text-center text-lg text-holo-blue">SHARE</h3>

      <Link
        target="_blank"
        href={
          "https://twitter.com/intent/tweet?text=hololive%20Production%20/%20@hololivetv%20&url=https://hololivepro.com/en/&hashtags=hololiveProduction"
        }
        className="text-white flex my-4 text-sm items-center py-3 px-12 bg-holo-blue rounded-full font-bold justify-center gap-x-3  hover:-translate-y-[1px]"
      >
        <BsTwitter className="w-6 h-6" />
        <p className="">#HololiveProduction</p>
      </Link>

      <div className="flex gap-x-3  justify-center items-center">
        <Link
          className="hover:-translate-y-[1px]  text-green-500"
          href={
            "https://social-plugins.line.me/lineit/share?url=https://hololivepro.com/en"
          }
          target="_blank"
        >
          <BsLine className="w-8 h-8" />
        </Link>
        <Link
          className="hover:-translate-y-[1px]  text-orange-500"
          href={"https://www.reddit.com/submit?url=https://hololivepro.com/en"}
          target="_blank"
        >
          <BsReddit className="w-8 h-8" />
        </Link>
        <Link
          className="hover:-translate-y-[1px]  text-blue-500"
          href={
            "http://www.facebook.com/share.php?u=https://hololivepro.com/en"
          }
          target="_blank"
        >
          <BsFacebook className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}

export default Share;
