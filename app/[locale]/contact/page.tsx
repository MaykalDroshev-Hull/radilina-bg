import { getTranslations } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import Contact from '../../Components/Contact';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('common.contact')} - Radilina | Свържете се с нас`,
    description: t('pageHero.contactSubtitle'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations();
  
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t('pageHero.contactTitle')}
        subtitle={t('pageHero.contactSubtitle')}
        images={[
          "/branding/Radilina branding_AP-37.avif",
          "/branding/Radilina branding_AP-70.avif",
        ]}
      />
      <Contact />
    </div>
  );
}
