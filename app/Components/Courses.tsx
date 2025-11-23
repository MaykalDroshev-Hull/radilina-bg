import { Clock, Users, Award, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

const courses = [
  {
    title: "Въведение в грънчарството",
    duration: "4 седмици",
    level: "Начинаещи",
    participants: "До 6 участници",
    description: "Научете основите на работата с глина и грънчарското колело",
    image: "/images/slide-3.jpg",
    highlights: ["Основни техники", "Практика с колело", "Собствен проект"],
    price: "280 лв",
    featured: false,
  },
  {
    title: "Майсторски клас: Традиционна керамика",
    duration: "8 седмици",
    level: "Напреднали",
    participants: "До 4 участници",
    description: "Задълбочено обучение в традиционните троянски техники и мотиви",
    image: "/images/kana.jpg",
    highlights: ["Троянски мотиви", "Глазиране", "Художествена декорация"],
    price: "560 лв",
    featured: true,
  },
  {
    title: "Семейна работилница",
    duration: "1 ден",
    level: "Всички нива",
    participants: "2-4 човека",
    description: "Създайте незабравими спомени заедно със семейството",
    image: "/images/guvech.jpg",
    highlights: ["Семейно забавление", "За деца 8+", "Вземете творбите си"],
    price: "120 лв",
    featured: false,
  },
];

export default function Courses() {
  return (
    <AnimatedSection id="courses" className="py-12 md:py-20">
      <AnimatedContainer className="px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-6 mb-8 md:mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-xl text-gray-700 font-body">Курсове по грънчарство</span>
          </AnimatedItem>
          
          {/* Right side */}
          <AnimatedItem className="md:max-w-[50%] text-left md:text-right text-xl md:text-4xl">
            <span className="font-semibold text-gray-900 font-headline">
              Потопете се в света на традиционната керамика,
            </span>
            <span className="text-gray-400 font-headline">
              {" "}където вековни умения оживяват под вашите ръце
            </span>
          </AnimatedItem>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {courses.map((course, index) => (
            <AnimatedItem key={course.title} delay={index * 0.1}>
              <div className={`
                relative h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden
                border transition-all duration-300
                ${course.featured 
                  ? 'border-[#F4A7A7] shadow-lg lg:scale-105 lg:-translate-y-2' 
                  : 'border-gray-100 hover:shadow-lg hover:-translate-y-1'
                }
              `}>
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-[#F4A7A7] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 font-body">
                    <Sparkles className="w-3 h-3" />
                    Популярен избор
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Level badge on image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold font-body">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 font-headline">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4 font-body leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center gap-2.5 text-sm text-gray-700 font-body">
                      <Clock className="w-4 h-4 text-[#F4A7A7] flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-700 font-body">
                      <Users className="w-4 h-4 text-[#F4A7A7] flex-shrink-0" />
                      <span>{course.participants}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <BookOpen className="w-4 h-4 text-[#F4A7A7]" />
                      <span className="text-xs font-semibold text-gray-700 font-body">Какво ще научите:</span>
                    </div>
                    <ul className="space-y-1.5">
                      {course.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-gray-600 flex items-start gap-2 font-body">
                          <span className="text-[#F4A7A7] mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500 font-body">Цена</div>
                      <div className="text-2xl font-bold text-gray-900 font-headline">{course.price}</div>
                    </div>
                    <button className={`
                      px-5 py-2.5 rounded-full text-sm font-semibold
                      transition-all duration-300 flex items-center gap-2 font-body
                      ${course.featured
                        ? 'bg-[#F4A7A7] text-white hover:bg-[#E89696] shadow-md'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                      }
                    `}>
                      Запиши се
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <AnimatedItem>
          <div className="bg-gradient-to-br from-[#FFF7F7] to-[#E8F6EF] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-[#F4A7A7]/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-[#F4A7A7]" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 font-headline">
                    Не сте сигурни кой курс да изберете?
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-700 font-body leading-relaxed">
                  Свържете се с нас за безплатна консултация. Ще ви помогнем да намерите 
                  курса, който най-добре отговаря на вашите интереси и умения.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                <button className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-body whitespace-nowrap">
                  Свържете се с нас
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors border border-gray-200 font-body whitespace-nowrap">
                  Вижте разписание
                </button>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* Additional Info */}
        <AnimatedItem>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#E8F6EF] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-[#CFE6D7]" style={{ color: '#4A9D7E' }} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 font-headline text-sm md:text-base">Сертификат</h4>
                <p className="text-xs md:text-sm text-gray-600 font-body">Получавате официален сертификат след приключване</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#FFF7F7] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#F4A7A7]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 font-headline text-sm md:text-base">Малки групи</h4>
                <p className="text-xs md:text-sm text-gray-600 font-body">Индивидуално внимание за всеки участник</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#E8DCCF] flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-[#C1AFA3]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 font-headline text-sm md:text-base">Материали включени</h4>
                <p className="text-xs md:text-sm text-gray-600 font-body">Всички необходими материали осигурени</p>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </AnimatedContainer>
    </AnimatedSection>
  );
}

