import { THandleCategory } from './utils.types';

export const handleCategory: THandleCategory = (currentCategory, categories) => {
  if (currentCategory === 'all') {
    return 'Все книги';
  }

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
