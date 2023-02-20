import { useEffect } from 'react';

import { useAppSelector } from './use-app-selector';

const useBodyOverflow = (isModalOpen = false) => {
  const { isMobileMenuOpen } = useAppSelector((state) => state.mobileMenu);
  const { isLoading } = useAppSelector((state) => state.loader);
  const { isError } = useAppSelector((state) => state.modal);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isMobileMenuOpen || isLoading || isError || isModalOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isMobileMenuOpen, isLoading, isError, isModalOpen]);
};

export { useBodyOverflow };
