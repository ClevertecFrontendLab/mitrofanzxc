import { IGetUniqueCategories, TArrayGetUniqueCategories } from './utils.interface';

export const getUniqueCategories: IGetUniqueCategories = (data) => {
  const arr: TArrayGetUniqueCategories = [];

  if (data && data.length > 0) {
    for (let i = 0; i < data.length; i += 1) {
      arr.push(...data[i].categories);
    }

    return Array.from(new Set(arr));
  }

  return null;
};
