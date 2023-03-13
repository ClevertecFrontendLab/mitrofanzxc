import { CategoriesState } from '../slices.types';

export const initialState: CategoriesState = {
  categoriesData: [],
  isLoading: false,
  isError: false,
};
