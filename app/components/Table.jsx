import React from 'react'
import Image from 'next/image';

const Table = () => {
  return (
    <>
      <div className="blockquote-wrapper bg-beige mt-8">
        <div className="blockquote max-sm:text-3lg">
          <h3>
            На занятиях со мной вы получите удовольствие от того, что всю эту
            красоту вы сделали сами. <br></br>
            Расстворитесь в творчестве и наполнитесь позитивной энергией!
          </h3>
        </div>
      </div>

      <h5 className="text-2xl font-bold flex text-center justify-center m-5 mt-16">
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
              <td>Погружение в себя</td>
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
              <td>Яркие каникулы</td>
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
              <td>Наше лето</td>
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
              <td>Погружение в себя</td>
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