import Image from "next/image";
import Link from "next/link";

export default function Painting() {
  return (
    <>
      <button className="m-1 fixed z-100">
        <Link
          href={`./#1`}
          className="btn btn-neutral bg-white text-black max-sm:text-md"
        >
          <Image
            src="/arrow1.svg"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "50%" }}
          />
          Назад
        </Link>
      </button>

      <div className="overflow-x-auto md:max-w-2/3 m-auto mt-5  mb-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Название</th>
              <th className="fb">Размер</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                Живопись акриловыми красками на холсте /<br></br>
                Масляными красками на холсте
              </td>
              <td>20*20 см</td>
              <td>
                1.600₽<br></br> 2.000₽
              </td>
              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                {" "}
                Живопись акриловыми красками на холсте /<br></br>
                Масляными красками на холсте
              </td>
              <td>30*40 см</td>
              <td>
                2.200₽<br></br>2.600₽
              </td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                {" "}
                Живопись акриловыми красками на холсте /<br></br>
                Масляными красками на холсте
              </td>
              <td>50*70 см</td>
              <td>
                2.600₽<br></br> 3.200₽
              </td>
              {/* <td>
                {" "}
                <Image
                  src="/2.jpeg"
                  unoptimized
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5 bg-gray-100">
                  <div className=" p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900 bg-gray-100">
                      Как проходит мастер-класс по живописи?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <ul className="list-disc">
                      <li>
                        <span className="text-orange-600 font-bold">
                          Выбор темы и красок.
                        </span>{" "}
                        Сначала мы с вами выбираем, какой сюжет и жанр будем
                        рисовать и какие краски нам для этого понадобятся.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Размер холста.
                        </span>{" "}
                        В зависимости от идеи мы с вами выбираем размер холста,
                        от этого будет зависеть конечная стоимость
                        мастер-класса.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Эскиз и работа над композицией.
                        </span>{" "}
                        Делаем предварительный набросок, намечаем композиционное
                        построение и находим основные цветовые соотношения.
                      </li>

                      <li>
                        <span className="text-orange-600 font-bold">
                          Работа над картиной.
                        </span>{" "}
                        Мы идем от общего к частному, создаем плановость и
                        подбираем оттенки.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
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
                      Выбрать практичную одежду. Она должна быть свободной и не
                      сковывать движений. Не стоит брать слишком дорогие вещи,
                      которые могут испачкаться.
                      <br></br>
                      На занятии мы выдаем фартук и тапочки.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Что будет, если я опоздаю?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Мастер-класс начнется вовремя, однако если кто-то
                      опаздывает не более чем на 30 минут, то мы поможем создать
                      картину в отведенное для занятия время. <br></br>
                      Если вы опаздываете более чем на 30 минут, то мы вас будем
                      ждать на следующем мастер-классе :)
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Что делать, если я не смогу прийти?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Важно заранее предупредить о невозможности присутствовать
                      на запланированном мастер-классе, чем раньше, тем лучше.
                      Так как на каждого участника закупаются материалы и
                      инструменты.
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
