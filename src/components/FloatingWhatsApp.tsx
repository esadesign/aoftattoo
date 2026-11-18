import { MessageCircle } from 'lucide-react';
import { Language } from '../types/studio';

interface FloatingWhatsAppProps {
  language: Language;
  phoneHref?: string;
}

export function FloatingWhatsApp({
  language,
  phoneHref = 'https://wa.me/66927013659',
}: FloatingWhatsAppProps) {
  const label =
    language === 'th'
      ? 'แชทจองคิวผ่าน WhatsApp'
      : 'Quick Book on WhatsApp';

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
      <span
        aria-hidden="true"
        className="whatsapp-pulse absolute inset-0 rounded-full bg-[#25D366]"
      />
      <a
        href={phoneHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        data-testid="floating-whatsapp"
        className="relative flex items-center gap-2.5 rounded-full bg-[#121212] border border-[#25D366]/60 text-white px-4 py-3.5 sm:px-5 sm:py-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.65)] hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
      >
        <MessageCircle size={20} aria-hidden="true" className="shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[1.5px] whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
