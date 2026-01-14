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

      <div itemScope className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/202.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/140.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/63.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/195.jpg"
            itemProp="image"
            unoptimized
            width={534}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/142.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/160.jpg"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/89.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/119.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>

        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/36.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/141.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/139.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>

        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/76.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/31.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Клиент создает изделие из глины"
          />
        </div>
     
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/45.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>

        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/80.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/47.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/102.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
        <div className="carousel-item h-full" itemProp="contentUrl">
          <Image
            src="/143.webp"
            itemProp="image"
            unoptimized
            width={300}
            height={100}
            alt="Интерьер студии"
          />
        </div>
      </div>
   
    </>
  );
};

export default ContentPrice