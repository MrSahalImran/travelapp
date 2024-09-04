import React from "react";
import ServiceCard from "./ServiceCard";
import { SECTION_HEADING, SERVICES } from "@/data";
import SectionHeader from "../SectionHeader/SectionHeader";

const Service = () => {
  const { subHeading, heading } = SECTION_HEADING["Services"];
  return (
    <section className="w-full h-full mt-16 md:mt-0 px-4">
      <SectionHeader subHeading={subHeading} heading={heading} />
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
