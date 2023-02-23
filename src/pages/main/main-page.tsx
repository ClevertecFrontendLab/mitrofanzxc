import { createContext, FC, Fragment, useEffect, useMemo, useState } from 'react';

import { Catalog, CatalogMenu, Loader, Toast } from '../../components';
import { ETypeToastError } from '../../components/toast/toast.types';
import { useAppDispatch, useAppSelector, useRequest } from '../../hooks';
import { openToast } from '../../store/slices';
import { EConnectionType } from '../../store/slices/slices.types';

export type TContext = {
  inputSearchValue: string;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextMainPage = createContext<TContext>({ inputSearchValue: '', setInputSearchValue: () => undefined });

export const MainPage: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const { isLoading: isLoadingCatalog, isError: isErrorCatalog } = useAppSelector((state) => state.catalog);
  const { isLoading: isLoadingCategories, isError: isErrorCategories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const store = useMemo(() => ({ inputSearchValue, setInputSearchValue }), [inputSearchValue]);

  useRequest(EConnectionType.Catalog);

  // useEffect(() => {
  //   if (!isLoadingCatalog && !isLoadingCategories && (isErrorCatalog || isErrorCategories)) {
  //     dispatch(openToast());
  //   }
  // }, [dispatch, isErrorCatalog, isErrorCategories, isLoadingCatalog, isLoadingCategories]);

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {(isLoadingCatalog || isLoadingCategories) && !isErrorCatalog && !isErrorCategories && <Loader />}
        {(isErrorCatalog || isErrorCategories) && (
          <Toast isToastError={true} typeToastError={ETypeToastError.Connection} dataTestId='error' />
        )}
        {!isLoadingCatalog && !isLoadingCategories && !isErrorCatalog && !isErrorCategories && (
          <Fragment>
            <CatalogMenu />
            <Catalog />
          </Fragment>
        )}
      </section>
    </ContextMainPage.Provider>
  );
};
