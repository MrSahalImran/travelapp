import Image from "next/image";
import React from "react";

const BookCard = () => {
  return (
    <div
      style={{ boxShadow: "0 0 100px 0 #59B1E6" }}
      className="p-3 md:px-5 md:py-5 w-full sm:w-[80%] md:w-[70%] h-fit border rounded-3xl flex flex-col"
    >
      {/* Image Section */}
      <div className="overflow-hidden items-center w-full rounded-3xl">
        <Image
          src="/assets/greece.png"
          width={5000}
          height={500}
          alt="greece"
        />
      </div>
      <div className="text-left px-2">
        <h1 className="mt-4 md:mt-8 text-lg sm:text-xl md:text-2xl font-medium">
          Trip To Greece
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5E6282]">
          14-29 June | by Robbin Joseph
        </p>
        <div className="flex gap-6 sm:gap-8 my-8">
          <Image src="/assets/leaf.svg" width={20} height={50} alt="" />
          <Image src="/assets/map.svg" width={20} height={50} alt="" />
          <Image src="/assets/send.svg" width={20} height={50} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4 sm:gap-5 items-center">
            <Image
              src="/assets/buildings.svg"
              width={20}
              height={10}
              alt="buildingIcon"
            />
            <p className="text-xs sm:text-sm md:text-base text-[#5E6282]">
              24 people going
            </p>
          </div>
          <Image
            src="/assets/heart.svg"
            width={20}
            height={50}
            alt="heartIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
