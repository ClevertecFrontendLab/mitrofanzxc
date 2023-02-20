import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { ContextMainPage } from '../../pages';
import { Card } from '..';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData } = useAppSelector((state) => state.catalog);
  const { inputSearchValue } = useContext(ContextMainPage);

  return (
    <section className={`${catalogView === 'grid' ? 'catalog' : 'catalog_list'}`}>
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
