import { IBookData } from '../../constants/constants.interface';

export interface IBreadCrumbs {
  bookData: IBookData;
  isSuccess: boolean;
  currentCategory: string | undefined;
}
