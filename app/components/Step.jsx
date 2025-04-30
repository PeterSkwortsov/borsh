import React from 'react'

const Step = () => {
  return (
    <>
      <h6 className="text-2xl font-bold flex text-center justify-center mb-4">
        Как прийти в мастерскую?
      </h6>
      <ul className="steps steps-horizontal  max-sm:steps-vertical max-md:steps-vertical text-sm p-2 mb-10">
        <li className="step step-primary">
          Записаться по телефону +7-904-901-79-26 или через мессенджер ВК,
          Telegram
        </li>
        <li className="step step-primary">
          Прийти к назначенному времени на ул. Ломоносова 9. Вход через КПП.
        </li>
        <li className="step">
          Скажите охраннику, что вы в творческую студию, офис 408.
        </li>
        <li className="step">
          Найдя главный вход поднимайтесь на лифте на 4 этаж и до конца налево.
        </li>
      </ul>
    </>
  );
}

export default Step