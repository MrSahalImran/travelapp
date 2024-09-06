import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BOOKING_INFO, SECTION_HEADING } from "@/data";
import BookSteps from "./BookSteps";
import BookCard from "./BookCard";

const BookTrip = () => {
  const { subHeading, heading } = SECTION_HEADING["Trip"];
  return (
    <section className="flex  flex-col md:flex-row mt-28 w-full h-full px-4">
      <div className="flex flex-col w-full md:w-1/2">
        <SectionHeader
          className="text-left w-[90%] sm:w-[80%] md:w-[70%]"
          subHeading={subHeading}
          heading={heading}
        />
        {BOOKING_INFO.map((item) => (
          <BookSteps
            color={item.color}
            key={item.title}
            imgSrc={item.imgSrc}
            title={item.title}
          />
        ))}
      </div>

      <div className="w-full flex flex-col justify-center md:w-1/2 mt-10 md:mt-0">
        <BookCard />
      </div>
    </section>
  );
};

export default BookTrip;
