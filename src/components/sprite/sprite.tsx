import { FC } from 'react';

import sprite from '../../assets/sprite.svg';

import { TSprite } from './sprite.types';

export const Sprite: FC<TSprite> = ({ id, className, onClick, dataTestId }) => (
  <svg className={className} onClick={onClick} data-testid={dataTestId}>
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);
