import { LocaleContent, StudioInfo } from '../types/studio';

interface FooterProps {
  content: LocaleContent['footer'];
  studio: StudioInfo;
}

export function Footer({ content, studio }: FooterProps) {
  return (
    <footer className="bg-black border-t border-[#222222] pt-10 pb-20 sm:py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-xs sm:text-sm text-[#A6A9B0] tracking-wide">
          {content.copyright}
        </p>
        <div className="flex items-center gap-4 text-xs sm:text-sm uppercase tracking-[1.5px]">
          <a
            href={studio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CCCCCC] hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            {content.instagramLabel}
          </a>
          <span aria-hidden="true" className="text-[#444444]">
            |
          </span>
          <a
            href={studio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CCCCCC] hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            {content.facebookLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
