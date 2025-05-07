import Image from 'next/image';

export default function ComeToMe() {
  return (
    <>
      <div className="hero mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/easel.jpeg"
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
                На занятиях вы узнаете о различных техниках и стилях рисования,
                о свойствах материалов и о том, как правильно их использовать.
                Это расширит ваш кругозор и поможет лучше понимать искусство.
              </li>
              <li className="pb-2 ">
                Есть желание пообщаться с единомышленниками, поделиться мыслями
                и идеями, рассказать о своих страхах и переживаниях в творческой
                направленности.
              </li>
              <li className="pb-2">
                Дети со мной развивают не только навыки рисования, но и
                уверенность в себе, учатся работать в команде и выражать свои
                эмоции через творчество.
              </li>
              <li className="pb-2 ">
                Практика и совершенствование навыков. Чем больше вы будете
                практиковаться, тем увереннее будете чувствовать себя в
                творчестве.
              </li>
              <li className="text-balance">
                Студия — место для выражения мыслей и чувств через творчество,
                что помогает снять стресс.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


