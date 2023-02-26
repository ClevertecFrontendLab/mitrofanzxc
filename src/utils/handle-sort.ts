import { TCatalogData } from '../constants/constants.types';

import { sortData } from './sort-data';
import { ESort } from './utils.types';

export const handleSort = (sortState: ESort, data: TCatalogData[]) => {
  const temp: TCatalogData[] = JSON.parse(JSON.stringify(data));

  return temp.sort(sortData(sortState));
};
