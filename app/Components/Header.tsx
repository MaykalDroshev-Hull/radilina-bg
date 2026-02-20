"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../../i18n/routing';
import { categories } from '../data/categories';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const languages = [
    { code: 'bg', name: 'Български', flag: '🇧🇬' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLanguageMenuOpen(false);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close products dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1a1614]/95 border-gray-800/50' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <Image
                src={isScrolled ? "/images/Radilina - Logo - White.png" : "/images/Radilina - Logo.png"}
                alt="Radilina"
                width={200}
                height={96}
                priority
                className="h-20 md:h-24 lg:h-26 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/" className={`font-body text-sm xl:text-base transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
              }`}>{t('common.home')}</Link>
              <Link href="/courses" className={`font-body text-sm xl:text-base transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
              }`}>{t('common.courses')}</Link>

              {/* Products Dropdown */}
              <div
                ref={productsDropdownRef}
                className="relative"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className={`font-body text-sm xl:text-base transition-colors duration-300 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
                  }`}
                >
                  {t('common.products')}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {productsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#1a1614] rounded-xl shadow-2xl border border-gray-800 overflow-hidden z-50"
                      onMouseEnter={handleProductsMouseEnter}
                      onMouseLeave={handleProductsMouseLeave}
                    >
                      <div className="py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 relative">
                              <Image
                                src={category.image}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="32px"
                                className="object-cover"
                              />
                            </div>
                            <span className="font-body text-sm text-gray-300 group-hover:text-white transition-colors">
                              {t(`categories.${category.slug}`)}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className={`font-body text-sm xl:text-base transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
              }`}>{t('common.about')}</Link>
              <Link href="/gallery" className={`font-body text-sm xl:text-base transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
              }`}>{t('common.gallery')}</Link>
              <Link href="/contact" className={`font-body text-sm xl:text-base transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-[var(--soft-rose)]' : 'text-gray-800 hover:text-[var(--soft-rose)]'
              }`}>{t('common.contact')}</Link>
            </nav>

            {/* Right Side: Contact Us + Language Selector */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-white text-black px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-body font-medium text-sm xl:text-base hover:bg-gray-200 transition-colors"
              >
                {t('common.contact')}
              </Link>
              
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-2.5 rounded-full bg-[var(--soft-rose)] text-white hover:bg-[var(--soft-rose)]/90 transition-colors"
                >
                  <span className="text-lg xl:text-xl">{languages.find(l => l.code === locale)?.flag}</span>
                  <span className="font-body text-sm xl:text-base font-medium">{locale.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[#1a1614] rounded-xl shadow-lg border border-gray-800 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors ${
                            locale === lang.code ? 'bg-white/5' : ''
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-body text-sm font-medium text-white">{lang.name}</span>
                            <span className="font-body text-xs text-gray-500">{lang.code.toUpperCase()}</span>
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
              <button
                className={`flex flex-col items-center justify-center p-2 md:p-3 -m-2 md:-m-3 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-300 hover:bg-white/5' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} className="md:w-7 md:h-7" />
                <span className="text-[10px] md:text-xs font-body mt-0.5 md:mt-1">{t('common.menu')}</span>
              </button>

              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center hover:bg-[var(--soft-rose)]/90 active:scale-95 transition-all"
                >
                  <span className="text-lg md:text-xl">{languages.find(l => l.code === locale)?.flag}</span>
                </button>

                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 md:w-48 bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-3 md:px-4 py-2.5 md:py-3 hover:bg-white/10 transition-colors ${
                            locale === lang.code ? 'bg-white/5' : ''
                          }`}
                        >
                          <span className="text-xl md:text-2xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-body text-xs md:text-sm font-medium text-white">{lang.name}</span>
                            <span className="font-body text-[10px] md:text-xs text-gray-500">{lang.code.toUpperCase()}</span>
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
            className="fixed inset-0 bg-[#1a1614]/70 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Tablet/Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-[280px] md:w-[340px] z-50 lg:hidden shadow-2xl bg-[#1a1614]"
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-800">
              <h2 className="text-white font-headline text-xl md:text-2xl">{t('common.menu')}</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={24} className="md:w-7 md:h-7" />
              </button>
            </div>

            <nav className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left border-b border-gray-800 hover:bg-white/5 active:bg-white/10 transition-colors w-full block">{t('common.home')}</Link>
                <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left border-b border-gray-800 hover:bg-white/5 active:bg-white/10 transition-colors w-full block">{t('common.courses')}</Link>

                {/* Mobile Products Accordion */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left hover:bg-white/5 active:bg-white/10 transition-colors w-full flex items-center justify-between"
                  >
                    {t('common.products')}
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-[#1a1614]/30"
                      >
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                            onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                            className="py-3 md:py-3.5 px-10 md:px-12 font-body text-sm md:text-base text-gray-400 text-left border-b border-gray-800/50 hover:bg-white/5 active:bg-white/10 transition-colors w-full flex items-center gap-3"
                          >
                            <div className="w-6 h-6 rounded overflow-hidden bg-gray-800 flex-shrink-0 relative">
                              <Image
                                src={category.image}
                                alt={t(`categories.${category.slug}`)}
                                fill
                                sizes="24px"
                                className="object-cover"
                              />
                            </div>
                            {t(`categories.${category.slug}`)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left border-b border-gray-800 hover:bg-white/5 active:bg-white/10 transition-colors w-full block">{t('common.about')}</Link>
                <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left border-b border-gray-800 hover:bg-white/5 active:bg-white/10 transition-colors w-full block">{t('common.gallery')}</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="py-4 md:py-5 px-6 md:px-8 font-body text-base md:text-lg text-gray-300 text-left border-b border-gray-800 hover:bg-white/5 active:bg-white/10 transition-colors w-full block">{t('common.contact')}</Link>
              </div>
              
              <div className="p-6 md:p-8 border-t border-gray-800 bg-[#1a1614]/50">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-white text-black px-6 py-3 md:py-4 rounded-full font-body font-medium text-base md:text-lg hover:bg-gray-200 active:scale-98 transition-all block text-center"
                >
                  {t('common.contactUs')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
