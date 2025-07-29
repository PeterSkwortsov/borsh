import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
const oven = () => {
  return (
    <>
      <Head>
        <title>Аренда муфельной печи для изделий из глины</title>

        <meta
          name="description"
          content="Муфельная печь для обжига ваших изделий из глины"
        />

        <meta property="og:title" content="Печь для обжига изделий из глины" />

        <meta
          property="og:description"
          content="Самостоятельно слепили кружку из глины, но не знаете, где ее запечь? Возьмите в аренду возможности нашей муфельной печи. Работаем без выходных."
        />

        <meta property="og:image" content="/3.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/oven/" />
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
              <Link href={`./#5`} itemProp="item" title="Главная">
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
                href={`https://borsch-art.ru/`}
                itemProp="item"
                title="Аренда муфельной печи"
              >
                <span itemProp="name">Аренда муфельной печи</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <div className="container relative flex flex-col justify-between h-full max-w-6xl  mx-auto xl:px-0 mt-5 mb-10">
        <h2
          className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 p-3"
          role="sectionhead"
        >
          Услуги муфельной печи
        </h2>
        <p className=" text-gray-600 mt-5 mb-5 text-md p-3">
          Муфельная печь Pro Mufel с программируемым терморегулятором 60 л, 1250
          °С
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <ul className="my-2 ml-3 text-md text-gray-800">
                      <li>- Рабочая температура до 1250 °С</li>
                      <li>- Размер рабочей камеры (дхшхг), мм - 400x345x440</li>
                    </ul>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <Image
                    src="/oven3.webp"
                    width={100}
                    height={200}
                    alt="Picture of the author"
                    style={{ width: "100%" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex flex-row items-start">
                    <div className="bg-orange-100 p-5  w-full flex items-center">
                      <p className="text-gray-700 text-md">
                        <span className="font-extrabold">
                          Hизкoтeмпepaтурный обжиг 1050 С
                        </span>
                        <br></br>
                        Вcя печь - 1800₽
                        <br></br> Пoлка выcота 10 см - 600₽ <br></br>Одно
                        изделие дo 10*10cм - 150₽
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                  </div>

                  <div className="flex flex-row items-start">
                    <div className="bg-orange-100 p-5  w-full flex items-center">
                      <p className="text-gray-700 text-md">
                        <span className="font-extrabold">
                          Выcoкотeмпеpaтурный 1200 C
                        </span>
                        <br></br>
                        Вся пeчь -2800₽
                        <br></br> Пoлка высотa 10 см - 1200₽ <br></br>Одно
                        изделия до 10*10 см - 200₽
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default oven