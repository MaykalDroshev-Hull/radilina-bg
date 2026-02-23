import { categories } from './categories';

export interface CollectionProduct {
  name: string;
  subtitle: string;
  image: string;
  code: string;
  price: string;
}

export interface CollectionImage {
  src: string;
  alt: string;
}

export interface Collection {
  slug: string;
  name: string;
  heroImages: string[];
  galleryImages: CollectionImage[];
  products: CollectionProduct[];
  description: string;
}

// Helper function to find products by image patterns
function findProductsByImages(patterns: string[]): CollectionProduct[] {
  const products: CollectionProduct[] = [];
  const foundCodes = new Set<string>();
  
  categories.forEach(category => {
    category.subcategories.forEach(sub => {
      patterns.forEach(pattern => {
        if (sub.image.includes(pattern) && !foundCodes.has(sub.code)) {
          products.push({
            name: sub.name,
            subtitle: sub.subtitle,
            image: sub.image,
            code: sub.code,
            price: sub.price,
          });
          foundCodes.add(sub.code);
        }
      });
    });
  });
  
  return products;
}

export const collections: Collection[] = [
  {
    slug: "collection-1",
    name: "Collection 1",
    heroImages: [
      "/products/01_2026 (2).avif",
      "/products/01_2026 (4) copy.avif",
      "/products/01_2026 (13).avif",
    ],
    galleryImages: [
      { src: "/products/01_2026 (14).avif", alt: "Collection 1" },
      { src: "/products/01_2026(15).avif", alt: "Collection 1" },
      { src: "/products/01_2026(17).avif", alt: "Collection 1" },
      { src: "/products/01_2026 (26).avif", alt: "Collection 1" },
      { src: "/products/01_2026 (32).avif", alt: "Collection 1" },
      { src: "/products/01_2026 (33).avif", alt: "Collection 1" },
      { src: "/products/01_2026 (36).avif", alt: "Collection 1" },
      { src: "/products/12_2025_-6.avif", alt: "Collection 1" },
      { src: "/products/12_2025_-8.avif", alt: "Collection 1" },
      { src: "/products/12_2025_-13.avif", alt: "Collection 1" },
      { src: "/products/more/1001.jpeg", alt: "Collection 1" },
      { src: "/products/more/9005(3).jpeg", alt: "Collection 1" },
      { src: "/products/more/9017-кана 1.500мл.jpeg", alt: "Collection 1" },
      { src: "/products/more/2302/6 литра гювеч.jpeg", alt: "Collection 1" },
    ],
    products: findProductsByImages([
      "01_2026 (2)",
      "01_2026 (4) copy",
      "01_2026 (13)",
      "01_2026 (14)",
      "01_2026(15)",
      "01_2026(17)",
      "01_2026 (26)",
      "01_2026 (32)",
      "01_2026 (33)",
      "01_2026 (36)",
      "12_2025_-6",
      "12_2025_-8",
      "12_2025_-13",
      "1001",
      "9005(3)",
      "9017",
      "6 литра гювеч",
    ]),
    description: "A curated selection of our finest handmade ceramics",
  },
  {
    slug: "classic-cream",
    name: "Classic Cream Series",
    heroImages: [
      "/products/more/2302/Colletion 2.jpeg",
      "/products/01_2026 (2).avif",
      "/products/01_2026 (13).avif",
    ],
    galleryImages: [],
    products: [],
    description: "Traditional Bulgarian aesthetics with a modern touch.",
  },
  {
    slug: "ornamental",
    name: "Ornamental Series",
    heroImages: [
      "/products/more/2302/Colletion 3.jpeg",
      "/products/01_2026 (14).avif",
      "/products/01_2026 (20).avif",
    ],
    galleryImages: [],
    products: [],
    description: "Hand-painted ornaments with character and soul",
  },
  {
    slug: "rose",
    name: "Rose Series",
    heroImages: [
      "/products/more/2302/collection 4.jpeg",
      "/products/01_2026 (26).avif",
      "/products/01_2026 (32).avif",
    ],
    galleryImages: [],
    products: [],
    description: "Gentle pink palette with hand-painted flowers",
  },
];
