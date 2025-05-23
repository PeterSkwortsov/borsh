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
              <th className="fb">Подрамник</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                Живопись акриловыми красками на холсте<br></br>
                Масляными красками на холсте
              </td>
              <td>20*20 см</td>
              <td>
                1.600₽<br></br> 2.000₽
              </td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                {" "}
                Живопись акриловыми красками на холсте<br></br>
                Масляными красками на холсте
              </td>
              <td>30*40 см</td>
              <td>
                2.200₽<br></br>2.600₽
              </td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                {" "}
                Живопись акриловыми красками на холсте<br></br>
                Масляными красками на холсте
              </td>
              <td>50*70 см</td>
              <td>
                2.600₽<br></br> 3.200₽
              </td>
              <td>
                {" "}
                <Image
                  src="/2.jpeg"
                  unoptimized
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td>
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
                        Сначала мы с тобой решаем, какими красками будем
                        рисовать и какой сюжет выберем.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Размер холста.
                        </span>{" "}
                        Я предлагаю тебе несколько вариантов размера холста, от
                        этого зависит цена мастер-класса.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Подготовка материалов.
                        </span>{" "}
                        Я показываю палитру, выдавливаю краски, наливаю воду или
                        разбавитель, готовлю кисточки и тряпку для кистей.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Композиция.
                        </span>{" "}
                        Ты берёшь краску, разводишь её и намечаешь композицию.
                        Сложные предметы разбиваешь на простые формы и
                        компонуешь их на холсте.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Закрашивание холста.
                        </span>{" "}
                        Ты раскрываешь холст и закрашиваешь белые места грунта.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Работа над деталями.
                        </span>{" "}
                        Ты работаешь от общего к частному, создаёшь плановость и
                        оттенки. Я подсказываю по ходу работы.
                      </li>
                      <li>
                        <span className="text-orange-600 font-bold">
                          Финальная проработка.
                        </span>{" "}
                        В конце я поправляю работу и прорабатываю детали, но не
                        всегда — всё зависит от ситуации.
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
                      которые могут испачкаться. Надеть закрытую обувь. Это
                      поможет защитить ноги от случайных брызг. Избегать одежды
                      с длинными рукавами, которые могут мешать.
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
                      Если все участники мастер-класса собрались, то, как
                      говорится, семеро одного не ждут. :)
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
                      Важно заранее предупредить о невозможности присутствовать
                      на запланированном мастер-классе, чем раньше, тем лучше.
                      Минимально за день. Так как на кадого участника закупаются
                      материалы и инструменты.
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
