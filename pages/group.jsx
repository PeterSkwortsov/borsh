import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Group() {
  return (
    <>
      <Head>
        <title>Групповые занятия для детей и взрослых</title>

        <meta
          name="description"
          content="Для тех, кто хочет общения с единомышленниками в веселой компании с близкими людьми по духу, мы организовали групповые занятия."
        />

        <meta
          property="og:title"
          content="Абонементы на занятия по гончарному мастерству и рисованию."
        />

        <meta
          property="og:description"
          content="На выбор программы из 4 или 8 занятий, от 1 до 2 часов в нашей уютной студии."
        />

        <meta property="og:image" content="/4.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/clayModeling/" />
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
              <Link href={`./#3`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/group/`}
                itemProp="item"
                title="Абонементы"
              >
                <span itemProp="name">Абонементы</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h2
        className="flex text-center justify-center text-2xl font-extrabold m-3 mt-7 text-orange-600"
        role="sectionhead"
      >
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
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>4 занятия / 8 занятий для детей 6-8 лет</td>
              <td>60 мин</td>
              <td>1.800₽ / 3.200₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>4 занятия / 8 занятий для детей 8-10 лет</td>
              <td>90 минут</td>
              <td>2.000₽ / 3.600₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
            <tr>
              <th>3</th>
              <td>4 занятия / 8 занятий для детей 10-16 лет</td>
              <td>120 минут</td>
              <td>3.400₽ / 4.200₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
            <tr>
              <th>4</th>
              <td>4 занятия для взрослых, 18+</td>
              <td>120 минут</td>
              <td>4400₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="flex text-center justify-center text-2xl mt-8 mb-8 font-extrabold text-orange-600">
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
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Для детей 6-9 лет</td>
              <td>90 мин</td>
              <td>3.600₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Для детей 9-16 лет </td>
              <td>1 час 45 минут</td>
              <td>4200₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
            <tr>
              <th>3</th>
              <td>Для взрослых, 18+</td>
              <td>120 минут</td>
              <td>5000₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="py-4 bg-white mt-5">
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
      </div>
    </>
  );
}
