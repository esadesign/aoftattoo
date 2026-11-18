import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function StudioImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle,
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`w-full h-full bg-[#121212] flex flex-col items-center justify-center gap-3 p-6 text-center border border-[#222222] ${className}`}
      >
        <ImageOff size={28} className="text-[#A6A9B0]" aria-hidden="true" />
        <p className="font-display text-xs uppercase tracking-[2px] text-[#A6A9B0]">
          {fallbackTitle || 'Aof Tattoo Studio Phuket'}
        </p>
        <p className="text-xs text-[#777777] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
