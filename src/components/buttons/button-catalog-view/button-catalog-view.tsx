import { ChangeEvent, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeCatalogView } from '../../../store/slices';
import { Sprite } from '../..';

import { IButtonCatalogView } from './button-catalog-view.interface';

import './button-catalog-view.scss';

export const ButtonCatalogView: FC<IButtonCatalogView> = ({ id, value, dataTestId }) => {
  const { catalogView } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value: inputValue } = target;

    if (inputValue === 'grid' || inputValue === 'list') {
      dispatch(changeCatalogView(inputValue));
    }
  };

  return (
    <label htmlFor={id} className='button-catalog-view'>
      <input
        id={id}
        type='radio'
        name='button-catalog-view'
        value={value}
        checked={catalogView === value}
        onChange={handleInput}
        data-test-id={dataTestId}
      />
      <Sprite id={id === 'grid' ? 'square-four' : 'menu'} className='button-catalog-view__logo' />
    </label>
  );
};
