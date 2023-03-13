import { TCatalogData } from 'constants/constants.types';

export const getAmountOfBooks = (data: TCatalogData[], category: string): number => {
  if (data && data.length > 0) {
    return data.filter((item) => item.categories.includes(category)).length;
  }

  return 0;
};
