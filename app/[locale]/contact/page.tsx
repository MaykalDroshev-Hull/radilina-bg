import { getTranslations } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import Contact from '../../Components/Contact';
import { createMetadata } from '../../lib/metadata';

export async function generateMetadata() {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = `${t('common.contact')} - Radilina | Свържете се с нас`;
  const description = t('pageHero.contactSubtitle');
  
  return createMetadata({
    title,
    description,
    path: '/contact',
    locale,
    image: 'https://www.radilina-bg.com/branding/Radilina branding_AP-37.avif',
  });
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
