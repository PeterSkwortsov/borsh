"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Grid = () => {
  // JSON-LD для ItemList (список услуг на главной)
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Мастер-классы и услуги творческой студии Вика Борщ",
    description:
      "Творческие мастер-классы в Нижнем Новгороде: рисование, лепка из глины, гончарный круг, свечеварение, выжигание по дереву, детские занятия, выездные мастер-классы, гончарные свидания и подарочные сертификаты.",
    url: "https://borsch-art.ru/#group",
    numberOfItems: 9,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://borsch-art.ru/painting",
        name: "Мастер-класс по рисованию",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://borsch-art.ru/clayModeling",
        name: "Мастер-класс по лепке из глины",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://borsch-art.ru/potterWheel",
        name: "Мастер-класс на гончарном круге",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://borsch-art.ru/wood-burning",
        name: "Мастер-класс по выжиганию по дереву",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://borsch-art.ru/candle-making",
        name: "Мастер-класс по свечеварению",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://borsch-art.ru/outside-master-class",
        name: "Выездной мастер-класс",
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://borsch-art.ru/loveMeeting",
        name: "Гончарное свидание",
      },
      {
        "@type": "ListItem",
        position: 8,
        url: "https://borsch-art.ru/certificate",
        name: "Подарочный сертификат",
      },
      {
        "@type": "ListItem",
        position: 9,
        url: "https://borsch-art.ru/children",
        name: "Уроки рисования и лепки для детей",
      },
    ],
  };

  // JSON-LD для каждой услуги (ItemPage/Product)
  const servicesJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Мастер-класс по рисованию в Нижнем Новгороде",
      description:
        "Не просто рисуете по инструкции, а воплощаете свою идею в жизнь. Мы предоставим референсы и поможем на каждом этапе, чтобы у вас получилась картина, которую захочется повесить на стену.",
      image: "https://borsch-art.ru/4.webp",
      url: "https://borsch-art.ru/painting",
      offers: {
        "@type": "Offer",
        price: "1600",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Мастер-класс по живописи",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Мастер-класс по лепке из глины в Нижнем Новгороде",
      description:
        "Лепим изделия, расписываем ангобами или подглазурными красками. Глина запомнит каждое ваше прикосновение. Изделие будет полностью готово после сушки и обжигов через 4-5 недель.",
      image: "https://borsch-art.ru/3.webp",
      url: "https://borsch-art.ru/clayModeling",
      offers: {
        "@type": "Offer",
        price: "1800",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Мастер-класс по керамике",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Мастер-класс на гончарном круге в Нижнем Новгороде",
      description:
        "Забудьте о времени. Погрузитесь в вращающийся мир, где ваши руки творят форму из хаоса.",
      image: "https://borsch-art.ru/1.webp",
      url: "https://borsch-art.ru/potterWheel",
      offers: {
        "@type": "Offer",
        price: "2200",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Мастер-класс на гончарном круге",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Мастер-класс по выжиганию по дереву в Нижнем Новгороде",
      description:
        "Выжигание - один из древнейших видов творчества! Процесс приносит умиротворение и спокойствие.",
      image: "https://borsch-art.ru/5.webp",
      url: "https://borsch-art.ru/wood-burning",
      offers: {
        "@type": "Offer",
        price: "1000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Мастер-класс по выжиганию",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Мастер-класс по свечеварению в Нижнем Новгороде",
      description:
        "Выберите аромат, который ассоциируется у вас с конкретным воспоминанием или состоянием. Это проще, чем кажется, а результат впечатляет. Вы уйдете не только с готовой свечой, но и со знанием, как повторить это дома.",
      image: "https://borsch-art.ru/6.webp",
      url: "https://borsch-art.ru/candle-making",
      offers: {
        "@type": "Offer",
        price: "1800",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Мастер-класс по свечеварению",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Выездной мастер-класс в Нижнем Новгороде",
      description:
        "Неважно, где вы: дома, в школе или на лужайке в парке. Мы организуем профессиональный творческий процесс в любых условиях. Нужны только гости — все материалы и веселое настроение везем с собой.",
      image: "https://borsch-art.ru/170.jpg",
      url: "https://borsch-art.ru/outside-master-class",
      offers: {
        "@type": "Offer",
        price: "1900",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Выездной мастер-класс",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Гончарное свидание в Нижнем Новгороде",
      description:
        "Это свидание, которое останется с вами в материальном виде. Вы сделаете две вещи (чашки, вазы, тарелки), которые можно использовать вместе каждый день, вспоминая, как вы создавали их когда-то вместе ❤️",
      image: "https://borsch-art.ru/79-3.webp",
      url: "https://borsch-art.ru/loveMeeting",
      offers: {
        "@type": "Offer",
        price: "6000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Гончарное свидание",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Подарочный сертификат в творческую студию",
      description:
        "Готовое решение — не ломай голову над подарком. Получатель сам выберет дату, время и формат мастер-класса. Это подарок, который подстраивается под его текущее настроение и желания, а не пылится на полке.",
      image: "https://borsch-art.ru/225.jpg",
      url: "https://borsch-art.ru/certificate",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "1800",
        highPrice: "5000",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Подарочный сертификат",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Уроки рисования и лепки из глины для детей в Нижнем Новгороде",
      description:
        "Нескучные уроки для вашего ребенка от 4-х лет. Получение конкретных навыков. Ребенок научится работать с разными материалами (акварель, гуашь, пастель, карандаш), освоит основы композиции, перспективы, колористики. Создаст свою первую глиняную посуду.",
      image: "https://borsch-art.ru/63.webp",
      url: "https://borsch-art.ru/children",
      offers: {
        "@type": "Offer",
        price: "700",
        priceCurrency: "RUB",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      category: "Детские занятия",
    },
  ];

  return (
    <>
      {/* JSON-LD разметка для списка услуг */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* JSON-LD разметка для каждой услуги (массив) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:px-20 mb-20"
        id="group"
      >
        {/* Мастер-класс по рисованию */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/4.webp"
              unoptimized
              width={200}
              height={200}
              alt="Мастер-класс по рисованию акрилом и маслом на холсте"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по рисованию
            </h2>
            <p>
              Не просто рисуете по инструкции, а воплощаете свою идею в жизнь.
              Мы предоставим референсы и поможем на каждом этапе, чтобы у вас
              получилась картина, которую захочется повесить на стену.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1600 ₽</p>
              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/painting"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Мастер-класс по лепке из глины */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
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
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по лепке из глины
            </h2>
            <p>
              Лепим изделия, расписываем ангобами или подглазурными красками.
              Глина запомнит каждое ваше прикосновение.
              <br /> Изделие будет полностью готово после сушки и обжигов через
              4-5 недель.
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

        {/* Мастер-класс на гончарном круге */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
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
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс на гончарном круге
            </h2>
            <p>
              Забудьте о времени. Погрузитесь в вращающийся мир, где ваши руки
              творят форму из хаоса.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 2200 ₽</p>
              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/potterWheel"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Мастер-класс по выжиганию по дереву */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
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
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по выжиганию по дереву
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

        {/* Мастер-класс по свечеварению */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
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
            <h2 className="card-title text-orange-200 font-extrabold">
              Мастер-класс по свечеварению
            </h2>
            <p>
              Выберите аромат, который ассоциируется у вас с конкретным
              воспоминанием или состоянием.
              <br />
              <br />
              Это проще, чем кажется, а результат впечатляет. Вы уйдете не
              только с готовой свечой, но и со знанием, как повторить это дома,
              чтобы наполнять уютом свои вечера.
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

        {/* Выездной мастер-класс */}
        <div className="card bg-base-200 image-full w-auto shadow-sm relative">
          <figure>
            <Image
              src="/170.jpg"
              unoptimized
              width={200}
              height={200}
              alt="Выездной мастер-класс на ваш праздник"
              style={{ width: "200%" }}
            />
          </figure>
          <span className="absolute top-2 right-2 badge bg-orange-600 text-white border-none z-30">
            Новый формат
          </span>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Выездной мастер-класс
              <br />
              на ваш праздник
            </h2>
            <p>
              Неважно, где вы: дома, в школе или на лужайке в парке. Мы
              организуем профессиональный творческий процесс в любых условиях.
              Нужны только гости — все материалы и веселое настроение везем с
              собой.
              <br />
              Добавим ярких красок на ваш День рождения
            </p>
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

        {/* Гончарное свидание */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/79-3.webp"
              unoptimized
              width={200}
              height={200}
              alt="Гончарное свидание для двоих"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Гончарное свидание
            </h2>
            <p>
              Это свидание, которое останется с вами в материальном виде. Вы
              сделаете две вещи (чашки, вазы, тарелки), которые можно
              использовать вместе каждый день, вспоминая, как вы создавали их
              когда-то вместе ❤️
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

        {/* Подарочный сертификат */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/225.jpg"
              unoptimized
              width={200}
              height={200}
              alt="Подарочный сертификат на мастер-класс"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Подарочный сертификат
            </h2>
            <p>
              Готовое решение — не ломай голову над подарком.
              <br /> Получатель сам выберет дату, время и формат мастер-класса.
              Это подарок, который подстраивается под его текущее настроение и
              желания, а не пылится на полке.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 1800 ₽</p>
              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/certificate"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Уроки рисования и лепки для детей */}
        <div className="card bg-base-200 image-full w-auto shadow-sm">
          <figure>
            <Image
              src="/63.webp"
              unoptimized
              width={100}
              height={100}
              alt="Уроки рисования и лепки из глины для детей"
              style={{ width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-200 font-extrabold">
              Уроки рисования и лепки из глины для детей
            </h2>
            <p>
              Нескучные уроки для вашего ребенка от 4-х лет.
              <br />
              <br />
              Получение конкретных навыков. <br />
              Ребенок научится работать с разными материалами (акварель, гуашь,
              пастель, карандаш), освоит основы композиции, перспективы,
              колористики.
              <br />
              Создаст свою первую глиняную посуду.
            </p>
            <div className="card-actions justify-end items-center z-20">
              <p className="text-base">от 700 ₽</p>
              <Link
                className="btn btn-neutral bg-white text-black max-sm:text-sm"
                href="/children"
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
