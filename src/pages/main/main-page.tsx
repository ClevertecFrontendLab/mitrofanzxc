import { createContext, FC, Fragment, useMemo, useState } from 'react';

import { Catalog, CatalogMenu, Loader, Toast } from '../../components';
import { useAppSelector, useStartLoading, useToast } from '../../hooks';

export interface IContext {
  inputSearchValue: string;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ContextMainPage = createContext<IContext>({ inputSearchValue: '', setInputSearchValue: () => undefined });

export const MainPage: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const { isLoading, isSuccess } = useAppSelector((state) => state.loader);

  const store = useMemo(() => ({ inputSearchValue, setInputSearchValue }), [inputSearchValue]);

  useStartLoading('getCatalog');
  useToast({ isLoading, isSuccess });

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {isLoading && !isSuccess && <Loader />}
        {!isLoading && !isSuccess && <Toast isToastError={true} typeToastError='connection' dataTestId='error' />}
        {!isLoading && isSuccess && (
          <Fragment>
            <CatalogMenu />
            <Catalog />
          </Fragment>
        )}
      </section>
    </ContextMainPage.Provider>
  );
};
