import { useEffect } from 'react';

import { openToast } from '../store/slices';

import { useAppDispatch } from './use-app-dispatch';

export interface IUseToast {
  isLoading: boolean;
  isSuccess: boolean;
}

export const useToast = ({ isLoading, isSuccess }: IUseToast) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(openToast());
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isLoading, isSuccess]);
};
