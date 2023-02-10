import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useToast } from '../../hooks';
import { getAllBooks } from '../../store/services';
import { filterCatalogByCategory, sortCatalogByRating } from '../../store/slices';
import { Card, Loader, Toast } from '..';

import './catalog.scss';

export const Catalog: FC = () => {
  const { category } = useParams();
  const { catalogView, catalogData, catalogSortState } = useAppSelector((state) => state.catalog);
  const { isLoading, isSuccess } = useAppSelector((state) => state.loader);
  const dispatch = useAppDispatch();

  getAllBooks();

  useEffect(() => {
    if (category) {
      dispatch(filterCatalogByCategory(category));
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [category]);

  useEffect(() => {
    dispatch(sortCatalogByRating(catalogSortState));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [catalogSortState]);

  useToast({ isLoading, isSuccess });

  return (
    <section className={`${catalogView === 'grid' ? 'catalog' : 'catalog_list'}`}>
      {isLoading && !isSuccess && <Loader />}
      {!isLoading && !isSuccess && <Toast isToastError={true} typeToastError='connection' dataTestId='error' />}
      {!isLoading && (!catalogData || catalogData.length <= 0) && <h3 className='h3'>По запросу ничего не найдено</h3>}
      {!isLoading &&
        isSuccess &&
        catalogData &&
        catalogData.length > 0 &&
        catalogData.map((element) => <Card key={element.id} catalogView={catalogView} {...element} />)}
    </section>
  );
};
