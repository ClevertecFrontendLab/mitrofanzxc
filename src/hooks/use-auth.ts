import { Path } from 'constants/path';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'utils';

export const useAuth = (path: Path) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = getToken();

    if (isAuth) {
      navigate(path);
    }
  }, [navigate, path]);
};
