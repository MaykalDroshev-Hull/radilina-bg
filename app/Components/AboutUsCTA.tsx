"use client";

import Image from 'next/image';
import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function AboutUsCTA() {
  const t = useTranslations();
  
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12">
      <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Images */}
          <div className="relative" style={{ paddingBottom: '95%' }}>
            <div className="absolute top-0 left-0 w-[75%] aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 z-10 shadow-xl">
              <Image
                src="/branding/Radilina branding_AP-65.avif"
                alt={t('home.aboutCTA.imageAlt')}
                fill
                sizes="(max-width: 768px) 75vw, 38vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[75%] aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <Image
                src="/branding/Radilina branding_AP-172.avif"
                alt={t('home.aboutCTA.imageAlt')}
                fill
                sizes="(max-width: 768px) 75vw, 38vw"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline">
              {t('home.aboutCTA.title')}
            </h3>
            <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 font-body leading-relaxed">
              {t('home.aboutCTA.description')}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-colors shadow-lg hover:shadow-xl"
            >
              {t('home.aboutCTA.button')}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
