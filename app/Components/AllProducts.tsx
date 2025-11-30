"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

const categories = [
  { 
    name: "Чаши и халби", 
    image: "/images/rakia cup.jpg",
    subcategories: [
      { name: "Чаша за ракия", subtitle: "Традиционна малка чаша", image: "/images/rakia cup.jpg", code: "CH-RAK-001", price: "8 лв" },
      { name: "Халба за бира", subtitle: "Голяма керамична халба", image: "/images/slide-3.jpg", code: "CH-BIR-001", price: "15 лв" },
      { name: "Чаша за кафе", subtitle: "Среден размер", image: "/images/slide-3.jpg", code: "CH-KAF-001", price: "10 лв" },
      { name: "Чаша за чай", subtitle: "С дръжка", image: "/images/slide-3.jpg", code: "CH-CHY-001", price: "9 лв" },
    ]
  },
  { 
    name: "Чинии", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Плитка чиния", subtitle: "Диаметър 25см", image: "/images/slide-3.jpg", code: "CHN-PLT-025", price: "18 лв" },
      { name: "Дълбока чиния", subtitle: "За супи", image: "/images/slide-3.jpg", code: "CHN-DLB-001", price: "20 лв" },
      { name: "Десертна чиния", subtitle: "Малък размер", image: "/images/slide-3.jpg", code: "CHN-DES-001", price: "12 лв" },
    ]
  },
  { 
    name: "Купи", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Малка купа", subtitle: "За сосове", image: "/images/slide-3.jpg", code: "KUP-MLK-001", price: "7 лв" },
      { name: "Средна купа", subtitle: "Универсална", image: "/images/slide-3.jpg", code: "KUP-SRD-001", price: "12 лв" },
      { name: "Голяма купа", subtitle: "За салати", image: "/images/slide-3.jpg", code: "KUP-GLM-001", price: "18 лв" },
    ]
  },
  { 
    name: "Тави", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Правоъгълна тава", subtitle: "За печене", image: "/images/slide-3.jpg", code: "TAV-PRV-001", price: "25 лв" },
      { name: "Кръгла тава", subtitle: "Декоративна", image: "/images/slide-3.jpg", code: "TAV-KRG-001", price: "22 лв" },
    ]
  },
  { 
    name: "Гювечи", 
    image: "/images/guvech.jpg",
    subcategories: [
      { name: "Троянски гювеч", subtitle: "Традиционен дизайн", image: "/images/guvech.jpg", code: "GUV-TRY-001", price: "15 лв" },
      { name: "Гювеч с капак", subtitle: "За готвене на огън", image: "/images/slide-3.jpg", code: "GUV-KAP-001", price: "20 лв" },
    ]
  },
  { 
    name: "Фруктиери", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Голяма фруктиера", subtitle: "Централна част", image: "/images/slide-3.jpg", code: "FRK-GLM-001", price: "35 лв" },
      { name: "Малка фруктиера", subtitle: "Декоративна", image: "/images/slide-3.jpg", code: "FRK-MLK-001", price: "22 лв" },
    ]
  },
  { 
    name: "Оливерници", 
    image: "/images/Olivernik karuca.jpg",
    subcategories: [
      { name: "Оливерник каруца", subtitle: "С разделители", image: "/images/Olivernik karuca.jpg", code: "OLV-KAR-001", price: "28 лв" },
      { name: "Класически оливерник", subtitle: "Прост дизайн", image: "/images/slide-3.jpg", code: "OLV-KLS-001", price: "18 лв" },
    ]
  },
  { 
    name: "Солници и захарници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Солница", subtitle: "С капаче", image: "/images/slide-3.jpg", code: "SOL-KAP-001", price: "8 лв" },
      { name: "Захарница", subtitle: "С лъжичка", image: "/images/slide-3.jpg", code: "ZAH-LZH-001", price: "12 лв" },
    ]
  },
  { 
    name: "Пепелници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Малък пепелник", subtitle: "Индивидуален", image: "/images/slide-3.jpg", code: "PEP-MLK-001", price: "6 лв" },
      { name: "Голям пепелник", subtitle: "За маса", image: "/images/slide-3.jpg", code: "PEP-GLM-001", price: "10 лв" },
    ]
  },
  { 
    name: "Салфетници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Класически салфетник", subtitle: "Правоъгълен", image: "/images/slide-3.jpg", code: "SLF-KLS-001", price: "14 лв" },
    ]
  },
  { 
    name: "Сервизи", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Сервиз за кафе", subtitle: "6 чаши", image: "/images/slide-3.jpg", code: "SRV-KAF-006", price: "85 лв" },
      { name: "Сервиз за ракия", subtitle: "Бутилка и чаши", image: "/images/slide-3.jpg", code: "SRV-RAK-001", price: "95 лв" },
    ]
  },
  { 
    name: "Пахари", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Керамичен пахар", subtitle: "За вино", image: "/images/slide-3.jpg", code: "PAH-VIN-001", price: "12 лв" },
    ]
  },
  { 
    name: "Буркани", 
    image: "/images/Sreden Burkan.jpg",
    subcategories: [
      { name: "Малък буркан", subtitle: "За подправки", image: "/images/slide-3.jpg", code: "BUR-MLK-001", price: "10 лв" },
      { name: "Среден буркан", subtitle: "За съхранение", image: "/images/Sreden Burkan.jpg", code: "BUR-SRD-001", price: "15 лв" },
      { name: "Голям буркан", subtitle: "Декоративен", image: "/images/slide-3.jpg", code: "BUR-GLM-001", price: "22 лв" },
    ]
  },
  { 
    name: "Камбанки", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Декоративна камбанка", subtitle: "С троянски мотиви", image: "/images/slide-3.jpg", code: "KMB-DKR-001", price: "8 лв" },
    ]
  },
  { 
    name: "Тигани", 
    image: "/images/Tigan s kapak.jpg",
    subcategories: [
      { name: "Тиган с капак", subtitle: "За готвене", image: "/images/Tigan s kapak.jpg", code: "TIG-KAP-001", price: "30 лв" },
      { name: "Класически тиган", subtitle: "С дръжка", image: "/images/slide-3.jpg", code: "TIG-KLS-001", price: "25 лв" },
    ]
  },
  { 
    name: "Други", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Свещник", subtitle: "Керамичен", image: "/images/slide-3.jpg", code: "SVE-KRM-001", price: "12 лв" },
      { name: "Ваза", subtitle: "За цветя", image: "/images/slide-3.jpg", code: "VAZ-CVT-001", price: "18 лв" },
    ]
  },
  { 
    name: "Стомни и кани", 
    image: "/images/kana.jpg",
    subcategories: [
      { name: "Троянска кана", subtitle: "С декорация", image: "/images/kana.jpg", code: "KAN-TRY-001", price: "45 лв" },
      { name: "Стомна", subtitle: "Традиционна", image: "/images/slide-3.jpg", code: "STM-TRD-001", price: "40 лв" },
    ]
  },
];

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category: typeof categories[0]) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };
  return (
    <section id="products">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Всички продукти</span>
        </div>
        {/* Right side */}
        <div className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right">
          <p className="text-xl md:text-2xl lg:text-4xl mb-3 md:mb-4">
            <span className="font-semibold text-gray-900 font-headline leading-tight">
              Разгледайте цялата ни колекция
            </span>
            <span className="text-gray-400 font-headline leading-tight">
              {" "}от ръчно изработена керамика
            </span>
          </p>
        </div>
      </div>

      {/* Black Container with Categories */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="bg-black rounded-2xl md:rounded-[2rem] lg:rounded-3xl p-5 md:p-7 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-col gap-2 md:gap-3 group cursor-pointer"
                onClick={() => openModal(category)}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-xl lg:rounded-2xl aspect-square bg-gray-800 ring-2 ring-transparent group-hover:ring-white/20 transition-all">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-white text-center font-body text-sm md:text-base lg:text-lg">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCategory && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl md:rounded-[2rem] lg:rounded-3xl max-w-4xl w-full max-h-[85vh] md:max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-5 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7 rounded-t-2xl md:rounded-t-[2rem] lg:rounded-t-3xl flex items-center justify-between z-10">
              <div className="flex-1 pr-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 font-headline">{selectedCategory.name}</h2>
                <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2 font-body">Изберете подкатегория</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 md:p-2.5 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 md:p-7 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                {selectedCategory.subcategories.map((subcategory, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="relative h-40 md:h-48 lg:h-52 overflow-hidden bg-gray-100">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-900 font-headline leading-tight">
                            {subcategory.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-500 font-body mt-1">
                            Код: {subcategory.code}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xl md:text-2xl font-bold text-[#F4A7A7] font-headline">
                            {subcategory.price}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 font-body leading-relaxed">
                        {subcategory.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wholesale Notice */}
              <div className="mt-6 md:mt-8 bg-gradient-to-br from-[#FFF7F7] to-[#E8F6EF] rounded-xl md:rounded-2xl p-5 md:p-6 border border-[#F4A7A7]/20">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-3xl md:text-4xl flex-shrink-0">📦</span>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 font-headline">Работим на едро</h4>
                    <p className="text-sm md:text-base text-gray-700 font-body leading-relaxed">
                      Предлагаме специални цени за големи поръчки. Свържете се с нас за индивидуална оферта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

