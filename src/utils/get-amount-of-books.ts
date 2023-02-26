import { TGetAmountOfBooks } from './utils.types';

export const getAmountOfBooks: TGetAmountOfBooks = (data, category) => {
  if (data && data.length > 0) {
    return data.filter((item) => item.categories.includes(category)).length;
  }

  return 0;
};
