import PageHero from '../Components/PageHero';
import GalleryGrid from './GalleryGrid';

export const metadata = {
  title: 'Галерия - Radilina | Нашите творения',
  description: 'Разгледайте галерията на Radilina - ръчно изработена троянска керамика, изкуство в глина и цвят.',
};

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

export default function GalleryPage() {
  try {
    // Ensure allColumns is valid
    const validColumns = Array.isArray(allColumns) && allColumns.length > 0
      ? allColumns.filter(col => Array.isArray(col) && col.length > 0)
      : [];

    // Ensure we have at least one column
    if (validColumns.length === 0) {
      console.error('No valid gallery columns found');
    }

    const heroImages = [
      "/branding/Radilina branding_AP-43.avif",
      "/branding/Radilina branding_AP-76.avif",
      "/branding/Radilina branding_AP-88.avif",
    ].filter(img => img && typeof img === 'string' && img.trim() !== '');

    // Ensure heroImages is never empty
    const finalHeroImages = heroImages.length > 0 
      ? heroImages 
      : ['/branding/Radilina branding_AP-58.avif'];

    return (
      <div className="w-full max-w-[1620px] mx-auto">
        <PageHero
          title="Нашите творения"
          subtitle="Изкуство в глина и цвят. Разгледайте нашата галерия от ръчно изработени керамични изделия, всяко от което е уникално произведение."
          images={finalHeroImages}
          ctaButtons={[
            { label: "Поръчайте сега", href: "/contact" },
          ]}
        />

        {validColumns.length > 0 ? (
          <GalleryGrid columns={validColumns} />
        ) : (
          <section className="py-12 md:py-16 lg:py-20">
            <div className="px-6 md:px-10 lg:px-12 text-center">
              <p className="text-gray-400">Галерията е временно недостъпна.</p>
            </div>
          </section>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error rendering gallery page:', error);
    return (
      <div className="w-full max-w-[1620px] mx-auto">
        <PageHero
          title="Нашите творения"
          subtitle="Изкуство в глина и цвят."
          images={['/branding/Radilina branding_AP-58.avif']}
          ctaButtons={[
            { label: "Поръчайте сега", href: "/contact" },
          ]}
        />
        <section className="py-12 md:py-16 lg:py-20">
          <div className="px-6 md:px-10 lg:px-12 text-center">
            <p className="text-gray-400">Галерията е временно недостъпна.</p>
          </div>
        </section>
      </div>
    );
  }
}
