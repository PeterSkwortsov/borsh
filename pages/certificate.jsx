import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
const certificate = () => {

const [currentSlide, setCurrentSlide] = useState(0);
const slides = [
  {
    id: 1,
    image: "/164.jpg",
  },
  {
    id: 2,
    image: "/214.jpg",
  },
  {
    id: 3,
    image: "/213.png",
  },
];

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

const goToSlide = (index) => {
  setCurrentSlide(index);
};

// Автопрокрутка (опционально)
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000);

  return () => clearInterval(interval);
}, [currentSlide]);



  return (
    <>
      <Head>
        <title>Подарочный сертификат</title>
        <meta
          name="description"
          content="Подарочный сертификат в творческую мастерскую Вики Борщ"
        />
        <meta name="keywords" content="сертификат, подарок" />
        <meta name="author" content="Виктория Борщ" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Подарочный сертификат в студию Вики Борщ"
        />
      </Head>

      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumbs text-sm m-2"
      >
        <ul>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button className="indicator-item badge bg-orange-600 text-white border-none">
              <Link href={`./#group`} itemProp="item" title="Главная">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="0"></meta>
            </button>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button>
              <Link
                href={`https://borsch-art.ru/certificate/`}
                itemProp="item"
                title="Подарочный сертификат"
              >
                <span itemProp="name">Подарочный сертификат</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      {/* ./#group */}

      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 mb-10">
        <h1
          className="mb-5 text-3xl font-extrabold leading-tight text-gray-900"
          role="sectionhead"
        >
          Подарочный сертификат в Нижнем Новгороде
        </h1>
        <h2 className=" text-gray-600 mt-5 mb-5">
          Сертификат позволяет участвовать в любом мастер-классе студии.
          <br />
          Может быть оформлен в бумажном красивом конверте (курьером или
          самовывоз) или электронном виде. <br />
          Используется только по предварительной записи! <br />
          Действует 12 месяцев с момента приобретения, не подлежит обмену и
          возврату.
        </h2>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className=" text-lg font-bold text-gray-800">
                      от 1800 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-sm font-medium">
                    Вы можете выбрать любую сумму
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Кнопка купить сертификат"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-1 mt-5">
          <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
            Отзывы
          </h3>
        </div>
     
      </div>

      <div className="max-w-xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* Контейнер слайдов */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            aria-label="Предыдущий слайд"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            aria-label="Следующий слайд"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Индикаторы */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          {/* Счетчик слайдов */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Миниатюры (опционально) */}
        <div className="flex justify-center mt-6 space-x-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-blue-500 ring-offset-2 transform scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={slide.image}
                alt={`Миниатюра ${slide.title}`}
                className="w-24 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default certificate