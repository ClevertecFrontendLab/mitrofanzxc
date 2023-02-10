import { FC } from 'react';

import sprite from '../../assets/sprite.svg';

export interface ISprite {
  id: string;
  className: string;
  onClick?: () => void;
  dataTestId?: string;
}

export const Sprite: FC<ISprite> = ({ id, className, onClick, dataTestId }) => (
  <svg className={className} onClick={onClick} data-testid={dataTestId}>
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);
