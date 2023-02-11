import { useEffect } from 'react';

import { handleSuccess, startLoading } from '../store/slices';

import { useAppDispatch } from './use-app-dispatch';

export const useStartLoading = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startLoading());
    dispatch(handleSuccess(false));
  }, [dispatch]);
};
