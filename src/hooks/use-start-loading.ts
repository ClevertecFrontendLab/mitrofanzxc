import { useEffect } from 'react';

import {
  handleBookDataSuccess,
  handleCatalogDataSuccess,
  handleCategoriesDataSuccess,
  startBookDataLoading,
  startCatalogDataLoading,
  startCategoriesDataLoading,
} from '../store/slices';
import { TConnectionType } from '../store/slices/slices.interface';

import { useAppDispatch } from './use-app-dispatch';

export const useStartLoading = (connectionType: TConnectionType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case 'getCatalog':
        dispatch(startCatalogDataLoading());
        dispatch(handleCatalogDataSuccess(false));
        break;
      case 'getBook':
        dispatch(startBookDataLoading());
        dispatch(handleBookDataSuccess(false));
        break;
      case 'getCategories':
        dispatch(startCategoriesDataLoading());
        dispatch(handleCategoriesDataSuccess(false));
        break;
      default:
        break;
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [dispatch]);
};
