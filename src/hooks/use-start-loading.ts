import { useEffect } from 'react';

import { handleSuccess, startBookDataLoading, startCatalogDataLoading, startLoading } from '../store/slices';
import { TConnectionType } from '../store/slices/slices.interface';

import { useAppDispatch } from './use-app-dispatch';

export const useStartLoading = (connectionType: TConnectionType, bookId?: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case 'getCatalog':
        dispatch(startCatalogDataLoading());
        dispatch(startLoading());
        dispatch(handleSuccess(false));
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};
