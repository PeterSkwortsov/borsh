'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';


import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";


import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


export default function Painting() {

  
    return (
      <>
        <button className="m-5 shadow-xl">
          <Link
            href={`./#group`}
            className="btn btn-neutral bg-white text-black max-sm:text-sm"
          >
            <Image
              src="/arrow1.svg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "50%" }}
            />
            Назад
          </Link>
        </button>
        <div className="overflow-x-auto md:max-w-2/3 m-auto mb-5 shadow-xl/20">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="fb">Название</th>
                <th className="fb">Подрамник</th>
                <th className="fb">Цена</th>
                <th className="fb">Изображение</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  Живопись акриловыми красками на холсте<br></br>
                  Масляными красками на холсте
                </td>
                <td>20*20 см</td>
                <td>
                  1.600р<br></br> 2.000р
                </td>
                <td>
                  {" "}
                  <Image
                    src="/4.jpeg"
                    unoptimized
                    width={140}
                    height={140}
                    alt="Picture of the author"
                    className="w-46 md:w-52 lg:w-62 xl:w-72"
                  />
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>
                  {" "}
                  Живопись акриловыми красками на холсте<br></br>
                  Масляными красками на холсте
                </td>
                <td>30*40 см</td>
                <td>
                  2.200р<br></br>2.600р
                </td>
                <td>
                  {" "}
                  <Image
                    src="/3.jpeg"
                    unoptimized
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-46 md:w-52 lg:w-62 xl:w-72"
                  />
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>
                  {" "}
                  Живопись акриловыми красками на холсте<br></br>
                  Масляными красками на холсте
                </td>
                <td>50*70 см</td>
                <td>
                  2.600р<br></br> 3.200р
                </td>
                <td>
                  {" "}
                  <Image
                    src="/2.jpeg"
                    unoptimized
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-46 md:w-52 lg:w-62 xl:w-72"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {/* <p className="text-xs font-bold flex text-center justify-center m-5 mt-8">
            Расписание примерное и может измениться! Актуальную информацию
            уточняйте у меня*
          </p> */}
        </div>

        {/* <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mb-10 mt-10 w-56 md:w-72 lg:w-82 xl:w-102 m-auto"
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
        </Swiper> */}
      </>
    );
}
