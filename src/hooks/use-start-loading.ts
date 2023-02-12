import { useEffect } from 'react';

import {
  endBookDataLoading,
  endCatalogDataLoading,
  handleBookDataSuccess,
  handleCatalogDataSuccess,
  startBookDataLoading,
  startCatalogDataLoading,
} from '../store/slices';
import { TConnectionType } from '../store/slices/slices.interface';

import { useAppDispatch } from './use-app-dispatch';

export const useStartLoading = (connectionType: TConnectionType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case 'getAllBooks':
        dispatch(startCatalogDataLoading());
        dispatch(handleCatalogDataSuccess(false));
        break;
      case 'getBook':
        dispatch(startBookDataLoading());
        dispatch(handleBookDataSuccess(false));
        break;
      default:
        break;
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [dispatch]);
};
