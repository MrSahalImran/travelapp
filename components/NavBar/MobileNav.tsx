import React from "react";
import hamburger from "@/public/assets/hamburger.svg";
import Image from "next/image";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { NAV_CONTENT } from "@/data";
import { NavItem } from "@/types";
import logo from "@/public/assets/Logo.svg";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={hamburger}
          alt="hamburger"
          width={36}
          height={36}
          className="block md:hidden"
        />
      </SheetTrigger>
      <SheetContent className="bg-[#fff1da]">
        <SheetHeader>
          <Image
            src={logo}
            width={80}
            height={10}
            alt="logo"
            className="mb-10"
          />
        </SheetHeader>

        {NAV_CONTENT.map((item: NavItem) => (
          <SheetTitle
            key={item.title}
            className={`text-[#181e4b] flex py-2 justify-center capitalize font-medium text-[17] font-[Goolge Sans] ${
              item.title === "sign up"
                ? " px-2 py-1 rounded-md border-[#df6951] border-2"
                : ""
            }`}
          >
            {item.title}
          </SheetTitle>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
