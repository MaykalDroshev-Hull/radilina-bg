import { notFound } from 'next/navigation';
import { categories } from '../../data/categories';
import PageHero from '../../Components/PageHero';
import CategoryImage from '../../Components/CategoryImage';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    // Ensure categories is an array before mapping
    if (!Array.isArray(categories) || categories.length === 0) return [];
    
    return categories
      .filter((category) => category && category.slug && typeof category.slug === 'string')
      .map((category) => ({
        slug: category.slug,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  try {
    const { slug } = await params;
    if (!slug || typeof slug !== 'string') {
      return { title: 'Radilina' };
    }

    const category = categories.find((c) => c && c.slug === slug);
    if (!category) {
      return { title: 'Категория не е намерена' };
    }

    const categoryName = category.name || 'Продукти';
    const categoryNameLower = typeof categoryName === 'string' ? categoryName.toLowerCase() : 'продукти';

    return {
      title: `${categoryName} - Radilina | Ръчно изработена керамика`,
      description: `Разгледайте нашата колекция от ${categoryNameLower} - ръчно изработена троянска керамика от Radilina.`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return { title: 'Radilina' };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  try {
    const { slug } = await params;
    
    if (!slug || typeof slug !== 'string') {
      notFound();
    }

    const category = categories.find((c) => c && c.slug === slug);

    if (!category) {
      notFound();
    }

    // 1. Ensure subcategories exists (fallback to empty array)
    const subcats = Array.isArray(category.subcategories) 
      ? category.subcategories.filter((sub) => sub && typeof sub === 'object')
      : [];

    // 2. Filter out any subcategories that might be missing an image string
    const validImages = subcats
      .map(s => s?.image)
      .filter((img): img is string => {
        return typeof img === 'string' && 
               img.trim() !== '' && 
               !img.includes('slide-3.jpg');
      });

    // 3. Create the unique set
    let heroImages: string[] = [];
    try {
      heroImages = [...new Set(validImages)].slice(0, 3);
    } catch (error) {
      console.error('Error processing hero images:', error);
      heroImages = [];
    }

    // 4. Final fallback logic
    if (heroImages.length === 0) {
      if (category.image && 
          typeof category.image === 'string' && 
          category.image.trim() !== '' && 
          !category.image.includes('slide-3.jpg')) {
        heroImages = [category.image];
      } else {
        heroImages = ['/branding/Radilina branding_AP-58.avif'];
      }
    }

    // Ensure heroImages is never empty
    if (!Array.isArray(heroImages) || heroImages.length === 0) {
      heroImages = ['/branding/Radilina branding_AP-58.avif'];
    }

    const categoryName = category.name || 'Продукти';

    const subtitle = `Разгледайте нашата колекция от ${categoryName.toLowerCase()} - ${subcats.length} продукт${subcats.length !== 1 ? 'а' : ''}, всеки ръчно изработен с внимание към детайла.`;
    const categorySlug = category.slug || '';

    return (
      <div className="w-full max-w-[1620px] mx-auto">
        <PageHero
          title={categoryName}
          subtitle={subtitle}
          images={heroImages}
          ctaButtons={[
            { label: "Свържете се за поръчка", href: "/contact" },
            { label: "Обратно към начало", href: "/", variant: "secondary" },
          ]}
        />

        <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
          <div className={`grid grid-cols-1 md:grid-cols-2 ${categorySlug === 'chashi-alkohol' || categorySlug === 'chashi-kafe' || categorySlug === 'chashi-napitki' || categorySlug === 'servizi' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 md:gap-5 lg:gap-6`}>
            {subcats.map((subcategory, index) => {
              const subImage = subcategory?.image || '';
              const subName = subcategory?.name || 'Без име';
              const subCode = subcategory?.code || `N/A-${index}`;
              const subPrice = subcategory?.price;
              const subSubtitle = subcategory?.subtitle;
              const isPortraitCategory = categorySlug === 'chashi-alkohol' || categorySlug === 'chashi-kafe' || categorySlug === 'chashi-napitki' || categorySlug === 'servizi';

              return (
                <div
                  key={`${subCode}-${index}`}
                  className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className={`relative ${isPortraitCategory ? 'aspect-[2/3]' : 'aspect-[3/2]'} overflow-hidden bg-white`}>
                    <CategoryImage
                      src={subImage}
                      alt={subName}
                      aspectRatio={isPortraitCategory ? '2/3' : '3/2'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 md:p-5 lg:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white font-headline leading-tight">
                          {subName}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 font-body mt-1">
                          Код: {subCode}
                        </p>
                      </div>
                      {subPrice && typeof subPrice === 'string' && subPrice.trim() !== '' && (
                        <div className="text-right flex-shrink-0">
                          <div className="text-xl md:text-2xl font-bold text-[#F4A7A7] font-headline">
                            {subPrice}
                          </div>
                        </div>
                      )}
                    </div>
                    {subSubtitle && typeof subSubtitle === 'string' && subSubtitle.trim() !== '' && (
                      <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                        {subSubtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error rendering category page:', error);
    notFound();
  }
}