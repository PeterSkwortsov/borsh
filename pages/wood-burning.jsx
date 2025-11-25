import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
export default function WoodBurningPage() {
  return (
    <>
      <Head>
        <title>Мастер-класс по выжиганию по дереву</title>

        <meta
          name="description"
          content="Мастер-класс по выжиганию на деревянных листах форматов А3,А4,А5"
        />

        <meta
          property="og:title"
          content="Мастер-класс по выжиганию по дереву"
        />

        <meta
          property="og:description"
          content="Выжигание - один из древнейших видов творчества!Процесс приносит умиротворение и спокойствие."
        />

        <meta property="og:image" content="/vika.png" />

        <meta property="og:url" content="https://borsch-art.ru/wood-burning/" />
      </Head>

      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumbs text-sm m-2"
      >
        <ul>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button className="indicator-item badge bg-orange-600 text-white border-none">
              <Link href={`./#5`} itemProp="item" title="Главная">
                <span itemProp="name">Главная</span>
              </Link>
              <meta itemProp="position" content="0"></meta>
            </button>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <button>
              <Link
                href={`https://borsch-art.ru/wood-burning/`}
                itemProp="item"
                title="Выжигание по дереву"
              >
                <span itemProp="name">Выжигание по дереву</span>
              </Link>
              <meta itemProp="position" content="1"></meta>
            </button>
          </li>
        </ul>
      </ol>

      <h2 className="text-center justify-center m-5 mt-8 text-2xl font-extrabold">
        <span className="text-orange-600">Мастер-класс</span> по выжиганию{" "}
        <span className="text-orange-600">по дереву</span>
        <br></br>в Нижнем Новгороде
      </h2>
      <div
        className="overflow-x-auto md:max-w-2/3 m-auto mb-10 mt-7"
        role="sectionhead"
      >
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
              <td>1.000₽</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Мастер-класс по выжиганию на заготовке А4</td>
              <td>1.200₽</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Мастер-класс по выжиганию на заготовке 25*35 см</td>
              <td>1.500₽</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Мастер-класс по выжиганию на заготовке А3</td>
              <td>2.000₽</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Индивидуальный мастер-класс</td>
              <td>2.700₽</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-center mb-8 justify-center">
        <div>
          <div className="flex flex-row items-center center m-auto cursor-pointer">
            <div
              className="bg-orange-100 p-5 px-10 w-full flex items-center rounded-4xl text-white
"
            >
              <a href="https://t.me/vika_borsch99">
                <p className="text-black font-bold text-lg flex text-center center justify-center">
                  👉 Забронировать день и время 👈
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
