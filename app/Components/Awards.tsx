"use client";

import { ExternalLink, ArrowRight, Trophy } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Awards() {
  return (
    <AnimatedSection id="awards" className="py-12 md:py-20">
      <AnimatedContainer className="px-6 md:px-12 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-xl text-gray-700 font-body">Награди</span>
          </AnimatedItem>
          {/* Right side */}
          <AnimatedItem className="md:max-w-[50%] text-left md:text-right text-xl md:text-4xl">
            <span className="font-semibold text-gray-900 font-headline">
              Дизайни, признати
            </span>
            <span className="text-gray-400 font-headline">
              {" "}извън границите
            </span>
            <br />
            <span className="text-sm md:text-base text-gray-600 font-body">
              Честваме награди и номинации, които отразяват нашия ангажимент към яснота, иновации и вечен минимализъм
            </span>
          </AnimatedItem>
        </div>
      </AnimatedContainer>

      {/* Showcase Section */}
      <section className="w-full py-6 md:py-12 px-6 md:px-12">
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
          {/* Element 1 — Award Card (spans col 1–2, row 1 on desktop) */}
          <AnimatedItem className="md:col-span-2 md:row-span-1 rounded-2xl bg-white shadow-sm p-5 md:p-6 flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col gap-2">
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
              <h2 className="text-xl md:text-3xl font-semibold font-headline mt-2">Мастер на традиционното занаятчийство 2024</h2>
            </div>
            <p className="text-sm md:text-sm text-gray-600 leading-relaxed font-body">
              Признание за 35 години опит в ръчното керамично производство. Всички артикули се изработват
              на грънчарско колело с използване на сертифицирани материали, създавайки уникални битови
              и сувенирни изделия от Троянска керамика.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-2">
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs md:text-sm font-body">
                Вижте нашата колекция <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-xs md:text-sm font-body">
                Представени в национални изложби <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </AnimatedItem>

          {/* Element 2 — Large Image Placeholder (spans col 3, rows 1–2 on desktop) */}
          <AnimatedItem className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden bg-gray-200 h-64 md:h-auto">
            <img
              src="/images/kana.jpg"
              alt="Керамична кана"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-4 md:p-6">
              <h3 className="text-white text-base md:text-xl font-semibold drop-shadow font-headline">
                Традиция и майсторство, признати отвъд границите
              </h3>
              <p className="text-white text-xs md:text-sm opacity-90 drop-shadow mt-2 font-body">
                Доверени от клиенти в страната и чужбина за качество и автентичност
              </p>
            </div>
          </AnimatedItem>

          {/* Element 3 — Best UX Nominee (cell 4) */}
          <AnimatedItem className="md:col-span-1 md:row-span-1 rounded-2xl bg-white shadow-sm p-5 md:p-6 flex flex-col justify-center gap-3 md:gap-2">
            <p className="text-xl md:text-3xl font-semibold text-gray-900 font-headline">Най-добър производител на ръчна керамика</p>
            <h4 className="text-base md:text-xl font-semibold text-gray-700 font-headline mt-2">Признание за качество</h4>
            <p className="text-base md:text-xl font-medium text-gray-900 font-body mt-2">35 години опит в традиционното занаятчийство</p>
            <p className="text-sm md:text-lg text-gray-600 font-body mt-2">Сертифицирани материали и ръчна изработка</p>
            <a href="#" className="text-xs md:text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center gap-1 mt-2 font-body">
              Вижте повече <span className="text-red-500">↗</span>
            </a>
          </AnimatedItem>

          {/* Element 4 — FWA Recognition (cell 5) */}
          <AnimatedItem className="md:col-span-1 md:row-span-1 rounded-2xl bg-white shadow-sm p-5 md:p-6 flex flex-col justify-center gap-3">
            <p className="text-xl md:text-3xl font-semibold text-gray-900 font-headline">Признание за качество 2024/2025</p>
            {/* Placeholder image */}
            <img
              src="/images/guvech.jpg"
              alt="Признание за качество"
              className="w-full h-48 md:h-full object-cover rounded-2xl"
            />
          </AnimatedItem>
        </AnimatedContainer>
      </section>
    </AnimatedSection>
  );
}

