
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";



export default function ChildrensClass() {




  return (
    <>
      <Head>
        <title>Мастер-класс по лепке для детей в Нижнем Новгороде</title>

        <meta
          name="description"
          content="Дети вместе с родителями знакомятся с глиной, пробуют создавать из нее блюдца, кружки, различные необычные формы, то, что больше нравится. Это счастливый момент, который останется в памяти у ребенка на долгие годы. Творчество в нашей студии расслабляет и приносит удовольствие и радость."
        />

        <meta
          property="og:title"
          content="Детский мастер-класс по лепке из глины"
        />

        <meta
          property="og:description"
          content="Дети вместе с родителями знакомятся с глиной, пробуют создавать из нее блюдца, кружки, различные необычные формы, то, что больше нравится. Это счастливый момент, который останется в памяти у ребенка на долгие годы. Творчество в нашей студии расслабляет и приносит удовольствие и радость."
        />

        <meta property="og:image" content="/63-2.jpg" />

        <meta
          property="og:url"
          content="https://borsch-art.ru/childrens-master-class/"
        />
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
              <Link href={`./#7`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/childrens-master-class/`}
                itemProp="item"
                title="Мастер-класс для детей и родителей"
              >
                <span itemProp="name">Мастер-класс для детей и родителей</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      {/* Мастер-класс для детей и родителей ./#7 */}

      <h3 className="text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        <span className="text-orange-600">ДЕТСКИЙ </span>
        <br></br>мастер-класс по ЛЕПКЕ
      </h3>
      <p className="flex text-center justify-center p-5">
        Лепим что душе угодно! Милые зверушки, волшебные замки, чашечки,
        разноцветные блюдца или забавные монстрики – решать вам!
      </p>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-start">
            <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
              <p className="text-gray-700 text-md">
                <span className="font-bold">Для кого?</span> Дети от 4 лет +
                любимый взрослый (мама, папа, бабушка, дедушка)<br></br>
                <span className="font-bold">Когда? </span>Точное время и день
                согласуется индивидуально.
              </p>
            </div>
            <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
          </div>
        </div>
      </div>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-xl">
        <div className="carousel-item h-full ">
          <Image
            src="/99.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/100.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/94.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/93.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/148.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/92.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/63.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/101.webp"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mt-5 mb-10"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}

          <thead>
            <tr>
              <th></th>
              <th className="fb min-w-xs">Описание</th>
              <th className="fb">Возраст</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Цена за взрослого + ребенок (одно изделие)</td>
              <td>от 4 до 6 лет</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Цена за взрослого + ребенок (два изделия)</td>
              <td>от 4 до 14 лет</td>
              <td>3.200₽</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Цена за взрослого и двоих детей (три изделия)</td>
              <td>до 14 лет</td>
              <td>4.800₽</td>
            </tr>
            <tr>
              <th>4</th>
              <td>
                * Другое количество детей и взрослых уточняйте индивидуально.
              </td>
            </tr>
            <tr className="bg-green-100">
              <th>5</th>
              <td>
                * Действуют купоны на скидку от:{" "}
                <span className="font-bold">
                  Легозы, London Bus, СуперТачки, Рыбалочка.
                </span>
                <br></br>Уточняйте индивидуально
              </td>
              <td></td>
              <td>- 250₽</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 text-md">
                  Ваши творения после сушки и обжига станут теплым напоминанием
                  об этом дне. Заберите их через четыре недели. Время пролетит
                  быстро.
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between mt-5">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 text-md">
                  Никакого опыта не нужно! Научу всему с нуля.
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between mt-5">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 text-md">
                  Все материалы, чай и кофе, обжиг керамики и хорошее настроение
                  включены! 😊
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center justify-center">
          <div>
            <div className="flex flex-row items-center center m-auto">
              <div
                className="bg-orange-100 p-5 px-10 w-full flex items-center rounded-4xl

"
              >
                <a href="https://t.me/vika_borsch99">
                  <p className="text-gray-700 font-bold text-lg flex text-center center justify-center">
                    👉 Записаться 👈
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 p-2 mb-10">
                    <div className=" max-w-sm flex justify-center m-auto" id="1">
                      <Image
                        src="/104.jpg"
                        unoptimized
                        width={100}
                        height={100}
                        alt="Отзывы"
                        style={{ width: "80%" }}
                        className="rounded-lg"
                      />
                    </div>
            
                 
                  </div> */}
    </>
  );
}
