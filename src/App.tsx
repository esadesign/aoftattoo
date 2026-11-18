import { useEffect, useState } from 'react';
import { ContactPage } from './components/ContactPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { PortfolioPage } from './components/PortfolioPage';
import { DEFAULT_CONTENT } from './data/defaultContent';
import { Language, PageRoute, StudioContentData } from './types/studio';
import { normalizeStudioContent } from './utils/studioLogic';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [contentData, setContentData] = useState<StudioContentData>(DEFAULT_CONTENT);

  useEffect(() => {
    let isMounted = true;

    fetch('/data/content.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((json: unknown) => {
        if (isMounted) {
          setContentData(normalizeStudioContent(json));
        }
      })
      .catch(() => {
        // Keep in-memory DEFAULT_CONTENT fallback if CMS JSON fetch fails
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleNavigate = (page: PageRoute) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const activeLocale = contentData[language];

  return (
    <div className="min-h-screen flex flex-col bg-[#070707] text-[#CCCCCC]">
      <Navbar
        studioName={contentData.studio.name}
        content={activeLocale.nav}
        language={language}
        activePage={activePage}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />

      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            content={activeLocale}
            studio={contentData.studio}
            onNavigate={handleNavigate}
          />
        )}
        {activePage === 'portfolio' && (
          <PortfolioPage
            content={activeLocale.portfolio}
            items={contentData.portfolio}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            content={activeLocale.contact}
            studio={contentData.studio}
          />
        )}
      </main>

      <Footer content={activeLocale.footer} studio={contentData.studio} />
      <FloatingWhatsApp language={language} />
    </div>
  );
}
