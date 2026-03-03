import React from "react";
import Head from "next/head";

const Questions = () => {
  // JSON-LD для FAQPage (все вопросы и ответы)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что входит в стоимость?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Защитный комплект: скатерти, перчатки, фартуки и салфетки; профессиональное сопровождение; подробный инструктаж. Создание творческой и дружелюбной атмосферы; все необходимые материалы, канцелярия или ингредиенты, которые необходимы для создания творческого шедевра. Чай и кофе с вкусняшками.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько по времени проходит занятие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В среднем длительность мастер-класса получается 1,5–2 часа, но есть мастер-классы, которые могут занять 2,5–3 часа для взрослых.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли покупать самому материалы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, все материалы включены в стоимость. Мы предоставляем всё необходимое для творчества.",
        },
      },
      {
        "@type": "Question",
        name: "Как я могу записаться на мероприятие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Записаться можно по телефону 89049017926 через Telegram или WhatsApp. Удобный переход в личные сообщения по ссылке внизу и вверху сайта.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы с юридическими организациями?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы работаем с юридическими организациями и оказываем услуги как в нашей уютной студии, так и делаем выездные мастер-классы.",
        },
      },
      {
        "@type": "Question",
        name: "С какого возраста можно прийти на ваше занятие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы обучаем взрослых и детей с 4-х лет. Для малышей у нас есть специальные детские программы.",
        },
      },
      {
        "@type": "Question",
        name: "Если ребенок с инвалидностью, сможет ли он участвовать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, в нашем здании есть лифт, поэтому наши мастер-классы и занятия доступны для маломобильных художников.",
        },
      },
      {
        "@type": "Question",
        name: "Какие способы оплаты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наличные, перевод. По запросу предоставляется чек.",
        },
      },
      {
        "@type": "Question",
        name: "У меня совсем нет опыта, получится ли?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Конечно! Главная цель наших занятий — получение удовольствия от процесса, остальное прикладывается! Наши мастера помогают на каждом этапе.",
        },
      },
    ],
  };

  // JSON-LD для преимуществ (ItemList)
  const benefitsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Преимущества творческой студии Вика Борщ",
    description:
      "Почему выбирают нашу студию: атмосфера, профессионализм, индивидуальный подход",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Атмосфера",
        description:
          "Для нас это осознанная работа: от света и музыки до подбора материалов. Мы создаём среду, где вы чувствуете себя на своей волне и можете творить свободно.",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD разметка для FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* JSON-LD разметка для преимуществ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(benefitsJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Скрытые микроразметки для старых поисковиков (опционально) */}
      <div itemScope itemType="https://schema.org/FAQPage" className="hidden">
        {faqJsonLd.mainEntity.map((item, index) => (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <meta itemProp="name" content={item.name} />
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <meta itemProp="text" content={item.acceptedAnswer.text} />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-20 mb-20" id="quetion">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Часто задаваемые <span className="text-orange-600">вопросы</span>
        </h2>

        {/* Вопрос 1 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold" itemProp="name">
            Что входит в <span className="text-orange-600">стоимость?</span>
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Защитный комплект: скатерти, перчатки, фартуки и салфетки;
              профессиональное сопровождение; подробный инструктаж. Создание
              творческой и дружелюбной атмосферы; все необходимые материалы,
              канцелярия или ингредиенты, которые необходимы для создания
              творческого шедевра. Чай и кофе с вкусняшками.
            </div>
          </div>
        </div>

        {/* Вопрос 2 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            Сколько по <span className="text-orange-600">времени</span> проходит
            занятие?
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              В среднем длительность мастер-класса получается 1,5–2 часа, но
              есть мастер-классы, которые могут занять 2,5–3 часа для взрослых.
            </div>
          </div>
        </div>

        {/* Вопрос 3 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            Нужно ли{" "}
            <span className="text-orange-600">покупать самому материалы?</span>
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Нет, все материалы включены в стоимость. Мы предоставляем всё
              необходимое для творчества.
            </div>
          </div>
        </div>

        {/* Вопрос 4 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            Как я могу <span className="text-orange-600">записаться</span> на
            мероприятие?
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Записаться можно по телефону 89049017926 через Telegram или
              WhatsApp. Удобный переход в личные сообщения по ссылке внизу и
              вверху сайта.
            </div>
          </div>
        </div>

        {/* Вопрос 5 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            Работаете ли вы с{" "}
            <span className="text-orange-600">юридическими организациями?</span>
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Да, мы работаем с юридическими организациями и оказываем услуги
              как в нашей уютной студии, так и делаем выездные мастер-классы.
            </div>
          </div>
        </div>

        {/* Вопрос 6 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            С какого <span className="text-orange-600">возраста</span> можно
            прийти на ваше занятие?
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Мы обучаем взрослых и детей с 4-х лет. Для малышей у нас есть
              специальные детские программы.
            </div>
          </div>
        </div>

        {/* Вопрос 7 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            Если{" "}
            <span className="text-orange-600">ребенок с инвалидностью</span>{" "}
            сможет ли он участвовать?
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Да, в нашем здании есть лифт, поэтому наши мастер-классы и занятия
              доступны для маломобильных художников.
            </div>
          </div>
        </div>

        {/* Вопрос 8 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title font-semibold text-orange-600"
            itemProp="name"
          >
            Способы оплаты
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Наличные, перевод. По запросу предоставляется чек.
            </div>
          </div>
        </div>

        {/* Вопрос 9 */}
        <div
          className="collapse collapse-plus bg-base-100 border border-base-300"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold" itemProp="name">
            У меня совсем <span className="text-orange-600">нет опыта,</span>{" "}
            получится ли?
          </div>
          <div
            className="collapse-content text-md"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              Конечно! Главная цель наших занятий — получение удовольствия от
              процесса, остальное прикладывается! Наши мастера помогают на
              каждом этапе.
            </div>
          </div>
        </div>
      </div>

      {/* Блок преимуществ */}
      <div className="px-4 md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Почему у нас <span className="text-orange-600">хорошо?</span>
          </h2>

          <div
            className="grid grid-cols-1 gap-8 mb-4"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <div
              className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-6
              py-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content="1" />
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                 
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors"
                    itemProp="name"
                  >
                    Атмосфера
                  </h3>
                  <p className="text-gray-700" itemProp="description">
                    Для нас это осознанная работа: от света и музыки до подбора
                    материалов. Мы создаём среду, где вы чувствуете себя на
                    своей волне и можете творить свободно. Убедитесь сами,
                    прочтите отзывы.
                  </p>
                </div>
              </div>
            </div>

            {/* Здесь можно добавить еще преимущества */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
