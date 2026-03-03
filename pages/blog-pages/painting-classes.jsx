import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

const PaintingClass = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Пример данных для статьи
  const postData = {
    title:
      "Мастер-класс по рисованию в Нижнем Новгороде. Рисование для взрослых и детей",
    date: "8 марта 2026",
    readTime: "2 мин",
    // coverImage: "/245.jpg",
    // coverImage2: "/246.jpg",

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/235.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 2,
      image: "/236.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 3,
      image: "/237.jpg",
      title: "Этапы ремонта помещения студии",
    },

    {
      id: 9,
      image: "/238.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 10,
      image: "/239.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 11,
      image: "/240.jpg",
      title: "Этапы ремонта помещения студии",
    },

    {
      id: 11,
      image: "/243.jpg",
      title: "Этапы ремонта помещения студии",
    },
    {
      id: 11,
      image: "/244.jpg",
      title: "Этапы ремонта помещения студии",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Автопрокрутка (опционально)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

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
          <>
            <p
              key={index}
              className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg"
            >
              {item.text}
            </p>
          </>
        );
    //   case "img":
    //     return (
    //       <>
    //         <div className="mb-8 rounded-xl overflow-hidden">
    //           <img
    //             src={postData.coverImage2}
    //             alt={postData.title}
    //             className="md:w-96 m-auto object-contain rounded-2xl"
    //           />
    //         </div>
    //       </>
    //     );
    //   default:
        return null;
    }
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Head>
        <title>Рисование для взрослых и детей</title>

        <meta
          name="description"
          content="Для тех, кто мечтает о классической живописи и глубине цвета, мы проводим мастер-классы маслом. Это более медитативный процесс, требующий внимания к деталям."
        />

        <meta
          property="og:title"
          content="Уроки рисования для взрослых и детей от 4 лет"
        />

        <meta
          property="og:description"
          content="Творческое развитие — важная часть формирования личности. В нашей студии проходят не просто занятия, а настоящие увлекательные уроки рисования для детей, где каждый ребенок чувствует себя художником."
        />

        <meta property="og:image" content="/174.jpg" />

        <meta
          property="og:url"
          content="https://borsch-art.ru/blog-pages/history-name/"
        />
      </Head>
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumbs text-sm m-2"
      >
        <ul>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button className="indicator-item badge bg-orange-600 text-white border-none">
              <Link href={`/`} itemProp="item" title="Главная">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="0"></meta>
            </button>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button>
              <Link
                href={`https://borsch-art.ru/blog-pages/`}
                itemProp="item"
                title="Статьи"
              >
                <span itemProp="name">Статьи</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button>
              <Link
                href={`https://borsch-art.ru/blog-pages/painting-classes/`}
                itemProp="item"
                title="Рисование для взрослых и детей"
              >
                <span itemProp="name">Рисование для взрослых и детей</span>
              </Link>
              <meta itemProp="position" content="2"></meta>
            </button>
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

        {/* Обложка */}
        {/* <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={postData.coverImage}
            alt={postData.title}
            className="md:w-96 m-auto object-contain rounded-2xl"
          />
        </div> */}

        {/* Контент статьи */}
        <article className="prose prose-lg max-w-none">
          {postData.content.map((item, index) => renderContent(item, index))}
        </article>

        {/* Галерея изображений */}
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-center  justify-center">
          <div>
            <div className="flex flex-row items-center center m-auto cursor-pointer">
              <div
                className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200  p-5 px-10 w-full flex items-center rounded-4xl text-white
"
              >
                <Link
                  href="/children"
                  className="text-black font-bold text-lg flex text-center center justify-center"
                >
                  Занятия для детей
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center mt-8 justify-center">
          <div>
            <div className="flex flex-row items-center center m-auto cursor-pointer">
              <div
                className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200  p-5 px-10 w-full flex items-center rounded-4xl text-white
"
              >
                <Link
                  href="/painting"
                  className="text-black font-bold text-lg flex text-center center justify-center"
                >
                  Занятия для взрослых
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaintingClass;
