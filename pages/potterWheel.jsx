'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function PotterWheel() {
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
            style={{ width: "50%" }}
          />
          Назад
        </Link>
      </button>
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Название</th>
              <th className="fb">Размер изделия</th>
              <th className="fb">Цена</th>
              <th className="fb">Изображение</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 20 см или в высоту 15 см</td>
              <td>2.000р</td>
              <td>
                {" "}
                <Image
                  src="/4.jpeg"
                  unoptimized
                  width={140}
                  height={140}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Мастер-класс на гончарном круге</td>
              <td>Диаметр до 25 см или в высоту 20 см</td>
              <td>2.500р</td>
              <td>
                {" "}
                <Image
                  src="/3.jpeg"
                  unoptimized
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "50%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-md flex text-center justify-center m-5 mt-8">
        Индивидуальное занятие для одного человека - 3.400р<br></br>
        Для двоих - 2.800р/чел.<br></br>
        Три и больше - 2.500р/чел.
        <br></br>
        Гончарное свидание для двоих - 5.000р.
      </p>

     
    </>
  );
}
