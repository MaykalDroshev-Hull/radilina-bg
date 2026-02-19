"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function HowItWorks() {
  const t = useTranslations();
  
  const processSteps = [
    {
      number: 1,
      title: t('howItWorks.step1.title'),
      subtitle: t('howItWorks.step1.subtitle'),
      image: "/branding/Radilina branding_AP-224.avif",
    },
    {
      number: 2,
      title: t('howItWorks.step2.title'),
      subtitle: t('howItWorks.step2.subtitle'),
      image: "/branding/Radilina branding_AP-209.avif",
    },
    {
      number: 3,
      title: t('howItWorks.step3.title'),
      subtitle: t('howItWorks.step3.subtitle'),
      image: "/branding/Radilina branding_AP-156.avif",
    },
    {
      number: 4,
      title: t('howItWorks.step4.title'),
      subtitle: t('howItWorks.step4.subtitle'),
      image: "/branding/Radilina branding_AP-109.avif",
    },
    {
      number: 5,
      title: t('howItWorks.step5.title'),
      subtitle: t('howItWorks.step5.subtitle'),
      image: "/branding/Radilina branding_AP-187.avif",
    },
    {
      number: 6,
      title: t('howItWorks.step6.title'),
      subtitle: t('howItWorks.step6.subtitle'),
      image: "/branding/Radilina branding_AP-116.avif",
    },
    {
      number: 7,
      title: t('howItWorks.step7.title'),
      subtitle: t('howItWorks.step7.subtitle'),
      image: "/branding/Radilina branding_AP-40.avif",
    },
    {
      number: 8,
      title: t('howItWorks.step8.title'),
      subtitle: t('howItWorks.step8.subtitle'),
      image: "/branding/Radilina branding_AP-18.avif",
    },
  ];

  return (
    <section id="how-to">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 lg:px-12 mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-10 lg:mb-12">
        {/* Left side */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
          <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">{t('howItWorks.sectionTitle')}</span>
        </div>
        {/* Right side */}
        <p className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
          <span className="font-semibold text-white font-headline leading-tight">
            {t('howItWorks.header')}
          </span>
          <span className="text-gray-500 font-headline leading-tight">
            {" "}{t('howItWorks.headerSub')}
          </span>
        </p>
      </div>

      {/* Grid Section */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        {/* Introductory Text */}
        <div className="mb-6 md:mb-8 lg:mb-10">
          <p className="text-base md:text-lg lg:text-xl text-gray-400 font-body leading-relaxed max-w-4xl">
            {t('howItWorks.intro')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number} 
              className="md:col-span-1 lg:col-span-1 rounded-xl md:rounded-xl lg:rounded-2xl bg-[#1a1614] shadow-sm hover:shadow-md overflow-hidden group cursor-pointer transition-shadow border border-gray-800"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm lg:text-base font-bold flex-shrink-0">
                    {step.number}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-white font-headline">{step.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">{step.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <Link href="/#courses" className="flex items-center justify-center gap-2 md:gap-2.5 px-6 md:px-7 lg:px-8 py-3 md:py-3.5 rounded-full bg-white text-black text-sm md:text-base hover:bg-gray-200 active:scale-95 transition-all w-full md:w-auto font-body">
            {t('howItWorks.ourCourses')}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>

      {/* Usage Instructions Section */}
      <section className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 font-headline">
            {t('howItWorks.usageTitle')}
          </h3>
          
          <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-400 font-body leading-relaxed">
            <p>
              {t('howItWorks.usage1')}
            </p>
            
            <p>
              {t('howItWorks.usage2')}
            </p>
            
            <p>
              {t('howItWorks.usage3')}
            </p>
            
            <p className="text-gray-500">
              {t('howItWorks.usage4')}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
