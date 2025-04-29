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
                src="/coffee.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div
            className="chat-bubble max-sm:text-sm
"
          >
            Зона ожидания с горячим чаем и печеньками.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/family.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="chat-bubble max-sm:text-sm">
            Большое помещение вместимостью 20 человек где каждый будет
            чувствовать себя свободно.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full center">
              <Image
                src="/location.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="chat-bubble max-sm:text-sm">
            Близко находятся остановки общественного транспорта. <br></br>
            От трамвайной остановки (ул. Генкиной) - 6 мин. пешком.<br></br>
            От автобусной остановки (ул. Ашхабадская) - 10 мин. пешком.<br></br>
            От метро Горьковская - 20 мин. пешком.<br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utp