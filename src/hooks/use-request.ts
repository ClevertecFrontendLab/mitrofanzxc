import { useEffect } from 'react';

import { bookRequest, catalogRequest, categoriesRequest } from '../store/slices';
import { EConnectionType } from '../store/slices/slices.types';

import { useAppDispatch } from './use-app-dispatch';

export const useRequest = (connectionType: EConnectionType, bookId?: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case EConnectionType.Catalog:
        dispatch(catalogRequest());
        dispatch(categoriesRequest());
        break;
      case EConnectionType.Book:
        if (bookId) {
          dispatch(bookRequest(bookId));
          dispatch(categoriesRequest());
        }
        break;
      default:
        break;
    }
  }, [bookId, connectionType, dispatch]);
};
