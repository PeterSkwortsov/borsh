import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'



const Footer = () => {

 
  const handleClick = () => {
    window.open('https://www.avito.ru/brands/8d76be9c000dcf00585b1f13c92d5e09/all/predlozheniya_uslug?gdlkerfdnwq=101&page_from=from_item_card&iid=7426197176&sellerId=1a482f59c268883c8e1f7b9276118a13', '_blank', 'noopener,noreferrer')
  }



  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto">
        <address className="font-bold flex gap-2 justify-center mt-2">
          ул. Ломоносова 9, этаж 4, офис 408
        </address>
        <a
          href="tel:+79049017926"
          className="mb-2 flex gap-2 justify-center font-extrabold text-withe"
        >
          +7-904-901-79-26
        </a>
        <p className="text-md m-auto flex justify-center mb-3">
          {" "}
          Только по предварительной записи!
        </p>

        <div className="flex gap-2 justify-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <a href="https://vk.com/borsch_art?from=groups">
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
          <div className="avatar">
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
          <div className="avatar avatar-online">
            <div className="w-10 rounded-full">
              <a href="https://max.ru/u/f9LHodD0cOKmO2Vsxr8ykXBd_v3KLqqmrcZGbqLY6d-CjsvH6adkUxL7w1c">
                <Image
                  src="/max.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>

        <iframe
          src="https://yandex.ru/sprav/widget/rating-badge/204996255834?type=rating"
          width="150"
          height="50"
          frameBorder="0"
          className="m-auto mt-5"
        ></iframe>

        <section
          onClick={handleClick}
          className="bg-white rounded-xl shadow-sm p-3 max-w-40 m-auto mt-4 border border-gray-100 cursor-pointer"
        >
          <div className="flex items-center justify-between gap-3">
            {/* Левая часть с рейтингом */}
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2">
                <div className="text-xl font-bold text-[#A169F7]">5.0</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#A169F7]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-800 text-center font-medium leading-tight">
                Рейтинг на{" "}
                <span className="text-md font-bold text-[#833bf0]">Avito</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer