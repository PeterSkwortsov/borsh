import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Table = () => {
  return (
    <>
      <div className="blockquote-wrapper bg-beige mt-3">
        <div className="blockquote max-sm:text-3lg">
          <h3>
            Мне нравится работать с людьми и я считаю это своим призванием.
            Интересно наблюдать их результаты, радость от того, что они делают и
            как раскрывается их потенциал.<br></br>
            <br></br>
            Моя цель в проведении мастер-класса, чтобы все ушли вдохновленные и
            счастливые.<br></br>
            <br></br>Я считаю живопись не только искусством, но и способом
            общения с миром. Это возможность передать свои чувства и мысли через
            цвет и форму.
          </h3>
        </div>
      </div>

      <h5 className="text-2xl font-bold flex text-center justify-center m-5 mt-13">
        Расписание занятий групп
      </h5>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Возраст</th>
              <th className="fb">Тема занятия</th>
              <th className="fb">Инструмент</th>
              <th className="fb">Время</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Взрослые (от 30 лет)</td>
              <td>
                <button className="btn btn-warning">
                  <Link
                    href={`/adults`}
                    className="text-black font-bold max-sm:text-sm"
                  >
                    Погружение
                  </Link>
                </button>
              </td>
              <td>Маслянные краски</td>
              <td>Пятница (с 19:00 - 22.00)</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Подростки (от 12-18 лет)</td>
              <td>
                <button className="btn btn-warning">
                  <Link href={`/holidays`} className="text-black font-bold">
                    Яркие каникулы
                  </Link>
                </button>
              </td>
              <td>Профессиональыне фломастеры</td>
              <td>
                Четверг (с 16:00 - 18.00)<br></br>
                Вторник (с 18:00 - 20.00)
              </td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Дети (от 5-12 лет)</td>
              <td>
                <button className="btn btn-warning">
                  <Link href={`/summer`} className="text-black font-bold">
                    Наше лето
                  </Link>
                </button>
              </td>
              <td>Гуашь</td>
              <td>Понедельник (с 18:00 - 20.00)</td>
              <td>
                {" "}
                <Image
                  src="/2.jpeg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Взрослые (от 30 лет)</td>
              <td>
                <button className="btn btn-warning ">
                  <Link href={`/absorption`} className="text-black font-bold">
                    Погружение в себя
                  </Link>
                </button>
              </td>
              <td>Маслянные краски</td>
              <td>Пятница (с 19:00 - 22.00)</td>
              <td>
                {" "}
                <Image
                  src="/6.jpeg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs font-bold flex text-center justify-center m-5 mt-8">
          Расписание примерное и может измениться! Актуальную информацию
          уточняйте у меня*
        </p>
      </div>
    </>
  );
}

export default Table