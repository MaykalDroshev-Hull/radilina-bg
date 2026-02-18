import Image from 'next/image';
import { Clock, Users, Award, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

const courses = [
  {
    title: "Демонстрация на източване на керамика",
    duration: "Демонстрация",
    level: "За деца и туристи",
    participants: "Подходящо за всички възрасти",
    description: "Заповядайте на интересно и забавно преживяване с глина! Ще видите как на грънчарското колело, с помощта на вода и сръчни ръце, меката глина се превръща в истинско керамично изделие.",
    image: "/branding/Radilina branding_AP-191.avif",
    highlights: [
      "Децата ще се докоснат до традиционен български занаят",
      "Туристите ще открият магията на троянската керамика",
      "Създадена от глина, вода, ръце и огън"
    ],
    price: "15 €",
    priceBgn: "29.34 лв",
    priceNote: "",
    priceAlt: "",
    priceAltNote: "",
    upsell: "",
    featured: false,
  },
  {
    title: "Пакет \"Точене и шарене\"",
    duration: "Комбинирано преживяване",
    level: "За деца и туристи",
    participants: "Идеално за деца, семейства и гости",
    description: "Елате и се потопете в света на троянската керамика с едно комбинирано преживяване, което включва демонстрация на източване на керамика на грънчарско колело с майстор Радина и декориране и шарене на троянска капка с майстор Илина Илиева.",
    image: "/branding/Radilina branding_AP-81.avif",
    highlights: [
      "Демонстрация на източване с майстор Радина",
      "Декориране и шарене с майстор Илина Илиева",
      "Ще се докоснете до магията на глина, вода, ръце и огън"
    ],
    price: "20 €",
    priceBgn: "39.12 лв",
    priceNote: "",
    priceAlt: "",
    priceAltNote: "",
    upsell: "",
    featured: true,
  },
  {
    title: "Демонстрация на декориране и шарене на троянска капка",
    duration: "Демонстрация",
    level: "За деца и туристи",
    participants: "Подходящо за всички възрасти",
    description: "Заповядайте на цветна и интересна демонстрация на традиционно декориране и шарене на троянска капка. С помощта на майстор Илина Илиева ще видите как се създават характерните троянски шарки и орнаменти.",
    image: "/branding/Radilina branding_AP-120.avif",
    highlights: [
      "Децата ще се забавляват",
      "Туристите ще се докоснат до магията на троянската керамика",
      "Български занаятчийски традиции"
    ],
    price: "15 €",
    priceBgn: "29.34 лв",
    priceNote: "",
    priceAlt: "",
    priceAltNote: "",
    upsell: "",
    featured: false,
  },
];

export default function Courses() {
  return (
    <AnimatedSection id="courses" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2 md:gap-3">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">Курсове по грънчарство</span>
          </AnimatedItem>
          
          {/* Right side */}
          <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
            <span className="font-semibold text-white font-headline leading-tight">
              Потопете се в света на традиционната керамика,
            </span>
            <span className="text-gray-500 font-headline leading-tight">
              {" "}където вековни умения оживяват под вашите ръце
            </span>
          </AnimatedItem>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
          {courses.map((course, index) => (
            <AnimatedItem key={course.title} delay={index * 0.1}>
              <div className={`
                relative h-full bg-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden
                border transition-all duration-300
                ${course.featured 
                  ? 'border-[#F4A7A7] shadow-lg md:shadow-xl lg:scale-105 lg:-translate-y-2' 
                  : 'border-gray-800 hover:shadow-lg hover:-translate-y-1'
                }
              `}>
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute top-4 md:top-5 right-4 md:right-5 z-10 bg-[#F4A7A7] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-1.5 font-body">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                    Комбиниран пакет
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Level badge on image */}
                  <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5">
                    <span className="bg-black/80 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold font-body">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 lg:p-7">
                  <h3 className="text-xl md:text-xl lg:text-2xl font-semibold text-white mb-3 md:mb-3.5 font-headline">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-5 font-body leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="space-y-2.5 md:space-y-3 mb-4 md:mb-5">
                    <div className="flex items-center gap-2.5 md:gap-3 text-sm md:text-base text-gray-300 font-body">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#F4A7A7] flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5 md:gap-3 text-sm md:text-base text-gray-300 font-body">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-[#F4A7A7] flex-shrink-0" />
                      <span>{course.participants}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 md:pt-5 border-t border-gray-800">
                    <div className="mb-4">
                      <div className="text-sm md:text-base text-gray-500 font-body mb-3">Цена</div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl md:text-3xl font-bold text-white font-headline">{course.price}</div>
                        {course.priceBgn && (
                          <div className="text-sm md:text-base text-gray-500 font-body">{course.priceBgn}</div>
                        )}
                        {course.priceNote && (
                          <div className="text-sm md:text-base text-gray-500 font-body">({course.priceNote})</div>
                        )}
                      </div>
                      {course.priceAlt && (
                        <div className="flex items-baseline gap-2 mt-2">
                          <div className="text-2xl md:text-3xl font-bold text-white font-headline">{course.priceAlt}</div>
                          {course.priceAltNote && (
                            <div className="text-sm md:text-base text-gray-500 font-body">({course.priceAltNote})</div>
                          )}
                        </div>
                      )}
                      {course.upsell && (
                        <div className="text-sm text-[#F4A7A7] font-semibold font-body mt-2">{course.upsell}</div>
                      )}
                    </div>
                    <button className={`
                      w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold
                      transition-all duration-300 flex items-center justify-center gap-2 font-body
                      active:scale-95
                      ${course.featured
                        ? 'bg-[#F4A7A7] text-white hover:bg-[#E89696] shadow-md'
                        : 'bg-white text-black hover:bg-gray-200'
                      }
                    `}>
                      Запиши се
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedItem>
          <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Award className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#F4A7A7]" />
                  <h3 className="text-xl md:text-xl lg:text-2xl font-semibold text-white font-headline">
                    Не сте сигурни кой курс да изберете?
                  </h3>
                </div>
                <p className="text-base md:text-base lg:text-lg text-gray-400 font-body leading-relaxed">
                  Свържете се с нас за безплатна консултация. Ще ви помогнем да намерите 
                  курса, който най-добре отговаря на вашите интереси и умения.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                <button className="px-6 md:px-7 py-3 md:py-3.5 bg-white text-black rounded-full text-sm md:text-base font-semibold hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-2 font-body whitespace-nowrap">
                  Свържете се с нас
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* Additional Info */}
        <AnimatedItem>
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-[#1a1614] rounded-xl md:rounded-2xl border border-gray-800 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-[#F4A7A7]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 md:mb-1.5 font-headline text-sm md:text-base lg:text-lg">Суров продукт</h4>
                <p className="text-xs md:text-sm lg:text-base text-gray-400 font-body leading-relaxed">Само за декорация, не може да се мокри</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-[#1a1614] rounded-xl md:rounded-2xl border border-gray-800 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-[#F4A7A7]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 md:mb-1.5 font-headline text-sm md:text-base lg:text-lg">Изпечен продукт</h4>
                <p className="text-xs md:text-sm lg:text-base text-gray-400 font-body leading-relaxed">Готов за пълна употреба във вашия дом</p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-[#1a1614] rounded-xl md:rounded-2xl border border-gray-800 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#F4A7A7]" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1 md:mb-1.5 font-headline text-sm md:text-base lg:text-lg">Материали включени</h4>
                <p className="text-xs md:text-sm lg:text-base text-gray-400 font-body leading-relaxed">Всички необходими материали осигурени</p>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
