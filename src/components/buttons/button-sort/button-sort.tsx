import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCatalogSortState, sortCatalogByRating } from '../../../store/slices';
import { ESort } from '../../../utils/utils.types';
import { Sprite } from '../..';

import './button-sort.scss';

export const ButtonSort: FC = () => {
  const { category } = useParams();
  const { catalogSortState } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const handleButtonSort = () => {
    switch (catalogSortState) {
      case ESort.Descending:
        dispatch(changeCatalogSortState(ESort.Ascending));
        break;
      case ESort.Ascending:
        dispatch(changeCatalogSortState(ESort.Descending));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(sortCatalogByRating(catalogSortState));
  }, [category, catalogSortState, dispatch]);

  return (
    <button
      className='button-sort filter-shadow'
      type='button'
      onClick={handleButtonSort}
      data-test-id='sort-rating-button'
    >
      <Sprite
        id='sort-ascending'
        className={`button-sort__logo ${catalogSortState === ESort.Ascending ? 'button-sort__logo_ascending ' : ''}`}
      />
      <span className='body_small'>По рейтингу</span>
    </button>
  );
};
