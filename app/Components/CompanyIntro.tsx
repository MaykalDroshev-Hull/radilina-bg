"use client";

import { useTranslations } from 'next-intl';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function CompanyIntro() {
  const t = useTranslations();

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedItem>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-body leading-relaxed mb-4 md:mb-6">
              {t('home.companyIntro.line1')}
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 font-body leading-relaxed">
              {t('home.companyIntro.line2')}
            </p>
          </AnimatedItem>
        </div>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
