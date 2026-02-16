import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../../data/categories';
import PageHero from '../../Components/PageHero';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: 'Категория не е намерена' };
  return {
    title: `${category.name} - Radilina | Ръчно изработена керамика`,
    description: `Разгледайте нашата колекция от ${category.name.toLowerCase()} - ръчно изработена троянска керамика от Radilina.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Collect unique images from subcategories for the hero
  const heroImages = [...new Set(category.subcategories.map(s => s.image))].slice(0, 3);
  // Ensure at least one image
  if (heroImages.length === 0) heroImages.push(category.image);

  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <PageHero
        title={category.name}
        subtitle={`Разгледайте нашата колекция от ${category.name.toLowerCase()} - ${category.subcategories.length} продукт${category.subcategories.length !== 1 ? 'а' : ''}, всеки ръчно изработен с внимание към детайла.`}
        images={heroImages}
        ctaButtons={[
          { label: "Свържете се за поръчка", href: "/contact" },
          { label: "Обратно към начало", href: "/", variant: "secondary" },
        ]}
      />

      {/* Subcategories Grid */}
      <section className="w-full px-6 md:px-10 lg:px-12 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {category.subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] rounded-xl md:rounded-xl lg:rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-b from-[#F5F0EB] via-[#EDE6DE] to-[#E5DDD5]">
                <Image
                  src={subcategory.image}
                  alt={subcategory.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      Код: {subcategory.code}
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
        <div className="mt-8 md:mt-10 bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800">
          <div className="flex items-start gap-3 md:gap-4">
            <span className="text-3xl md:text-4xl flex-shrink-0">📦</span>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-2 font-headline">Работим на едро</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                Предлагаме специални цени за големи поръчки. Свържете се с нас за индивидуална оферта.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
