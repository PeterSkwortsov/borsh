
import React from 'react'
import Image from 'next/image';

const Mk = () => {
  return (
    <>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mt-10 mb-1"
        role="sectionhead"
      >
        <h3
          className="text-black text-2xl font-extrabold p-3 m-auto text-center mb-4"
          itemProp="name"
        >
          Групповые занятия для
          <span className="text-orange-600"> детей по средам</span>
        </h3>
        <h6 className="text-md flex text-center justify-center m-5 font-bold">
          Расписание групповых занятий по рисунку и живописи:
        </h6>
        <div className="block md:hidden">
          <Image
            src="/left.png"
            alt="Мобильная картинка"
            width={500}
            height={300}
            className="w-10 m-auto"
          />
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="fb w-1/6">Возраст</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">
                Стоимость 4-х занятий (1 раз в неделю){" "}
              </th>
            </tr>
          </thead>
          {/* row 1 */}
          <tbody bgcolor="Lavender">
            <tr>
              <td>7-10 лет</td>
              <td>14.15-15.30</td>
              <td>2.400₽ (600р занятие)</td>
            </tr>

            <tr>
              <td>11-16 лет</td>
              <td>15:30-17.00</td>
              <td>2.800₽ (700р занятие)</td>
            </tr>
          </tbody>
        </table>

        <h6 className="text-md flex text-center justify-center m-5 mt-8 font-bold">
          Расписание групповых занятий для детей по лепке из глины:
        </h6>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb w-1/6">Возраст</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">
                Стоимость 4-х занятий (1 раз в неделю)
              </th>
              {/* min-w-sm */}
            </tr>
          </thead>
          <tbody bgcolor="PapayaWhip	">
            <tr>
              <td>7-11 лет</td>
              <td>17.00-18.30</td>
              <td>4.000₽ (1000р занятие)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-md flex text-center justify-center m-5">
          Абонемент для более старших детей и взрослых по гончарному мастерству,
          4 занятия в месяц - 5.500₽, в рамках абонемента можно посещать любые
          двухчасовые групповые занятия по расписанию.
        </p>
      </div>
    </>
  );
}

export default Mk