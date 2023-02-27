import { StringAble } from 'constants/constants.types';

export enum DateType {
  Full = 'full',
  Short = 'short',
}

export enum Status {
  Busy = 'busy',
  Reserved = 'reserved',
  Free = 'free',
}

export enum Sort {
  Ascending = 'ascending',
  Descending = 'descending',
}

export enum Language {
  En = 'en',
  Ru = 'ru',
}

export enum Part {
  First = 'first',
  Second = 'second',
}

export type TArrayDivideTableData = StringAble[][];
