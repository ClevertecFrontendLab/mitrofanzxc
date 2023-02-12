import { TIdTextField } from '../components';
import {
  IBookData,
  IBooking,
  ICatalogData,
  ICategories,
  ICategoryMockData,
  IDelivery,
  TStringAble,
} from '../constants/constants.interface';

export type TTypeConvertToDate = 'full' | 'short';
export type TStatus = 'free' | 'busy' | 'reserved';

export interface IHandleCategory {
  (currentCategory: string | undefined, categories: string[]): string;
}

export interface IHandleStatus {
  (booking: IBooking | null, delivery: IDelivery | null): TStatus;
}

export interface IHandleTitle {
  (value: TStringAble, limeter: number): string;
}

export interface IConvertToDate {
  (timestamp: string, type: TTypeConvertToDate): string;
}

export interface IArrayICreateNavData {
  id: string;
  category: string;
  amount: number;
}

export interface ICreateNavData {
  (data: ICatalogData[]): IArrayICreateNavData[] | null;
}

export type TPartDivideTableDate = 'first' | 'second';

// export type TArrayDivideTableData = Array<[string, string]>;
export type TArrayDivideTableData = TStringAble[][];

export interface IDivideTableData {
  (part: TPartDivideTableDate, bookData: IBookData): TArrayDivideTableData | null;
}

export interface IGetAmountOfBooks {
  (data: ICatalogData[], category: string): number;
}

export type TArrayGetUniqueCategories = string[];

export interface IGetUniqueCategories {
  (data: ICatalogData[]): TArrayGetUniqueCategories | null;
}

export interface IInterceptRequest {
  ({ isLoading, isSuccess }: { isLoading: boolean; isSuccess: boolean }): void;
}

export type TTypeSortData = 'default' | 'descending' | 'ascending';

export interface ISortData {
  (type: TTypeSortData): (a: ICatalogData, b: ICatalogData) => 0 | 1 | -1;
}

export interface ITranslateCategoryTitle {
  (
    data: ICatalogData | string | undefined,
    categories: ICategories[] | ICategoryMockData[],
    language: 'en' | 'ru'
  ): string;
}

export interface IValidateTextField {
  (value: string, id: TIdTextField): boolean;
}
