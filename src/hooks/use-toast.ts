import { useEffect } from 'react';

import { openToast } from '../store/slices';
import { TLoaderState } from '../store/slices/slices.types';

import { useAppDispatch } from './use-app-dispatch';

export const useToast = ({ isLoading, isSuccess }: TLoaderState) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(openToast());
    }
  }, [isLoading, isSuccess, dispatch]);
};
