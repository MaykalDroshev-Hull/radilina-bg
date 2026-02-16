const projects = [
  {
    title: "Оливеник каруца",
    category: "Оливерници",
    image: "/images/Olivernik karuca.jpg",
  },
  {
    title: "Чаша за ракия",
    category: "Чаши и халби",
    image: "/images/rakia cup.jpg",
  },
  {
    title: "Среден буркан",
    category: "Буркани",
    image: "/images/Sreden Burkan.jpg",
  },
  {
    title: "Тиган с капак",
    category: "Тигани",
    image: "/images/Tigan s kapak.jpg",
  },
];

import Image from 'next/image';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function SelectedProducts() {
  return (
    <AnimatedSection id="selected-products" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2 md:gap-3">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          </AnimatedItem>
          {/* Right side */}
          <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
            <span className="font-semibold text-white font-headline leading-tight">
              Всеки продукт е диалог между дизайн и цел,
            </span>
            <span className="text-gray-500 font-headline leading-tight">
              {" "}превръщайки видение в значими цифрови преживявания
            </span>
          </AnimatedItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {projects.map((p, index) => (
            <AnimatedItem key={p.title} delay={index * 0.1}>
              <div className="bg-[#0a0a0a] rounded-3xl md:rounded-[2rem] lg:rounded-3xl p-3 md:p-4 lg:p-5 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                <div className="overflow-hidden rounded-2xl md:rounded-[1.5rem]">
                  <div className="relative h-56 md:h-56 lg:h-64">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 md:mt-4 lg:mt-5">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white font-body">
                    {p.title}
                  </h3>

                  <span className="text-xs md:text-sm lg:text-base font-bold text-white flex items-center gap-1 md:gap-1.5 font-body whitespace-nowrap">
                    {p.category}
                    <span className="text-red-500 text-base md:text-lg">↗</span>
                  </span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
