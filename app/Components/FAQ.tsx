import Image from 'next/image';

const faqData = [
  {
    question: "Може ли керамичният съд да се използва във фурна?",
    answer: "Да, подходящ е за използване във фурна. Поставя се в студена фурна и се загрява постепенно."
  },
  {
    question: "Подходящ ли е за микровълнова фурна?",
    answer: "Да, керамичният съд може да се използва в микровълнова фурна."
  },
  {
    question: "Може ли да се мие в съдомиялна машина?",
    answer: "Да, съдът е подходящ за почистване в съдомиялна машина."
  },
  {
    question: "Може ли да се използва върху котлон или открит огън?",
    answer: "Не, не е подходящ за директен контакт с котлон или открит огън."
  },
  {
    question: "Трябва ли да се поставя в предварително загрята фурна?",
    answer: "Не. Препоръчва се съдът да се поставя в студена фурна, за да се избегне термичен шок."
  },
  {
    question: "Как да се избегне напукване на съда?",
    answer: "Избягвайте резки температурни промени и не поставяйте горещ съд върху студени или мокри повърхности."
  },
  {
    question: "Безопасни ли са керамичните съдове за храна?",
    answer: "Да, използваните материали са подходящи за контакт с храни."
  },
  {
    question: "Задържа ли керамиката топлината?",
    answer: "Да, керамиката задържа топлината дълго време и спомага за равномерно готвене."
  },
  {
    question: "Може ли да се използва за сервиране?",
    answer: "Да, керамичните съдове са подходящи както за готвене, така и за сервиране."
  },
  {
    question: "Има ли разлика между глина и керамика?",
    answer: "Глината е естествен материал, а керамиката е обработена и изпечена глина, подходяща за домакинска употреба."
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
              <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">Често задавани въпроси</span>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-4xl leading-tight">
              <span className="font-semibold text-white font-headline">
                Ясни обяснения как работим,
              </span>
              <span className="text-gray-500 font-headline">
                {" "}какво използваме и какво можете да очаквате
              </span>
            </h3>

            {/* Images Grid - Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 lg:gap-5 mt-2 md:mt-4 lg:mt-6">
              {/* First Image - Full width on mobile, spans 2 columns on tablet, full width on desktop */}
              <div className="relative rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden group aspect-[3/2] sm:col-span-2 lg:col-span-1">
                <Image
                  src="/branding/Radilina branding_AP-3.avif"
                  alt="Керамични изделия"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Second Image - Full width on mobile, half width on tablet, full width on desktop */}
              <div className="relative rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden group aspect-[3/2] sm:col-span-1 lg:col-span-1">
                <Image
                  src="/branding/Radilina branding_AP-39.avif"
                  alt="Керамични изделия"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items (All Expanded) */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-4 md:p-5 lg:p-6 flex gap-3 md:gap-4 hover:shadow-md transition-all cursor-pointer border border-gray-800">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full mt-2 md:mt-2.5 flex-shrink-0"></span>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold text-white font-headline">
                    {faq.question}
                  </h4>
                  <p className="text-sm md:text-base lg:text-base text-gray-400 leading-relaxed font-body">
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
