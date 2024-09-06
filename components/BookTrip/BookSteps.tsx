import Image from "next/image";
import React from "react";
import { BookInfoType } from "@/types";

const BookSteps = ({ imgSrc, title, color }: BookInfoType) => {
  return (
    <div className="flex flex-col px-4 sm:flex-row items-center gap-4 sm:gap-7 mt-10 sm:mt-16">
      <div style={{ backgroundColor: color }} className="p-3 rounded-xl">
        <Image src={imgSrc} alt="logo" width={35} height={10} />
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <h1 className="font-bold text-lg sm:text-xl text-[#5E6282] text-center sm:text-left">
          {title}
        </h1>
        <p className="font-normal text-[#5E6282] text-sm sm:text-[16px] leading-5 text-center sm:text-left sm:w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis amet
          harum cumque.
        </p>
      </div>
    </div>
  );
};

export default BookSteps;
