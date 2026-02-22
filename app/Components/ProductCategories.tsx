"use client";

import Image from 'next/image';
import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

// Color palette for category backgrounds
const categoryColors = [
  { bg: '#FFF7F7', text: '#1a1614' }, // Blush White
  { bg: '#CFE6D7', text: '#1a1614' }, // Sage Mist
  { bg: '#F4A7A7', text: '#1a1614' }, // Soft Rose
  { bg: '#E8F6EF', text: '#1a1614' }, // Soft Mint
  { bg: '#E8DCCF', text: '#1a1614' }, // Clay Beige
  { bg: '#C1AFA3', text: '#FFF7F7' }, // Warm Taupe
  { bg: '#FFF7F7', text: '#1a1614' }, // Blush White
  { bg: '#CFE6D7', text: '#1a1614' }, // Sage Mist
  { bg: '#F4A7A7', text: '#1a1614' }, // Soft Rose
];

export default function ProductCategories() {
  const t = useTranslations();

  // Filter out unknown products category
  const visibleCategories = categories.filter(cat => cat.slug !== 'neznayni');

  // Get unique images from subcategories for each category (1-3 images)
  const getCategoryImages = (category: typeof categories[0]) => {
    const uniqueImages = [...new Set(category.subcategories.map(s => s.image))];
    // Filter out placeholder images and Radilina logos
    let validImages = uniqueImages.filter(img => 
      !img.includes('slide-3.jpg') && 
      !img.includes('Radilina - Logo')
    );
    
    // Special handling for pans category - prioritize frying pan with lid
    if (category.slug === 'tavi') {
      const fryingPanWithLid = '/products/more/4006 Тиган с капак.jpeg';
      // If the frying pan with lid is in the images, move it to the front
      if (validImages.includes(fryingPanWithLid)) {
        validImages = validImages.filter(img => img !== fryingPanWithLid);
        validImages = [fryingPanWithLid, ...validImages];
      } else {
        // If not found, add it as the first image
        validImages = [fryingPanWithLid, ...validImages];
      }
    }
    
    // Return 1-3 images, or fallback to category.image
    return validImages.slice(0, 3).length > 0 ? validImages.slice(0, 3) : [category.image];
  };

  return (
    <AnimatedSection id="product-categories" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        {visibleCategories.map((category, index) => {
          const images = getCategoryImages(category);
          const colorScheme = categoryColors[index % categoryColors.length];
          
          return (
            <AnimatedItem key={category.slug} delay={index * 0.1}>
              <Link 
                href={`/category/${category.slug}`}
                className="block mb-8 md:mb-10 lg:mb-12 group"
              >
                <div 
                  className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    backgroundColor: colorScheme.bg,
                    color: colorScheme.text 
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                    {/* Left side - Text */}
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 font-headline">
                        {t(`categories.${category.slug}`)}
                      </h3>
                      <p className="text-base md:text-lg text-opacity-80 mb-4 md:mb-6 font-body leading-relaxed">
                        {t(`categoryDescriptions.${category.slug}`, { 
                          defaultValue: `${t(`categories.${category.slug}`)} - ръчно изработена керамика с внимание към детайла.`
                        })}
                      </p>
                      <div className="flex items-center gap-2 text-sm md:text-base font-body font-semibold group-hover:gap-3 transition-all">
                        <span>{t('common.viewCollection')}</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>

                    {/* Right side - Stacked Images */}
                    <div className="order-1 md:order-2 relative">
                      <div className="relative flex items-center justify-center">
                        {images.length === 1 ? (
                          <div className="relative w-full max-w-sm md:max-w-xs aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                              src={images[0]}
                              alt={t(`categories.${category.slug}`)}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : images.length === 2 ? (
                          <div className="relative w-full max-w-md md:max-w-sm">
                            <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg transform rotate-3 group-hover:rotate-6 group-hover:z-0 z-10 transition-all duration-500">
                              <Image
                                src={images[0]}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-3/4 aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg transform -rotate-3 group-hover:-rotate-6 group-hover:z-20 group-hover:-top-4 group-hover:-left-4 group-hover:w-full z-0 transition-all duration-500">
                              <Image
                                src={images[1]}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full max-w-md md:max-w-sm">
                            <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg transform rotate-3 group-hover:rotate-6 group-hover:z-0 z-20 transition-all duration-500">
                              <Image
                                src={images[0]}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-3/4 aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg transform -rotate-3 group-hover:-rotate-6 group-hover:z-10 z-10 transition-all duration-500">
                              <Image
                                src={images[1]}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -top-4 -left-4 w-2/3 aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg transform rotate-6 group-hover:rotate-9 group-hover:z-30 group-hover:-bottom-4 group-hover:-right-4 group-hover:w-3/4 z-0 transition-all duration-500">
                              <Image
                                src={images[2]}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          );
        })}
      </AnimatedContainer>
    </AnimatedSection>
  );
}
