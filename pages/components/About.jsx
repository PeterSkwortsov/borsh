import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// public\fonts\Nunito-VariableFont_wght.ttf
export const About = () => {
  return (
    <>
      <section
        className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 mask-b-from-85% mask-b-to-100%"
        id="anchor_one"
      >
        <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="px-4">
              <h3 className="text-black text-2xl font-bold">
                Здравствуйте!<br></br> Меня зовут{" "}
                <span className="text-orange-600">Виктория</span>
              </h3>
              <p className="max-w-sm mt-3 text-md leading-relaxed text-black md:mt-8">
                Родилась в небольшом поселке Ломовка. С детства увлекалась
                рисованием, но к сожалению ни художественной школы, ни кружка в
                этом направлении не было. И любовь к рисованию так и могла
                остаться лишь увлечением и хобби...<br></br>
                Однако ближе к старшим классам в нашей сельской школе появилась
                новая учительница ИЗО, которая приезжала к нам из города. Я была
                на седьмом небе от счастья, ведь теперь у нас будет{" "}
                <span className="text-orange-600 font-bold">НАСТОЯЩИЙ </span>
                учитель и художник вести уроки!<br></br>С 2020 года я работала в
                школе учителем изобразительного искусства. А с 2023 года
                преподавала в школе рисования.
                <br></br>
                <br></br>
                <span className="font-bold">Этой студией я обязана</span>
                <span className="font-bold text-orange-600">
                  {" "}
                  своему учителю, которая поверила в меня.
                </span>
                <span className="font-bold">
                  {" "}
                  Теперь я сама понимаю,</span><span className="font-bold text-orange-600"> как важен учитель в жизни каждого
                  ребенка и как от его действий зависит порой чье-то будущее.
                </span>
              </p>

              {/* <button className="">
                <Link
                  href={`./#group`}
                  className="btn btn-neutral bg-white text-black max-sm:text-sm"
                >
                  <Image
                    src="/arrow1.svg"
                    unoptimized
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    style={{ width: "50%" }}
                  />
                  Однако...
                </Link>
              </button> */}
            </div>

            <div className="relative">
              {/* <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              /> */}
              <Image
                src="/op.png"
                unoptimized
                width={300}
                height={200}
                alt="Picture of the author"
                className='className="absolute inset-x-0 bottom-0 -mb-48 left-1/2"'
              ></Image>

              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="./vika.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <figure
        className="dNew aspect-video mt-16 max-md:h-screen"
        id="anchor_one"
      >
        <div className="bg-gray-300 text-black flex font-black">
          <div className="hero background-image-2 ">
            <div className=" text-neutral-content text-center pl-0 pr-0">
              <div className="hero-overlay rounded-4xl p-4">
                <h3 className="mb-5 pt-3 pb-0 cursor-default font-light  max-sm:text-base  max-lg:text-lg max-xl:text-xl  max-2xl:text-2xl text-ellipsis  ">
                  <p className="font-bold p-0 m-0">
                    Здравствуйте! Меня зовут Виктория Скворцова.
                  </p>{" "}
                  <br></br>Родилась в небольшом поселке Ломовка. С детства
                  увлекалась рисованием, но к сожалению ни художественной школы,
                  ни кружка в этом направлении не было. И любовь к рисованию так
                  и могла остаться лишь увлечением и хобби...<br></br>
                  Однако ближе к старшим классам в нашей сельской школе
                  появилась новая учительница ИЗО, которая приезжала к нам из
                  города. Я была на седьмом небе от счастья, ведь теперь у нас
                  будет НАСТОЯЩИЙ учитель и художник вести уроки!<br></br>С 2020
                  года я работала в школе учителем изобразительного искусства. А
                  с 2023 года преподавала в школе рисования.
                  <br></br>
                  <br></br>
                  Этой студией я обязана своему учителю, которая поверила в
                  меня. Теперь я сама понимаю, как важен учитель в жизни каждого
                  ребенка и как от его действий зависит порой чье-то будущее.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </figure> */}
    </>
  );
}


export default About;