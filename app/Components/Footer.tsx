import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--warm-taupe)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-headline text-2xl font-bold mb-4">Radilina</h3>
            <p className="font-body text-white/80 mb-4 max-w-md">
              Handmade ceramic pottery and homeware from Bulgaria. Each piece is lovingly crafted by hand, 
              bringing warmth and natural beauty to your home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#awards" className="hover:text-white transition-colors">Awards</a></li>
              <li><a href="#how-to" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-white/80">
              <li><a href="mailto:hello@radilina.bg" className="hover:text-white transition-colors">hello@radilina.bg</a></li>
              <li><a href="tel:+359123456789" className="hover:text-white transition-colors">+359 123 456 789</a></li>
              <li className="text-white/80">Sofia, Bulgaria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Radilina. All rights reserved.
            </p>
            <div className="flex gap-6 font-body text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

