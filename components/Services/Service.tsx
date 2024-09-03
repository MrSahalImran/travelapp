import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/data";

const Service = () => {
  return (
    <section className="w-full mt-16 md:mt-0 px-4">
      <h2 className="capitalize text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#5E6282] text-center font-semibold">
        category
      </h2>
      <h1 className="font-[Volkhov] font-bold text-center text-[#1E1D4C] mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        We Offer Best Services
      </h1>
      <div className=" grid gap-12 mt-16 md:mt-24 lg:mt-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((item) => (
          <ServiceCard
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
