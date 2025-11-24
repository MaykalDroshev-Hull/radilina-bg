const faqData = [
  {
    question: "Какви са сроковете за изработка на поръчка?",
    answer: "Стандартните продукти се изпълняват в рамките на 2-3 седмици. За персонализирани поръчки срокът може да варира от 3 до 6 седмици в зависимост от сложността."
  },
  {
    question: "Как да започна нов проект с вас?",
    answer: "Свържете се с нас чрез формата за контакт или директно по телефона. Ще обсъдим вашите изисквания, предпочитания и специфични детайли за проекта."
  },
  {
    question: "Каква работа правите за вашите клиенти?",
    answer: "Изработваме ръчна троянска керамика - от битови съдове до декоративни изделия и персонализирани подаръци. Всеки артикул е уникален и изработен с внимание към детайла."
  },
  {
    question: "Колко време отнема типичен проект?",
    answer: "Процесът от избор на материали до финалното изпичане отнема между 2-4 седмици. Сложни проекти с детайлна декорация може да изискват повече време."
  },
  {
    question: "Предлагате ли услуги за начинаещи или професионалисти?",
    answer: "Работим както с частни клиенти, така и с бизнес партньори. Предлагаме и обучения за желаещи да научат традиционното занаятчийство."
  }
];

export default function FAQ() {
  return (
    <section id="faq">
      {/* 50/50 Grid Section */}
      <div className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Caption, Subtitle, and Image */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
              <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Често задавани въпроси</span>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-4xl leading-tight">
              <span className="font-semibold text-gray-900 font-headline">
                Ясни обяснения как работим,
              </span>
              <span className="text-gray-500 font-headline">
                {" "}какво използваме и какво можете да очаквате
              </span>
            </h3>

            <div className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden mt-2 md:mt-4 lg:mt-6 group">
              <img
                src="/images/slide-3.jpg"
                alt="Керамични изделия"
                className="w-full h-64 md:h-80 lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - FAQ Items (All Expanded) */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-4 md:p-5 lg:p-6 flex gap-3 md:gap-4 hover:shadow-md transition-all cursor-pointer">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full mt-2 md:mt-2.5 flex-shrink-0"></span>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 font-headline">
                    {faq.question}
                  </h4>
                  <p className="text-sm md:text-base lg:text-base text-gray-600 leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

