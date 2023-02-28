import { LocalStorage } from 'constants/local-storage';
import { Path } from 'constants/path';

import { createContext, Dispatch, FC, Fragment, SetStateAction, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Catalog, CatalogMenu, Loader, Toast } from 'components';
import { useAppSelector, useRequest } from 'hooks';
import { catalogSelector, categoriesSelector, toastSelector } from 'store/selectors';
import { Connection } from 'store/slices/slices.types';
import { getLocalStorage } from 'utils';

export type Context = {
  inputSearchValue: string;
  setInputSearchValue: Dispatch<SetStateAction<string>>;
  isInputSearchOpen: boolean;
  setIsInputSearchOpen: Dispatch<SetStateAction<boolean>>;
};

export const ContextMainPage = createContext<Context>({
  inputSearchValue: '',
  setInputSearchValue: () => undefined,
  isInputSearchOpen: false,
  setIsInputSearchOpen: () => undefined,
});

export const MainPage: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [isInputSearchOpen, setIsInputSearchOpen] = useState(false);
  const { isLoading: isLoadingCatalog, isError: isErrorCatalog } = useAppSelector(catalogSelector);
  const { isLoading: isLoadingCategories, isError: isErrorCategories } = useAppSelector(categoriesSelector);
  const { isToastOpen } = useAppSelector(toastSelector);

  const isLoading = (isLoadingCatalog || isLoadingCategories) && !isErrorCatalog && !isErrorCategories;
  const isError = isToastOpen;
  const isSuccess = !isLoadingCatalog && !isLoadingCategories && !isErrorCatalog && !isErrorCategories;

  const store = useMemo(
    () => ({ inputSearchValue, setInputSearchValue, isInputSearchOpen, setIsInputSearchOpen }),
    [inputSearchValue, isInputSearchOpen]
  );

  const user = getLocalStorage(LocalStorage.Token);

  // useRequest({ connectionType: Connection.Catalog });

  if (!user) {
    return <Navigate to={Path.Authorization} />;
  }

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {isLoading && <Loader />}
        {isError && <Toast dataTestId='error' />}
        {isSuccess && (
          <Fragment>
            <CatalogMenu />
            <Catalog />
          </Fragment>
        )}
      </section>
    </ContextMainPage.Provider>
  );
};
