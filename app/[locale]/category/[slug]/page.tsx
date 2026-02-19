import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '../../../../i18n/routing';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../../../data/categories';
import PageHero from '../../../Components/PageHero';

interface CategoryPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const t = await getTranslations();
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: t('category.notFound') };
  return {
    title: `${t(`categories.${category.slug}`)} - Radilina | Ръчно изработена керамика`,
    description: t('category.viewCollection', { 
      name: t(`categories.${category.slug}`).toLowerCase(),
      count: category.subcategories.length,
      plural: category.subcategories.length !== 1 ? 'а' : ''
    }),
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const t = await getTranslations();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Collect unique images from subcategories for the hero
  const heroImages = [...new Set(category.subcategories.map(s => s.image))].slice(0, 3);
  // Ensure at least one image
  if (heroImages.length === 0) heroImages.push(category.image);

  const productCount = category.subcategories.length;
  const categoryName = t(`categories.${category.slug}`).toLowerCase();
  const subtitleKey = productCount === 1 ? 'category.viewCollectionOne' : 'category.viewCollectionMany';

  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={t(`categories.${category.slug}`)}
        subtitle={t(subtitleKey, { 
          name: categoryName,
          count: productCount
        })}
        images={heroImages}
        ctaButtons={[
          { label: t('category.orderButton'), href: "/contact" },
          { label: t('common.backToHome'), href: "/", variant: "secondary" },
        ]}
      />

      {/* Subcategories Grid */}
      <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 md:gap-5 lg:gap-6`}>
          {category.subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`relative ${category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? 'aspect-[2/3]' : 'aspect-[3/2]'} overflow-hidden bg-white`}>
                <Image
                  src={subcategory.image}
                  alt={subcategory.name}
                  fill
                  sizes={category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white font-headline leading-tight">
                      {subcategory.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-body mt-1">
                      {t('common.code')}: {subcategory.code}
                    </p>
                  </div>
                  {subcategory.price && (
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl md:text-2xl font-bold text-[#F4A7A7] font-headline">
                        {subcategory.price}
                      </div>
                    </div>
                  )}
                </div>
                {subcategory.subtitle && (
                  <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                    {subcategory.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Notice */}
        <div className="mt-8 md:mt-10 bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800">
          <div className="flex items-start gap-3 md:gap-4">
            <span className="text-3xl md:text-4xl flex-shrink-0">📦</span>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-2 font-headline">{t('category.wholesale')}</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                {t('category.wholesaleDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
