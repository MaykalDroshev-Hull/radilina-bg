"use client";

import { awards } from '../data/mockData';
import { Award, ExternalLink, ArrowRight, Trophy } from 'lucide-react';

export default function Awards() {
  return (
    <>    <div className="flex items-start justify-between w-full gap-6 px-12 mt-12 mb-12">
    {/* Left side */}
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="text-xl text-gray-700">Награди</span>
    </div>
    {/* Right side */}
    <p className="max-w-[50%] text-right text-4xl">
      <span className="font-semibold text-gray-900">
        Дизайни, признати 
      </span>
      <span className="text-gray-400">
        {" "}извън границите
      </span>
      <br />
      <span className="text-base text-gray-600">
        Честваме награди и номинации, които отразяват нашия ангажимент към яснота, иновации и вечен минимализъм
      </span>
    </p>
  </div>

  {/* Showcase Section */}
  <section className="w-full py-12 px-12">
    {/* 3×2 GRID */}
    <div className="grid grid-cols-3 grid-rows-2 gap-6">
      {/* Element 1 — Award Card (spans col 1–2, row 1) */}
      <div className="col-span-2 row-span-1 rounded-2xl bg-white shadow-sm p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Trophy className="w-10 h-10 text-yellow-500" /><br></br>
          <h2 className="text-3xl font-semibold">Мастер на традиционното занаятчийство 2024</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Признание за 35 години опит в ръчното керамично производство. Всички артикули се изработват 
          на грънчарско колело с използване на сертифицирани материали, създавайки уникални битови 
          и сувенирни изделия от Троянска керамика.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm">
            Вижте нашата колекция <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm">
            Представени в национални изложби <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Element 2 — Large Image Placeholder (spans col 3, rows 1–2) */}
      <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden bg-gray-200">
        <img 
          src="/images/kana.jpg" 
          alt="Керамична кана" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 p-6">
          <h3 className="text-white text-xl font-semibold drop-shadow">
            Традиция и майсторство, признати отвъд границите
          </h3>
          <p className="text-white text-sm opacity-90 drop-shadow">
            Доверени от клиенти в страната и чужбина за качество и автентичност
          </p>
        </div>
      </div>

      {/* Element 3 — Best UX Nominee (cell 4) */}
      <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm p-6 flex flex-col justify-center gap-2">
        <p className="text-3xl font-semibold text-gray-900">Най-добър производител на ръчна керамика</p>
        <br />
        <h4 className="text-xl font-semibold text-gray-700">Признание за качество</h4>
        <br />
        <p className="text-xl font-medium text-gray-900">35 години опит в традиционното занаятчийство</p>
        <br />
        <p className="text-lg text-gray-600">Сертифицирани материали и ръчна изработка</p>
        <br />
        <a href="#" className="text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors inline-flex items-center gap-1">
          Вижте повече <span className="text-red-500">↗</span>
        </a>
      </div>

      {/* Element 4 — FWA Recognition (cell 5) */}
      <div className="col-span-1 row-span-1 rounded-2xl bg-white shadow-sm p-6 flex flex-col justify-center gap-3">
        <p className="text-3xl font-semibold text-gray-900">Признание за качество 2024/2025</p>
        {/* Placeholder image */}
        <img 
          src="/images/guvech.jpg" 
          alt="Признание за качество" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  </section>
    
    </>
  );
}

