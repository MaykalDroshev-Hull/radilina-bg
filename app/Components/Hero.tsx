import { ArrowRight, Coffee, Circle, Square, ChefHat, Apple, Droplets, Cigarette, RectangleHorizontal, Utensils, Wine, Bell, Plus } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Hero() {
  return (
    <div className="px-3 md:px-5">
      <AnimatedSection
        id="home"
        className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl md:rounded-4xl px-4 md:px-10 lg:px-14"
      >   {/* Background Image */}
      
<img
  src="/images/slide-3.jpg"
  alt="Radilina ceramics"
  className="absolute inset-0 w-full h-full object-cover"
/>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Content centered and positioned */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <AnimatedContainer className="mb-auto mt-auto">
          <AnimatedItem>
            <p className="font-body text-white/90 text-sm md:text-lg mb-4 md:mb-6 max-w-2xl">
            <span className="text-xl md:text-3xl text-white block mb-2 font-headline">
              Традиция, уют и ръчно изработена керамика с български дух.
            </span>
            </p>
          </AnimatedItem>

          {/* View Products button */}
          <AnimatedItem>
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-white font-body text-xs md:text-base hover:gap-3 transition-all"
            >
              Разгледайте нашите продукти
              <ArrowRight size={16} className="md:w-5 md:h-5" />
            </a>
          </AnimatedItem>
        </AnimatedContainer>
      </div>
      
      {/* Business name - Absolutely positioned at bottom, centered, flush with edge */}

  {/* Progressive white glow with gradual blur */}
  {/* Very light blur (bottom 35%) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 left-0 right-0 h-[35%]
      bg-gradient-to-t from-white/70 via-white/10 to-transparent
      backdrop-blur-[1px]">
    </div>
  </div>

  {/* Light blur (bottom 25%) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 left-0 right-0 h-[25%]
      bg-gradient-to-t from-white/60 via-white/8 to-transparent
      backdrop-blur-[2x]">
    </div>
  </div>

  {/* Medium blur (bottom 15%) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 left-0 right-0 h-[15%]
      bg-gradient-to-t from-white/50 via-white/6 to-transparent
      backdrop-blur-[3px]">
    </div>
  </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
  <h1 className="font-headline text-[16vw] md:text-[15vw] lg:text-[18vw]
                 font-semibold text-white leading-none text-center
                 tracking-tight translate-y-[22%]">
    Radilina
  </h1>

</div>
      </AnimatedSection>

      {/* Product Categories Animated Carousel */}
      <AnimatedSection className="mt-6 md:mt-8 mb-8 md:mb-12 relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div
          className="flex gap-6 animate-scroll hover:pause"
          style={{
            animationPlayState: 'running',
            width: 'max-content',
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {[
            { name: "Чаши и халби", icon: Coffee },
            { name: "чинии", icon: Circle },
            { name: "купи", icon: Circle },
            { name: "тави", icon: Square },
            { name: "гювечи", icon: ChefHat },
            { name: "фруктиери", icon: Apple },
            { name: "Оливерници", icon: Droplets },
            { name: "солници и захарници", icon: Droplets },
            { name: "пепелници", icon: Cigarette },
            { name: "салфетници", icon: RectangleHorizontal },
            { name: "сервизи", icon: Utensils },
            { name: "пахари", icon: Wine },
            { name: "буркани", icon: Wine },
            { name: "камбанки", icon: Bell },
            { name: "Тигани", icon: ChefHat },
            { name: "Стомни и кани", icon: Wine },
            { name: "И още много", icon: Plus }
          ].concat([
            { name: "Чаши и халби", icon: Coffee },
            { name: "чинии", icon: Circle },
            { name: "купи", icon: Circle },
            { name: "тави", icon: Square },
            { name: "гювечи", icon: ChefHat },
            { name: "фруктиери", icon: Apple },
            { name: "Оливерници", icon: Droplets },
            { name: "солници и захарници", icon: Droplets },
            { name: "пепелници", icon: Cigarette },
            { name: "салфетници", icon: RectangleHorizontal },
            { name: "сервизи", icon: Utensils },
            { name: "пахари", icon: Wine },
            { name: "буркани", icon: Wine },
            { name: "камбанки", icon: Bell },
            { name: "Тигани", icon: ChefHat },
            { name: "Стомни и кани", icon: Wine },
            { name: "И още много", icon: Plus }
          ]).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center gap-2.5 md:gap-4 bg-[var(--blush-white)]/60 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 shadow-sm border border-[var(--foreground)]/10 flex-shrink-0">
                <IconComponent size={18} className="md:w-6 md:h-6 text-black flex-shrink-0" fill="currentColor" />
                <span className="text-sm md:text-base text-black font-body whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}

