"use client";

import Image from "next/image";
import Link from "next/link";

export default function PotterWheel() {
  return (
    <>
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
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 20 см или в высоту 15 см</td>
              <td>2.000р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 25 см или в высоту 20 см</td>
              <td>2.500р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-md flex text-center justify-center m-5 mt-8">
        Индивидуальное занятие для одного человека - 3.400р<br></br>
        Для двоих - 2.800р/чел.<br></br>
        Три и больше - 2.500р/чел.
        <br></br>
        Гончарное свидание для двоих - 5.000р.
      </p>

      <div className="py-4 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal  font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс - это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br>
                      <ul>
                        <li className="p-1 list-disc">
                          Сначала мастер покажет, как работать с глиной на
                          круге, расскажет, какая она и как из нее делать разные
                          штуки.
                        </li>
                        <li className="p-1 list-disc">
                          Потом вы сами будете крутить глину на круге, делать
                          стенки ровными, контролировать толщину и форму.
                        </li>
                        <li className="p-1 list-disc">
                          Когда форма готова, вы сгладите все неровности влажной
                          тряпкой и проверите, чтобы края были ровными.
                        </li>
                        <li className="p-1 list-disc">
                          Чтобы снять изделие с круга, нужно использовать
                          проволоку или нить. Потом положите его на подставку,
                          чтобы подсох
                        </li>
                        <li className="p-1 list-disc">Сушка и обжиг</li>
                        <li className="p-1 list-disc">
                          Дальше наносите глазурь и обжигают еще раз. <br></br>
                          
                          <span className="text-black font-bold">В итоге у
                          вас будет красивая, блестящая и водонепроницаемая
                          керамика!</span>
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              {/* <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Как одеться на мастер-класс?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Что будет если я опоздаю?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Что делать если я не смогу прийти?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Как я могу доверить вам своего ребенка на мастер-классе?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
