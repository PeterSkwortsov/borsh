

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function loveMeeting() {
  return (
    <>
      <Head>
        <title>Гончарное свидание в Нижнем Новгороде</title>

        <meta
          name="description"
          content="Уникальный опыт и общее воспоминание. Вы не просто проведете время вместе – вы создадите что-то своими руками! Пусть это будет милая чашка, тарелочка или загадочный абстрактный сосуд – это будет ВАШ шедевр."
        />

        <meta
          property="og:title"
          content="Гончарное свидание в Нижнем Новгороде"
        />

        <meta
          property="og:description"
          content="Искра, смех и нежность. Работа с глиной раскрепощает, сближает и дарит море позитивных эмоций. Идеальный способ узнать друг друга с новой стороны!"
        />

        <meta property="og:image" content="/97.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/loveMeeting/" />
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
              <Link href={`./#5`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/loveMeeting/`}
                itemProp="item"
                title="Гончарное свидание"
              >
                <span itemProp="name">Гончарное свидание</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h2 className="text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        <span className="text-orange-600">Гончарное свидание</span> для
        влюбленных <span className="text-orange-600">в Нижнем Новгороде</span>
      </h2>

      <h3 className="flex text-center justify-center m-5 mt-8 text-1xl font-extrabold">
        Проведите свидание, которое точно запомнится!
      </h3>

      <p className="flex text-center justify-center p-2">
        Медитативный шум круга, уютная атмосфера студии 🍃 <br></br>
        Погружение в процесс, где время летит незаметно, а все тревоги остаются
        за дверью.
      </p>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-lg">
        <div className="carousel-item h-full ">
          <Image
            src="/81.webp"
            unoptimized
            width={298}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/95.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/82.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/98.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/83.webp"
            unoptimized
            width={301}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/96.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/84.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/97.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="py-4 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <ul>
            <li className="text-left mb-10">
              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                  <ul className="text-gray-700 text-md">
                    <span className="text-orange-600 font-bold">
                      И так, что вас ждет?
                    </span>
                    <li className="p-1 list-disc">
                      2 часа погружения в мир керамики
                    </li>
                    <li className="p-1 list-disc">
                      Индивидуальное внимание мастера: все покажу, научу и
                      помогу (даже если вы никогда не касались глины)
                    </li>
                    <li className="p-1 list-disc">
                      Работа за гончарным кругом: каждый создаст свое изделие
                      или будет помогать партнеру – как договоритесь
                    </li>
                    <li className="p-1 list-disc">
                      Все материалы включены: глина, инструменты, фартуки, обжиг
                      керамики
                    </li>
                    <li className="p-1 list-disc">
                      Ароматный чай и кофе для вас на протяжении всего свидания
                    </li>
                    <strong className="flex text-center justify-center font-bold text-xl mt-3">
                      Цена 5000₽ за двоих 💞
                    </strong>
                  </ul>
                </div>

                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                {/* <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс — это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br> */}
                <p className="text-gray-700 text-md">
                  Вы не просто проведете время вместе – вы создадите что-то
                  своими руками! Пусть это будет милая чашка, тарелочка или
                  загадочный абстрактный сосуд – это будет ВАШ шедевр!
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 text-md">
                  Подарите не просто вечер, а волшебные эмоции и материальное
                  воспоминание о вашей любви! ❤️
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center  justify-center">
          <div>
            <div className="flex flex-row items-center center m-auto cursor-pointer">
              <div
                className="bg-orange-100 p-5 px-10 w-full flex items-center rounded-4xl text-white
"
              >
                <a href="https://t.me/vika_borsch99">
                  <p className="text-black font-bold text-lg flex text-center center justify-center">
                    👉 Мы придем! 👈
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5 mt-5">
        <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">счастливых пар</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 p-2 mb-10">
        <div className=" max-w-sm flex justify-center m-auto" id="1">
          <Image
            src="/106.jpg"
            unoptimized
            width={100}
            height={100}
            alt="Отзывы"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>

        <div
          className="max-w-sm flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/110.jpg"
            unoptimized
            width={100}
            height={100}
            alt="Отзывы"
            style={{ width: "80%" }}
            className="rounded-lg"
          />
        </div>
        <div
          className="max-w-xs flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/111.jpg"
            unoptimized
            width={100}
            height={50}
            alt="Отзывы"
            style={{ width: "90%", height: "60%" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
