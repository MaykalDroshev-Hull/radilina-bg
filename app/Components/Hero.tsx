"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const collections = [
    {
      slug: 'collection-1',
      title: t('collections.collection1.title'),
      description: t('collections.collection1.description'),
      image: '/products/Collection 1.jpeg',
      mobileImage: '/products/collection 1 mobile.avif',
    },
    {
      slug: 'classic-cream',
      title: t('collections.classicCream.title'),
      description: t('collections.classicCream.description'),
      image: '/products/Colletion 2.jpeg',
      mobileImage: '/products/collection 2 mobile.avif',
    },
    {
      slug: 'ornamental',
      title: t('collections.ornamental.title'),
      description: t('collections.ornamental.description'),
      image: '/products/Colletion 3.jpeg',
      mobileImage: '/products/collection 3 mobile.avif',
    },
    {
      slug: 'rose',
      title: t('collections.rose.title'),
      description: t('collections.rose.description'),
      image: '/products/collection 4.jpeg',
      mobileImage: '/products/collection 4 mobile.avif',
    },
    {
      slug: 'collection-5',
      title: t('collections.collection5.title'),
      description: t('collections.collection5.description'),
      image: '/products/collection 5.jpeg',
      mobileImage: '/products/collection 5 mobile.avif',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % collections.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length);
    resetAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % collections.length);
    }, 5000);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, []);

  // Handle drag/swipe
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  // Get next 3 collections for thumbnails
  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i <= 3; i++) {
      const index = (currentIndex + i) % collections.length;
      thumbnails.push({ ...collections[index], index });
    }
    return thumbnails;
  };

  const currentCollection = collections[currentIndex];
  const thumbnails = getThumbnails();

  return (
    <div className="lg:px-6">
      <div
        id="home"
        className="relative h-[80vh] overflow-hidden lg:rounded-4xl"
      >
        {/* Background Images with Cross-fade */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Mobile & Tablet Image */}
              <Image
                src={currentCollection.mobileImage}
                alt={currentCollection.title}
                fill
                sizes="100vw"
                className="object-cover lg:hidden"
                priority={currentIndex === 0}
                quality={90}
              />
              {/* Desktop Image */}
              <Image
                src={currentCollection.image}
                alt={currentCollection.title}
                fill
                sizes="100vw"
                className="hidden lg:block object-cover"
                priority={currentIndex === 0}
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>

        {/* Content */}
        <motion.div 
          className="relative h-full flex flex-col justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Top — Branding */}
          <div className="text-center pt-2 md:pt-4 lg:pt-8">
            <h1 className="font-subheadline font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">
              Radilina
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mt-2 md:mt-3 lg:mt-4 tracking-[0.2em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_6px_rgba(0,0,0,0.9)]">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="relative">
            {/* Navigation Controls - Hidden on mobile */}
            <div className="hidden md:flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                aria-label="Previous collection"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                aria-label="Next collection"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Mobile Progress Bar */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-1 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Desktop Thumbnails */}
            <div className="hidden lg:flex items-center justify-end gap-4 mb-4">
              {thumbnails.map((thumbnail, idx) => (
                <motion.button
                  key={thumbnail.index}
                  onClick={() => goToSlide(thumbnail.index)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-white/30 hover:border-white/60 transition-all duration-300 group"
                  aria-label={`Go to ${thumbnail.title}`}
                >
                  <Image
                    src={thumbnail.image}
                    alt={thumbnail.title}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-xs text-white font-body font-semibold truncate">
                      {thumbnail.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Categories Animated Carousel */}
      <div className="mt-6 md:mt-8 lg:mt-10 mb-8 md:mb-12 lg:mb-14 relative w-full overflow-hidden">
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
      </div>
    </div>
  );
}
