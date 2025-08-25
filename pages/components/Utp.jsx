import React from 'react'
import Image from 'next/image';

const Utp = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center pl-4 pr-0">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/location.svg"
                width={50}
                height={50}
                alt="Гео-локация"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="chat-bubble max-sm:text-sm">
            В пешей доступности находятся остановки общественного транспорта.{" "}
            <br></br>
            От трамвайной остановки «ул. Генкиной» - 6 мин.<br></br>
            От автобусной остановки «ул. Ашхабадская» - 10 мин.<br></br>
            От метро «Горьковская» - 20 мин.<br></br>
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/coffee.svg"
                width={100}
                height={100}
                alt="изобраение кофе"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div
            className="chat-bubble max-sm:text-sm
"
          >
            Место ожидания с горячим чаем и печеньками, кондиционер.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/family.svg"
                width={100}
                height={100}
                alt="изображение группы людей"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="chat-bubble max-sm:text-sm">
            Большое помещение вместимостью 8 человек, где каждый будет
            чувствовать себя свободно.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/bake.svg"
                width={100}
                height={100}
                alt="Изображение муфельной печи"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="chat-bubble max-sm:text-sm">
            Своя муфельная печь объемом 60 литров для ваших изделий.
          </div>
        </div>
      </div>
    </>
  );
}

export default Utp