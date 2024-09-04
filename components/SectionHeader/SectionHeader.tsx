import { HeadingType } from "@/types";
import React from "react";

const SectionHeader = ({ subHeading, heading, className }: HeadingType) => {
  return (
    <>
      <h2
        className={`capitalize text-lg sm:text-xl md:text-2xl lg:text-2xl text-[#5E6282] font-semibold ${
          className ? className : "text-center"
        }`}
      >
        {subHeading}
      </h2>
      <h1
        className={`font-[Volkhov] font-bold text-[#1E1D4C] mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
          className ? className : "text-center"
        }`}
      >
        {heading}
      </h1>
    </>
  );
};

export default SectionHeader;
