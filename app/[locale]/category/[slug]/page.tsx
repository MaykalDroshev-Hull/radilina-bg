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

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

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

  // Helper function to get translated product name with fallback
  const getProductName = (code: string, fallback: string) => {
    try {
      const translated = t(`products.${code}.name`);
      return translated.startsWith('products.') ? fallback : translated;
    } catch {
      return fallback;
    }
  };

  // Helper function to get translated product subtitle with fallback
  const getProductSubtitle = (code: string, fallback: string) => {
    try {
      const translated = t(`products.${code}.subtitle`);
      return translated.startsWith('products.') ? fallback : translated;
    } catch {
      return fallback || '';
    }
  };

  // Collect unique images from subcategories for the hero, filter out invalid images
  let heroImages: string[] = [];
  try {
    heroImages = [...new Set(category.subcategories
      .map(s => s.image)
      .filter(img => img && typeof img === 'string' && img.trim() !== '' && !img.includes('slide-3.jpg') && !img.includes('гювеч'))
    )].slice(0, 3);
    // Ensure at least one image
    if (heroImages.length === 0) {
      if (category.image && typeof category.image === 'string' && category.image.trim() !== '' && !category.image.includes('slide-3.jpg') && !category.image.includes('гювеч')) {
        heroImages = [category.image];
      } else {
        // Fallback to a default image if no valid images found
        heroImages = ['/branding/Radilina branding_AP-58.avif'];
      }
    }
  } catch (error) {
    // Fallback on any error
    heroImages = ['/branding/Radilina branding_AP-58.avif'];
  }

  const productCount = category.subcategories.length;
  let categoryName: string;
  let categoryTitle: string;
  try {
    categoryTitle = t(`categories.${category.slug}`);
    categoryName = categoryTitle.toLowerCase();
  } catch {
    categoryTitle = category.name;
    categoryName = category.name.toLowerCase();
  }
  const subtitleKey = productCount === 1 ? 'category.viewCollectionOne' : 'category.viewCollectionMany';

  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={categoryTitle}
        subtitle={t(subtitleKey, { 
          name: categoryName,
          count: productCount
        })}
        images={heroImages}
        imageAspectRatio={category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' || category.slug === 'aksesori' ? '2/3' : '3/2'}
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
                {subcategory.image && !subcategory.image.includes('slide-3.jpg') ? (
                  <Image
                    src={subcategory.image}
                    alt={getProductName(subcategory.code, subcategory.name)}
                    fill
                    sizes={category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400 text-sm">No image</span>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white font-headline leading-tight">
                      {getProductName(subcategory.code, subcategory.name)}
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
                {(() => {
                  const subtitle = getProductSubtitle(subcategory.code, subcategory.subtitle || '');
                  return subtitle && (
                    <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                      {subtitle}
                    </p>
                  );
                })()}
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

        {/* Call to Action Section */}
        <div className="mt-8 md:mt-10 lg:mt-12 bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 md:mb-4 font-headline">
              {t('category.ctaTitle')}
            </h3>
            <p className="text-sm md:text-base text-gray-400 font-body max-w-2xl mx-auto">
              {t('category.ctaDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {/* Related Categories */}
            {(() => {
              const currentIndex = categories.findIndex(c => c.slug === category.slug);
              const relatedCategories = categories
                .filter((_, index) => index !== currentIndex)
                .slice(0, 2);
              
              return relatedCategories.map((relatedCategory) => (
                <Link
                  key={relatedCategory.slug}
                  href={`/category/${relatedCategory.slug}`}
                  className="flex items-center gap-4 p-5 md:p-6 bg-[#1a1614] border border-gray-800 rounded-xl md:rounded-2xl hover:border-[#CFE6D7] hover:bg-[#1a1614]/80 transition-all group"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={relatedCategory.image}
                      alt={t(`categories.${relatedCategory.slug}`)}
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-white font-headline">
                    {t(`categories.${relatedCategory.slug}`)}
                  </h4>
                </Link>
              ));
            })()}

            {/* Courses */}
            <Link
              href="/courses"
              className="flex items-center gap-4 p-5 md:p-6 bg-[#1a1614] border border-gray-800 rounded-xl md:rounded-2xl hover:border-[#C1AFA3] hover:bg-[#1a1614]/80 transition-all group"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/branding/Radilina branding_AP-120.avif"
                  alt={t('category.ctaCourses')}
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-white font-headline">
                {t('category.ctaCourses')}
              </h4>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="flex items-center gap-4 p-5 md:p-6 bg-gradient-to-br from-[#F4A7A7] to-[#E89696] border border-[#F4A7A7] rounded-xl md:rounded-2xl hover:from-[#E89696] hover:to-[#F4A7A7] transition-all group"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/branding/Radilina branding_AP-81.avif"
                  alt={t('category.ctaContact')}
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-white font-headline">
                {t('category.ctaContact')}
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
