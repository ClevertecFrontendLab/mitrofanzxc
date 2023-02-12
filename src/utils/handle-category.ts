import { IHandleCategory } from './utils.interface';

export const handleCategory: IHandleCategory = (currentCategory, categories) => {
  if (currentCategory) {
    if (categories.includes(currentCategory)) {
      return currentCategory;
    }
  }

  return categories[0];
};