import { FC } from 'react';
import { Sprite } from 'components';
import { SpriteId } from 'components/sprite/sprite.types';

export type RatingStarProps = {
  id?: string;
  spriteId: SpriteId;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const RatingStar: FC<RatingStarProps> = ({ id, spriteId, onClick, onMouseEnter, onMouseLeave }) => (
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
