"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface VisitItem {
  id: string;
  images: string[];
  text: string;
  title?: string;
  portrait?: boolean | boolean[];
}

export default function VisitsAndAwards() {
  const t = useTranslations('visits');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAlt, setCurrentAlt] = useState('');

  const openModal = (images: string[], startIndex: number, alt: string) => {
    setCurrentImages(images);
    setCurrentIndex(startIndex);
    setCurrentAlt(alt);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };


  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  }, [currentImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

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

  // Get all visit items from translations
  const visits: VisitItem[] = [
    {
      id: 'visit1',
      images: [
        '/visits/1/WhatsApp Image 2026-03-01 at 10.05.24.avif'
      ],
      text: t('visit1.text'),
      title: t('visit1.title'),
      portrait: true
    },
    {
      id: 'visit2',
      images: [
        '/visits/2/WhatsApp Image 2026-03-01 at 09.49.22.avif',
        '/visits/2/WhatsApp Image 2026-03-01 at 09.49.22 (1).avif',
        '/visits/2/WhatsApp Image 2026-03-01 at 09.49.22 (2).avif',
        '/visits/2/WhatsApp Image 2026-03-01 at 09.49.22 (3).avif'
      ],
      text: t('visit2.text'),
      title: t('visit2.title'),
      portrait: true
    },
    {
      id: 'visit3',
      images: [
        '/visits/3/WhatsApp Image 2026-02-28 at 08.18.39.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.18.59.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.19.07.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.19.22.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.19.39.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.20.24.avif',
        '/visits/3/WhatsApp Image 2026-02-28 at 08.20.40.avif'
      ],
      text: t('visit3.text'),
      title: t('visit3.title'),
      portrait: false
    },
    {
      id: 'visit4',
      images: [],
      text: t('visit4.text'),
      title: t('visit4.title'),
      portrait: true
    },
    {
      id: 'visit5',
      images: [
        '/visits/5/WhatsApp Image 2026-03-01 at 09.57.00.avif'
      ],
      text: t('visit5.text'),
      title: t('visit5.title'),
      portrait: true
    },
    {
      id: 'visit6',
      images: [
        '/visits/6/WhatsApp Image 2026-03-01 at 21.07.26.avif',
        '/visits/6/WhatsApp Image 2026-03-01 at 21.07.26 (1).avif',
        '/visits/6/WhatsApp Image 2026-03-01 at 21.07.27.avif',
        '/visits/6/WhatsApp Image 2026-03-01 at 21.07.27 (1).avif'
      ],
      text: t('visit6.text'),
      title: t('visit6.title'),
      portrait: [true, false, false, false]
    },
    {
      id: 'visit7',
      images: [
        '/visits/7/WhatsApp Image 2026-03-01 at 21.27.16.avif',
        '/visits/7/WhatsApp Image 2026-03-01 at 21.27.17.avif',
        '/visits/7/WhatsApp Image 2026-03-01 at 21.27.17 (1).avif'
      ],
      text: t('visit7.text'),
      title: t('visit7.title'),
      portrait: true
    }
  ];

  const interview: VisitItem = {
    id: 'interview',
    images: [
      '/visits/Interview/WhatsApp Image 2026-03-01 at 09.44.28.avif',
      '/visits/Interview/WhatsApp Image 2026-03-01 at 09.44.35.avif'
    ],
    text: t('interview.text'),
    title: t('interview.title'),
    portrait: true
  };

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visits Section */}
        <AnimatedContainer className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white mb-8 md:mb-10 lg:mb-12">
            {t('visitsTitle')}
          </h2>
          
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {visits.map((visit, index) => (
              <AnimatedItem key={visit.id} className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
                {/* Images */}
                {visit.images.length > 0 && (
                  <div className={`flex-shrink-0 ${visit.images.length === 1 ? 'w-full lg:w-1/3' : 'w-full lg:w-2/5'}`}>
                    {visit.images.length === 1 ? (
                      <div 
                        className={`relative ${visit.portrait ? 'aspect-[2/3]' : 'aspect-[4/3]'} rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 cursor-pointer hover:opacity-90 transition-opacity`}
                        onClick={() => openModal(visit.images, 0, t(`${visit.id}.alt`))}
                      >
                        <Image
                          src={visit.images[0]}
                          alt={t(`${visit.id}.alt`)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {visit.images.map((img, imgIndex) => {
                          const isPortrait = Array.isArray(visit.portrait) 
                            ? visit.portrait[imgIndex] 
                            : visit.portrait === true;
                          return (
                            <div 
                              key={imgIndex} 
                              className={`relative ${isPortrait ? 'aspect-[2/3]' : 'aspect-[4/3]'} rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 cursor-pointer hover:opacity-90 transition-opacity`}
                              onClick={() => openModal(visit.images, imgIndex, `${t(`${visit.id}.alt`)} ${imgIndex + 1}`)}
                            >
                              <Image
                                src={img}
                                alt={`${t(`${visit.id}.alt`)} ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 33vw"
                                unoptimized
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Text */}
                <div className={`flex-1 ${visit.images.length === 0 ? 'w-full' : ''}`}>
                  <div className="prose prose-invert max-w-none">
                    {visit.title && (
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-5 font-headline">
                        {visit.title}
                      </h3>
                    )}
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-body whitespace-pre-line">
                      {visit.text}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedContainer>

        {/* Interview Section */}
        <AnimatedContainer className="border-t border-gray-800 pt-16 md:pt-20 lg:pt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white mb-8 md:mb-10 lg:mb-12">
            {t('interviewTitle')}
          </h2>
          
          <AnimatedItem className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
            {/* Images */}
            {interview.images.length > 0 && (
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {interview.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openModal(interview.images, imgIndex, `${t('interview.alt')} ${imgIndex + 1}`)}
                    >
                      <Image
                        src={img}
                        alt={`${t('interview.alt')} ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Text */}
            <div className="flex-1">
              <div className="prose prose-invert max-w-none">
                {interview.title && (
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-5 font-headline">
                    {interview.title}
                  </h3>
                )}
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-body whitespace-pre-line">
                  {interview.text}
                </p>
              </div>
            </div>
          </AnimatedItem>
        </AnimatedContainer>

        {/* Videos Section */}
        <AnimatedContainer className="mt-16 md:mt-20 lg:mt-24 mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-white mb-8 md:mb-10 lg:mb-12">
            {t('videosTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* YouTube Video 1 */}
            <AnimatedItem className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sxWyMXiQuS0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AnimatedItem>

            {/* YouTube Video 2 */}
            <AnimatedItem className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/B1PrI5w-Xm0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AnimatedItem>

            {/* BTV Article Button */}
            <AnimatedItem className="rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-gradient-to-br from-[#1a1614] to-[#1a1614] border border-gray-800 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center gap-4 md:gap-5 hover:shadow-lg transition-all hover:border-[#F4A7A7]/30">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-headline text-center">
                {t('tasteOfBulgariaTitle')}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-body text-center leading-relaxed">
                {t('tasteOfBulgariaDescription')}
              </p>
              <a
                href="https://www.btv.bg/shows/vkusat-na-bulgaria/videos/vkusat-na-balgarija-v-trojanskija-balkan-01-11-2025-1-chast.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#F4A7A7] text-white text-sm md:text-base font-semibold hover:bg-[#E89696] active:scale-95 transition-all font-body w-full md:w-auto"
              >
                {t('watchOnBTV')}
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </AnimatedItem>
          </div>
        </AnimatedContainer>

        {/* Call to Action Section */}
        <AnimatedContainer className="mt-16 md:mt-20 lg:mt-24">
          <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline">
                {t('ctaTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 font-body leading-relaxed max-w-3xl mx-auto">
                {t('ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-colors shadow-lg hover:shadow-xl"
                >
                  {t('ctaButton')}
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:border-gray-600 transition-colors"
                >
                  {t('ctaButtonSecondary')}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>

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
          {currentImages.length > 1 && (
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
          {currentImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-body">
              {currentIndex + 1} / {currentImages.length}
            </div>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={currentImages[currentIndex]}
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
    </AnimatedSection>
  );
}
