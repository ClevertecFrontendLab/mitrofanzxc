import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useStartLoading, useToast } from '../../hooks';
import { filterCatalogByCategory, sortCatalogByRating } from '../../store/slices';
import { translateCategoryTitle } from '../../utils';
import { Card, Loader, Toast } from '..';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData, catalogSortState, isLoading, isSuccess } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useStartLoading('getCatalog');
  useToast({ isLoading, isSuccess });

  useEffect(() => {
    if (category) {
      dispatch(filterCatalogByCategory(translateCategoryTitle(category, categoriesData, 'ru')));
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [category]);

  useEffect(() => {
    dispatch(sortCatalogByRating(catalogSortState));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [catalogSortState]);

  return (
    <section className={`${catalogView === 'grid' ? 'catalog' : 'catalog_list'}`}>
      {isLoading && !isSuccess && <Loader />}
      {!isLoading && !isSuccess && <Toast isToastError={true} typeToastError='connection' dataTestId='error' />}
      {!isLoading && (!catalogData || catalogData.length <= 0) && <h3 className='h3'>По запросу ничего не найдено</h3>}
      {!isLoading &&
        isSuccess &&
        catalogData &&
        catalogData.length > 0 &&
        catalogData.map((element) => (
          <Card key={element.id} catalogView={catalogView} currentCategory={category} {...element} />
        ))}
    </section>
  );
};
