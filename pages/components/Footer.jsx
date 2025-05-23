import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto">
        <p className="text-center text-xs p-1">
          Информация на данном сайте не является публичной офертой.<br></br>
          На сайте используется cookies. Продолжая им пользоваться вы
          соглашаетесь на обработку персональных данных в соответствии с
          Политикой конфиденциальности.<br></br>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            Сайт разработан{" "}
            <a href="https://vk.com/skwortsow.petia" className="font-bold">
              СКВОРЦОМ
            </a>
          </span>
        </p>
        <h5 className="font-bold flex gap-2 justify-center mt-2">
          ул. Ломоносова 9, 4 этаж, офис 408
        </h5>
        <a
          href="tel:+79049017926"
          className="p-3 mt-5 flex gap-2 justify-center font-extrabold text-withe"
        >
          +7-904-901-79-26
        </a>
        <div className="flex gap-2 justify-center mt-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <a href="https://vk.com/vika.borsch">
                <Image
                  src="/vk.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="avatar avatar-online">
            <div className="w-10 rounded-full">
              <a href="https://t.me/vika_borsch99">
                <Image
                  src="/tg2.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <a href="https://wa.me/+79049017926">
                <Image
                  src="/whatsapp.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
        <ul className='mt-2'>
          <li className="text-center text-xs mb-1">
            <Link href="certificate">Подарочный сертификат</Link>
          </li>
          <li className="text-center  text-xs">
            <Link href="oven">Услуги муфельной печи</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer