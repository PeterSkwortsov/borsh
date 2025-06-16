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
            src="/42.webp"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/44.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/51.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/35.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Занятие на гончарном круге"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/36.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/33.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/46.webp"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/31.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/37.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/45.webp"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/47.webp"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>
      </div>
    </>
  );
};

export default ContentPrice