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
    name: "Classic Cream Collection",
    heroImages: [
      "/products/01_2026 (2).avif",
      "/products/01_2026 (4) copy.avif",
      "/products/01_2026 (13).avif",
    ],
    galleryImages: [
      { src: "/products/01_2026 (14).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026(15).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026(17).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026 (26).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026 (32).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026 (33).avif", alt: "Classic Cream Collection" },
      { src: "/products/01_2026 (36).avif", alt: "Classic Cream Collection" },
      { src: "/products/12_2025_-6.avif", alt: "Classic Cream Collection" },
      { src: "/products/12_2025_-8.avif", alt: "Classic Cream Collection" },
      { src: "/products/12_2025_-13.avif", alt: "Classic Cream Collection" },
      { src: "/products/1001.jpeg", alt: "Classic Cream Collection" },
      { src: "/products/9005(3).jpeg", alt: "Classic Cream Collection" },
      { src: "/products/9017-кана 1.500мл.jpeg", alt: "Classic Cream Collection" },
      { src: "/products/6 литра гювеч.jpeg", alt: "Classic Cream Collection" }
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
    ]),
    description: "Elegant pieces in soft cream glaze, embodying timeless Bulgarian ceramic tradition",
  },
  {
    slug: "classic-cream",
    name: "Oriental Collection",
    heroImages: [
      "/products/Colletion 2.jpeg",
    ],
    galleryImages: [
      { src: "/products/01_2026(23).avif", alt: "Oriental Collection" },
      { src: "/products/12_2025_-3.avif", alt: "Oriental Collection" },
      { src: "/products/1001.jpeg", alt: "Oriental Collection" },
      { src: "/products/4007(3).jpeg", alt: "Oriental Collection" },
      { src: "/products/7003.jpeg", alt: "Oriental Collection" },
      { src: "/products/Guvetch-6.jpeg", alt: "Oriental Collection" },
      { src: "/products/Гювеч 6 литра.jpeg", alt: "Oriental Collection" },
    ],
    products: findProductsByImages([
      "01_2026(5)",
      "01_2026(10)",
      "01_2026(30)",
      "01_2026(23)",
      "12_2025_-3",
      "1001",
      "4007(3)",
      "7003",
      "Guvetch-6",
    ]),
    description: "Inspired by oriental aesthetics with intricate patterns and rich cultural heritage",
  },
  {
    slug: "ornamental",
    name: "Pink Collection",
    heroImages: [
      "/products/Colletion 3.jpeg",
    ],
    galleryImages: [
      { src: "/products/02_2026 (1).avif", alt: "Pink Collection" },
      { src: "/products/2003(3).jpeg", alt: "Pink Collection" },
      { src: "/products/6001.jpeg", alt: "Pink Collection" },
    ],
    products: findProductsByImages([
      "02_2026 (1)",
      "2003(3)",
      "6001",
    ]),
    description: "Delicate pink tones with hand-painted floral motifs and feminine elegance",
  },
  {
    slug: "rose",
    name: "Green Collection",
    heroImages: [
      "/products/collection 4.jpeg",
    ],
    galleryImages: [
      { src: "/products/01_2026 (1).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (7).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (9).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (20).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (28).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (37).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (38).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (39).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (40).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (44).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (47).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (48).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (49).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (51).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (52).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (53).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (55).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (56).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (57).avif", alt: "Green Collection" },
      { src: "/products/01_2026 (58).avif", alt: "Green Collection" },
      { src: "/products/12_2025_1.avif", alt: "Green Collection" },
      { src: "/products/12_2025_-12.avif", alt: "Green Collection" },
      { src: "/products/12_2025_-17.avif", alt: "Green Collection" },
      { src: "/products/12_2025_-24.avif", alt: "Green Collection" },
      { src: "/products/9005(2).jpeg", alt: "Green Collection" },
      { src: "/products/Ваза.jpeg", alt: "Green Collection" },
      { src: "/products/Халба.jpeg", alt: "Green Collection" },
    ],
    products: findProductsByImages([
      "01_2026 (1)",
      "01_2026 (7)",
      "01_2026 (9)",
      "01_2026 (20)",
      "01_2026 (28)",
      "01_2026 (37)",
      "01_2026 (38)",
      "01_2026 (39)",
      "01_2026 (40)",
      "01_2026 (44)",
      "01_2026 (47)",
      "01_2026 (48)",
      "01_2026 (49)",
      "01_2026 (51)",
      "01_2026 (52)",
      "01_2026 (53)",
      "01_2026 (55)",
      "01_2026 (56)",
      "01_2026 (57)",
      "01_2026 (58)",
      "12_2025_1",
      "12_2025_-12",
      "12_2025_-17",
      "12_2025_-24",
      "9005(2)",
      "Ваза",
      "Халба",
    ]),
    description: "Fresh green glazes with natural motifs, bringing nature's tranquility to your home",
  },
];
