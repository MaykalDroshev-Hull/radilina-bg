"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScroll } from '../lib/animations';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (target: string) => {
    smoothScroll(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#f6f7f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Optimized for all screen sizes */}
            <button 
              onClick={() => smoothScroll('#home')} 
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src="/images/logo.svg"
                alt="Radilina"
                className="h-20 md:h-24 lg:h-26 w-auto transition-all"
              />
            </button>

            {/* Desktop Navigation - Only show on large screens (1024px+) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => smoothScroll('#home')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Начало</button>
              <button onClick={() => smoothScroll('#courses')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Курсове</button>
              <button onClick={() => smoothScroll('#selected-products')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Избрани продукти</button>
              <button onClick={() => smoothScroll('#awards')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Награди</button>
              <button onClick={() => smoothScroll('#products')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Продукти</button>
              <button onClick={() => smoothScroll('#how-to')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Процес</button>
              <button onClick={() => smoothScroll('#faq')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Въпроси</button>
              <button onClick={() => smoothScroll('#contact')} className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Контакти</button>
            </nav>

            {/* Right Side: Contact Us + Language Button - Only show on large screens */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => smoothScroll('#contact')}
                className="bg-[var(--foreground)] text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-body font-medium text-sm xl:text-base hover:bg-[var(--foreground)]/90 transition-colors"
              >
                Контакти
              </button>
              <button className="w-12 xl:w-14 h-10 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 transition-colors">
                <span className="text-lg xl:text-xl">🇧🇬</span>
              </button>
            </div>

            {/* Tablet/Mobile: Menu Button and Language Button */}
            <div className="lg:hidden flex items-center gap-4 md:gap-6">
              {/* Menu Button with "меню" text - Better touch target for tablets */}
              <button
                className="flex flex-col items-center justify-center text-[var(--foreground)] p-2 md:p-3 -m-2 md:-m-3 hover:bg-black/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} className="md:w-7 md:h-7" />
                <span className="text-[10px] md:text-xs font-body mt-0.5 md:mt-1">МЕНЮ</span>
              </button>

              {/* Language Button - Larger on tablets with better touch target */}
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 active:scale-95 transition-all">
                <span className="text-lg md:text-xl">🇧🇬</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Tablet/Mobile Menu - Sliding from Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-[280px] md:w-[340px] z-50 lg:hidden shadow-2xl"
            style={{ backgroundColor: '#f6f7f9' }}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/10">
              <h2 className="text-black font-headline text-xl md:text-2xl">МЕНЮ</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-black p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                <X size={24} className="md:w-7 md:h-7" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <button
                  onClick={() => handleMenuClick('#home')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Начало
                </button>
                <button
                  onClick={() => handleMenuClick('#courses')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Курсове
                </button>
                <button
                  onClick={() => handleMenuClick('#selected-products')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Избрани продукти
                </button>
                <button
                  onClick={() => handleMenuClick('#awards')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Награди
                </button>
                <button
                  onClick={() => handleMenuClick('#products')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Всички продукти
                </button>
                <button
                  onClick={() => handleMenuClick('#how-to')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Процес
                </button>
                <button
                  onClick={() => handleMenuClick('#faq')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Въпроси
                </button>
                <button
                  onClick={() => handleMenuClick('#contact')}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full"
                >
                  Контакти
                </button>
              </div>
              
              {/* Bottom CTA Button - Only visible on tablets/mobile */}
              <div className="p-6 md:p-8 border-t border-black/10 bg-white/50">
                <button
                  onClick={() => handleMenuClick('#contact')}
                  className="w-full bg-[var(--foreground)] text-white px-6 py-3 md:py-4 rounded-full font-body font-medium text-base md:text-lg hover:bg-[var(--foreground)]/90 active:scale-98 transition-all"
                >
                  Свържете се с нас
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

