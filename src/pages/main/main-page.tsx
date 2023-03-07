import { DataTestId } from 'constants/data-test-id';
import { Path } from 'constants/path';

import { createContext, Dispatch, FC, Fragment, SetStateAction, useMemo, useState } from 'react';
import { Catalog, CatalogMenu, Loader, Toast } from 'components';
import { useAppSelector, useRequest, useUnauth } from 'hooks';
import { catalogSelector, categoriesSelector, toastSelector } from 'store/selectors';
import { Connection } from 'store/slices/slices.types';

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
  const { isLoading: isLoadingCatalog, isError: isErrorCatalog } = useAppSelector(catalogSelector);
  const { isLoading: isLoadingCategories, isError: isErrorCategories } = useAppSelector(categoriesSelector);
  const { isToastOpen } = useAppSelector(toastSelector);
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [isInputSearchOpen, setIsInputSearchOpen] = useState(false);

  const isLoading = (isLoadingCatalog || isLoadingCategories) && !isErrorCatalog && !isErrorCategories;
  const isError = isToastOpen;
  const isSuccess = !isLoadingCatalog && !isLoadingCategories && !isErrorCatalog && !isErrorCategories;

  const store = useMemo(
    () => ({ inputSearchValue, setInputSearchValue, isInputSearchOpen, setIsInputSearchOpen }),
    [inputSearchValue, isInputSearchOpen]
  );

  useUnauth(Path.Authorization);
  useRequest({ connectionType: Connection.Catalog });

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {isLoading && <Loader dataTestId={DataTestId.Loader} />}
        {isError && <Toast dataTestId={DataTestId.Error} />}
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
