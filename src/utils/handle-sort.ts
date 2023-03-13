import { TCatalogData } from 'constants/constants.types';

import { sortData } from './sort-data';
import { Sort } from './utils.types';

export const handleSort = (sortState: Sort, data: TCatalogData[]) => {
  const temp: TCatalogData[] = JSON.parse(JSON.stringify(data));

  return temp.sort(sortData(sortState));
};
