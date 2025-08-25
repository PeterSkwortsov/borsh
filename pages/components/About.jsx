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
                Моя студия - мое детище, я всегда работаю с
                максимальной отдачей, чтобы вы уходили вдохновленные и довольные
                результатом!<br></br> Работать с людьми - мое призвание, я
                всегда получаю огромное удовольствие от процесса, искренне
                радуюсь за результаты учеников и готова их всегда поддерживать в
                начинаниях.<br></br>
                <br></br> Приходите со своими друзьями, со своим ребенком или
                всей семьей мастер-класс по лепке или живописи. Это всегда
                увлекательный процесс, который останется счастливым
                воспоминанием в памяти и сохранится в изделии или картине!
                <br></br> Вы можете придти на разовый мастер-класс или
                приобрести абонемент на занятия и посещать их в течении месяца.
               
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