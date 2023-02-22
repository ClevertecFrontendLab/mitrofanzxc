import { ETextFieldId } from '../components/text-field/text-field.types';
import {
  TBookData,
  TBooking,
  TCatalogData,
  TCategories,
  TCategoryMockData,
  TDelivery,
  TStringAble,
} from '../constants/constants.types';

export enum EDate {
  Full = 'full',
  Short = 'short',
}

export enum EStatus {
  Busy = 'busy',
  Reserved = 'reserved',
  Free = 'free',
}

export enum ESort {
  Ascending = 'ascending',
  Descending = 'descending',
}

export enum ELanguage {
  En = 'en',
  Ru = 'ru',
}

export enum EPart {
  First = 'first',
  Second = 'second',
}

export type THandleCategory = {
  (currentCategory: string | undefined, categories: string[]): string;
};

export type THandleStatus = {
  (booking: TBooking | null, delivery: TDelivery | null): EStatus;
};

export type THandleTitle = {
  (value: TStringAble, limeter: number): string;
};

export type TConvertToDate = {
  (timestamp: string, type: EDate): string;
};

export type TArrayDivideTableData = TStringAble[][];

export type TDivideTableData = {
  (part: EPart, bookData: TBookData): TArrayDivideTableData | null;
};

export type TGetAmountOfBooks = {
  (data: TCatalogData[], category: string): number;
};

export type TInterceptRequest = {
  ({ isLoading, isSuccess }: { isLoading: boolean; isSuccess: boolean }): void;
};

export type TSortData = {
  (type: ESort): (a: TCatalogData, b: TCatalogData) => 0 | 1 | -1;
};

export type TTranslateCategoryTitle = {
  (
    data: TCatalogData | string | undefined,
    categories: TCategories[] | TCategoryMockData[],
    language: ELanguage
  ): string;
};

export type TValidateTextField = {
  (value: string, id: ETextFieldId): boolean;
};
