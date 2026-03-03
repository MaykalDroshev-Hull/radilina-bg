"use client";

import Hero from '../Components/Hero';
import CompanyIntro from '../Components/CompanyIntro';
import Collections from '../Components/Collections';
import ProductCategories from '../Components/ProductCategories';
import AboutUsCTA from '../Components/AboutUsCTA';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1620px] mx-auto">
      <Hero />
      <CompanyIntro />
      <Collections />
      <ProductCategories />
      <AboutUsCTA />
    </div>
  );
}
