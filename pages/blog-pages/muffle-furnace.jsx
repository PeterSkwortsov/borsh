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
    description:
      "Статья о том, какие ошибки мы совершили при установке муфельной печи к себе в студию. История о том, как мы устанавливали печь для обжига керамики и какие уроки извлекли.",
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
        text: "Один из сотрудников офиса решил померить ее рулеткой и дверной проем двери, куда ее мы должны были установить. 'Ребята, так она в проем не влезет'",
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
      title: "Муфельная печь в процессе установки",
    },
    {
      id: 2,
      image: "/249.jpg",
      title: "Муфельная печь в студии",
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
      ...slides.map((slide) => `https://borsch-art.ru${slide.image}`),
    ],
    url: "https://borsch-art.ru/blog-pages/muffle-furnace/",
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
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
      "@id": "https://borsch-art.ru/blog-pages/muffle-furnace/",
    },
    keywords:
      "муфельная печь, установка печи, ошибки, керамика, обжиг, гончарная мастерская",
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
        name: "Главная",
        item: "https://borsch-art.ru/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Статьи",
        item: "https://borsch-art.ru/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: postData.title,
        item: "https://borsch-art.ru/blog-pages/muffle-furnace/",
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
          content="муфельная печь, установка печи, ошибки при установке, керамика, обжиг, гончарная мастерская, Вика Борщ"
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`https://borsch-art.ru${postData.coverImage}`}
        />
        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/muffle-furnace/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
        <meta property="article:published_time" content="2026-03-05" />
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
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="/" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <Link href="/blog" title="Статьи">
              <span>Статьи</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Ошибки при установке муфельной печи</span>
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
        {slides.length > 0 && (
          <div className="max-w-xl mx-auto p-4 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Фото <span className="text-orange-600">муфельной печи</span>
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
        )}
      </main>
    </>
  );
};

export default BlogPostMuffel;
