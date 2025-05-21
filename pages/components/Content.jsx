import React from 'react'
import Image from 'next/image';
import Utp from './Utp';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";


const ContentPrice = () => {

  


  return (
    <>
      <h5 className="text-2xl font-bold flex text-center justify-center m-5 mt-16 text-orange-400">
        Занятия проходят в просторной светлой мастерской
      </h5>

      <Utp />

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-15 mb-10 w-56 md:w-72 lg:w-82 xl:w-102 m-auto"
      >
        <SwiperSlide>
          <Image
            src="/14.jpeg"
            unoptimized
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/15.jpeg"
            unoptimized
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/16.jpeg"
            unoptimized
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/13.jpeg"
            unoptimized
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/12.jpeg"
            unoptimized
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ContentPrice