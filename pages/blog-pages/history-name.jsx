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
    description:
      "Статья о том, как мы создавали нашу студию и почему мастерская называется именем Вика Борщ. История создания творческого пространства в Нижнем Новгороде.",
    content: [
      {
        type: "h1",
        text: "Почему студия носит название «Вики Борщ»?",
      },
      {
        type: "p",
        text: "Мы не долго думали над названием, рассмотрели пару вариантов, да и те крутились вокруг слова «борщ». Почему именно «борщ», а не «щи» или «солянка» или что-то еще из кулинарии? Все просто - это ассоциация с красно-розовыми волосами, которая возникла еще давно, в студенчестве. После этого ники в социальных сетях были переименованы в «Вика Борщ» . Отсюда и название нашей студии - яркой, творческой, очень знакомой и родной, как этот суп. ",
      },
      {
        type: "h3",
        text: "Как мы открыли студию. Идея",
      },
      {
        type: "p",
        text: "Я успела получить образование архитектора, переквалифицироваться в учителя ИЗО и отработать 4 года в частной общеобразовательной школе и 2 года в школе рисования, прежде чем задуматься о своем пространстве. Пусть там будет немного людей, зато это будет моим маленьким миром, в котором я могла бы полностью реализовывать свои идеи. Мы с мужем иногда разговаривали про это, но не серьезно, просто планируя, что «вот когда нибудь…». И вот,  в один из дней в середине апреля я прислала ему несколько вариантов помещений, он сказал: «Давай брать», я написала агенту, и всё закрутилось.",
      },
      {
        type: "p",
        text: "Наша студия - это второе по счету помещение, которое я смотрела. Оно мне сразу понравилось: большие окна, высокие потолки, много солнечного света. Посовещавшись, мы приняли решение остаться здесь и не прогадали.",
      },
      {
        type: "p",
        text: "Мы очень благодарны арендодателю, что он пошел нам навстречу, дал время на ремонт помещения, помог в проведении электричества к муфельной печи и позволил ее установить в подвале.",
      },
      {
        type: "p",
        text: "У нас не было денег на открытие, всё, что мы зарабатывали, мы сразу тратили на покупку оборудования, нам пришлось взять многое в рассрочку, в том числе и муфельную печь. У нас не было бизнес-плана и каких-то расчетов. Вообще, конечно, так делать не надо, и мы никому не советуем. Всегда надо все просчитывать. Но мы действовали так, как чувствовали, и откровенно мало думали и планировали.",
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
        text: "Во-первых, сказался накопленный опыт работы в уже существующей мастерской. У нас было четкое видение, что нам надо, сколько нам надо купить и когда. Мой муж часто использует фразу «Это не ракеты строить», поэтому с этим мы должны справиться. Также, поскольку он фронтенд-разработчик, он сделал нам хороший сайт, а это уже большой шаг к продвижению.",
      },

      {
        type: "p",
        text: "Мы очень благодарны нашим родителям и друзьям за поддержку, они вместе с нами красили стены, собирали стеллажи, помогали нам привести все в порядок и всегда верили в нас. Никто из них не сказал, что может не получиться, что мы зря это все начали и т.д. У нас было видение, как все должно быть, оставалось просто закатать рукава и работать, работать, и еще раз работать",
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
      id: 4,
      image: "/238.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 5,
      image: "/239.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 6,
      image: "/240.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 7,
      image: "/243.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 8,
      image: "/244.jpg",
      title: "Этапы ремонта помещения студии",
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

  // JSON-LD для статьи (BlogPosting)
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postData.title,
    description: postData.description,
    image: [
      `https://borsch-art.ru${postData.coverImage}`,
      `https://borsch-art.ru${postData.coverImage2}`,
      ...slides.map((slide) => `https://borsch-art.ru${slide.image}`),
    ],
    url: "https://borsch-art.ru/blog-pages/history-name/",
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
    author: {
      "@type": "Person",
      name: "Виктория Борщ",
    },
    publisher: {
      "@type": "Organization",
      name: "Творческая студия Вика Борщ",
      logo: {
        "@type": "ImageObject",
        url: "https://borsch-art.ru/62.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://borsch-art.ru/blog-pages/history-name/",
    },
    keywords:
      "история студии, название студии, Вика Борщ, творческая мастерская",
    articleBody: postData.content
      .map((item) => (item.type === "p" ? item.text : ""))
      .join(" "),
  };

  // JSON-LD для хлебных крошек
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Блог",
        item: "https://borsch-art.ru/blog",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: postData.title,
        item: "https://borsch-art.ru/blog-pages/history-name/",
      },
    ],
  };

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
          <p
            key={index}
            className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg"
          >
            {item.text}
          </p>
        );
      case "img":
        return (
          <div key={index} className="mb-8 rounded-xl overflow-hidden">
            <img
              src={postData.coverImage2}
              alt={postData.title}
              className="md:w-96 m-auto object-contain rounded-2xl"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{postData.title} | Блог студии Вика Борщ</title>
        <meta name="description" content={postData.description} />
        <meta
          name="keywords"
          content="история студии, Вика Борщ, название студии, творческая мастерская, керамика, рисование"
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`https://borsch-art.ru${postData.coverImage}`}
        />
        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/history-name/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
        <meta property="article:published_time" content="2026-03-03" />
        <meta property="article:author" content="Виктория Борщ" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c"),
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
            <Link href="/blog" title="Блог">
              <span>Блог</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Название студии «Вики Борщ»</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Этапы ремонта студии
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
      </main>
    </>
  );
};

export default BlogPost;
