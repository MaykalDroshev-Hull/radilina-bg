"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScroll } from '../lib/animations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#f6f7f9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.svg"
              alt="Radilina"
              className="h-26 w-auto"
            />
          </div>

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--foreground)]/20" style={{ backgroundColor: '#f6f7f9' }}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => smoothScroll('#home')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Начало</button>
            <button onClick={() => smoothScroll('#products')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Продукти</button>
            <button onClick={() => smoothScroll('#awards')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Награди</button>
            <button onClick={() => smoothScroll('#how-to')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Процес</button>
            <button onClick={() => smoothScroll('#faq')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Въпроси</button>
            <button onClick={() => smoothScroll('#contact')} className="block py-2 font-body text-[var(--foreground)] text-left w-full">Контакти</button>
            <div className="flex items-center gap-2 pt-2">
              <button className="w-14 h-10 rounded-full bg-[var(--soft-rose)] text-white flex items-center justify-center">
                <span className="text-xl">🇧🇬</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

