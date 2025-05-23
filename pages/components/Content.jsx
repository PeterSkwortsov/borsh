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
      <h5 className="text-2xl font-bold flex text-center justify-center m-5 mt-16">
        Занятия проходят в светлой мастерской
      </h5>

      <Utp />

      <div className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/30.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/35.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/36.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/33.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/34.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/16.jpeg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/13.jpeg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default ContentPrice