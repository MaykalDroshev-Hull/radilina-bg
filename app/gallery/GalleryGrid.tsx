"use client";

import Image from 'next/image';
import { Link } from '../../i18n/routing';

type GalleryImage = { src: string; aspect: 'landscape' | 'portrait' };

interface GalleryGridProps {
  columns: GalleryImage[][];
}

export default function GalleryGrid({ columns }: GalleryGridProps) {
  // Validate columns
  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return null;
  }

  // Fallback text values (since we're not using i18n)
  const imageAlt = 'Radilina керамика';
  const finalSectionTitle = 'Създайте нещо уникално с нас';
  const finalSectionDescription = 'Всеки продукт е ръчно изработен с внимание към детайла и любов към изкуството. Свържете се с нас, за да поръчате ваше уникално произведение.';
  const finalSectionButton = 'Свържете се с нас';

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="px-6 md:px-10 lg:px-12">
        {/* Masonry Gallery Grid — 3 manually balanced columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-start">
          {columns.map((column, colIndex) => {
            if (!Array.isArray(column) || column.length === 0) return null;
            
            return (
              <div key={colIndex} className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                {column.map((item, index) => {
                  if (!item || !item.src || typeof item.src !== 'string' || item.src.trim() === '') {
                    return null;
                  }

                  const aspect = item.aspect === 'portrait' ? 'aspect-[2/3]' : 'aspect-[3/2]';
                  
                  return (
                    <div
                      key={`${colIndex}-${index}`}
                      className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-[shadow,transform] duration-300 hover:scale-[1.02] cursor-pointer border border-gray-800 group"
                    >
                      <div className={`relative ${aspect}`}>
                        <Image
                          src={item.src}
                          alt={imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-10 md:mt-12 lg:mt-16 bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800 text-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-5 font-headline">
            {finalSectionTitle}
          </h3>
          <p className="text-base md:text-lg text-gray-400 font-body mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {finalSectionDescription}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 md:gap-3 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-[shadow] shadow-lg hover:shadow-xl active:scale-95"
          >
            {finalSectionButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
