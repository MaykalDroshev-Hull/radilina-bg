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
      <div className="w-full px-12 mb-12">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Caption, Subtitle, and Image */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-xl text-gray-700">Често задавани въпроси</span>
            </div>
            
            <h3 className="text-4xl leading-tight">
              <span className="font-semibold text-gray-900">
                Ясни обяснения как работим,
              </span>
              <span className="text-gray-500">
                {" "}какво използваме и какво можете да очаквате
              </span>
            </h3>

            <div className="rounded-3xl overflow-hidden mt-4">
              <img
                src="/images/slide-3.jpg"
                alt="Керамични изделия"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - FAQ Items (All Expanded) */}
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex gap-4 hover:shadow-md transition-shadow">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
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

