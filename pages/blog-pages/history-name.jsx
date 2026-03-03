// pages/blog/post.js или pages/blog/[slug].js
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const BlogPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Пример данных для статьи
  const postData = {
    title: "Почему мастерская называется именно «Вики Борщ»?",
    date: "3 марта 2026",
    readTime: "2 мин",
    coverImage: "/245.jpg",
    coverImage2: "/246.jpg",

    content: [
      {
        type: "h1",
        text: "Почему студия носит название «Вики Борщ»?",
      },
      {
        type: "p",
        text: "Мы долго думали над названием, рассматривали разные варианты. По итогу мы остановились именно на таком, поскольку мастер-классы буду проводить именно я. Также у меня в тогда еще разрешенной соцсети было именно такое название аккаунта. «Борщ», потому что волосы яркого цвета, как у супа борщ. Да, оно не совсем в тему, зато запоминается, а это для нас было главным фактором.",
      },
      {
        type: "h3",
        text: "Как мы открыли студию. Идея",
      },
      {
        type: "p",
        text: "После того как я ушла из частной школы и начала работать в творческой студии рисования, меня часто посещали мысли открыть свое место, пускай там будет немного людей, зато это будет моим маленьким миром, в котором я могла бы полностью реализовывать свои идеи. Мы с мужем иногда разговаривали про это, но в шутку, и вот в один из дней в конце марта я прислала ему несколько вариантов помещений, он сказал: «Давай брать», я написала риелтору, и всё закрутилось.",
      },
      {
        type: "p",
        text: "Это было второе помещение, которое я смотрела, оно мне сразу понравилось. Большие окна, высокие потолки, много солнечного света. Цена хоть и отличалась от объявления и была дороже, но, посовещавшись, мы приняли решение остаться здесь и не прогадали.",
      },
      {
        type: "p",
        text: "Мы очень благодарны арендодателю, что он пошел нам навстречу, дал месяц на ремонт помещения. Помог в проведении электричества к муфельной печи и позволил ее установить в подвале.",
      },
      {
        type: "p",
        text: "У нас не было денег на открытие, всё, что мы зарабатывали, мы сразу тратили на покупку оборудования, пришлось взять небольшой кредит в банке на печь. Не было бизнес-плана, никаких расчетов. Вообще, конечно, так делать не надо, и мы никому не советуем. Всегда надо все просчитывать.",
      },
      {
        type: "h3",
        text: "Почему же мы тогда не боялись и были уверены в том, что мы делаем?",
      },
      {
        type: "img",
      },
      {
        type: "h3",
        text: "Почему же мы тогда не боялись и были уверены в том, что мы делаем?",
      },
      {
        type: "p",
        text: "Во-первых, сказался накопленный опыт работы в уже существующей мастерской. У меня было четкое видение, что мне надо, сколько мне надо купить и когда. Мой муж часто использует фразу «Это не ракеты строить», поэтому с этим мы должны справиться. Также, поскольку он фронтенд-разработчик, он сделал нам хороший сайт, а это уже неплохо.",
      },
   
      {
        type: "p",
        text: "Мы очень благодарны нашим родителям за поддержку, они вместе с нами красили стены, красили и собирали стеллажи. Нас поддерживали друзья. Никто из них не сказал, что не получится, и даже не вызывал скепсис. У нас было видение, как все должно быть, оставалось просто закатать рукава и работать.",
      },
    ],
  };
const [currentSlide, setCurrentSlide] = useState(0);
const slides = [
  {
    id: 1,
    image: "/235.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 2,
    image: "/236.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 3,
    image: "/237.jpg",
    title: "Этапы ремонта помещения студии",
  },

  {
    id: 9,
    image: "/238.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 10,
    image: "/239.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 11,
    image: "/240.jpg",
    title: "Этапы ремонта помещения студии",
  },

  {
    id: 11,
    image: "/243.jpg",
    title: "Этапы ремонта помещения студии",
  },
  {
    id: 11,
    image: "/244.jpg",
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
      case "img":
        return (
          <>
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={postData.coverImage2}
                alt={postData.title}
                className="md:w-96 m-auto object-contain rounded-2xl"
              />
            </div>
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
        <title>Почему мастерская называется именем «Вика Борщ»?</title>

        <meta
          name="description"
          content="Статья о том, как мы создавали нашу студию и почему мастерская называется именем Вика Борщ"
        />

        <meta
          property="og:title"
          content="История создания мастерской Вика Борщ"
        />

        <meta
          property="og:description"
          content="Статья о том, как мы создавали нашу студию и почему мастерская называется именно так"
        />

        <meta property="og:image" content="/245.jpg" />

        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/history-name/"
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
              <Link href={`/blog`} itemProp="item" title="Блог">
                <span itemProp="name">Блог</span>
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
                href={`https://borsch-art.ru/blog-pages/history-name/`}
                itemProp="item"
                title="Почему мастерская называется именно «Вики Борщ»?"
              >
                <span itemProp="name">Название студии «Вики Борщ»</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
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

export default BlogPost;
