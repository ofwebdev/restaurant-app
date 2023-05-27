import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../../assets/home/slide1.jpg";
import img2 from "../../../../assets/home/slide2.jpg";
import img3 from "../../../../assets/home/slide3.jpg";
import img4 from "../../../../assets/home/slide4.jpg";
import img5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

export default function Category() {
  return (
    <>
      <SectionTitle
        title={`Order Online`}
        subTitle={`From 11:00 am to 12:00 pm`}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
