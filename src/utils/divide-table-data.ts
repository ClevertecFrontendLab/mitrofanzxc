import { ICatalogMockData } from '../constants';

export const divideTableData = (part: 'first' | 'second', bookInfo: ICatalogMockData | undefined) => {
  if (bookInfo && bookInfo.info) {
    const arr = Object.entries(bookInfo.info);
    const separator = Math.ceil(arr.length / 2);

    if (part === 'first') {
      return arr.slice(0, separator);
    }

    return arr.slice(separator);
  }

  return null;
};
