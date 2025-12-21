"use client";

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('BG');

  const languages = [
    { code: 'BG', name: 'Български', flag: '🇧🇬' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'RO', name: 'Română', flag: '🇷🇴' },
  ];

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setLanguageMenuOpen(false);
    // TODO: Add translation logic here in the future
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#f6f7f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Optimized for all screen sizes */}
            <a 
              href="/#home"
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src="/images/Radilina - Logo.png"
                alt="Radilina"
                className="h-20 md:h-24 lg:h-26 w-auto transition-all"
              />
            </a>

            {/* Desktop Navigation - Only show on large screens (1024px+) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="/#home" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Начало</a>
              <a href="/#courses" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Курсове</a>
              <a href="/#selected-products" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Избрани продукти</a>
              <a href="/#awards" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Награди</a>
              <a href="/#products" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Продукти</a>
              <a href="/#about" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">За нас</a>
              <a href="/gallery" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Галерия</a>
              <a href="/#contact" className="font-body text-sm xl:text-base text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Контакти</a>
            </nav>

            {/* Right Side: Contact Us + Language Selector - Only show on large screens */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/#contact"
                className="bg-[var(--foreground)] text-white px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-body font-medium text-sm xl:text-base hover:bg-[var(--foreground)]/90 transition-colors"
              >
                Контакти
              </a>
              
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-full bg-[var(--soft-rose)] text-white hover:bg-[var(--soft-rose)]/90 transition-colors"
                >
                  <span className="text-lg xl:text-xl">{languages.find(l => l.code === currentLanguage)?.flag}</span>
                  <span className="font-body text-sm xl:text-base font-medium">{currentLanguage}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                            currentLanguage === lang.code ? 'bg-[var(--blush-white)]' : ''
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-body text-sm font-medium text-gray-900">{lang.name}</span>
                            <span className="font-body text-xs text-gray-500">{lang.code}</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Tablet/Mobile: Menu Button and Language Selector */}
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
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 active:scale-95 transition-all"
                >
                  <span className="text-lg md:text-xl">{languages.find(l => l.code === currentLanguage)?.flag}</span>
                </button>

                {/* Mobile Language Dropdown */}
                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 md:w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-3 md:px-4 py-2.5 md:py-3 hover:bg-gray-50 transition-colors ${
                            currentLanguage === lang.code ? 'bg-[var(--blush-white)]' : ''
                          }`}
                        >
                          <span className="text-xl md:text-2xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-body text-xs md:text-sm font-medium text-gray-900">{lang.name}</span>
                            <span className="font-body text-[10px] md:text-xs text-gray-500">{lang.code}</span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                <a
                  href="/#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Начало
                </a>
                <a
                  href="/#courses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Курсове
                </a>
                <a
                  href="/#selected-products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Избрани продукти
                </a>
                <a
                  href="/#awards"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Награди
                </a>
                <a
                  href="/#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Всички продукти
                </a>
                <a
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  За нас
                </a>
                <a
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Галерия
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-black text-left border-b border-black/10 hover:bg-black/5 active:bg-black/10 transition-colors w-full block"
                >
                  Контакти
                </a>
              </div>
              
              {/* Bottom CTA Button - Only visible on tablets/mobile */}
              <div className="p-6 md:p-8 border-t border-black/10 bg-white/50">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[var(--foreground)] text-white px-6 py-3 md:py-4 rounded-full font-body font-medium text-base md:text-lg hover:bg-[var(--foreground)]/90 active:scale-98 transition-all block text-center"
                >
                  Свържете се с нас
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

