import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    title: "Подготовка на глината",
    subtitle: "Подбираме и подготвяме глината с подходяща плътност и еластичност за ръчна обработка",
    image: "/images/slide-3.jpg",
  },
  {
    number: 2,
    title: "Оформяне на грънчарско колело",
    subtitle: "Изделието се оформя ръчно на грънчарско колело и придобива своята основна форма",
    image: "/images/slide-3.jpg",
  },
  {
    number: 3,
    title: "Дооформяне и заглаждане",
    subtitle: "Извършват се фините корекции и заглаждане на детайлите",
    image: "/images/kana.jpg",
  },
  {
    number: 4,
    title: "Декорация (рисуване)",
    subtitle: "Всеки артикул се декорира ръчно с традиционни троянски орнаменти",
    image: "/images/slide-3.jpg",
  },
  {
    number: 5,
    title: "Първо изпичане",
    subtitle: "След декорацията изделието се изпича, за да стане здраво и устойчиво",
    image: "/images/guvech.jpg",
  },
  {
    number: 6,
    title: "Глазиране",
    subtitle: "Нанася се глазура, която придава завършен вид, цвят и защита",
    image: "/images/slide-3.jpg",
  },
  {
    number: 7,
    title: "Второ изпичане",
    subtitle: "Фиксират се глазурата и декорацията и се постига крайният резултат",
    image: "/images/guvech.jpg",
  },
  {
    number: 8,
    title: "Контрол на качеството и опаковане",
    subtitle: "Всяко изделие се проверява внимателно и се подготвя за клиентите",
    image: "/images/slide-3.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-to">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Процес на работа</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
          <span className="font-semibold text-gray-900 font-headline leading-tight">
            Внимателно изработване от избор на материал
          </span>
          <span className="text-gray-400 font-headline leading-tight">
            {" "}до финалния продукт в дома ви
          </span>
        </p>
      </div>

      {/* Grid Section */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        {/* Introductory Text */}
        <div className="mb-6 md:mb-8 lg:mb-10">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 font-body leading-relaxed max-w-4xl">
            Процесът на изработка на всяко изделие е изцяло ръчен и отнема приблизително 20 дни – от първоначалната подготовка до крайния завършен етап.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              className="md:col-span-1 lg:col-span-1 rounded-xl md:rounded-xl lg:rounded-2xl bg-white shadow-sm hover:shadow-md overflow-hidden group cursor-pointer transition-shadow"
            >
              <div className="relative h-40 md:h-48 lg:h-52 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm lg:text-base font-bold flex-shrink-0">
                    {step.number}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 font-headline">{step.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-body leading-relaxed">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <button className="flex items-center justify-center gap-2 md:gap-2.5 px-6 md:px-7 lg:px-8 py-3 md:py-3.5 rounded-full bg-black text-white text-sm md:text-base hover:bg-gray-800 active:scale-95 transition-all w-full md:w-auto font-body">
            Научете повече
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </section>

      {/* Usage Instructions Section */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="bg-gradient-to-br from-[#FFF7F7] to-white rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-[#F4A7A7]/20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-6 font-headline">
            Указания за употреба на глинен съд
          </h3>
          
          <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-700 font-body leading-relaxed">
            <p>
              Глиненият съд е подходящ за приготвяне на ястия във фурна.
              Поставяйте съда в студена фурна, след което я загрявайте постепенно.
            </p>
            
            <p>
              Избягвайте резки температурни промени.
              Не поставяйте горещ съд върху студена или мокра повърхност, за да се предотврати термичен шок.
            </p>
            
            <p>
              Съдът е подходящ за използване в микровълнова фурна.
              Може да се почиства в съдомиялна машина.
            </p>
            
            <p className="text-gray-600">
              Не е подходящ за директен контакт с открит огън или котлон.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

