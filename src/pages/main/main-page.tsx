import { createContext, Dispatch, FC, Fragment, SetStateAction, useMemo, useState } from 'react';

import { Catalog, CatalogMenu, Loader, Toast } from '../../components';
import { useAppSelector, useRequest } from '../../hooks';
import { EConnectionType } from '../../store/slices/slices.types';

export type TContext = {
  inputSearchValue: string;
  setInputSearchValue: Dispatch<SetStateAction<string>>;
  isInputSearchOpen: boolean;
  setIsInputSearchOpen: Dispatch<SetStateAction<boolean>>;
};

export const ContextMainPage = createContext<TContext>({
  inputSearchValue: '',
  setInputSearchValue: () => undefined,
  isInputSearchOpen: false,
  setIsInputSearchOpen: () => undefined,
});

export const MainPage: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [isInputSearchOpen, setIsInputSearchOpen] = useState(false);
  const { isLoading: isLoadingCatalog, isError: isErrorCatalog } = useAppSelector((state) => state.catalog);
  const { isLoading: isLoadingCategories, isError: isErrorCategories } = useAppSelector((state) => state.categories);
  const { isToastOpen } = useAppSelector((state) => state.toast);

  const store = useMemo(
    () => ({ inputSearchValue, setInputSearchValue, isInputSearchOpen, setIsInputSearchOpen }),
    [inputSearchValue, isInputSearchOpen]
  );

  useRequest(EConnectionType.Catalog);

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {(isLoadingCatalog || isLoadingCategories) && !isErrorCatalog && !isErrorCategories && <Loader />}
        {isToastOpen && <Toast dataTestId='error' />}
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
