import { IDivideTableData, TArrayDivideTableData } from './utils.interface';

export const divideTableData: IDivideTableData = (part, bookInfo) => {
  if (bookInfo && bookInfo.info) {
    const arr: TArrayDivideTableData = Object.entries(bookInfo.info);
    const separator = Math.ceil(arr.length / 2);

    if (part === 'first') {
      return arr.slice(0, separator);
    }

    return arr.slice(separator);
  }

  return null;
};
