import { getTranslations } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import VisitsAndAwards from '../../Components/VisitsAndAwards';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('common.visits')} - Radilina | Ръчно изработена керамика`,
    description: t('visits.pageDescription'),
  };
}

export default async function VisitsPage() {
  const t = await getTranslations();
  
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t('visits.pageTitle')}
        subtitle={t('visits.pageSubtitle')}
        images={[
          "/branding/Radilina branding_AP-37.avif",
          "/branding/Radilina branding_AP-239.avif",
        ]}
        imageAspectRatio="3/2"
      />
      <VisitsAndAwards />
    </div>
  );
}
