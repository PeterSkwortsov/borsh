import Image from 'next/image';

export default function ComeToMe() {
  return (
    <>
      <div className="hero mb-20 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/easel.jpeg"
            unoptimized
            width={200}
            height={100}
            alt="Picture of the author"
            style={{ width: "100%" }}
            className=" rounded-lg shadow-2xl max-w-lg"
          />
          <div>
            <h6 className="text-2xl font-bold pt-4">Приходите ко мне если:</h6>
            <ul className="list-disc pr-1 pl-5">
              <li className="mt-5 pb-2">
                Хотите узнаете о различных техниках и стилях рисования, о
                свойствах материалов и о том, как правильно их использовать. Это
                расширит ваш кругозор и поможет лучше понимать искусство.
              </li>
              <li className="pb-2 ">
                Есть желание пообщаться с единомышленниками, поделиться мыслями
                и идеями, рассказать о своих страхах и переживаниях в творческой
                направленности.
              </li>
              <li className="pb-2">
                Хотите привить ребенку не только навыки рисования, но и
                уверенность в себе, учится работать в команде и выражать свои
                эмоции через творчество.
              </li>
              <li className="pb-2 ">
                Нужна практика и совершенствование имеющихся навыков. Чем больше
                вы будете практиковаться, тем увереннее будете чувствовать себя
                для рещения своих задач.
              </li>
              <li className="text-balance">
                Хотите попробовать отдохнуть, снять стресс через творчество.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


