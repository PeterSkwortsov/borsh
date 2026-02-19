
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function PotterWheel() {
  return (
    <>
      <Head>
        <title>Мастер-класс на гончарном круге</title>

        <meta
          name="description"
          content="Почувствуйте себя настоящим мастером гончарного искусства на нашем мастер-классе! Изделия после изготовления расписываем ангобами или подглазурными красками. Есть возможность расписать глазурями после первого обжига"
        />

        <meta property="og:title" content="Мастер-класс на гончарном круге" />

        <meta
          property="og:description"
          content="Стань настоящим мастером гончарного искусства на нашем мастер-классе!"
        />

        <meta property="og:image" content="/3.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/potterWheel/" />
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
              <Link href={`./#4`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/potterWheel/`}
                itemProp="item"
                title="Мастер-класс на гончарном круге"
              >
                <span itemProp="name">Мастер-класс на гончарном круге</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h1 className="text-center justify-center text-orange-600 m-5 mt-8 text-2xl font-extrabold">
        Мастер-класс на гончарном круге в Нижнем Новгороде
      </h1>

      <div
        className="overflow-x-auto md:max-w-2/3 mt-5 m-auto"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Групповые занятия от 3-х человек</th>
              <th className="fb max-w-xl">Размер изделия</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Лепка из глины на гончарном круге</td>
              <td className="min-w-[300px] md:min-w-[400px]">
                Можно создать любое изделие не больше 12 см в диаметре и в
                высоте.
              </td>
              <td>2.200₽</td>
            </tr>
          </tbody>
        </table>
        <div className="block mt-3 md:hidden">
          <Image
            src="/left.png"
            alt="Мобильная картинка"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
      </div>

      <p className="text-md flex text-center justify-center m-5 mt-8">
        Индивидуальные занятия: для одного человека - 3.500₽<br></br>
        Для двоих - 6000₽<br></br>
      </p>
      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-lg">
        <div className="carousel-item h-full ">
          <Image
            src="/154.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Ученик за гончарным кругом"
          />
        </div>
      </div>

      {/* <div className="px-4 md:py-20 lg:py-24 mb-7">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-8 ">
            <div
              className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-1 
            py-3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group"
            >

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                    Что вас ждет на мастер-классе?
                  </h3>
                  <p>
                    Под руководством опытного мастера вы пройдете путь от
                    бесформенного куска глины до готового керамического изделия.
                    <br></br>
                    <br></br>
                    На занятии вы:
                  </p>

                  <ul>
                    <li className="list-disc pl-5 space-y-2">
                      Познакомитесь со свойствами натуральной глины и
                      подготовите ее к работе;
                    </li>

                    <li className="list-disc pl-5 space-y-2">
                      Освоите базовые приемы центровки и работы за гончарным
                      кругом;
                    </li>
                    <li className="list-disc pl-5 space-y-2">
                      Создадите собственное изделие;
                    </li>
                    <li className="list-disc pl-5 space-y-2">
                      Узнаете о технологических этапах — от сушки до
                      глазурования и обжига.
                    </li>
                  </ul>

                  <p className="mt-1">
                    Занятие подходит даже тем, кто никогда не держал глину в
                    руках. Мастер всегда рядом, чтобы помочь, подсказать и
                    направить.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
      {/* <div className="text-center mb-5 mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 p-2 mb-10">
        <div
          className="max-w-sm flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/150.png"
            unoptimized
            width={100}
            height={100}
            alt="Отзывы"
            style={{ width: "100%" }}
            className="rounded-lg"
          />
        </div>
      </div> */}

      <div className="py-4 mt-10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <ul>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <ul className="text-gray-700 text-md">
                      <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс - это весело и интересно!
                        <br></br> Вот что вас ждет:
                      </span>
                      <li className="p-1 list-disc">
                        Сначала мастер покажет, как работать с глиной на круге,
                        расскажет, какая она и как из нее делать разные изделия.
                      </li>
                      <li className="p-1 list-disc">
                        Потом вы сами будете создавать форму будущего изделия на
                        круге, делать стенки ровными, контролировать толщину и
                        форму.
                      </li>
                      <li className="p-1 list-disc">
                        Когда форма готова, вы сгладите все неровности влажной
                        губкой и проверите, чтобы края были ровными и без
                        трещин.
                      </li>
                      <li className="p-1 list-disc">
                        Подсушиваем феном, чтобы было проще снять его с круга,
                        нужно использовать специальный инструмент — струну.
                      </li>
                      <li className="p-1 list-disc">
                        Расписываем ангобами или подглазурными красками. А после
                        отправляем сушиться на 7 дней и обжигаем.
                      </li>

                      <strong>
                        В итоге у вас будет красивая и водонепроницаемая
                        керамика!
                      </strong>
                    </ul>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
