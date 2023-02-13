import { useEffect } from 'react';

import { useAppSelector } from './use-app-selector';

const useBodyOverflow = () => {
  const { isMobileMenuOpen } = useAppSelector((state) => state.mobileMenu);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isMobileMenuOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isMobileMenuOpen]);
};

export { useBodyOverflow };
