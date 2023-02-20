import { FC } from 'react';

import { Sprite } from '..';

import { IRatingStar } from './rating.interface';

export const RatingStar: FC<IRatingStar> = ({ id, spriteId, onClick, onMouseEnter, onMouseLeave }) => (
  <button
    key={id}
    type='button'
    className='rating__item'
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Sprite id={spriteId} className='rating__logo' />
  </button>
);
