"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#f6f7f9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="public\images\logo.svg"
              alt="Radilina"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Projects</a>
            <a href="#about" className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">About</a>
            <a href="#how-to" className="font-body text-[var(--foreground)] hover:text-[var(--soft-rose)] transition-colors">Services</a>
          </nav>

          {/* Right Side: Contact Us + Language Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-[var(--foreground)] text-white px-6 py-2.5 rounded-full font-body font-medium hover:bg-[var(--foreground)]/90 transition-colors"
            >
              Contact Us
            </a>
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
            <a href="#products" className="block py-2 font-body text-[var(--foreground)]">Projects</a>
            <a href="#about" className="block py-2 font-body text-[var(--foreground)]">About</a>
            <a href="#how-to" className="block py-2 font-body text-[var(--foreground)]">Services</a>
            <a href="#contact" className="block py-2 font-body text-[var(--foreground)]">Contact</a>
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

