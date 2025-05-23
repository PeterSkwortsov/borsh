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

      <div className="carousel carousel-center rounded-box mt-10 mb-10 m-auto flex justify-center">
        <div className="carousel-item ">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/11.jpeg"
            unoptimized
            width={100}
            height={100}
            alt="Picture of the author"
          
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/12.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/13.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/14.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/15.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/16.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item">
          <Image placeholder="blur" blurDataURL="./placeholder.jpg" 
            src="/13.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default ContentPrice