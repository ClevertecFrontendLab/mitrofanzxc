import { FC } from 'react';

import { Sprite } from '..';

import { TRatingStar } from './rating.types';

export const RatingStar: FC<TRatingStar> = ({ id, spriteId, onClick, onMouseEnter, onMouseLeave }) => (
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
