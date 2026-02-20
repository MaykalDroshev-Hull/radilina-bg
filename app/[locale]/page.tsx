"use client";

import { useState } from 'react';
import Hero from '../Components/Hero';
import ProductCategories from '../Components/ProductCategories';
import AboutUsCTA from '../Components/AboutUsCTA';
import LoadingScreen from '../Components/LoadingScreen';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      <div className={`w-full max-w-[1620px] mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <ProductCategories />
        <AboutUsCTA />
      </div>
    </>
  );
}
