/* eslint-disable-next-line import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

import { IArrayICreateNavData, ICreateNavData } from './utils.interface';
import { getAmountOfBooks, getUniqueCategories } from '.';

export const createNavData: ICreateNavData = (data) => {
  const arr: IArrayICreateNavData[] = [];
  const uniqueCategories = getUniqueCategories(data);

  if (uniqueCategories && uniqueCategories.length > 0) {
    for (let i = 0; i < uniqueCategories.length; i += 1) {
      const obj = { id: uuidv4(), category: uniqueCategories[i], amount: getAmountOfBooks(data, uniqueCategories[i]) };

      arr.push(obj);
    }

    return arr;
  }

  return null;
};
