import Link from 'next/link'
import React from 'react'
import fon from "../../public/10.jpeg";


const Header = () => {
  return (
    <header>
      <div className="hero min-h-screen background-image mask-luminance mask-r-from-white mask-r-from-70% mask-r-to-black">
        <div className=" text-neutral-content text-center pl-0 pr-0">
          <div className="hero-overlay rounded-4xl w-full p-8">
            <h2 className="mb-5 font-bold mt-3 cursor-default text-3xl max-sm:text-2xl max-md:text-2xl">
              Творческая мастерская
            </h2>
            <h1
              className="text-5xl font-extrabold
 cursor-default text-rose-600"
            >
              Вики Борщ
            </h1>
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
                      Максимальное кол-во человек - 20.<br></br>
                      Для детей страше 5 лет!
                    </p>
                  </div>
                </div>
              </div>
            </h3>
            <h5 className="font-bold">ул. Ломоносова 9, 4 этаж, офис 408</h5>
            <a href="tel:+79001111111" className="p-3 mt-5">
              +7-900-111-11-11
            </a>

            <div className="drawer ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content mt-5">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary drawer-button"
                >
                  Подробнее
                </label>
              </div>

              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li>
                    <a>Направления</a>
                  </li>
                  <li>
                    <a>Расписание занятий</a>
                  </li>
                  <li>
                    <a>Ответы на вопросы</a>
                  </li>
                  <li>
                    <a>Как найти мастерскую</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header