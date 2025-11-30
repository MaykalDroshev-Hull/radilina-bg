import { ArrowRight, Coffee, Circle, Square, ChefHat, Apple, Droplets, Cigarette, RectangleHorizontal, Utensils, Wine, Bell, Plus } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function Hero() {
  return (
    <div className="px-3 md:px-5 lg:px-6">
      <AnimatedSection
        id="home"
        className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden rounded-3xl md:rounded-[2rem] lg:rounded-4xl px-4 md:px-10 lg:px-14"
      >   {/* Background Image */}
      
<img
  src="/images/slide-3.jpg"
  alt="Radilina ceramics"
  className="absolute inset-0 w-full h-full object-cover"
/>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-12">
        <AnimatedContainer className="max-w-4xl">
          {/* Glassmorphism container */}
          <div className="relative backdrop-blur-md bg-white/5 rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/30 shadow-2xl">
            {/* Liquid gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-[#F4A7A7]/30 rounded-3xl md:rounded-[2rem]"></div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10">
              <AnimatedItem>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-headline font-semibold mb-6 md:mb-8 leading-tight drop-shadow-2xl">
                  Традиция, уют и ръчно изработена керамика с български дух
                </h1>
              </AnimatedItem>

              <AnimatedItem>
                <p className="text-base md:text-lg lg:text-xl text-white font-body mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                  Всяко изделие е създадено с любов и внимание към детайла
                </p>
              </AnimatedItem>

              {/* View Products button */}
              <AnimatedItem>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Разгледайте нашите продукти
                  <ArrowRight size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </a>
              </AnimatedItem>
            </div>
          </div>
        </AnimatedContainer>
      </div>
      </AnimatedSection>

      {/* Product Categories Animated Carousel */}
      <AnimatedSection className="mt-6 md:mt-8 lg:mt-10 mb-8 md:mb-12 lg:mb-14 relative w-full overflow-hidden">
        {/* Fade edges */}
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
              <div key={index} className="flex items-center gap-2.5 md:gap-3 lg:gap-4 bg-[var(--blush-white)]/60 backdrop-blur-sm rounded-lg md:rounded-xl px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 shadow-sm hover:shadow-md border border-[var(--foreground)]/10 flex-shrink-0 transition-all">
                <IconComponent size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6 text-black flex-shrink-0" fill="currentColor" />
                <span className="text-sm md:text-base lg:text-lg text-black font-body whitespace-nowrap">
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

