import { ICatalogMockData, ICategoryMockData, ITableHeaderMockData, ITitlesMockData } from '../constants';

export const translateCategoryTitle = (
  data: ICatalogMockData | string | undefined,
  categories: ICategoryMockData[] | ITableHeaderMockData[] | ITitlesMockData[]
) => {
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

  return 'Категория';
};
