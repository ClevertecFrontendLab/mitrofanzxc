import { IDivideTableData, TArrayDivideTableData } from './utils.interface';

export const divideTableData: IDivideTableData = (part, bookData) => {
  if (bookData) {
    const arr: TArrayDivideTableData = Object.entries(bookData);
    const separator = Math.ceil(arr.length / 2);

    if (part === 'first') {
      return arr.slice(0, separator);
    }

    return arr.slice(separator);
  }

  return null;
};
