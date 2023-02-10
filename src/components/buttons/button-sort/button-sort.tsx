import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeCatalogSortState } from '../../../store/slices';
import { Sprite } from '../..';

import './button-sort.scss';

export const ButtonSort: FC = () => {
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

  return (
    <button className='button-sort' type='button' onClick={handleButtonSort}>
      <Sprite
        id='sort-ascending'
        className={`button-sort__logo ${catalogSortState === 'ascending' ? 'button-sort__logo_ascending ' : ''}`}
      />
      <span className='body_small'>По рейтингу</span>
    </button>
  );
};
