import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// public\fonts\Nunito-VariableFont_wght.ttf
export const About = () => {
  return (
    <>
      <section
        className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16"
        id="anchor_one"
        itemScope
      >
        <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="px-4">
              <h3
                className="text-black text-2xl font-extrabold"
                itemProp="name"
              >
                Здравствуйте!<br></br> Меня зовут{" "}
                <span className="text-orange-600">Виктория</span>
              </h3>
              <p
                className="max-w-sm mt-3 text-md leading-relaxed text-black md:mt-8"
                itemProp="description"
              >
                Родилась в небольшом поселке Ломовка. С детства увлекалась
                рисованием, но, к сожалению, ни художественной школы, ни кружка
                в этом направлении не было. И любовь к рисованию так и могла
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
                <span className="font-bold"> Теперь я сама понимаю,</span>
                <span className="font-bold text-orange-600">
                  {" "}
                  как важен учитель в жизни каждого ребенка и как от его
                  действий зависит порой чье-то будущее.
                </span>
              </p>
            </div>

            <div className="relative">
              <Image
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 
                mask-t-from-75% mask-t-to-100% mask-b-from-65% mask-b-to-100% mask-l-from-75% mask-l-to-100% mask-r-from-75% mask-r-to-100% mt-10"
                src="./62.webp"
                alt="Фотография Виктории Скворцовой"
                itemProp="image"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default About;