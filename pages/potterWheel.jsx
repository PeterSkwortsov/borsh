import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
export default function PotterWheel() {


const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/261.jpg",
      title: "Занятие по гончарному кругу",
    },
    {
      id: 2,
      image: "/282.webp",
      title: "Занятие по гончарному кругу",
    },
    {
      id: 3,
      image: "/154.jpg",
      title: "Занятие по гончарному кругу",
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


  // JSON-LD для мастер-класса на гончарном круге (Event) - ИСПРАВЛЕНО
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс на гончарном круге в Нижнем Новгороде",
    description:
      "Почувствуйте себя настоящим мастером гончарного искусства на нашем мастер-классе! Изделия после изготовления расписываем ангобами или подглазурными красками. Есть возможность расписать глазурями после первого обжига. Создайте своими руками керамическое изделие до 12 см в диаметре.",
    image: ["https://borsch-art.ru/154.jpg", "https://borsch-art.ru/3.jpg"],
    url: "https://borsch-art.ru/potterWheel/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    // Добавляем обязательные поля startDate и endDate
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
      lowPrice: "2200",
      highPrice: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Групповое занятие на гончарном круге (от 3-х человек)",
          price: "2200",
          priceCurrency: "RUB",
          description:
            "Лепка из глины на гончарном круге. Изделие не больше 12 см в диаметре и высоте.",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальное занятие на гончарном круге для одного",
          price: "3500",
          priceCurrency: "RUB",
          description: "Индивидуальный мастер-класс на гончарном круге",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 1,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальное занятие на гончарном круге для двоих",
          price: "6000",
          priceCurrency: "RUB",
          description:
            "Индивидуальный мастер-класс на гончарном круге для пары",
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
    typicalAgeRange: "12+",
    duration: "PT2H30M",
    maximumAttendeeCapacity: 6,
    // Добавляем информацию о расписании (опционально)
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "Weekly",
      byDay: "https://schema.org/Saturday,https://schema.org/Sunday",
      startTime: "10:00",
      endTime: "20:00",
    },
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
        item: "https://borsch-art.ru/#4",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Мастер-класс на гончарном круге",
        item: "https://borsch-art.ru/potterWheel/",
      },
    ],
  };

  // JSON-LD для отзывов
  const reviewsJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Мария",
      },
      reviewBody:
        "Были с подругой на гончарном мастер-классе. Очень увлекательно! Мастер всё подробно объясняет, помогает. Сделали себе по кружке, теперь ждём обжига. Обязательно вернёмся!",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс на гончарном круге",
      },
      datePublished: "2025-12-15",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Дмитрий",
      },
      reviewBody:
        "Ходили с девушкой на индивидуальное занятие. Очень романтично и интересно! Сделали две кружки. Вика отличный мастер, всё показывает, помогает. Рекомендую.",
      itemReviewed: {
        "@type": "Event",
        name: "Индивидуальное занятие на гончарном круге для двоих",
      },
      datePublished: "2026-01-20",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Мастер-класс на гончарном круге в Нижнем Новгороде | Гончарная
          мастерская
        </title>
        <meta
          name="description"
          content="Мастер-класс на гончарном круге в Нижнем Новгороде. Создайте своими руками керамическое изделие. Групповые и индивидуальные занятия. Расписываем ангобами и глазурями. от 2200₽"
        />
        <meta
          property="og:title"
          content="Мастер-класс на гончарном круге | Творческая студия Вики Борщ"
        />
        <meta
          property="og:description"
          content="Стань настоящим мастером гончарного искусства на нашем мастер-классе! Создайте изделие своими руками."
        />
        <meta property="og:image" content="https://borsch-art.ru/154.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/potterWheel/" />
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
          __html: JSON.stringify(reviewsJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#4" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Мастер-класс на гончарном круге</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center justify-center text-orange-600 m-5 mt-8 text-2xl font-extrabold">
        Мастер-класс на гончарном круге в Нижнем Новгороде
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 mt-5 m-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">Групповые занятия от 3-х человек</th>
              <th className="fb max-w-xl">Размер изделия</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Лепка из глины на гончарном круге</td>
              <td className="min-w-[300px] md:min-w-[400px]">
                Можно создать любое изделие не больше 12 см в диаметре и в
                высоте.
              </td>
              <td>2.200₽</td>
            </tr>
          </tbody>
        </table>
        <div className="block mt-3 md:hidden">
          <Image
            src="/left.png"
            alt="Свайп вправо для просмотра таблицы"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
      </div>

      <p className="text-md flex text-center justify-center m-5 mt-8">
        Индивидуальные занятия: для одного человека - 3.500₽
        <br />
        Для двоих - 6000₽
      </p>

      {/* Галерея изображений */}
      {slides.length > 0 && (
        <div className="max-w-xl mx-auto p-4 mt-8">
      

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

      <div className="py-4 mt-10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <div className="bg-orange-100 p-5 px-10 w-full">
              <h2 className="text-orange-600 font-bold text-xl mb-3">
                Гончарный мастер-класс - это весело и интересно!
              </h2>
              <ul className="text-gray-700 text-md space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <span>
                    Сначала мастер покажет, как работать с глиной на круге,
                    расскажет, какая она и как из нее делать разные изделия.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <span>
                    Потом вы сами будете создавать форму будущего изделия на
                    круге, делать стенки ровными, контролировать толщину и
                    форму.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <span>
                    Когда форма готова, вы сгладите все неровности влажной
                    губкой и проверите, чтобы края были ровными и без трещин.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <span>
                    Подсушиваем феном, чтобы было проще снять его с круга, нужно
                    использовать специальный инструмент — струну.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <span>
                    Расписываем ангобами или подглазурными красками. А после
                    отправляем сушиться на 7 дней и обжигаем.
                  </span>
                </li>
              </ul>
              <p className="text-gray-900 font-bold text-lg mt-4">
                В итоге у вас будет красивая и водонепроницаемая керамика!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
