import { Heading } from "@/types";
import React from "react";

const SectionHeader = ({ subHeading, heading }: Heading) => {
  return (
    <>
      <h2 className="capitalize text-lg sm:text-xl md:text-2xl lg:text-2xl text-[#5E6282] text-center font-semibold">
        {subHeading}
      </h2>
      <h1 className="font-[Volkhov] font-bold text-center text-[#1E1D4C] mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {heading}
      </h1>
    </>
  );
};

export default SectionHeader;
