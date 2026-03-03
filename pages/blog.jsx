import React from "react";
import Link from "next/link";

const BlogTopics = () => {
  const topics = [
    {
      id: 1,
      title: "Почему мастерская называется именно «Вики Борщ»?",
      description: "Как мы создавали студию",
      color: "from-blue-500 to-cyan-500",
      slug: "history-name", // добавляем slug для URL
    },
    {
      id: 2,
      title: "Ошибки, которые мы совершили при установке муфельной печи",
      description: "О факторе везения в бизнесе",
      color: "from-purple-500 to-pink-500",
      slug: "muffle-furnace",
    },
    {
      id: 3,
      title: "Рисование для взрослых и детей",
      description: "Почему стоит попробовать",
      color: "from-green-500 to-emerald-500",
      slug: "painting-classes",
    },
    {
      id: 4,
      title: "Свидание за гончарным кругом",
      description:
        "Необычный формат времяпрепровождения, дарит новые впечатления и эмоции",
      color: "from-orange-500 to-red-500",
      articleCount: 21,
      slug: "pottery-date-for-two",
    },
    // {
    //   id: 5,
    //   title: "Маркетинг и SEO",
    //   description:
    //     "Продвижение сайтов, аналитика и стратегии digital-маркетинга",
    //   color: "from-yellow-500 to-amber-500",
    //   articleCount: 16,
    //   slug: "marketing-seo",
    // },
    // {
    //   id: 6,
    //   title: "Кибербезопасность",
    //   description: "Защита данных, этичный хакинг и безопасность в сети",
    //   color: "from-gray-700 to-gray-900",
    //   articleCount: 12,
    //   slug: "cybersecurity",
    // },
  ];

  return (
    <>
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
                title="Блог о нашей студии"
              >
                <span itemProp="name">
                  Блог о нашей студии
                </span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Grid с карточками */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link
                href={`/blog-pages/${topic.slug}`}
                key={topic.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4"></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {topic.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {topic.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="mr-2">Читать статью</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${topic.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTopics;
