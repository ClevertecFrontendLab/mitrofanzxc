import { TCatalogData, TCategories } from '../constants/constants.types';

import { translateCategoryTitle } from './translate-category-title';
import { ELanguage } from './utils.types';

export const handleFilter = (
  category: string | undefined,
  categoriesData: TCategories[],
  language: ELanguage,
  data: TCatalogData[]
) => {
  const categoryName = translateCategoryTitle(category, categoriesData, language);
  const temporaryData: TCatalogData[] = JSON.parse(JSON.stringify(data));

  switch (categoryName) {
    case 'Все книги':
      return temporaryData;
    default:
      return temporaryData.filter((element) => element.categories.includes(categoryName));
  }
};
