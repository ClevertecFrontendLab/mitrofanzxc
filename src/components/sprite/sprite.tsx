import { FC } from 'react';
import sprite from 'assets/sprite.svg';

import { SpriteId } from './sprite.types';

export type SpriteProps = {
  id: SpriteId;
  className: string;
  onClick?: () => void;
  dataTestId?: string;
};

export const Sprite: FC<SpriteProps> = ({ id, className, onClick, dataTestId }) => (
  <svg className={className} onClick={onClick} data-testid={dataTestId}>
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);
