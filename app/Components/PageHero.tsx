'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  images: string[];
  ctaButtons?: CTAButton[];
}

export default function PageHero({ title, subtitle, images, ctaButtons }: PageHeroProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column — Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white mb-5 md:mb-6 font-headline"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 mb-8 max-w-2xl font-body"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            {ctaButtons && ctaButtons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {ctaButtons.map((btn, index) => (
                  <Link
                    key={index}
                    href={btn.href}
                    className={
                      btn.variant === 'secondary'
                        ? 'px-6 py-2.5 rounded-lg bg-[#1a1614] border border-gray-700 text-gray-100 font-medium text-sm hover:bg-[#2a2520] transition-colors text-center font-headline tracking-wide'
                        : 'px-6 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors text-center font-headline tracking-wide'
                    }
                  >
                    {btn.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column — Image(s) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {images.length === 1 ? (
              /* Single image */
              <div className="relative h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800">
                <Image
                  src={images[0]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : images.length === 2 ? (
              /* Two images — diagonal overlap (3:2 aspect ratio) */
              <div className="relative" style={{ paddingBottom: '95%' }}>
                <div className="absolute top-0 left-0 w-[75%] aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 z-10 shadow-xl">
                  <Image
                    src={images[0]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 38vw"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[75%] aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 shadow-xl">
                  <Image
                    src={images[1]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 75vw, 38vw"
                  />
                </div>
              </div>
            ) : (
              /* Three+ images — portrait columns (1:1.5 ratio) */
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {images.slice(0, 3).map((img, i) => (
                  <div key={i} className="relative aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800">
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 33vw, 17vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
