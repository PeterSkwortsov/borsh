import React from 'react'
import Image from 'next/image';

const Phone = () => {
  return (
    <>
      <div className="mt-12 mb-14 flex justify-center alighn-center m-auto max-w-sm">
        <div className="mockup-phone border-white ">
          <div className="mockup-phone-camera "></div>
          <div className="mockup-phone-display w-full h-full">
            <div className="chat chat-start bg-gray-200">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full ml-1">
                  <Image
                    className="w-full"
                    src="/19.webp"
                    unoptimized
                    width={200}
                    height={200}
                    alt="Изображение дочери"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="chat-header text-black mt-10">Дочка</div>
              <div className="chat-bubble bg-black text-white text-sm max-sm:text-sm max-md:text-md">
                Смотри! Я нашла место, где свободна в выборе творчества, тут
                меня направляют и помогают сформировать мои идеи в цельный
                образ. Это мотивирует меня на создание более сложных проектов!
              </div>
            </div>

            <div className="chat chat-start bg-gray-200">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full ml-1">
                  <Image
                    className="w-full"
                    src="/19.webp"
                    unoptimized
                    width={200}
                    height={200}
                    alt="Изображение дочери"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="chat-bubble m-1 bg-black text-white text-sm max-sm:text-sm max-md:text-md">
                Я научилась пользоваться красками, разными техниками и
                материалами.<br></br> Меня никто не осуждал за ошибки!
              </div>
            </div>

            <div className="chat chat-start bg-gray-200">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full ml-1">
                  <Image
                    className="w-full"
                    src="/19.webp"
                    unoptimized
                    width={200}
                    height={200}
                    alt="Изображение дочери"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="chat-bubble m-1 bg-black text-white text-sm max-sm:text-sm max-md:text-md">
                Тут преподавателю не все равно
                <svg
                  className="h-6 w-6 text-red-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                </svg>
              </div>
              <div className="chat-footer opacity-50 text-black">Прочитано</div>
            </div>

            {/* ----------- */}

            <Image
              className="w-full"
              src="/18.webp"
              unoptimized
              width={200}
              height={200}
              alt="Картина художника Леонида Колосова (пример)"
              style={{ width: "100%" }}
            />

            <div className="chat chat-end bg-gray-200">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full mr-1">
                  <Image
                    className="w-full"
                    src="/20.webp"
                    unoptimized
                    width={200}
                    height={200}
                    alt="Изображение отца"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="chat-header text-black">Папа</div>
              <div className="chat-bubble text-white bg-black text-sm max-sm:text-sm max-md:text-md">
                Отлично! Рад за тебя!
              </div>
              <div className="chat-footer opacity-50 text-black">
                Отправлено
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone