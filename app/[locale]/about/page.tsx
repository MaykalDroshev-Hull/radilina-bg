import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import AboutUs from '../../Components/AboutUs';
import HowItWorks from '../../Components/HowItWorks';
import FAQ from '../../Components/FAQ';
import { createMetadata } from '../../lib/metadata';

export async function generateMetadata() {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = `${t('common.about')} - Radilina | Ръчно изработена керамика`;
  const description = t('pageHero.aboutSubtitle');
  
  return createMetadata({
    title,
    description,
    path: '/about',
    locale,
    image: 'https://www.radilina-bg.com/branding/Radilina branding_AP-238.avif',
  });
}

export default async function AboutPage() {
  const t = await getTranslations();
  
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t('pageHero.aboutTitle')}
        subtitle={t('pageHero.aboutSubtitle')}
        images={[
          "/branding/Radilina branding_AP-238.avif",
          "/branding/Radilina branding_AP-79.avif",
          "/branding/Radilina branding_AP-74.avif",
        ]}
        imageAspectRatio="2/3"
        ctaButtons={[
          { label: t('pageHero.aboutButton1'), href: "/#products" },
          { label: t('pageHero.aboutButton2'), href: "/contact", variant: "secondary" },
        ]}
      />
      <AboutUs />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
