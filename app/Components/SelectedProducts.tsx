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

import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function SelectedProducts() {
  return (
    <AnimatedSection id="selected-products" className="py-20">
      <AnimatedContainer className="px-12">
        <div className="flex items-start justify-between w-full gap-6 mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-xl text-gray-700">Избрани продукти</span>
          </AnimatedItem>
          {/* Right side */}
          <AnimatedItem className="max-w-[50%] text-right text-4xl">
            <span className="font-semibold text-gray-900">
              Всеки продукт е диалог между дизайн и цел,
            </span>
            <span className="text-gray-400">
              {" "}превръщайки видение в значими цифрови преживявания
            </span>
          </AnimatedItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <AnimatedItem key={p.title} delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-4 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-xl font-light text-gray-900">
                    {p.title}
                  </h3>

                  <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                    {p.category}
                    <span className="text-red-500">↗</span>
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

