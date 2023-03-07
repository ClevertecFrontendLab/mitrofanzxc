import { DataTestId } from 'constants/data-test-id';

import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { catalogSelector, categoriesSelector } from 'store/selectors';
import { changeCatalogSortState, sortCatalogByRating } from 'store/slices';
import { handleFilter, handleSort } from 'utils';
import { Language, Sort } from 'utils/utils.types';

import './button-sort.scss';

export const ButtonSort: FC = () => {
  const { category } = useParams();
  const { catalogSortState, initialData } = useAppSelector(catalogSelector);
  const { categoriesData } = useAppSelector(categoriesSelector);
  const dispatch = useAppDispatch();

  const handleButtonSort = () => {
    switch (catalogSortState) {
      case Sort.Descending:
        dispatch(changeCatalogSortState(Sort.Ascending));
        break;
      case Sort.Ascending:
        dispatch(changeCatalogSortState(Sort.Descending));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(
      sortCatalogByRating(
        handleSort(catalogSortState, handleFilter(categoriesData, Language.En, initialData, category))
      )
    );
  }, [catalogSortState, categoriesData, category, dispatch, initialData]);

  const spriteClass = classNames('button-sort__logo', {
    'button-sort__logo_ascending': catalogSortState === Sort.Ascending,
  });

  return (
    <button
      className='button-sort filter-shadow'
      type='button'
      onClick={handleButtonSort}
      data-test-id={DataTestId.SortRatingButton}
    >
      <Sprite id={SpriteId.Sort} className={spriteClass} />
      <span className='body_small'>По рейтингу</span>
    </button>
  );
};
