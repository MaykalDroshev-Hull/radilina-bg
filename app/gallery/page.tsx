import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function GalleryPage() {
  // Temporary colored boxes - will be replaced with actual images
  const galleryItems = [
    { id: 1, color: '#F4A7A7' }, // Soft Rose
    { id: 2, color: '#CFE6D7' }, // Sage Mist
    { id: 3, color: '#E8F6EF' }, // Soft Mint
    { id: 4, color: '#E8DCCF' }, // Clay Beige
    { id: 5, color: '#C1AFA3' }, // Warm Taupe
    { id: 6, color: '#FFF7F7' }, // Blush White
    { id: 7, color: '#F4A7A7' },
    { id: 8, color: '#CFE6D7' },
    { id: 9, color: '#E8F6EF' },
    { id: 10, color: '#E8DCCF' },
    { id: 11, color: '#C1AFA3' },
    { id: 12, color: '#F4A7A7' },
    { id: 13, color: '#CFE6D7' },
    { id: 14, color: '#E8F6EF' },
    { id: 15, color: '#E8DCCF' },
    { id: 16, color: '#C1AFA3' },
    { id: 17, color: '#FFF7F7' },
    { id: 18, color: '#F4A7A7' },
  ];

  return (
    <>
      <Header />
      <div className="w-full max-w-[1620px] mx-auto">
        <AnimatedSection className="py-12 md:py-16 lg:py-20">
          <AnimatedContainer className="px-6 md:px-10 lg:px-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
              {/* Left side */}
              <AnimatedItem className="flex items-center gap-2 md:gap-3">
                <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                <span className="text-base md:text-lg lg:text-xl text-gray-700 font-body">Галерия</span>
              </AnimatedItem>
              
              {/* Right side */}
              <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
                <span className="font-semibold text-gray-900 font-headline leading-tight">
                  Нашите творения,
                </span>
                <span className="text-gray-400 font-headline leading-tight">
                  {" "}изкуство в глина и цвят
                </span>
              </AnimatedItem>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {galleryItems.map((item, index) => (
                <AnimatedItem key={item.id} delay={index * 0.05}>
                  <div 
                    className="aspect-square rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: item.color }}
                  >
                    {/* Placeholder for image - currently just colored box */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/30 text-lg md:text-xl font-headline">
                        {item.id}
                      </span>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </div>

            {/* Bottom Info */}
            <AnimatedItem>
              <div className="mt-10 md:mt-12 lg:mt-16 bg-gradient-to-br from-[#FFF7F7] to-[#E8F6EF] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-[#F4A7A7]/20 text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 md:mb-5 font-headline">
                  Харесва ли ви каквото виждате?
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-body mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Всяко изделие може да бъде персонализирано според вашите предпочитания. Свържете се с нас за индивидуална поръчка.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#F4A7A7] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-body text-sm md:text-base lg:text-lg font-semibold hover:bg-[#E89696] transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Свържете се с нас
                </a>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        </AnimatedSection>
      </div>
      <Footer />
    </>
  );
}

