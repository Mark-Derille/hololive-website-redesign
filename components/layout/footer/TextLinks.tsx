import React from "react";
import { CustomLink } from "../header/Header";
import { HiOutlineExternalLink } from "react-icons/hi";

function TextLink() {
  return (
    <nav className="flex flex-wrap justify-center  mx-auto gap-4 max-w-[500px]">
      <CustomLink
        target="_blank"
        href="https://hololivepro.com/en/collaboration"
        icon={<HiOutlineExternalLink className="w-5 h-5" />}
        label="COLLABORATION"
        style=""
      />
      <CustomLink
        target="_blank"
        href="https://cover-corp.com/"
        icon={<HiOutlineExternalLink className="w-5 h-5" />}
        label="COMPANY"
        style=""
      />
      <CustomLink
        target="_blank"
        href="https://cover-corp.com/privacy/"
        icon={<HiOutlineExternalLink className="w-5 h-5" />}
        label="PRIVACY POLICY"
        style=""
      />
      <CustomLink
        target=""
        href="https://hololivepro.com/en/request-to-minors/"
        icon={""}
        label="REQUEST TO MINORS"
        style=""
      />
      <CustomLink
        target=""
        href="https://hololivepro.com/en/terms/"
        icon={""}
        label="DERIVATE WORKS GUIDELINES"
        style=""
      />
      <CustomLink
        target=""
        href="https://hololivepro.com/en/question/"
        icon={""}
        label="FAQ"
        style=""
      />
      <CustomLink
        target=""
        href="https://hololivepro.com/en/supporter/"
        icon={""}
        label="SUPPORT GUIDELINE"
        style=""
      />
    </nav>
  );
}

export default TextLink;
