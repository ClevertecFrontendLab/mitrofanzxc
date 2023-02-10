import { FC } from 'react';

import { Sprite } from '..';

export interface IRatingStar {
  id: string;
  spriteId: string;
}

export const RatingStar: FC<IRatingStar> = ({ id, spriteId }) => (
  <li key={id} className='rating__item'>
    <Sprite id={spriteId} className='rating__logo' />
  </li>
);
