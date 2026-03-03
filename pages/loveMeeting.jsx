import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

export default function LoveMeeting() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/210.png",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 2,
      image: "/211.png",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 3,
      image: "/168.jpg",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 5,
      image: "/163.jpg",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 6,
      image: "/165.jpg",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 7,
      image: "/166.jpg",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 8,
      image: "/190.png",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 9,
      image: "/191.png",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 10,
      image: "/208.png",
      title: "Отзывы клиентов гончарного свидания",
    },
    {
      id: 11,
      image: "/209.png",
      title: "Отзывы клиентов гончарного свидания",
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

  // JSON-LD для гончарного свидания (Event)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Гончарное свидание в Нижнем Новгороде",
    description:
      "Уникальный опыт и общее воспоминание для двоих. Вы не просто проведете время вместе – вы создадите что-то своими руками! Пусть это будет милая чашка, тарелочка или загадочный абстрактный сосуд – это будет ВАШ шедевр. Работа с глиной раскрепощает, сближает и дарит море позитивных эмоций.",
    image: [
      "https://borsch-art.ru/97.webp",
      "https://borsch-art.ru/207.webp",
      "https://borsch-art.ru/161.jpg",
      "https://borsch-art.ru/153.jpg",
      "https://borsch-art.ru/193.webp",
      "https://borsch-art.ru/229.jpg",
      "https://borsch-art.ru/230.jpg",
      "https://borsch-art.ru/196.jpg",
      "https://borsch-art.ru/183.jpg",
      "https://borsch-art.ru/95.webp",
      "https://borsch-art.ru/151.jpg",
      "https://borsch-art.ru/82.webp",
      "https://borsch-art.ru/149.webp",
      "https://borsch-art.ru/98.webp",
      "https://borsch-art.ru/83.webp",
      "https://borsch-art.ru/96.webp",
      "https://borsch-art.ru/84.webp",
    ],
    url: "https://borsch-art.ru/loveMeeting/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
      "@type": "Offer",
      name: "Гончарное свидание для двоих",
      price: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      description:
        "2.5 часа погружения в мир керамики для двоих. Гончарный круг или ручная лепка. Все материалы, глазуровка, обжиг, чай и кофе включены.",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 2,
        unitText: "человек",
      },
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
    typicalAgeRange: "16+",
    duration: "PT2H30M",
    maximumAttendeeCapacity: 2,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    keywords:
      "свидание, гончарный круг, романтика, керамика, мастер-класс для двоих",
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
        name: "Гончарное свидание",
        item: "https://borsch-art.ru/loveMeeting/",
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
        name: "Когда мы сможем забрать свои изделия из глины?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Изделие нельзя сразу обжигать, оно должно высохнуть минимум от 3 до 7 дней. Первый обжиг происходит в муфельной печи при температуре 900-1200 градусов и занимает 8-10 часов, после чего печь медленно остывает на протяжении 10 часов. Затем на изделие наносится глазурь и обжигается снова. Второй обжиг происходит при температуре 1050-1250 градусов и занимает 8-10 часов. В среднем ваши изделия будут готовы через 4-5 недель. Это стандартный срок для большинства мастерских.",
        },
      },
    ],
  };



  return (
    <>
      <Head>
        <title>
          Гончарное свидание в Нижнем Новгороде | Романтический мастер-класс для
          двоих
        </title>
        <meta
          name="description"
          content="Гончарное свидание в Нижнем Новгороде. Уникальный опыт и общее воспоминание для двоих. Создайте своими руками кружку, тарелку или вазу. Работа с глиной сближает. Цена 6000₽ за двоих. Все материалы включены."
        />
        <meta
          name="keywords"
          content="гончарное свидание, свидание в Нижнем Новгороде, мастер-класс для двоих, романтический вечер, гончарный круг, лепка из глины"
        />
        <meta
          property="og:title"
          content="Гончарное свидание в Нижнем Новгороде | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Искра, смех и нежность. Работа с глиной раскрепощает, сближает и дарит море позитивных эмоций. Идеальный способ узнать друг друга с новой стороны!"
        />
        <meta property="og:image" content="https://borsch-art.ru/97.webp" />
        <meta property="og:url" content="https://borsch-art.ru/loveMeeting/" />
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
      

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#5" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge  text-gray-700 border-none">
            <span>Гончарное свидание</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center justify-center text-orange-600 m-5 mt-8 text-2xl font-extrabold">
        Гончарное свидание в Нижнем Новгороде
      </h1>

      <h2 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto text-lg">
        В нашей гончарной мастерской время летит незаметно, а все тревоги
        остаются за дверью 🍃
      </h2>

      <h3 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto font-bold">
        Вы можете выбрать формат проведения свидания: гончарный круг или ручная
        лепка.
      </h3>

      <h4 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto">
        На гончарном круге вы можете создать небольшую кружку, тарелку или
        вазочку. На ручной лепке можем предложить размеры немного больше, а
        изделия посложнее: менажница, пельменница с соусником, масленка и
        другое.
      </h4>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2 rounded-lg">
        <div className="carousel-item h-full">
          <Image
            src="/207.webp"
            unoptimized
            width={338}
            height={100}
            alt="Гончарное свидание за кругом"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/161.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Романтическое свидание в гончарной мастерской"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/153.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Пара за гончарным кругом"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/193.webp"
            unoptimized
            width={338}
            height={100}
            alt="Создание керамики вдвоем"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/229.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Гончарное свидание"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/230.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Ручная лепка для двоих"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/196.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Свидание в гончарной студии"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/183.jpg"
            unoptimized
            width={441}
            height={100}
            alt="Романтический мастер-класс"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/95.webp"
            unoptimized
            width={338}
            height={100}
            alt="Гончарное свидание в Нижнем Новгороде"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/151.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Пара создает керамику"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/82.webp"
            unoptimized
            width={300}
            height={100}
            alt="Свидание за гончарным кругом"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/149.webp"
            unoptimized
            width={338}
            height={100}
            alt="Ручная лепка для двоих"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/98.webp"
            unoptimized
            width={338}
            height={100}
            alt="Гончарное свидание"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/83.webp"
            unoptimized
            width={301}
            height={100}
            alt="Романтический вечер в студии"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/96.webp"
            unoptimized
            width={338}
            height={100}
            alt="Пара за работой с глиной"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/84.webp"
            unoptimized
            width={300}
            height={100}
            alt="Свидание в гончарной мастерской"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/187.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Готовые изделия после свидания"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/97.webp"
            unoptimized
            width={338}
            height={100}
            alt="Счастливая пара с готовыми изделиями"
          />
        </div>
      </div>

      <div className="py-4">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-100 p-6 px-10 rounded-2xl">
            <h2 className="text-orange-600 font-bold text-xl mb-3 text-center">
              И так, что вас ждет?
            </h2>
            <ul className="text-gray-700 text-md space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">•</span>
                <span>2.5 часа погружения в мир керамики</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">•</span>
                <span>
                  Индивидуальное внимание мастера: все покажу, научу и помогу
                  (даже если вы никогда не касались глины)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">•</span>
                <span>
                  Каждый создаст свое изделие или будет помогать партнеру – как
                  договоритесь
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">•</span>
                <span>
                  Все материалы включены: глина, инструменты, фартуки,
                  глазуровка, обжиг керамики
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">•</span>
                <span>
                  Ароматный чай и кофе для вас на протяжении всего свидания
                </span>
              </li>
            </ul>
            <p className="font-bold text-xl text-center mt-4">
              Цена 6000₽ за двоих 💞
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5 mt-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-100 p-5 px-10 rounded-2xl">
            <p className="text-gray-700 text-md text-center">
              Вы не просто проведете время вместе – вы создадите что-то своими
              руками! Пусть это будет милая чашка, тарелочка или загадочный
              абстрактный сосуд – это будет ВАШ шедевр!
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-100 p-5 px-10 rounded-2xl">
            <p className="text-gray-700 text-md text-center">
              Подарите не просто вечер, а волшебные эмоции и материальное
              воспоминание о вашей любви! ❤️
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <a
            href="https://t.me/vika_borsch99"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && window.ym) {
                window.ym(102283077, "reachGoal", "click_messege_viki");
              }
              return true;
            }}
            className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300"
          >
            Забронировать дату
          </a>
        </div>
      </div>

      <div className="text-center mb-5 mt-5">
        <h2 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">счастливых пар</span>
        </h2>
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

      <div className="py-4 bg-white mt-12">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Наиболее распространённый
              <span className="text-orange-600"> вопрос</span>
            </h2>
          </div>

          <div className="mt-8">
            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5 bg-gray-100 rounded-lg">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-bold text-gray-900">
                    Когда мы сможем забрать свои изделия из глины?
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
                    <span className="font-bold text-md text-orange-600">
                      Керамика очень капризна и требует терпения, не терпит
                      спешки!
                    </span>
                    <br />В среднем ваши изделия будут готовы через 4-5 недель.
                    Это стандартный срок для большинства мастерских, время
                    пролетит быстро 😊
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