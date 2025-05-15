import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// public\fonts\Nunito-VariableFont_wght.ttf
export const About = () => {
  return (
    <>
      {/* <figure className="diff aspect-video" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <div className="bg-white text-black flex font-black">
            <figure>
              <Image
                src="/about.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
                className="min-w-sm"
                style={{ width: "100%" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Добро пожаловать на мой сайт!
              </h2>
              <p className="font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                voluptatum odio maiores vitae repudiandae quam, ea eius,
                nesciunt, similique sapiente blanditiis eligendi nihil facere
                iusto quis accusamus voluptate maxime et!
              </p>
              <p className="font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                dignissimos ex necessitatibus sapiente exercitationem veniam,
                ipsum omnis modi laboriosam deserunt quo praesentium neque
                nesciunt autem? Ducimus fugit nobis vero vitae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Itaque cum nulla
                vero placeat quisquam, beatae ipsam id reiciendis voluptatum
                omnis exercitationem quis, iusto architecto dolorem voluptates
                nesciunt vitae ut non? Dolor numquam perferendis quas unde
                cumque vero placeat quisquam nobis dolore excepturi error sunt
                reiciendis molestiae sit alias eum, necessitatibus magni
                officiis! Quidem, eveniet facere quas asperiores provident
                quaerat suscipit. Excepturi vel at consequatur quos praesentium
                facere sunt quidem amet, itaque impedit odit, in et pariatur
                atque ut sequi id eveniet illum vitae. Aliquid quibusdam maxime
                delectus nobis sint incidunt. Libero distinctio expedita
                architecto maxime, optio earum repellendus natus nostrum dolorum
                quam molestiae incidunt impedit accusamus quasi perferendis rem
                laudantium, deleniti aut fugit minima culpa corporis neque
                ullam? Eos, optio? Praesentium perferendis in quos atque nam
                aperiam magnam dolorem culpa est, quaerat beatae sit? Animi
                voluptates placeat eius ipsum? Voluptatum maiores sequi
                repudiandae a enim porro voluptatibus quas asperiores officiis.
                Perspiciatis expedita repellat, ut eos, accusantium ullam
                sapiente perferendis accusamus, nesciunt animi sed ad
                consequuntur ipsum aliquid nostrum alias quaerat excepturi
                similique? Nisi sed illum similique quod iste atque
                reprehenderit!
              </p>
            </div>
          </div>
        </div>

        <div className="diff-item-2" role="img">
          <div className="bg-gray-100 grid place-content-center text-8xl text-red-800 font-bold">
            Виктория Борщ
          </div>
        </div>
        <div className="diff-resizer"></div>
      </figure> */}
      <figure className="dNew aspect-video mt-16 max-md:h-screen">
        <div className="bg-gray-300 text-black flex font-black">
          <div className="hero background-image-2 ">
            <div className=" text-neutral-content text-center pl-0 pr-0">
              <div className="hero-overlay rounded-4xl p-4">
                <h3 className="mb-5 pt-3 pb-0 cursor-default font-light  max-sm:text-base  max-lg:text-lg max-xl:text-xl  max-2xl:text-2xl text-ellipsis  ">
                  Меня зовут Виктория Скворцова. <br></br>Родилась в небольшом
                  поселке Ломовка. С детства увлекалась рисованием, но были
                  сложности с базовыми знаниями в рисунке и живописи, так как ни
                  художественной школы, ни кружка в этом направлении не было. И
                  любовь к рисованию так и могла остаться лишь увлечением и
                  хобби.<br></br>
                  Но ближе к старшим классам в нашей сельской школе появилась
                  новая учительница ИЗО, которая приезжала к нам из города. Я
                  была на седьмом небе от счастья, ведь теперь у нас будет
                  НАСТОЯЩИЙ учитель и художник вести уроки!<br></br>С 2020 года
                  работала в школе учителем изобразительного искусства.
                  А с 2023 года преподавала в школе рисования.
                  <br></br>
                  <br></br>
                  Этой студией я обязана своему учителю, которая поверила в
                  меня. Теперь я сама понимаю, как важен учитель в жизни каждого
                  ребенка и как его действий зависит порой чье-то будущее.
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