
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function CandleMaking() {
  return (
    <>
      <Head>
        <title>Мастер-класс по свечеварению</title>

        <meta
          name="description"
          content="За мастер-класс вы получаете две ароматических свечи в гипсовом кашпо/стеклянном стакане/скорлупе кокоса.Работаем на кокосовом и соевом воске.Есть варианты декора свечей и гипсовых кашпо."
        />

        <meta property="og:title" content="Мастер-класс по свечеварению" />

        <meta
          property="og:description"
          content="За мастер-класс вы получаете две ароматических свечи в гипсовом кашпо/стеклянном стакане/скорлупе кокоса.Работаем на кокосовом и соевом воске.Есть варианты декора свечей и гипсовых кашпо."
        />

        <meta property="og:image" content="/6.jpg" />

        <meta
          property="og:url"
          content="https://borsch-art.ru/candle-making/"
        />
      </Head>

      <button className="m-1 fixed z-100">
        <Link
          href={`./#6`}
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

      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mt-5  mb-10"
        role="sectionhead"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Декор свечей и гипсовых кашпо</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Свечи в гипсовом кашпо</td>
              <td>1.800₽</td>

              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Свечи в стеклянном стакане</td>
              <td>2.000₽</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Свечи в скорлупе кокоса</td>
              <td>2.200₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </td> */}
            </tr>
          </tbody>
        </table>
        <p className="text-md flex text-center justify-center m-5 mt-8">
          Индивидуальный мастер-класс - 2.700₽/человек.
        </p>
      </div>

      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Ответы на <span className="text-orange-600">вопросы</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      Как мы будем создавать свечи?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-orange-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-md">
                      Сначала мы с вами слушаем и выбираем подходящие ароматы
                      для будущей свечи. Когда вы составили композицию из
                      ароматов, мы приступаем к практической части. Закрепляем
                      фитиль в емкости, параллельно топим воск. Заливаем воск в
                      мерный стакан, добавляем нужное количество аромамасел.
                      Выбираем цвет пигмента для окрашивания свечи (по желанию).
                      Полученную заготовку выливаем в емкость для свечи. Ждем
                      застывания 15-20 минут. В это время можно подобрать декор
                      для свечи из сухоцветов.
                      <br></br>
                      <br></br>
                      Вуаля!
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-orange-600 text-white border-4 border-white text-xl font-semibold"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
