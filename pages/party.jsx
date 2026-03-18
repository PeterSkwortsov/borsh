// pages/art-party.js или components/ArtPartyPage.js

import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function ArtPartyPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/124.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 2,
      image: "/115.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 3,
      image: "/123.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 4,
      image: "/86.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 5,
      image: "/87.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 6,
      image: "/112.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 7,
      image: "/232.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 8,
      image: "/233.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 9,
      image: "/114.webp",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 10,
      image: "/266.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 11,
      image: "/267.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
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

  // JSON-LD для услуги (Service)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Арт-вечеринка, девичник или День рождения в творческой студии",
    description:
      "Напишите картину на холсте за 3 часа даже без опыта. Уютная студия, чай и печеньки, всё включено. Выездные мероприятия. 6 лет опыта организации мероприятий до 30 человек.",
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
      url: "https://borsch-art.ru",
    },
    areaServed: {
      "@type": "City",
      name: "Нижний Новгород",
    },
    serviceType: "Арт-вечеринка",
    audience: {
      "@type": "Audience",
      audienceType: "Взрослые и дети от 7 лет",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 6,
      lowPrice: "1600",
      highPrice: "3200",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Живопись акрилом 20х20 см",
          price: "1600",
          priceCurrency: "RUB",
          description: "Холст 20х20 см, акриловые краски",
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 20х20 см",
          price: "2000",
          priceCurrency: "RUB",
          description: "Холст 20х20 см, масляные краски",
        },
        {
          "@type": "Offer",
          name: "Живопись акрилом 30х40 см",
          price: "2200",
          priceCurrency: "RUB",
          description: "Холст 30х40 см, акриловые краски",
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 30х40 см",
          price: "2600",
          priceCurrency: "RUB",
          description: "Холст 30х40 см, масляные краски",
        },
        {
          "@type": "Offer",
          name: "Живопись акрилом 50х70 см",
          price: "2600",
          priceCurrency: "RUB",
          description: "Холст 50х70 см, акриловые краски",
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 50х70 см",
          price: "3200",
          priceCurrency: "RUB",
          description: "Холст 50х70 см, масляные краски",
        },
      ],
    },
  };

  // JSON-LD для мастер-класса по лепке (Event)
  const clayEventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по лепке из глины на арт-вечеринке",
    description:
      "Лепка из глины для компании. Тарелочки, миски, пиалы, подсвечники, кружки, чайные пары, вазочки, менажницы.",
    url: "https://borsch-art.ru/art-party/",
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
      highPrice: "2700",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Лепка тарелочки, миски, пиалы, подсвечника",
          price: "1800",
          priceCurrency: "RUB",
        },
        {
          "@type": "Offer",
          name: "Лепка кружки, чайной пары, вазочки до 15 см",
          price: "2200",
          priceCurrency: "RUB",
        },
        {
          "@type": "Offer",
          name: "Лепка чайной пары или менажницы",
          price: "2700",
          priceCurrency: "RUB",
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
    duration: "PT2H30M",
    maximumAttendeeCapacity: 30,
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
        item: "https://borsch-art.ru/#2",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Арт-вечеринка",
        item: "https://borsch-art.ru/art-party/",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Арт-вечеринка, девичник или День рождения в творческой студии | Вика
          Борщ
        </title>
        <meta
          name="description"
          content="Напишите картину на холсте за 3 часа даже без опыта. Уютная студия, чай и печеньки, всё включено. Выездные мероприятия. 6 лет опыта организации праздников до 30 человек."
        />
        <meta
          name="keywords"
          content="арт-вечеринка, день рождения в студии, девичник, корпоратив, тимбилдинг, мастер-класс по рисованию, лепка из глины, Нижний Новгород"
        />
        <meta
          property="og:title"
          content="Арт-вечеринка, девичник или День рождения в творческой студии"
        />
        <meta
          property="og:description"
          content="Проведем арт-вечеринку в студии или с выездом. Картина за 3 часа даже без опыта. Свой напитки приветствуются!"
        />
        <meta property="og:image" content="https://borsch-art.ru/264.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/art-party/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Творческая студия Вики Борщ" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clayEventJsonLd).replace(/</g, "\\u003c"),
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
            <Link href="./#2" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Арт-вечеринка</span>
          </li>
        </ul>
      </ol>

      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Основной контент */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Хедер с настроением */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-stone-600">
                Свободные даты уточняйте по телефону
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6">
              Проведем
              <span className="block md:inline bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                {" "}
                арт-вечеринку
              </span>
            </h1>

            <p className="text-2xl md:text-2xl text-stone-700 font-light max-w-3xl mx-auto">
              Девичник или День рождение в творческой студии!
            </p>
          </div>

          {/* Галерея настроения (карточки с преимуществами) */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🎨</div>
              <h2 className="text-xl font-bold text-stone-800 mb-3">
                Картина за 3 часа
              </h2>
              <p className="text-stone-600">
                Даже если никогда не держали кисть! Без посторонних, только ваши
                люди.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🥂</div>
              <h2 className="text-xl font-bold text-stone-800 mb-3">
                Свои напитки и закуски
              </h2>
              <p className="text-stone-600">
                Можете принести с собой. А мы угостим безлимитным чаем/кофе с
                печеньками.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🚚</div>
              <h2 className="text-xl font-bold text-stone-800 mb-3">
                Выездное мероприятие
              </h2>
              <p className="text-stone-600">
                Можем организовать праздник на вашей площадке!
              </p>
            </div>
          </div>

          {/* Основной блок с описанием */}
          <div className="bg-white rounded-4xl shadow-2xl overflow-hidden mb-20">
            <div className="grid md:grid-cols-2">
              {/* Левая колонка - атмосферное фото/фон */}
              <div className="h-full">
                <Image
                  src="/264.jpg"
                  unoptimized
                  width={533}
                  height={300}
                  alt="Мастер-класс по живописи маслом"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Правая колонка - текст и преимущества */}
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
                  Почему стоит прийти именно в мою студию?
                </h2>

                <div className="space-y-6">
                  {/* Опыт */}
                  <div className="flex gap-4">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">
                        6 лет опыта
                      </h3>
                      <p className="text-stone-600">
                        Большой опыт организации мероприятий и работы с
                        взрослыми и детьми до 30 человек!
                      </p>
                    </div>
                  </div>

                  {/* Атмосфера */}
                  <div className="flex gap-4">
                    <span className="text-2xl">💫</span>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">
                        Особая атмосфера
                      </h3>
                      <p className="text-stone-600">
                        Людям очень нравится атмосфера нашей студии и внимание к
                        каждому. Это не мои слова, вы можете убедиться в этом,
                        прочитав отзывы.
                      </p>
                    </div>
                  </div>

                  {/* Всё включено */}
                  <div className="flex gap-4">
                    <span className="text-2xl">🖼️</span>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">
                        Всё включено
                      </h3>
                      <p className="text-stone-600">
                        Краски, кисти, холст, фартук. Внимание мастера к
                        каждому.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-8 p-4 bg-purple-50 rounded-2xl">
                  <p className="text-purple-800 flex items-center gap-2">
                    <span className="text-xl">🎁</span>
                    Также можем организовать выездное мероприятие
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Блок с ценами (в стиле билетов) */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {/* Карточка 20x20 см */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-200 transition-all group">
              <div className="text-sm uppercase tracking-wider text-pink-600 font-bold mb-2">
                Компактный формат
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-2">
                20 x 20 см
              </div>

              <div className="space-y-3 text-stone-600 mb-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-pink-500">🎨</span> Акрил
                  </span>
                  <span className="font-semibold text-stone-800">1 600 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-amber-600">🖌️</span> Масло
                  </span>
                  <span className="font-semibold text-stone-800">2 000 ₽</span>
                </div>
              </div>

              <a
                href="https://t.me/vika_borsch99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl transition-all group-hover:shadow-lg block text-center"
              >
                Забронировать дату
              </a>
            </div>

            {/* Карточка 30x40 см - ПОПУЛЯРНАЯ */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200 transform md:scale-105 relative group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный выбор
              </div>
              <div className="text-sm uppercase tracking-wider text-pink-600 font-bold mb-2 mt-4">
                Оптимальный выбор
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-2">
                30 x 40 см
              </div>

              <div className="space-y-3 text-stone-600 mb-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-pink-500">🎨</span> Акрил
                  </span>
                  <span className="font-semibold text-stone-800">2 200 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-amber-600">🖌️</span> Масло
                  </span>
                  <span className="font-semibold text-stone-800">2 600 ₽</span>
                </div>
              </div>

              <a
                href="https://t.me/vika_borsch99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl transition-all group-hover:shadow-lg block text-center"
              >
                Забронировать дату
              </a>
            </div>

            {/* Карточка 50x70 см */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-200 transition-all group">
              <div className="text-sm uppercase tracking-wider text-pink-600 font-bold mb-2">
                Большой формат
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-2">
                50 x 70 см
              </div>

              <div className="space-y-3 text-stone-600 mb-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="flex items-center gap-2">
                    <span className="text-pink-500">🎨</span> Акрил
                  </span>
                  <span className="font-semibold text-stone-800">2 600 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-amber-600">🖌️</span> Масло
                  </span>
                  <span className="font-semibold text-stone-800">3 200 ₽</span>
                </div>
              </div>

              <a
                href="https://t.me/vika_borsch99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl transition-all group-hover:shadow-lg block text-center"
              >
                Забронировать дату
              </a>
            </div>
          </div>

          {/* Блок с облаком */}
          <div className="px-4 py-16 md:py-20 lg:py-24">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 gap-8 mb-8">
                <div className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group">
                  <div className="flex items-start gap-6">
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                        Фишкой нашей студии является огромное облако
                      </h2>
                      <p className="text-gray-700">
                        В живую оно кажется гораздо больше, в длину 2 метра и в
                        ширину 1 метр! Создано из синтепона, которым наполняют
                        детские игрушки. Оно создает особенную атмосферу и
                        вдохновляет на новые идеи.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2">
              <div className="carousel-item h-full">
                <Image
                  src="/262.jpg"
                  unoptimized
                  width={534}
                  height={100}
                  alt="Участники мастер-класса"
                />
              </div>
              <div className="carousel-item h-full">
                <Image
                  src="/271.jpg"
                  unoptimized
                  width={300}
                  height={100}
                  alt="Участники мастер-класса"
                />
              </div>
              <div className="carousel-item h-max">
                <Image
                  src="/269.jpg"
                  unoptimized
                  width={300}
                  height={100}
                  alt="Готовые изделия"
                />
              </div>
              <div className="carousel-item h-full">
                <Image
                  src="/268.jpg"
                  unoptimized
                  width={300}
                  height={100}
                  alt="Процесс творчества"
                />
              </div>
              <div className="carousel-item h-max">
                <Image
                  src="/253.jpg"
                  unoptimized
                  width={532}
                  height={100}
                  alt="Работы участников"
                />
              </div>
            </div>
          </div>

 

          {/* Призыв к действию */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 mt-7">
              Готовы создать шедевр?
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Пишите, выберем сюжет и удобное время!
            </p>

            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
              <a
                href="https://t.me/vika_borsch99"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300"
              >
                Забронировать дату
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные стили для анимации */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}