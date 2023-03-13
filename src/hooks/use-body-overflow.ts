import { useEffect } from 'react';
import { useAppSelector } from 'hooks';
import { bookSelector, catalogSelector, categoriesSelector, mobileMenuSelector } from 'store/selectors';

const useBodyOverflow = (isModalOpen = false) => {
  const { isMobileMenuOpen } = useAppSelector(mobileMenuSelector);
  const { isLoading: isLoadingCatalog } = useAppSelector(catalogSelector);
  const { isLoading: isLoadingCategories } = useAppSelector(categoriesSelector);
  const { isLoading: isLoadingBook } = useAppSelector(bookSelector);

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
