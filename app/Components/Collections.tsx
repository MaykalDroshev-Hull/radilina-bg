"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

// Color palette for collection backgrounds - matching the collection images
const collectionColors = [
  { bg: '#FFF7F7', text: '#1a1614' }, // Blush White - for Едра бяла роза (cream/white)
  { bg: '#E8DCCF', text: '#1a1614' }, // Clay Beige - for Бяла Роза (terracotta/oriental)
  { bg: '#F4A7A7', text: '#1a1614' }, // Soft Rose - for Розова роза (pink)
  { bg: '#CFE6D7', text: '#1a1614' }, // Sage Mist - for Тюркоазена колекция (turquoise/green)
  { bg: '#E8F6EF', text: '#1a1614' }, // Soft Mint - for Светлосиня роза (light blue)
];

export default function Collections() {
  const t = useTranslations();

  const collections = [
    {
      slug: 'collection-1',
      title: t('collections.collection1.title'),
      description: t('collections.collection1.description'),
      image: '/products/Collection 1.jpeg',
    },
    {
      slug: 'classic-cream',
      title: t('collections.classicCream.title'),
      description: t('collections.classicCream.description'),
      image: '/products/Colletion 2.jpeg',
    },
    {
      slug: 'ornamental',
      title: t('collections.ornamental.title'),
      description: t('collections.ornamental.description'),
      image: '/products/Colletion 3.jpeg',
    },
    {
      slug: 'rose',
      title: t('collections.rose.title'),
      description: t('collections.rose.description'),
      image: '/products/collection 4.jpeg',
    },
    {
      slug: 'collection-5',
      title: t('collections.collection5.title'),
      description: t('collections.collection5.description'),
      image: '/products/collection 5.jpeg',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {collections.map((collection, index) => {
            const colorScheme = collectionColors[index % collectionColors.length];
            
            return (
              <AnimatedItem key={index} delay={index * 0.1} className="h-full">
                <Link
                  href={`/collection/${collection.slug}`}
                  className="block group h-full"
                >
                  <div 
                    className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
                    style={{ 
                      backgroundColor: colorScheme.bg,
                      color: colorScheme.text,
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden flex-shrink-0">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                      <h3 
                        className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3 font-headline"
                        style={{ color: colorScheme.text }}
                      >
                        {collection.title}
                      </h3>
                      <p 
                        className="text-sm md:text-base lg:text-lg mb-4 md:mb-5 font-body leading-relaxed opacity-80 flex-grow"
                        style={{ color: colorScheme.text }}
                      >
                        {collection.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm md:text-base font-body font-semibold text-[#1a1614] group-hover:gap-3 transition-all mt-auto">
                        <span>{t('common.viewCollection')}</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            );
          })}
        </div>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
