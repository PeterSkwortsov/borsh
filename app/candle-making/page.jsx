"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export default function CandleMaking() {
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

      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Декор свечей и гипсовых кашпо</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Свечи в гипсовом кашпо</td>
              <td>1800 Р</td>

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
              <td>Свечи в стеклянном стакане</td>
              <td>2.000р</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Свечи в скорлупе кокоса</td>
              <td>2.200р</td>
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
        <p className="text-md flex text-center justify-center m-5 mt-8">
          Индивидуальный мастер-класс - 2.700р/человек.
        </p>
      </div>

      <Footer />
    </>
  );
}
