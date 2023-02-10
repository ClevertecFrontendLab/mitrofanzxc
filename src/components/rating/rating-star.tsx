import { FC } from 'react';

import { Sprite } from '..';

import { IRatingStar } from './rating.interface';

export const RatingStar: FC<IRatingStar> = ({ id, spriteId }) => (
  <li key={id} className='rating__item'>
    <Sprite id={spriteId} className='rating__logo' />
  </li>
);
