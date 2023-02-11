export type TMessage = 'free' | 'busy' | 'reserved';
export type TStringAble = string | null | undefined;
export type TNumberAble = number | null | undefined;

export interface ICatalogMockData {
  issueYear: TStringAble;
  rating: TNumberAble;
  title: TStringAble;
  authors: string[];
  image: {
    url: TStringAble;
  };
  categories: string[];
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: TStringAble;
    customerId: number;
    customerFirstName: TStringAble;
    customerLastName: TStringAble;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: TStringAble;
    dateHandedTo: TStringAble;
    recipientId: number;
    recipientFirstName: TStringAble;
    recipientLastName: TStringAble;
  };
  histories: Array<{
    id: number;
    userId: number;
  }>;
}

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

// export interface ICatalogMockData {
//   id: string;
//   category: string;
//   rating: TNumberAble;
//   title: string;
//   author: string;
//   images: IImages[] | null | undefined;
//   status: IStatus;
//   descrtption: TStringAble;
//   info: IInfo;
//   reviews: IReviews[];
// }

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
