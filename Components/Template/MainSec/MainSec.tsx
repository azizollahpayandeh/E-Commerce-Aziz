"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function MainSec() {
  return (
    <>
      <div className="flex pt-[35px]">
        <div className=" slider hidden lg:flex justify-between lg:flex-col lg:w-[30%]">
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Woman’s Fashion</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Men’s Fashion</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Electronics</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Home & afestyle</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Medicine</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Sports & Outdoor</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Baby’s & Toys</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Groceries & Pets</a>
            <a className="cursor-pointer hover:text-gray-500 tex-[17px]">Health & Beauty</a>
        </div>
        <div className="lleftbar lg:w-[70%] w-[100%]">
        <div className="w-[100%] ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide className="w-[90%] mx-auto"><Image width={1000} height={1000} alt="frame" src="/assets/Frame 560.png"/></SwiperSlide>
            <SwiperSlide className="w-[90%] mx-auto"><Image width={1000} height={1000} alt="frame" src="/assets/Frame 560.png"/></SwiperSlide>
            <SwiperSlide className="w-[90%] mx-auto"><Image width={1000} height={1000} alt="frame" src="/assets/Frame 560.png"/></SwiperSlide>
            <SwiperSlide className="w-[90%] mx-auto"><Image width={1000} height={1000} alt="frame" src="/assets/Frame 560.png"/></SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
    </>
  );
}
