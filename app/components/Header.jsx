import Link from 'next/link'
import React from 'react'
import fon from "../../public/10.jpeg";
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="hero min-h-screen background-image mask-b-from-85% mask-b-to-100%">
        <div className=" text-neutral-content text-center pl-0 pr-0">
          <div className="hero-overlay-2 rounded-4xl w-full p-8">
            <Image
              unoptimized
              src="/logo1.png"
              width={350}
              height={350}
              alt="Picture of the author"
            />

            <h3
              className="mb-5 pt-3 pb-0 text-lg
 cursor-default"
            >
              Индивидуальные и групповые занятия<br></br> живописи для взрослых
              и детей
              <div className="dropdown dropdown-end text-center">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-ghost btn-xs text-info"
                >
                  <svg
                    tabIndex={0}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div
                  tabIndex={0}
                  className="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-52 shadow-sm"
                >
                  <div tabIndex={0} className="card-body bg-black">
                    <p className="font-bold">
                      Максимальное кол-во человек в группе - 15.<br></br>
                      Для детей страше 4 лет!
                    </p>
                  </div>
                </div>
              </div>
            </h3>
            <h5 className="font-bold">ул. Ломоносова 9, 4 этаж, офис 408</h5>
            <a
              href="tel:+79049017926"
              className="p-3 mt-5 font-extrabold text-white-400 hover:text-blue-400"
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
                      src="/tg.svg"
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
