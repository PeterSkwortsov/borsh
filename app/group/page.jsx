import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Group() {
  return (
    <>
      <button className="m-5">
        <Link
          href={`./#group`}
          className="btn btn-neutral bg-white text-black max-sm:text-sm"
        >
          <Image
            src="/arrow1.svg"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "100%" }}
          />
          Назад
        </Link>
      </button>

      <h2 className="flex text-center justify-center text-2xl m-3">
        Абонементы на занятия по рисованию:
      </h2>
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Абонемент</th>
              <th className="fb">Время</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>4 занятия / 8 занятий для детей 6-8 лет</td>
              <td>60 мин</td>
              <td>1.800р / 3.200р</td>
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
              <th>2</th>
              <td>4 занятия / 8 занятий для детей 8-10 лет</td>
              <td>90 минут</td>
              <td>2.000р / 3.600р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>4 занятия / 8 занятий для детей 10-16 лет</td>
              <td>120 минут</td>
              <td>3.400р /3.800р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="flex text-center justify-center text-2xl mt-8 mb-8">
        Абонементы на гончарные занятия:
      </h2>
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Абонемент</th>
              <th className="fb">Время</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Для детей 6-9 лет</td>
              <td>90 мин</td>
              <td>3.600р</td>
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
              <th>2</th>
              <td>Для детей 9-16 лет </td>
              <td>1 час 45 минут</td>
              <td>4200р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Для взрослых</td>
              <td>120 минут</td>
              <td>5000р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}
