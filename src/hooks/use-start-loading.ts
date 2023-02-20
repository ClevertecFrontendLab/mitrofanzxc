import { useEffect } from 'react';

import { handleSuccess, startBookDataLoading, startCatalogDataLoading, startLoading } from '../store/slices';
import { TConnectionType } from '../store/slices/slices.interface';

import { useAppDispatch } from './use-app-dispatch';
import { useAppSelector } from './use-app-selector';

export const useStartLoading = (connectionType: TConnectionType, bookId?: string | undefined) => {
  const { initialData } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case 'getCatalog':
        // if (!initialData || !initialData.length) {
        dispatch(startCatalogDataLoading());
        dispatch(startLoading());
        dispatch(handleSuccess(false));
        // }
        break;
      case 'getBook':
        if (bookId) {
          dispatch(startBookDataLoading(bookId));
          dispatch(startLoading());
          dispatch(handleSuccess(false));
        }
        break;
      default:
        break;
    }
  }, [connectionType, bookId, dispatch]);
};
