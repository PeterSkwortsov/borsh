import React from 'react'

const Quetions = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-20 mb-20" id="quetion">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Что входит в стоимость?
          </div>
          <div className="collapse-content text-sm">
            Защитный комплект: скатерти, перчатки, фартуки и салфетки;
            Профессиональное сопровождение; Подробный инструктаж. Создание
            творческой и дружелюбной атмосферы; Все
            необходимые материалы, канцелярия или ингредиенты, которые
            необходимы для создания творческого шедевра. Чай и кофе с
            вкусняшками.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Сколько по времени проходит занятие?
          </div>
          <div className="collapse-content text-sm">
            В среднем, длительность мастер-класса получается 1,5-2 часа, но есть
            мастер-классы которые могут занять 2,5-3 часа для взрослых.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Нужно ли покупать самому материалы?
          </div>
          <div className="collapse-content text-sm">Нет</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Как я могу записаться на меропрятие?
          </div>
          <div className="collapse-content text-sm">
            Записаться можно по телефону 89049017926 через телеграм или ватсап
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Работаете ли вы с юридическими организациями?
          </div>
          <div className="collapse-content text-sm">
            Да, мы работаем с юридическими организациями и оказываем услуги как
            в нашей уютной студии, так и делаем выездные мастер-классы.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            С какого возраста можно прийти на ваше занятие?
          </div>
          <div className="collapse-content text-sm">
            {" "}
            Мы обучаем взрослых и детей с 4-х лет.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Если ребенок c инвалидностью сможет ли он участвовать?
          </div>
          <div className="collapse-content text-sm">
            {" "}
            Да, в нашем здании есть лифт, поэтому наши мастер-классы и занятия
            доступны для маломобильных художников.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">Способы оплаты</div>
          <div className="collapse-content text-sm">Наличные, перевод. По запросу предоставляется чек.</div>
        </div>
      </div>
    </>
  );
}

export default Quetions