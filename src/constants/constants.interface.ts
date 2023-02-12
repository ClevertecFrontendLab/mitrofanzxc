export type TMessage = 'free' | 'busy' | 'reserved';
export type TStringAble = string | null | undefined;
export type TNumberAble = number | null | undefined;

export interface IBooking {
  id: number;
  order: boolean;
  dateOrder: TStringAble;
  customerId: number;
  customerFirstName: TStringAble;
  customerLastName: TStringAble;
}

export interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: TStringAble;
  dateHandedTo: TStringAble;
  recipientId: number;
  recipientFirstName: TStringAble;
  recipientLastName: TStringAble;
}

export interface IHistory {
  id: number;
  userId: number;
}

export interface IImage {
  url: string;
}

export interface ICatalogData {
  issueYear: TStringAble;
  rating: TNumberAble;
  title: string;
  authors: string[];
  image: IImage | null;
  categories: string[];
  id: number;
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: IHistory[] | null;
}

export interface IComments {
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
}

export interface IBookData {
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
  images: IImage[];
  categories: string[];
  comments: IComments[] | null;
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: IHistory[];
}

export interface ICategories {
  name: string;
  path: string;
  id: number;
}

export interface ICategoryMockData {
  path: string;
  name: string;
}

export interface ISocialsMockData {
  id: string;
  link: string;
  src: string;
}

export interface IPATHS {
  main: string;
  booksAll: string;
  booksCategory: string;
  bookPage: string;
  profile: string;
  terms: string;
  contract: string;
  any: string;
}
