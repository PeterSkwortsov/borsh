

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function intensive() {
  return (
    <>
      <Head>
        <title>Интенсив по созданию своими руками посуды за 2 дня</title>

        <meta name="description" content="И" />

        <meta
          property="og:title"
          content="Интенсив. Создаем свою идеальную кухонную посуду за 2 дня"
        />

        <meta
          property="og:description"
          content="Всего за два насыщенных выходных дня вы погрузитесь в мир глины и создадите целый набор практичной и красивой посуды для своего дома!"
        />

        <meta property="og:image" content="/3.jpg" />

        <meta property="og:url" content="https://borsch-art.ru/intensive/" />
      </Head>

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
