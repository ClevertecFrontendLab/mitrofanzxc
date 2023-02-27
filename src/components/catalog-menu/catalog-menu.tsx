import { FC, useContext } from 'react';
import classNames from 'classnames';
import { ButtonCatalogView, ButtonSort, InputSearch } from 'components';
import { CatalogView } from 'components/buttons/button-catalog-view/button-catalog-view.types';
import { ContextMainPage } from 'pages';

import './catalog-menu.scss';

export const CatalogMenu: FC = () => {
  const { isInputSearchOpen } = useContext(ContextMainPage);

  const catalogMenuItemClass = classNames('catalog-menu__item', {
    'catalog-menu__item_active': isInputSearchOpen,
  });

  return (
    <section className='catalog-menu'>
      <div className='catalog-menu__item'>
        <InputSearch />
        <ButtonSort />
      </div>
      <div className={catalogMenuItemClass}>
        <ButtonCatalogView id={CatalogView.Grid} value={CatalogView.Grid} dataTestId='button-menu-view-window' />
        <ButtonCatalogView id={CatalogView.List} value={CatalogView.List} dataTestId='button-menu-view-list' />
      </div>
    </section>
  );
};
