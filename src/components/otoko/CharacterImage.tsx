'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CharacterImageProps {
  filename: string;
  alt: string;
  size?: number;
  className?: string;
  isHero?: boolean;
}

export default function CharacterImage({
  filename,
  alt,
  size = 180,
  className = '',
  isHero = false,
}: CharacterImageProps) {
  const [hasError, setHasError] = useState(false);

  const borderClass = isHero
    ? 'border-4 border-[#c9a04e]/60 shadow-[0_0_30px_rgba(201,160,78,0.3)]'
    : 'border-2 border-[#c9a04e]/30';

  if (hasError) {
    return (
      <div
        className={`relative rounded-full bg-[#243040] flex items-center justify-center overflow-hidden ${borderClass} ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Silhouette placeholder */}
        <svg
          viewBox="0 0 100 120"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <circle cx="50" cy="32" r="20" fill="#c9a04e" opacity="0.3" />
          {/* Body - muscular silhouette */}
          <path
            d="M18 115 C18 80 35 68 50 65 C65 68 82 80 82 115 Z"
            fill="#c9a04e"
            opacity="0.3"
          />
          {/* Arms */}
          <path
            d="M30 75 C22 80 15 90 18 105"
            stroke="#c9a04e"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M70 75 C78 80 85 90 82 105"
            stroke="#c9a04e"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Cross mark on chest - like a bandaid */}
          <rect x="44" y="80" width="12" height="4" rx="2" fill="#c9a04e" opacity="0.5" />
          <rect x="48" y="76" width="4" height="12" rx="2" fill="#c9a04e" opacity="0.5" />
        </svg>
        {isHero && (
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span className="text-[#c9a04e]/40 text-[10px]">準備中</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-hidden ${borderClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/characters/${filename}`}
        alt={alt}
        fill
        className="object-cover object-top"
        onError={() => setHasError(true)}
        priority={isHero}
      />
    </div>
  );
}
