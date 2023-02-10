import { IGetAmountOfBooks } from './utils.interface';

export const getAmountOfBooks: IGetAmountOfBooks = (data, category) => {
  if (data && data.length > 0) {
    return data.filter((item) => item.category === category).length;
  }

  return 0;
};
