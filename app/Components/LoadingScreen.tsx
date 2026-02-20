"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const t = useTranslations();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload the appropriate video based on screen size
    const isMobile = window.innerWidth < 1024;
    const videoSrc = isMobile ? '/images/hero mobile.mp4' : '/images/Hero.mp4';
    
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto';
    video.muted = true;
    
    let loaded = false;
    
    const handleCanPlayThrough = () => {
      if (!loaded) {
        loaded = true;
        setVideoLoaded(true);
        // Small delay to ensure smooth transition
        setTimeout(() => {
          onLoaded();
        }, 300);
      }
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.load();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [onLoaded]);

  if (videoLoaded) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1614] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-[#F4A7A7] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-white/70 font-body text-sm md:text-base">{t('common.loading')}</p>
      </div>
    </div>
  );
}
