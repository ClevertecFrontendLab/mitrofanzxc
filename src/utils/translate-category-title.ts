import { ITranslateCategoryTitle } from './utils.interface';

export const translateCategoryTitle: ITranslateCategoryTitle = (data, categories) => {
  if (data && typeof data === 'object') {
    const title = categories.find(({ eng }) => data.categories.includes(eng));

    if (title) {
      return title.ru;
    }
  } else if (typeof data === 'string') {
    const title = categories.find(({ eng }) => eng === data);

    if (title) {
      return title.ru;
    }
  }

  return 'Все книги';
};
