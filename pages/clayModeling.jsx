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

      <button className="m-1 fixed z-100">
        <Link
          href={`./#2`}
          className="btn btn-neutral bg-white text-black max-sm:text-md"
        >
          <Image
            src="/arrow1.svg"
            unoptimized
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "100%" }}
          />
          Назад
        </Link>
      </button>

      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Описание</th>
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
              <td>1.600₽</td>
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
              <th>1</th>
              <td>
                Мастер-класс по лепке кружки, чайной пары, вазочки до 15 см
              </td>
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
            {/* row 3 */}
            <tr>
              <th>2</th>
              <td>
                Индивидуальные занятия:<br></br> Один - 3.300₽<br></br>
                Двое - 2.700₽/чел.
                <br></br>
                Три и больше - 2.400₽/чел.
              </td>
              <td></td>
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
          </tbody>
        </table>
        {/* <p className="text-xs font-bold flex text-center justify-center m-5 mt-8">
            Расписание примерное и может измениться! Актуальную информацию
            уточняйте у меня*
          </p> */}
      </div>

      <div className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full ">
          <Image
            src="/59.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/60.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-max">
          <Image
            src="/61.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/64.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/54.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full">
          <Image
            src="/56.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/49.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
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
