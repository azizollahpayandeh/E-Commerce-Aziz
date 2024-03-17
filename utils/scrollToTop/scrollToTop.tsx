"use client";
import { Link } from "next-scroll";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { UseScrollPosition } from "@/hooks/useScrollPosition/useScrollPosition";

export default function ScrollToTop() {
  const scrollPosition = UseScrollPosition();

  return (
    <>
      <div className="fixed bottom-[20px] left-[20px] cursor-pointer z-50   ">
        <div className={`${scrollPosition > 600 ? "block " : "hidden"}`}>
          <div className="w-[50px] h-[50px] rounded-full bg-[#F7F7FC] text-black flex justify-center items-center">
            <Link to="MainSec">
              <FaArrowUp className="text-[15px]   " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
