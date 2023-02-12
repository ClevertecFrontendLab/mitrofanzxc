import { ITranslateCategoryTitle } from './utils.interface';

export const translateCategoryTitle: ITranslateCategoryTitle = (data, categories) => {
  if (data && typeof data === 'object') {
    const title = categories.find(({ path }) => data.categories.includes(path));

    if (title) {
      return title.name;
    }
  } else if (typeof data === 'string') {
    const title = categories.find(({ path }) => path === data);

    if (title) {
      return title.name;
    }
  }

  return 'Все книги';
};
