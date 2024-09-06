import { MARQUEE_SECTIONS } from "@/data";
import Image from "next/image";
import React from "react";

const MarqueeImages = () => {
  return (
    <div className="py-10 px-10 mt-16">
      <div className="flex gap-20 ml-8 items-center justify-center">
        {MARQUEE_SECTIONS.map((item) => (
          <Image
            key={item.title}
            src={item.imgSrc}
            width={150}
            height={20}
            alt={item.title}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-40"
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeImages;
