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
      <div className="flex items-start justify-between w-full gap-6 px-12 mt-12 mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-xl text-gray-700">Процес на работа</span>
        </div>
        {/* Right side */}
        <p className="max-w-[50%] text-right text-4xl">
          <span className="font-semibold text-gray-900">
            Внимателно изработване от избор на материал
          </span>
          <span className="text-gray-400">
            {" "}до финалния продукт в дома ви
          </span>
        </p>
      </div>

      {/* Grid Section */}
      <section className="w-full px-12 mb-12">
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          {/* Element 1 — Top Left */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                src={processSteps[0].image}
                alt={processSteps[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {processSteps[0].number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{processSteps[0].title}</h3>
              </div>
              <p className="text-sm text-gray-600">{processSteps[0].subtitle}</p>
            </div>
          </div>

          {/* Element 2 — Middle (spans 2 rows) */}
          <div className="col-span-1 row-span-2 rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-full overflow-hidden">
              <img
                src={processSteps[2].image}
                alt={processSteps[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {processSteps[2].number}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{processSteps[2].title}</h3>
                </div>
                <p className="text-white/90 text-sm">{processSteps[2].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Element 3 — Top Right */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                src={processSteps[1].image}
                alt={processSteps[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {processSteps[1].number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{processSteps[1].title}</h3>
              </div>
              <p className="text-sm text-gray-600">{processSteps[1].subtitle}</p>
            </div>
          </div>

          {/* Element 4 — Bottom Left */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                src={processSteps[3].image}
                alt={processSteps[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {processSteps[3].number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{processSteps[3].title}</h3>
              </div>
              <p className="text-sm text-gray-600">{processSteps[3].subtitle}</p>
            </div>
          </div>

          {/* Element 5 — Bottom Right */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img
                src={processSteps[4].image}
                alt={processSteps[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {processSteps[4].number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{processSteps[4].title}</h3>
              </div>
              <p className="text-sm text-gray-600">{processSteps[4].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-8">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-colors">
            Научете повече
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </section>
  );
}

