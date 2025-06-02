"use client";

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

      <button className="m-1 fixed z-100">
        <Link
          href={`./#4`}
          className="btn btn-neutral bg-white text-black max-sm:text-md"
        >
          <Image
            src="/arrow1.svg"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "100%" }}
          />
          Назад
        </Link>
      </button>

      <div className="overflow-x-auto md:max-w-2/3 mt-5 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Название</th>
              <th className="fb">Размер изделия</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 20 см или в высоту 15 см</td>
              <td>2.000₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 25 см или в высоту 20 см</td>
              <td>2.500₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-md flex text-center justify-center m-5 mt-8">
        Индивидуальное занятие для одного человека - 3.400₽<br></br>
        Для двоих - 2.800₽/чел.<br></br>
        Три и больше - 2.500₽/чел.
        <br></br>
        Гончарное свидание для двоих - 5.000₽.
      </p>

      <div className="py-4 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          {/* <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal  font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div> */}

          <div className="">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      {/* <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс — это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br> */}
                      <ul>
                        <li className="p-1 list-disc">
                          Сначала мастер покажет, как работать с глиной на
                          круге, расскажет, какая она и как из нее делать разные
                          изделия.
                        </li>
                        <li className="p-1 list-disc">
                          Потом вы сами будете создавать форму будущего изделия
                          на круге, делать стенки ровными, контролировать
                          толщину и форму.
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
                          Расписываем ангобами или подглазурными красками. А
                          после отправляем сушиться на 7 дней и обжигаем.
                        </li>
                        <li className="p-1 list-disc">
                          <span className="text-black font-bold">
                            В итоге у вас будет красивая и водонепроницаемая
                            керамика!
                          </span>
                        </li>
                      </ul>
                    </p>
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
