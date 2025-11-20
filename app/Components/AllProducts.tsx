import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { allProducts } from '../data/mockData';

export default function AllProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            All Products
          </h2>
          <p className="font-body text-lg text-[var(--foreground)] max-w-2xl mx-auto">  
            Explore our complete collection of handmade ceramics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-[var(--soft-rose)] text-white px-8 py-4 rounded-full font-body font-medium hover:bg-[var(--soft-rose)]/90 transition-all shadow-lg"
          >
            View All Products
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

