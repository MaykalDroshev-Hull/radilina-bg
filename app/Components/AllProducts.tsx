"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const categories = [
  { 
    name: "Гювечи и гърнета", 
    image: "/images/guvech.jpg",
    subcategories: [
      { name: "Гювече", subtitle: "0.500 л", image: "/images/guvech.jpg", code: "1001", price: "" },
      { name: "Гювеч", subtitle: "1 л", image: "/images/guvech.jpg", code: "1002", price: "" },
      { name: "Гювеч", subtitle: "3 л", image: "/images/guvech.jpg", code: "1003", price: "" },
      { name: "Гювеч", subtitle: "6 л", image: "/images/guvech.jpg", code: "1004", price: "" },
      { name: "Гърне за боб", subtitle: "3 л", image: "/images/slide-3.jpg", code: "1005", price: "" },
      { name: "Гърне за боб", subtitle: "5 л", image: "/images/slide-3.jpg", code: "1006", price: "" },
    ]
  },
  { 
    name: "Купи и сосиерки", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Купа малка", subtitle: "Ø 12 см", image: "/images/slide-3.jpg", code: "2001", price: "" },
      { name: "Купа средна", subtitle: "Ø 14 см", image: "/images/slide-3.jpg", code: "2002", price: "" },
      { name: "Купа голяма", subtitle: "Ø 16 см", image: "/images/slide-3.jpg", code: "2003", price: "" },
      { name: "Купа №3", subtitle: "Ø 18 см", image: "/images/slide-3.jpg", code: "2004", price: "" },
      { name: "Купа №5", subtitle: "Ø 20 см", image: "/images/slide-3.jpg", code: "2005", price: "" },
      { name: "Купа №7", subtitle: "Ø 24 см", image: "/images/slide-3.jpg", code: "2006", price: "" },
      { name: "Купа №13", subtitle: "Ø 28 см", image: "/images/slide-3.jpg", code: "2007", price: "" },
      { name: "Купа с дръжка", subtitle: "400 мл", image: "/images/slide-3.jpg", code: "2008", price: "" },
      { name: "Купа за спагети", subtitle: "", image: "/images/slide-3.jpg", code: "2009", price: "" },
      { name: "Сосиерка", subtitle: "", image: "/images/slide-3.jpg", code: "2010", price: "" },
    ]
  },
  { 
    name: "Чинии и пахари", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Чиния", subtitle: "Ø 15 см", image: "/images/slide-3.jpg", code: "3001", price: "" },
      { name: "Чиния", subtitle: "Ø 18 см", image: "/images/slide-3.jpg", code: "3002", price: "" },
      { name: "Чиния", subtitle: "Ø 22 см", image: "/images/slide-3.jpg", code: "3003", price: "" },
      { name: "Чиния", subtitle: "Ø 26 см", image: "/images/slide-3.jpg", code: "3004", price: "" },
      { name: "Чиния", subtitle: "Ø 30 см", image: "/images/slide-3.jpg", code: "3005", price: "" },
      { name: "Пахар", subtitle: "Ø 17 см", image: "/images/slide-3.jpg", code: "3006", price: "" },
    ]
  },
  { 
    name: "Тави", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Тава №5", subtitle: "Ø 20 см", image: "/images/slide-3.jpg", code: "4001", price: "" },
      { name: "Тава №7", subtitle: "Ø 24 см", image: "/images/slide-3.jpg", code: "4002", price: "" },
      { name: "Тава №13", subtitle: "Ø 28 см", image: "/images/slide-3.jpg", code: "4003", price: "" },
      { name: "Тава за пиле", subtitle: "Ø 28 см", image: "/images/slide-3.jpg", code: "4004", price: "" },
    ]
  },
  { 
    name: "Чаши за алкохол", 
    image: "/images/rakia cup.jpg",
    subcategories: [
      { name: "Чаша за ракия", subtitle: "100 мл", image: "/images/rakia cup.jpg", code: "5001", price: "" },
      { name: "Чаша шот", subtitle: "100 мл", image: "/images/rakia cup.jpg", code: "5002", price: "" },
      { name: "Мини халба", subtitle: "100 мл", image: "/images/slide-3.jpg", code: "5003", price: "" },
      { name: "Юзче", subtitle: "100 мл", image: "/images/slide-3.jpg", code: "5004", price: "" },
      { name: "Чаша за вино", subtitle: "200 мл", image: "/images/slide-3.jpg", code: "5005", price: "" },
    ]
  },
  { 
    name: "Чаши за кафе и чай", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Чаша за кафе \"Столче\"", subtitle: "", image: "/images/slide-3.jpg", code: "6001", price: "" },
      { name: "Чаша за кафе лате", subtitle: "", image: "/images/slide-3.jpg", code: "6002", price: "" },
      { name: "Чаша за кафе \"Канче\"", subtitle: "", image: "/images/slide-3.jpg", code: "6003", price: "" },
      { name: "Чаша за кафе \"Бонбон\"", subtitle: "", image: "/images/slide-3.jpg", code: "6004", price: "" },
      { name: "Чаша за кафе \"Лале\"", subtitle: "", image: "/images/slide-3.jpg", code: "6005", price: "" },
      { name: "Чаша за кафе \"Буре\"", subtitle: "", image: "/images/slide-3.jpg", code: "6006", price: "" },
      { name: "Чаша за кафе ристрето", subtitle: "", image: "/images/slide-3.jpg", code: "6007", price: "" },
      { name: "Чаша за кафе с чинийка \"Лаваца\"", subtitle: "", image: "/images/slide-3.jpg", code: "6008", price: "" },
      { name: "Чаша за кафе с чинийка", subtitle: "", image: "/images/slide-3.jpg", code: "6009", price: "" },
      { name: "Чаша за чай с чинийка", subtitle: "", image: "/images/slide-3.jpg", code: "6010", price: "" },
    ]
  },
  { 
    name: "Чаши за напитки и халби", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Чаша за мляко", subtitle: "400 мл", image: "/images/slide-3.jpg", code: "7001", price: "" },
      { name: "Чаша за безалкохолно", subtitle: "400 мл", image: "/images/slide-3.jpg", code: "7002", price: "" },
      { name: "Халба", subtitle: "500 мл", image: "/images/slide-3.jpg", code: "7003", price: "" },
    ]
  },
  { 
    name: "Сервизи", 
    image: "/images/slide-3.jpg",
    subcategories: [
      { name: "Сервиз оливерник", subtitle: "", image: "/images/Olivernik karuca.jpg", code: "8001", price: "" },
      { name: "Сервиз оливерник \"Каручка\"", subtitle: "", image: "/images/Olivernik karuca.jpg", code: "8002", price: "" },
      { name: "Сервиз за вино", subtitle: "", image: "/images/slide-3.jpg", code: "8003", price: "" },
      { name: "Сервиз за ракия", subtitle: "", image: "/images/rakia cup.jpg", code: "8004", price: "" },
    ]
  },
  { 
    name: "Дребни аксесоари", 
    image: "/images/Sreden Burkan.jpg",
    subcategories: [
      { name: "Яйчарка", subtitle: "", image: "/images/slide-3.jpg", code: "9001", price: "" },
      { name: "Камбанка", subtitle: "", image: "/images/slide-3.jpg", code: "9002", price: "" },
      { name: "Лимоноизтисквачка", subtitle: "", image: "/images/slide-3.jpg", code: "9003", price: "" },
      { name: "Чесновка", subtitle: "", image: "/images/slide-3.jpg", code: "9004", price: "" },
      { name: "Буркан малък", subtitle: "60 мл", image: "/images/slide-3.jpg", code: "9005", price: "" },
      { name: "Буркан среден", subtitle: "150 мл", image: "/images/Sreden Burkan.jpg", code: "9006", price: "" },
      { name: "Буркан голям", subtitle: "350 мл", image: "/images/slide-3.jpg", code: "9007", price: "" },
      { name: "Захарник малък", subtitle: "150 мл", image: "/images/slide-3.jpg", code: "9008", price: "" },
      { name: "Захарник голям", subtitle: "350 мл", image: "/images/slide-3.jpg", code: "9009", price: "" },
      { name: "Пепелник за една цигара", subtitle: "", image: "/images/slide-3.jpg", code: "9010", price: "" },
      { name: "Пепелник за две цигари", subtitle: "", image: "/images/slide-3.jpg", code: "9011", price: "" },
      { name: "Пепелник за три цигари", subtitle: "", image: "/images/slide-3.jpg", code: "9012", price: "" },
      { name: "Градински пепелник", subtitle: "", image: "/images/slide-3.jpg", code: "9013", price: "" },
      { name: "Магнит чинийка", subtitle: "", image: "/images/slide-3.jpg", code: "9014", price: "" },
      { name: "Ваза", subtitle: "20 см", image: "/images/slide-3.jpg", code: "9015", price: "" },
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModalOpen]);
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
                        {subcategory.price && (
                          <div className="text-right flex-shrink-0">
                            <div className="text-xl md:text-2xl font-bold text-[#F4A7A7] font-headline">
                              {subcategory.price}
                            </div>
                          </div>
                        )}
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

