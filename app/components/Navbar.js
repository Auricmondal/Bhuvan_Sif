"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import NavLinks from "./links/NavLinks";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-[80px] w-full bg-black border-b-2 border-b-gray-200 flex justify-between items-center ">
      {/* Left side of the navbar */}
      <div className="bg-white h-full flex items-center pl-4">
        <Image
          className="md:hidden"
          src={"/assets/icons/hammenu.svg"}
          height={16}
          width={16}
          alt="ham menu"
        />
        <Image
          src={"/assets/images/logo.png"}
          width={234}
          height={46}
          alt="logo of bhuvan"
        />
      </div>
      {/* Middle part of the navbar */}
      <div
        className="
      hidden 
      md:block
      "
      >
        <ul
          className="
        flex 
        gap-8
        ic
        "
        >
          <NavLinks
            label={"Home"}
            fw={"font-bold"}
            action={"/"}
            color={"text-white"}
          />
          <NavLinks
            label={"Solution"}
            fw={"font-bold"}
            action={"/"}
            icon={"/assets/icons/arrow.svg"}
            rotate={"rotate-90"}
            iconpos={"a"}
            size={13}
            color={"text-white"}
          />
          <NavLinks
            label={"Contact Us"}
            fw={"font-bold"}
            action={"/"}
            color={"text-white"}
          />
          <NavLinks
            label={"Wiki"}
            fw={"font-bold"}
            action={"/"}
            color={"text-white"}
          />
        </ul>
      </div>
      {/* Left side of the navbar */}
      <div className="pr-4">
        <Button
          label={"Register"}
          action={"/"}
          size={"small"}
          bg={"bg-white"}
          color={"text-black"}
        />
      </div>
    </div>
  );
};

export default Navbar;
