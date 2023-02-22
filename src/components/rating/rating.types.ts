import { TNumberAble } from '../../constants/constants.types';

export enum EStar {
  Empty = 'star',
  Fill = 'star-fill',
}

export type TRatingStar = {
  id?: string;
  spriteId: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type TRating = {
  rating: TNumberAble;
};
