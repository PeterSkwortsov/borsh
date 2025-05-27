import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Map = () => {
  return (
    <>
      <section className="center flex flex-col mt-5 mb-8 ">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble bg-gray-200">
            Если вы занимаетесь изготовлением глиняных изделий{" "}
           самостоятельно и
            у вас нет своей печки, можете воспользоваться{" "}
            <span className="font-bold">
              возможностями нашей
            </span>{" "}
            <Link className="link  font-bold" href={`./oven`}>
              муфельной печи.
            </Link>
          </div>
        </div>
      </section>

      <div className=" flex auto-0 justify-center p-5">
        <a
          href="https://yandex.ru/maps/?um=constructor%3Ae7536982294fb5044c6213c28645d8ec01ff8143e10859ec65c98a6f58f791e3&amp;source=constructorStatic"
          target="_blank"
        >
          <img
            src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ae7536982294fb5044c6213c28645d8ec01ff8143e10859ec65c98a6f58f791e3&amp;width=600&amp;height=450&amp;lang=ru_RU"
            alt=""
            className="border: 0"
          />
        </a>
      </div>
      <section className="center flex flex-col mt-5 mb-8">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble bg-gray-200">
            Понравилась наша студия и хотите провести в ней уже свое
            мероприятие? - Пишите!
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div>
          <div className="chat-bubble bg-gray-200">
            Мы открыты к сотрудничесву с новыми мастерами.
          </div>
        </div>
      </section>
    </>
  );
}

export default Map