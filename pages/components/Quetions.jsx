import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";


const Questions = () => {

const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/262.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 2,
      image: "/271.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 3,
      image: "/269.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 4,
      image: "/268.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 5,
      image: "/253.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
    },
    {
      id: 6,
      image: "/280.jpg",
      title: "День рождения, корпоратив, тимбилдинг",
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



  // JSON-LD для FAQPage (единственный и правильный способ)
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
      {/* ТОЛЬКО JSON-LD разметка для FAQ - этого достаточно! */}
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

      <div className="max-w-3xl mx-auto mt-20 mb-20" id="quetion">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Часто задаваемые <span className="text-orange-600">вопросы</span>
        </h2>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Что входит в <span className="text-orange-600">стоимость?</span>
          </div>
          <div className="collapse-content text-md">
            Защитный комплект: скатерти, перчатки, фартуки и салфетки;
            профессиональное сопровождение; подробный инструктаж. Создание
            творческой и дружелюбной атмосферы; все необходимые материалы,
            канцелярия или ингредиенты, которые необходимы для создания
            творческого шедевра. Чай и кофе с вкусняшками.
          </div>
        </div>

        {/* Вопрос 2 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Сколько по <span className="text-orange-600">времени</span> проходит
            занятие?
          </div>
          <div className="collapse-content text-md">
            В среднем длительность мастер-класса получается 1,5–2 часа, но есть
            мастер-классы, которые могут занять 2,5–3 часа для взрослых.
          </div>
        </div>

        {/* Вопрос 3 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Нужно ли{" "}
            <span className="text-orange-600">покупать самому материалы?</span>
          </div>
          <div className="collapse-content text-md">
            Нет, все материалы включены в стоимость. Мы предоставляем всё
            необходимое для творчества.
          </div>
        </div>

        {/* Вопрос 4 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Как я могу <span className="text-orange-600">записаться</span> на
            мероприятие?
          </div>
          <div className="collapse-content text-md">
            Записаться можно по телефону 89049017926 через Telegram или
            WhatsApp. Удобный переход в личные сообщения по ссылке внизу и
            вверху сайта.
          </div>
        </div>

        {/* Вопрос 5 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Работаете ли вы с{" "}
            <span className="text-orange-600">юридическими организациями?</span>
          </div>
          <div className="collapse-content text-md">
            Да, мы работаем с юридическими организациями и оказываем услуги как
            в нашей уютной студии, так и делаем выездные мастер-классы.
          </div>
        </div>

        {/* Вопрос 6 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            С какого <span className="text-orange-600">возраста</span> можно
            прийти на ваше занятие?
          </div>
          <div className="collapse-content text-md">
            Мы обучаем взрослых и детей с 4-х лет. Для малышей у нас есть
            специальные детские программы.
          </div>
        </div>

        {/* Вопрос 7 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Если{" "}
            <span className="text-orange-600">ребенок с инвалидностью</span>{" "}
            сможет ли он участвовать?
          </div>
          <div className="collapse-content text-md">
            Да, в нашем здании есть лифт, поэтому наши мастер-классы и занятия
            доступны для маломобильных художников.
          </div>
        </div>

        {/* Вопрос 8 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-orange-600">
            Способы оплаты
          </div>
          <div className="collapse-content text-md">
            Наличные, перевод. По запросу предоставляется чек.
          </div>
        </div>

        {/* Вопрос 9 */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            У меня совсем <span className="text-orange-600">нет опыта,</span>{" "}
            получится ли?
          </div>
          <div className="collapse-content text-md">
            Конечно! Главная цель наших занятий — получение удовольствия от
            процесса, остальное прикладывается! Наши мастера помогают на каждом
            этапе.
          </div>
        </div>
      </div>

      {/* Блок преимуществ */}
      <div className="px-4 md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Почему у нас <span className="text-orange-600">хорошо?</span>
          </h2>

          {/* Преимущества */}
          <div className="grid grid-cols-1 gap-8 mb-4">
            <div
              className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-6
              py-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {/* Можно добавить иконку если нужно */}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                    Фишкой нашей студии является огромное облако
                  </h3>
                  <p className="text-gray-700">
                    В живую оно кажется гораздо больше, в длину 2 метра а в
                    ширину 1 метр! Создано из синтепона, которым наполняют
                    детские игрушки. Оно создает особенную атмосферу и
                    вдохновляет на новые идеи.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
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
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 
          rounded-full text-sm z-10">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;