import { getTranslations } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import AboutUs from '../../Components/AboutUs';
import HowItWorks from '../../Components/HowItWorks';
import FAQ from '../../Components/FAQ';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('common.about')} - Radilina | Ръчно изработена керамика`,
    description: t('pageHero.aboutSubtitle'),
  };
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
