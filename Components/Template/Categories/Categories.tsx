"use client"
import TitleTemplate from "@/Components/Modules/titleTemplate/titleTemplate";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "@/Components/Modules/ProductCard/ProductCard";


export default function Categories() {
  return (
<>
      <div className="pt-[60px]">
        <div className="TitleTemplate">
        <TitleTemplate title="Today’s" />
        </div>

        <div className="title flex justify-between pt-[25px] items-center">
            <h1 className="md:text-[36px] text-[30px] font-[600] ">Flash Sales</h1>
            <div className="flex gap-2">
                <Image width={50} height={50} alt="arrow" src="/assets/LeftArrow.png" className="prevEl2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] " />
                <Image width={50} height={50} alt="arrow" src="/assets/RightArrow.png" className="nextEl2 w-[35px] h-[35px] md:w-[50px] md:h-[50px] " />
            </div>
        </div>

        <div className="sliders mt-[50px] flex justify-center items-center ">
        <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className=""
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              navigation={{
                prevEl: ".prevEl2",
                nextEl: ".nextEl2",
              }}
              breakpoints={{
                1500: {
                  slidesPerView: 6,
                },
                1350: {
                  slidesPerView: 5,
                },
                1020: {
                  slidesPerView: 4,
                },
                650: {
                  slidesPerView: 3,
                },
                488: {
                  slidesPerView: 2,
                },
                250: {
                  slidesPerView: 1,
                },
                
              }}
            >

              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="">
              <ProductCard />
              </SwiperSlide>
            </Swiper>
        </div>
        <div className="mt-[60px]">
          <hr className="h-[3px] opacity-80 w-[100%]"></hr>
        </div>

      </div>
    </>
  );
}
