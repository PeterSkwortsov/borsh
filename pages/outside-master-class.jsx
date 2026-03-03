import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Outside() {
  // JSON-LD для выездного мастер-класса (Event + Service)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Выездной мастер-класс по лепке в Нижнем Новгороде",
    description:
      "Проведем мастер-класс по лепке глиняных изделий в школе, на дому, учебном центре или на природе. Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки. Живопись маслом и акрилом на холсте.",
    image: [
      "https://borsch-art.ru/173.jpg",
      "https://borsch-art.ru/171.jpg",
      "https://borsch-art.ru/220.jpg",
      "https://borsch-art.ru/175.jpg",
      "https://borsch-art.ru/170.jpg",
      "https://borsch-art.ru/172.jpg",
    ],
    url: "https://borsch-art.ru/outside-master-class",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Выездной мастер-класс (на вашей территории)",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Нижний Новгород",
        addressRegion: "Нижегородская область",
        addressCountry: "RU",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 3,
      lowPrice: "2000",
      highPrice: "2800",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Выездной мастер-класс: Тарелочка плоская",
          price: "2000",
          priceCurrency: "RUB",
          description: "Лепка плоской тарелочки из глины с росписью",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 6,
            maxValue: 30,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Выездной мастер-класс: Кружка и глубокая тарелка",
          price: "2400",
          priceCurrency: "RUB",
          description: "Лепка кружки и глубокой тарелки из глины с росписью",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 6,
            maxValue: 30,
            unitText: "человек",
          },
        },
        {
          "@type": "Offer",
          name: "Выездной мастер-класс: Менажница или ваза до 15 см",
          price: "2800",
          priceCurrency: "RUB",
          description: "Лепка менажницы или вазы из глины с росписью",
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: 6,
            maxValue: 30,
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
      description: "Мастер-керамист",
    },
    typicalAgeRange: "6+",
    duration: "PT2H",
    maximumAttendeeCapacity: 30,
    minimumAttendeeCapacity: 6,
  };

  // JSON-LD для услуги (Service) - дополнительно для выездного формата
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Выездные мастер-классы по лепке для детей и взрослых",
    description:
      "Проводим увлекательные мастер-классы на вашей территории до 30 человек. Ручная лепка из глины с росписью.",
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
    },
    areaServed: {
      "@type": "City",
      name: "Нижний Новгород",
    },
    serviceType: "Выездной мастер-класс",
    audience: {
      "@type": "Audience",
      audienceType: "Дети",
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
        item: "https://borsch-art.ru/#6",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Выездной мастер-класс",
        item: "https://borsch-art.ru/outside-master-class",
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
        name: "Как происходит подготовка к выездному мастер-классу в школе?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы приедем заранее за 15-20 минут, нам нужно подготовить класс. Желательно, чтобы в классе была доска с проектором, вначале занятия мы расскажем базовую информацию о глине и покажем изображения, что можно слепить из глины, чтобы дети лучше представляли конечный результат. Если проектора нет, мы раздадим детям заранее распечатанные картинки. Мы привозим с собой все необходимые инструменты (ангобы, краски и т. д.).",
        },
      },
    ],
  };



  return (
    <>
      <Head>
        <title>
          Выездные мастер-классы по лепке для детей и взрослых в Нижнем
          Новгороде
        </title>
        <meta
          name="description"
          content="Выездные мастер-классы по лепке из глины в Нижнем Новгороде. Проведем в школе, на дому, в офисе или на природе. Лепка тарелок, кружек, ваз. Живопись маслом и акрилом. от 6 до 30 человек."
        />
        <meta
          name="keywords"
          content="выездной мастер-класс, лепка для детей, мастер-класс в школу, выездная керамика, день рождения мастер-класс"
        />
        <meta
          property="og:title"
          content="Выездные мастер-классы по лепке для детей и взрослых | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Проводим увлекательные мастер-классы на вашей территории до 30 человек. Лепка из глины, роспись, новогодние композиции."
        />
        <meta property="og:image" content="https://borsch-art.ru/3.jpg" />
        <meta
          property="og:url"
          content="https://borsch-art.ru/outside-master-class"
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
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
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
      

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#6" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Выездной мастер-класс</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center m-auto text-orange-600 justify-center mt-8 max-w-1xl text-2xl font-extrabold p-2">
        Выездной мастер-класс в Нижнем Новгороде
      </h1>

      <h2 className="flex text-center justify-center m-auto text-xl px-4">
        Наша команда проведет выездной мастер-класс в школе, на дому, учебном
        центре или на природе
      </h2>

      <p className="flex text-center justify-center p-5 m-auto max-w-3xl">
        Вы можете выбрать формат мастер-класса: ручная лепка из глины с росписью
        специальными красками (изделия забираем после на сушку и двойной обжиг)
        <br /> или создание новогодней композиции из пихты нобилиса, которая
        будет радовать всю зиму!
      </p>

      <p className="flex text-center justify-center p-3 m-auto font-bold text-lg">
        Проводим выездные мастер-классы от 6 до 30 человек.
      </p>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">Стоимость выездного мк по ручной лепке</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Тарелочка плоская</td>
              <td>2000₽ / человек</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Кружка и глубокая тарелка</td>
              <td>2400₽ / человек</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Менажница или ваза до 15 см</td>
              <td>2800₽ / человек</td>
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
      </div>

      <div className="mb-8">
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
      </div>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2">
        <div className="carousel-item h-full">
          <Image
            src="/173.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Выездной мастер-класс по лепке для детей"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/171.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Выездной мастер-класс по лепке в школе"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/220.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Выездной мастер-класс по лепке"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/175.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Выездной мастер-класс по лепке"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/170.jpg"
            unoptimized
            width={535}
            height={100}
            alt="Выездной мастер-класс по лепке на природе"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/172.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Выездной мастер-класс по лепке для взрослых"
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

          <div className="mt-8">
            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5 bg-gray-100 rounded-lg">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Мы хотим провести мастер-класс для своих детей в школе. Как
                    происходит подготовка к мероприятию?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full rounded-lg">
                  <p className="text-gray-700 text-md">
                    Мы приедем заранее за 15-20 минут, нам нужно подготовить
                    класс. Желательно, чтобы в классе была доска с проектором,
                    вначале занятия мы расскажем базовую информацию о глине и
                    покажем изображения, что можно слепить из глины, чтобы дети
                    лучше представляли конечный результат. Если проектора нет,
                    мы раздадим детям заранее распечатанные картинки.
                    <br />
                    <br />
                    Мы привозим с собой все необходимые инструменты (ангобы,
                    краски и т. д.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
