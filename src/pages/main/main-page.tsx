import { FC, Fragment } from 'react';

import { Catalog, CatalogMenu, Loader, Toast } from '../../components';
import { useAppSelector, useStartLoading, useToast } from '../../hooks';

export const MainPage: FC = () => {
  const { isLoading, isSuccess } = useAppSelector((state) => state.loader);

  useStartLoading('getCatalog');
  useToast({ isLoading, isSuccess });

  return (
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
  );
};
