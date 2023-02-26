import { TNumberAble } from '../../constants/constants.types';
import { ESpriteId } from '../sprite/sprite.types';

export type TRatingStar = {
  id?: string;
  spriteId: ESpriteId;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type TRating = {
  rating: TNumberAble;
};
