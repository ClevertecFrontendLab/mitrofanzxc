import { TBooking, TDelivery, THistory, TImage, TNumberAble, TStringAble } from '../../constants/constants.types';
import { TCatalogView } from '../buttons';

export type TCard = {
  issueYear: TStringAble;
  rating: TNumberAble;
  title: string;
  authors: string[];
  image: TImage | null;
  categories: string[];
  id: number;
  booking: TBooking | null;
  delivery: TDelivery | null;
  histories: THistory[] | null;
  catalogView: TCatalogView;
  currentCategory: string | undefined;
};
