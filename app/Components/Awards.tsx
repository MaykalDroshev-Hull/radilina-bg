"use client";

import { ExternalLink, ArrowRight, Trophy } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Awards() {
  return (
    <AnimatedSection id="awards" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2 md:gap-3">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Награди</span>
          </AnimatedItem>
          {/* Right side */}
          <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
            <span className="font-semibold text-gray-900 font-headline leading-tight">
              Дизайни, признати
            </span>
            <span className="text-gray-400 font-headline leading-tight">
              {" "}извън границите
            </span>
            <br />
            <span className="text-sm md:text-base lg:text-lg text-gray-600 font-body mt-2 md:mt-3 inline-block">
              Честваме награди и номинации, които отразяват нашия ангажимент към яснота, иновации и вечен минимализъм
            </span>
          </AnimatedItem>
        </div>
      </AnimatedContainer>

      {/* Showcase Section */}
      <section className="w-full py-6 md:py-10 lg:py-12 px-6 md:px-10 lg:px-12">
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-5 lg:gap-6">
          {/* Element 1 — Award Card (spans 2 cols on tablet/desktop) */}
          <AnimatedItem className="md:col-span-2 lg:col-span-2 lg:row-span-1 rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow p-5 md:p-7 lg:p-8 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <div className="flex flex-col gap-2 md:gap-3">
              <Trophy className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-yellow-500" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-headline mt-2">Мастер на традиционното занаятчийство 2024</h2>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-body">
              Признание за 35 години опит в ръчното керамично производство. Всички артикули се изработват
              на грънчарско колело с използване на сертифицирани материали, създавайки уникални битови
              и сувенирни изделия от Троянска керамика.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-2">
              <button className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-black text-white text-xs md:text-sm lg:text-base font-body hover:bg-gray-800 active:scale-95 transition-all">
                Вижте нашата колекция <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gray-100 text-xs md:text-sm lg:text-base font-body hover:bg-gray-200 active:scale-95 transition-all">
                Представени в национални изложби <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </AnimatedItem>

          {/* Element 2 — Large Image Placeholder (spans col 3, rows 1–2 on large screens only) */}
          <AnimatedItem className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden bg-gray-200 h-64 md:h-80 lg:h-auto group">
            <img
              src="/images/kana.jpg"
              alt="Керамична кана"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 md:p-6 lg:p-8">
              <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold drop-shadow-lg font-headline leading-tight">
                Традиция и майсторство, признати отвъд границите
              </h3>
              <p className="text-white text-xs md:text-sm lg:text-base opacity-90 drop-shadow-md mt-2 md:mt-3 font-body leading-relaxed">
                Доверени от клиенти в страната и чужбина за качество и автентичност
              </p>
            </div>
          </AnimatedItem>

          {/* Element 3 — Best UX Nominee */}
          <AnimatedItem className="md:col-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 lg:p-7 flex flex-col justify-center gap-3 md:gap-3 lg:gap-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 font-headline leading-tight">Най-добър производител на ръчна керамика</p>
            <h4 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 font-headline mt-2">Признание за качество</h4>
            <p className="text-base md:text-lg lg:text-xl font-medium text-gray-900 font-body mt-2">35 години опит в традиционното занаятчийство</p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-body mt-2 leading-relaxed">Сертифицирани материали и ръчна изработка</p>
            <a href="#" className="text-xs md:text-sm lg:text-base text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center gap-1 md:gap-1.5 mt-2 font-body">
              Вижте повече <span className="text-red-500 text-base md:text-lg">↗</span>
            </a>
          </AnimatedItem>

          {/* Element 4 — FWA Recognition */}
          <AnimatedItem className="md:col-span-1 lg:col-span-1 lg:row-span-1 rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 lg:p-7 flex flex-col justify-center gap-3 md:gap-4 group">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 font-headline leading-tight">Признание за качество 2024/2025</p>
            {/* Placeholder image */}
            <div className="overflow-hidden rounded-2xl md:rounded-[1.5rem]">
              <img
                src="/images/guvech.jpg"
                alt="Признание за качество"
                className="w-full h-48 md:h-52 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </AnimatedItem>
        </AnimatedContainer>
      </section>
    </AnimatedSection>
  );
}

