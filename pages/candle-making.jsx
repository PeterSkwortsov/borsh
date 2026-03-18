import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function CandleMaking() {
  // JSON-LD для мастер-класса (Event) - ИСПРАВЛЕНО
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по свечеварению в Нижнем Новгороде",
    description:
      "За мастер-класс вы получаете две ароматических свечи в гипсовом кашпо/стеклянном стакане/скорлупе кокоса. Работаем на кокосовом и соевом воске. Есть варианты декора свечей и гипсовых кашпо.",
    image: [
      "https://borsch-art.ru/sv.webp",
      "https://borsch-art.ru/146.webp",
    ],
    url: "https://borsch-art.ru/candle-making/",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    // Добавляем обязательные поля startDate и endDate
    startDate: "2026-03-01",
    endDate: "2026-12-31",
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
      offerCount: 5,
      lowPrice: "1800",
      highPrice: "6000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01",
      offers: [
        {
          "@type": "Offer",
          name: "Свечи в гипсовом кашпо (от 3-х человек)",
          price: "1800",
          priceCurrency: "RUB",
          description:
            "Свечи в гипсовом кашпо. Групповой мастер-класс от 3-х человек",
          availability: "https://schema.org/InStock",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Свечи в стеклянном стакане (от 3-х человек)",
          price: "2000",
          priceCurrency: "RUB",
          description:
            "Свечи в стеклянном стакане. Групповой мастер-класс от 3-х человек",
          availability: "https://schema.org/InStock",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 3,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Свечи в скорлупе кокоса (от 3-х человек)",
          price: "2200",
          priceCurrency: "RUB",
          description:
            "Свечи в скорлупе кокоса. Групповой мастер-класс от 3-х человек",
          availability: "https://schema.org/InStock",
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
          description: "Индивидуальный мастер-класс по свечеварению для одного",
          availability: "https://schema.org/InStock",
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
          description: "Индивидуальный мастер-класс по свечеварению для двоих",
          availability: "https://schema.org/InStock",
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
      description: "Мастер по свечеварению",
    },
    typicalAgeRange: "12+",
    duration: "PT2H30M",
    maximumAttendeeCapacity: 10,
    // Добавляем информацию о расписании (опционально)
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "Weekly",
      byDay: "https://schema.org/Saturday,https://schema.org/Sunday",
      startTime: "11:00",
      endTime: "22:00",
    },
  };

  // JSON-LD для хлебных крошек (BreadcrumbList)
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
        name: "Мастер-класс по свечеварению",
        item: "https://borsch-art.ru/candle-making/",
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
        name: "Как мы будем создавать свечи?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сначала мы с вами слушаем и выбираем подходящие ароматы для будущей свечи. Когда вы составили композицию из ароматов, мы приступаем к практической части. Закрепляем фитиль в емкости, параллельно топим воск. Заливаем воск в мерный стакан, добавляем нужное количество аромамасел. Выбираем цвет пигмента для окрашивания свечи (по желанию). Полученную заготовку выливаем в емкость для свечи. Ждем застывания 15-20 минут. В это время можно подобрать декор для свечи из сухоцветов. Вуаля!",
        },
      },
    ],
  };

  // JSON-LD для отзывов (Review) - ИСПРАВЛЕНО, добавлен @context
  const reviewsJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Анастасия Грицайчук",
      },
      reviewBody:
        "Мастер-класс был прекрасный. Отличное место, чтобы провести время и попробовать что-то новое. Теперь мы знаем, какие чудесные подарки можно приготовить для друзей и родных. Спасибо!",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс по свечеварению",
      },
      datePublished: "2026-02-10",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Наталья",
      },
      reviewBody:
        "Это чудесное место! Атмосфера здесь невероятно уютная, теплая, творческая и по-домашнему комфортная, сюда хочется возвращаться снова и снова. Это именно то место, где забываешь о суете и полностью погружаешься в процесс. Была два раза, на лепке и делала свечи, от процесса и результата остались самые приятные впечатления. Огромная благодарность Вике — прекрасной хозяйке, которая встречает гостей с такой душевной теплотой и радушием. Очень надеюсь в скором времени посетить еще мастер-классы",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс по свечеварению",
      },
      datePublished: "2026-01-15",
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Олеся Тропина",
      },
      reviewBody:
        "Побывали на мастер-классе по свечам с подружкой! Очееень классный результат, а процесс еще увлекательнее. Мы создали уникальные работы, от чего я в полном восторге. Студия уютная, красивая, в которой сразу же появляется вдохновение. Всем-всем очень настоятельно рекомендую посетить это очаровательное место и привнести в свою жизнь кусочек искусства",
      itemReviewed: {
        "@type": "Event",
        name: "Мастер-класс по свечеварению",
      },
      datePublished: "2026-02-28",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Мастер-класс по свечеварению в Нижнем Новгороде | Студия Вика Борщ
        </title>
        <meta
          name="description"
          content="За мастер-класс вы получаете две ароматических свечи в гипсовом кашпо/стеклянном стакане/скорлупе кокоса. Работаем на кокосовом и соевом воске. Есть варианты декора свечей и гипсовых кашпо."
        />
        <meta
          property="og:title"
          content="Мастер-класс по свечеварению в Нижнем Новгороде"
        />
        <meta
          property="og:description"
          content="Создайте свои ароматические свечи на мастер-классе в студии Вика Борщ. Кокосовый и соевый воск, декор сухоцветами. Индивидуальные и групповые занятия."
        />
        <meta property="og:image" content="https://borsch-art.ru/6.jpg" />
        <meta
          property="og:url"
          content="https://borsch-art.ru/candle-making/"
        />
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
            <Link href="./#5" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Мастер-класс по свечеварению</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center text-orange-600 justify-center m-5 mt-8 text-2xl font-extrabold">
        Свечеварение в Нижнем Новгороде
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mt-5 mb-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">
                Мастер-класс по <br></br>свечеварению от 3-х человек
              </th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Свечи в гипсовом кашпо</td>
              <td>1800₽ / человек</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Свечи в стеклянном стакане</td>
              <td>2000₽ / человек</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Свечи в скорлупе кокоса</td>
              <td>2200₽ / человек</td>
            </tr>
          </tbody>
        </table>
        <div className="block mt-2 md:hidden">
          <Image
            src="/left.png"
            alt="Свайп вправо для просмотра таблицы"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 m-auto mt-6">
          {/* Индивидуальный */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-amber-600 text-3xl mb-2">👤</div>
            <div className="text-lg font-semibold text-stone-800 mb-1">
              Индивидуальный
            </div>
            <div className="text-2xl font-bold text-amber-700">3300 ₽</div>
          </div>

          {/* Для двоих */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-amber-600 text-3xl mb-2">👥</div>
            <div className="text-lg font-semibold text-stone-800 mb-1">
              Для двоих
            </div>
            <div className="text-2xl font-bold text-amber-700">6000 ₽</div>
          </div>
        </div>
      </div>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-lg relative">
        <span className="indicator-item absolute badge bg-orange-600 text-white border-none z-10">
          Свечка в стеклянном бокале
        </span>
        <div className="carousel-item h-full">
          <Image
            src="/sv.webp"
            unoptimized
            width={338}
            height={100}
            alt="Ароматическая свеча ручной работы на мастер-классе по свечеварению"
          />
          <Image
            src="/255.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Ароматическая свеча ручной работы на мастер-классе по свечеварению"
          />
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <a
          href="https://t.me/vika_borsch99"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200 p-5 px-10 rounded-4xl text-black font-bold text-lg transition-all duration-300"
        >
          Забронировать дату
        </a>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto mt-10 px-4 sm:px-6 lg:px-8">
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
                    Как мы будем создавать свечи?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full">
                  <p className="text-gray-700 text-md">
                    Сначала мы с вами слушаем и выбираем подходящие ароматы для
                    будущей свечи. Когда вы составили композицию из ароматов, мы
                    приступаем к практической части. Закрепляем фитиль в
                    емкости, параллельно топим воск. Заливаем воск в мерный
                    стакан, добавляем нужное количество аромамасел. Выбираем
                    цвет пигмента для окрашивания свечи (по желанию). Полученную
                    заготовку выливаем в емкость для свечи. Ждем застывания
                    15-20 минут. В это время можно подобрать декор для свечи из
                    сухоцветов.
                    <br />
                    <br />
                    Вуаля!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-5">
        <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 p-2 mb-10">
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/146.webp"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по свечеварению"
            style={{ width: "100%" }}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/167.jpg"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по свечеварению"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-sm flex justify-center m-auto">
          <Image
            src="/147.webp"
            unoptimized
            width={100}
            height={100}
            alt="Отзыв о мастер-классе по свечеварению"
            style={{ width: "100%" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
