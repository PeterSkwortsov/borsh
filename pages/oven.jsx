import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const oven = () => {
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

      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 mb-10">
        <h2 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900">
          Услуги муфельной печи
        </h2>
        <p className="mb-2 text-gray-600 mt-5 mb-5 text-md">
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
                    src="/oven.png"
                    width={100}
                    height={200}
                    alt="Picture of the author"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Аренда целой печи:
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <ul className="my-2 ml-3 text-md text-gray-800">
                    <li>- низкотемпературный обжиг на 1050С - 1500 руб</li>
                    <li>
                      - низкотемпературный глазурный обжиг на 1050С -1500 руб
                    </li>
                    <li>- высокотемпературный обжиг на 1250С -2000 ₽</li>
                  </ul>
                  <Image
                    src="/oven2.jpg"
                    width={100}
                    height={200}
                    alt="Picture of the author"
                    style={{ width: "50%" }}
                    className="m-auto rounded-lg"
                  />
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
                      Аренда одной полки в печи изделий до (10см высотой)
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>

                  <ul className="my-2 ml-3 text-md text-gray-800">
                    <li>- низкотемпературный обжиг на 1050С - 500 руб</li>
                    <li>
                      - низкотемпературный глазурный обжиг на 1050С -600 руб
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Одно небольшое изделие до 10 см
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <ul className="my-2 ml-3 text-md text-gray-800">
                    <li>- низкотемпературный обжиг на 1050С - 150 руб</li>
                    <li>
                      - низкотемпературный глазурный обжиг на 1050С -200 руб
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <span className="text-lg font-bold">
                    Ответственность за правильное нанесение глазури и
                    использование качественных материалов на вас! Донышки
                    изделий должны быть без глазури и глазурь не должна стекать!
                  </span>
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