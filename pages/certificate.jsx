import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

const Certificate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/164.jpg",
      title: "Подарочный сертификат в конверте",
    },
    {
      id: 2,
      image: "/214.jpg",
      title: "Электронный подарочный сертификат",
    },
    {
      id: 3,
      image: "/213.png",
      title: "Подарочный сертификат на мастер-класс",
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

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // JSON-LD для подарочного сертификата
  const certificateJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Подарочный сертификат в творческую студию Вика Борщ",
    description:
      "Подарочный сертификат на любой мастер-класс в Нижнем Новгороде. Рисование, гончарное дело, свечеварение. Действителен 12 месяцев.",
    image: [
      "https://borsch-art.ru/225.jpg",
      "https://borsch-art.ru/250.jpg",
      "https://borsch-art.ru/251.jpg",
    ],
    brand: {
      "@type": "Brand",
      name: "Творческая студия Вики Борщ",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: "1800",
      highPrice: "20000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Подарочный сертификат на 1800₽",
          price: "1800",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Подарочный сертификат на 3000₽",
          price: "3000",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Подарочный сертификат на 5000₽",
          price: "5000",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Подарочный сертификат на 7000₽",
          price: "7000",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Подарочный сертификат на 10000₽",
          price: "10000",
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    category: "Подарочный сертификат",
    audience: {
      "@type": "Audience",
      audienceType: "Взрослые и дети от 4 лет",
    },
    availabilityEnds: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    material: "Бумажный конверт / Электронный",
  };

  // JSON-LD для хлебных крошек
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://borsch-art.ru/#group",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Подарочный сертификат",
        item: "https://borsch-art.ru/certificate/",
      },
    ],
  };

  // JSON-LD для отзывов (если есть)
  const reviewsJsonLd = [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Елена",
      },
      reviewBody:
        "Покупала сертификат на свечеварение для любимой подруги. Очень удобно, что можно выбрать любую сумму. Подруга в восторге!",
      itemReviewed: {
        "@type": "Product",
        name: "Подарочный сертификат",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Михаил",
      },
      reviewBody:
        "Дарил девушке сертификат на гончарное свидание. Всё организовано отлично, сертификат красивый, в конверте. Девушка и я остались довольны",
      itemReviewed: {
        "@type": "Product",
        name: "Подарочный сертификат",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>
          Подарочный сертификат на мастер-класс в Нижнем Новгороде | Студия Вики
          Борщ
        </title>
        <meta
          name="description"
          content="Подарочный сертификат на любой мастер-класс в творческой студии Вика Борщ. Рисование, гончарное дело, свечеварение. Бумажный или электронный. Действует 12 месяцев. От 1800₽"
        />
        <meta
          name="keywords"
          content="подарочный сертификат, сертификат на мастер-класс, подарок в Нижнем Новгороде, творческий подарок"
        />
        <meta name="author" content="Виктория Борщ" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Подарочный сертификат в студию Вика Борщ"
        />
        <meta
          property="og:description"
          content="Подарите творчество! Сертификат на любой мастер-класс в Нижнем Новгороде. От 1800₽"
        />
        <meta property="og:image" content="https://borsch-art.ru/164.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/certificate/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(certificateJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#group" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Подарочный сертификат</span>
          </li>
        </ul>
      </ol>

      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 mb-10">
        <h1 className="mb-5 text-2xl font-extrabold leading-tight text-gray-900">
          Подарочный сертификат в Нижнем Новгороде
        </h1>

        <h2 className="text-gray-600 mt-5 mb-5 text-md">
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
                    <h3 className="text-lg font-bold text-gray-800">
                      от 1800 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-sm font-medium">
                    Вы можете выбрать любую сумму
                  </p>
                  <a
                    href="https://t.me/vika_borsch99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-neutral bg-white text-black max-sm:text-sm inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
                  >
                    <Image
                      src="/basket.svg"
                      width={24}
                      height={24}
                      alt="Купить сертификат"
                      style={{ width: "24px", height: "24px" }}
                    />
                    Купить сертификат
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-1 mt-5">
          <h2 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
            Отзывы о сертификатах
          </h2>
        </div>
      </div>

      <div className="max-w-xl mx-auto p-4 mb-10">
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
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 z-10"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 z-10"
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
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
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Миниатюры */}
        <div className="flex justify-center mt-6 space-x-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-orange-500 ring-offset-2 transform scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Показать ${slide.title}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-24 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
