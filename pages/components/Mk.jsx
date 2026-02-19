
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
          Групповые занятия
          <span className="text-orange-600 "> для детей по средам</span>
        </h3>
        <h6 className="text-lg flex text-center justify-center m-5 font-bold">
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
              <th className="fb w-1/2">Среда</th>
              <th className="fb w-1/2">
                Стоимость 4-х занятий (1 раз в неделю){" "}
              </th>
            </tr>
          </thead>
          {/* row 1 */}
          <tbody bgcolor="Lavender">
            <tr>
              <td>14.30-16.00</td>
              <td>2.800₽ (700р занятие)</td>
            </tr>
          </tbody>
        </table>
        <p className="font-bold flex text-center justify-center m-1 mt-2">
          Стоимость материалов включена! ✨
        </p>
        <p className="flex text-center justify-center mt-1 max-w-2xl m-auto">
          Ребенок освоит основы рисунка и живописи, научится работать с разными
          материалами (акрил, масло, графика)
        </p>
        <h6 className="text-lg flex text-center justify-center m-5 mt-13 font-bold">
          Расписание групповых занятий для детей по лепке из глины:
        </h6>

        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="fb w-1/2">Среда</th>
              <th className="fb w-1/2">
                Стоимость 4-х занятий (1 раз в неделю)
              </th>
              {/* min-w-sm */}
            </tr>
          </thead>
          <tbody bgcolor="PapayaWhip	">
            <tr>
              <td>16.30-18.00</td>
              <td>4.400₽ (1100р занятие)</td>
            </tr>
          </tbody>
        </table>

        <p className="font-bold flex text-center justify-center m-1 mt-2">
          Стоимость материалов включена! ✨
        </p>
        <p className="flex text-center justify-center mt-1 max-w-2xl m-auto">
          Он создаст свою первую глиняную кружку или тарелку, распишет ее
          красками и будет использовать в быту.<br></br> Мы предоставим
          референсы и поможем на каждом этапе.
        </p>
        <p className="text-md flex text-center justify-center mt-8 max-w-2xl m-auto">
          Абонемент для более старших детей и взрослых по гончарному мастерству,
          4 занятия в месяц - 5.500₽, в рамках абонемента можно посещать любые
          двухчасовые групповые занятия по расписанию.
        </p>
      </div>
    </>
  );
}

export default Mk