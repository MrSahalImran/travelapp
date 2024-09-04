import React from "react";
import DestinationCard from "./DestinationCard";
import { DESTINATION_INFO, SECTION_HEADING } from "@/data";
import SectionHeader from "../SectionHeader/SectionHeader";

const Destination = () => {
  const { subHeading, heading } = SECTION_HEADING["Destination"];
  return (
    <section className="flex flex-col mt-20 md:mt-36 lg:mt-40 md:px-8 ">
      <SectionHeader subHeading={subHeading} heading={heading} />
      <div className="flex-col items-center  flex md:flex-row md:justify-between gap-8 mt-20">
        {DESTINATION_INFO.map((item) => (
          <DestinationCard
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
            trip={item.trip}
            dollars={item.dollars}
          />
        ))}
      </div>
    </section>
  );
};

export default Destination;
