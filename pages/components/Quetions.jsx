import React from 'react'

const Quetions = () => {






  return (
    <>
      <div className="max-w-3xl mx-auto mt-20 mb-20" id="quetion">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold ">
            Что входит в <span className="text-orange-600">стоимость?</span>
          </div>
          <div className="collapse-content text-md">
            Защитный комплект: скатерти, перчатки, фартуки и салфетки;
            профессиональное сопровождение; подробный инструктаж. Создание
            творческой и дружелюбной атмосферы; все необходимые материалы,
            канцелярия или ингредиенты, которые необходимы для создания
            творческого шедевра. Чай и кофе с вкусняшками.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Сколько по <span className="text-orange-600">времени</span> проходит
            занятие?
          </div>
          <div className="collapse-content text-md">
            В среднем длительность мастер-класса получается 1,5–2 часа, но есть
            мастер-классы, которые могут занять 2,5–3 часа для взрослых.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Нужно ли{" "}
            <span className="text-orange-600">покупать самому материалы?</span>
          </div>
          <div className="collapse-content text-md">Нет</div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Как я могу <span className="text-orange-600">записаться</span> на
            мероприятие?
          </div>
          <div className="collapse-content text-md">
            Записаться можно по телефону 89049017926 через телеграм или ватсап.
            Удобный переход в лс по ссылке внизу и вверху сайта.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Работаете ли вы с{" "}
            <span className="text-orange-600">юридическими организациями?</span>
          </div>
          <div className="collapse-content text-md">
            Да, мы работаем с юридическими организациями и оказываем услуги как
            в нашей уютной студии, так и делаем выездные мастер-классы.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            С какого <span className="text-orange-600">возраста</span> можно
            прийти на ваше занятие?
          </div>
          <div className="collapse-content text-md">
            {" "}
            Мы обучаем взрослых и детей с 4-х лет.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Если{" "}
            <span className="text-orange-600">ребенок c инвалидностью</span>{" "}
            сможет ли он участвовать?
          </div>
          <div className="collapse-content text-md">
            {" "}
            Да, в нашем здании есть лифт, поэтому наши мастер-классы и занятия
            доступны для маломобильных художников.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold text-orange-600">
            Способы оплаты
          </div>
          <div className="collapse-content text-md">
            Наличные, перевод. По запросу предоставляется чек.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold ">
            У меня совсем <span className="text-orange-600">нет опыта,</span>{" "}
            получится ли?
          </div>
          <div className="collapse-content text-md">
            Конечно! Главная цель наших занятий — получение удовольствия от
            процесса, остальное прикладывается!
          </div>
        </div>
      </div>

      <div className="px-4 md:py-20 lg:py-24 ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Почему у нас хорошо?
          </h2>

          <div className="grid grid-cols-1 gap-8 ">
              <div
                className="relative bg-white/90 border-l-4 border-orange-400 rounded-r-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-600 group"
              >
                {/* Декоративный элемент */}

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-700 transition-colors">
                      Атмосфера
                    </h3>
                    <p className="text-gray-700">
                      Для нас это осознанная работа: от света и музыки до
                      подбора материалов. Мы создаём среду, где вы чувствуете
                      себя на своей волне и можете творить свободно. Убедитесь
                      сами, прочтите отзывы
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quetions