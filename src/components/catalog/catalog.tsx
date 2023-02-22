import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { ECatalogView } from '../buttons/button-catalog-view/button-catalog-view.types';
import { Card } from '..';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData } = useAppSelector((state) => state.catalog);
  const { inputSearchValue } = useContext(ContextMainPage);

  const sectionClass = classNames({
    catalog: catalogView === ECatalogView.Grid,
    catalog_list: catalogView !== ECatalogView.Grid,
  });

  return (
    <section className={sectionClass}>
      {(!catalogData || catalogData.length <= 0) && (
        <h3 className='h3' data-test-id={`${inputSearchValue ? 'search-result-not-found' : 'empty-category'}`}>{`${
          inputSearchValue ? 'По запросу ничего не найдено' : 'В этой категории книг ещё нет'
        }`}</h3>
      )}
      {catalogData &&
        catalogData.length > 0 &&
        catalogData.map((element) => (
          <Card key={element.id} catalogView={catalogView} currentCategory={category} {...element} />
        ))}
    </section>
  );
};
