import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

const BlogPostMuffel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Пример данных для статьи
  const postData = {
    title: "Ошибки, которые мы совершили при установке муфельной печи",
    date: "5 марта 2026",
    readTime: "2 мин",
    coverImage: "/247.jpg",

    content: [
      {
        type: "h1",
        text: "Наши ошибки при установке муфельной печи",
      },
      {
        type: "p",
        text: "В один день и время мы ждали газель, которая должна привезти нам печь общим весом с допами в упаковке - 210 кг, четверых грузчиков и успеть спустить ее в подвал до ухода домой электрика, у которого есть ключи от грузового лифта. ",
      },
      {
        type: "h3",
        text: "Казалось бы, что может пойти не так? ",
      },

      {
        type: "p",
        text: "В день приезда нам звонят из службы доставки и говорят о том, что один из водителей заболел, они перегрузили печь на другую машину, но он задерживается и попал в пробку. Грузчики звонят и пытаются точно понять, приезжать им или нет. В итоге за полчаса до конца рабочего дня электрика газель с печью приезжает. Грузчиков еще нет. ",
      },
      {
        type: "p",
        text: "Водитель газели, видимо, на опыте, не знаю как, до сих пор удивляюсь, смог аккуратно уронить-вынуть печь в деревянном палете из машины, ничего не сломав, так как торопился и уехал. Сама печь была упакована в деревянную обрешетку со всех сторон, где-то 1,5 на 1,5 метра.",
      },
      {
        type: "p",
        text: "Когда он уже уехал, пришли грузчики, вместо 4 их было 3. Далее мы смогли оттащить ее к лифту, погрузить на него и спустить в подвал. Тут стало понятно, что мы были совершенно не готовы к тому, чтобы отдирать гвозди и разбирать деревяшки. У нас не было никаких инструментов. Не было даже перчаток, мы поставили себе кучу заноз. Спасибо добрым людям, дали нам шуруповерт, молоток. Иначе не знаю, как ее разбирать пришлось, зубами, наверное. Всем вместе нам удалось достаточно быстро достать ее из деревянного кокона. ",
      },
      {
        type: "h3",
        text: "Достали. Ура-ура!",
      },

      {
        type: "p",
        text: "Один из сотрудников офиса решил померить ее рулеткой и дверной проем двери, куда ее мы должны были установить. “Ребята, так она в проем не влезет”",
      },
      {
        type: "p",
        text: "Тут мы испытали весь спектр эмоций. Отрицание. Шок. Гнев. Торг. Какие есть еще варианты, а может ее просто в коридоре оставить? Ее все равно никто не унесет, потому что просто так это сделать невозможно)) Депрессия. Мы все потратили, у нас ничего нет)) Только на доставку с грузчиками у нас ушло 20 тысяч... Принятие. Стали крутить-вертеть ее, а если вот так бочком-бочком, хорошо, вот так и прошла тютелька в тютельку. Фууух.",
      },

      {
        type: "p",
        text: "Сейчас стоит, работает, обжигает, радует нас и наших клиентов.",
      },
    ],
  };
const [currentSlide, setCurrentSlide] = useState(0);
const slides = [
  {
    id: 1,
    image: "/248.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 2,
    image: "/249.jpg",
    title: "Этапы ремонта помещения студии",
  },
  
];

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
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






  // Рендер контента
  const renderContent = (item, index) => {
    switch (item.type) {
      case "h1":
        return (
          <h1
            key={index}
            className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
          >
            {item.text}
          </h1>
        );
      case "h2":
        return (
          <h2
            key={index}
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-12 mb-6"
          >
            {item.text}
          </h2>
        );
      case "h3":
        return (
          <h3
            key={index}
            className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-4"
          >
            {item.text}
          </h3>
        );
      case "p":
        return (
          <>
            <p
              key={index}
              className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg"
            >
              {item.text}
            </p>
           
          </>
        );
    
      default:
        return null;
    }
  };
const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

  return (
    <>
      <Head>
        <title>Наши ошибки при установке муфельной печи</title>

        <meta
          name="description"
          content="Статья о том, какие ошибки мы совершили при установке муфельной печи"
        />

        <meta
          property="og:title"
          content="Ошибки, которые мы совершили при установке муфельной печи"
        />

        <meta
          property="og:description"
          content="Статья о том, какие ошибки мы совершили при установке муфельной печи к себе в студию"
        />

        <meta property="og:image" content="/247.jpg" />

        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/muffle-furnace/"
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
              <Link href={`/`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/blog-pages/`}
                itemProp="item"
                title="Статьи"
              >
                <span itemProp="name">Статьи</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button>
              <Link
                href={`https://borsch-art.ru/blog-pages/muffle-furnace/`}
                itemProp="item"
                title="Наши ошибки при установке муфельной печи"
              >
                <span itemProp="name">
                  Ошибки при установке муфельной печи
                </span>
              </Link>
              <meta itemProp="position" content="2"></meta>
            </button>
          </li>
        </ul>
      </ol>
      {/* Основной контент */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Мета информация */}
        <div className="flex flex-wrap gap-4 text-gray-500 mb-8 text-sm md:text-base">
          <span>📅 {postData.date}</span>
          <span>⏱ {postData.readTime}</span>
        </div>

        {/* Обложка */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={postData.coverImage}
            alt={postData.title}
            className="md:w-96 m-auto object-contain rounded-2xl"
          />
        </div>

        {/* Контент статьи */}
        <article className="prose prose-lg max-w-none">
          {postData.content.map((item, index) => renderContent(item, index))}
        </article>

        {/* Галерея изображений */}

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
                  className="max-w-40 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPostMuffel;
