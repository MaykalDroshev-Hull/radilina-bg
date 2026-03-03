"use client";

import { useState, useCallback, useEffect } from 'react';
import { Facebook, Instagram, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function Footer() {
  const t = useTranslations();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenPrivacy = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPrivacyModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleOpenTerms = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTermsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClosePrivacy = useCallback(() => {
    setPrivacyModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleCloseTerms = useCallback(() => {
    setTermsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (privacyModalOpen) handleClosePrivacy();
        if (termsModalOpen) handleCloseTerms();
      }
    };

    if (privacyModalOpen || termsModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [privacyModalOpen, termsModalOpen, handleClosePrivacy, handleCloseTerms]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <footer className="bg-[#1a1614] text-white relative overflow-hidden px-4 md:px-5 lg:px-6">
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
            <div className="space-y-8 md:space-y-10 lg:space-y-12 text-center md:text-left">
              {/* Social Links & Contact */}
              <div>
                <h4 className="font-headline font-semibold mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl">{t('footer.followUs')}</h4>
                <div className="flex justify-center md:justify-start gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
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
                  <p><a href="mailto:info.radilina@gmail.com" className="hover:text-white transition-colors">info.radilina@gmail.com</a></p>
                  <p><a href="tel:+359889964773" className="hover:text-white transition-colors">+359 889 964 773</a></p>
                  <p><a href="tel:+359887181368" className="hover:text-white transition-colors">+359 887 181 368</a></p>
                  <p>{t('footer.location')}</p>
                </div>
              </div>

            </div>

            {/* Right Column - Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-headline font-semibold mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2.5 md:space-y-3 lg:space-y-3.5 font-body text-white/70 text-sm md:text-base lg:text-base">
                <li><Link href="/" className="hover:text-white transition-colors inline-block">{t('common.home')}</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors inline-block">{t('common.courses')}</Link></li>
                <li><Link href="/#products" className="hover:text-white transition-colors inline-block">{t('common.products')}</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors inline-block">{t('common.about')}</Link></li>
                <li><Link href="/visits" className="hover:text-white transition-colors inline-block">{t('common.visits')}</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors inline-block">{t('common.gallery')}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors inline-block">{t('common.contact')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-7 lg:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <p className="font-body text-white/60 text-xs md:text-sm lg:text-sm text-center md:text-left">
                © {new Date().getFullYear()} Radilina. {t('common.allRightsReserved')}.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 font-body text-xs md:text-sm lg:text-sm">
                <a 
                  href="#" 
                  onClick={handleOpenPrivacy}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {t('common.privacyPolicy')}
                </a>
                <a 
                  href="#" 
                  onClick={handleOpenTerms}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {t('common.termsOfService')}
                </a>
              </div>
            </div>
            
            {/* Built by credit */}
            <div className="text-center mt-5 md:mt-6 lg:mt-7">
              <span className="text-xs md:text-sm text-white/40 font-body">
                {t('common.builtBy')}{' '}
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

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-2 md:p-6 lg:p-8"
          onClick={handleClosePrivacy}
        >
          <div 
            className="bg-[#1a1614] rounded-xl md:rounded-2xl lg:rounded-3xl border border-gray-800 w-full max-w-3xl h-[80vh] md:h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Header - Always visible */}
            <div className="flex items-center justify-between p-3 md:p-6 lg:p-8 border-b border-gray-800 flex-shrink-0 bg-[#1a1614]">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-headline font-semibold text-white pr-2">
                {t('common.privacyPolicy')}
              </h2>
              <button
                onClick={handleClosePrivacy}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex-shrink-0 z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div 
              className="overflow-y-auto flex-1 p-3 md:p-6 lg:p-8 overscroll-contain min-h-0" 
              style={{ WebkitOverflowScrolling: 'touch' }}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="space-y-4 md:space-y-5 lg:space-y-6 text-sm md:text-base lg:text-lg text-gray-300 font-body leading-relaxed">
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    1. Въведение
                  </h3>
                  <p>
                    Радилина ("ние", "нас", "наш") се ангажира да защитава вашата поверителност. Тази Политика за поверителност обяснява как събираме, използваме, разкриваме и защитаваме вашата лична информация, когато посещавате нашия уебсайт www.radilina-bg.com ("Сайтът").
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    2. Информация, която събираме
                  </h3>
                  <p className="mb-2 md:mb-3">Може да събираме следните видове лична информация:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                    <li>Име и контактна информация (имейл, телефон, адрес)</li>
                    <li>Информация за поръчки и транзакции</li>
                    <li>Информация за навигация и използване на сайта</li>
                    <li>Данни от бисквитки и подобни технологии</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    3. Как използваме вашата информация
                  </h3>
                  <p className="mb-2 md:mb-3">Използваме събраната информация за:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                    <li>Обработка и изпълнение на вашите поръчки</li>
                    <li>Комуникация с вас относно вашите заявки и поръчки</li>
                    <li>Подобряване на нашия уебсайт и услуги</li>
                    <li>Изпращане на маркетингови съобщения (с вашето съгласие)</li>
                    <li>Спазване на правни задължения</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    4. Споделяне на информация
                  </h3>
                  <p>
                    Не продаваме вашата лична информация на трети страни. Може да споделяме информация само с доверени доставчици на услуги, които ни помагат да работим нашия бизнес, при условие че те се ангажират да защитават вашата информация.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    5. Вашите права (GDPR)
                  </h3>
                  <p className="mb-2 md:mb-3">Съгласно Общия регламент за защита на данните (GDPR), имате правото да:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                    <li>Достъп до вашите лични данни</li>
                    <li>Коригиране на неточни данни</li>
                    <li>Изтриване на вашите данни ("право на забвение")</li>
                    <li>Ограничаване на обработката</li>
                    <li>Портабилност на данните</li>
                    <li>Възражение срещу обработка</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    6. Сигурност
                  </h3>
                  <p>
                    Прилагаме подходящи технически и организационни мерки за защита на вашата лична информация срещу неоторизиран достъп, промяна, разкриване или унищожаване.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    7. Бисквитки
                  </h3>
                  <p>
                    Нашият уебсайт използва бисквитки за подобряване на вашето потребителско изживяване. Можете да контролирате бисквитките чрез настройките на вашия браузър.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    8. Промени в политиката
                  </h3>
                  <p>
                    Може да актуализираме тази Политика за поверителност от време на време. Ще уведомим за всяка промяна чрез публикуване на новата политика на тази страница.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    9. Контакт
                  </h3>
                  <p>
                    За въпроси относно тази Политика за поверителност или за упражняване на вашите права, моля свържете се с нас на: <a href="mailto:info.radilina@gmail.com" className="text-[#F4A7A7] hover:underline">info.radilina@gmail.com</a>
                  </p>
                </div>

                <div className="text-xs md:text-sm text-gray-400 pt-4 border-t border-gray-800">
                  <p>Последна актуализация: {new Date().toLocaleDateString('bg-BG')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {termsModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-2 md:p-6 lg:p-8"
          onClick={handleCloseTerms}
        >
          <div 
            className="bg-[#1a1614] rounded-xl md:rounded-2xl lg:rounded-3xl border border-gray-800 w-full max-w-3xl h-[80vh] md:h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Header - Always visible */}
            <div className="flex items-center justify-between p-3 md:p-6 lg:p-8 border-b border-gray-800 flex-shrink-0 bg-[#1a1614]">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-headline font-semibold text-white pr-2">
                {t('common.termsOfService')}
              </h2>
              <button
                onClick={handleCloseTerms}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex-shrink-0 z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div 
              className="overflow-y-auto flex-1 p-3 md:p-6 lg:p-8 overscroll-contain min-h-0" 
              style={{ WebkitOverflowScrolling: 'touch' }}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="space-y-4 md:space-y-5 lg:space-y-6 text-sm md:text-base lg:text-lg text-gray-300 font-body leading-relaxed">
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    1. Приемане на условията
                  </h3>
                  <p>
                    Като достъпвате и използвате уебсайта www.radilina-bg.com, вие приемате да се съобразявате с тези Условия за ползване. Ако не сте съгласни с някоя част от условията, моля не използвайте нашия уебсайт.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    2. Използване на сайта
                  </h3>
                  <p className="mb-2 md:mb-3">Вие се съгласявате да:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                    <li>Използвате сайта само за законни цели</li>
                    <li>Не нарушавате правата на интелектуална собственост</li>
                    <li>Не използвате сайта по начин, който може да навреди или наруши функционалността му</li>
                    <li>Не копирате, не репродуцирате или не разпространявате съдържанието без разрешение</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    3. Поръчки и плащания
                  </h3>
                  <p>
                    Всички поръчки са предмет на потвърждение и приемане от наша страна. Цените и наличността на продуктите могат да се променят без предизвестие. Приемаме различни методи на плащане, както е посочено по време на процеса на поръчка.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    4. Доставка и връщане
                  </h3>
                  <p>
                    Условията за доставка и връщане са посочени отделно при поръчка. Моля, прегледайте внимателно информацията за доставката преди завършване на поръчката.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    5. Права на интелектуална собственост
                  </h3>
                  <p>
                    Всички съдържания на сайта, включително текстове, графики, лога, изображения и софтуер, са собственост на Радилина или нейните лицензодатели и са защитени от законите за авторско право и други закони за интелектуална собственост.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    6. Ограничение на отговорността
                  </h3>
                  <p>
                    Радилина не носи отговорност за каквито и да било преки, косвени, случайни или последващи щети, произтичащи от използването или невъзможността за използване на сайта или продуктите.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    7. Промени в условията
                  </h3>
                  <p>
                    Запазваме си правото да променяме тези Условия за ползване по всяко време. Продължаването на използването на сайта след промените означава приемане на новите условия.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    8. Приложимо право
                  </h3>
                  <p>
                    Тези Условия се управляват и тълкуват в съответствие с законите на Република България. Всякакви спорове ще бъдат решавани от компетентните съдилища в България.
                  </p>
                </div>

                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-headline font-semibold text-white mb-2 md:mb-3">
                    9. Контакт
                  </h3>
                  <p>
                    За въпроси относно тези Условия за ползване, моля свържете се с нас на: <a href="mailto:info.radilina@gmail.com" className="text-[#F4A7A7] hover:underline">info.radilina@gmail.com</a>
                  </p>
                </div>

                <div className="text-xs md:text-sm text-gray-400 pt-4 border-t border-gray-800">
                  <p>Последна актуализация: {new Date().toLocaleDateString('bg-BG')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
