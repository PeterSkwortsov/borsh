import React from "react";
import Link from "next/link";
const HamburgerMenu = () => {
  return (
    <>
      <div className="drawer fixed mt-2 ml-2 z-100 top-0 left-0" role="menu">
        <input id="my-drawer" type="checkbox" className="drawer-toggle z-100" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn bg-yellow-300 skeleton border-0 rounded-full"
            role="button"
          >
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="currentColor"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              >
                <polyline
                  points="1 11 12 2 23 11"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></polyline>
                <path
                  d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></path>
                <line
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></line>
              </g>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-md min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="#anchor_one" aria-label="Обо мне">
                Обо мне
              </Link>
            </li>
            <li>
              <Link href="#group" aria-label="Направления занятий">
                Направления занятий
              </Link>
            </li>
            {/* <li>
              <Link href="#cometome">Почему меня выбирают</Link>
            </li> */}
            <li>
              <Link href="#quetion" aria-label="Ответы на вопросы">
                Ответы на вопросы
              </Link>
            </li>
            <li>
              <Link href="#stephow" aria-label="Как записаться?">
                Как записаться?
              </Link>
            </li>
            <li className="font-bold">
              <Link href="certificate" aria-label="Подарочный сертификат">
                Подарочный сертификат
              </Link>
            </li>
            <li className="font-bold" aria-label="Услуги муфельной печи">
              <Link href="oven">Услуги муфельной печи</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
