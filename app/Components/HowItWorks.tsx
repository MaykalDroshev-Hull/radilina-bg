import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    title: "Избор на материали",
    subtitle: "Сертифицирани глини и естествени бои",
    image: "/images/slide-3.jpg",
  },
  {
    number: 2,
    title: "Грънчарско колело",
    subtitle: "Ръчно изработване на всеки артикул",
    image: "/images/slide-3.jpg",
  },
  {
    number: 3,
    title: "Художествена обработка",
    subtitle: "Традиционни троянски мотиви и декорация",
    image: "/images/kana.jpg",
  },
  {
    number: 4,
    title: "Изсушаване",
    subtitle: "Естествено изсушаване за оптимално качество",
    image: "/images/slide-3.jpg",
  },
  {
    number: 5,
    title: "Изпичане",
    subtitle: "Високотемпературно изпичане във фурна",
    image: "/images/guvech.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-to">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 px-6 md:px-12 mt-8 md:mt-12 mb-8 md:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-xl text-gray-700 font-body">Процес на работа</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[50%] text-left md:text-right text-xl md:text-4xl">
          <span className="font-semibold text-gray-900 font-headline">
            Внимателно изработване от избор на материал
          </span>
          <span className="text-gray-400 font-headline">
            {" "}до финалния продукт в дома ви
          </span>
        </p>
      </div>

      {/* Grid Section */}
      <section className="w-full px-6 md:px-12 mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
          {/* Element 1 — Top Left */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={processSteps[0].image}
                alt={processSteps[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {processSteps[0].number}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-headline">{processSteps[0].title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-body">{processSteps[0].subtitle}</p>
            </div>
          </div>

          {/* Element 2 — Middle (spans 2 rows on desktop) */}
          <div className="md:col-span-1 md:row-span-2 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={processSteps[2].image}
                alt={processSteps[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">
                    {processSteps[2].number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white font-headline">{processSteps[2].title}</h3>
                </div>
                <p className="text-white/90 text-sm font-body">{processSteps[2].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Element 3 — Top Right */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={processSteps[1].image}
                alt={processSteps[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {processSteps[1].number}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-headline">{processSteps[1].title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-body">{processSteps[1].subtitle}</p>
            </div>
          </div>

          {/* Element 4 — Bottom Left */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={processSteps[3].image}
                alt={processSteps[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {processSteps[3].number}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-headline">{processSteps[3].title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-body">{processSteps[3].subtitle}</p>
            </div>
          </div>

          {/* Element 5 — Bottom Right */}
          <div className="md:col-span-1 md:row-span-1 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={processSteps[4].image}
                alt={processSteps[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {processSteps[4].number}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-headline">{processSteps[4].title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-body">{processSteps[4].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-6 md:mt-8">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-colors w-full md:w-auto font-body">
            Научете повече
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </section>
  );
}

