import { ICatalogMockData } from '../constants';

export const getAmountOfBooks = (data: ICatalogMockData[], category: string) => {
  if (data && data.length > 0) {
    return data.filter((item) => item.category === category).length;
  }

  return 0;
};
