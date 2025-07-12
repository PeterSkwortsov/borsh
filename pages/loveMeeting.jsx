

import Image from "next/image";
import Link from "next/link";

export default function loveMeeting() {
  return (
    <>
      <button className="m-1 fixed z-100">
        <Link
          href={`./#8`}
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

      <h3 className="text-orange-600  flex text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        Гончарное свидание, которое точно запомнится!
      </h3>

      <p className="flex text-center justify-center">
        Медитативный шум круга, уютная атмосфера студии 🍃 <br></br>
        Погружение в процесс, где время летит незаметно, а все тревоги остаются
        за дверью.
      </p>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-xl">
        <div className="carousel-item h-full ">
          <Image
            src="/81.webp"
            unoptimized
            width={298}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/95.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/82.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/98.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/83.webp"
            unoptimized
            width={301}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/96.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/84.webp"
            unoptimized
            width={300}
            height={100}
            alt="Picture of the author"
          />
        </div>

        <div className="carousel-item h-full ">
          <Image
            src="/97.jpg"
            unoptimized
            width={338}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="py-4 ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <ul>
            <li className="text-left mb-10">
              <div className="flex flex-row items-start">
                <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                  {/* <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс — это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br> */}
                  <ul className="text-gray-700 text-md">
                    <span className="text-orange-600 font-bold">
                      И так, что вас ждет?
                    </span>
                    <li className="p-1 list-disc">
                      2 часа погружения в мир керамики 
                    </li>
                    <li className="p-1 list-disc">
                      Индивидуальное внимание мастера: все покажу, научу и
                      помогу (даже если вы никогда не касались глины) 
                    </li>
                    <li className="p-1 list-disc">
                      Работа за гончарным кругом: каждый создаст свое изделие
                      или будет помогать партнеру – как договоритесь 
                    </li>
                    <li className="p-1 list-disc">
                      Все материалы включены: глина, инструменты, фартуки, обжиг
                      керамики 
                    </li>
                    <li className="p-1 list-disc">
                      Ароматный чай и кофе для вас на протяжении всего свидания 
                    </li>
                    <strong className="flex text-center justify-center font-bold text-xl mt-3">
                      Цена 5000₽ за двоих 💞
                    </strong>
                  </ul>
                </div>

                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-start">
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                {/* <span className="text-orange-600 font-bold">
                        Гончарный мастер-класс — это весело и интересно! Вот что
                        вас ждет:
                      </span>
                      <br></br> */}
                <p className="text-gray-700 text-md">
                  Вы не просто проведете время вместе – вы создадите что-то
                  своими руками! Пусть это будет милая чашка, тарелочка или
                  загадочный абстрактный сосуд – это будет ВАШ шедевр!
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
              <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                <p className="text-gray-700 font-bold text-lg flex text-center center justify-center">
                  Записывайтесь 👇
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
