import { BookData } from 'constants/constants.types';

import { handleAuthors } from './handle-authors';
import { Part, TArrayDivideTableData } from './utils.types';

export const divideTableData = (part: Part, bookData: BookData): TArrayDivideTableData | null => {
  if (bookData) {
    const arr: TArrayDivideTableData = Array.of(
      Object.entries({ publish: bookData.publish }).flat(),
      Object.entries({ issueYear: bookData.issueYear }).flat(),
      Object.entries({ pages: bookData.pages }).flat(),
      Object.entries({ cover: bookData.cover }).flat(),
      Object.entries({ format: bookData.format }).flat(),
      Object.entries({ categories: handleAuthors(bookData.categories) }).flat(),
      Object.entries({ weight: bookData.weight }).flat(),
      Object.entries({ ISBN: bookData.ISBN }).flat(),
      Object.entries({ producer: bookData.producer }).flat()
    );

    const separator = Math.ceil(arr.length / 2);

    if (part === Part.First) {
      return arr.slice(0, separator);
    }

    return arr.slice(separator);
  }

  return null;
};
