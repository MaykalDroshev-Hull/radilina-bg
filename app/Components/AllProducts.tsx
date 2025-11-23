"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

const categories = [
  { 
    name: "Чаши и халби", 
    image: "/images/rakia cup.jpg",
    subcategories: [
      { name: "Чаша за ракия", subtitle: "Традиционна малка чаша", image: "/images/rakia cup.jpg" },
      { name: "Халба за бира", subtitle: "Голяма керамична халба", image: "/images/slide-3.jpg" },
      { name: "Чаша за кафе", subtitle: "Среден размер", image: "/images/slide-3.jpg" },
      { name: "Чаша за чай", subtitle: "С дръжка", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Чинии", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Плитка чиния", subtitle: "Диаметър 25см", image: "/images/slide-3.jpg" },
      { name: "Дълбока чиния", subtitle: "За супи", image: "/images/slide-3.jpg" },
      { name: "Десертна чиния", subtitle: "Малък размер", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Купи", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Малка купа", subtitle: "За сосове", image: "/images/slide-3.jpg" },
      { name: "Средна купа", subtitle: "Универсална", image: "/images/slide-3.jpg" },
      { name: "Голяма купа", subtitle: "За салати", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Тави", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Правоъгълна тава", subtitle: "За печене", image: "/images/slide-3.jpg" },
      { name: "Кръгла тава", subtitle: "Декоративна", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Гювечи", 
    image: "/images/guvech.jpg",
    subcategories: [
      { name: "Троянски гювеч", subtitle: "Традиционен дизайн", image: "/images/guvech.jpg" },
      { name: "Гювеч с капак", subtitle: "За готвене на огън", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Фруктиери", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Голяма фруктиера", subtitle: "Централна част", image: "/images/slide-3.jpg" },
      { name: "Малка фруктиера", subtitle: "Декоративна", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Оливерници", 
    image: "/images/Olivernik karuca.jpg",
    subcategories: [
      { name: "Оливерник каруца", subtitle: "С разделители", image: "/images/Olivernik karuca.jpg" },
      { name: "Класически оливерник", subtitle: "Прост дизайн", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Солници и захарници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Солница", subtitle: "С капаче", image: "/images/slide-3.jpg" },
      { name: "Захарница", subtitle: "С лъжичка", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Пепелници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Малък пепелник", subtitle: "Индивидуален", image: "/images/slide-3.jpg" },
      { name: "Голям пепелник", subtitle: "За маса", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Салфетници", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Класически салфетник", subtitle: "Правоъгълен", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Сервизи", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Сервиз за кафе", subtitle: "6 чаши", image: "/images/slide-3.jpg" },
      { name: "Сервиз за ракия", subtitle: "Бутилка и чаши", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Пахари", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Керамичен пахар", subtitle: "За вино", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Буркани", 
    image: "/images/Sreden Burkan.jpg",
    subcategories: [
      { name: "Малък буркан", subtitle: "За подправки", image: "/images/slide-3.jpg" },
      { name: "Среден буркан", subtitle: "За съхранение", image: "/images/Sreden Burkan.jpg" },
      { name: "Голям буркан", subtitle: "Декоративен", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Камбанки", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Декоративна камбанка", subtitle: "С троянски мотиви", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Тигани", 
    image: "/images/Tigan s kapak.jpg",
    subcategories: [
      { name: "Тиган с капак", subtitle: "За готвене", image: "/images/Tigan s kapak.jpg" },
      { name: "Класически тиган", subtitle: "С дръжка", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Други", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Свещник", subtitle: "Керамичен", image: "/images/slide-3.jpg" },
      { name: "Ваза", subtitle: "За цветя", image: "/images/slide-3.jpg" },
    ]
  },
  { 
    name: "Стомни и кани", 
    image: "/images/kana.jpg",
    subcategories: [
      { name: "Троянска кана", subtitle: "С декорация", image: "/images/kana.jpg" },
      { name: "Стомна", subtitle: "Традиционна", image: "/images/slide-3.jpg" },
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 px-6 md:px-12 mt-8 md:mt-12 mb-8 md:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-xl text-gray-700 font-body">Всички продукти</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[50%] text-left md:text-right text-xl md:text-4xl">
          <span className="font-semibold text-gray-900 font-headline">
            Разгледайте цялата ни колекция
          </span>
          <span className="text-gray-400 font-headline">
            {" "}от ръчно изработена керамика
          </span>
        </p>
      </div>

      {/* Black Container with Categories */}
      <section className="w-full px-6 md:px-12 mb-8 md:mb-12">
        <div className="bg-black rounded-2xl md:rounded-3xl p-5 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-col gap-2 md:gap-3 group cursor-pointer"
                onClick={() => openModal(category)}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-square bg-gray-800">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-white text-center font-body text-sm md:text-lg">
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[85vh] md:max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-5 md:px-8 py-5 md:py-6 rounded-t-2xl md:rounded-t-3xl flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-900 font-headline">{selectedCategory.name}</h2>
                <p className="text-sm md:text-base text-gray-600 mt-1 font-body">Изберете подкатегория</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {selectedCategory.subcategories.map((subcategory, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden bg-gray-100">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 font-headline">
                        {subcategory.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 font-body">
                        {subcategory.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

