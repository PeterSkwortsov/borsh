import React from 'react'

const Map = () => {
  return (
    <>
      <div className=" flex auto-0 justify-center p-5">
        <a
          href="https://yandex.ru/maps/?um=constructor%3Ae7536982294fb5044c6213c28645d8ec01ff8143e10859ec65c98a6f58f791e3&amp;source=constructorStatic"
          target="_blank"
        >
          <img
            src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ae7536982294fb5044c6213c28645d8ec01ff8143e10859ec65c98a6f58f791e3&amp;width=600&amp;height=450&amp;lang=ru_RU"
            alt=""
            className="border: 0"
          />
        </a>
      </div>

    </>
  );
}

export default Map