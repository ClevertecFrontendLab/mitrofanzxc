import { TSortData } from './utils.types';

export const sortData: TSortData = (type) => (a, b) => {
  if (a.rating === null || a.rating === undefined) {
    if (type === 'ascending') {
      return -1;
    }

    return 1;
  }

  if (b.rating === null || b.rating === undefined) {
    if (type !== 'ascending') {
      return -1;
    }

    return 1;
  }

  if (type === 'ascending') {
    return a.rating < b.rating ? -1 : 1;
  }

  if (type === 'descending') {
    return a.rating < b.rating ? 1 : -1;
  }

  return 0;
};
