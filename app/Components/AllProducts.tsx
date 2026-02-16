import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../data/categories';

export default function AllProducts() {
  return (
    <section id="products">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">Всички продукти</span>
        </div>
        {/* Right side */}
        <div className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right">
          <p className="text-xl md:text-2xl lg:text-4xl mb-3 md:mb-4">
            <span className="font-semibold text-white font-headline leading-tight">
              Разгледайте цялата ни колекция
            </span>
            <span className="text-gray-500 font-headline leading-tight">
              {" "}от ръчно изработена керамика
            </span>
          </p>
        </div>
      </div>

      {/* Category Grid */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="bg-[#0a0a0a] rounded-2xl md:rounded-[2rem] lg:rounded-3xl p-5 md:p-7 lg:p-8 border border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/category/${category.slug}`}
                className="flex flex-col gap-2 md:gap-3 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-xl lg:rounded-2xl aspect-square bg-gray-900 ring-2 ring-transparent group-hover:ring-white/20 transition-all">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-white text-center font-body text-sm md:text-base lg:text-lg">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
