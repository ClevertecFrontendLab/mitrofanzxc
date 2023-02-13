import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterCatalogByCategory, sortCatalogByRating } from '../../store/slices';
import { translateCategoryTitle } from '../../utils';
import { Card } from '..';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData, catalogSortState } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (category) {
      dispatch(filterCatalogByCategory(translateCategoryTitle(category, categoriesData, 'en')));
    }
  }, [category, categoriesData, dispatch]);

  useEffect(() => {
    dispatch(sortCatalogByRating(catalogSortState));
  }, [catalogSortState, category, dispatch]);

  return (
    <section className={`${catalogView === 'grid' ? 'catalog' : 'catalog_list'}`}>
      {(!catalogData || catalogData.length <= 0) && <h3 className='h3'>По запросу ничего не найдено</h3>}
      {catalogData &&
        catalogData.length > 0 &&
        catalogData.map((element) => (
          <Card key={element.id} catalogView={catalogView} currentCategory={category} {...element} />
        ))}
    </section>
  );
};
