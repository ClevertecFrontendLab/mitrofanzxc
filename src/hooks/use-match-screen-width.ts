import { useEffect } from 'react';

export const useMatchScreenWidth = (screenWidth: number, handler: (value: boolean) => void) => {
  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${screenWidth}px)`);

    const handleScreenWidth = () => {
      handler(Boolean(mediaQueryList.matches));
    };

    mediaQueryList.addEventListener('change', handleScreenWidth);
    handleScreenWidth();

    return () => {
      mediaQueryList.removeEventListener('change', handleScreenWidth);
    };
  }, [screenWidth, handler]);
};
