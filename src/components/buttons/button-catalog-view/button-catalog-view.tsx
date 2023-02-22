import { ChangeEvent, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCatalogView } from '../../../store/slices';
import { Sprite } from '../..';

import { ECatalogView, TButtonCatalogView } from './button-catalog-view.types';

import './button-catalog-view.scss';

export const ButtonCatalogView: FC<TButtonCatalogView> = ({ id, value, dataTestId }) => {
  const { catalogView } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value: inputValue } = target;

    if (inputValue === ECatalogView.Grid || inputValue === ECatalogView.List) {
      dispatch(changeCatalogView(inputValue));
    }
  };

  return (
    <label htmlFor={id} className='button-catalog-view filter-shadow'>
      <input
        id={id}
        type='radio'
        name='button-catalog-view'
        value={value}
        checked={catalogView === value}
        onChange={handleInput}
        data-test-id={dataTestId}
      />
      <Sprite id={id === ECatalogView.Grid ? 'square-four' : 'menu'} className='button-catalog-view__logo' />
    </label>
  );
};
