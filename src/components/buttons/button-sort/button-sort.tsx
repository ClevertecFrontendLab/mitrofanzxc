import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCatalogSortState, sortCatalogByRating } from '../../../store/slices';
import { handleFilter, handleSort } from '../../../utils';
import { ELanguage, ESort } from '../../../utils/utils.types';
import { Sprite } from '../..';
import { ESpriteId } from '../../sprite/sprite.types';

import './button-sort.scss';

export const ButtonSort: FC = () => {
  const { category } = useParams();
  const { catalogSortState, initialData } = useAppSelector((state) => state.catalog);
  const { categoriesData } = useAppSelector((state) => state.categories);
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
    dispatch(
      sortCatalogByRating(
        handleSort(catalogSortState, handleFilter(category, categoriesData, ELanguage.En, initialData))
      )
    );
  }, [catalogSortState, categoriesData, category, dispatch, initialData]);

  const spriteClass = classNames('button-sort__logo', {
    'button-sort__logo_ascending': catalogSortState === ESort.Ascending,
  });

  return (
    <button
      className='button-sort filter-shadow'
      type='button'
      onClick={handleButtonSort}
      data-test-id='sort-rating-button'
    >
      <Sprite id={ESpriteId.Sort} className={spriteClass} />
      <span className='body_small'>По рейтингу</span>
    </button>
  );
};
