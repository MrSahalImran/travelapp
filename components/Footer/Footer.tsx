import Image from "next/image";
import React from "react";
import facebook from "@/public/assets/Facebook.svg";
import instagram from "@/public/assets/insta.png";
import twitter from "@/public/assets/twitter.svg";
import playStore from "@/public/assets/playStore.svg";
import appStore from "@/public/assets/appStore.svg";
import { FOOTER_SECTIONS } from "@/data";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full mt-40 px-4">
      <div className="flex flex-col w-full lg:hidden mb-10  text-center md:text-left">
        <h1 className="text-[poppins] text-[#181E4B] font-medium text-4xl md:text-[44px]">
          Jadoo.
        </h1>
        <p className="text-[#5E6282] text-sm mt-4 md:mt-8 w-full md:w-[60%]">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="lg:flex hidden flex-col w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-[poppins] text-[#181E4B] font-medium text-4xl md:text-[44px]">
            Jadoo.
          </h1>
          <p className="text-[#5E6282] text-sm mt-4 md:mt-8 w-full md:w-[60%]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:mr-16 mr-0 md:flex-row w-full md:w-1/3 gap-10 justify-between mb-10 md:mb-0">
          <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-20   text-center md:text-left mb-5 md:mb-0">
            {FOOTER_SECTIONS.map((item) => (
              <div key={item.title}>
                <h1 className="font-bold text-xl mb-5">{item.title}</h1>
                {item.links.map((link, index) => (
                  <p
                    key={index}
                    className="text-nowrap text-[18px] text-[#5E6282] font-medium"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/3 lg:items-center lg:justify-end gap-5">
          <div className="flex gap-5 justify-center">
            <Image
              className="transform transition-transform duration-300 hover:scale-110"
              src={facebook}
              width={16} // Reduced size for lg
              height={16} // Reduced size for lg
              alt="facebook"
            />
            <Image
              className="transform transition-transform duration-300 hover:scale-110"
              src={instagram}
              width={60} // Reduced size for lg
              height={30} // Reduced size for lg
              alt="instagram"
            />
            <Image
              className="transform transition-transform duration-300 hover:scale-110"
              src={twitter}
              width={24} // Reduced size for lg
              height={16} // Reduced size for lg
              alt="twitter"
            />
          </div>
          <p className="font-medium text-[#5E6282] text-lg">Discover our app</p>
          <div className="flex gap-2">
            <Image
              className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
              src={playStore}
              width={120} // Reduced size for lg
              height={35} // Reduced size for lg
              alt="play store"
            />
            <Image
              className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
              src={appStore}
              width={120} // Reduced size for lg
              height={35} // Reduced size for lg
              alt="app store"
            />
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-10">
        <p className="text-center text-lg font-medium text-[#5E6282]">
          All rights reserved @jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
