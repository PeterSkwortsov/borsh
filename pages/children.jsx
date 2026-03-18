import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Children() {
  // JSON-LD для детских занятий (EducationalOccupationalProgram)
  const paintingProgramJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Занятия по рисованию для детей от 4 лет",
    description:
      "Ребенок освоит основы рисунка и живописи, научится работать с разными материалами (акрил, масло, графика). Развитие моторики, фантазии и радость творчества в атмосфере вдохновения.",
    educationalProgramMode: "in-person",
    timeOfDay: "14:30-16:00",
    dayOfWeek: "Wednesday",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    offers: {
      "@type": "Offer",
      price: "2800",
      priceCurrency: "RUB",
      description: "Абонемент на 4 занятия (1 раз в неделю)",
      validFrom: "2026-01-01",
    },
    totalPrice: {
      "@type": "PriceSpecification",
      price: "700",
      priceCurrency: "RUB",
      description: "Разовое занятие",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Дети от 4 лет",
    },
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
      url: "https://borsch-art.ru",
    },
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
    occupationalCategory: "Изобразительное искусство",
    occupationalCredentialAwarded: "Навыки рисования",
    programPrerequisites: "Без подготовки",
    numberOfCredits: 4,
    typicalCreditsPerTerm: 4,
  };

  // JSON-LD для детских занятий по лепке (EducationalOccupationalProgram)
  const clayProgramJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Занятия по лепке из глины для детей от 4 лет",
    description:
      "Ребенок создаст свою первую глиняную кружку или тарелку, распишет ее красками и будет использовать в быту. Мы предоставим референсы и поможем на каждом этапе.",
    educationalProgramMode: "in-person",
    timeOfDay: "16:30-18:00",
    dayOfWeek: "Wednesday",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    offers: {
      "@type": "Offer",
      price: "4400",
      priceCurrency: "RUB",
      description: "Абонемент на 4 занятия (1 раз в неделю)",
      validFrom: "2026-01-01",
    },
    totalPrice: {
      "@type": "PriceSpecification",
      price: "1100",
      priceCurrency: "RUB",
      description: "Разовое занятие",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Дети от 4 лет",
    },
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
      url: "https://borsch-art.ru",
    },
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
    occupationalCategory: "Керамика и гончарное дело",
    occupationalCredentialAwarded: "Навыки лепки из глины",
    programPrerequisites: "Без подготовки",
    numberOfCredits: 4,
    typicalCreditsPerTerm: 4,
  };

  // JSON-LD для абонемента по гончарному мастерству
  const potteryProgramJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Гончарное мастерство для детей и взрослых",
    description:
      "Абонемент на 4 занятия в месяц. Можно посещать любые двухчасовые групповые занятия по расписанию.",
    educationalProgramMode: "in-person",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    offers: {
      "@type": "Offer",
      price: "5500",
      priceCurrency: "RUB",
      description: "Абонемент на 4 занятия (любые групповые занятия)",
      validFrom: "2026-01-01",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Дети старшего возраста и взрослые",
    },
    provider: {
      "@type": "Organization",
      name: "Творческая студия Вики Борщ",
      url: "https://borsch-art.ru",
    },
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
    occupationalCategory: "Гончарное дело",
    numberOfCredits: 4,
    typicalCreditsPerTerm: 4,
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
        item: "https://borsch-art.ru/#5",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Занятия по рисованию и лепке для детей",
        item: "https://borsch-art.ru/children/",
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
        name: "В какие дни и в какое время проводятся занятия?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Занятия проходят по средам. Рисование: с 14:30 до 16:00. Лепка из глины: с 16:30 до 18:00. Актуальную информацию всегда уточняйте по указанным контактам на сайте.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли брать что-то с собой на гончарное занятие (по абонементу)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "На гончарное занятие от вас ничего не требуется брать. Все материалы мы предоставим.",
        },
      },
    ],
  };

  // JSON-LD для организации (дополнительно)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Творческая студия Вики Борщ",
    url: "https://borsch-art.ru",
    logo: "https://borsch-art.ru/6.jpg",
    sameAs: ["https://t.me/vika_borsch99"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ломоносова, 9",
      addressLocality: "Нижний Новгород",
      addressRegion: "Нижегородская область",
      postalCode: "603105",
      addressCountry: "RU",
    },
  };

  return (
    <>
      <Head>
        <title>
          Рисование и лепка из глины для детей от 4 лет | Творческая студия Вики
          Борщ в Нижнем Новгороде
        </title>
        <meta
          name="description"
          content="Ищем полезный и увлекательный досуг для ребенка? Наши занятия по рисованию и лепке из глины для детей от 4 лет — это развитие моторики, фантазии и радость творчества в атмосфере вдохновения. Ждем вас!"
        />
        <meta
          name="keywords"
          content="изостудия для детей, рисование для детей, лепка из глины для детей, творческие занятия Нижний Новгород, детский мастер-класс"
        />
        <meta
          property="og:title"
          content="Рисование и лепка из глины для детей от 4 лет | Творческая студия Вики Борщ в Нижнем Новгороде"
        />
        <meta
          property="og:description"
          content="Ищем полезный и увлекательный досуг для ребенка? Наши занятия по рисованию и лепке из глины для детей от 4 лет — это развитие моторики, фантазии и радость творчества в атмосфере вдохновения. Ждем вас!"
        />
        <meta property="og:image" content="https://borsch-art.ru/6.jpg" />
        <meta property="og:url" content="https://borsch-art.ru/children/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Творческая студия Вики Борщ" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(paintingProgramJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clayProgramJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(potteryProgramJsonLd).replace(/</g, "\\u003c"),
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
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
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
            <span>Занятия по рисованию и лепке для детей</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center text-orange-600 justify-center m-5 mt-8 text-2xl font-extrabold">
        Изостудия для детей в Нижнем Новгороде.
        <br /> Обучение рисованию и лепке из глины
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mt-10 mb-1">
        <h2 className="text-black text-lg font-extrabold p-3 m-auto text-center mb-4">
          Групповые занятия для детей
          <span className="text-orange-600"> по средам</span>
        </h2>

        <h3 className="text-lg flex text-center justify-center m-5 font-bold">
          Расписание групповых занятий по рисунку и живописи:
        </h3>

        <div className="block md:hidden">
          <Image
            src="/left.png"
            alt="Свайп вправо для просмотра таблицы"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb m-auto">Среда</th>
              <th className="fb m-auto">
                Стоимость 4-х занятий (1 раз в неделю)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14.30-16.00</td>
              <td>2.800₽ (700₽ занятие)</td>
            </tr>
          </tbody>
        </table>

        <p className="font-bold flex text-center justify-center m-1 mt-2">
          Стоимость материалов включена! ✨
        </p>

        <p className="flex text-center justify-center mt-1 max-w-2xl m-auto">
          Ребенок освоит основы рисунка и живописи, научится работать с разными
          материалами (акрил, масло, графика)
        </p>

        <h3 className="text-lg flex text-center justify-center m-5 mt-13 font-bold">
          Расписание групповых занятий для детей по лепке из глины:
        </h3>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb">Среда</th>
              <th className="fb">
                Стоимость 4-х занятий (1 раз в неделю)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16.30-18.00</td>
              <td>4.400₽ (1100₽ занятие)</td>
            </tr>
          </tbody>
        </table>

        <p className="font-bold flex text-center justify-center m-1 mt-2">
          Стоимость материалов включена! ✨
        </p>

        <p className="flex text-center justify-center mt-1 max-w-2xl m-auto">
          Ребенок создаст свою первую глиняную кружку или тарелку, распишет ее
          красками и будет использовать в быту.
          <br /> Мы предоставим референсы и поможем на каждом этапе.
        </p>

        <p className="text-md flex text-center justify-center mt-8 max-w-2xl m-auto">
          Абонемент для более старших детей и взрослых по гончарному мастерству,
          4 занятия в месяц - 5.500₽, в рамках абонемента можно посещать любые
          двухчасовые групповые занятия по расписанию.
        </p>
      </div>

      <div className="px-4 md:py-20 lg:py-24 mb-6 mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group">
            <div className="flex items-start gap-6">
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                  РОСТ ОТ ЗАНЯТИЯ К ЗАНЯТИЮ
                </h2>
                <p className="text-gray-700">
                  Не разовые впечатления, а путь. Ваш ребенок освоит материалы и
                  техники шаг за шагом и создаст свою серию работ, которая
                  покажет его творческое развитие.
                </p>
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

      <div className="py-4 bg-white mt-10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h2>
          </div>

          <div className="mt-10">
            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5 bg-gray-100 rounded-lg">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    В какие дни и в какое время проводятся занятия?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full rounded-lg">
                  <p className="text-gray-700 text-md">
                    Занятия проходят по средам. Рисование: с 14:30 до 16:00.
                    Лепка из глины: с 16:30 до 18:00. Актуальную информацию
                    всегда уточняйте по указанным контактам на сайте.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left mb-10">
              <div className="flex flex-row items-start mb-5 bg-gray-100 rounded-lg">
                <div className="bg-gray-100 p-5 px-10 w-full">
                  <h3 className="text-md leading-6 font-medium text-gray-900">
                    Нужно ли брать что-то с собой на гончарное занятие (по
                    абонементу)?
                  </h3>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full rounded-lg">
                  <p className="text-gray-700 text-md">
                    На гончарное занятие от вас ничего не требуется брать. Все
                    материалы мы предоставим.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex gap-2 rounded-lg">
          <div className="carousel-item h-full">
            <Image
              src="/185.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Детское занятие по рисованию в студии"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/252.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок лепит из глины"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/90.webp"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок лепит из глины"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/234.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок рисует на мастер-классе"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/91.webp"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок рисует на мастер-классе"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/92.webp"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок рисует на мастер-классе"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/160.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Детский мастер-класс по рисованию"
            />
          </div>

          <div className="carousel-item h-full">
            <Image
              src="/63.webp"
              unoptimized
              width={338}
              height={100}
              alt="Ребенок лепит из глины"
            />
          </div>
        </div>
      </div>
    </>
  );
}
