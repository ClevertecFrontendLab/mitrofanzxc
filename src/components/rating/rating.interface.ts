import { TNumberAble } from '../../constants/constants.interface';

export interface IRatingStar {
  id?: string;
  spriteId: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface IRating {
  rating: TNumberAble;
}
