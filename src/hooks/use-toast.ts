import { useEffect } from 'react';

import { openToast } from '../store/slices';
import { ILoaderState } from '../store/slices/slices.interface';

import { useAppDispatch } from './use-app-dispatch';

export const useToast = ({ isLoading, isSuccess }: ILoaderState) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(openToast());
    }
  }, [isLoading, isSuccess, dispatch]);
};
