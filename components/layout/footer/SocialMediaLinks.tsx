import Link from "next/link";
import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsFacebook,
  BsTiktok,
  BsInstagram,
  BsReddit,
} from "react-icons/bs";

type CustomLinkType = {
  href: string;
  icon: any;
};

const CustomLink = ({ href, icon }: CustomLinkType) => {
  return (
    <Link target="_blank" href={href}>
      <div className="hover:bg-sky-200 p-1 shadow-sm bg-white  rounded-md">
        {icon}
      </div>
    </Link>
  );
};

const IconStyle = "w-4 h-4 text-holo-blue";

const Hololive = () => {
  return (
    <nav className="flex gap-x-4 ">
      <CustomLink
        href="https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg"
        icon={<BsYoutube className={IconStyle} />}
      />
      <CustomLink
        href="https://twitter.com/hololivetv"
        icon={<BsTwitter className={IconStyle} />}
      />
      <CustomLink
        href="https://www.tiktok.com/@hololive_official"
        icon={<BsTiktok className={IconStyle} />}
      />
    </nav>
  );
};
const HololiveIndonesia = () => {
  return (
    <nav className="flex gap-x-4 ">
      <CustomLink
        href="https://www.youtube.com/channel/UCfrWoRGlawPQDQxxeIDRP0Q"
        icon={<BsYoutube className={IconStyle} />}
      />
      <CustomLink
        href="https://twitter.com/hololive_Id"
        icon={<BsTwitter className={IconStyle} />}
      />
      <CustomLink
        href="https://www.tiktok.com/@hololiveid_official"
        icon={<BsTiktok className={IconStyle} />}
      />
      <CustomLink
        href="https://www.instagram.com/hololiveid_official/"
        icon={<BsInstagram className={IconStyle} />}
      />
      <CustomLink
        href="https://www.facebook.com/people/Hololive-Indonesia/100063546336394/"
        icon={<BsFacebook className={IconStyle} />}
      />
    </nav>
  );
};
const HololiveEnglish = () => {
  return (
    <nav className="flex gap-x-4 ">
      <CustomLink
        href="https://www.youtube.com/channel/UCotXwY6s8pWmuWd_snKYjhg"
        icon={<BsYoutube className={IconStyle} />}
      />
      <CustomLink
        href="https://twitter.com/hololive_En"
        icon={<BsTwitter className={IconStyle} />}
      />
      <CustomLink
        href="https://www.tiktok.com/@hololive_english"
        icon={<BsTiktok className={IconStyle} />}
      />
      <CustomLink
        href="https://www.reddit.com/r/Hololive/"
        icon={<BsReddit className={IconStyle} />}
      />
      <CustomLink
        href="https://www.facebook.com/hololivetv"
        icon={<BsFacebook className={IconStyle} />}
      />
    </nav>
  );
};
const Holostars = () => {
  return (
    <nav className="flex gap-x-4 ">
      <CustomLink
        href="https://www.youtube.com/channel/UCWsfcksUUpoEvhia0_ut0bA"
        icon={<BsYoutube className={IconStyle} />}
      />
      <CustomLink
        href="https://twitter.com/holostarstv"
        icon={<BsTwitter className={IconStyle} />}
      />
    </nav>
  );
};
const HolostarsEnglish = () => {
  return (
    <nav className="flex gap-x-4 ">
      <CustomLink
        href="https://www.youtube.com/channel/UCJxZpzx4wHzEYD-eCiZPikg"
        icon={<BsYoutube className={IconStyle} />}
      />
      <CustomLink
        href="https://twitter.com/hololivepro_EN"
        icon={<BsTwitter className={IconStyle} />}
      />
      <CustomLink
        href="https://www.tiktok.com/@holostars_english"
        icon={<BsTiktok className={IconStyle} />}
      />
    </nav>
  );
};

type ContainerType = {
  label: string;
  icons: any;
};

const Container = ({ icons, label }: ContainerType) => {
  return (
    <div className="py-3 px-6 border-b-2 border-white ">
      <p className="mb-3">{label}</p>
      {icons}
    </div>
  );
};

function SocialMediaLinks() {
  return (
    <div className="max-w-[650px] mx-auto gap-x-16 font-semibold grid items-center justify-center gap-y-4 my-8  device-xl:my-0 tablet:grid-cols-2 ">
      <Container icons={<Hololive />} label="Hololive" />
      <Container icons={<HololiveEnglish />} label="Hololive ENGLISH" />
      <Container icons={<HololiveIndonesia />} label="Hololive INDONESIA" />
      <Container icons={<Holostars />} label="HOLOSTARS" />
      <Container icons={<HolostarsEnglish />} label="HOLOSTARS English" />
    </div>
  );
}

export default SocialMediaLinks;
