
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
          июль:
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
                15.07<br></br>вторник
              </th>
              <td>
                Мастер-класс по свободной живописи акрилом! Пишем на холстах 30
                на 40см то, что давно хотелось, но не доходили до этого руки! Вы
                сможете изобразить от душевного деревенского пейзажа до любимого
                питомца!
              </td>
              <td>18.00-20.00</td>
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
                19.07<br></br>суббота
              </th>
              <td>
                Ручная лепка из глины, свободная тема! Слепить можно, как
                кружку, тарелку, миску, так и вазочку, менажницу или что-нибудь
                другое
              </td>
              <td>14.00-16.00</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>
                19.07<br></br>суббота
              </th>
              <td>
                Изучаем направление импрессионизм, пишем натюрморт на холстах 30
                на 40, пьем вино и едим вкусные закуски. Возраст: 18+
              </td>
              <td>17.00-19.30</td>
              <td>2.600₽</td>
            </tr>
            <tr>
              <th>
                20.07<br></br>воскресенье
              </th>
              <td>
                Варим ароматические свечи! Сначала распишем гипсовые формы так,
                как нам хочется, подберем цвет, аромат и декор из сухоцветов для
                свечей каждый на выходе получит по две аромасвечи
              </td>
              <td>17.00-19.00</td>
              <td>1.800₽</td>
            </tr>
            <tr>
              <th>
                23.07<br></br>среда
              </th>
              <td>
                Лепим кружки из глины, расписываем ангобами или подглазурными
                красками!
              </td>
              <td>18.00-20.00</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>
                25.07<br></br>пятница
              </th>
              <td>
                Мастер-класс на гончарном круге! Сделаем кружечку или миску,
                распишем ангобами или подглазурными красками! Количество мест
                ограничено: до 3-х человек.
              </td>
              <td>18.00-20.00</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>
                26.07<br></br>суббота
              </th>
              <td>
                Ручная лепка из глины, свободная тема! Слепить можно, как
                кружку, тарелку, миску, так и вазочку, менажницу или что-нибудь
                другое
              </td>
              <td>16.00-18.00</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>
                27.07<br></br>воскресенье
              </th>
              <td>
                Ручная лепка тарелочек, а после роспись ангобами и подглазурными
                красками!
              </td>
              <td>17.00-19.00</td>
              <td>1.600₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Mk