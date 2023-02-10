import { ICatalogMockData } from '../constants';

export const getUniqueCategories = (data: ICatalogMockData[]) => {
  const arr = [];

  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += 1) {
      arr.push(data[i].category);
    }

    return Array.from(new Set(arr));
  }

  return null;
};
