import { ITranslateCategoryTitle } from './utils.interface';

export const translateCategoryTitle: ITranslateCategoryTitle = (data, categories, language) => {
  if (data && typeof data === 'object') {
    const title = categories.find(({ path }) => data.categories.includes(path));

    if (title) {
      if (language === 'en') {
        return title.name;
      }

      return title.path;
    }
  }

  if (data && typeof data === 'string') {
    if (language === 'en') {
      const title = categories.find(({ path }) => path === data);

      if (title) {
        return title.name;
      }
    }
    if (language === 'ru') {
      const title = categories.find(({ name }) => name === data);

      if (title) {
        return title.path;
      }
    }
  }

  return 'Все книги';
};
