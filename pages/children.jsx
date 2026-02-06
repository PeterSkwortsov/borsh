


import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Children() {
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
          property="og:title"
          content="Рисование и лепка из глины для детей от 4 лет | Творческая студия Вики Борщ в Нижнем Новгороде"
        />

        <meta
          property="og:description"
          content="Ищем полезный и увлекательный досуг для ребенка? Наши занятия по рисованию и лепке из глины для детей от 4 лет — это развитие моторики, фантазии и радость творчества в атмосфере вдохновения. Ждем вас!"
        />

        <meta property="og:image" content="/6.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/children/" />
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
                href={`https://borsch-art.ru/children/`}
                itemProp="item"
                title="Занятия по рисованию и лепке для детей"
              >
                <span itemProp="name">
                  Занятия по рисованию и лепке для детей
                </span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h1 className="text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        <span className="text-orange-600">
          Развиваем моторику и креативное мышление
        </span>{" "}
        <br></br>
        занятия для детей в Нижнем Новгороде
      </h1>

      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mt-10 mb-1"
        role="sectionhead"
      >
        <h3
          className="text-black text-lg font-extrabold p-3 m-auto text-center mb-4"
          itemProp="name"
        >
          Групповые занятия для детей
          <span className="text-orange-600"> по средам</span>
        </h3>
        <h6 className="text-md flex text-center justify-center m-5 font-bold">
          Расписание групповых занятий по рисунку и живописи:
        </h6>
        <div className="block md:hidden">
          <Image
            src="/left.png"
            alt="Мобильная картинка"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="fb w-1/6">Возраст</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">
                Стоимость 4-х занятий (1 раз в неделю){" "}
              </th>
            </tr>
          </thead>
          {/* row 1 */}
          <tbody bgcolor="Lavender">
            <tr>
              <td>7-10 лет</td>
              <td>14.15-15.30</td>
              <td>2.400₽ (600р занятие)</td>
            </tr>

            <tr>
              <td>11-16 лет</td>
              <td>15:30-17.00</td>
              <td>2.800₽ (700р занятие)</td>
            </tr>
          </tbody>
        </table>

        <h6 className="text-md flex text-center justify-center m-5 mt-8 font-bold">
          Расписание групповых занятий для детей по лепке из глины:
        </h6>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb w-1/6">Возраст</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">
                Стоимость 4-х занятий (1 раз в неделю)
              </th>
              {/* min-w-sm */}
            </tr>
          </thead>
          <tbody bgcolor="PapayaWhip	">
            <tr>
              <td>7-11 лет</td>
              <td>17.00-18.30</td>
              <td>4.000₽ (1000р занятие)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-md flex text-center justify-center m-5">
          Абонемент для более старших детей и взрослых по гончарному мастерству,
          4 занятия в месяц - 5.500₽, в рамках абонемента можно посещать любые
          двухчасовые групповые занятия по расписанию.
        </p>
      </div>
      <div className="px-4 md:py-20 lg:py-24 mb-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-8 ">
            <div className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group">
              {/* Декоративный элемент */}

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                    РОСТ ОТ ЗАНЯТИЯ К ЗАНЯТИЮ
                  </h3>
                  <p className="text-gray-700">
                    Не разовые впечатления, а путь. Ваш ребенок освоит материалы
                    и техники шаг за шагом и создаст свою серию работ, которая
                    покажет его творческое развитие.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center  justify-center">
        <div>
          <div
            className="bg-orange-100 shadow-xl shadow-orange-300 hover:bg-orange-200  p-5 px-10 w-full flex items-center rounded-4xl text-white
       "
          >
            <a href="https://t.me/vika_borsch99">
              <p className="text-black font-bold text-lg   flex text-center center justify-center">
                Забронировать дату
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 bg-white mt-10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div>

          <div className="mt-10">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      В какие дни и в какое время проводятся занятия?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Актуальную информацию всегда уточняйте по указанным
                      контактам на сайте
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Предоставляются ли материалы по рисованию на занятия (по
                      абонементу)?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Материалы выдаются только на первое занятие, после вы
                      приобретаете необходимые краски, инструменты и бумагу
                      самостоятельно. Мы всегда готовы подсказать бюджетные и
                      качественные варианты.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Нужно ли брать что-то с собой на гончарное занятие (по
                      абонементу)?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      На гончарное занятие от вас ничего не требуется брать. Все
                      материалы мы предоставим.{" "}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-lg">
          <div className="carousel-item h-full ">
            <Image
              src="/185.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full ">
            <Image
              src="/159.jpg"
              unoptimized
              width={338}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full ">
            <Image
              src="/63.webp"
              unoptimized
              width={338}
              height={100}
              alt="Picture of the author"
            />
          </div>
          {/* <div className="carousel-item h-full ">
                   <Image
                     src="/157.jpg"
                     unoptimized
                     width={338}
                     height={100}
                     alt="Picture of the author"
                   />
                 </div>
                 <div className="carousel-item h-full ">
                   <Image
                     src="/162.jpg"
                     unoptimized
                     width={338}
                     height={100}
                     alt="Picture of the author"
                   />
                 </div> */}
        </div>
      </div>
    </>
  );
}
