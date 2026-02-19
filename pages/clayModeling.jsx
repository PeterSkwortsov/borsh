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
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 2,
    image: "/105.webp",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 3,
    image: "/108.webp",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 4,
    image: "/137.webp",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 5,
    image: "/138.webp",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 6,
    image: "/165.jpg",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 7,
    image: "/145.webp",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 8,
    image: "/188.png",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 9,
    image: "/189.png",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  },
  {
    id: 10,
    image: "/212.png",
    title: "Хорошие отзывы клиентов мастер-класса по лепке из глины",
  }
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
        <title>Мастер-класс по ручной лепке из глины</title>

        <meta
          name="description"
          content="Лепим изделия из глины, расписываем ангобами или подглазурными красками.Есть возможность расписать глазурями после первого обжига."
        />

        <meta
          property="og:title"
          content="Мастер-класс по ручной лепке из глины"
        />

        <meta
          property="og:description"
          content="Записывайтесь на мастер-класс по ручной лепке из глины.Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки"
        />

        <meta property="og:image" content="/3.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/clayModeling/" />
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
              <Link href={`./#2`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/clayModeling/`}
                itemProp="item"
                title="Лепка из глины"
              >
                <span itemProp="name">Лепка из глины</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h1 className="text-center text-orange-600 justify-center m-5 mt-8 text-3xl font-extrabold">
        Мастер-класс по лепке из глины в Нижнем Новгороде
      </h1>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Групповой мастер-класс от 3-х человек</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                Мастер-класс по лепке плоской тарелочки, миски, пиалы,
                подсвечника
              </td>
              <td>1800₽ / человек</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                Мастер-класс по лепке кружки, чайной пары, вазочки до 15 см
              </td>
              <td>2200₽ / человек</td>
            </tr>
            {/* row 3 */}
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
            alt="Мобильная картинка"
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
          <div className="grid grid-cols-1 gap-8 ">
            <div className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-1 py-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group">
              {/* Декоративный элемент */}

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                    Попробуйте себя в роли керамиста — это увлекательно и
                    доступно каждому
                  </h3>
                  <h2 className="text-gray-700">
                    Хотите посуду, которой нет в магазинах? Многие приходят в
                    нашу гончарную мастерскую, чтобы слепить оригинальную
                    тарелку или кружку, которой больше ни у кого не будет.
                    <br></br>
                    <br></br>
                    Мы работаем с разными техниками. Поэтому мастер-класс по
                    лепке может включать как работу на гончарном круге, так и
                    создание фактурных изделий вручную.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-4  sm:px-6 lg:px-8 flex flex-center  justify-center">
        <div>
          <div className="flex  flex-row items-center center m-auto cursor-pointer">
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
      <div className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/59.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/60.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/61.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/64.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/86.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>

        <div className="carousel-item h-full">
          <Image
            src="/87.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/144.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/77.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/186.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/72.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/78.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/119.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/181.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/185.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
      </div>
      <div className="text-center mb-5 mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
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
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Для<span className="text-orange-600"> вдохновения</span>
        </h3>
      </div>
      <div className="carousel carousel-center flex m-auto mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/112.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/231.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/232.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/233.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/113.webp"
            unoptimized
            width={300}
            height={100}
            alt="Клиенты творческой мастерской Вика Борщ"
          />

          <div className="carousel-item h-full ">
            <Image
              src="/114.webp"
              unoptimized
              width={300}
              height={100}
              alt="Клиенты творческой мастерской Вика Борщ"
            />
          </div>

          <div className="carousel-item h-full ">
            <Image
              src="/115.webp"
              unoptimized
              width={300}
              height={100}
              alt="Клиенты творческой мастерской Вика Борщ"
            />
            <div className="carousel-item h-full ">
              <Image
                src="/133.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/123.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/134.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>

            <div className="carousel-item h-full ">
              <Image
                src="/182.jpg"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/124.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/135.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/125.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/136.webp"
                unoptimized
                width={300}
                height={100}
                alt="Клиенты творческой мастерской Вика Борщ"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                  <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Почему мы не заберем сегодня изделия? А когда? А почему
                      так долго?
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
                      <span className="font-bold text-orange-600">
                        Керамика требует терпения и не терпит спешки!
                      </span>
                      <br></br>
                      Поэтому свое изделие вы заберете через 3–5 недель, но,
                      уверяем вас, время пролетит быстро :)
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
