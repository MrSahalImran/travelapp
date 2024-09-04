import Image from "next/image";
import React from "react";
import navIcon from "@/public/assets/Navigation.svg";
import { DestinationInfoType } from "@/types";

const DestinationCard = ({
  imgSrc,
  title,
  dollars,
  trip,
}: DestinationInfoType) => {
  return (
    <div className="w-full max-w-[22rem] shadow-md transform transition-transform duration-300 hover:scale-105 h-[26rem] rounded-3xl overflow-hidden flex flex-col">
      <Image
        src={imgSrc}
        className="w-full h-[70%] object-cover"
        alt={title}
        width={1000}
        height={50}
      />
      <div className="flex flex-col p-5">
        <div className="flex justify-between">
          <h1 className="text-[18px] font-medium text-[#5E6282]">{title}</h1>
          <p className="text-[18px] font-medium text-[#5E6282]">${dollars}k</p>
        </div>
      </div>
      <div className="flex items-center ">
        <Image
          className="ml-5"
          src={navIcon}
          alt="Navigation Icon"
          width={24}
          height={24}
        />
        <p className="text-[16px] ml-4 font-medium text-[#5E6282]">
          {trip} Days Trip
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
