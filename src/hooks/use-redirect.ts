import { Path } from 'constants/path';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type UseRedirectProps = {
  path: Path;
  isSuccess?: boolean;
  searchParams?: string;
};

export const useRedirect = ({ path, isSuccess, searchParams }: UseRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess || searchParams) {
      navigate(path);
    }
  }, [navigate, path, isSuccess, searchParams]);
};
