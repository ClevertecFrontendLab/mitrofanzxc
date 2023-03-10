import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    } catch {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }
  }, [pathname, search]);
};
