import { ReviewProps } from 'components/review/review';
import { SpriteId } from 'components/sprite/sprite.types';

export type StringAble = string | null | undefined;

export type NumberAble = number | null | undefined;

export type Booking = {
  id: number;
  order: boolean;
  dateOrder: StringAble;
  customerId: number;
  customerFirstName: StringAble;
  customerLastName: StringAble;
};

export type Delivery = {
  id: number;
  handed: boolean;
  dateHandedFrom: StringAble;
  dateHandedTo: StringAble;
  recipientId: number;
  recipientFirstName: StringAble;
  recipientLastName: StringAble;
};

export type Histories = {
  id: number;
  userId: number;
};

export type TImage = {
  url: string;
};

export type TCatalogData = {
  issueYear: StringAble;
  rating: NumberAble;
  title: string;
  authors: string[];
  image: TImage | null;
  categories: string[];
  id: number;
  booking: Booking | null;
  delivery: Delivery | null;
  histories: Histories[] | null;
};

export type BookData = {
  id: number;
  title: StringAble;
  rating: NumberAble;
  issueYear: StringAble;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: TImage[];
  categories: string[];
  comments: ReviewProps[] | null;
  booking: Booking | null;
  delivery: Delivery | null;
  histories: Histories[];
};

export type TCategories = {
  name: string;
  path: string;
  id: number;
};

export type CategoryList = {
  path: string;
  name: string;
};

export type SocialList = {
  id: string;
  link: string;
  src: SpriteId;
};
