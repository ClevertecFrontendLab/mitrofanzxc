import { Path } from 'constants/path';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = (path: Path, searchParams?: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams) {
      navigate(path);
    }
  }, [navigate, path, searchParams]);
};
