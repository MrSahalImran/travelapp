import { ServiceCardProps } from "@/types";
import Image from "next/image";

const ServiceCard = ({ imgSrc, title, description }: ServiceCardProps) => {
  return (
    <div className="p-5 hover:shadow-2xl hover:shadow-slate-400 rounded-xl w-full flex items-center flex-col gap-3 bg-white shadow-md transform transition-transform duration-300 hover:scale-105">
      <Image
        src={imgSrc}
        width={100}
        height={50}
        alt={title}
        className="w-auto h-auto max-w-full"
      />
      <h1 className="font-semibold capitalize text-xl md:text-2xl text-[#1E1D4C] text-center">
        {title}
      </h1>
      <p className="font-medium text-center text-sm md:text-lg text-[#5E6282]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
