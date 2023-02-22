import { useEffect } from 'react';

import { handleSuccess, startBookDataLoading, startCatalogDataLoading, startLoading } from '../store/slices';
import { EConnectionType } from '../store/slices/slices.types';

import { useAppDispatch } from './use-app-dispatch';

export const useStartLoading = (connectionType: EConnectionType, bookId?: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case EConnectionType.Catalog:
        dispatch(startCatalogDataLoading());
        dispatch(startLoading());
        dispatch(handleSuccess(false));
        break;
      case EConnectionType.Book:
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
