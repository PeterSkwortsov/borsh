import React from 'react'

const Phone = () => {
  return (
    <>
      <div className="mt-12 mb-14 flex justify-center alighn-center m-auto">
        <div className="flex flex-col w-1/3 mt-48">
          <div className="chat chat-end p-4">
            <div className="chat-bubble chat-bubble-primary bg-purple-200">
              Главный номер создает группу и приглашает участников
            </div>
          </div>
          <div className="chat chat-end p-8">
            <div className="chat-bubble chat-bubble-secondary bg-purple-200">
              Все номера в группе расходуют один общий пакет услуг
            </div>
          </div>
          <div className="chat chat-end p-3">
            <div className="chat-bubble chat-bubble-accent w-74 bg-purple-200">
              Главный номер оплачивает любые дополнительные расходы всех номеров
              группы
            </div>
          </div>
        </div>
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 color-banner">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="chat-header text-white">
                  Василиса Скворцова
                  <time className="text-xs p-1 opacity-50 text-white">
                    12:45
                  </time>
                </div>
                <div className="chat-bubble m-1 text-white">
                  Я добавила тебя в наш чат{" "}
                  <svg
                    className="h-6 w-6 text-violet-500"
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
                <div className="chat-footer opacity-50 text-white">
                  Прочитано
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    />
                  </div>
                </div>
                <div className="chat-header text-white">
                  Леонид Колосов
                  <time className="text-xs opacity-50 p-1 text-white">
                    12:46
                  </time>
                </div>
                <div className="chat-bubble text-white">
                  Отлично! Спасибо, родная!
                </div>
                <div className="chat-footer opacity-50 text-white">
                  Отправлено
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="chat chat-start p-1 w-96">
            <div className="chat-bubble chat-bubble-info bg-purple-200">
              Номера могут принадлежать разным владельцам
            </div>
          </div>
          <div className="chat chat-start p-3 ">
            <div className="chat-bubble chat-bubble-success w-1/2 bg-purple-200">
              Дополнительные номера включены в объем услуг в пакете
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone