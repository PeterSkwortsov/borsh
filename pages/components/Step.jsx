import React from 'react'

const Step = () => {
  return (
    <>
      <h6
        className="text-2xl font-bold flex text-center justify-center mb-0"
        id="stephow"
      >
        Как прийти в мастерскую?
      </h6>
      <ul className="steps steps-horizontal mt-10 max-sm:steps-vertical max-md:steps-vertical text-sm p-2 mb-10 ип">
        <li className="step step-warning text-wrap">
          Записаться по телефону +7-904-901-79-26 или через мессенджер ВК,
          Telegram, WhatsApp
        </li>
        <li className="step text-balance">
          Прийти к назначенному времени на ул. Ломоносова 9. Вход через КПП.
        </li>
        <li className="step text-balance">
          Скажите охраннику, что вы в творческую студию, офис 408.
        </li>
        <li className="step text-balance">
          Через главный вход поднимайтесь на лифте на 4 этаж и до конца налево.
        </li>
      </ul>
    </>
  );
}

export default Step