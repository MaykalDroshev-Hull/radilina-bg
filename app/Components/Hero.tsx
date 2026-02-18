import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Hero() {
  return (
    <div className="px-3 md:px-5 lg:px-6">
      <AnimatedSection
        id="home"
        className="relative h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden rounded-3xl md:rounded-[2rem] lg:rounded-4xl"
      >
        {/* Background Image — Mobile & Tablet */}
        <Image
          src="/images/Hero Image - Mobile.png"
          alt="Radilina ceramics"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:hidden"
          quality={100}
        />
        {/* Background Image — Desktop */}
        <Image
          src="/images/Hero Image.png"
          alt="Radilina ceramics"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden lg:block"
          quality={100}
        />

        {/* Subtle gradient overlay — darken bottom for button readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

        {/* Content — positioned upper area like reference */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20">
          {/* Top — Title & Subtitle (dark text on light image background) */}
          <AnimatedContainer className="text-center pt-2 md:pt-4 lg:pt-0 lg:-mt-6 xl:-mt-10">
            <AnimatedItem>
              <h1 className="font-headline font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-tight">
                Керамика Радилина
              </h1>
            </AnimatedItem>

            <AnimatedItem>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-gray-700 mt-3 md:mt-4 lg:mt-5 tracking-wide">
              Глина, вода, ръце и огън
              </p>
            </AnimatedItem>
          </AnimatedContainer>

          {/* Bottom — CTA Buttons (dark theme) */}
          <AnimatedContainer className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-6 pb-2 md:pb-4">
            <AnimatedItem>
              <Link
                href="/#courses"
                className="min-w-[180px] md:min-w-[200px] text-center px-8 md:px-10 py-3 md:py-3.5
                  bg-[#1a1614] backdrop-blur-sm text-white
                  border border-gray-700
                  rounded-lg font-headline text-sm md:text-base tracking-[0.15em] uppercase
                  shadow-lg hover:bg-[#222] hover:shadow-xl
                  active:scale-95 transition-all"
              >
                Продукти
              </Link>
            </AnimatedItem>

            <AnimatedItem>
              <Link
                href="/about"
                className="min-w-[180px] md:min-w-[200px] text-center px-8 md:px-10 py-3 md:py-3.5
                  bg-[#1a1614] backdrop-blur-sm text-white
                  border border-gray-700
                  rounded-lg font-headline text-sm md:text-base tracking-[0.15em] uppercase
                  shadow-lg hover:bg-[#222] hover:shadow-xl
                  active:scale-95 transition-all"
              >
                За нас
              </Link>
            </AnimatedItem>
          </AnimatedContainer>
        </div>
      </AnimatedSection>

      {/* Product Categories Animated Carousel */}
      <AnimatedSection className="mt-6 md:mt-8 lg:mt-10 mb-8 md:mb-12 lg:mb-14 relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 lg:w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 lg:w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div
          className="flex gap-4 md:gap-6 lg:gap-8 animate-scroll hover:pause"
          style={{
            animationPlayState: 'running',
            width: 'max-content',
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {[
            "Чаши и халби",
            "чинии",
            "купи",
            "тави",
            "гювечи",
            "фруктиери",
            "Оливерници",
            "солници и захарници",
            "пепелници",
            "салфетници",
            "сервизи",
            "пахари",
            "буркани",
            "камбанки",
            "Тигани",
            "Стомни и кани",
            "Чаши и халби",
            "чинии",
            "купи",
            "тави",
            "гювечи",
            "фруктиери",
            "Оливерници",
            "солници и захарници",
            "пепелници",
            "салфетници",
            "сервизи",
            "пахари",
            "буркани",
            "камбанки",
            "Тигани",
            "Стомни и кани",
            "И още много",
          ].map((name, index) => {
            return (
              <div key={index} className="bg-[#1a1614]/80 backdrop-blur-sm rounded-lg md:rounded-xl px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 shadow-sm hover:shadow-md border border-gray-800 flex-shrink-0 transition-all">
                <span className="text-sm md:text-base lg:text-lg text-gray-300 font-body whitespace-nowrap">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
