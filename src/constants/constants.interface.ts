export type TMessage = 'free' | 'busy' | 'reserved';
export type TStringAble = string | null | undefined;
export type TNumberAble = number | null | undefined;

export interface IReviews {
  id: string;
  src: string;
  author: string;
  timestamp: number;
  rating: TNumberAble;
  description: TStringAble;
}

export interface IImages {
  id: string;
  src: string;
}

export interface IStatus {
  message: TMessage;
  timestamp: TNumberAble;
}

export interface IInfo {
  publishingHouse: TStringAble;
  year: TStringAble;
  pages: TStringAble;
  binding: TStringAble;
  format: TStringAble;
  genre: TStringAble;
  weight: TStringAble;
  isbn: TStringAble;
  manufacturer: TStringAble;
}

export interface ICatalogMockData {
  id: string;
  category: string;
  rating: TNumberAble;
  title: string;
  author: string;
  images: IImages[] | null | undefined;
  status: IStatus;
  descrtption: TStringAble;
  info: IInfo;
  reviews: IReviews[];
}

export interface ICategoryMockData {
  eng: string;
  ru: string;
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

export interface ISocialsMockData {
  id: string;
  link: string;
  src: string;
}
