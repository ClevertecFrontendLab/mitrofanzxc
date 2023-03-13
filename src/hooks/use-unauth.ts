import { Path } from 'constants/path';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUnauth = (path: Path, isAuth: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(path);
    }
  }, [navigate, path, isAuth]);
};
