import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden px-4 md:px-5 lg:px-6">
      <div className="relative">
        {/* Large "Radilina" text docked to top */}
        <div className="w-full overflow-hidden">
          <h1 className="font-headline text-[16vw] md:text-[14vw] lg:text-[15vw] xl:text-[18vw]
                         font-semibold text-white leading-none text-center
                         tracking-tight -translate-y-[35%] md:-translate-y-[32%] lg:-translate-y-[35%]">
            Radilina
          </h1>
        </div>

        {/* Footer Content */}
        <div className="px-4 md:px-8 lg:px-10 xl:px-[10%] pb-8 md:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
            {/* Left Column - Socials & Newsletter */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {/* Social Links & Contact */}
              <div>
                <h4 className="font-headline font-semibold mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl">Последвайте ни</h4>
                <div className="flex gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
                  <a 
                    href="https://www.facebook.com/share/1Q1EAaXXHZ/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2.5 md:p-3 lg:p-3.5 rounded-full hover:bg-white/20 active:scale-95 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="md:w-6 md:h-6 lg:w-6 lg:h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/radilinaceramics" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2.5 md:p-3 lg:p-3.5 rounded-full hover:bg-white/20 active:scale-95 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="md:w-6 md:h-6 lg:w-6 lg:h-6" />
                  </a>
                </div>
                <div className="font-body text-white/70 space-y-2 md:space-y-2.5 text-sm md:text-base lg:text-base">
                  <p><a href="mailto:hello@radilina.bg" className="hover:text-white transition-colors">hello@radilina.bg</a></p>
                  <p><a href="tel:+359889964773" className="hover:text-white transition-colors">+359 889 964 773</a></p>
                  <p><a href="tel:+359887181368" className="hover:text-white transition-colors">+359 887 181 368</a></p>
                  <p>Троян, България</p>
                </div>
              </div>

            </div>

            {/* Right Column - Quick Links */}
            <div>
              <h4 className="font-headline font-semibold mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl">Бързи връзки</h4>
              <ul className="space-y-2.5 md:space-y-3 lg:space-y-3.5 font-body text-white/70 text-sm md:text-base lg:text-base">
                <li><a href="/#home" className="hover:text-white transition-colors inline-block">Начало</a></li>
                <li><a href="/#courses" className="hover:text-white transition-colors inline-block">Курсове</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors inline-block">Продукти</a></li>
                <li><a href="/#awards" className="hover:text-white transition-colors inline-block">Награди</a></li>
                <li><a href="/#about" className="hover:text-white transition-colors inline-block">За нас</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors inline-block">Галерия</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors inline-block">Контакти</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-7 lg:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <p className="font-body text-white/60 text-xs md:text-sm lg:text-sm text-center md:text-left">
                © {new Date().getFullYear()} Radilina. Всички права запазени.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 font-body text-xs md:text-sm lg:text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Политика за поверителност
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Условия за ползване
                </a>
              </div>
            </div>
            
            {/* Built by credit */}
            <div className="text-center mt-5 md:mt-6 lg:mt-7">
              <span className="text-xs md:text-sm text-white/40 font-body">
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

