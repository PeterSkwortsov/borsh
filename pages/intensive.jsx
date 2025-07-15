

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function intensive() {
  return (
    <>
     

      <button className="m-1 fixed z-100">
        <Link
          href={`./#7`}
          className="btn btn-neutral bg-white text-black max-sm:text-md"
        >
          <Image
            src="/arrow1.svg"
            unoptimized
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "100%" }}
          />
          Назад
        </Link>
      </button>

      <h3 className="text-orange-600  flex text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        Сейчас страница в разработке :(
            <br></br>
        Пока мы работаем над интенсивом - посмотрите другие наши мастер-классы
      </h3>

   
    </>
  );
}
