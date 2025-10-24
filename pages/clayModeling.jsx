import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function ClayModeling() {
  return (
    <>
      <Head>
        <title>Мастер-класс по ручной лепке из глины</title>

        <meta
          name="description"
          content="Лепим изделия из глины, расписываем ангобами или подглазурными красками.Есть возможность расписать глазурями после первого обжига."
        />

        <meta
          property="og:title"
          content="Мастер-класс по ручной лепке из глины"
        />

        <meta
          property="og:description"
          content="Записывайтесь на мастер-класс по ручной лепке из глины.Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки"
        />

        <meta property="og:image" content="/3.jpg" />

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
              <Link href={`./#2`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/clayModeling/`}
                itemProp="item"
                title="Ручная лепка из глины"
              >
                <span itemProp="name">Ручная лепка из глины</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h3 className="text-center justify-center m-5 mt-8 text-3xl font-extrabold">
        <span className="text-orange-600">Мастер-класс </span>
        по ручной лепке из глины
      </h3>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Групповой мастер-класс от 3-х человек</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                Мастер-класс по лепке плоской тарелочки, миски, пиалы,
                подсвечника
              </td>
              <td>1600₽ / человек</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                Мастер-класс по лепке кружки, чайной пары, вазочки до 15 см
              </td>
              <td>2000₽ / человек</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Мастер-класс по лепке чайной пары или менажницы</td>
              <td>2500₽ / человек</td>
            </tr>
          </tbody>
        </table>
        <p className="text-md flex text-center justify-center m-5 mt-8">
          Индивидуальный мастер-класс для одного человека - 3300₽
        </p>
        <p className="text-md flex text-center justify-center m-5">
          Индивидуальный мастер-класс для двух человек - 5000₽
        </p>
      </div>
      <div className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/59.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/60.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/61.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/64.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/86.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full">
          <Image
            src="/87.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/144.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/77.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/72.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/78.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/119.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="text-center mb-5 mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Отзывы <span className="text-orange-600">начинающих мастеров</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 p-2 mb-10">
        <div
          className="max-w-sm flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/107.webp"
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
            src="/105.webp"
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
            src="/108.webp"
            unoptimized
            width={100}
            height={50}
            alt="Отзывы"
            style={{ width: "90%" }}
            className="rounded-lg"
          />
        </div>
        <div
          className="max-w-xs flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/137.webp"
            unoptimized
            width={100}
            height={50}
            alt="Отзывы"
            style={{ width: "95%" }}
            className="rounded-lg"
          />
        </div>
        <div
          className="max-w-xs flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/138.webp"
            unoptimized
            width={100}
            height={50}
            alt="Отзывы"
            style={{ width: "100%" }}
            className="rounded-lg"
          />
        </div>
        <div
          className="max-w-xs flex justify-center m-auto"
          aria-label="Мастер-класс по ручной лепке из глины"
        >
          <Image
            src="/145.webp"
            unoptimized
            width={100}
            height={50}
            alt="Отзывы"
            style={{ width: "100%" }}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Для<span className="text-orange-600"> вдохновения</span>
        </h3>
      </div>
      <div className="carousel carousel-center flex m-auto mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/112.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/113.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />

          <div className="carousel-item h-full ">
            <Image
              src="/114.webp"
              unoptimized
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>

          <div className="carousel-item h-full ">
            <Image
              src="/115.webp"
              unoptimized
              width={300}
              height={100}
              alt="Picture of the author"
            />
            <div className="carousel-item h-full ">
              <Image
                src="/133.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/123.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/134.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/124.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/135.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/125.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item h-full ">
              <Image
                src="/136.webp"
                unoptimized
                width={300}
                height={100}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
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
                <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                  <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Почему мы не заберем сегодня изделия? А когда? А почему
                      так долго?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Изделие нельзя сразу обжигать, оно должно высохнуть
                      минимум от 3 до 7 дней.<br></br>
                      <br></br>
                      Первый обжиг происходит в муфельной печи при температуре
                      900-1200 градусов.
                      <br></br>
                      <br></br>
                      Обжиг занимает 8-10 часов, после чего печь медленно
                      остывает на протяжении 10 часов. Затем на изделие
                      наносится глазурь и обжигается снова. Глазуровка также
                      требует времени.<br></br>
                      <br></br>
                      Второй обжиг происходит при температуре 1050-1250 градусов
                      и занимает 8-10 часов.
                      <br></br>
                      <br></br>
                      <span className="font-bold text-orange-600">
                        Керамика требует терпения и не терпит спешки!
                      </span>
                      <br></br>
                      Поэтому свое изделие вы заберете через 3–5 недель, но,
                      уверяем вас, время пролетит быстро :)
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
