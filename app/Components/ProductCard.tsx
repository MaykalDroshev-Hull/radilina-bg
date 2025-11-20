import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-[var(--clay-beige)]/30 aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.featured && (
          <div className="absolute top-4 right-4 bg-[var(--soft-rose)] text-white px-3 py-1 rounded-full text-sm font-body">
            Featured
          </div>
        )}
        <button className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100">
          <Heart size={20} className="text-[var(--soft-rose)]" />
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-body text-sm text-[var(--warm-taupe)] mb-1 opacity-75">{product.category}</p>
          <h3 className="font-headline text-xl font-semibold text-[var(--warm-taupe)] mb-1">
            {product.name}
          </h3>
          <p className="font-body text-lg font-medium text-[var(--soft-rose)]">
            ${product.price}
          </p>
        </div>
        <button className="bg-[var(--sage-mist)] p-3 rounded-full hover:bg-[var(--soft-mint)] transition-colors">
          <ShoppingBag size={20} className="text-[var(--warm-taupe)]" />
        </button>
      </div>
    </div>
  );
}

