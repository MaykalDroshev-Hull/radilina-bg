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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => smoothScroll('#home')} 
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src="/images/logo.svg"
                alt="Radilina"
                className="h-26 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => smoothScroll('#home')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Начало</button>
              <button onClick={() => smoothScroll('#selected-products')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Избрани продукти</button>
              <button onClick={() => smoothScroll('#awards')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Награди</button>
              <button onClick={() => smoothScroll('#products')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Продукти</button>
              <button onClick={() => smoothScroll('#how-to')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Процес</button>
              <button onClick={() => smoothScroll('#faq')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Въпроси</button>
              <button onClick={() => smoothScroll('#contact')} className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Контакти</button>
            </nav>

            {/* Right Side: Contact Us + Language Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => smoothScroll('#contact')}
                className="bg-[var(--foreground)] text-white px-6 py-2.5 rounded-full font-body font-medium hover:bg-[var(--foreground)]/90 transition-colors"
              >
                Контакти
              </button>
              <button className="w-14 h-10 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 transition-colors">
                <span className="text-xl">🇧🇬</span>
              </button>
            </div>

            {/* Mobile: Menu Button and Language Button */}
            <div className="md:hidden flex items-center gap-4">
              {/* Mobile Menu Button with "меню" text */}
              <button
                className="flex flex-col items-center justify-center text-[var(--foreground)]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
                <span className="text-[10px] font-body mt-0.5">МЕНЮ</span>
              </button>

              {/* Language Button */}
              <button className="w-10 h-10 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 transition-colors">
                <span className="text-lg">🇧🇬</span>
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
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu - Sliding from Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-[280px] z-50 md:hidden shadow-2xl"
            style={{ backgroundColor: '#f6f7f9' }}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="text-black font-headline text-xl">МЕНЮ</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-black p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col">
              <button
                onClick={() => handleMenuClick('#home')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Начало
              </button>
              <button
                onClick={() => handleMenuClick('#selected-products')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Избрани продукти
              </button>
              <button
                onClick={() => handleMenuClick('#awards')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Награди
              </button>
              <button
                onClick={() => handleMenuClick('#products')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Всички продукти
              </button>
              <button
                onClick={() => handleMenuClick('#how-to')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Процес
              </button>
              <button
                onClick={() => handleMenuClick('#faq')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Въпроси
              </button>
              <button
                onClick={() => handleMenuClick('#contact')}
                className="py-4 px-6 font-body text-black text-left border-b border-black/10 hover:bg-black/5 transition-colors"
              >
                Контакти
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

