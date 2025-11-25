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

      <div className="container mx-auto px-8 lg:px-0 mb-10">
        <div className="mx-auto mt-8 max-w-md rounded overflow-hidden shadow-lg">
          <span className="indicator-item badge bg-orange-600 text-white border-none">
            Новый мастер-класс!
          </span>
          <Image
            src="179.jpg"
            unoptimized
            width={500}
            height={500}
            alt="Расписание на конец ноября"
          ></Image>
         
          <div className="px-6 py-4">
            <div className="card-actions justify-center items-center z-20">
              <p className="font-extrabold flex text-center justify-center">
                Расписание на конец ноября
              </p>
              <a
                className="btn btn-neutral bg-white text-black max-sm:text-sm m-auto"
                href="https://vk.com/borsch_art?from=groups&w=wall-231519644_64"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>

      <Utp />

      <div itemScope className="carousel carousel-center mt-10 mb-10 w-fit">
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
            src="/37.webp"
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

      {/* <div className="container mx-auto px-8 lg:px-0 mb-10">
        <div className="mx-auto mt-8 max-w-md rounded overflow-hidden shadow-lg">
          <span className="indicator-item badge bg-orange-600 text-white border-none">
            Новая программа
          </span>
          <Image
            src="/class.jpg"
            unoptimized
            width={700}
            height={700}
            alt="Расписание мастер классов на сентябрь"
          ></Image>

          <div className="px-6 py-4">
            <div className="card-actions justify-end items-center z-20">
              <p className=" font-extrabold m-auto">
                Для взрослых и детей от 7 лет
              </p>
              <a
                className="btn btn-neutral bg-white text-black max-sm:text-sm m-auto"
                href="https://vk.com/borsch_art?from=groups&w=wall-231519644_43"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContentPrice