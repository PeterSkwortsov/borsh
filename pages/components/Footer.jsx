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
          соглашаетесь на обработку персональных данных в соответствии с{" "}
          <Link href="./confidentiality" className="link">
            Политикой конфиденциальности.
          </Link>
          <br></br>
          &copy; {new Date().getFullYear()}{" "}
          <span>
            Сайт разработан{" "}
            <a href="https://vk.com/skwortsow.petia" className="font-bold">
              СКВОРЦОМ
            </a>
          </span>
        </p>
        <address className="font-bold flex gap-2 justify-center mt-2">
          ул. Ломоносова 9, 4 этаж, офис 408
        </address>
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

        <iframe src="https://yandex.ru/sprav/widget/rating-badge/204996255834?type=rating" width="150" height="50" frameBorder="0" className='m-auto mt-5'></iframe>
       
       
        <ul className="mt-4">
          <li className="text-center text-md ">
            <Link href="certificate">Подарочный сертификат</Link>
          </li>
          <li className="text-center  text-md">
            <Link href="oven">Аренда муфельной печи</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer