import { useEffect } from 'react';

import { useAppSelector } from './use-app-selector';

const useBodyOverflow = (isModalOpen = false) => {
  const { isMobileMenuOpen } = useAppSelector((state) => state.mobileMenu);
  const { isLoading: isLoadingCatalog } = useAppSelector((state) => state.catalog);
  const { isLoading: isLoadingCategories } = useAppSelector((state) => state.categories);
  const { isLoading: isLoadingBook } = useAppSelector((state) => state.book);

  useEffect(() => {
    const BODY = document.querySelector('body') as HTMLBodyElement;

    if (isMobileMenuOpen || isLoadingCatalog || isLoadingCategories || isLoadingBook || isModalOpen) {
      BODY.classList.add('body_overflow');
    } else {
      BODY.classList.remove('body_overflow');
    }
  }, [isMobileMenuOpen, isLoadingCatalog, isLoadingCategories, isLoadingBook, isModalOpen]);
};

export { useBodyOverflow };
