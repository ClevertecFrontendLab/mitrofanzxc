import { TCatalogData, TCategories } from 'constants/constants.types';

import { translateCategoryTitle } from './translate-category-title';
import { Language } from './utils.types';

export const handleFilter = (
  categoriesData: TCategories[],
  language: Language,
  data: TCatalogData[],
  category?: string
) => {
  const categoryName = translateCategoryTitle(categoriesData, language, category);
  const temporaryData: TCatalogData[] = JSON.parse(JSON.stringify(data));

  switch (categoryName) {
    case 'Все книги':
      return temporaryData;
    default:
      return temporaryData.filter((element) => element.categories.includes(categoryName));
  }
};
