import { IHandleCategory } from './utils.interface';

export const handleCategory: IHandleCategory = (currentCategory, categories) => {
  if (!categories || !categories.length) {
    if (currentCategory) {
      return 'Все книги';
    }
  }

  if (currentCategory) {
    if (categories.includes(currentCategory)) {
      return currentCategory;
    }
  }

  return categories[0];
};
