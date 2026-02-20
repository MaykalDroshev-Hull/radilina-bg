"use client";

import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const t = useTranslations();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const video = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      // Ensure video plays
      video.play().catch(() => {
        // Autoplay was prevented, but video is loaded
        setIsVideoReady(true);
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // Try to load the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className="px-3 md:px-5 lg:px-6">
      <AnimatedSection
        id="home"
        className="relative h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden rounded-3xl md:rounded-[2rem] lg:rounded-4xl"
      >
        {/* Background Video — Mobile */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
          preload="auto"
        >
          <source src="/images/hero mobile.mp4" type="video/mp4" />
        </video>
        
        {/* Background Video — Desktop */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          preload="auto"
        >
          <source src="/images/Hero.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image in case video doesn't load */}
        {!isVideoReady && (
          <div className="absolute inset-0 bg-[#1a1614] flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#F4A7A7] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Subtle gradient overlay — darken bottom for button readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

        {/* Content — positioned upper area like reference */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
          {/* Top — Title & Subtitle (high contrast text) */}
          <AnimatedContainer className="text-center pt-2 md:pt-4 lg:pt-0 lg:-mt-6 xl:-mt-10">
            <AnimatedItem>
              <h1 className="font-headline font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">
                {t('hero.title')}
              </h1>
            </AnimatedItem>

            <AnimatedItem>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-white mt-3 md:mt-4 lg:mt-5 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_6px_rgba(0,0,0,0.9)]">
              {t('hero.subtitle')}
              </p>
            </AnimatedItem>
          </AnimatedContainer>

          {/* Bottom — CTA Buttons (dark theme) */}
          <AnimatedContainer className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-6 pb-2 md:pb-4">
            <AnimatedItem>
              <Link
                href="/#courses"
                className="min-w-[180px] md:min-w-[200px] text-center px-8 md:px-10 py-3 md:py-3.5
                  bg-[#1a1614] backdrop-blur-sm text-white
                  border border-gray-700
                  rounded-lg font-headline text-sm md:text-base tracking-[0.15em] uppercase
                  shadow-lg hover:bg-[#222] hover:shadow-xl
                  active:scale-95 transition-all"
              >
                {t('hero.productsButton')}
              </Link>
            </AnimatedItem>

            <AnimatedItem>
              <Link
                href="/about"
                className="min-w-[180px] md:min-w-[200px] text-center px-8 md:px-10 py-3 md:py-3.5
                  bg-[#1a1614] backdrop-blur-sm text-white
                  border border-gray-700
                  rounded-lg font-headline text-sm md:text-base tracking-[0.15em] uppercase
                  shadow-lg hover:bg-[#222] hover:shadow-xl
                  active:scale-95 transition-all"
              >
                {t('hero.aboutButton')}
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
