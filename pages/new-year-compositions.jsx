import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const newSnowflakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 10,
        character: ['❄', '•', '✽'][Math.floor(Math.random() * 3)]
      }));
      setSnowflakes(newSnowflakes);
    };

    generateSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute text-white opacity-70 animate-snowfall"
          style={{
            left: `${snowflake.left}vw`,
            top: `-5vh`,
            fontSize: `${snowflake.size}px`,
            animationDuration: `${snowflake.duration}s`,
            animationDelay: `${snowflake.delay}s`,
          }}
        >
          {snowflake.character}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-snowfall {
          animation: snowfall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default function Outside() {
    
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 bg-green-800">
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

          <meta
            property="og:url"
            content="https://borsch-art.ru/clayModeling/"
          />
        </Head>
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="breadcrumbs text-sm ml-2"
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
        <Snowfall />
        <h3 className="text-center m-auto justify-center mt-8 max-w-xl text-2xl font-extrabold p-2">
          <span className="text-orange-600">НОВОГОДНЯЯ КОМПОЗИЦИЯ </span>
          из пихты нобилиса в деревянном боксе или кружке
        </h3>
        <h3 className="flex text-center justify-center m-5 mt-8 text-1xl font-extrabold">
          Приглашаю на мастер-класс по созданию красивых ёлочных композиций
        </h3>

        <p className="flex text-center justify-center p-5 m-auto">
          Bы научитесь сoздавaть cтильныe композиции, кoтоpыe стaнут украшением
          вашего дoмa или пpeкpacным пoдapкoм для близкиx к Нoвому гoду 🎊
        </p>
        <p className="flex text-center justify-center p-5 m-auto">
          Зapяд положитeльныx эмоций и нoвoгоднеe нaстpoение<br></br>
          гapaнтиpуeтся!<br></br> Hобилис выгодно отличается от обычной ёлки:
          его ветки пышные, объёмные и ароматные, а иголочки устойчивы к
          сильному осыпанию. <br></br>Сама композиция при простом уходе простоит
          у вас всю зиму.
        </p>

        <div
          className="overflow-x-auto md:max-w-2/3 m-auto mb-5 mt-5"
          role="sectionhead"
        >
          <table className="table table-zebra">
            {/* head */}

            <tbody>
              {/* row 1 */}
              <tr>
                <th>Композиция в крафтовом стакане</th>
                <td>20*20см</td>
                <td>1600₽ / человек</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Композиция в новогодней кружке</th>
                <td>20*20см</td>
                <td>1900₽ / человек</td>
              </tr>
              <tr>
                <th>Композиция в шляпной коробке</th>
                <td>35*35см</td>
                <td>2200₽ / человек</td>
              </tr>
              <tr>
                <th>Композиция большая</th>
                <td>60*40см</td>
                <td>3000₽ / человек</td>
              </tr>

              {/* row 3 */}
            </tbody>
          </table>
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
                      👉 Забронировать день и время 👈
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center mt-10 mb-10 w-fit">
          <div className="carousel-item h-full ">
            <Image
              src="/176.jpg"
              unoptimized
              width={298}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full ">
            <Image
              src="/177.jpg"
              unoptimized
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full ">
            <Image
              src="/180.jpg"
              unoptimized
              width={300}
              height={100}
              alt="Picture of the author"
            />
          </div>

          <div className="carousel-item h-max">
            <Image
              src="/178.jpg"
              unoptimized
              width={298}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full ">
            <Image
              src="/197.jpg"
              unoptimized
              width={392}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="carousel-item h-full">
            <Image
              src="/179.jpg"
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
        </div>

        <div className="py-4">
          <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                Ответы на <span className="text-orange-600">вопросы</span>
              </h3>
            </div>

            <div className="mt-2">
              <ul className="">
                <li className="text-left mb-10">
                  <div className="flex flex-row items-start mb-5 bg-gray-100 ">
                    <div className="bg-gray-70 p-5 px-10 w-full flex items-center">
                      <h4 className="text-md leading-6 font-medium text-gray-900">
                        Все необходимые материалы, а также чай/кофе и вкусняшки
                        включены в стоимость☺️ 
                      </h4>
                    </div>
                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
