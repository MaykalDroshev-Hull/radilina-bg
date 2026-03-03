"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Award, Users, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function AboutUs() {
  const t = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentAlt, setCurrentAlt] = useState('');
  
  const allImages = [
    { src: '/WhatsApp Image 2026-03-03 at 08.33.27.jpeg', alt: t('about.foundersImageAlt') },
    { src: '/WhatsApp Image 2026-03-03 at 08.36.42.jpeg', alt: t('about.ilinaImageAlt1') },
    { src: '/WhatsApp Image 2026-03-03 at 08.36.42 (1).jpeg', alt: t('about.ilinaImageAlt2') },
  ];

  const openModal = (imageSrc: string, imageAlt: string) => {
    setCurrentImage(imageSrc);
    setCurrentAlt(imageAlt);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    const currentIdx = allImages.findIndex(img => img.src === currentImage);
    const nextIndex = (currentIdx + 1) % allImages.length;
    setCurrentImage(allImages[nextIndex].src);
    setCurrentAlt(allImages[nextIndex].alt);
  }, [currentImage, allImages]);

  const prevImage = useCallback(() => {
    const currentIdx = allImages.findIndex(img => img.src === currentImage);
    const prevIndex = (currentIdx - 1 + allImages.length) % allImages.length;
    setCurrentImage(allImages[prevIndex].src);
    setCurrentAlt(allImages[prevIndex].alt);
  }, [currentImage, allImages]);

  useEffect(() => {
    if (!modalOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, prevImage, nextImage, handleCloseModal]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <AnimatedSection id="about" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2 md:gap-3">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">{t('about.sectionTitle')}</span>
          </AnimatedItem>
          
          {/* Right side */}
          <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
            <span className="text-white font-headline leading-tight">
              {t('about.header')}
            </span>
            <span className="text-white font-headline leading-tight">
              {" "}{t('about.headerSub')}
            </span>
          </AnimatedItem>
        </div>

        {/* Main Content - Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          {/* Image */}
          <AnimatedItem>
            <div className="relative aspect-[3/2] lg:aspect-auto lg:h-[600px] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/branding/Radilina branding_AP-71.avif"
                alt={t('about.imageAlt')}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </AnimatedItem>

          {/* Text Content */}
          <AnimatedItem>
            <div className="flex flex-col justify-center h-full space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline leading-tight">
                  {t('about.historyTitle')}
                </h3>
                <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-400 font-body leading-relaxed">
                  <p>
                    {t('about.history1')}
                  </p>
                  <p>
                    {t('about.history2')}
                  </p>
                  <p>
                    {t('about.history3')}
                  </p>
                  <p>
                    {t('about.history4')}
                  </p>
                  <p>
                    {t('about.history5')}
                  </p>
                </div>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4A7A7] mb-2 font-headline">46+</div>
                  <div className="text-sm md:text-base text-gray-400 font-body">{t('about.yearsExperience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4A7A7] mb-2 font-headline">100%</div>
                  <div className="text-sm md:text-base text-gray-400 font-body">{t('about.handmade')}</div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* Ilina and Radina Section */}
        <AnimatedItem>
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 font-headline text-center">
              {t('about.foundersTitle')}
            </h3>
            
            {/* Ilina and Radina Info Image - Smaller and clickable */}
            <div className="mb-6 md:mb-8 max-w-2xl mx-auto">
              <div 
                className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => openModal('/WhatsApp Image 2026-03-03 at 08.33.27.jpeg', t('about.foundersImageAlt'))}
              >
                <Image
                  src="/WhatsApp Image 2026-03-03 at 08.33.27.jpeg"
                  alt={t('about.foundersImageAlt')}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 672px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <Maximize2 className="w-8 h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Ilina Images Grid - Smaller and clickable */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div 
                className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => openModal('/WhatsApp Image 2026-03-03 at 08.36.42.jpeg', t('about.ilinaImageAlt1'))}
              >
                <Image
                  src="/WhatsApp Image 2026-03-03 at 08.36.42.jpeg"
                  alt={t('about.ilinaImageAlt1')}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <Maximize2 className="w-8 h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div 
                className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => openModal('/WhatsApp Image 2026-03-03 at 08.36.42 (1).jpeg', t('about.ilinaImageAlt2'))}
              >
                <Image
                  src="/WhatsApp Image 2026-03-03 at 08.36.42 (1).jpeg"
                  alt={t('about.ilinaImageAlt2')}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <Maximize2 className="w-8 h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* Production Section */}
        <AnimatedItem>
          <div className="mb-8 md:mb-10 lg:mb-12 bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 font-headline">
              {t('about.production')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Битова керамика */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#F4A7A7]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">{t('about.household')}</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• {t('about.householdItems.item1')}</li>
                  <li>• {t('about.householdItems.item2')}</li>
                  <li>• {t('about.householdItems.item3')}</li>
                  <li>• {t('about.householdItems.item4')}</li>
                  <li>• {t('about.householdItems.item5')}</li>
                  <li>• {t('about.householdItems.item6')}</li>
                  <li>• {t('about.householdItems.item7')}</li>
                  <li>• {t('about.householdItems.item8')}</li>
                  <li>• {t('about.householdItems.item9')}</li>
                  <li>• {t('about.householdItems.item10')}</li>
                  <li>• {t('about.householdItems.item11')}</li>
                  <li>• {t('about.householdItems.item12')}</li>
                  <li>• {t('about.householdItems.item13')}</li>
                </ul>
              </div>

              {/* Сувенирна керамика */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#CFE6D7]/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#CFE6D7]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">{t('about.souvenir')}</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• {t('about.souvenirItems.item1')}</li>
                  <li>• {t('about.souvenirItems.item2')}</li>
                  <li>• {t('about.souvenirItems.item3')}</li>
                  <li>• {t('about.souvenirItems.item4')}</li>
                  <li>• {t('about.souvenirItems.item5')}</li>
                  <li>• {t('about.souvenirItems.item6')}</li>
                  <li>• {t('about.souvenirItems.item7')}</li>
                  <li>• {t('about.souvenirItems.item8')}</li>
                  <li>• {t('about.souvenirItems.item9')}</li>
                  <li>• {t('about.souvenirItems.item10')}</li>
                  <li>• {t('about.souvenirItems.item11')}</li>
                  <li>• {t('about.souvenirItems.item12')}</li>
                </ul>
              </div>

              {/* Сервизи */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C1AFA3]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C1AFA3]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">{t('about.sets')}</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• {t('about.setsItems.item1')}</li>
                  <li>• {t('about.setsItems.item2')}</li>
                  <li>• {t('about.setsItems.item3')}</li>
                  <li>• {t('about.setsItems.item4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* Values Section */}
        <AnimatedItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center mb-4 md:mb-5">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-[#F4A7A7]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">{t('about.value1Title')}</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                {t('about.value1Desc')}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#CFE6D7]/10 flex items-center justify-center mb-4 md:mb-5">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-[#CFE6D7]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">{t('about.value2Title')}</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                {t('about.value2Desc')}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#C1AFA3]/10 flex items-center justify-center mb-4 md:mb-5">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-[#C1AFA3]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">{t('about.value3Title')}</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                {t('about.value3Desc')}
              </p>
            </div>
          </div>
        </AnimatedItem>

        {/* Image Modal */}
        {modalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-body">
                {allImages.findIndex(img => img.src === currentImage) + 1} / {allImages.length}
              </div>
            )}

            {/* Image Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image
                  src={currentImage}
                  alt={currentAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </AnimatedContainer>
    </AnimatedSection>
  );
}
