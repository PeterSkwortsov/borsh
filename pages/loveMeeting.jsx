

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
export default function loveMeeting() {


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
    id: 4,
    image: "/152.png",
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
        <title>Гончарное свидание в Нижнем Новгороде</title>

        <meta
          name="description"
          content="Уникальный опыт и общее воспоминание. Вы не просто проведете время вместе – вы создадите что-то своими руками! Пусть это будет милая чашка, тарелочка или загадочный абстрактный сосуд – это будет ВАШ шедевр."
        />

        <meta
          property="og:title"
          content="Гончарное свидание в Нижнем Новгороде"
        />

        <meta
          property="og:description"
          content="Искра, смех и нежность. Работа с глиной раскрепощает, сближает и дарит море позитивных эмоций. Идеальный способ узнать друг друга с новой стороны!"
        />

        <meta property="og:image" content="/97.webp" />

        <meta property="og:url" content="https://borsch-art.ru/loveMeeting/" />
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
              <Link href={`./#5`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/loveMeeting/`}
                itemProp="item"
                title="Гончарное свидание"
              >
                <span itemProp="name">Гончарное свидание</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>
      <h1 className="text-center justify-center text-orange-600 m-5 mt-8 text-2xl font-extrabold">
        Гончарное свидание в Нижнем Новгороде
      </h1>
      <h2 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto">
        В нашей гончарной мастерской время летит незаметно, а все тревоги
        остаются за дверью 🍃
      </h2>

      <h3 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto font-bold">
        Вы можете выбрать формат проведения свидания, это может быть как
        гончарный круг, так и ручная лепка.
      </h3>
      <h4 className="flex text-center justify-center p-3 md:max-w-1/2 m-auto">
        На гончарном круге вы можете создать небольшую кружку, тарелку или
        вазочку. На ручной лепке можем предложить размеры немного больше, а
        изделия посложнее, например, такие как менажница, пельменница с
        соусником, масленку и другое.
      </h4>
      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-lg">
        <div className="carousel-item h-full ">
          <Image
            src="/207.webp"
            unoptimized
            width={338}
            height={100}
            priority
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/161.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/153.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/193.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/229.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/196.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/183.jpg"
            unoptimized
            width={441}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/95.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/151.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/82.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/149.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/98.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/83.webp"
            unoptimized
            width={301}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/96.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/84.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/187.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/97.webp"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/230.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Клиенты парного свидания"
            className="min-w-72 h-auto"
          />
        </div>
      </div>
      <div className="py-4 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <ul>
            <li className="text-left mb-10">
              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                  <ul className="text-gray-700 text-md">
                    <span className="text-orange-600 font-bold">
                      И так, что вас ждет?
                    </span>
                    <li className="p-1 list-disc">
                      2.5 часа погружения в мир керамики
                    </li>
                    <li className="p-1 list-disc">
                      Индивидуальное внимание мастера: все покажу, научу и
                      помогу (даже если вы никогда не касались глины)
                    </li>
                    <li className="p-1 list-disc">
                      Каждый создаст свое изделие или будет помогать партнеру –
                      как договоритесь
                    </li>
                    <li className="p-1 list-disc">
                      Все материалы включены: глина, инструменты, фартуки,
                      глазуровка, обжиг керамики
                    </li>
                    <li className="p-1 list-disc">
                      Ароматный чай и кофе для вас на протяжении всего свидания
                    </li>
                    <strong className="flex text-center justify-center font-bold text-xl mt-3">
                      Цена 6000₽ за двоих 💞
                    </strong>
                  </ul>
                </div>

                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                {/* <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс — это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br> */}
                <p className="text-gray-700 text-md">
                  Вы не просто проведете время вместе – вы создадите что-то
                  своими руками! Пусть это будет милая чашка, тарелочка или
                  загадочный абстрактный сосуд – это будет ВАШ шедевр!
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 text-md">
                  Подарите не просто вечер, а волшебные эмоции и материальное
                  воспоминание о вашей любви! ❤️
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center  justify-center">
          <div>
            <div
              className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200  p-5 px-10 w-full flex items-center rounded-4xl text-white
"
            >
              <a href="https://t.me/vika_borsch99">
                <p className="text-black font-bold text-lg   flex text-center center justify-center">
                  Забронировать дату
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5 mt-5">
        <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">счастливых пар</span>
        </h3>
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
      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Наиболее распространённый
              <span className="text-orange-600"> вопрос</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                  <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-bold text-gray-900">
                      Когда мы сможем забрать свои изделия из глины?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Изделие нельзя сразу обжигать, оно должно высохнуть
                      минимум от 3 до 7 дней.<br></br>
                      <br></br>
                      Первый обжиг происходит в муфельной печи при температуре
                      900-1200 градусов.
                      <br></br>
                      <br></br>
                      Обжиг занимает 8-10 часов, после чего печь медленно
                      остывает на протяжении 10 часов. Затем на изделие
                      наносится глазурь и обжигается снова. Глазуровка также
                      требует времени.<br></br>
                      <br></br>
                      Второй обжиг происходит при температуре 1050-1250 градусов
                      и занимает 8-10 часов.
                      <br></br>
                      <br></br>
                      <span className="font-bold text-md text-orange-600">
                        Керамика очень капризна и требует терпения, не терпит
                        спешки!
                      </span>
                      <br></br>В среднем ваши изделия будут готовы через 4-5
                      недель. Это стандартный срок для большинства мастерских,
                      время пролетит быстро 😊
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
