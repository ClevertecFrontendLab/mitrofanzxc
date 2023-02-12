import { handleAuthors } from './handle-authors';
import { IDivideTableData, TArrayDivideTableData } from './utils.interface';

export const divideTableData: IDivideTableData = (part, bookData) => {
  if (bookData) {
    const arr: TArrayDivideTableData =
      (Object.entries({ publish: bookData.publish }),
      Object.entries({ issueYear: bookData.issueYear }),
      Object.entries({ pages: bookData.pages }),
      Object.entries({ cover: bookData.cover }),
      Object.entries({ format: bookData.format }),
      Object.entries({ categories: handleAuthors(bookData.categories) }),
      Object.entries({ weight: bookData.weight }),
      Object.entries({ ISBN: bookData.ISBN }),
      Object.entries({ producer: bookData.producer }));

    const separator = Math.ceil(arr.length / 2);

    if (part === 'first') {
      return arr.slice(0, separator);
    }

    return arr.slice(separator);
  }

  return null;
};
