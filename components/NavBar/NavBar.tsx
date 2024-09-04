"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/Logo.svg";
import { NAV_CONTENT } from "@/data";
import { NavItemType } from "@/types";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      if (currentOffset > prevOffset) {
        // Scrolling down
        setIsScrolled(true);
      } else {
        // Scrolling up
        setIsScrolled(false);
      }
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevOffset]);
  return (
    <nav
      className={`sm:bg-[#fff1da] md:bg-transparent w-screen  max-w-screen-xl fixed top-0 md:left-auto left-0 py-3 md:py-5 xl:py-10 z-50 flex items-center justify-between px-4 md:px-8 ${
        isScrolled
          ? "-translate-y-full transition-transform duration-300"
          : "translate-y-0"
      }`}
    >
      <div>
        <Link href={"/"}>
          <Image src={logo} width={100} height={50} alt="Logo" />
        </Link>
      </div>
      <div className="navitems">
        <menu className="hidden md:flex md:pr-20 xl:pr-0 gap-8 xl:gap-20 ">
          {NAV_CONTENT.map((item: NavItemType) => (
            <li key={item.title}>
              <Link
                href={"/"}
                className={`text-[#181E4B] capitalize font-medium lg:text-[17px] tracking-tighter md:text-sm  font-[Goolge Sans] ${
                  item.title === "sign up"
                    ? "border px-4 py-2 rounded-md border-black"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </menu>
      </div>
      <div className="block md:hidden ">
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
