"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Hero() {
  const t = useTranslations();

  return (
    <div className="px-3 md:px-5 lg:px-6">
      <AnimatedSection
        id="home"
        className="relative h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden rounded-3xl md:rounded-[2rem] lg:rounded-4xl"
      >
        {/* Background Image - Warm scene with fireplace */}
        <div className="absolute inset-0">
          <Image
            src="/products/more/2302/Collection 1.jpeg"
            alt="Radilina Handmade Ceramics"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
          {/* Top — Branding */}
          <AnimatedContainer className="text-center pt-2 md:pt-4 lg:pt-8">
            <AnimatedItem>
              <h1 className="font-subheadline font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">
                Radilina
              </h1>
            </AnimatedItem>

            <AnimatedItem>
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mt-2 md:mt-3 lg:mt-4 tracking-[0.2em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_6px_rgba(0,0,0,0.9)]">
                {t('hero.subtitle')}
              </p>
            </AnimatedItem>
          </AnimatedContainer>

          {/* Bottom — CTA Button */}
          <AnimatedContainer className="flex items-center justify-center pb-2 md:pb-4 lg:pb-6">
            <AnimatedItem>
              <Link
                href="/#product-categories"
                className="inline-block min-w-[200px] md:min-w-[240px] lg:min-w-[280px] text-center px-8 md:px-10 lg:px-12 py-3 md:py-3.5 lg:py-4
                  bg-gradient-to-br from-[#2d5016] to-[#1a3d0e] text-white
                  border border-[#3a6a1f]
                  rounded-lg md:rounded-xl font-headline text-sm md:text-base lg:text-lg tracking-wide
                  shadow-lg hover:shadow-xl hover:from-[#3a6a1f] hover:to-[#2d5016]
                  active:scale-95 transition-all duration-300"
              >
                {t('hero.productsButton')}
              </Link>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Product Categories Animated Carousel */}
      <AnimatedSection className="mt-6 md:mt-8 lg:mt-10 mb-8 md:mb-12 lg:mb-14 relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 lg:w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 lg:w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div
          className="flex gap-4 md:gap-6 lg:gap-8 animate-scroll hover:pause"
          style={{
            animationPlayState: 'running',
            width: 'max-content',
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {[
            t('categories.cupsAndMugs'),
            t('categories.plates'),
            t('categories.bowls'),
            t('categories.pans'),
            t('categories.pots'),
            t('categories.fruitBowls'),
            t('categories.oliveDishes'),
            t('categories.saltAndSugar'),
            t('categories.ashtrays'),
            t('categories.napkinHolders'),
            t('categories.sets'),
            t('categories.servingDishes'),
            t('categories.jars'),
            t('categories.bells'),
            t('categories.pans2'),
            t('categories.jugsAndCans'),
            t('categories.cupsAndMugs'),
            t('categories.plates'),
            t('categories.bowls'),
            t('categories.pans'),
            t('categories.pots'),
            t('categories.fruitBowls'),
            t('categories.oliveDishes'),
            t('categories.saltAndSugar'),
            t('categories.ashtrays'),
            t('categories.napkinHolders'),
            t('categories.sets'),
            t('categories.servingDishes'),
            t('categories.jars'),
            t('categories.bells'),
            t('categories.pans2'),
            t('categories.jugsAndCans'),
            t('categories.andMore'),
          ].map((name, index) => {
            return (
              <div key={index} className="bg-[#1a1614]/80 backdrop-blur-sm rounded-lg md:rounded-xl px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 shadow-sm hover:shadow-md border border-gray-800 flex-shrink-0 transition-all">
                <span className="text-sm md:text-base lg:text-lg text-gray-300 font-body whitespace-nowrap">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
