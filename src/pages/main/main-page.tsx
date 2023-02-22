import { createContext, FC, Fragment, useMemo, useState } from 'react';

import { Catalog, CatalogMenu, Loader, Toast } from '../../components';
import { ETypeToastError } from '../../components/toast/toast.types';
import { useAppSelector, useStartLoading, useToast } from '../../hooks';
import { EConnectionType } from '../../store/slices/slices.types';

export type TContext = {
  inputSearchValue: string;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextMainPage = createContext<TContext>({ inputSearchValue: '', setInputSearchValue: () => undefined });

export const MainPage: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const { isLoading, isSuccess } = useAppSelector((state) => state.loader);

  const store = useMemo(() => ({ inputSearchValue, setInputSearchValue }), [inputSearchValue]);

  useStartLoading(EConnectionType.Catalog);
  useToast({ isLoading, isSuccess });

  return (
    <ContextMainPage.Provider value={store}>
      <section className='main-page'>
        {isLoading && !isSuccess && <Loader />}
        {!isLoading && !isSuccess && (
          <Toast isToastError={true} typeToastError={ETypeToastError.Connection} dataTestId='error' />
        )}
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
