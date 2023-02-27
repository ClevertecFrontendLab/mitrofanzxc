import { CategoryList, TCatalogData, TCategories } from 'constants/constants.types';

import { Language } from './utils.types';

export const translateCategoryTitle = (
  categories: TCategories[] | CategoryList[],
  language: Language,
  data?: TCatalogData | string
): string => {
  if (data && typeof data === 'object') {
    const title = categories.find(({ path }) => data.categories.includes(path));

    if (title) {
      if (language === Language.En) {
        return title.name;
      }

      return title.path;
    }
  }

  if (data && typeof data === 'string') {
    if (language === Language.En) {
      if (data === 'all') {
        return 'Все книги';
      }

      const title = categories.find(({ path }) => path === data);

      if (title) {
        return title.name;
      }
    }
    if (language === Language.Ru) {
      if (data === 'Все книги') {
        return 'all';
      }

      const title = categories.find(({ name }) => name === data);

      if (title) {
        return title.path;
      }
    }
  }

  return 'Все книги';
};
