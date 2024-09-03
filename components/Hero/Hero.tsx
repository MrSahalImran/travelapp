import Image from "next/image";
import React from "react";
import heroImage from "@/public/assets/heroImage.png";
import Button from "../Button/Button";
import RoundButton from "../Button/RoundButton";

const Hero = () => {
  return (
    <section className="w-full pt-10 md:pt-0 h-auto md:h-[35em] flex flex-col md:flex-row  items-center">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center py-12 sm:py-20 sm:mt-10 gap-6 md:gap-2 lg:gap-0 px-2 md:px-8 lg:px-16">
        <p className="uppercase tracking-tighter text-[#e8811b] text-lg md:text-xl font-bold">
          Best Destinations Around the World
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight md:leading-tight lg:leading-tight tracking-tighter font-bold font-[Volkhov] text-[#181E4B] sm:mt-12 md:mt-16 mb-4 ">
          Travel,{" "}
          <span
            style={{
              backgroundImage: "url(/assets/Decore.svg)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
            }}
          >
            enjoy
          </span>{" "}
          and live a new and full life
        </h1>
        <p className="w-full md:w-[90%] font-md text-sm md:text-base lg:text-lg text-[#5E6282] leading-relaxed md:leading-normal mb-4">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-10">
          <Button text={"Find out more"} color={"yellow-300"} />
          <RoundButton />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start mt-10 md:mt-0">
        <Image
          src={heroImage}
          width={800}
          height={400}
          alt="traveller"
          className="object-contain left-0 max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
