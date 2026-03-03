import React from "react";
import Link from "next/link";
import Head from "next/head";

const BlogTopics = () => {
  const topics = [
    {
      id: 1,
      title: "Почему мастерская называется именно «Вики Борщ»?",
      description: "Как мы создавали студию",
      color: "from-blue-500 to-cyan-500",
      slug: "history-name",
      datePublished: "2025-01-15",
    },
    {
      id: 2,
      title: "Ошибки, которые мы совершили при установке муфельной печи",
      description: "О факторе везения в бизнесе",
      color: "from-purple-500 to-pink-500",
      slug: "muffle-furnace",
      datePublished: "2025-02-10",
    },
    {
      id: 3,
      title: "Рисование для взрослых и детей",
      description: "Почему стоит попробовать",
      color: "from-green-500 to-emerald-500",
      slug: "painting-classes",
      datePublished: "2025-03-05",
    },
    {
      id: 4,
      title: "Свидание за гончарным кругом",
      description:
        "Необычный формат времяпрепровождения, дарит новые впечатления и эмоции",
      color: "from-orange-500 to-red-500",
      slug: "pottery-date-for-two",
      datePublished: "2025-03-20",
    },
  ];

  // JSON-LD для Blog (основной блог)
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Блог творческой студии Вика Борщ",
    description:
      "Интересные статьи о творчестве, мастер-классах, керамике и живописи. Истории из жизни студии, полезные советы и вдохновение.",
    url: "https://borsch-art.ru/blog-pages/",
    publisher: {
      "@type": "Organization",
      name: "Творческая студия Вика Борщ",
      logo: {
        "@type": "ImageObject",
        url: "https://borsch-art.ru/62.webp",
      },
    },
    author: {
      "@type": "Person",
      name: "Виктория Борщ",
    },
  };

  // JSON-LD для ItemList (список статей)
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Статьи блога творческой студии",
    description: "Список всех статей в блоге студии Вика Борщ",
    url: "https://borsch-art.ru/blog-pages/",
    numberOfItems: topics.length,
    itemListElement: topics.map((topic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://borsch-art.ru/blog-pages/${topic.slug}`,
      name: topic.title,
    })),
  };

  // JSON-LD для BreadcrumbList (хлебные крошки)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://borsch-art.ru/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Блог о нашей студии",
        item: "https://borsch-art.ru/blog-pages/",
      },
    ],
  };

  // JSON-LD для каждой статьи (BlogPosting)
  const blogPostingsJsonLd = topics.map((topic) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: topic.title,
    description: topic.description,
    url: `https://borsch-art.ru/blog-pages/${topic.slug}`,
    datePublished: topic.datePublished,
    dateModified: topic.datePublished,
    author: {
      "@type": "Person",
      name: "Виктория Борщ",
    },
    publisher: {
      "@type": "Organization",
      name: "Творческая студия Вика Борщ",
      logo: {
        "@type": "ImageObject",
        url: "https://borsch-art.ru/62.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://borsch-art.ru/blog-pages/${topic.slug}`,
    },
  }));

  return (
    <>
      <Head>
        <title>
          Блог творческой студии Вика Борщ | Статьи о рисовании и керамике
        </title>
        <meta
          name="description"
          content="Интересные статьи о творчестве, мастер-классах, керамике и живописи. Истории из жизни студии, полезные советы и вдохновение для творческих людей."
        />
        <meta property="og:title" content="Блог творческой студии Вика Борщ" />
        <meta
          property="og:description"
          content="Статьи о рисовании, лепке из глины, гончарном деле и творчестве в Нижнем Новгороде"
        />
        <meta property="og:url" content="https://borsch-art.ru/blog-pages/" />
        <meta property="og:type" content="blog" />
      </Head>

      {/* JSON-LD разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
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
          __html: JSON.stringify(blogPostingsJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Хлебные крошки (упрощенная версия) */}
      <ol className="breadcrumbs text-sm m-2">
        <ul className="flex">
          <li className="indicator-item badge bg-orange-600 text-white border-none">
            <Link href="/" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li className="badge text-gray-700 border-none">
            <span>Блог о нашей студии</span>
          </li>
        </ul>
      </ol>

      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Блог <span className="text-orange-600">творческой студии</span>
          </h1>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Истории, советы и вдохновение для тех, кто любит творить
          </p>

          {/* Grid с карточками */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link
                href={`/blog-pages/${topic.slug}`}
                key={topic.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="headline" content={topic.title} />
                <meta itemProp="description" content={topic.description} />
                <meta itemProp="datePublished" content={topic.datePublished} />
                <meta itemProp="author" content="Виктория Борщ" />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    {topic.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {topic.description}
                  </p>

                  <div className="flex items-center text-orange-600 font-medium">
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
