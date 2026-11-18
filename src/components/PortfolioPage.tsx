import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CategorySlug, LocaleContent, PortfolioItem } from '../types/studio';
import { groupPortfolioByCategory } from '../utils/studioLogic';
import { Reveal } from './Reveal';
import { StudioImage } from './StudioImage';

interface PortfolioPageProps {
  content: LocaleContent['portfolio'];
  items: PortfolioItem[];
}

export function PortfolioPage({ content, items }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>('all');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const groupedSections = useMemo(
    () => groupPortfolioByCategory(items, content.categories, selectedCategory),
    [items, content.categories, selectedCategory],
  );

  const visibleFlatItems = useMemo(
    () => groupedSections.flatMap((section) => section.items),
    [groupedSections],
  );

  const activeLightboxIndex = useMemo(() => {
    if (!lightboxItem) {
      return -1;
    }
    return visibleFlatItems.findIndex(
      (item) => item.image === lightboxItem.image && item.category === lightboxItem.category,
    );
  }, [lightboxItem, visibleFlatItems]);

  useEffect(() => {
    if (!lightboxItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxItem(null);
      } else if (event.key === 'ArrowRight' && visibleFlatItems.length > 1) {
        const nextIndex = (activeLightboxIndex + 1) % visibleFlatItems.length;
        setLightboxItem(visibleFlatItems[nextIndex]);
      } else if (event.key === 'ArrowLeft' && visibleFlatItems.length > 1) {
        const prevIndex =
          (activeLightboxIndex - 1 + visibleFlatItems.length) % visibleFlatItems.length;
        setLightboxItem(visibleFlatItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, activeLightboxIndex, visibleFlatItems]);

  const activeLightboxCategoryLabel = useMemo(() => {
    if (!lightboxItem) {
      return '';
    }
    return (
      content.categories.find((cat) => cat.slug === lightboxItem.category)?.label ??
      lightboxItem.category
    );
  }, [lightboxItem, content.categories]);

  const handleStepLightbox = (direction: 1 | -1) => {
    if (visibleFlatItems.length <= 1 || activeLightboxIndex === -1) {
      return;
    }
    const nextIndex =
      (activeLightboxIndex + direction + visibleFlatItems.length) % visibleFlatItems.length;
    setLightboxItem(visibleFlatItems[nextIndex]);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16 space-y-12">
      <header className="space-y-4 border-b border-[#222222] pb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-[2px] text-white">
          {content.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#CCCCCC] max-w-2xl leading-relaxed">
          {content.intro}
        </p>
      </header>

      <div
        role="group"
        aria-label="Portfolio style filters"
        className="flex flex-wrap gap-2.5"
      >
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          aria-pressed={selectedCategory === 'all'}
          className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
            selectedCategory === 'all'
              ? 'bg-white text-black border-white'
              : 'bg-[#121212] text-[#CCCCCC] border-[#222222] hover:border-white hover:text-white'
          }`}
        >
          {content.allFilter}
        </button>

        {content.categories.map((category) => {
          const isActive = selectedCategory === category.slug;
          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setSelectedCategory(category.slug)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2.5 text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-white text-black border-white font-semibold'
                  : 'bg-[#121212] text-[#CCCCCC] border-[#222222] hover:border-white hover:text-white'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-16">
        {groupedSections.map((section) => (
          <Reveal key={section.category.slug}>
            <section
              aria-labelledby={`cat-${section.category.slug}`}
              className="space-y-6"
            >
              <h2
                id={`cat-${section.category.slug}`}
                className="font-display text-lg sm:text-2xl font-bold uppercase tracking-[2px] text-white border-b-2 border-[#A6A9B0] pb-3"
              >
                {section.category.label}
              </h2>

              {section.items.length === 0 ? (
                <div className="rounded-xl bg-[#121212] border border-[#222222] p-8 text-sm text-[#A6A9B0]">
                  {content.emptyState}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, idx) => (
                    <Reveal key={`${item.category}-${item.image}`} delayMs={(idx % 3) * 70}>
                      <button
                        type="button"
                        onClick={() => setLightboxItem(item)}
                        aria-label={`${content.viewFullLabel}: ${item.title}`}
                        className="portfolio-card group relative block w-full h-[340px] rounded-xl bg-[#121212] border border-[#222222] hover:border-white transition-colors duration-300 overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                      >
                        <StudioImage
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          fallbackTitle={section.category.label}
                          className="portfolio-card-img w-full h-[340px] object-cover"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute top-3.5 right-3.5 rounded-full bg-black/75 backdrop-blur-md border border-white/30 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300"
                        >
                          {content.viewBadgeLabel || 'View'}
                        </span>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 pt-12 opacity-90 group-hover:opacity-100 transition-opacity">
                          <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
                            {item.title}
                          </p>
                        </div>
                      </button>
                    </Reveal>
                  ))}
                </div>
              )}
            </section>
          </Reveal>
        ))}
      </div>

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-[#121212] border border-[#222222] flex flex-col shadow-[0_24px_64px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#222222] bg-black">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[1.5px] text-[#A6A9B0] truncate">
                  {activeLightboxCategoryLabel}
                </p>
                <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-[1.5px] text-white truncate mt-0.5">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label={content.closeLightboxLabel}
                className="rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center border border-[#222222] text-white hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer shrink-0"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="relative bg-[#070707] flex items-center justify-center max-h-[75vh] overflow-hidden">
              <StudioImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                loading="eager"
                fallbackTitle={activeLightboxCategoryLabel}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              {visibleFlatItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => handleStepLightbox(-1)}
                    aria-label={content.prevImageLabel}
                    className="rounded-full absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/80 backdrop-blur-sm border border-[#222222] text-white hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={22} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepLightbox(1)}
                    aria-label={content.nextImageLabel}
                    className="rounded-full absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/80 backdrop-blur-sm border border-[#222222] text-white hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer"
                  >
                    <ChevronRight size={22} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
