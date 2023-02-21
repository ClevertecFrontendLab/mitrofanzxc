import { TIdTextField } from '../components';
import {
  TBookData,
  TBooking,
  TCatalogData,
  TCategories,
  TCategoryMockData,
  TDelivery,
  TStringAble,
} from '../constants/constants.types';

export type TTypeConvertToDate = 'full' | 'short';

export type TStatus = 'free' | 'busy' | 'reserved';

export type THandleCategory = {
  (currentCategory: string | undefined, categories: string[]): string;
};

export type THandleStatus = {
  (booking: TBooking | null, delivery: TDelivery | null): TStatus;
};

export type THandleTitle = {
  (value: TStringAble, limeter: number): string;
};

export type TConvertToDate = {
  (timestamp: string, type: TTypeConvertToDate): string;
};

export type TPartDivideTableDate = 'first' | 'second';

export type TArrayDivideTableData = TStringAble[][];

export type TDivideTableData = {
  (part: TPartDivideTableDate, bookData: TBookData): TArrayDivideTableData | null;
};

export type TGetAmountOfBooks = {
  (data: TCatalogData[], category: string): number;
};

export type TInterceptRequest = {
  ({ isLoading, isSuccess }: { isLoading: boolean; isSuccess: boolean }): void;
};

export type TTypeSortData = 'descending' | 'ascending';

export type TSortData = {
  (type: TTypeSortData): (a: TCatalogData, b: TCatalogData) => 0 | 1 | -1;
};

export type TTranslateCategoryTitle = {
  (
    data: TCatalogData | string | undefined,
    categories: TCategories[] | TCategoryMockData[],
    language: 'en' | 'ru'
  ): string;
};

export type TValidateTextField = {
  (value: string, id: TIdTextField): boolean;
};
