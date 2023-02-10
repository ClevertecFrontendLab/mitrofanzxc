import { FC } from 'react';

import sprite from '../../assets/sprite.svg';

import { ISprite } from './sprite.interface';

export const Sprite: FC<ISprite> = ({ id, className, onClick, dataTestId }) => (
  <svg className={className} onClick={onClick} data-testid={dataTestId}>
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);
