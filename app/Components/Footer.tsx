import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden px-5">
      <div className="relative">
        {/* Large "Radilina" text docked to top */}
        <div className="w-full overflow-hidden">
          <h1 className="font-headline text-[12vw] md:text-[15vw] lg:text-[18vw]
                         font-semibold text-white leading-none text-center
                         tracking-tight -translate-y-[35%]">
            Radilina
          </h1>
        </div>

        {/* Footer Content */}
        <div className="px-6 md:px-10 lg:px-[10%] pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Socials & Newsletter */}
            <div className="space-y-12">
              {/* Social Links & Contact */}
              <div>
                <h4 className="font-headline font-semibold mb-6 text-lg">Последвайте ни</h4>
                <div className="flex gap-4 mb-6">
                  <a 
                    href="#" 
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
                <div className="font-body text-white/70 space-y-2">
                  <p><a href="mailto:hello@radilina.bg" className="hover:text-white transition-colors">hello@radilina.bg</a></p>
                  <p><a href="tel:+359123456789" className="hover:text-white transition-colors">+359 123 456 789</a></p>
                  <p>Троян, България</p>
                </div>
              </div>

            </div>

            {/* Right Column - Quick Links */}
            <div>
              <h4 className="font-headline font-semibold mb-6 text-lg">Бързи връзки</h4>
              <ul className="space-y-3 font-body text-white/70">
                <li><a href="#home" className="hover:text-white transition-colors">Начало</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукти</a></li>
                <li><a href="#awards" className="hover:text-white transition-colors">Награди</a></li>
                <li><a href="#how-to" className="hover:text-white transition-colors">Процес на работа</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Въпроси</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакти</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-white/60 text-sm">
                © {new Date().getFullYear()} Radilina. Всички права запазени.
              </p>
              <div className="flex items-center gap-6 font-body text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Политика за поверителност
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Условия за ползване
                </a>
              </div>
            </div>
            
            {/* Built by credit */}
            <div className="text-center mt-6">
              <span className="text-xs text-white/40">
                Изградено от{' '}
                <a 
                  href="https://www.hmwspro.com/bg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-white transition font-medium underline decoration-white/30 hover:decoration-white"
                >
                  H&M WS Pro
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

