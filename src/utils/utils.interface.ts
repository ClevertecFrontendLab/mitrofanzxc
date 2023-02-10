import { TIdTextField } from '../components';
import { ICatalogMockData, ICategoryMockData, TStringAble } from '../constants';

export type TTypeConvertToDate = 'full' | 'short';

export interface IConvertToDate {
  (timestamp: number, type: TTypeConvertToDate): string;
}

export interface IArrayICreateNavData {
  id: string;
  category: string;
  amount: number;
}

export interface ICreateNavData {
  (data: ICatalogMockData[]): IArrayICreateNavData[] | null;
}

export type TPartDivideTableDate = 'first' | 'second';

export type TArrayDivideTableData = Array<[string, TStringAble]>;

export interface IDivideTableData {
  (part: TPartDivideTableDate, bookInfo: ICatalogMockData | undefined): TArrayDivideTableData | null;
}

export interface IGetAmountOfBooks {
  (data: ICatalogMockData[], category: string): number;
}

export type TArrayGetUniqueCategories = string[];

export interface IGetUniqueCategories {
  (data: ICatalogMockData[]): TArrayGetUniqueCategories | null;
}

export interface IInterceptRequest {
  ({ isLoading, isSuccess }: { isLoading: boolean; isSuccess: boolean }): void;
}

export type TTypeSortData = 'default' | 'descending' | 'ascending';

export interface ISortData {
  (type: TTypeSortData): (a: ICatalogMockData, b: ICatalogMockData) => 0 | 1 | -1;
}

export interface ITranslateCategoryTitle {
  (data: ICatalogMockData | string | undefined, categories: ICategoryMockData[]): string;
}

export interface IValidateTextField {
  (value: string, id: TIdTextField): boolean;
}
