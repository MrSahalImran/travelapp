import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { SECTION_HEADING, TESTIMONIALS_COMMENT } from "@/data";
import Image from "next/image";
import user1 from "@/public/assets/user1.png";

const Testimonials = () => {
  const { subHeading, heading } = SECTION_HEADING["Testimonial"];
  return (
    <section className="w-full flex flex-col md:flex-row h-full mt-28 px-8 justify-between md:gap-48 gap-10">
      <div className="w-full md:w-[40%]">
        <SectionHeader
          className="text-left"
          subHeading={subHeading}
          heading={heading}
        />
      </div>

      <div className="w-full  md:w-[60%] flex-col lg:flex-row flex gap-10">
        <div className="flex items-center lg:items-start">
          <Image
            src={user1}
            width={70}
            height={70}
            alt="user"
            className="w-[70px] h-[60px] lg:w-[120px]"
          />
        </div>

        <div className="flex text-[#5E6282] py-4 md:py-10 flex-col">
          <p className="text-[16px] font-medium w-full md:w-[70%] mb-6 md:mb-10">
            {TESTIMONIALS_COMMENT}
          </p>
          <h1 className="text-[20px] font-semibold">Mike Taylor</h1>
          <p className="text-[12px]">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
