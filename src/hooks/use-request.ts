import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { bookRequest, catalogRequest, categoriesRequest } from 'store/slices';
import { Connection } from 'store/slices/slices.types';
import { getToken } from 'utils';

export type UseRequestProps = { connectionType: Connection; bookId?: string };

export const useRequest = ({ connectionType, bookId }: UseRequestProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();

    switch (connectionType) {
      case Connection.Book:
        if (bookId && token) {
          dispatch(bookRequest(bookId));
          dispatch(categoriesRequest());
        }
        break;
      case Connection.Catalog:
        if (token) {
          dispatch(catalogRequest());
          dispatch(categoriesRequest());
        }
        break;
      default:
        break;
    }
  }, [bookId, connectionType, dispatch]);
};
