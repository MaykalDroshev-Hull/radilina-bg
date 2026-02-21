'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CategoryImageProps {
  src: string;
  alt: string;
  aspectRatio: '2/3' | '3/2';
  sizes?: string;
}

export default function CategoryImage({ src, alt, aspectRatio, sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" }: CategoryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src || typeof src !== 'string' || src.trim() === '') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-400 text-sm">Няма снимка</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-contain group-hover:scale-105 transition-transform duration-300"
      unoptimized
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
