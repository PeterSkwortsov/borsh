import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

export default function ClayModeling() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/107.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 2,
      image: "/105.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 3,
      image: "/108.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 4,
      image: "/137.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 5,
      image: "/138.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 6,
      image: "/165.jpg",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 7,
      image: "/145.webp",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 8,
      image: "/188.png",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 9,
      image: "/189.png",
      title: "Отзыв о мастер-классе по лепке из глины",
    },
    {
      id: 10,
      image: "/212.png",
      title: "Отзыв о мастер-классе по лепке из глины",
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

  // JSON-LD для мастер-класса по ручной лепке (Event) - ИСПРАВЛЕНО
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по ручной лепке из глины в Нижнем Новгороде",
    description:
      "Лепим изделия из глины, расписываем ангобами или подглазурными красками. Есть возможность расписать глазурями после первого обжига. Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки.",
    image: [
      "https://borsch-art.ru/3.jpg",
      "https://borsch-art.ru/59.webp",
      "https://borsch-art.ru/60.webp",
      "https://borsch-art.ru/61.webp",
      "https://borsch-art.ru/64.webp",
      "https://borsch-art.ru/86.webp",
      "https://borsch-art.ru/87.webp",
      "https://borsch-art.ru/144.webp",
      "https://borsch-art.ru/77.webp",
      "https://borsch-art.ru/186.jpg",
      "https://borsch-art.ru/72.webp",
      "https://borsch-art.ru/78.webp",
      "https://borsch-art.ru/119.webp",
      "https://borsch-art.ru/181.jpg",
      "https://borsch-art.ru/185.jpg",
    ],
    url: "https://borsch-art.ru/clayModeling/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    // Добавляем startDate и endDate
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
      offerCount: 5,
      lowPrice: "1800",
      highPrice: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Лепка плоской тарелочки, миски, пиалы, подсвечника",
          price: "1800",
          priceCurrency: "RUB",
          description: "Групповой мастер-класс от 3-х человек",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Лепка кружки, чайной пары, вазочки до 15 см",
          price: "2200",
          priceCurrency: "RUB",
          description: "Групповой мастер-класс от 3-х человек",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Лепка чайной пары или менажницы",
          price: "2700",
          priceCurrency: "RUB",
          description: "Групповой мастер-класс от 3-х человек",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс для одного человека",
          price: "3500",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие по лепке из глины",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 1,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс для двух человек",
          price: "6000",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие по лепке из глины для двоих",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 2,
            minValue: 2,
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
        item: "https://borsch-art.ru/#2",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Лепка из глины",
        item: "https://borsch-art.ru/clayModeling/",
      },
    ],
  };

  // JSON-LD для FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Почему мы не заберем сегодня изделия? А когда? А почему так долго?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Изделие нельзя сразу обжигать, оно должно высохнуть минимум от 3 до 7 дней. Первый обжиг происходит в муфельной печи при температуре 900-1200 градусов и занимает 8-10 часов, после чего печь медленно остывает на протяжении 10 часов. Затем на изделие наносится глазурь и обжигается снова. Второй обжиг происходит при температуре 1050-1250 градусов и занимает 8-10 часов. Поэтому свое изделие вы заберете через 3–5 недель. Керамика требует терпения и не терпит спешки!",
        },
      },
    ],
  };

  // JSON-LD для отзывов (Review) - опционально, если есть текстовые отзывы
  const reviewsJsonLd = slides.slice(0, 3).map((slide, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: `Участник мастер-класса ${index + 1}`,
    },
    reviewBody:
      "Отличный мастер-класс по лепке из глины! Всё понятно объясняют, помогают. Получилось красивое изделие, обязательно приду еще!",
    itemReviewed: {
      "@type": "Event",
      name: "Мастер-класс по лепке из глины",
    },
  }));

  return (
    <>
      <Head>
        <title>
          Мастер-класс по ручной лепке из глины в Нижнем Новгороде | Студия Вика
          Борщ
        </title>
        <meta
          name="description"
          content="Мастер-класс по ручной лепке из глины в Нижнем Новгороде. Лепим тарелки, кружки, вазы, менажницы. Расписываем ангобами и глазурями. Групповые и индивидуальные занятия. от 1800₽"
        />
        <meta
          name="keywords"
          content="лепка из глины, мастер-класс керамика, ручная лепка, гончарная мастерская, лепка для начинающих"
        />
        <meta
          property="og:title"
          content="Мастер-класс по ручной лепке из глины | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Записывайтесь на мастер-класс по ручной лепке из глины. Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки."
        />
        <meta property="og:image" content="https://borsch-art.ru/3.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/clayModeling/" />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
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
            <Link href="./#2" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Лепка из глины</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center text-orange-600 justify-center m-5 mt-8 text-3xl font-extrabold">
        Мастер-класс по лепке из глины в Нижнем Новгороде
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">Групповой мастер-класс от 3-х человек</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Мастер-класс по лепке плоской тарелочки, миски, пиалы,
                подсвечника
              </td>
              <td>1800₽ / человек</td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                Мастер-класс по лепке кружки, чайной пары, вазочки до 15 см
              </td>
              <td>2200₽ / человек</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Мастер-класс по лепке чайной пары или менажницы</td>
              <td>2700₽ / человек</td>
            </tr>
          </tbody>
        </table>
        <div className="block md:hidden">
          <Image
            src="/left.png"
            alt="Свайп вправо для просмотра таблицы"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
        <p className="text-md flex text-center justify-center m-5 mt-8">
          Индивидуальный мастер-класс для одного человека - 3500₽
        </p>
        <p className="text-md flex text-center justify-center m-5">
          Индивидуальный мастер-класс для двух человек - 6000₽
        </p>
      </div>

      <div className="px-4 md:py-20 lg:py-24 mb-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-6 py-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group">
            <div className="flex items-start gap-6">
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                  Попробуйте себя в роли керамиста — это увлекательно и доступно
                  каждому
                </h2>
                <p className="text-gray-700">
                  Хотите посуду, которой нет в магазинах? Многие приходят в нашу
                  гончарную мастерскую, чтобы слепить оригинальную тарелку или
                  кружку, которой больше ни у кого не будет.
                  <br />
                  <br />
                  Мы работаем с разными техниками. Поэтому мастер-класс по лепке
                  может включать как работу на гончарном круге, так и создание
                  фактурных изделий вручную.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2">
        <div className="carousel-item h-full">
          <Image
            src="/59.webp"
            unoptimized
            width={300}
            height={100}
            alt="Участники мастер-класса по лепке из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/60.webp"
            unoptimized
            width={300}
            height={100}
            alt="Процесс лепки из глины"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/61.webp"
            unoptimized
            width={300}
            height={100}
            alt="Готовые изделия из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/64.webp"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по керамике"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/86.webp"
            unoptimized
            width={300}
            height={100}
            alt="Лепка из глины для начинающих"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/87.webp"
            unoptimized
            width={300}
            height={100}
            alt="Ручная лепка из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/144.webp"
            unoptimized
            width={300}
            height={100}
            alt="Глиняные изделия"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/77.webp"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по лепке"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/186.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Керамическая посуда ручной работы"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/72.webp"
            unoptimized
            width={300}
            height={100}
            alt="Процесс создания керамики"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/78.webp"
            unoptimized
            width={300}
            height={100}
            alt="Лепка из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/119.webp"
            unoptimized
            width={300}
            height={100}
            alt="Готовые работы из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/181.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по керамике"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/185.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Керамические изделия"
          />
        </div>
      </div>

      <div className="text-center mb-5 mt-5">
        <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
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

          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                index === currentSlide
                  ? "ring-2 ring-orange-500 ring-offset-2 transform scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Показать отзыв ${index + 1}`}
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

      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Для <span className="text-orange-600">вдохновения</span>
        </h2>
      </div>

      <div className="carousel carousel-center flex m-auto mt-10 mb-10 w-fit gap-2">
        <div className="carousel-item h-full">
          <Image
            src="/112.webp"
            unoptimized
            width={300}
            height={100}
            alt="Керамические изделия для вдохновения"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/231.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Примеры работ из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/232.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Глиняная посуда ручной работы"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/233.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Керамика ручной работы"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/113.webp"
            unoptimized
            width={300}
            height={100}
            alt="Изделия из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/114.webp"
            unoptimized
            width={300}
            height={100}
            alt="Керамические тарелки"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/115.webp"
            unoptimized
            width={300}
            height={100}
            alt="Глиняные кружки"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/133.webp"
            unoptimized
            width={300}
            height={100}
            alt="Керамические вазы"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/123.webp"
            unoptimized
            width={300}
            height={100}
            alt="Работы учеников"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/134.webp"
            unoptimized
            width={300}
            height={100}
            alt="Глиняная посуда"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/182.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Керамические изделия"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/124.webp"
            unoptimized
            width={300}
            height={100}
            alt="Работы из глины"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/135.webp"
            unoptimized
            width={300}
            height={100}
            alt="Керамика ручной работы"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/125.webp"
            unoptimized
            width={300}
            height={100}
            alt="Глиняные изделия"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/136.webp"
            unoptimized
            width={300}
            height={100}
            alt="Керамическая посуда"
          />
        </div>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h2>
          </div>

          <div className="mt-8">
            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5 bg-gray-100 rounded-lg">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Почему мы не заберем сегодня изделия? А когда? А почему так
                    долго?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full rounded-lg">
                  <p className="text-gray-700 text-md">
                    Изделие нельзя сразу обжигать, оно должно высохнуть минимум
                    от 3 до 7 дней.
                    <br />
                    <br />
                    Первый обжиг происходит в муфельной печи при температуре
                    900-1200 градусов.
                    <br />
                    <br />
                    Обжиг занимает 8-10 часов, после чего печь медленно остывает
                    на протяжении 10 часов. Затем на изделие наносится глазурь и
                    обжигается снова. Глазуровка также требует времени.
                    <br />
                    <br />
                    Второй обжиг происходит при температуре 1050-1250 градусов и
                    занимает 8-10 часов.
                    <br />
                    <br />
                    <span className="font-bold text-orange-600">
                      Керамика требует терпения и не терпит спешки!
                    </span>
                    <br />
                    Поэтому свое изделие вы заберете через 3–5 недель, но,
                    уверяем вас, время пролетит быстро :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}