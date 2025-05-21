import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Group() {
  return (
    <>
      <button className="m-5">
        <Link
          href={`./#group`}
          className="btn btn-neutral bg-white text-black max-sm:text-sm"
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

      <h2 className="flex text-center justify-center text-2xl m-3">
        Абонементы на занятия по рисованию:
      </h2>
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Абонемент</th>
              <th className="fb">Время</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>4 занятия / 8 занятий для детей 6-8 лет</td>
              <td>60 мин</td>
              <td>1.800р / 3.200р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>4 занятия / 8 занятий для детей 8-10 лет</td>
              <td>90 минут</td>
              <td>2.000р / 3.600р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>4 занятия / 8 занятий для детей 10-16 лет</td>
              <td>120 минут</td>
              <td>3.400р /3.800р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="flex text-center justify-center text-2xl mt-8 mb-8">
        Абонементы на гончарные занятия:
      </h2>
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Абонемент</th>
              <th className="fb">Время</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Для детей 6-9 лет</td>
              <td>90 мин</td>
              <td>3.600р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Для детей 9-16 лет </td>
              <td>1 час 45 минут</td>
              <td>4200р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Для взрослых</td>
              <td>120 минут</td>
              <td>5000р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
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
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Как проходит мастер-класс по живописи?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
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
                      Как одеться на мастер-класс?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
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
                    <p className="text-gray-700 text-sm">
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
                    <p className="text-gray-700 text-sm">
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
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
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
