"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations();
  
  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6')
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7')
    },
    {
      question: t('faq.q8'),
      answer: t('faq.a8')
    },
    {
      question: t('faq.q9'),
      answer: t('faq.a9')
    },
    {
      question: t('faq.q10'),
      answer: t('faq.a10')
    }
  ];
  return (
    <section id="faq">
      {/* 50/50 Grid Section */}
      <div className="w-full px-6 md:px-10 lg:px-12 mb-8 md:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Caption, Subtitle, and Image */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
              <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">{t('faq.sectionTitle')}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-4xl leading-tight">
              <span className="text-white font-headline">
                {t('faq.header')}
              </span>
              <span className="text-white font-headline">
                {" "}{t('faq.headerSub')}
              </span>
            </h3>

            {/* Images Grid - Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 lg:gap-5 mt-2 md:mt-4 lg:mt-6">
              {/* First Image - Full width on mobile, spans 2 columns on tablet, full width on desktop */}
              <div className="relative rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden group aspect-[3/2] sm:col-span-2 lg:col-span-1">
                <Image
                  src="/branding/Radilina branding_AP-3.avif"
                  alt="Керамични изделия"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Second Image - Full width on mobile, half width on tablet, full width on desktop */}
              <div className="relative rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden group aspect-[3/2] sm:col-span-1 lg:col-span-1">
                <Image
                  src="/branding/Radilina branding_AP-39.avif"
                  alt="Керамични изделия"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items (All Expanded) */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm p-4 md:p-5 lg:p-6 flex gap-3 md:gap-4 hover:shadow-md transition-all cursor-pointer border border-gray-800">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full mt-2 md:mt-2.5 flex-shrink-0"></span>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold text-white font-headline">
                    {faq.question}
                  </h4>
                  <p className="text-sm md:text-base lg:text-base text-gray-400 leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
