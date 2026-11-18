import { LocaleContent, PageRoute, StudioInfo } from '../types/studio';
import { Reveal } from './Reveal';
import { StudioImage } from './StudioImage';

interface HomePageProps {
  content: LocaleContent;
  studio: StudioInfo;
  onNavigate: (page: PageRoute) => void;
}

const MARQUEE_TEXT =
  'SAK YANT • REALISM • GEOMETRIC • POLYNESIAN • FULL SLEEVE • MINIMAL • KARON & KATA PHUKET';

export function HomePage({ content, studio, onNavigate }: HomePageProps) {
  return (
    <div>
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="hero-spotlight pointer-events-none absolute inset-0"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[2px] text-[#A6A9B0]">
              {content.hero.locationLine}
            </p>
            <h1
              id="hero-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold uppercase tracking-[2px] leading-[1.15] text-white [text-wrap:balance]"
            >
              {content.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed max-w-xl">
              {content.hero.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="cta-primary rounded-full px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[2px] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                {content.hero.cta}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="cta-secondary rounded-full px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[2px] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                {content.hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#222222] bg-[#121212] h-[340px] sm:h-[420px] lg:h-full lg:min-h-[460px] overflow-hidden shadow-[0_24px_48px_-20px_rgba(0,0,0,0.85)]">
              <StudioImage
                src={studio.heroImage}
                alt={content.hero.imageAlt}
                loading="eager"
                fallbackTitle={studio.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        aria-label="Tattoo styles ticker"
        data-testid="style-marquee"
        className="marquee-container border-y border-[#222222] bg-[#0a0a0a] py-3.5 overflow-hidden select-none"
      >
        <div className="marquee-track">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1}
              className="flex items-center gap-8 pr-8 shrink-0"
            >
              {[0, 1, 2].map((repeatIndex) => (
                <span
                  key={repeatIndex}
                  className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-[3px] text-[#A6A9B0] whitespace-nowrap"
                >
                  {MARQUEE_TEXT}
                  <span aria-hidden="true" className="ml-8 text-[#FF4500]">
                    •
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20 space-y-20">
        <Reveal>
          <section aria-labelledby="why-choose-us-heading" className="space-y-8">
            <div className="border-b border-[#222222] pb-4">
              <h2
                id="why-choose-us-heading"
                className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[2px] text-[#A6A9B0]"
              >
                {content.whyChooseUs.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.whyChooseUs.cards.map((card, index) => (
                <Reveal key={card.title} delayMs={index * 80} className="h-full">
                  <article className="luxury-card h-full bg-[#121212] border border-[#222222] rounded-xl p-8 flex flex-col gap-4">
                    <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-[2px] text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={60}>
          <section aria-labelledby="nail-salon-heading">
            <div className="luxury-card bg-[#121212] border border-[#222222] rounded-xl p-8 sm:p-12 text-center space-y-4">
              <h2
                id="nail-salon-heading"
                className="font-display text-lg sm:text-2xl font-bold uppercase tracking-[2px] text-white"
              >
                {content.nailSalon.title}
              </h2>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed max-w-3xl mx-auto">
                {content.nailSalon.body}
              </p>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
