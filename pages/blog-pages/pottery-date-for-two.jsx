import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

const PotterDate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Данные для статьи
  const postData = {
    title: "Гончарное свидание для двоих",
    date: "18 марта 2026",
    readTime: "2 мин",
    coverImage: "/193.webp",
    description:
      "Ищете оригинальный сюрприз для второй половинки? Сертификат на гончарное свидание — это эмоции, которые не купишь в магазине. Это воспоминание, которое останется с вами навсегда в виде керамического изделия, созданного вашими руками.",
    content: [
      {
        type: "h1",
        text: "Гончарное свидание в Нижнем Новгороде: создайте историю своими руками",
      },
      {
        type: "p",
        text: "Как часто мы ищем новые впечатления для двора? Кино, рестораны, прогулки по парку — это прекрасно, но иногда хочется чего-то живого, теплого и настоящего. Мы приглашаем вас на гончарное свидание в Нижнем Новгороде — формат, где нет места суете, зато есть 2,5 часа тишины, глины и близости. В нашей гончарной мастерской время летит незаметно, а все тревоги остаются за дверью. Здесь вы не просто смотрите друг на друга, вы творите вместе. И это магия.",
      },
      {
        type: "h2",
        text: "Формат на выбор: гончарный круг или ручная лепка",
      },
      {
        type: "p",
        text: "У каждой пары свой ритм и свои желания. Кто-то мечтает попробовать себя в роли настоящего керамиста за кругом, а кто-то хочет вылепить сложное и основательное изделие. Мы даем вам свободу выбора.",
      },
      {
        type: "h3",
        text: "Свидание за гончарным кругом",
      },
      {
        type: "p",
        text: "Это классика, которую показывают в фильмах. Вы садитесь рядом (или друг напротив друга), и под чутким руководством мастера глина в ваших руках оживает. Что можно создать: Небольшую авторскую кружку для утреннего кофе. Изящную тарелку или пиалу. Милую вазочку для одного цветка. Круг требует концентрации и легкого касания — это очень чувственный и сближающий процесс.",
      },
      {
        type: "h3",
        text: "Ручная лепка для двоих",
      },
      {
        type: "p",
        text: "Если вам хочется больше простора для фантазии, выбирайте ручную лепку. Здесь размеры изделий могут быть немного больше, а формы — сложнее. На ручной лепке вы можете создать: Стильную менажницу для сервировки ужина. Пельменницу с соусником (настоящая находка для тех, кто любит готовить вместе!). Масленку, пивные кружки или интерьерные фигуры. Вы можете лепить каждый свое или работать над одним большим проектом — решать только вам.",
      },
      {
        type: "h2",
        text: "Что вас ждет на гончарном свидании?",
      },
      {
        type: "p",
        text: "Мы продумали всё до мелочей, чтобы вы ни о чем не переживали и просто наслаждались моментом. Двух с половиной часов погружения в мир керамики достаточно, чтобы привыкнуть к материалу, влюбиться в процесс и довести работу до логической завершенности. Даже если вы никогда не касались глины в жизни — это не проблема! Мастер все покажет, научит и поможет. Вы уйдете с готовым изделием, даже если в начале боялись, что ничего не выйдет. Совместное творчество. Вы договариваетесь сами: каждый создает свое изделие, или вы помогаете партнеру. Главное — вы делаете это вместе. Все материалы включены. Мы предоставляем всё необходимое: Глина и инструменты для работы. Защитные фартуки. Глазуровка и обжиг керамики (без доплат). Ароматный чай и кофе. В перерывах между этапами работы вы всегда можете сделать глоток любимого напитка. Это делает атмосферу еще более домашней и уютной.",
      },
      {
        type: "h3",
        text: "Гончарное свидание в Нижнем Новгороде — идеальный подарок",
      },
      {
        type: "p",
        text: "Ищете оригинальный сюрприз для второй половинки? Сертификат на гончарное свидание — это эмоции, которые не купишь в магазине. Это воспоминание, которое останется с вами навсегда в виде керамического изделия, созданного вашими руками. Стоимость свидания для двоих — 6000 рублей. В эту цену входит всё: материалы, работа мастера, обжиг, глазуровка и уютное чаепитие. Приходите знакомиться с глиной и друг с другом заново. В нашей мастерской время действительно останавливается.",
      },
    ],
  };

  // JSON-LD для статьи (BlogPosting)
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postData.title,
    description: postData.description,
    image: `https://borsch-art.ru${postData.coverImage}`,
    url: "https://borsch-art.ru/blog-pages/pottery-date-for-two/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
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
      "@id": "https://borsch-art.ru/blog-pages/pottery-date-for-two/",
    },
    keywords:
      "гончарное свидание, свидание для двоих, гончарный круг, ручная лепка, романтический вечер, Нижний Новгород",
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
        name: "Свидание за гончарным кругом",
        item: "https://borsch-art.ru/blog-pages/pottery-date-for-two/",
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
          content="гончарное свидание, свидание для двоих, гончарный круг, ручная лепка, романтический вечер, Нижний Новгород, творческая студия"
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`https://borsch-art.ru${postData.coverImage}`}
        />
        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/pottery-date-for-two/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
        <meta property="article:published_time" content="2026-03-18" />
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
        <ul className="flex ">
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
            <span>Свидание за гончарным кругом</span>
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

        {/* Контент статьи */}
        <article className="prose prose-lg max-w-none">
          {postData.content.map((item, index) => renderContent(item, index))}
        </article>

        {/* Кнопка для перехода к странице свидания */}
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-12">
          <div className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300">
            <Link
              href="/loveMeeting"
              className="text-black font-bold text-lg flex text-center justify-center"
            >
              Посмотреть как проходят свидания!
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PotterDate;
