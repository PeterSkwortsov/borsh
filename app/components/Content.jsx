import React from 'react'
import Image from 'next/image';
import Utp from './Utp';
const ContentPrice = () => {
  return (
    <>
      <h5 className="text-2xl font-bold flex text-center justify-center m-5 mt-16">
        Занятия проходят в просторной светлой мастерской
      </h5>

<Utp />

      <div className="carousel carousel-center rounded-box mt-10">
        <div className="carousel-item">
          <Image
            src="/11.jpeg"
            width={200}
            height={100}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/12.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/13.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/14.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/15.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/16.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/13.jpeg"
            width={200}
            height={80}
            alt="Picture of the author"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
      </div>

    </>
  );
};

export default ContentPrice