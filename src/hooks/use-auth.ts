import { LocalStorage } from 'constants/local-storage';
import { Path } from 'constants/path';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from 'utils';

export const useAuth = (path: Path) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = getLocalStorage(LocalStorage.Token);

    if (isAuth) {
      navigate(path);
    }
  }, [navigate, path]);
};
