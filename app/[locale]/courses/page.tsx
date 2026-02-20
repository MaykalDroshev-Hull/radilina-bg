import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '../../../i18n/routing';
import PageHero from '../../Components/PageHero';
import Courses from '../../Components/Courses';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('common.courses')} - Radilina | Ръчно изработена керамика`,
    description: t('pageHero.coursesSubtitle'),
  };
}

export default async function CoursesPage() {
  const t = await getTranslations();
  
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t('pageHero.coursesTitle')}
        subtitle={t('pageHero.coursesSubtitle')}
        images={[
          "/branding/Radilina branding_AP-58.avif",
          "/branding/Radilina branding_AP-111.avif",
          "/branding/Radilina branding_AP-116.avif",
        ]}
        ctaButtons={[
          { label: t('pageHero.coursesButton1'), href: "/contact?inquiry=course" },
          { label: t('pageHero.coursesButton2'), href: "/", variant: "secondary" },
        ]}
      />
      <Courses />
      
      {/* Call to Action Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12">
        <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/branding/Radilina branding_AP-124.avif"
                  alt="Radilina ceramics course"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/branding/Radilina branding_AP-129.avif"
                  alt="Radilina ceramics course"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline">
                {t('courses.ctaTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 font-body leading-relaxed">
                {t('courses.ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact?inquiry=course"
                  className="inline-flex items-center justify-center gap-2 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-colors shadow-lg hover:shadow-xl"
                >
                  {t('courses.ctaButton')}
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:border-gray-600 transition-colors"
                >
                  {t('courses.ctaButtonSecondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
