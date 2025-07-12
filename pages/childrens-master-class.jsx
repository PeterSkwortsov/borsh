



import Image from "next/image";
import Link from "next/link";

export default function ChildrensClass() {
  return (
    <>

    
      <button className="m-1 fixed z-100">
        <Link
          href={`./#7`}
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

      <h3 className="text-orange-600  flex text-center justify-center m-5 mt-8 text-black text-2xl font-extrabold">
        Семейный мастер-класс по лепке!
      </h3>

      <p className="flex text-center justify-center p-5 max-w-4xl m-auto">
        Ваши руки и руки вашего ребенка вместе погружаются в мягкую, податливую
        глину 👐 <br></br> Вы вместе творите, смеетесь, создаете что-то
        уникальное и настоящее для себя.
      </p>
      <p className="flex text-center justify-center mt-2 p-5">
        Лепим что душе угодно! Милые зверушки, волшебные замки, полезные чашечки
        или забавные монстрики – решать вам!
      </p>

      <div className="carousel carousel-center mt-10 mb-10 w-fit m-auto flex rounded-xl">
        <div className="carousel-item h-full ">
          <Image
            src="/99.jpg"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/100.jpg"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/94.jpg"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/93.jpg"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="carousel-item h-full ">
          <Image
            src="/92.jpg"
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
            src="/101.jpg"
            unoptimized
            width={310}
            height={100}
            alt="Picture of the author"
          />
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
