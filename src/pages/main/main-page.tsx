import { FC } from 'react';

import { Catalog, CatalogMenu } from '../../components';

export const MainPage: FC = () => (
  <section className='main-page'>
    <CatalogMenu />
    <Catalog />
  </section>
);
