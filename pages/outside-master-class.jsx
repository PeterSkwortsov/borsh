import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Outside() {
  return (
    <>
      <Head>
        <title>Выездные мастер-классы по лепке для детей и взрослых</title>

        <meta
          name="description"
          content="Проведем мастер-класс по лепке глиняных изделий в школе, на дому, учебном центре или на природе. Мастер-класс по лепке плоской тарелочки, миски, пиалы, подсвечника, кружки, чайной пары, вазочки. Живопись маслом и акрилом на холсте."
        />

        <meta
          property="og:title"
          content="Выездные мастер-классы по лепке для детей и взрослых"
        />

        <meta
          property="og:description"
          content="Проводим увлекательные мастер-классы на вашей территории до 20 человек."
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
              <Link href={`./#6`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/outside-master-class`}
                itemProp="item"
                title="Выездной мастер-класс"
              >
                <span itemProp="name">Выездной мастер-класс</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h3 className="text-center m-auto justify-center mt-8 max-w-1xl text-2xl font-extrabold p-2">
        Проведем мастер-класс по лепке глиняных изделий в{" "}
        <span className="text-orange-600">
          {" "}
          школе, на дому, учебном центре или на природе
        </span>
      </h3>
      <p className="flex text-center justify-center p-5 m-auto font-bold">
        Я и моя команда с удовольствием проведет выездной мастер-класс на вашем
        мероприятии!
      </p>
      <p className="flex text-center justify-center p-5 m-auto ">
        Вы можете выбрать формат мастер-класса: ручная лепка из глины с росписью
        специальными красками (изделия забираем после на сушку и двойной обжиг)
        <br></br> или создание новогодней композиции из пихты нобилиса, которая
        будет радовать всю зиму!
      </p>
      <p className="flex text-center justify-center p-5 m-auto font-bold">
        Проводим выездные мастер-классы от 6 до 20 человек.
      </p>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Стоимость выездного мк по ручной лепке</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Тарелочка плоская</td>
              <td>2000₽ / человек</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Кружка и глубокая тарелка</td>
              <td>2400₽ / человек</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Менажница или ваза до 15 см</td>
              <td>2800₽ / человек</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">
                Стоимость выездного мк по новогодней<br></br> композиции из
                пихты нобилиса
              </th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Размер 20х20 см в крафтовом стакане</td>
              <td>1900₽ / человек</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Размер 35х35 см в шляпной коробке</td>
              <td>2600₽ / человек</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Размер 60х40</td>
              <td>3300₽ / человек</td>
            </tr>
            {/* row 3 */}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center  justify-center">
          <div>
            <div className="flex flex-row items-center center m-auto cursor-pointer">
              <div
                className="bg-orange-100 p-5 px-10 w-full flex items-center rounded-4xl text-white
"
              >
                <a href="https://t.me/vika_borsch99">
                  <p className="text-black font-bold text-lg flex text-center center justify-center">
                    👉 Забронировать день и время 👈
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center mt-10 mb-10 w-fit">
        <div className="carousel-item h-full">
          <Image
            src="/179.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/173.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full">
          <Image
            src="/171.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/184.jpg"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full">
          <Image
            src="/170.jpg"
            unoptimized
            width={535}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/172.jpg"
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

          {/* <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                  <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Когда мы сможем забрать изделия из глины? Почему так
                      долго?
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
                      Поэтому свое изделие ребята получат через 3–5 недель, мы
                      привезем их обратно в школу.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div> */}
          <div className="mt-2">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                  <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Мы хотим провести мастер-класс для своих детей в школе.
                      Как происходит подготовка к мероприятию?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Мы приедем заранее за 15-20 минут, нам нужно подготовить
                      класс. Желательно, чтобы в классе была доска с проектором,
                      вначале занятия мы расскажем базовую информацию о глине и
                      покажем изображения, что можно слепить из глины, чтобы
                      дети лучше представляли конечный результат. Если проектора
                      нет, мы раздадим детям заранее распечатанные картинки.
                      <br></br>Мы привозим с собой все необходимые инструменты
                      (ангобы, краски и т. д.).
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
