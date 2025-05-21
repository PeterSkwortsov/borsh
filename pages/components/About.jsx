import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// public\fonts\Nunito-VariableFont_wght.ttf
export const About = () => {
  return (
    <>
      <figure
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
      </figure>
    </>
  );
}


export default About;