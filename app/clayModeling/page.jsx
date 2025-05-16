import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
export default function ClayModeling() {
  return (
    <>
      <button className="m-5">
        <Link
          href={`./#group`}
          className="btn btn-neutral bg-white text-black max-sm:text-sm"
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
      <div className="overflow-x-auto md:max-w-2/3 m-auto mb-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Описание</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                Мастер-класс по лепке плоской тарелочки, миски, пиалы,
                подсвечника
              </td>
              <td>1.600р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>1</th>
              <td>
                Мастер-класс по лепке кружки, чайной пары, вазочки до 15 см
              </td>
              <td>1.600р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>2</th>
              <td>Индивидуальные занятие для одного человека</td>
              <td>
                Один - 3.300р<br></br>
                Для двоих - 2.700р/человек
                <br></br>
                Три и больше - 2.400р
              </td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <p className="text-xs font-bold flex text-center justify-center m-5 mt-8">
            Расписание примерное и может измениться! Актуальную информацию
            уточняйте у меня*
          </p> */}
      </div>
      <Footer />
    </>
  );
}
