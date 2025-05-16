import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function WoodBurningPage() {
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
      <div className="overflow-x-auto md:max-w-2/3 m-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="fb">Название</th>
              <th className="fb">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Мастер-класс по выжиганию на заготовке А5</td>
              <td>1.000р</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Мастер-класс по выжиганию на заготовке А4</td>
              <td>1.200р</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Мастер-класс по выжиганию на заготовке 25*35 см</td>
              <td>1.500р</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Мастер-класс по выжиганию на заготовке А3</td>
              <td>2.000р</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Индивидуальный мастер-класс</td>
              <td>2.700р</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}
