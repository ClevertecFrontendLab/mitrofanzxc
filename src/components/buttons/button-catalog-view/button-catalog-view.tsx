import { DataTestId } from 'constants/data-test-id';

import { ChangeEvent, FC } from 'react';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { catalogSelector } from 'store/selectors';
import { changeCatalogView } from 'store/slices';

import { CatalogView } from './button-catalog-view.types';

import './button-catalog-view.scss';

export type ButtonCatalogViewProps = {
  id: CatalogView;
  value: CatalogView;
  dataTestId?: DataTestId;
};

export const ButtonCatalogView: FC<ButtonCatalogViewProps> = ({ id, value, dataTestId }) => {
  const { catalogView } = useAppSelector(catalogSelector);
  const dispatch = useAppDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { value: inputValue } = target;

    if (inputValue === CatalogView.Grid || inputValue === CatalogView.List) {
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
      <Sprite id={id === CatalogView.Grid ? SpriteId.Grid : SpriteId.List} className='button-catalog-view__logo' />
    </label>
  );
};
