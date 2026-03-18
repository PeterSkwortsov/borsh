import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const About = () => {
  // JSON-LD для Person (информация о Виктории)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Виктория Борщ",
    description:
      "Основательница творческой студии, художник и мастер-керамист. Проводит мастер-классы по живописи и лепке для детей и взрослых.",
    image: "https://borsch-art.ru/62.jpg",
    jobTitle: "Художник-преподаватель",
    worksFor: {
      "@type": "Organization",
      name: "Творческая студия Вика Борщ",
      url: "https://borsch-art.ru",
    },
    knowsAbout: [
      "Живопись акрилом",
      "Масляная живопись",
      "Керамика",
      "Гончарное дело",
      "Лепка из глины",
      "Обучение рисованию",
      "Детское творчество",
    ],
    sameAs: ["https://t.me/vika_borsch99"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ломоносова 9",
      addressLocality: "Нижний Новгород",
      addressRegion: "Нижегородская область",
      postalCode: "603105",
      addressCountry: "RU",
    },
    birthPlace: "Нижний Новгород",
    nationality: "Россия",
    gender: "Female",
  };

  // JSON-LD для организации (дублируем для главной)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Творческая студия Вика Борщ",
    url: "https://borsch-art.ru",
    logo: "https://borsch-art.ru/62.jpg",
    founder: {
      "@type": "Person",
      name: "Виктория Борщ",
    },
    description:
      "Творческая студия в Нижнем Новгороде. Мастер-классы по рисованию, лепке из глины, гончарному делу и свечеварению для детей и взрослых.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ломоносова 9",
      addressLocality: "Нижний Новгород",
      addressRegion: "Нижегородская область",
      postalCode: "603105",
      addressCountry: "RU",
    },
    sameAs: ["https://t.me/vika_borsch99"],
  };

  return (
    <>
      {/* JSON-LD разметка для главной страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

     

      <section
        className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16"
        id="anchor_one"
      >
        <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="px-4">
              <h3 className="text-black text-2xl font-extrabold">
                Здравствуйте!
                <br /> Меня зовут{" "}
                <span className="text-orange-600">Виктория</span>
              </h3>

              <p className="max-w-sm mt-3 text-md leading-relaxed text-black md:mt-8">
                Моя студия — мое детище, я всегда работаю с максимальной
                отдачей, чтобы вы уходили вдохновленные и довольные результатом!
                <br /> Работать с людьми — мое призвание, я всегда получаю
                огромное удовольствие от процесса, искренне радуюсь за
                результаты учеников и готова их всегда поддерживать в
                начинаниях.
                <br />
                <br /> Приходите со своими друзьями, со своим ребенком или всей
                семьей на мастер-класс по лепке или живописи. Это всегда
                увлекательный процесс, который останется счастливым
                воспоминанием в памяти и сохранится в изделии или картине!
                <br /> Вы можете прийти на разовый мастер-класс или приобрести
                абонемент на занятия и посещать их в течение месяца.
              </p>
            </div>

            <div className="relative">
              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 
                mask-t-from-75% mask-t-to-100% mask-b-from-65% mask-b-to-100% mask-l-from-75% mask-l-to-100% mask-r-from-75% mask-r-to-100% mt-10"
                src="./62.jpg"
                alt="Виктория Борщ — основательница творческой студии, художник и мастер-керамист"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
