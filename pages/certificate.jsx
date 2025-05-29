import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
const certificate = () => {
  return (
    <>
      <Head>
        <title>Подарочный сертификат</title>
        <meta
          name="description"
          content="Рисование и гончарное мастерство
для взрослых и детей"
        />
        <meta
          name="keywords"
          content="Подарочный сертификат в творческую мастерскую Вики Борщ"
        />
        <meta name="author" content="Виктория Борщ" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Подарочный сертификат в студию Вики Борщ"
        />
      </Head>
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

      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 mb-10">
        <h2 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900">
          Номинал сертификатов
        </h2>
        <p className=" text-gray-600 mt-5 mb-5">
          Данные сертификаты позволяют участвовать в любом мастер-классе студии.
          Используется только по предварительной записи. Действует 12 месяцев с
          момента приобретения, не подлежит обмену и возврату.
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      1000 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-xs font-medium">
                    Может быть оформлен в бумажном или электронном виде
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      2000 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-xs font-medium">
                    Может быть оформлен в бумажном или электронном виде
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      3000 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-xs font-medium">
                    Может быть оформлен в бумажном или электронном виде
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      4000 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-xs font-medium">
                    Может быть оформлен в бумажном или электронном виде
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      5000 ₽
                    </h3>
                  </div>
                  <p className="mt-1 mb-2 text-xs font-medium">
                    Может быть оформлен в бумажном или электронном виде
                  </p>
                  <button className="">
                    <Link
                      href={`https://t.me/vika_borsch99`}
                      className="btn btn-neutral bg-white text-black max-sm:text-sm"
                    >
                      <Image
                        src="/basket.svg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        style={{ width: "50%" }}
                      />
                      Купить
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default certificate