import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCatalogSortState, sortCatalogByRating } from '../../../store/slices';
import { Sprite } from '../..';

import './button-sort.scss';

export const ButtonSort: FC = () => {
  const { category } = useParams();
  const { catalogSortState } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const handleButtonSort = () => {
    switch (catalogSortState) {
      case 'default':
        dispatch(changeCatalogSortState('descending'));
        break;
      case 'descending':
        dispatch(changeCatalogSortState('ascending'));
        break;
      case 'ascending':
        dispatch(changeCatalogSortState('descending'));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(sortCatalogByRating(catalogSortState));
  }, [category, catalogSortState, dispatch]);

  return (
    <button className='button-sort' type='button' onClick={handleButtonSort} data-test-id='sort-rating-button'>
      <Sprite
        id='sort-ascending'
        className={`button-sort__logo ${catalogSortState === 'ascending' ? 'button-sort__logo_ascending ' : ''}`}
      />
      <span className='body_small'>По рейтингу</span>
    </button>
  );
};
