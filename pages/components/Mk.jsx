
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
          <span className="text-orange-600">Расписание мастер-классов</span> на
          первые две недели июля:
        </h3>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="fb">Дата</th>
              <th className="fb min-w-sm">Описание</th>
              <th className="fb">Время</th>
              <th className="fb">Цена</th>
              {/* <th className="fb">Изображение</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                6.07<br></br>воскресенье
              </th>
              <td>
                Мастер-класс по ручной лепке кружки из глины.<br></br>
                Роспись ангобами или подглазурными красками.<br></br> Возраст:
                взрослые и дети с 7 лет.
              </td>
              <td>18.30-20.30</td>
              <td>2.000₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                9.07<br></br>среда
              </th>
              <td>
                Мастер-класс по ручной лепке из глины чайной пары. Роспись
                ангобами или подглазурными красками.<br></br>
                Возраст: взрослые и дети с 9 лет.
              </td>
              <td>16.00-19.00</td>
              <td>2.500₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                13.07<br></br>воскресенье
              </th>
              <td>
                Мастер-класс по ручной лепке тарелочки из глины. Роспись
                ангобами или подглазурными красками. Возраст: Взрослые и дети с
                6 лет.
              </td>
              <td>18.30-20.00</td>
              <td>1.600₽</td>
              {/* <td>
                {" "}
                <Image
                  src="/2.jpeg"
                  unoptimized
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="w-46 md:w-52 lg:w-62 xl:w-72"
                />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Mk