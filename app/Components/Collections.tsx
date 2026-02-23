"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Collections() {
  const t = useTranslations();

  const collections = [
    {
      title: t('collections.classicCream.title'),
      description: t('collections.classicCream.description'),
      image: '/products/more/2302/Colletion 2.jpeg',
    },
    {
      title: t('collections.ornamental.title'),
      description: t('collections.ornamental.description'),
      image: '/products/more/2302/Colletion 3.jpeg',
    },
    {
      title: t('collections.rose.title'),
      description: t('collections.rose.description'),
      image: '/products/more/2302/collection 4.jpeg',
    },
  ];

  return (
    <AnimatedSection id="collections" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <AnimatedItem>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 md:mb-4 font-headline">
              {t('collections.title')}
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-body max-w-3xl mx-auto">
              {t('collections.subtitle')}
            </p>
          </AnimatedItem>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {collections.map((collection, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <Link
                href="/#product-categories"
                className="block group"
              >
                <div className="bg-[#1a1614] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 md:p-6 lg:p-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-3 font-headline">
                      {collection.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4 md:mb-5 font-body leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm md:text-base font-body font-semibold text-[#F4A7A7] group-hover:gap-3 transition-all">
                      <span>{t('common.viewCollection')}</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
