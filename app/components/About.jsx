import React from 'react'
import Image from 'next/image';


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
        <figure className="diff aspect-video  h-screen mt-16 " tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <div className="bg-gray-300 text-black flex font-black">
              <div className="hero background-image-2 ">
                <div className=" text-neutral-content text-center pl-0 pr-0">
                  <div className="hero-overlay rounded-4xl p-8">
                    <h3 className="mb-5 pt-3 pb-0 cursor-default font-light  max-sm:text-base  max-lg:text-lg max-xl:text-xl  max-2xl:text-2xl">
                      Меня зовут Иван Петров. Родился 15 марта 1990 года в
                      Москве. В семье было трое детей, я был средним. В детстве
                      увлекался рисованием и спортом.<br></br>Получив
                      образование в средней школе, поступил в Московский
                      государственный университет на факультет журналистики.
                      Позже начал работать в местной газете, что подтолкнуло
                      меня к написанию статей и отчётов
                      <br></br>
                      На данный момент работаю freelance-журналистом и веду блог
                      о современных трендах. В свободное время увлекаюсь
                      фотографией и путешествиями. В будущем планирую продолжить
                      карьеру в медиа и написать свою книгу, основанную на
                      личном опыте.
                    </h3>

                    <div className="drawer">
                      <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="diff-item-2 " role="img">
            <div className="bg-gray-100 grid place-content-center text-red-800 font-bold">
              <h6
                className="text-center text-7xl max-sm:text-4xl  max-lg:text-5xl max-xl:text-6xl max-2xl:text-7xl
            "
              >
                Виктория Борщ
              </h6>
              {/* <Image
              src="/arrow.svg"
              width={100}
              height={100}
              alt="Picture of the author"
              style={{ width: "9%" }}
            /> */}
            </div>
          </div>
          <div className="diff-resizerNew"></div>
        </figure>
    </>
  );
}


export default About;