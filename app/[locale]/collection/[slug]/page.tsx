import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '../../../../i18n/routing';
import { collections } from '../../../data/collections';
import { categories } from '../../../data/categories';
import PageHero from '../../../Components/PageHero';

interface CollectionPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params;
  const t = await getTranslations();
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return { title: t('collection.notFound') };
  return {
    title: `${collection.name} - Radilina | Ръчно изработена керамика`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const t = await getTranslations();
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
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

  // Map slug to translation key
  const getTranslationKey = (slug: string) => {
    if (slug === 'collection-1') return 'collection1';
    if (slug === 'classic-cream') return 'classicCream';
    return slug;
  };

  // Get collection title
  let collectionTitle: string;
  const translationKey = getTranslationKey(collection.slug);
  try {
    collectionTitle = t(`collections.${translationKey}.title`);
    if (collectionTitle.startsWith('collections.')) {
      collectionTitle = collection.name;
    }
  } catch {
    collectionTitle = collection.name;
  }

  // Get collection description
  let collectionDescription: string;
  try {
    collectionDescription = t(`collections.${translationKey}.description`);
    if (collectionDescription.startsWith('collections.')) {
      collectionDescription = collection.description;
    }
  } catch {
    collectionDescription = collection.description;
  }

  // Get collection image based on slug (matching the Collections component on index page)
  const getCollectionImage = (slug: string): string => {
    switch (slug) {
      case 'collection-1':
        return '/products/Collection 1.jpeg';
      case 'classic-cream':
        return '/products/Colletion 2.jpeg';
      case 'ornamental':
        return '/products/Colletion 3.jpeg';
      case 'rose':
        return '/products/collection 4.jpeg';
      default:
        return collection.heroImages[0] || '';
    }
  };

  const collectionImage = getCollectionImage(collection.slug);

  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={collectionTitle}
        subtitle={collectionDescription}
        images={[collectionImage]}
        imageAspectRatio="3/2"
        ctaButtons={[
          { label: t('collection.orderButton'), href: "/contact" },
          { label: t('common.backToHome'), href: "/", variant: "secondary" },
        ]}
      />

      {/* Products Grid */}
      {collection.products.length > 0 && (
        <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline">
              {t('collection.products')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {collection.products.map((product, index) => (
              <div
                key={index}
                className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-white">
                  {product.image && !product.image.includes('slide-3.jpg') ? (
                    <Image
                      src={product.image}
                      alt={getProductName(product.code, product.name)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        {getProductName(product.code, product.name)}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 font-body mt-1">
                        {t('common.code')}: {product.code}
                      </p>
                    </div>
                    {product.price && (
                      <div className="text-right flex-shrink-0">
                        <div className="text-xl md:text-2xl font-bold text-[#F4A7A7] font-headline">
                          {product.price}
                        </div>
                      </div>
                    )}
                  </div>
                  {(() => {
                    const subtitle = getProductSubtitle(product.code, product.subtitle || '');
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
        </section>
      )}

      {/* Gallery Images */}
      {collection.galleryImages.length > 0 && (
        <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline">
              {t('collection.gallery')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {collection.galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-[#1a1614] border border-gray-800 hover:border-gray-700 transition-all group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 md:mb-4 font-headline">
              {t('collection.ctaTitle')}
            </h3>
            <p className="text-sm md:text-base text-gray-400 font-body max-w-2xl mx-auto">
              {t('collection.ctaDescription')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#F4A7A7] text-white rounded-full font-body text-sm md:text-base font-semibold hover:bg-[#E89696] transition-colors"
            >
              {t('collection.orderButton')}
            </Link>
            <Link
              href="/#collections"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-gray-700 text-white rounded-full font-body text-sm md:text-base font-semibold hover:border-gray-600 transition-colors"
            >
              {t('collection.viewAllCollections')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
