export type TMessage = 'free' | 'busy' | 'reserved';

export type TStringAble = string | null | undefined;

export type TNumberAble = number | null | undefined;

export type TBooking = {
  id: number;
  order: boolean;
  dateOrder: TStringAble;
  customerId: number;
  customerFirstName: TStringAble;
  customerLastName: TStringAble;
};

export type TDelivery = {
  id: number;
  handed: boolean;
  dateHandedFrom: TStringAble;
  dateHandedTo: TStringAble;
  recipientId: number;
  recipientFirstName: TStringAble;
  recipientLastName: TStringAble;
};

export type THistory = {
  id: number;
  userId: number;
};

export type TImage = {
  url: string;
};

export type TCatalogData = {
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
};

export type TComments = {
  id: string;
  rating: TNumberAble;
  text: TStringAble;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: TStringAble;
  };
};

export type TBookData = {
  id: number;
  title: TStringAble;
  rating: TNumberAble;
  issueYear: TStringAble;
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
  comments: TComments[] | null;
  booking: TBooking | null;
  delivery: TDelivery | null;
  histories: THistory[];
};

export type TCategories = {
  name: string;
  path: string;
  id: number;
};

export type TCategoryMockData = {
  path: string;
  name: string;
};

export type TSocialsMockData = {
  id: string;
  link: string;
  src: string;
};

export type TPATHS = {
  main: string;
  booksAll: string;
  booksCategory: string;
  bookPage: string;
  profile: string;
  terms: string;
  contract: string;
  any: string;
};
