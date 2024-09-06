import React from "react";
import { CiMail } from "react-icons/ci";
import Button from "../Button/Button";
import { FaLocationArrow } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("assets/divBackground.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex relative w-[95%] h-[24rem] sm:h-[28rem] rounded-2xl md:h-[20rem] sm:p-5 mt-20 flex-col justify-center items-center"
    >
      <h1 className="text-[20px] md:text-[27px] lg:text-[33px] font-semibold text-center w-[70%] leading-relaxed text-[#5E6282]">
        Subscribe to get information, latest news and other interesting offer
        about Jadoo
      </h1>
      <div className="flex mt-10 gap-5 flex-col lg:flex-row">
        <div className="bg-white rounded-xl items-center flex px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 text-sm">
          <CiMail className="text-lg sm:text-xl" />
          <input
            className="px-2 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-0 outline-none rounded-xl w-full"
            type="text"
            placeholder="Your email"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button text="Subscribe" color="#ff896b" />
        </div>
      </div>
      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-400 flex absolute  justify-center items-center rounded-full -top-10 -right-10">
        <FaLocationArrow className="text-white text-xl" />
      </div>
    </section>
  );
};

export default Newsletter;
