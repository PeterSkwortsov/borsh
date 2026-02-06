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
              src="/4.webp"
              unoptimized
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div
            className="card-body"
            id="1"
            aria-label="Мастер-класс по живописи"
          >
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс ПО ЖИВОПИСИ
            </h2>
            <p>
              Не просто рисуете по инструкции, а воплощаете свою идею в жизнь.
              Мы предоставим референсы и поможем на каждом этапе, чтобы у вас
              получилась картина, которую захочется повесить на стену.
            </p>

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

        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <figure>
            <Image
              src="/3.webp"
              unoptimized
              width={200}
              height={200}
              alt="Мастер-класс по ручной лепке из глины"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="2">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по РУЧНОЙ ЛЕПКЕ из глины
            </h2>
            <p>
              Лепим изделия, расписываем ангобами или подглазурными красками.
              Глина запомнит каждое ваше прикосновение.<br></br> Изделие будет
              полностью готово после сушки и обжигов через 4-5 недель.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1800 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/clayModeling"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/2.webp"
              unoptimized
              width={200}
              height={200}
              alt="Групповые занятия для детей и взрослых"
              style={{ width: "200%" }}
            />
          </figure>

          <div
            className="card-body"
            id="3"
            aria-label="Групповые занятия для детей и взрослых"
          >
            <h2 className="card-title text-orange-200 font-extrabold">
              ГРУППОВЫЕ ЗАНЯТИЯ для детей
            </h2>
            <p>
              {" "}
              Работа с глиной развивает моторику рук, усидчивость и уверенность
              в своих силах через регулярную практику в группе сверстников.
              <br></br>
              <br></br>• СТАРТ (4 занятия) – достаточно, чтобы освоить азы,
              снять страх «чистого листа» и создать свои первые работы в разных
              техниках. <br></br>
              <br></br>• ПОГРУЖЕНИЕ (8 занятий) – чтобы увидеть реальный
              прогресс, попробовать сложные проекты.
            </p>

            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 600₽ занятие</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/group"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div> */}

        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Мастер-класс на гончарном круге"
        >
          <figure>
            <Image
              src="/1.webp"
              unoptimized
              width={200}
              height={200}
              alt="Мастер-класс на гончарном круге"
              style={{ width: "200%" }}
            />
          </figure>
          <div
            className="card-body"
            id="4"
            aria-label="Мастер-класс на гончарном круге"
          >
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс НА ГОНЧАРНОМ КРУГЕ
            </h2>
            <p>
              Забудьте о времени. Погрузитесь в вращающийся мир, где ваши руки
              творят форму из хаоса.
            </p>

            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 2200 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href={"./potterWheel"}
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Мастер-класс по выжиганию по дереву"
        >
          <figure>
            <Image
              src="/5.webp"
              unoptimized
              width={200}
              height={200}
              alt="Мастер-класс по выжиганию по дереву"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="5">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по ВЫЖИГАНИЮ по дереву.
            </h2>
            <p>
              Выжигание - один из древнейших видов творчества! Процесс приносит
              умиротворение и спокойствие.
            </p>

            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1000 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/wood-burning"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Мастер-класс по свечеварению"
        >
          <figure>
            <Image
              src="/6.webp"
              unoptimized
              width={200}
              height={200}
              alt="Мастер-класс по свечеварению"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold" id="6">
              Мастер-класс по СВЕЧЕВАРЕНИЮ
            </h2>
            <p>
              Выберите аромат, который ассоциируется у вас с конкретным
              воспоминанием или состоянием.<br></br>
              <br></br>Это проще, чем кажется, а результат впечатляет. Вы уйдете
              не только с готовой свечой, но и со знанием, как повторить это
              дома, чтобы наполнять уютом свои вечера.
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
        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Детский мастер-класс"
        >
          <figure>
            <Image
              src="/170.jpg"
              unoptimized
              width={200}
              height={200}
              alt="Выездной мастер-класс"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body" id="6">
            <h2 className="card-title text-orange-200 font-extrabold" id="7">
              ВЫЕЗДНОЙ мастер-класс<br></br>на ваш праздник
            </h2>
            <p>
              Неважно, где вы: дома, в школе или на лужайке в парке. Мы
              организуем профессиональный творческий процесс в любых условиях.
              Нужны только гости — все материалы и веселое настроение везем с
              собой.<br></br>Добавим ярких красок на ваш День рождения
            </p>
            <span className="indicator-item badge bg-orange-600 text-white border-none">
              Новый формат
            </span>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1900 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/outside-master-class"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Гончарное свидание"
        >
          <figure>
            <Image
              src="/79-3.webp"
              unoptimized
              width={200}
              height={200}
              alt="Гончарное свидание"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold" id="8">
              Гончарное СВИДАНИЕ
            </h2>
            <p>
              Это свидание, которое останется с вами в материальном виде. Вы
              сделаете две вещи (чашки, вазы, тарелки), которые можно
              использовать вместе каждый день, вспоминая, как вы создавали их
              когда-то вместе ❤️
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">6000 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/loveMeeting"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Гончарное свидание"
        >
          <figure>
            <Image
              src="/225.jpg"
              unoptimized
              width={200}
              height={200}
              alt="Подарочный сертификат"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold" id="8">
              Подарочный СЕРТИФИКАТ
            </h2>
            <p>
              Готовое решение — не ломай голову над подарком.<br></br> Получатель сам выберет дату, время и формат
              мастер-класса. Это подарок, который подстраивается под его текущее
              настроение и желания, а не пылится на полке.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1800 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="certificate"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card bg-base-200 image-full w-auto shadow-sm"
          aria-label="Гончарное свидание"
        >
          <figure>
            <Image
              src="/63.webp"
              unoptimized
              width={100}
              height={100}
              alt="Занятия по рисованию"
              style={{ width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold" id="8">
              Занятия по РИСОВАНИЮ и ЛЕПКЕ для ДЕТЕЙ
            </h2>
            <p>
              Нескучные уроки для вашего ребенка от 4-х лет.<br></br>
              <br></br>Получение конкретных навыков. <br></br>Ребенок научиться
              работать с разными материалами (акварель, гуашь, пастель,
              карандаш), освоит основы композиции, перспективы, колористики.
              <br></br>
              Создаст свою первую глиняную посуду.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 600 ₽</p>

              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="children"
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
