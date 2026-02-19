import { getTranslations } from 'next-intl/server';
import PageHero from '../../Components/PageHero';
import GalleryGrid from '../../gallery/GalleryGrid';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: `${t('common.gallery')} - Radilina | Нашите творения`,
    description: t('gallery.subtitle'),
  };
}

// Gallery images organized into 3 balanced columns for masonry layout
// Each column has a mix of landscape (3:2) and portrait (2:3) images
type GalleryImage = { src: string; aspect: 'landscape' | 'portrait' };

const column1: GalleryImage[] = [
  { src: '/branding/Radilina branding_AP-34.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-14.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-60.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-85.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-2.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-28.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-124.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-104.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-64.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-32.avif', aspect: 'landscape' },
];

const column2: GalleryImage[] = [
  { src: '/branding/Radilina branding_AP-50.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-3.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-186.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-93.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-20.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-47.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-67.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-187.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-100.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-24.avif', aspect: 'landscape' },
];

const column3: GalleryImage[] = [
  { src: '/branding/Radilina branding_AP-116.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-22.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-153.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-227.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-25.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-96.avif', aspect: 'portrait' },
  { src: '/branding/Radilina branding_AP-5.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-239.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-12.avif', aspect: 'landscape' },
  { src: '/branding/Radilina branding_AP-7.avif', aspect: 'landscape' },
];

const allColumns = [column1, column2, column3];

export default async function GalleryPage() {
  const t = await getTranslations();
  
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        images={[
          "/branding/Radilina branding_AP-43.avif",
          "/branding/Radilina branding_AP-76.avif",
          "/branding/Radilina branding_AP-88.avif",
        ]}
        ctaButtons={[
          { label: t('common.orderNow'), href: "/contact" },
        ]}
      />

      <GalleryGrid columns={allColumns} />
    </div>
  );
}
