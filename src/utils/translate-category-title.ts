import { ITranslateCategoryTitle } from './utils.interface';

export const translateCategoryTitle: ITranslateCategoryTitle = (data, categories) => {
  if (data && typeof data === 'object') {
    const ruTitle = categories.find(({ eng }) => eng === data.category);

    if (ruTitle) {
      return ruTitle.ru;
    }
  } else if (typeof data === 'string') {
    const ruTitle = categories.find(({ eng }) => eng === data);

    if (ruTitle) {
      return ruTitle.ru;
    }
  }

  return 'Все книги';
};
