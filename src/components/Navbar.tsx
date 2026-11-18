import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, LocaleContent, PageRoute } from '../types/studio';

interface NavbarProps {
  studioName: string;
  content: LocaleContent['nav'];
  language: Language;
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onToggleLanguage: () => void;
}

export function Navbar({
  studioName,
  content,
  language,
  activePage,
  onNavigate,
  onToggleLanguage,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: PageRoute; label: string }[] = [
    { page: 'home', label: content.home },
    { page: 'portfolio', label: content.portfolio },
    { page: 'contact', label: content.contact },
  ];

  const handleSelectPage = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 navbar-glass border-b border-[#222222]/90">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className="inline-flex items-center gap-2 sm:gap-3 font-display text-[10px] min-[375px]:text-[11px] sm:text-base md:text-lg font-bold uppercase tracking-[0.5px] sm:tracking-[2px] text-white whitespace-nowrap shrink-0 text-left hover:text-[#CCCCCC] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
        >
          <img
            src="/kuvat/logo.jpg"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 md:h-12 md:w-12 object-contain shrink-0 rounded-none"
          />
          <span>{studioName}</span>
        </button>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          <nav aria-label="Primary navigation" className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleSelectPage(item.page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-2 text-sm font-medium tracking-wider uppercase whitespace-nowrap shrink-0 border-b-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 ${
                    isActive
                      ? 'text-white border-white'
                      : 'text-[#A6A9B0] border-transparent hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={content.langSwitchAria}
            data-testid="language-toggle"
            data-lang={language}
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white border border-[#222222] bg-[#070707]/80 hover:border-white hover:bg-[#121212] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            {content.langSwitchLabel}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={content.langSwitchAria}
            data-testid="language-toggle-mobile"
            data-lang={language}
            className="rounded-full min-w-[40px] min-h-[40px] px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-white border border-[#222222] bg-[#070707]/80 hover:border-white hover:bg-[#121212] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {content.langSwitchLabel}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? content.menuCloseAria : content.menuOpenAria}
            className="rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center border border-[#222222] text-white hover:border-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#222222] px-4 py-3 flex flex-col gap-1"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => handleSelectPage(item.page)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left px-3 py-3 min-h-[44px] text-sm font-medium uppercase tracking-wider border-l-0 border-b border-[#222222] last:border-b-0 transition-colors cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-[#A6A9B0] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
