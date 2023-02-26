import { TBookData } from '../../constants/constants.types';

export type TBreadCrumbs = {
  bookData: TBookData;
  isSuccess: boolean;
  currentCategory: string | undefined;
};
