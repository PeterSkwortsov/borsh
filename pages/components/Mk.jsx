
import React from 'react'

const Mk = () => {
  return (
    <>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mt-5 mb-10"
        role="sectionhead"
      >
        <h3
          className="text-black text-2xl font-extrabold p-3 m-auto text-center mb-4"
          itemProp="name"
        >
          Групповые занятия для детей
          <span className="text-orange-600"> по абонементам</span>
        </h3>
        <h6 className="text-md flex text-center justify-center m-5 font-bold">
          Расписание групповых занятий по рисунку и живописи:
        </h6>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="fb w-1/6">Возраст</th>
              <th className="fb w-1/6">Понедельник</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">Пятница</th>
              <th className="fb w-1/6">На 4 занятия</th>
              <th className="fb w-1/6">На 8 занятий</th>
              {/* <th className="fb">Изображение</th> */}
              {/* min-w-sm */}
            </tr>
          </thead>
          {/* row 1 */}
          <tbody bgcolor="Lavender">
            <tr>
              <td>6-9 лет</td>
              <td>14:15-15:15</td>
              <td>14.15-15.15</td>
              <td>14.00-15.00</td>
              <td>4 занятия в месяц (1 занятие в неделю) 1.800₽</td>
              <td>8 занятий в месяц (2 занятия в неделю) 3.200₽</td>
            </tr>

            <tr>
              <td>8-11 лет</td>
              <td>9:30-11:00</td>
              <td>9:30-11:00</td>
              <td>9:30-11:00</td>
              <td>4 занятия в месяц (1 занятие в неделю) 2.000₽</td>
              <td>8 занятий в месяц (2 занятия в неделю) 3.600₽</td>
            </tr>

            <tr>
              <td>9-16 лет</td>
              <td>15.30-17.00</td>
              <td>15.30-17.00</td>
              <td>15.00-16.30</td>
              <td>4 занятия в месяц (1 занятие в неделю) 2.000₽</td>
              <td>8 занятий в месяц (2 занятия в неделю) 3.600₽</td>
            </tr>
          </tbody>
        </table>

        <h6 className="text-md flex text-center justify-center m-5 mt-8 font-bold">
          Расписание групповых занятий для детей с 7-11 лет по лепке из глины:
        </h6>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb w-1/6">Понедельник</th>
              <th className="fb w-1/6">Среда</th>
              <th className="fb w-1/6">Пятница</th>
              <th className="fb w-1/6">На 4 занятия</th>
              {/* min-w-sm */}
            </tr>
          </thead>
          <tbody bgcolor="PapayaWhip	">
            <tr>
              <td>17.00-18.30</td>
              <td>17.00-18.30</td>
              <td>16:30-18:00</td>
              <td>4 занятия в месяц (1 занятие в неделю) 3.600₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Mk