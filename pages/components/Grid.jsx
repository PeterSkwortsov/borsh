"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Grid = () => {
  const router = useRouter();

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:px-20 mb-20"
        id="group"
      >
        <div className="card bg-base-200 image-full w-auto shadow-sm" id="1">
          <figure>
            <Image
              src="/4.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="1">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по живописи
            </h2>
            <p>
              На каждую тему мастер-класса предоставляем разные идеи и
              референсы, чтобы у участников получились интересные и
              индивидуальные работы.
            </p>
            <span className="indicator-item badge bg-orange-600 text-white border-none">
              Новая программа
            </span>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1600 ₽</p>
              <a
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="./painting"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/3.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="2">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по ручной лепке из глины
            </h2>
            <p>
              Лепим изделия из глины, расписываем ангобами или подглазурными
              красками. Есть возможность расписать глазурями после первого
              обжига.<br></br> Изделие готово через 4-5 недель.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1600 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/clayModeling"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/2.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>

          <div className="card-body" id="3">
            <h2 className="card-title text-orange-200 font-extrabold">
              Групповые занятия для детей и взрослых
            </h2>
            <p> Абонемент на 4 и 8 занятий.</p>
            <span className="indicator-item badge bg-orange-600 text-white border-none">
              Новая программа
            </span>

            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1800 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/group"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/1.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="4">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс на гончарном круге
            </h2>
            <p>
              Почувствуйте себя настоящим мастером гончарного искусства на нашем
              мастер-классе! Изделия после изготовления расписываем ангобами или
              подглазурными красками. Есть возможность расписать глазурями после
              первого обжига.
            </p>
            <span className="indicator-item badge bg-orange-600 text-white border-none">
              Новая программа
            </span>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 2000 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href={"./potterWheel"}
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/5.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="5">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по выжиганию по дереву.
            </h2>
            <p>
              Выжигание - один из древнейших видов творчества! Процесс приносит
              умиротворение и спокойствие.
            </p>

            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1.000 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/wood-burning"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/6.jpeg"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold" id="6">
              Мастер-класс по свечеварению
            </h2>
            <p>
              За мастер-класс вы получаете две ароматических свечи в гипсовом
              кашпо/стеклянном стакане/скорлупе кокоса. Работаем на кокосовом и
              соевом воске.<br></br>
              Есть варианты декора свечей и гипсовых кашпо.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1800 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/candle-making"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
