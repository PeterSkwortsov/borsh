import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MasterClassPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/256.jpg",
      title: "Бусины и брелки из керамики",
    },
    {
      id: 2,
      image: "/257.jpg",
      title: "Кулоны ручной работы",
    },
    {
      id: 3,
      image: "/258.jpg",
      title: "Авторские подвески из глины",
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

  // JSON-LD для мастер-класса (Event)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по созданию значков и подвесок из глины в Нижнем Новгороде",
    description:
      "Создайте уникальные бусины, брелоки и кулоны своими руками. Мастер-класс включает все материалы: специальные краски, глину, два обжига в муфельной печи и глазуровку изделия. Вы сможете слепить до 5 маленьких бусин-фигурок и расписать подглазурными красками и ангобами.",
    image: [
      "https://borsch-art.ru/256.jpg",
      "https://borsch-art.ru/257.jpg",
      "https://borsch-art.ru/258.jpg",
    ],
    url: "https://borsch-art.ru/master-class-beads/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: "2026-03-01",
    endDate: "2026-12-31",
    location: {
      "@type": "Place",
      name: "Творческая студия Вики Борщ",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ломоносова, 9",
        addressLocality: "Нижний Новгород",
        addressRegion: "Нижегородская область",
        postalCode: "603105",
        addressCountry: "RU",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: "1800",
      highPrice: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс",
          price: "3500",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие по созданию значков и подвесок",
          availability: "https://schema.org/InStock",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 1,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Мастер-класс для двоих",
          price: "6000",
          priceCurrency: "RUB",
          description: "Занятие для двоих по созданию значков и подвесок",
          availability: "https://schema.org/InStock",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 2,
            minValue: 2,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Групповой мастер-класс",
          price: "1800",
          priceCurrency: "RUB",
          description: "Групповое занятие от 3-х человек",
          availability: "https://schema.org/InStock",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
      ],
    },
    organizer: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
      url: "https://borsch-art.ru",
    },
    performer: {
      "@type": "Person",
      name: "Виктория Борщ",
      description: "Мастер-керамист",
    },
    typicalAgeRange: "7+",
    duration: "PT2H",
    maximumAttendeeCapacity: 8,
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
        item: "https://borsch-art.ru/#5",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Создание авторских значков и подвесок",
        item: "https://borsch-art.ru/master-class-beads/",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Мастер-класс по созданию значков и подвесок из глины | Керамическая
          мастерская Вики Борщ
        </title>
        <meta
          name="description"
          content="Создайте уникальные бусины, брелоки и кулоны своими руками. Индивидуальные и групповые занятия по лепке из глины. Все материалы включены. от 1800₽"
        />
        <meta
          name="keywords"
          content="значки из глины, подвески ручной работы, бусины керамические, брелоки из глины, мастер-класс украшения, Нижний Новгород"
        />
        <meta
          property="og:title"
          content="Мастер-класс по созданию значков и подвесок | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Хотите создать брелок с вашим любимым питомцем? Красивый кулон на память или бусины для ожерелья? Легко! Все материалы включены."
        />
        <meta property="og:image" content="https://borsch-art.ru/256.jpg" />
        <meta
          property="og:url"
          content="https://borsch-art.ru/master-class-beads/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Творческая студия Вики Борщ" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex flex-wrap gap-2">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#5" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Создание авторских значков и подвесок</span>
          </li>
        </ul>
      </ol>

      <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Декоративная полоска сверху */}
          <div className="h-2 bg-gradient-to-r from-amber-400 to-rose-400"></div>

          <div className="p-3 sm:p-6">
            {/* Заголовок */}
            <h1 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 text-center">
              Создание авторских
              <span className="block text-amber-600">значков и подвесок</span>
            </h1>

            {/* Подзаголовок с эмоциональным обращением */}
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto border-b border-stone-200 pb-8 mb-8">
              Хотите создать брелок с вашим любимым питомцем? Красивый кулон на
              память или бусины для ожерелья?
              <span className="block font-semibold text-amber-700 mt-2">
                Легко!
              </span>
            </p>

            {/* Описание процесса */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-stone-800 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mr-3">
                    🎨
                  </span>
                  Что вас ждет
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Мастер-класс включает в себя все необходимые материалы:
                  <span className="font-medium text-stone-800">
                    {" "}
                    специальные краски, глину
                  </span>
                  , два обжига в муфельной печи и глазуровку изделия.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Лучше всего, если вы уже представляете, что хотите создать.
                  Если нет — я предложу вам идеи и референсы.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-stone-800 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mr-3">
                    🖌️
                  </span>
                  Процесс создания
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Вы сможете слепить{" "}
                  <span className="font-medium text-stone-800">
                    до 5 маленьких бусин-фигурок
                  </span>{" "}
                  и расписать подглазурными красками и ангобами. Это не сложно и
                  очень увлекательно!
                </p>
                <p className="text-stone-600 leading-relaxed">
                  После выберете карабин и цвет шнурка. Через 4-5 недель вы
                  получите обожженные изделия с комплектом фурнитуры и
                  самостоятельно соберете целый обвес!
                </p>
              </div>
            </div>

            {/* Блок с ценами */}
            <div className="bg-stone-100 rounded-2xl p-6 md:p-8 mb-10">
              <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                Стоимость участия
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Индивидуальный */}
                <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-600 text-3xl mb-2">👤</div>
                  <div className="text-lg font-semibold text-stone-800 mb-1">
                    Индивидуальный
                  </div>
                  <div className="text-2xl font-bold text-amber-700">
                    3500 ₽
                  </div>
                </div>

                {/* Для двоих */}
                <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-600 text-3xl mb-2">👥</div>
                  <div className="text-lg font-semibold text-stone-800 mb-1">
                    Для двоих
                  </div>
                  <div className="text-2xl font-bold text-amber-700">
                    6000 ₽
                  </div>
                </div>

                {/* Групповой */}
                <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-amber-600 text-3xl mb-2">👪</div>
                  <div className="text-lg font-semibold text-stone-800 mb-1">
                    Групповой<br></br> (от 3 чел)
                  </div>
                  <div className="text-2xl font-bold text-amber-700">
                    1800 ₽/чел
                  </div>
                </div>
              </div>

              <p className="text-md text-stone-700 text-center mt-4">
                Все материалы включены в стоимость
              </p>
            </div>

            {/* Призыв к действию */}
            <div className="text-center">
              <h4 className="text-2xl font-semibold text-stone-800 mb-3">
                Готовы создать свой уникальный обвес?
              </h4>
              <p className="text-lg text-stone-600 mb-6">
                Пишите! Согласуем дату и время
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://t.me/vika_borsch99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300 inline-block"
                >
                  Забронировать дату
                </a>
              </div>

              <p className="text-sm text-stone-400 mt-6">
                Только по предварительной записи!
              </p>
            </div>
          </div>
        </div>

        {/* Галерея изображений */}
        {slides.length > 0 && (
          <div className="max-w-xl mx-auto p-4 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Примеры <span className="text-amber-600">работ</span>
            </h2>
            
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
            <div className="flex justify-center mt-6 space-x-4 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                    index === currentSlide
                      ? "ring-2 ring-amber-500 ring-offset-2 transform scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Показать слайд ${index + 1}`}
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="w-24 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}