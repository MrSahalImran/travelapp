import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
const RoundButton = () => {
  return (
    <button className=" text-sm gap-4 flex items-center text-[#5E6282] bg-transparent">
      <MdOutlinePlayCircleFilled className="text-[#DF6951] text-5xl  " />
      Play Demo
    </button>
  );
};

export default RoundButton;
