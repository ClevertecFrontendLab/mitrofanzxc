import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { bookRequest, catalogRequest, categoriesRequest } from 'store/slices';
import { Connection } from 'store/slices/slices.types';

export type UseRequestProps = { connectionType: Connection; bookId?: string };

export const useRequest = ({ connectionType, bookId }: UseRequestProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (connectionType) {
      case Connection.Book:
        if (bookId) {
          dispatch(bookRequest(bookId));
          dispatch(categoriesRequest());
        }
        break;
      case Connection.Catalog:
        dispatch(catalogRequest());
        dispatch(categoriesRequest());
        break;
      default:
        break;
    }
  }, [bookId, connectionType, dispatch]);
};
