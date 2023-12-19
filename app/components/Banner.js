"use client";
import React from "react";
import Tags from "./Tags";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Banner = ({
  title,
  description,
  action,
  latest,
  bgimgUrl,
  mobimgUrl,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(action)}
      className={`
      ${mobimgUrl}
      ${bgimgUrl}
      w-full
      h-[418px]
      bg-cover
      bg-center
      flex
      items-center
      text-center
      sm:text-left
      pl-4
      pr-2
      md:pl-12
      lg:px-16
      md:pr-8
      text-white
      relative
    `}
    >
      <div
        className="
      bg-gradient-to-r 
      from-black 
      to-black 
      opacity-60  
      h-full 
      w-full 
      absolute 
      left-0
      "
      ></div>
      <div className="z-10 ">
        {latest && <Tags label={"Latest"} borerColor={"border-[#A1160A]"} />}
        <h1
          className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        font-extrabold
        mt-2
        mb-4
      "
        >
          {title}
        </h1>
        <p
          className="
      max-w-2xl 
      text-xs 
      text-gray-200 
      mb-8
      line-clamp-3
      "
        >
          {description}
        </p>
        <div
          className="
      flex 
      justify-center 
      sm:justify-start
      "
        >
          <Button
            action={"/"}
            color={"bg-[#0B5EB7]"}
            btnSize={"lg"}
            label={"Know More"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
