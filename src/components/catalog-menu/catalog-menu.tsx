import { FC } from 'react';

import { useAppSelector } from '../../hooks';
import { ButtonCatalogView, ButtonSort, InputSearch } from '..';

import './catalog-menu.scss';

export const CatalogMenu: FC = () => {
  const { isInputSearchOpen } = useAppSelector((state) => state.catalog);

  return (
    <section className='catalog-menu'>
      <div className='catalog-menu__item'>
        <InputSearch />
        <ButtonSort />
      </div>
      <div className={`catalog-menu__item ${isInputSearchOpen ? 'catalog-menu__item_active' : ''}`}>
        <ButtonCatalogView id='grid' value='grid' dataTestId='button-menu-view-window' />
        <ButtonCatalogView id='list' value='list' dataTestId='button-menu-view-list' />
      </div>
    </section>
  );
};
