import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Painting() {
  // JSON-LD для мастер-класса по живописи (Event)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по рисованию в Нижнем Новгороде",
    description:
      "Записывайтесь на мастер-класс по живописи для взрослых и детей. Вместе мы определимся с темой, сюжетом и жанром. В зависимости от идеи подберем размер холста. Начнем с эскиза и работы над композицией. На мастер-классе вы отдохнете душой и телом, дадите проявиться своим творческим способностям. По итогу вы получите картину, которую не стыдно будет повесить на стену.",
    image: [
      "https://borsch-art.ru/174.jpg",
      "https://borsch-art.ru/65.webp",
      "https://borsch-art.ru/194.jpg",
      "https://borsch-art.ru/103.webp",
      "https://borsch-art.ru/118.webp",
    ],
    url: "https://borsch-art.ru/painting/",
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
      "@type": "AggregateOffer",
      offerCount: 6,
      lowPrice: "1600",
      highPrice: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Живопись акрилом 20х20 см (от 3-х человек)",
          price: "1600",
          priceCurrency: "RUB",
          description: "Холст 20х20 см, акриловые краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 20х20 см (от 3-х человек)",
          price: "2000",
          priceCurrency: "RUB",
          description: "Холст 20х20 см, масляные краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Живопись акрилом 30х40 см (от 3-х человек)",
          price: "2200",
          priceCurrency: "RUB",
          description: "Холст 30х40 см, акриловые краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 30х40 см (от 3-х человек)",
          price: "2600",
          priceCurrency: "RUB",
          description: "Холст 30х40 см, масляные краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Живопись акрилом 50х70 см (от 3-х человек)",
          price: "2600",
          priceCurrency: "RUB",
          description: "Холст 50х70 см, акриловые краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Живопись маслом 50х70 см (от 3-х человек)",
          price: "3200",
          priceCurrency: "RUB",
          description: "Холст 50х70 см, масляные краски",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс для одного человека",
          price: "3300",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие живописью",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            maxValue: 1,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс для двух человек",
          price: "6000",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие живописью для двоих",
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
      description: "Художник-преподаватель",
    },
    typicalAgeRange: "4+",
    duration: "PT2H",
    maximumAttendeeCapacity: 10,
  };

  // JSON-LD для детских уроков рисования (Course/EducationalOccupationalProgram)
  const kidsClassesJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Уроки рисования для детей от 4 лет",
    description:
      "Увлекательные уроки рисования для детей от 4 лет. Знакомство с разными техниками и материалами: акварель, акрил, масло, фломастеры, карандаши. Занятия проходят по средам.",
    timeOfDay: "14:30-16:00",
    dayOfWeek: "Wednesday",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    offers: {
      "@type": "Offer",
      price: "700",
      priceCurrency: "RUB",
      description: "Разовое занятие",
    },
    totalPrice: {
      "@type": "PriceSpecification",
      price: "2800",
      priceCurrency: "RUB",
      description: "Абонемент на 4 занятия (один раз в неделю)",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Дети от 4 лет",
    },
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
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
        item: "https://borsch-art.ru/#1",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Мастер-класс по живописи",
        item: "https://borsch-art.ru/painting/",
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
        name: "Как проходит мастер-класс по живописи?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. Выбор темы и красок. Сначала мы с вами выбираем, какой сюжет и жанр будем рисовать и какие краски нам для этого понадобятся. 2. Размер холста. В зависимости от идеи мы с вами выбираем размер холста. 3. Эскиз и работа над композицией. Делаем предварительный набросок, намечаем композиционное построение. 4. Работа над картиной. Мы идем от общего к частному, создаем плановость и подбираем оттенки.",
        },
      },
      {
        "@type": "Question",
        name: "Как одеться на мастер-класс?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Выбрать практичную одежду. Она должна быть свободной и не сковывать движений. Не стоит брать слишком дорогие вещи, которые могут испачкаться. На занятии мы выдаем фартук и тапочки.",
        },
      },
      {
        "@type": "Question",
        name: "Что будет, если я опоздаю?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мастер-класс начнется вовремя, однако если кто-то опаздывает не более чем на 30 минут, то мы поможем создать картину в отведенное для занятия время. Если вы опаздываете более чем на 30 минут, то мы вас будем ждать на следующем мастер-классе.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если я не смогу прийти?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Важно заранее предупредить о невозможности присутствовать на запланированном мастер-классе, чем раньше, тем лучше. Так как на каждого участника закупаются материалы и инструменты.",
        },
      },
    ],
  };

  // JSON-LD для отзывов
  const reviewsJsonLd = [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Дарья Демина",
      },
      reviewBody:
        "Светлая и уютная студия, училась там рисовать маслом. Вике большое спасибо, что терпеливо ответила на все вопросы и помогала остаться довольной собой)",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс по живописи маслом",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Дарья Герасимова",
      },
      reviewBody:
        "Мне очень понравилось место, все красиво, много света. Я была на нескольких мастер-классах, и все прошло отлично, творческая атмосфера и всегда тебе помогут и подскажут. Всем советую!",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс по живописи акрилом",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Алсу Кириллова",
      },
      reviewBody:
        "Рекомендую студию, я приглашала Викторию провести выездной мастер-класс по рисованию на холсте на дне рождения в ресторане. Всё было организовано на высшем уровне, каждый выбрал рисунок, мастер объясняла и помогала каждому индивидуально рисовать. В итоге мы прекрасно провели время, зарядились положительными эмоциями и каждый ушел с дня рождения с шедеврами! Обязательно придем в студию попробовать лепку!",
      itemReviewed: {
        "@type": "EducationalOccupationalProgram",
        name: "Выездной мастер-класс",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Юлия Кириллова",
      },
      reviewBody:
        "Это что-то потрясающе, невероятно вдохновляюще, расслабляющее!!! Никогда не держала кисть в руках) Пришли хорошо провести время без конкретных идей, а в итоге просто выпорхнули на волне позитива. Вика очень светлый, талантливый, легкий мастер. Подсказала тематику, а от процесса уже невозможно оторваться ни на секунду. Время летит незаметно. Всем, всем, всем рекомендую!!! Это лучшее времяпровождение, которое можно себе представить. Не пожалеет никто!",
      itemReviewed: {
        "@type": "EducationalOccupationalProgram",
        name: "Мастер-класс по живописи",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>
          Мастер-класс по рисованию в Нижнем Новгороде | Живопись акрилом и
          маслом
        </title>
        <meta
          name="description"
          content="Мастер-классы по живописи акриловыми и масляными красками на холсте в Нижнем Новгороде. Для взрослых и детей от 4 лет. Индивидуальные и групповые занятия. Создайте свою картину!"
        />
        <meta
          property="og:title"
          content="Занятия по живописи акриловыми и масляными красками на холсте | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Записывайтесь на мастер-класс по живописи акриловыми и масляными красками на холсте. Для взрослых и детей. Вы получите картину, которую не стыдно повесить на стену."
        />
        <meta property="og:image" content="https://borsch-art.ru/4.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/painting/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Творческая студия Вика Борщ" />
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
          __html: JSON.stringify(kidsClassesJsonLd).replace(/</g, "\\u003c"),
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
            <Link href="./#1" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Мастер-класс по живописи</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center text-orange-600 justify-center m-5 mt-8 text-2xl font-extrabold">
        Мастер-класс по рисованию в Нижнем Новгороде
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mt-5 mb-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">Мастер-класс от 3-х человек</th>
              <th className="fb">Размер</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Живопись акриловыми красками на холсте /<br />
                Масляными красками на холсте
              </td>
              <td>20*20 см</td>
              <td>
                1.600₽
                <br /> 2.000₽
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                Живопись акриловыми красками на холсте /<br />
                Масляными красками на холсте
              </td>
              <td>30*40 см</td>
              <td>
                2.200₽
                <br />
                2.600₽
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>
                Живопись акриловыми красками на холсте /<br />
                Масляными красками на холсте
              </td>
              <td>50*70 см</td>
              <td>
                2.600₽
                <br /> 3.200₽
              </td>
            </tr>
          </tbody>
        </table>
        <div className="block md:hidden">
          <Image
            src="/left.png"
            alt="Свайп вправо для просмотра таблицы"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
        <p className="text-md flex text-center justify-center m-5 mt-8">
          Индивидуальный мастер-класс для одного человека от 3300₽.
        </p>
        <p className="text-md flex text-center justify-center m-5">
          Индивидуальный мастер-класс для двух человек от 6000₽.
        </p>
      </div>

      <div className="px-4 md:py-20 lg:py-24 mb-7">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div
              className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-1 
            py-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0"></div>
                <div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                    Уроки рисования для детей
                  </h2>
                  <p className="text-gray-700">
                    Также в нашей творческой студии проходят увлекательные уроки
                    рисования для детей от 4 лет. Мы знакомим ребят с разными
                    техниками и материалами: от нежной акварели и яркого акрила
                    до классического масла и привычных фломастеров с
                    карандашами. Занятия проходят по средам один раз в неделю с
                    14:30 до 16:00. Стоимость — 2800 ₽ (700 ₽ занятие).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2">
        <div className="carousel-item h-full">
          <Image
            src="/174.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по живописи маслом на холсте"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/65.webp"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по живописи маслом"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/194.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по живописи акрилом на холсте"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/103.webp"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по живописи акрилом на холсте"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/118.webp"
            unoptimized
            width={300}
            height={100}
            alt="Мастер-класс по живописи маслом на холсте"
          />
        </div>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h2>
          </div>

          <div className="mt-10">
            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Как проходит мастер-класс по живописи?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="text-orange-600 font-bold">
                        Выбор темы и красок.
                      </span>{" "}
                      Сначала мы с вами выбираем, какой сюжет и жанр будем
                      рисовать и какие краски нам для этого понадобятся.
                    </li>
                    <li>
                      <span className="text-orange-600 font-bold">
                        Размер холста.
                      </span>{" "}
                      В зависимости от идеи мы с вами выбираем размер холста, от
                      этого будет зависеть конечная стоимость мастер-класса.
                    </li>
                    <li>
                      <span className="text-orange-600 font-bold">
                        Эскиз и работа над композицией.
                      </span>{" "}
                      Делаем предварительный набросок, намечаем композиционное
                      построение и находим основные цветовые соотношения.
                    </li>
                    <li>
                      <span className="text-orange-600 font-bold">
                        Работа над картиной.
                      </span>{" "}
                      Мы идем от общего к частному, создаем плановость и
                      подбираем оттенки.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Как одеться на мастер-класс?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full">
                  <p className="text-gray-700 text-md">
                    Выбрать практичную одежду. Она должна быть свободной и не
                    сковывать движений. Не стоит брать слишком дорогие вещи,
                    которые могут испачкаться.
                    <br />
                    На занятии мы выдаем фартук и тапочки.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Что будет, если я опоздаю?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full">
                  <p className="text-gray-700 text-md">
                    Мастер-класс начнется вовремя, однако если кто-то опаздывает
                    не более чем на 30 минут, то мы поможем создать картину в
                    отведенное для занятия время. <br />
                    Если вы опаздываете более чем на 30 минут, то мы вас будем
                    ждать на следующем мастер-классе :)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Что делать, если я не смогу прийти?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full">
                  <p className="text-gray-700 text-md">
                    Важно заранее предупредить о невозможности присутствовать на
                    запланированном мастер-классе, чем раньше, тем лучше. Так
                    как на каждого участника закупаются материалы и инструменты.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-6 mt-5">
        <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-2 mb-10">
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/109.webp"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по живописи"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/132.webp"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по живописи"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/116.webp"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по живописи"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/192.png"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по живописи"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
