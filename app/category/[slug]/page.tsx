import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories } from '../../data/categories';
import PageHero from '../../Components/PageHero';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Ensure categories is an array before mapping
  if (!Array.isArray(categories)) return [];
  
  return categories.map((category) => ({
    slug: category.slug || 'unknown',
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  if (!slug) return { title: 'Radilina' };

  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: 'Категория не е намерена' };

  return {
    title: `${category.name || 'Продукти'} - Radilina | Ръчно изработена керамика`,
    description: `Разгледайте нашата колекция от ${(category.name || '').toLowerCase()} - ръчно изработена троянска керамика от Radilina.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // 1. Ensure subcategories exists (fallback to empty array)
  const subcats = Array.isArray(category.subcategories) ? category.subcategories : [];

  // 2. Filter out any subcategories that might be missing an image string
  const validImages = subcats
    .map(s => s?.image)
    .filter((img): img is string => {
      return typeof img === 'string' && 
             img.trim() !== '' && 
             !img.includes('slide-3.jpg');
    });

  // 3. Create the unique set
  let heroImages = [...new Set(validImages)].slice(0, 3);

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

  const categoryName = category.name || 'Продукти';

  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={categoryName}
        subtitle={`Разгледайте нашата колекция от ${categoryName.toLowerCase()} - ${subcats.length} продукт${subcats.length !== 1 ? 'а' : ''}, всеки ръчно изработен с внимание към детайла.`}
        images={heroImages}
        ctaButtons={[
          { label: "Свържете се за поръчка", href: "/contact" },
          { label: "Обратно към начало", href: "/", variant: "secondary" },
        ]}
      />

      <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 md:gap-5 lg:gap-6`}>
          {subcats.map((subcategory, index) => (
            <div
              key={`${subcategory.code || index}`}
              className="bg-[#1a1614] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`relative ${category.slug === 'chashi-alkohol' || category.slug === 'chashi-kafe' || category.slug === 'chashi-napitki' || category.slug === 'servizi' ? 'aspect-[2/3]' : 'aspect-[3/2]'} overflow-hidden bg-white`}>
                {subcategory.image && typeof subcategory.image === 'string' && subcategory.image.trim() !== '' ? (
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name || 'Product'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400 text-sm">Няма снимка</span>
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white font-headline leading-tight">
                      {subcategory.name || 'Без име'}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-body mt-1">
                      Код: {subcategory.code || 'N/A'}
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
      </section>
    </div>
  );
}