import Link from "next/link";
import Head from "next/head";

export default function WoodBurningPage() {
  // JSON-LD для мастер-класса по выжиганию (Event)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Мастер-класс по выжиганию по дереву в Нижнем Новгороде",
    description:
      "Мастер-класс по выжиганию на деревянных листах форматов А3, А4, А5. Выжигание - один из древнейших видов творчества! Процесс приносит умиротворение и спокойствие.",
    url: "https://borsch-art.ru/wood-burning/",
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
      offerCount: 5,
      lowPrice: "1000",
      highPrice: "2700",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      offers: [
        {
          "@type": "Offer",
          name: "Мастер-класс по выжиганию на заготовке А5",
          price: "1000",
          priceCurrency: "RUB",
          description: "Выжигание на деревянной заготовке формата А5",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Мастер-класс по выжиганию на заготовке А4",
          price: "1200",
          priceCurrency: "RUB",
          description: "Выжигание на деревянной заготовке формата А4",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Мастер-класс по выжиганию на заготовке 25*35 см",
          price: "1500",
          priceCurrency: "RUB",
          description: "Выжигание на деревянной заготовке размером 25х35 см",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Мастер-класс по выжиганию на заготовке А3",
          price: "2000",
          priceCurrency: "RUB",
          description: "Выжигание на деревянной заготовке формата А3",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Индивидуальный мастер-класс по выжиганию",
          price: "2700",
          priceCurrency: "RUB",
          description: "Индивидуальное занятие по выжиганию по дереву",
          availability: "https://schema.org/InStock",
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
      description: "Мастер декоративно-прикладного искусства",
    },
    typicalAgeRange: "10+",
    duration: "PT2H",
    maximumAttendeeCapacity: 8,
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
        name: "Выжигание по дереву",
        item: "https://borsch-art.ru/wood-burning/",
      },
    ],
  };



  return (
    <>
      <Head>
        <title>
          Мастер-класс по выжиганию по дереву в Нижнем Новгороде | Студия Вика
          Борщ
        </title>
        <meta
          name="description"
          content="Мастер-класс по выжиганию на деревянных листах форматов А3, А4, А5. Творческий процесс, который приносит умиротворение. от 1000₽. Индивидуальные и групповые занятия."
        />
        <meta
          name="keywords"
          content="выжигание по дереву, пирография, мастер-класс выжигание, творчество Нижний Новгород"
        />
        <meta
          property="og:title"
          content="Мастер-класс по выжиганию по дереву | Студия Вика Борщ"
        />
        <meta
          property="og:description"
          content="Выжигание - один из древнейших видов творчества! Процесс приносит умиротворение и спокойствие. Создайте свое уникальное панно."
        />
        <meta property="og:url" content="https://borsch-art.ru/wood-burning/" />
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
     

      {/* Хлебные крошки */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex ">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="./#5" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Выжигание по дереву</span>
          </li>
        </ul>
      </ol>

      <h1 className="text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        <span className="text-orange-600">Мастер-класс</span> по выжиганию{" "}
        <span className="text-orange-600">по дереву</span>
        <br />в Нижнем Новгороде
      </h1>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mb-10 mt-7">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th className="fb">Название</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Мастер-класс по выжиганию на заготовке А5</td>
              <td>1.000₽</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Мастер-класс по выжиганию на заготовке А4</td>
              <td>1.200₽</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Мастер-класс по выжиганию на заготовке 25*35 см</td>
              <td>1.500₽</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Мастер-класс по выжиганию на заготовке А3</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Индивидуальный мастер-класс</td>
              <td>2.700₽</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Дополнительный информационный блок для SEO и вовлечения */}
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Что такое выжигание по дереву?
          </h2>
          <p className="text-gray-700 mb-2">
            Выжигание (пирография) — это древнейший вид декоративно-прикладного
            искусства. Рисунок наносится раскаленной иглой на деревянную
            поверхность.
          </p>
          <p className="text-gray-700">
            Процесс очень медитативный и успокаивающий. Вы можете выбрать любой
            эскиз или нарисовать свой. Мастер поможет с техникой и подскажет,
            как сделать рисунок выразительным. В итоге вы получите уникальное
            деревянное панно, которое украсит интерьер или станет отличным
            подарком.
          </p>
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
    </>
  );
}
