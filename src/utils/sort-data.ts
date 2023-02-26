import { ESort, TSortData } from './utils.types';

export const sortData: TSortData = (type) => (a, b) => {
  if (a.rating === null || a.rating === undefined) {
    if (type === ESort.Ascending) {
      return -1;
    }

    return 1;
  }

  if (b.rating === null || b.rating === undefined) {
    if (type !== ESort.Ascending) {
      return -1;
    }

    return 1;
  }

  if (type === ESort.Ascending) {
    return a.rating < b.rating ? -1 : 1;
  }

  if (type === ESort.Descending) {
    return a.rating < b.rating ? 1 : -1;
  }

  return 0;
};
