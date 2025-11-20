import { ArrowRight } from 'lucide-react';
import { howToSteps } from '../data/mockData';

export default function HowItWorks() {
  return (
    <section id="how-to" className="py-20 bg-gradient-to-br from-[var(--clay-beige)]/50 to-[var(--blush-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-subheadline text-[var(--soft-rose)] text-xl italic mb-4">Our Process</p>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[var(--warm-taupe)] mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-[var(--warm-taupe)] max-w-2xl mx-auto">
            From selection to your home, we make the process simple and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howToSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-headline text-4xl font-bold text-[var(--soft-rose)]/30">
                      {step.number}
                    </span>
                    <div className="bg-[var(--sage-mist)]/30 p-3 rounded-full">
                      <Icon className="text-[var(--soft-rose)]" size={24} />
                    </div>
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-[var(--warm-taupe)] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-[var(--warm-taupe)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howToSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[var(--soft-rose)]/40" size={32} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

