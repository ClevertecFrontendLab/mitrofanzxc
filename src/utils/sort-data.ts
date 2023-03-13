import { TCatalogData } from 'constants/constants.types';

import { Sort } from './utils.types';

export const sortData =
  (type: Sort) =>
  (a: TCatalogData, b: TCatalogData): 0 | 1 | -1 => {
    if (a.rating === null || a.rating === undefined) {
      if (type === Sort.Ascending) {
        return -1;
      }

      return 1;
    }

    if (b.rating === null || b.rating === undefined) {
      if (type !== Sort.Ascending) {
        return -1;
      }

      return 1;
    }

    if (type === Sort.Ascending) {
      return a.rating < b.rating ? -1 : 1;
    }

    if (type === Sort.Descending) {
      return a.rating < b.rating ? 1 : -1;
    }

    return 0;
  };
