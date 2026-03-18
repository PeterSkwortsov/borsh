import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

const PaintingClass = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Данные для статьи
  const postData = {
    title:
      "Мастер-класс по рисованию в Нижнем Новгороде. Рисование для взрослых и детей",
    date: "8 марта 2026",
    readTime: "2 мин",
    coverImage: "/174.jpg",
    description:
      "Мастер-классы по рисованию для взрослых и детей в Нижнем Новгороде. Живопись акрилом и маслом на холсте. Уроки рисования для детей от 4 лет. Творческое развитие и вдохновение в студии Вика Борщ.",
    content: [
      {
        type: "h1",
        text: "Мастер-класс по рисованию. Раскройте талант в себе и своем ребенке",
      },
      {
        type: "p",
        text: "Каждый из нас хотя бы раз в жизни хотел бы взять в руки кисть, чтобы перенести на холст красоту заката или уют улочек любимого города. Взрослые часто откладывают мечту «на потом», а дети с радостью готовы творить каждый день. Мы приглашаем вас и ваших малышей в нашу творческую студию в Нижнем Новгороде, где царит атмосфера вдохновения, свободы и самовыражения.",
      },
      {
        type: "h2",
        text: "Живопись для взрослых: выбери свою технику",
      },
      {
        type: "p",
        text: "Для гостей старшего возраста мы подготовили два насыщенных направления. Независимо от того, стояли ли вы у мольберта в последний раз на школьном уроке или уже уверенно смешиваете цвета, наши мастера помогут вам создать настоящий шедевр.",
      },
      {
        type: "h3",
        text: "Живопись акриловыми красками на холсте",
      },
      {
        type: "p",
        text: "Акрил идеально подходит для новичков. Он быстро сохнет, позволяет легко исправлять ошибки и писать яркие, фактурные картины. На наших мастер-классах по живописи акрилом вы узнаете, как смешивать цвета для получения неожиданных оттенков. Освоите технику мазка и работы мастихином. Всего за одно занятие вы уносите с собой готовую интерьерную картину, написанную своими руками.",
      },
      {
        type: "h3",
        text: "Масляными красками на холсте",
      },
      {
        type: "p",
        text: "Для тех, кто мечтает о классической живописи и глубине цвета, мы проводим мастер-классы маслом. Это более медитативный процесс, требующий внимания к деталям. Почему стоит попробовать масло? Неповторимая текстура и благородство красок. Возможность возвращаться к работе несколько дней (масло сохнет долго). Вы сможете освоить технику лессировки и научиться писать объемные, «живые» пейзажи.",
      },
      {
        type: "h2",
        text: "Уроки рисования для детей от 4 лет",
      },
      {
        type: "p",
        text: "Творческое развитие — важная часть формирования личности. В нашей студии проходят не просто занятия, а настоящие увлекательные уроки рисования для детей, где каждый ребенок чувствует себя художником. Мы знаем, как удержать внимание юных творцов, и знакомим ребят с богатством мира изобразительного искусства. Учимся заливать фон и рисовать прозрачных сказочных персонажей. Создаем сочные, фактурные работы и открытки. Графика: рисование фломастерами, цветными и простыми карандашами, пастелью.",
      },
      {
        type: "h3",
        text: "Как проходят занятия?",
      },
      {
        type: "p",
        text: "Занятия проходят по средам один раз в неделю. Такой график позволяет ребенку не перегружаться, но при этом регулярно получать порцию вдохновения и совершенствовать свои навыки. Мы формируем группы по возрастам, чтобы каждому было комфортно и интересно.",
      },
      {
        type: "h2",
        text: "Почему выбирают нашу студию в Нижнем Новгороде?",
      },
      {
        type: "p",
        text: "Профессиональные преподаватели. Наши художники умеют вдохновлять и находить подход к каждому ученику, будь то серьезный взрослый или шаловливый пятиклассник. Все материалы включены. Вам не нужно покупать дорогие холсты и краски. У нас есть всё необходимое: от кистей до фартуков. Готовый результат. Вы не учитесь рисовать «когда-нибудь в будущем» — вы создаете картину здесь и сейчас. Уютная студия, приятная музыка и чай с печеньками — идеальное завершение рабочей недели или интересные выходные.",
      },
      {
        type: "p",
        text: "Приходите сами и приводите детей! Давайте творить вместе.",
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
    url: "https://borsch-art.ru/blog-pages/painting-classes/",
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
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
      "@id": "https://borsch-art.ru/blog-pages/painting-classes/",
    },
    keywords:
      "рисование, мастер-класс по рисованию, живопись акрилом, живопись маслом, уроки рисования для детей, Нижний Новгород",
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
        name: "Рисование для взрослых и детей",
        item: "https://borsch-art.ru/blog-pages/painting-classes/",
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
          content="рисование, мастер-класс по рисованию, живопись акрилом, живопись маслом, уроки рисования для детей, Нижний Новгород, творческая студия"
        />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`https://borsch-art.ru${postData.coverImage}`}
        />
        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/painting-classes/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
        <meta property="article:published_time" content="2026-03-08" />
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
          <li className="badge  text-gray-700 border-none">
            <Link href="/blog" title="Статьи">
              <span>Статьи</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Рисование для взрослых и детей</span>
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

        {/* Кнопки для перехода к занятиям */}
        <div className="mt-12 space-y-4">
          <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300">
              <Link
                href="/children"
                className="text-black font-bold text-lg flex text-center justify-center"
              >
                Занятия для детей
              </Link>
            </div>
          </div>

          <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300">
              <Link
                href="/painting"
                className="text-black font-bold text-lg flex text-center justify-center"
              >
                Занятия для взрослых
              </Link>
            </div>
          </div>
        </div>

     
      </main>
    </>
  );
};

export default PaintingClass;
